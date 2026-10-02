const decodeProto = require('./lib/proto-decode.js');
const Long = require('long');
const SteamID = require('steamid');

const NodeCS2 = require('./index.js');
const Language = require('./language.js');
const Protos = require('./protobufs/generated/_load.js');
const Constants = require('./constants.js');

const handlers = NodeCS2.prototype._handlers;

/**
 * Helper function to map sticker-like items (stickers, keychains, variations)
 * Ensures all fields including highlight_reel and wrapped_sticker are properly handled
 * @param {Object} stickerLike - The sticker/keychain/variation object from protobuf
 * @returns {Object} Normalized sticker-like object with all fields
 */
NodeCS2.prototype._mapStickerLikeItem = function (stickerLike) {
	return {
		slot: stickerLike.slot ?? 0,
		sticker_id: stickerLike.sticker_id ?? 0,
		wear: stickerLike.wear ?? null,
		scale: stickerLike.scale ?? null,
		rotation: stickerLike.rotation ?? null,
		tint_id: stickerLike.tint_id ?? null,
		offset_x: stickerLike.offset_x ?? null,
		offset_y: stickerLike.offset_y ?? null,
		offset_z: stickerLike.offset_z ?? null,
		pattern: stickerLike.pattern ?? null,
		highlight_reel: stickerLike.highlight_reel ?? null,
		wrapped_sticker: stickerLike.wrapped_sticker ?? null
	};
};

// ClientWelcome and ClientConnectionStatus
handlers[Language.ClientLogonFatalError] = function (body) {
	let proto;
	try {
		proto = decodeProto(Protos.CMsgGCCStrike15_v2_ClientLogonFatalError, body);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode ClientLogonFatalError: ${err.message}`));
		return;
	}

	clearTimeout(this._helloTimer);

	const err = new Error(`Logon Fatal Error: ${proto.message || proto.errorcode}`);
	err.code = proto.errorcode;
	err.country = proto.country;
	this.emit('error', err);
};

handlers[Language.ClientWelcome] = function (body) {
	let proto;
	try {
		proto = decodeProto(Protos.CMsgClientWelcome, body);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode ClientWelcome: ${err.message}`));
		return;
	}

	if (proto.outofdate_subscribed_caches && proto.outofdate_subscribed_caches.length) {
		proto.outofdate_subscribed_caches[0].objects.forEach((cache) => {
			switch (cache.type_id) {
				case Constants.SO_TYPE_ECON_ITEM:
					// Inventory
					const items = cache.object_data
						.map((object) => {
							try {
								const item = decodeProto(Protos.CSOEconItem, object);
								this._processSOEconItem(item);
								return item;
							} catch (err) {
								this.emit('debug', `Failed to decode inventory item: ${err.message}`);
								return null;
							}
						})
						.filter((item) => item !== null);

					this.inventory = Array.from(new Map(items.map((item) => [item.id, item])).values());
					const version = proto.outofdate_subscribed_caches[0].version;
					this._soVersions = new Map(version == null ? [] : this.inventory.map((item) => [item.id, BigInt(version)]));
					break;
				/*case 7:
					// Account metadata - this doesn't appear to be useful in CS:GO
					let data = decodeProto(Protos.CSOEconGameAccountClient, cache.object_data[0]);
					break;*/
				/*case 43:
					// Most likely item presets (multiple)
					let data = decodeProto(Protos.CSOSelectedItemPreset, cache.object_data[0]);
					break;*/
				default:
					this.emit('debug', 'Unknown SO type ' + cache.type_id + ' with ' + cache.object_data.length + ' items');
					break;
			}
		});
	}

	this.inventory = this.inventory || [];

	this.emit('debug', 'GC connection established');
	this.haveGCSession = true;
	clearTimeout(this._helloTimer);
	this._helloTimer = null;
	this._helloTimerMs = 1000;
	this.emit('connectedToGC');
};

