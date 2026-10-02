const ByteBuffer = require('bytebuffer');
const EventEmitter = require('events').EventEmitter;
const { ShareCode } = require('globaloffensive-sharecode');
const SteamID = require('steamid');
const Util = require('util');

const Language = require('./language.js');
const Protos = require('./protobufs/generated/_load.js');
const Constants = require('./constants.js');
const decodeInspectLink = require('./lib/inspect-link.js');
const { request, RequestError } = require('./lib/request.js');
NodeCS2.RequestError = RequestError;

const STEAM_APPID = Constants.STEAM_APPID;

module.exports = NodeCS2;

Util.inherits(NodeCS2, EventEmitter);

function NodeCS2(steam) {
	if (steam.packageName != 'steam-user' || !steam.packageVersion || !steam.constructor) {
		throw new Error('globaloffensive v2 only supports steam-user v4.2.0 or later.');
	} else {
		const [major, minor] = steam.packageVersion.split('.');
		if (major < 4 || (major == 4 && minor < 2)) {
			throw new Error(
				`globaloffensive v2 only supports steam-user v4.2.0 or later. ${steam.constructor.name} v${steam.packageVersion} given.`
			);
		}
	}

	this._steam = steam;
	this.haveGCSession = false;
	this._isInCSGO = false;
	this._transportListeners = [];
	const listen = (event, listener) => {
		this._transportListeners.push([event, listener]);
		this._steam.on(event, listener);
	};

	listen('receivedFromGC', (appid, msgType, payload) => {
		if (appid != STEAM_APPID) {
			return; // we don't care
		}

		const isProtobuf = !Buffer.isBuffer(payload);
		let handler = null;

		if (this._handlers[msgType]) {
			handler = this._handlers[msgType];
		}

		let msgName = msgType;
		for (const i in Language) {
			if (Language.hasOwnProperty(i) && Language[i] == msgType) {
				msgName = i;
				break;
			}
		}

		this.emit(
			'debug',
			'Got ' + (handler ? 'handled' : 'unhandled') + ' GC message ' + msgName + (isProtobuf ? ' (protobuf)' : '')
		);
		if (handler) {
			handler.call(this, isProtobuf ? payload : ByteBuffer.wrap(payload, ByteBuffer.LITTLE_ENDIAN));
		}
	});

	listen('appLaunched', (appid) => {
		if (this._isInCSGO) {
			return; // we don't care if it was launched again
		}

		if (appid == STEAM_APPID) {
			this._isInCSGO = true;
			if (!this.haveGCSession) {
				this._connect();
			}
		}
	});

	const handleAppQuit = (emitDisconnectEvent) => {
		clearTimeout(this._helloTimer);
		this._helloTimer = null;
		this.cancelPendingRequests('DISCONNECTED');
		if (this._helloInterval) {
			clearInterval(this._helloInterval);
			this._helloInterval = null;
		}

		if (this.haveGCSession && emitDisconnectEvent) {
			this.emit('disconnectedFromGC', NodeCS2.GCConnectionStatus.NO_SESSION);
		}

		this._isInCSGO = false;
		this.haveGCSession = false;
	};

	listen('appQuit', (appid) => {
		if (!this._isInCSGO) {
			return;
		}

		if (appid == STEAM_APPID) {
			handleAppQuit(false);
		}
	});

	listen('disconnected', () => {
		handleAppQuit(true);
	});

	listen('error', (err) => {
		handleAppQuit(true);
	});
}

NodeCS2.prototype._connect = function () {
	if (!this._isInCSGO || this._helloTimer) {
		this.emit('debug', 'Not trying to connect due to ' + (!this._isInCSGO ? 'not in CS:GO' : 'has helloTimer'));
		return; // We're not in CS:GO or we're already trying to connect
	}

	const sendHello = () => {
		if (!this._isInCSGO) {
			this.emit('debug', "Not sending hello because we're no longer in CS:GO");
			delete this._helloTimer;
			return;
		} else if (this.haveGCSession) {
			this.emit('debug', 'Not sending hello because we have a session');
			clearTimeout(this._helloTimer);
			delete this._helloTimer;
			return;
		}

		this._send(Language.ClientHello, Protos.CMsgClientHello, {
			version: Constants.GC_HELLO_VERSION,
			client_session_need: 0,
			client_launcher: 0,
			steam_launcher: 0
		});

		this._helloTimerMs = Math.min(
			Constants.HELLO_BACKOFF_MAX_MS,
			(this._helloTimerMs || Constants.HELLO_BACKOFF_START_MS) * 2
		); // exponential backoff, max 60 seconds
		this._helloTimer = setTimeout(sendHello, this._helloTimerMs);
		this.emit('debug', `Sending hello, setting timer for next attempt to ${this._helloTimerMs} ms`);
	};

	this._helloTimer = setTimeout(sendHello, Constants.HELLO_INITIAL_DELAY_MS);
};

