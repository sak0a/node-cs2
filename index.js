const ByteBuffer = require('bytebuffer');
const EventEmitter = require('events').EventEmitter;
const {ShareCode} = require('globaloffensive-sharecode');
const SteamID = require('steamid');
const Util = require('util');

const Language = require('./language.js');
const Protos = require('./protobufs/generated/_load.js');

const STEAM_APPID = 730;

module.exports = NodeCS2;

Util.inherits(NodeCS2, EventEmitter);

function NodeCS2(steam) {
	if (steam.packageName != 'steam-user' || !steam.packageVersion || !steam.constructor) {
		throw new Error('globaloffensive v2 only supports steam-user v4.2.0 or later.');
	} else {
		let [major, minor] = steam.packageVersion.split('.');
		if (major < 4 || (major == 4 && minor < 2)) {
			throw new Error(`globaloffensive v2 only supports steam-user v4.2.0 or later. ${steam.constructor.name} v${steam.packageVersion} given.`);
		}
	}

	this._steam = steam;
	this.haveGCSession = false;
	this._isInCSGO = false;

	this._steam.on('receivedFromGC', (appid, msgType, payload) => {
		if (appid != STEAM_APPID) {
			return; // we don't care
		}

		let isProtobuf = !Buffer.isBuffer(payload);
		let handler = null;

		if (this._handlers[msgType]) {
			handler = this._handlers[msgType];
		}

		let msgName = msgType;
		for (let i in Language) {
			if (Language.hasOwnProperty(i) && Language[i] == msgType) {
				msgName = i;
				break;
			}
		}

		this.emit('debug', "Got " + (handler ? "handled" : "unhandled") + " GC message " + msgName + (isProtobuf ? " (protobuf)" : ""));
		if (handler) {
			handler.call(this, isProtobuf ? payload : ByteBuffer.wrap(payload, ByteBuffer.LITTLE_ENDIAN));
		}
	});

	this._steam.on('appLaunched', (appid) => {
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

	let handleAppQuit = (emitDisconnectEvent) => {
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

	this._steam.on('appQuit', (appid) => {
		if (!this._isInCSGO) {
			return;
		}

		if (appid == STEAM_APPID) {
			handleAppQuit(false);
		}
	});

	this._steam.on('disconnected', () => {
		handleAppQuit(true);
	});

	this._steam.on('error', (err) => {
		handleAppQuit(true);
	});
}

NodeCS2.prototype._connect = function() {
	if (!this._isInCSGO || this._helloTimer) {
		this.emit('debug', "Not trying to connect due to " + (!this._isInCSGO ? "not in CS:GO" : "has helloTimer"));
		return; // We're not in CS:GO or we're already trying to connect
	}

	let sendHello = () => {
		if (!this._isInCSGO) {
			this.emit('debug', "Not sending hello because we're no longer in CS:GO");
			delete this._helloTimer;
			return;
		} else if (this.haveGCSession) {
			this.emit('debug', "Not sending hello because we have a session");
			clearTimeout(this._helloTimer);
			delete this._helloTimer;
			return;
		}

		this._send(Language.ClientHello, Protos.CMsgClientHello, {
			version: 2000244,
			client_session_need: 0,
			client_launcher: 0,
			steam_launcher: 0
		});

		this._helloTimerMs = Math.min(60000, (this._helloTimerMs || 1000) * 2); // exponential backoff, max 60 seconds
		this._helloTimer = setTimeout(sendHello, this._helloTimerMs);
		this.emit('debug', `Sending hello, setting timer for next attempt to ${this._helloTimerMs} ms`);
	};

	this._helloTimer = setTimeout(sendHello, 500);
};

NodeCS2.prototype._send = function(type, protobuf, body) {
	if (!this._steam.steamID) {
		return false;
	}

	let msgName = type;
	for (let i in Language) {
		if (Language[i] == type) {
			msgName = i;
			break;
		}
	}

	this.emit('debug', "Sending GC message " + msgName);

	if (protobuf) {
		this._steam.sendToGC(STEAM_APPID, type, {}, protobuf.encode(body).finish());
	} else {
		// This is a ByteBuffer
		this._steam.sendToGC(STEAM_APPID, type, null, body.flip().toBuffer());
	}

	return true;
};

NodeCS2.prototype.requestGame = function(shareCodeOrDetails) {
	if (typeof shareCodeOrDetails == 'string') {
		shareCodeOrDetails = (new ShareCode(shareCodeOrDetails)).decode();
	}

	if (typeof shareCodeOrDetails != 'object' || !shareCodeOrDetails) {
		throw new Error('shareCodeOrDetails must be a sharecode or an object with properties matchId, outcomeId, token');
	}

	let requiredProps = ['matchId', 'outcomeId', 'token'];
	requiredProps.sort();
	let extantProps = Object.keys(shareCodeOrDetails);
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

NodeCS2.prototype.requestLiveGames = function() {
	this._send(Language.MatchListRequestCurrentLiveGames, Protos.CMsgGCCStrike15_v2_MatchListRequestCurrentLiveGames, {});
};

NodeCS2.prototype.requestRecentGames = function(steamid) {
	if (typeof steamid === 'string') {
		steamid = new SteamID(steamid);
	}

	if (!steamid.isValid() || steamid.universe != SteamID.Universe.PUBLIC || steamid.type != SteamID.Type.INDIVIDUAL || steamid.instance != SteamID.Instance.DESKTOP) {
		return false;
	}

	this._send(Language.MatchListRequestRecentUserGames, Protos.CMsgGCCStrike15_v2_MatchListRequestRecentUserGames, {
		accountid: steamid.accountid
	});
};

NodeCS2.prototype.requestLiveGameForUser = function(steamid) {
	if (typeof steamid === 'string') {
		steamid = new SteamID(steamid);
	}

	if (!steamid.isValid() || steamid.universe != SteamID.Universe.PUBLIC || steamid.type != SteamID.Type.INDIVIDUAL || steamid.instance != SteamID.Instance.DESKTOP) {
		return false;
	}

	this._send(Language.MatchListRequestLiveGameForUser, Protos.CMsgGCCStrike15_v2_MatchListRequestLiveGameForUser, {
		accountid: steamid.accountid
	});
};

NodeCS2.prototype.inspectItem = function(owner, assetid, d, callback) {
	let match;
	if (typeof owner === 'string' && (match = owner.match(/[SM](\d+)A(\d+)D(\d+)$/))) {
		callback = assetid;
		owner = match[1];
		assetid = match[2];
		d = match[3];
	}

	let msg = {
		"param_a": assetid,
		"param_d": d,
		"param_s": 0,
		"param_m": 0
	};

	if (typeof owner === 'object') {
		owner = owner.toString();
	}

	try {
		let sid = new SteamID(owner);
		if (!sid.isValid() || sid.universe != SteamID.Universe.PUBLIC || sid.type != SteamID.Type.INDIVIDUAL || sid.instance != SteamID.Instance.DESKTOP) {
			throw 0;
		}
		// it's a valid steamid
		msg.param_s = owner;
	} catch (e) {
		msg.param_m = owner;
	}

	this._send(Language.Client2GCEconPreviewDataBlockRequest, Protos.CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest, msg);
	
	// Support both callback and Promise-based API
	if (callback) {
		let timeout;
		let listener = (item) => {
			clearTimeout(timeout);
			callback(item);
		};
		timeout = setTimeout(() => {
			this.removeListener('inspectItemInfo#' + assetid, listener);
			this.emit('inspectItemTimedOut', assetid);
			this.emit('inspectItemTimedOut#' + assetid, assetid);
		}, this._inspectTimeout || 10000);

		this.once('inspectItemInfo#' + assetid, listener);
	} else {
		// Return Promise when no callback provided
		return new Promise((resolve, reject) => {
			let timeout;
			let successListener = (item) => {
				clearTimeout(timeout);
				this.removeListener('inspectItemTimedOut#' + assetid, timeoutListener);
				resolve(item);
			};
			let timeoutListener = () => {
				this.removeListener('inspectItemInfo#' + assetid, successListener);
				reject(new Error(`Inspect item timed out for assetid: ${assetid}`));
			};
			
			timeout = setTimeout(() => {
				this.removeListener('inspectItemInfo#' + assetid, successListener);
				this.emit('inspectItemTimedOut', assetid);
				this.emit('inspectItemTimedOut#' + assetid, assetid);
			}, this._inspectTimeout || 10000);
			
			this.once('inspectItemInfo#' + assetid, successListener);
			this.once('inspectItemTimedOut#' + assetid, timeoutListener);
		});
	}
};

NodeCS2.prototype.requestPlayersProfile = function(steamid, callback) {
	if (typeof steamid == 'string') {
		steamid = new SteamID(steamid);
	}

	if (!steamid.isValid() || steamid.universe != SteamID.Universe.PUBLIC || steamid.type != SteamID.Type.INDIVIDUAL || steamid.instance != SteamID.Instance.DESKTOP) {
		if (callback) {
			callback(new Error('Invalid SteamID'));
			return false;
		}
		return Promise.reject(new Error('Invalid SteamID'));
	}

	this._send(Language.ClientRequestPlayersProfile, Protos.CMsgGCCStrike15_v2_ClientRequestPlayersProfile, {
		account_id: steamid.accountid,
		request_level: 32
	});

	if (callback) {
		this.once('playersProfile#' + steamid.getSteamID64(), callback);
	} else {
		// Return Promise when no callback provided
		return new Promise((resolve, reject) => {
			let timeout = setTimeout(() => {
				this.removeListener('playersProfile#' + steamid.getSteamID64(), resolve);
				reject(new Error(`Request players profile timed out for SteamID: ${steamid.getSteamID64()}`));
			}, this._profileTimeout || 10000);
			
			this.once('playersProfile#' + steamid.getSteamID64(), (profile) => {
				clearTimeout(timeout);
				resolve(profile);
			});
		});
	}
};

/**
 * Rename an item in your inventory using a name tag.
 * @param {int} nameTagId
 * @param {int} itemId
 * @param {string} name
 */
NodeCS2.prototype.nameItem = function(nameTagId, itemId, name) {
	let buffer = new ByteBuffer(18 + Buffer.byteLength(name), ByteBuffer.LITTLE_ENDIAN);
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
NodeCS2.prototype.deleteItem = function(itemId) {
	let buffer = new ByteBuffer(8, ByteBuffer.LITTLE_ENDIAN);
	buffer.writeUint64(itemId);
	this._send(Language.Delete, null, buffer);
};

/**
 * Craft some items using a given recipe.
 * @param {int[]} items - IDs of items to craft
 * @param {int} recipe - The ID of the recipe to use
 */
NodeCS2.prototype.craft = function(items, recipe) {
	let buffer = new ByteBuffer(2 + 2 + (8 * items.length), ByteBuffer.LITTLE_ENDIAN);
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
NodeCS2.prototype.addToCasket = function(casketId, itemId) {
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
NodeCS2.prototype.removeFromCasket = function(casketId, itemId) {
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
NodeCS2.prototype.getCasketContents = function(casketId, callback) {
	// First see if we already have this casket's contents in our inventory
	let casketItem = this.inventory.find(item => item.id == casketId);
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

	let loadedItems = this.inventory.filter(item => item.casket_id == casketId);
	if (loadedItems.length == casketItem.casket_contained_item_count) {
		if (callback) {
			callback(null, loadedItems);
			return;
		}
		return Promise.resolve(loadedItems);
	}

	// We need to load casket contents from the GC
	this._send(Language.CasketItemLoadContents, Protos.CMsgCasketItem, {
		casket_item_id: casketId,
		item_item_id: casketId
	});

	// Set a timeout in case the GC isn't being cooperative (configurable via _casketTimeout)
	let timedOut = false;
	let timeout;
	let customizationNotification;

	if (callback) {
		// Callback-based API
		timeout = setTimeout(() => {
			if (timedOut) {
				return;
			}
			timedOut = true;
			this.off('itemCustomizationNotification', customizationNotification);
			callback(new Error('Loading casket contents timed out'));
		}, this._casketTimeout || 30000);

		customizationNotification = (itemIds, notificationType) => {
			if (timedOut) {
				this.off('itemCustomizationNotification', customizationNotification);
				return;
			}

			if (itemIds[0] != casketId || notificationType != NodeCS2.ItemCustomizationNotification.CasketContents) {
				return;
			}

			// This is our casket, and it's the correct notification
			clearTimeout(timeout);
			timedOut = true;
			this.off('itemCustomizationNotification', customizationNotification);
			callback(null, this.inventory.filter(item => item.casket_id == casketId));
		};

		this.on('itemCustomizationNotification', customizationNotification);
	} else {
		// Promise-based API
		return new Promise((resolve, reject) => {
			timeout = setTimeout(() => {
				if (timedOut) {
					return;
				}
				timedOut = true;
				this.off('itemCustomizationNotification', customizationNotification);
				reject(new Error('Loading casket contents timed out'));
			}, this._casketTimeout || 30000);

			customizationNotification = (itemIds, notificationType) => {
				if (timedOut) {
					this.off('itemCustomizationNotification', customizationNotification);
					return;
				}

				if (itemIds[0] != casketId || notificationType != NodeCS2.ItemCustomizationNotification.CasketContents) {
					return;
				}

				// This is our casket, and it's the correct notification
				clearTimeout(timeout);
				timedOut = true;
				this.off('itemCustomizationNotification', customizationNotification);
				resolve(this.inventory.filter(item => item.casket_id == casketId));
			};

			this.on('itemCustomizationNotification', customizationNotification);
		});
	}
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
NodeCS2.prototype.loadVolatileItemContents = function(volatileItemId, callback) {
	// Similar to getCasketContents, but for volatile items
	let volatileItem = this.inventory.find(item => item.id == volatileItemId);
	if (!volatileItem) {
		const error = new Error(`No volatile item matching ID ${volatileItemId} was found`);
		if (callback) {
			callback(error);
			return;
		}
		return Promise.reject(error);
	}

	// We need to load volatile item contents from the GC
	this._send(Language.VolatileItemLoadContents, Protos.CMsgCasketItem, {
		casket_item_id: volatileItemId,
		item_item_id: volatileItemId
	});

	// Set a timeout (configurable via _volatileItemTimeout)
	let timedOut = false;
	let timeout;
	let customizationNotification;

	if (callback) {
		timeout = setTimeout(() => {
			if (timedOut) {
				return;
			}
			timedOut = true;
			this.off('itemCustomizationNotification', customizationNotification);
			callback(new Error('Loading volatile item contents timed out'));
		}, this._volatileItemTimeout || 30000);

		customizationNotification = (itemIds, notificationType) => {
			if (timedOut) {
				this.off('itemCustomizationNotification', customizationNotification);
				return;
			}

			// Check for volatile item notification (may use VolatileItemClaimReward notification type)
			if (itemIds[0] != volatileItemId) {
				return;
			}

			clearTimeout(timeout);
			timedOut = true;
			this.off('itemCustomizationNotification', customizationNotification);
			callback(null, this.inventory.filter(item => item.volatile_item_id == volatileItemId || item.id == volatileItemId));
		};

		this.on('itemCustomizationNotification', customizationNotification);
	} else {
		return new Promise((resolve, reject) => {
			timeout = setTimeout(() => {
				if (timedOut) {
					return;
				}
				timedOut = true;
				this.off('itemCustomizationNotification', customizationNotification);
				reject(new Error('Loading volatile item contents timed out'));
			}, this._volatileItemTimeout || 30000);

			customizationNotification = (itemIds, notificationType) => {
				if (timedOut) {
					this.off('itemCustomizationNotification', customizationNotification);
					return;
				}

				if (itemIds[0] != volatileItemId) {
					return;
				}

				clearTimeout(timeout);
				timedOut = true;
				this.off('itemCustomizationNotification', customizationNotification);
				resolve(this.inventory.filter(item => item.volatile_item_id == volatileItemId || item.id == volatileItemId));
			};

			this.on('itemCustomizationNotification', customizationNotification);
		});
	}
};

/**
 * Claim a reward from a volatile item.
 * Note: Response comes via ItemCustomizationNotification.
 * @param {int} defindex - The definition index of the volatile item
 * @param {function} callback - Optional callback. If not provided, returns a Promise.
 * @returns {Promise|undefined} Returns a Promise if no callback is provided
 */
NodeCS2.prototype.claimVolatileItemReward = function(defindex, callback) {
	// VolatileItemClaimReward doesn't have a protobuf message definition
	// Send as empty ByteBuffer - response comes via ItemCustomizationNotification
	let buffer = new ByteBuffer(4, ByteBuffer.LITTLE_ENDIAN);
	buffer.writeUint32(defindex);
	this._send(Language.VolatileItemClaimReward, null, buffer);

	if (callback) {
		// Listen for itemCustomizationNotification with VolatileItemClaimReward type
		let timeout = setTimeout(() => {
			this.removeListener('itemCustomizationNotification', notificationListener);
			callback(new Error('Claiming volatile item reward timed out'));
		}, this._volatileItemTimeout || 30000);

		let notificationListener = (itemIds, notificationType) => {
			if (notificationType == NodeCS2.ItemCustomizationNotification.ClientRedeemFreeReward) {
				clearTimeout(timeout);
				this.removeListener('itemCustomizationNotification', notificationListener);
				callback(null, itemIds);
			}
		};

		this.on('itemCustomizationNotification', notificationListener);
	} else {
		return new Promise((resolve, reject) => {
			let timeout = setTimeout(() => {
				this.removeListener('itemCustomizationNotification', notificationListener);
				reject(new Error('Claiming volatile item reward timed out'));
			}, this._volatileItemTimeout || 30000);

			let notificationListener = (itemIds, notificationType) => {
				if (notificationType == NodeCS2.ItemCustomizationNotification.ClientRedeemFreeReward) {
					clearTimeout(timeout);
					this.removeListener('itemCustomizationNotification', notificationListener);
					resolve(itemIds);
				}
			};

			this.on('itemCustomizationNotification', notificationListener);
		});
	}
};

/**
 * Acknowledge rental expiration for a crate/item.
 * @param {int} crateItemId - The ID of the crate/item
 */
NodeCS2.prototype.acknowledgeRentalExpiration = function(crateItemId) {
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
NodeCS2.prototype.requestRecurringMissionSchedule = function(callback) {
	this._send(Language.RequestRecurringMissionSchedule, Protos.CMsgRequestRecurringMissionSchedule, {});

	if (callback) {
		// Listen for RecurringMissionSchema response
		let timeout = setTimeout(() => {
			this.removeListener('recurringMissionSchema', schemaListener);
			callback(new Error('Requesting recurring mission schedule timed out'));
		}, this._missionTimeout || 10000);

		let schemaListener = (schema) => {
			clearTimeout(timeout);
			this.removeListener('recurringMissionSchema', schemaListener);
			callback(null, schema);
		};

		this.once('recurringMissionSchema', schemaListener);
	} else {
		return new Promise((resolve, reject) => {
			let timeout = setTimeout(() => {
				this.removeListener('recurringMissionSchema', schemaListener);
				reject(new Error('Requesting recurring mission schedule timed out'));
			}, this._missionTimeout || 10000);

			let schemaListener = (schema) => {
				clearTimeout(timeout);
				this.removeListener('recurringMissionSchema', schemaListener);
				resolve(schema);
			};

			this.once('recurringMissionSchema', schemaListener);
		});
	}
};

// ============================================================================
// XP Shop & Rewards
// ============================================================================

/**
 * Acknowledge XP shop tracks.
 */
NodeCS2.prototype.acknowledgeXPShopTracks = function() {
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
NodeCS2.prototype.redeemFreeReward = function(generationTime, redeemableBalance, items, callback) {
	this._send(Language.ClientRedeemFreeReward, Protos.CMsgGCCstrike15_v2_ClientRedeemFreeReward, {
		generation_time: generationTime,
		redeemable_balance: redeemableBalance,
		items: items || []
	});

	if (callback) {
		// Listen for itemCustomizationNotification
		let timeout = setTimeout(() => {
			this.removeListener('itemCustomizationNotification', notificationListener);
			callback(new Error('Redeeming free reward timed out'));
		}, this._rewardTimeout || 10000);

		let notificationListener = (itemIds, notificationType) => {
			if (notificationType == NodeCS2.ItemCustomizationNotification.ClientRedeemFreeReward) {
				clearTimeout(timeout);
				this.removeListener('itemCustomizationNotification', notificationListener);
				callback(null, itemIds);
			}
		};

		this.on('itemCustomizationNotification', notificationListener);
	} else {
		return new Promise((resolve, reject) => {
			let timeout = setTimeout(() => {
				this.removeListener('itemCustomizationNotification', notificationListener);
				reject(new Error('Redeeming free reward timed out'));
			}, this._rewardTimeout || 10000);

			let notificationListener = (itemIds, notificationType) => {
				if (notificationType == NodeCS2.ItemCustomizationNotification.ClientRedeemFreeReward) {
					clearTimeout(timeout);
					this.removeListener('itemCustomizationNotification', notificationListener);
					resolve(itemIds);
				}
			};

			this.on('itemCustomizationNotification', notificationListener);
		});
	}
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
NodeCS2.prototype.redeemMissionReward = function(campaignId, redeemId, redeemableBalance, expectedCost, bidControl, callback) {
	// Handle optional bidControl parameter
	if (typeof bidControl === 'function') {
		callback = bidControl;
		bidControl = undefined;
	}

	this._send(Language.ClientRedeemMissionReward, Protos.CMsgGCCstrike15_v2_ClientRedeemMissionReward, {
		campaign_id: campaignId,
		redeem_id: redeemId,
		redeemable_balance: redeemableBalance,
		expected_cost: expectedCost,
		bid_control: bidControl
	});

	if (callback) {
		// Listen for itemCustomizationNotification
		let timeout = setTimeout(() => {
			this.removeListener('itemCustomizationNotification', notificationListener);
			callback(new Error('Redeeming mission reward timed out'));
		}, this._rewardTimeout || 10000);

		let notificationListener = (itemIds, notificationType) => {
			if (notificationType == NodeCS2.ItemCustomizationNotification.ClientRedeemMissionReward) {
				clearTimeout(timeout);
				this.removeListener('itemCustomizationNotification', notificationListener);
				callback(null, itemIds);
			}
		};

		this.on('itemCustomizationNotification', notificationListener);
	} else {
		return new Promise((resolve, reject) => {
			let timeout = setTimeout(() => {
				this.removeListener('itemCustomizationNotification', notificationListener);
				reject(new Error('Redeeming mission reward timed out'));
			}, this._rewardTimeout || 10000);

			let notificationListener = (itemIds, notificationType) => {
				if (notificationType == NodeCS2.ItemCustomizationNotification.ClientRedeemMissionReward) {
					clearTimeout(timeout);
					this.removeListener('itemCustomizationNotification', notificationListener);
					resolve(itemIds);
				}
			};

			this.on('itemCustomizationNotification', notificationListener);
		});
	}
};

// ============================================================================
// Premier Season & Leaderboards
// ============================================================================

/**
 * Set player leaderboard safe name.
 * @param {string} leaderboardSafeName - The safe name for leaderboards
 */
NodeCS2.prototype.setLeaderboardSafeName = function(leaderboardSafeName) {
	if (!leaderboardSafeName || typeof leaderboardSafeName !== 'string') {
		throw new Error('leaderboardSafeName must be a non-empty string');
	}

	this._send(Language.SetPlayerLeaderboardSafeName, Protos.CMsgGCCStrike15_v2_SetPlayerLeaderboardSafeName, {
		leaderboard_safe_name: leaderboardSafeName
	});
};

NodeCS2.prototype._handlers = {};

require('./enums.js');
require('./handlers.js');