handlers[Language.MatchmakingGC2ClientHello] = function (body) {
	let proto;
	try {
		proto = decodeProto(Protos.CMsgGCCStrike15_v2_MatchmakingGC2ClientHello, body);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode MatchmakingGC2ClientHello: ${err.message}`));
		return;
	}
	this.emit('accountData', proto);
	this.accountData = proto;
};

handlers[Language.ClientConnectionStatus] = function (body) {
	let proto;
	try {
		proto = decodeProto(Protos.CMsgConnectionStatus, body);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode ClientConnectionStatus: ${err.message}`));
		return;
	}

	if (!proto || proto.status == null) {
		this.emit('debug', 'ClientConnectionStatus missing status field');
		return;
	}

	this.emit('connectionStatus', proto.status, proto);

	let statusStr = proto.status;
	for (const i in NodeCS2.GCConnectionStatus) {
		if (NodeCS2.GCConnectionStatus.hasOwnProperty(i) && NodeCS2.GCConnectionStatus[i] == proto.status) {
			statusStr = i;
		}
	}

	this.emit(
		'debug',
		'Connection status: ' + statusStr + ' (' + proto.status + '); have session: ' + (this.haveGCSession ? 'yes' : 'no')
	);

	if (proto.status != NodeCS2.GCConnectionStatus.HAVE_SESSION && this.haveGCSession) {
		this.cancelPendingRequests('DISCONNECTED');
		this.emit('disconnectedFromGC', proto.status);
		this.haveGCSession = false;
		this._connect(); // Try to reconnect
	}
};

// MatchList
handlers[Language.MatchList] = function (body) {
	let proto;
	try {
		proto = decodeProto(Protos.CMsgGCCStrike15_v2_MatchList, body);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode MatchList: ${err.message}`));
		return;
	}
	this.emit('matchList', proto.matches || [], proto);
};

// PlayersProfile
handlers[Language.PlayersProfile] = function (body) {
	let proto;
	try {
		proto = decodeProto(Protos.CMsgGCCStrike15_v2_PlayersProfile, body);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode PlayersProfile: ${err.message}`));
		return;
	}

	if (!proto.account_profiles || !proto.account_profiles[0]) {
		this.emit('debug', 'PlayersProfile missing account_profiles');
		return;
	}

	for (const profile of proto.account_profiles) {
		if (!profile.account_id) {
			this.emit('debug', 'PlayersProfile missing account_id');
			continue;
		}
		const sid = SteamID.fromIndividualAccountID(profile.account_id);
		this.emit('playersProfile', profile);
		this.emit('playersProfile#' + sid.getSteamID64(), profile);
	}
};

// Inspecting items
handlers[Language.Client2GCEconPreviewDataBlockResponse] = function (body) {
	let proto;
	try {
		proto = decodeProto(Protos.CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockResponse, body);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode Client2GCEconPreviewDataBlockResponse: ${err.message}`));
		return;
	}

	if (!proto || !proto.iteminfo) {
		this.emit('debug', 'Client2GCEconPreviewDataBlockResponse missing iteminfo');
		return;
	}

	const item = proto.iteminfo;

	// Validate critical fields
	if (item.itemid == null) {
		this.emit('debug', 'Item inspection missing itemid');
		return;
	}

	this._normalizeInspectItem(item);

	this.emit('inspectItemInfo', item);
	this.emit('inspectItemInfo#' + item.itemid, item);
};

// XP Shop & Rewards
handlers[Language.GC2ClientNotifyXPShop] = function (body) {
	let proto;
	try {
		proto = decodeProto(Protos.CMsgGCCStrike15_v2_GC2ClientNotifyXPShop, body);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode GC2ClientNotifyXPShop: ${err.message}`));
		return;
	}

	if (!proto) {
		this.emit('debug', 'GC2ClientNotifyXPShop missing data');
		return;
	}

	this.emit('xpShopNotification', proto);
};

// Recurring Missions
handlers[Language.RecurringMissionSchema] = function (body) {
	let proto;
	try {
		proto = decodeProto(Protos.CMsgRecurringMissionSchema, body);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode RecurringMissionSchema: ${err.message}`));
		return;
	}

	if (!proto) {
		this.emit('debug', 'RecurringMissionSchema missing data');
		return;
	}

	this.emit('recurringMissionSchema', proto);
};

// Premier Season
handlers[Language.PremierSeasonSummary] = function (body) {
	let proto;
	try {
		proto = decodeProto(Protos.CMsgGCCStrike15_v2_PremierSeasonSummary, body);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode PremierSeasonSummary: ${err.message}`));
		return;
	}

	if (!proto) {
		this.emit('debug', 'PremierSeasonSummary missing data');
		return;
	}

	this.emit('premierSeasonSummary', proto);
};