NodeCS2.prototype.helloGC = function () {
	this._connect();
};

NodeCS2.prototype._send = function (type, protobuf, body) {
	if (this._disposed || !this._steam.steamID) {
		return false;
	}

	let msgName = type;
	for (const i in Language) {
		if (Language[i] == type) {
			msgName = i;
			break;
		}
	}

	this.emit('debug', 'Sending GC message ' + msgName);

	if (protobuf) {
		this._steam.sendToGC(STEAM_APPID, type, {}, protobuf.encode(body).finish());
	} else {
		// This is a ByteBuffer
		this._steam.sendToGC(STEAM_APPID, type, null, body.flip().toBuffer());
	}

	return true;
};

NodeCS2.prototype.requestGame = function (shareCodeOrDetails) {
	if (typeof shareCodeOrDetails == 'string') {
		shareCodeOrDetails = new ShareCode(shareCodeOrDetails).decode();
	}

	if (typeof shareCodeOrDetails != 'object' || !shareCodeOrDetails) {
		throw new Error('shareCodeOrDetails must be a sharecode or an object with properties matchId, outcomeId, token');
	}

	const requiredProps = ['matchId', 'outcomeId', 'token'];
	requiredProps.sort();
	const extantProps = Object.keys(shareCodeOrDetails);
	extantProps.sort();
	if (extantProps.join() != requiredProps.join()) {
		throw new Error('shareCodeOrDetails must be a sharecode or an object with properties matchId, outcomeId, token');
	}

	this._send(Language.MatchListRequestFullGameInfo, Protos.CMsgGCCStrike15_v2_MatchListRequestFullGameInfo, {
		matchid: shareCodeOrDetails.matchId,
		outcomeid: shareCodeOrDetails.outcomeId,
		token: shareCodeOrDetails.token
	});
};

NodeCS2.prototype.requestLiveGames = function () {
	this._send(Language.MatchListRequestCurrentLiveGames, Protos.CMsgGCCStrike15_v2_MatchListRequestCurrentLiveGames, {});
};

NodeCS2.prototype.requestRecentGames = function (steamid) {
	if (typeof steamid === 'string') {
		steamid = new SteamID(steamid);
	}

	if (
		!steamid.isValid() ||
		steamid.universe != SteamID.Universe.PUBLIC ||
		steamid.type != SteamID.Type.INDIVIDUAL ||
		steamid.instance != SteamID.Instance.DESKTOP
	) {
		return false;
	}

	this._send(Language.MatchListRequestRecentUserGames, Protos.CMsgGCCStrike15_v2_MatchListRequestRecentUserGames, {
		accountid: steamid.accountid
	});
};

NodeCS2.prototype.requestLiveGameForUser = function (steamid) {
	if (typeof steamid === 'string') {
		steamid = new SteamID(steamid);
	}

	if (
		!steamid.isValid() ||
		steamid.universe != SteamID.Universe.PUBLIC ||
		steamid.type != SteamID.Type.INDIVIDUAL ||
		steamid.instance != SteamID.Instance.DESKTOP
	) {
		return false;
	}

	this._send(Language.MatchListRequestLiveGameForUser, Protos.CMsgGCCStrike15_v2_MatchListRequestLiveGameForUser, {
		accountid: steamid.accountid
	});
};