// Matchmaking Search Stats
handlers[Language.MatchmakingGC2ClientSearchStats] = function (body) {
	let proto;
	try {
		proto = decodeProto(Protos.CMsgGCCStrike15_v2_MatchmakingGC2ClientSearchStats, body);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode MatchmakingGC2ClientSearchStats: ${err.message}`));
		return;
	}

	if (!proto) {
		this.emit('debug', 'MatchmakingGC2ClientSearchStats missing data');
		return;
	}

	this.emit('matchmakingSearchStats', proto);
};

// Item manipulation
handlers[Language.CraftResponse] = function (body) {
	let blueprint;
	const idList = [];
	try {
		blueprint = body.readInt16();
		body.readUint32(); // reserved
		const idCount = body.readUint16();
		if (body.remaining() < idCount * 8) throw new Error('Truncated item IDs');
		for (let i = 0; i < idCount; i++) idList.push(body.readUint64().toString());
	} catch (error) {
		this.emit('error', new Error(`Failed to decode CraftResponse: ${error.message}`));
		return;
	}
	this.emit('craftingComplete', blueprint, idList);
};

handlers[Language.ItemCustomizationNotification] = function (body) {
	let proto;
	try {
		proto = decodeProto(Protos.CMsgGCItemCustomizationNotification, body);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode ItemCustomizationNotification: ${err.message}`));
		return;
	}

	if (!proto.item_id || proto.item_id.length == 0 || !proto.request) {
		this.emit('debug', 'ItemCustomizationNotification missing required fields');
		return;
	}

	this.emit('itemCustomizationNotification', proto.item_id, proto.request);
};