NodeCS2.prototype.inspectItem = function (owner, assetid, d, callback) {
	if (typeof owner === 'string') {
		const decoded = decodeInspectLink(owner);
		if (decoded) {
			const item = this._normalizeInspectItem(decoded);
			const cb = [assetid, d, callback].find((value) => typeof value === 'function');
			const deliver = (resolve) =>
				setImmediate(() => {
					resolve(item);
					this.emit('inspectItemInfo', item);
					this.emit('inspectItemInfo#' + item.itemid, item);
				});
			if (cb) {
				deliver(cb);
				return;
			}
			return new Promise(deliver);
		}
	}

	let match;
	let ownerKind;
	if (typeof owner === 'string' && (match = owner.match(/([SM])(\d+)A(\d+)D(\d+)$/))) {
		callback = assetid;
		ownerKind = match[1];
		owner = match[2];
		assetid = match[3];
		d = match[4];
	}

	// protobufjs coerces and wraps invalid integers; reject before any send and use
	// canonical keys so a response without leading zeroes reaches its request.
	const uint64 = (value, field) => {
		if (typeof value === 'number' && Number.isSafeInteger(value) && value >= 0) value = String(value);
		if (typeof value !== 'string' || !/^\d+$/.test(value) || BigInt(value) > 18446744073709551615n) {
			throw new RangeError(`${field} must be a uint64 decimal string or a safe non-negative integer`);
		}
		return BigInt(value).toString();
	};
	if (owner && typeof owner === 'object') owner = owner.toString();
	owner = uint64(owner, 'owner');
	assetid = uint64(assetid, 'assetid');
	d = uint64(d, 'd');
	const msg = { param_a: assetid, param_d: d, param_s: 0, param_m: 0 };
	let validSteamID = false;
	try {
		const sid = new SteamID(owner);
		validSteamID =
			sid.isValid() &&
			sid.universe === SteamID.Universe.PUBLIC &&
			sid.type === SteamID.Type.INDIVIDUAL &&
			sid.instance === SteamID.Instance.DESKTOP;
	} catch (error) {
		/* Non-SteamID uint64 values identify market listings. */
	}
	if (ownerKind === 'S' && !validSteamID) throw new RangeError('S owner must be a valid individual SteamID');
	if (ownerKind === 'M' || (!ownerKind && !validSteamID)) msg.param_m = owner;
	else msg.param_s = owner;

	return request(
		this,
		{
			key: 'inspect:' + assetid,
			event: 'inspectItemInfo#' + assetid,
			timeout: this._inspectTimeout || Constants.INSPECT_ITEM_TIMEOUT_MS,
			message: `Inspect item timed out for assetid: ${assetid}`,
			onTimeout: () => {
				this.emit('inspectItemTimedOut', assetid);
				this.emit('inspectItemTimedOut#' + assetid, assetid);
			},
			send: () =>
				this._send(
					Language.Client2GCEconPreviewDataBlockRequest,
					Protos.CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest,
					msg
				)
		},
		callback &&
			((error, item) => {
				if (!error) callback(item);
			})
	);
};

NodeCS2.prototype.requestPlayersProfile = function (steamid, callback) {
	if (typeof steamid == 'string') {
		steamid = new SteamID(steamid);
	}

	if (
		!steamid.isValid() ||
		steamid.universe != SteamID.Universe.PUBLIC ||
		steamid.type != SteamID.Type.INDIVIDUAL ||
		steamid.instance != SteamID.Instance.DESKTOP
	) {
		if (callback) {
			callback(new Error('Invalid SteamID'));
			return false;
		}
		return Promise.reject(new Error('Invalid SteamID'));
	}

	return request(
		this,
		{
			key: 'profile:' + steamid.getSteamID64(),
			event: 'playersProfile#' + steamid.getSteamID64(),
			mutation: false,
			timeout: this._profileTimeout || Constants.PROFILE_TIMEOUT_MS,
			message: 'requestPlayersProfile timed out',
			send: () =>
				this._send(Language.ClientRequestPlayersProfile, Protos.CMsgGCCStrike15_v2_ClientRequestPlayersProfile, {
					account_id: steamid.accountid,
					request_level: Constants.PLAYERS_PROFILE_REQUEST_LEVEL
				})
		},
		callback && ((error, value) => callback(error || value))
	);
};

/**
 * Rename an item in your inventory using a name tag.
 * @param {int} nameTagId
 * @param {int} itemId
 * @param {string} name
 */
NodeCS2.prototype.nameItem = function (nameTagId, itemId, name) {
	const buffer = new ByteBuffer(18 + Buffer.byteLength(name), ByteBuffer.LITTLE_ENDIAN);
	buffer.writeUint64(nameTagId);
	buffer.writeUint64(itemId);
	buffer.writeByte(0x00); // unknown
	buffer.writeCString(name);
	this._send(Language.NameItem, null, buffer);
};

/**
 * Permanently delete an item from your inventory.
 * @param {int} itemId
 */
NodeCS2.prototype.deleteItem = function (itemId) {
	const buffer = new ByteBuffer(8, ByteBuffer.LITTLE_ENDIAN);
	buffer.writeUint64(itemId);
	this._send(Language.Delete, null, buffer);
};