// SO
NodeCS2.prototype._processSOEconItem = function (item) {
	// Inventory position
	const isNew = (item.inventory >>> 30) & 1;
	item.position = isNew ? 0 : item.inventory & 0xffff;

	// Is this item contained in a casket?
	const casketIdLow = getAttributeValueBytes(Constants.ATTRIB_CASKET_ID_LOW);
	const casketIdHigh = getAttributeValueBytes(Constants.ATTRIB_CASKET_ID_HIGH);
	if (casketIdLow && casketIdHigh) {
		const casketIdLong = new Long(casketIdLow.readUInt32LE(0), casketIdHigh.readUInt32LE(0), true);
		item.casket_id = casketIdLong.toString();
	}

	// Item custom names
	const customNameBytes = getAttributeValueBytes(Constants.ATTRIB_CUSTOM_NAME);
	if (customNameBytes && !item.custom_name) {
		item.custom_name = customNameBytes.slice(2).toString('utf8');
	}

	// Paint index/seed/wear
	const paintIndexBytes = getAttributeValueBytes(Constants.ATTRIB_PAINT_INDEX);
	if (paintIndexBytes) {
		item.paint_index = paintIndexBytes.readFloatLE(0);
	}

	const paintSeedBytes = getAttributeValueBytes(Constants.ATTRIB_PAINT_SEED);
	if (paintSeedBytes) {
		item.paint_seed = Math.floor(paintSeedBytes.readFloatLE(0));
	}

	const paintWearBytes = getAttributeValueBytes(Constants.ATTRIB_PAINT_WEAR);
	if (paintWearBytes) {
		item.paint_wear = paintWearBytes.readFloatLE(0);
	}

	const tradableAfterDateBytes = getAttributeValueBytes(Constants.ATTRIB_TRADABLE_AFTER_DATE);
	if (tradableAfterDateBytes) {
		item.tradable_after = new Date(tradableAfterDateBytes.readUInt32LE(0) * 1000);
	}

	const killEaterBytes = getAttributeValueBytes(Constants.ATTRIB_KILL_EATER_VALUE);
	if (killEaterBytes) {
		item.kill_eater_value = killEaterBytes.readUInt32LE(0);
	}

	const killEaterScoreTypeBytes = getAttributeValueBytes(Constants.ATTRIB_KILL_EATER_SCORE_TYPE);
	if (killEaterScoreTypeBytes) {
		item.kill_eater_score_type = killEaterScoreTypeBytes.readUInt32LE(0);
	}

	const questIdBytes = getAttributeValueBytes(Constants.ATTRIB_QUEST_ID);
	if (questIdBytes) {
		item.quest_id = questIdBytes.readUInt32LE(0);
	}

	const stickers = [];
	for (let i = 0; i <= 5; i++) {
		const stickerIdBytes = getAttributeValueBytes(Constants.ATTRIB_STICKER_ID_BASE + i * 4);
		if (stickerIdBytes) {
			const sticker = {
				slot: i,
				sticker_id: stickerIdBytes.readUInt32LE(0),
				wear: null,
				scale: null,
				rotation: null,
				offset_x: null,
				offset_y: null
			};

			// As of the 2024-02-06 update, the value of the "sticker slot x schema" attribute (290-295) seems to indicate
			// which slot the sticker occupies, rather than the actual slot named by the attribute. Why? Who knows?
			// I sure hope no items exist with schema set for some stickers but not for others.
			const schemaBytes = getAttributeValueBytes(Constants.ATTRIB_STICKER_SCHEMA_BASE + i);
			if (schemaBytes) {
				sticker.slot = schemaBytes.readUInt32LE(0);
			}

			['wear', 'scale', 'rotation'].forEach((attrib, idx) => {
				const bytes = getAttributeValueBytes(Constants.ATTRIB_STICKER_WEAR_BASE + i * 4 + idx);
				if (bytes) {
					sticker[attrib] = bytes.readFloatLE(0);
				}
			});

			['offset_x', 'offset_y'].forEach((attrib, idx) => {
				const bytes = getAttributeValueBytes(Constants.ATTRIB_STICKER_OFFSET_BASE + i * 2 + idx);
				if (bytes) {
					sticker[attrib] = bytes.readFloatLE(0);
				}
			});

			stickers.push(sticker);
		}
	}
	if (stickers.length > 0) {
		item.stickers = stickers;
	}

	// def_index-specific attribute parsing
	switch (item.def_index) {
		case Constants.DEFINDEX_STORAGE_UNIT:
			// Storage Unit
			item.casket_contained_item_count = 0;
			const itemCountBytes = getAttributeValueBytes(Constants.ATTRIB_CASKET_ITEM_COUNT);
			if (itemCountBytes) {
				item.casket_contained_item_count = itemCountBytes.readUInt32LE(0);
			}
			break;
	}

	/**
	 * @param {int} attribDefIndex
	 * @returns {null|Buffer}
	 */
	function getAttributeValueBytes(attribDefIndex) {
		const attrib = (item.attribute || []).find((attrib) => attrib.def_index == attribDefIndex);
		const bytes = attrib ? attrib.value_bytes : null;
		return bytes && bytes.length >= (attribDefIndex === Constants.ATTRIB_CUSTOM_NAME ? 2 : 4) ? bytes : null;
	}
};

handlers[Language.SO_Create] = function (body) {
	let proto;
	try {
		proto = decodeProto(Protos.CMsgSOSingleObject, body);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode SO_Create: ${err.message}`));
		return;
	}
	this._handleSOCreate(proto);
};

NodeCS2.prototype._handleSOCreate = function (proto) {
	if (!proto || proto.type_id != Constants.SO_TYPE_ECON_ITEM) {
		return; // Not an item
	}

	if (!this.inventory) {
		return; // We don't have our inventory yet! (this shouldn't be possible in CS:GO, but wutevs)
	}

	let item;
	try {
		item = decodeProto(Protos.CSOEconItem, proto.object_data);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode SO_Create item: ${err.message}`));
		return;
	}

	if (!item || !item.id) return;
	if (this.inventory.some((entry) => entry.id === item.id)) return this._handleSOUpdate(proto);
	if (!this._acceptSOVersion(item.id, proto.version)) return;
	this._processSOEconItem(item);
	const existing = this.inventory.findIndex((entry) => entry.id === item.id);
	if (existing !== -1) return;
	this.inventory.push(item);

	this.emit('itemAcquired', item);
};