/**
 * Craft some items using a given recipe.
 * @param {int[]} items - IDs of items to craft
 * @param {int} recipe - The ID of the recipe to use
 */
NodeCS2.prototype.craft = function (items, recipe) {
	const buffer = new ByteBuffer(2 + 2 + 8 * items.length, ByteBuffer.LITTLE_ENDIAN);
	buffer.writeInt16(recipe);
	buffer.writeInt16(items.length);
	for (let i = 0; i < items.length; i++) {
		buffer.writeUint64(items[i]);
	}

	this._send(Language.Craft, null, buffer);
};

// Storage units
/**
 * Put an item from your inventory into a casket (aka a storage unit).
 * @param {int} casketId
 * @param {int} itemId
 */
NodeCS2.prototype.addToCasket = function (casketId, itemId) {
	this._send(Language.CasketItemAdd, Protos.CMsgCasketItem, {
		casket_item_id: casketId,
		item_item_id: itemId
	});
};

/**
 * Remove an item from a casket (aka a storage unit) into your inventory.
 * @param {int} casketId
 * @param {int} itemId
 */
NodeCS2.prototype.removeFromCasket = function (casketId, itemId) {
	this._send(Language.CasketItemExtract, Protos.CMsgCasketItem, {
		casket_item_id: casketId,
		item_item_id: itemId
	});
};

/**
 * Get the contents of a casket (aka a storage unit).
 * @param {int} casketId
 * @param {function} callback - Optional callback. If not provided, returns a Promise.
 * @returns {Promise|undefined} Returns a Promise if no callback is provided
 */
NodeCS2.prototype.getCasketContents = function (casketId, callback) {
	// First see if we already have this casket's contents in our inventory
	const casketItem = (this.inventory || []).find((item) => item.id == casketId);
	if (!casketItem) {
		const error = new Error(`No casket matching ID ${casketId} was found`);
		if (callback) {
			callback(error);
			return;
		}
		return Promise.reject(error);
	}

	if (!casketItem.casket_contained_item_count) {
		// Casket is empty, I guess
		if (callback) {
			callback(null, []);
			return;
		}
		return Promise.resolve([]);
	}

	const loadedItems = this.inventory.filter((item) => item.casket_id == casketId);
	if (loadedItems.length == casketItem.casket_contained_item_count) {
		if (callback) {
			callback(null, loadedItems);
			return;
		}
		return Promise.resolve(loadedItems);
	}

	// We need to load casket contents from the GC
	return request(
		this,
		{
			key: 'item:' + casketId,
			event: 'itemCustomizationNotification',
			timeout: this._casketTimeout || Constants.CASKET_TIMEOUT_MS,
			message: 'Loading casket contents timed out',
			match: (ids, type) =>
				ids[0] === String(casketId) && type === NodeCS2.ItemCustomizationNotification.CasketContents,
			map: () => this.inventory.filter((item) => item.casket_id == casketId),
			send: () =>
				this._send(Language.CasketItemLoadContents, Protos.CMsgCasketItem, {
					casket_item_id: casketId,
					item_item_id: casketId
				})
		},
		callback
	);
};

// ============================================================================
// Volatile Items
// ============================================================================

/**
 * Load the contents of a volatile item (rental item, temporary item).
 * @param {int} volatileItemId - The ID of the volatile item
 * @param {function} callback - Optional callback. If not provided, returns a Promise.
 * @returns {Promise|undefined} Returns a Promise if no callback is provided
 */
NodeCS2.prototype.loadVolatileItemContents = function (volatileItemId, callback) {
	// Similar to getCasketContents, but for volatile items
	const volatileItem = (this.inventory || []).find((item) => item.id == volatileItemId);
	if (!volatileItem) {
		const error = new Error(`No volatile item matching ID ${volatileItemId} was found`);
		if (callback) {
			callback(error);
			return;
		}
		return Promise.reject(error);
	}

	return request(
		this,
		{
			// Share the item lane with mutations: no unique request id exists here.
			key: 'item:' + volatileItemId,
			event: 'itemCustomizationNotification',
			timeout: this._volatileItemTimeout || Constants.VOLATILE_ITEM_TIMEOUT_MS,
			message: 'Loading volatile item contents timed out',
			match: (ids, type) =>
				ids[0] === String(volatileItemId) && type === NodeCS2.ItemCustomizationNotification.CasketContents,
			map: () => this.inventory.filter((item) => item.volatile_item_id == volatileItemId || item.id == volatileItemId),
			send: () =>
				this._send(Language.VolatileItemLoadContents, Protos.CMsgCasketItem, {
					casket_item_id: volatileItemId,
					item_item_id: volatileItemId
				})
		},
		callback
	);
};

/**
 * Claim a reward from a volatile item.
 * Note: Response comes via ItemCustomizationNotification.
 * @param {int} defindex - The definition index of the volatile item
 * @param {function} callback - Optional callback. If not provided, returns a Promise.
 * @returns {Promise|undefined} Returns a Promise if no callback is provided
 */
NodeCS2.prototype.claimVolatileItemReward = function (defindex, callback) {
	// VolatileItemClaimReward doesn't have a protobuf message definition
	// Send as empty ByteBuffer - response comes via ItemCustomizationNotification
	const buffer = new ByteBuffer(4, ByteBuffer.LITTLE_ENDIAN);
	buffer.writeUint32(defindex);
	return request(
		this,
		{
			key: 'reward:free',
			event: 'itemCustomizationNotification',
			mutation: true,
			timeout: this._volatileItemTimeout || Constants.VOLATILE_ITEM_TIMEOUT_MS,
			message: 'claimVolatileItemReward timed out',
			match: (ids, type) => type === NodeCS2.ItemCustomizationNotification.ClientRedeemFreeReward,
			send: () => this._send(Language.VolatileItemClaimReward, null, buffer)
		},
		callback
	);
};

/**
 * Acknowledge rental expiration for a crate/item.
 * @param {int} crateItemId - The ID of the crate/item
 */
NodeCS2.prototype.acknowledgeRentalExpiration = function (crateItemId) {
	this._send(Language.AcknowledgeRentalExpiration, Protos.CMsgAcknowledgeRentalExpiration, {
		crate_item_id: crateItemId
	});
};

// ============================================================================
// Recurring Missions
// ============================================================================

/**
 * Request the recurring mission schedule.
 * @param {function} callback - Optional callback. If not provided, returns a Promise.
 * @returns {Promise|undefined} Returns a Promise if no callback is provided
 */
NodeCS2.prototype.requestRecurringMissionSchedule = function (callback) {
	return request(
		this,
		{
			key: 'missionSchedule',
			event: 'recurringMissionSchema',
			mutation: false,
			timeout: this._missionTimeout || Constants.MISSION_TIMEOUT_MS,
			message: 'requestRecurringMissionSchedule timed out',
			send: () => this._send(Language.RequestRecurringMissionSchedule, Protos.CMsgRequestRecurringMissionSchedule, {})
		},
		callback
	);
};

// ============================================================================
// XP Shop & Rewards
// ============================================================================

/**
 * Acknowledge XP shop tracks.
 */
NodeCS2.prototype.acknowledgeXPShopTracks = function () {
	this._send(Language.Client2GcAckXPShopTracks, Protos.CMsgGCCStrike15_v2_Client2GcAckXPShopTracks, {});
};

/**
 * Redeem a free reward.
 * @param {int} generationTime - Generation time of the reward
 * @param {int} redeemableBalance - Redeemable balance
 * @param {int[]} items - Array of item IDs
 * @param {function} callback - Optional callback. If not provided, returns a Promise.
 * @returns {Promise|undefined} Returns a Promise if no callback is provided
 */
NodeCS2.prototype.redeemFreeReward = function (generationTime, redeemableBalance, items, callback) {
	return request(
		this,
		{
			key: 'reward:free',
			event: 'itemCustomizationNotification',
			mutation: true,
			timeout: this._rewardTimeout || Constants.REWARD_TIMEOUT_MS,
			message: 'redeemFreeReward timed out',
			match: (ids, type) => type === NodeCS2.ItemCustomizationNotification.ClientRedeemFreeReward,
			send: () =>
				this._send(Language.ClientRedeemFreeReward, Protos.CMsgGCCstrike15_v2_ClientRedeemFreeReward, {
					generation_time: generationTime,
					redeemable_balance: redeemableBalance,
					items: items || []
				})
		},
		callback
	);
};

/**
 * Redeem a mission reward.
 * @param {int} campaignId - Campaign ID
 * @param {int} redeemId - Redeem ID
 * @param {int} redeemableBalance - Redeemable balance
 * @param {int} expectedCost - Expected cost
 * @param {int} bidControl - Bid control (optional)
 * @param {function} callback - Optional callback. If not provided, returns a Promise.
 * @returns {Promise|undefined} Returns a Promise if no callback is provided
 */