handlers[Language.SO_Update] = function (body) {
	let proto;
	try {
		proto = decodeProto(Protos.CMsgSOSingleObject, body);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode SO_Update: ${err.message}`));
		return;
	}
	this._handleSOUpdate(proto);
};

NodeCS2.prototype._handleSOUpdate = function (so) {
	if (!so || so.type_id != Constants.SO_TYPE_ECON_ITEM) {
		return; // Not an item, we don't care
	}

	if (!this.inventory) {
		return; // We somehow don't have our inventory yet!
	}

	let item;
	try {
		item = decodeProto(Protos.CSOEconItem, so.object_data);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode SO_Update item: ${err.message}`));
		return;
	}

	if (!item || !item.id) {
		this.emit('debug', 'SO_Update item missing id');
		return;
	}

	if (!this._acceptSOVersion(item.id, so.version)) return;
	this._processSOEconItem(item);
	if (!this.inventory.some((entry) => entry.id === item.id)) {
		this.inventory.push(item);
		this.emit('itemAcquired', item);
		return;
	}

	for (let i = 0; i < this.inventory.length; i++) {
		if (this.inventory[i].id == item.id) {
			const oldItem = this.inventory[i];
			if (require('util').isDeepStrictEqual(oldItem, item)) return;
			this.inventory[i] = item;

			this.emit('itemChanged', oldItem, item);
			break;
		}
	}
};

handlers[Language.SO_Destroy] = function (body) {
	let proto;
	try {
		proto = decodeProto(Protos.CMsgSOSingleObject, body);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode SO_Destroy: ${err.message}`));
		return;
	}
	this._handleSODestroy(proto);
};

NodeCS2.prototype._handleSODestroy = function (proto) {
	if (!proto || proto.type_id != Constants.SO_TYPE_ECON_ITEM) {
		return; // Not an item
	}

	if (!this.inventory) {
		return; // Inventory not loaded yet
	}

	let item;
	try {
		item = decodeProto(Protos.CSOEconItem, proto.object_data);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode SO_Destroy item: ${err.message}`));
		return;
	}

	if (!item || !item.id) {
		this.emit('debug', 'SO_Destroy item missing id');
		return;
	}

	if (!this._acceptSOVersion(item.id, proto.version)) return;
	item.id = item.id.toString();
	let itemData = null;
	for (let i = 0; i < this.inventory.length; i++) {
		if (this.inventory[i].id == item.id) {
			itemData = this.inventory[i];
			this.inventory.splice(i, 1);
			break;
		}
	}

	if (itemData) this.emit('itemRemoved', itemData);
};

handlers[Language.SO_UpdateMultiple] = function (body) {
	let proto;
	try {
		proto = decodeProto(Protos.CMsgSOMultipleObjects, body);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode SO_UpdateMultiple: ${err.message}`));
		return;
	}

	(proto.objects_modified || []).forEach((item) => this._handleSOUpdate({ ...item, version: proto.version }));
};

NodeCS2.prototype._normalizeInspectItem = function (item) {
	// Field 11 is now repeated; preserve the former singular decoder's last-name behavior.
	item.customnames = item.customnames || (item.customname == null ? [] : [item.customname]);
	item.customname = item.customnames.length ? item.customnames[item.customnames.length - 1] : null;

	// decode the wear
	if (item.paintwear != null) {
		const buf = Buffer.alloc(4);
		buf.writeUInt32BE(item.paintwear, 0);
		item.paintwear = buf.readFloatBE(0);
	}

	// Process stickers array - using helper function for consistency
	if (item.stickers && Array.isArray(item.stickers)) {
		item.stickers = item.stickers.map((sticker) => this._mapStickerLikeItem(sticker));
	}

	// Process keychains array - using helper function for consistency
	if (item.keychains && Array.isArray(item.keychains)) {
		item.keychains = item.keychains.map((keychain) => this._mapStickerLikeItem(keychain));
	}

	// Process variations array - using helper function for consistency
	if (item.variations && Array.isArray(item.variations)) {
		item.variations = item.variations.map((variation) => this._mapStickerLikeItem(variation));
	}

	return item;
};

// Compare decimal uint64 cache versions without losing precision. Track tombstones
// so an old create cannot resurrect a destroyed item within the current cache.
NodeCS2.prototype._acceptSOVersion = function (id, version) {
	if (version == null) return true;
	this._soVersions = this._soVersions || new Map();
	const previous = this._soVersions.get(String(id));
	if (previous !== undefined && BigInt(version) <= previous) return false;
	this._soVersions.set(String(id), BigInt(version));
	return true;
};