NodeCS2.prototype.redeemMissionReward = function (
	campaignId,
	redeemId,
	redeemableBalance,
	expectedCost,
	bidControl,
	callback
) {
	// Handle optional bidControl parameter
	if (typeof bidControl === 'function') {
		callback = bidControl;
		bidControl = undefined;
	}

	return request(
		this,
		{
			key: 'reward:mission',
			event: 'itemCustomizationNotification',
			mutation: true,
			timeout: this._rewardTimeout || Constants.REWARD_TIMEOUT_MS,
			message: 'redeemMissionReward timed out',
			match: (ids, type) => type === NodeCS2.ItemCustomizationNotification.ClientRedeemMissionReward,
			send: () =>
				this._send(Language.ClientRedeemMissionReward, Protos.CMsgGCCstrike15_v2_ClientRedeemMissionReward, {
					campaign_id: campaignId,
					redeem_id: redeemId,
					redeemable_balance: redeemableBalance,
					expected_cost: expectedCost,
					bid_control: bidControl
				})
		},
		callback
	);
};

// ============================================================================
// Premier Season & Leaderboards
// ============================================================================

/**
 * Set player leaderboard safe name.
 * @param {string} leaderboardSafeName - The safe name for leaderboards
 */
NodeCS2.prototype.setLeaderboardSafeName = function (leaderboardSafeName) {
	if (!leaderboardSafeName || typeof leaderboardSafeName !== 'string') {
		throw new Error('leaderboardSafeName must be a non-empty string');
	}

	this._send(Language.SetPlayerLeaderboardSafeName, Protos.CMsgGCCStrike15_v2_SetPlayerLeaderboardSafeName, {
		leaderboard_safe_name: leaderboardSafeName
	});
};

// ============================================================================
// Crate Opening
// ============================================================================

/**
 * Open a crate.
 * @param {int} toolItemId - The ID of the tool (key) item
 * @param {int} subjectItemId - The ID of the crate item
 * @param {boolean} forRental - Whether this is for a rental (optional)
 * @param {int} pointsRemaining - Points remaining (optional)
 * @param {int} volatileLimit - Volatile limit (optional)
 * @param {function} callback - Optional callback. If not provided, returns a Promise.
 * @returns {Promise|undefined} Returns a Promise if no callback is provided
 */
NodeCS2.prototype.openCrate = function (
	toolItemId,
	subjectItemId,
	forRental,
	pointsRemaining,
	volatileLimit,
	callback
) {
	// Handle optional parameters
	if (typeof forRental === 'function') {
		callback = forRental;
		forRental = undefined;
		pointsRemaining = undefined;
		volatileLimit = undefined;
	} else if (typeof pointsRemaining === 'function') {
		callback = pointsRemaining;
		pointsRemaining = undefined;
		volatileLimit = undefined;
	} else if (typeof volatileLimit === 'function') {
		callback = volatileLimit;
		volatileLimit = undefined;
	}

	return request(
		this,
		{
			key: 'item:' + subjectItemId,
			event: 'itemCustomizationNotification',
			mutation: true,
			timeout: this._crateTimeout || Constants.CRATE_TIMEOUT_MS,
			message: 'openCrate timed out',
			match: (ids, type) =>
				type === NodeCS2.ItemCustomizationNotification.UnlockCrate && ids.includes(String(subjectItemId)),
			send: () =>
				this._send(Language.OpenCrate, Protos.CMsgOpenCrate, {
					tool_item_id: toolItemId,
					subject_item_id: subjectItemId,
					for_rental: forRental,
					points_remaining: pointsRemaining,
					volatile_limit: volatileLimit
				})
		},
		callback
	);
};

// ============================================================================
// Sticker Operations
// ============================================================================

/**
 * Extract a sticker from an item.
 * @param {int} itemId - The ID of the item with the sticker
 * @param {int} stickerSlot - The slot number of the sticker to extract
 * @param {function} callback - Optional callback. If not provided, returns a Promise.
 * @returns {Promise|undefined} Returns a Promise if no callback is provided
 */
NodeCS2.prototype.extractSticker = function (itemId, stickerSlot, callback) {
	// Send request via ItemCustomizationNotification
	return request(
		this,
		{
			key: 'item:' + itemId,
			event: 'itemCustomizationNotification',
			mutation: true,
			timeout: this._stickerTimeout || Constants.STICKER_TIMEOUT_MS,
			message: 'extractSticker timed out',
			match: (ids, type) =>
				type === NodeCS2.ItemCustomizationNotification.ExtractSticker && ids.includes(String(itemId)),
			send: () =>
				this._send(Language.ItemCustomizationNotification, Protos.CMsgGCItemCustomizationNotification, {
					item_id: [itemId],
					request: NodeCS2.ItemCustomizationNotification.ExtractSticker,
					extra_data: stickerSlot !== undefined ? [stickerSlot] : []
				})
		},
		callback
	);
};

/**
 * Encapsulate a sticker.
 * @param {int} stickerId - The ID of the sticker to encapsulate
 * @param {function} callback - Optional callback. If not provided, returns a Promise.
 * @returns {Promise|undefined} Returns a Promise if no callback is provided
 */
NodeCS2.prototype.encapsulateSticker = function (stickerId, callback) {
	// Send request via ItemCustomizationNotification
	return request(
		this,
		{
			key: 'item:' + stickerId,
			event: 'itemCustomizationNotification',
			mutation: true,
			timeout: this._stickerTimeout || Constants.STICKER_TIMEOUT_MS,
			message: 'encapsulateSticker timed out',
			match: (ids, type) =>
				type === NodeCS2.ItemCustomizationNotification.EncapsulateSticker && ids.includes(String(stickerId)),
			send: () =>
				this._send(Language.ItemCustomizationNotification, Protos.CMsgGCItemCustomizationNotification, {
					item_id: [stickerId],
					request: NodeCS2.ItemCustomizationNotification.EncapsulateSticker,
					extra_data: []
				})
		},
		callback
	);
};

// ============================================================================
// Patch Operations
// ============================================================================

/**
 * Apply a patch to an item.
 * @param {int} itemId - The ID of the item to apply patch to
 * @param {int} patchId - The ID of the patch item
 * @param {int} patchSlot - The slot number for the patch (optional)
 * @param {function} callback - Optional callback. If not provided, returns a Promise.
 * @returns {Promise|undefined} Returns a Promise if no callback is provided
 */
NodeCS2.prototype.applyPatch = function (itemId, patchId, patchSlot, callback) {
	if (typeof patchSlot === 'function') {
		callback = patchSlot;
		patchSlot = undefined;
	}

	// Send request via ItemCustomizationNotification
	return request(
		this,
		{
			key: 'item:' + itemId,
			event: 'itemCustomizationNotification',
			mutation: true,
			timeout: this._stickerTimeout || Constants.STICKER_TIMEOUT_MS,
			message: 'applyPatch timed out',
			match: (ids, type) => type === NodeCS2.ItemCustomizationNotification.ApplyPatch && ids.includes(String(itemId)),
			send: () =>
				this._send(Language.ItemCustomizationNotification, Protos.CMsgGCItemCustomizationNotification, {
					item_id: [itemId, patchId],
					request: NodeCS2.ItemCustomizationNotification.ApplyPatch,
					extra_data: patchSlot !== undefined ? [patchSlot] : []
				})
		},
		callback
	);
};

/**
 * Remove a patch from an item.
 * @param {int} itemId - The ID of the item with the patch
 * @param {int} patchSlot - The slot number of the patch to remove
 * @param {function} callback - Optional callback. If not provided, returns a Promise.
 * @returns {Promise|undefined} Returns a Promise if no callback is provided
 */
NodeCS2.prototype.removePatch = function (itemId, patchSlot, callback) {
	// Send request via ItemCustomizationNotification
	return request(
		this,
		{
			key: 'item:' + itemId,
			event: 'itemCustomizationNotification',
			mutation: true,
			timeout: this._stickerTimeout || Constants.STICKER_TIMEOUT_MS,
			message: 'removePatch timed out',
			match: (ids, type) => type === NodeCS2.ItemCustomizationNotification.RemovePatch && ids.includes(String(itemId)),
			send: () =>
				this._send(Language.ItemCustomizationNotification, Protos.CMsgGCItemCustomizationNotification, {
					item_id: [itemId],
					request: NodeCS2.ItemCustomizationNotification.RemovePatch,
					extra_data: patchSlot !== undefined ? [patchSlot] : []
				})
		},
		callback
	);
};

// ============================================================================
// Keychain Operations
// ============================================================================

/**
 * Apply a keychain to an item.
 * @param {int} itemId - The ID of the item to apply keychain to
 * @param {int} keychainId - The ID of the keychain item
 * @param {int} keychainSlot - The slot number for the keychain (optional)
 * @param {function} callback - Optional callback. If not provided, returns a Promise.
 * @returns {Promise|undefined} Returns a Promise if no callback is provided
 */
NodeCS2.prototype.applyKeychain = function (itemId, keychainId, keychainSlot, callback) {
	if (typeof keychainSlot === 'function') {
		callback = keychainSlot;
		keychainSlot = undefined;
	}

	// Send request via ItemCustomizationNotification
	return request(
		this,
		{
			key: 'item:' + itemId,
			event: 'itemCustomizationNotification',
			mutation: true,
			timeout: this._stickerTimeout || Constants.STICKER_TIMEOUT_MS,
			message: 'applyKeychain timed out',
			match: (ids, type) =>
				type === NodeCS2.ItemCustomizationNotification.ApplyKeychain && ids.includes(String(itemId)),
			send: () =>
				this._send(Language.ItemCustomizationNotification, Protos.CMsgGCItemCustomizationNotification, {
					item_id: [itemId, keychainId],
					request: NodeCS2.ItemCustomizationNotification.ApplyKeychain,
					extra_data: keychainSlot !== undefined ? [keychainSlot] : []
				})
		},
		callback
	);
};

/**
 * Remove a keychain from an item.
 * @param {string} itemId - The ID of the item with the keychain
 */
NodeCS2.prototype.removeKeychain = function (itemId) {
	this._send(Language.ApplySticker, Protos.CMsgApplySticker, {
		sticker_item_id: Constants.REMOVE_KEYCHAIN_STICKER_ITEM_ID,
		item_item_id: itemId
	});
};

/**
 * Commend a player. Requires a valid account ID and commendation flags.
 * The match_id and tokens fields are optional — it's unclear what Valve enforces server-side.
 * @param {int} accountId - The target player's account ID
 * @param {object} commendation - Commendation flags: { cmd_friendly, cmd_teaching, cmd_leader }
 * @param {int} [matchId] - Optional match ID
 * @param {int} [tokens] - Optional commendation tokens
 */
NodeCS2.prototype.commendPlayer = function (accountId, commendation, matchId, tokens) {
	if (!accountId) {
		throw new Error('accountId is required');
	}

	if (!commendation || (!commendation.cmd_friendly && !commendation.cmd_teaching && !commendation.cmd_leader)) {
		throw new Error('At least one commendation flag (cmd_friendly, cmd_teaching, cmd_leader) must be set');
	}

	const body = {
		account_id: accountId,
		commendation: {
			cmd_friendly: commendation.cmd_friendly ? 1 : 0,
			cmd_teaching: commendation.cmd_teaching ? 1 : 0,
			cmd_leader: commendation.cmd_leader ? 1 : 0
		}
	};

	if (matchId !== undefined && matchId !== null) {
		body.match_id = matchId;
	}

	if (tokens !== undefined && tokens !== null) {
		body.tokens = tokens;
	}

	this._send(Language.ClientCommendPlayer, Protos.CMsgGCCStrike15_v2_ClientCommendPlayer, body);
};

/**
 * Acknowledge a pet event. The protocol defines no response.
 * @param {string} petItemId - Non-zero uint64 item ID as a decimal string
 */
NodeCS2.prototype.ackPetEvent = function (petItemId) {
	if (
		typeof petItemId !== 'string' ||
		!/^[1-9]\d{0,19}$/.test(petItemId) ||
		(petItemId.length === 20 && petItemId > '18446744073709551615')
	) {
		throw new Error('petItemId must be a non-zero uint64 decimal string');
	}
	this._send(Language.AckPetEvent, Protos.CMsgAckPetEvent, { pet_item_id: petItemId });
};

NodeCS2.prototype._handlers = {};

require('./enums.js');
require('./handlers.js');

/** Reject outstanding work without retrying any sent operation. */
NodeCS2.prototype.cancelPendingRequests = function (code = 'CANCELLED') {
	for (const cancel of Array.from(this._pendingRequests || [])) cancel(code);
};

/** Permanently detach this instance from the transport. */
NodeCS2.prototype.dispose = function () {
	this._disposed = true;
	this.cancelPendingRequests();
	clearTimeout(this._helloTimer);
	this._helloTimer = null;
	this.haveGCSession = false;
	this._isInCSGO = false;
	for (const [event, listener] of this._transportListeners || []) this._steam.removeListener(event, listener);
	this._transportListeners = [];
};
