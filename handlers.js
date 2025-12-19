const ByteBuffer = require('bytebuffer');
const Long = require('long');
const SteamID = require('steamid');

const NodeCS2 = require('./index.js');
const Language = require('./language.js');
const Protos = require('./protobufs/generated/_load.js');

let handlers = NodeCS2.prototype._handlers;

/**
 * Helper function to map sticker-like items (stickers, keychains, variations)
 * Ensures all fields including highlight_reel and wrapped_sticker are properly handled
 * @param {Object} stickerLike - The sticker/keychain/variation object from protobuf
 * @returns {Object} Normalized sticker-like object with all fields
 */
NodeCS2.prototype._mapStickerLikeItem = function(stickerLike) {
	return {
		slot: stickerLike.slot || 0,
		sticker_id: stickerLike.sticker_id || 0,
		wear: stickerLike.wear || null,
		scale: stickerLike.scale || null,
		rotation: stickerLike.rotation || null,
		tint_id: stickerLike.tint_id || null,
		offset_x: stickerLike.offset_x || null,
		offset_y: stickerLike.offset_y || null,
		offset_z: stickerLike.offset_z || null,
		pattern: stickerLike.pattern || null,
		highlight_reel: stickerLike.highlight_reel || null,
		wrapped_sticker: stickerLike.wrapped_sticker || null
	};
};

// ClientWelcome and ClientConnectionStatus
handlers[Language.ClientLogonFatalError] = function(body) {
	let proto;
	try {
		proto = decodeProto(Protos.CMsgGCCStrike15_v2_ClientLogonFatalError, body);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode ClientLogonFatalError: ${err.message}`));
		return;
	}

	clearTimeout(this._helloTimer);

	let err = new Error(`Logon Fatal Error: ${proto.message || proto.errorcode}`);
	err.code = proto.errorcode;
	err.country = proto.country;
	this.emit('error', err);
};

handlers[Language.ClientWelcome] = function(body) {
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
				case 1:
					// Inventory
					let items = cache.object_data.map((object) => {
						try {
							let item = decodeProto(Protos.CSOEconItem, object);
							this._processSOEconItem(item);
							return item;
						} catch (err) {
							this.emit('debug', `Failed to decode inventory item: ${err.message}`);
							return null;
						}
					}).filter(item => item !== null);

					this.inventory = items;
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
					this.emit('debug', "Unknown SO type " + cache.type_id + " with " + cache.object_data.length + " items");
					break;
			}
		});
	}

	this.inventory = this.inventory || [];

	this.emit('debug', "GC connection established");
	this.haveGCSession = true;
	clearTimeout(this._helloTimer);
	this._helloTimer = null;
	this._helloTimerMs = 1000;
	this.emit('connectedToGC');
};

handlers[Language.MatchmakingGC2ClientHello] = function(body) {
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

handlers[Language.ClientConnectionStatus] = function(body) {
	let proto;
	try {
		proto = decodeProto(Protos.CMsgConnectionStatus, body);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode ClientConnectionStatus: ${err.message}`));
		return;
	}
	
	if (!proto || typeof proto.status === 'undefined') {
		this.emit('debug', "ClientConnectionStatus missing status field");
		return;
	}

	this.emit('connectionStatus', proto.status, proto);

	let statusStr = proto.status;
	for (let i in NodeCS2.GCConnectionStatus) {
		if (NodeCS2.GCConnectionStatus.hasOwnProperty(i) && NodeCS2.GCConnectionStatus[i] == proto.status) {
			statusStr = i;
		}
	}

	this.emit('debug', "Connection status: " + statusStr + " (" + proto.status + "); have session: " + (this.haveGCSession ? 'yes' : 'no'));

	if (proto.status != NodeCS2.GCConnectionStatus.HAVE_SESSION && this.haveGCSession) {
		this.emit('disconnectedFromGC', proto.status);
		this.haveGCSession = false;
		this._connect(); // Try to reconnect
	}
};

// MatchList
handlers[Language.MatchList] = function(body) {
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
handlers[Language.PlayersProfile] = function(body) {
	let proto;
	try {
		proto = decodeProto(Protos.CMsgGCCStrike15_v2_PlayersProfile, body);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode PlayersProfile: ${err.message}`));
		return;
	}

	if (!proto.account_profiles || !proto.account_profiles[0]) {
		this.emit('debug', "PlayersProfile missing account_profiles");
		return;
	}

	let profile = proto.account_profiles[0];
	
	if (!profile.account_id) {
		this.emit('debug', "PlayersProfile missing account_id");
		return;
	}

	let sid = SteamID.fromIndividualAccountID(profile.account_id);

	this.emit('playersProfile', profile);
	this.emit('playersProfile#' + sid.getSteamID64(), profile);
};

// Inspecting items
handlers[Language.Client2GCEconPreviewDataBlockResponse] = function(body) {
	let proto;
	try {
		proto = decodeProto(Protos.CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockResponse, body);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode Client2GCEconPreviewDataBlockResponse: ${err.message}`));
		return;
	}

	if (!proto || !proto.iteminfo) {
		this.emit('debug', "Client2GCEconPreviewDataBlockResponse missing iteminfo");
		return;
	}

	let item = proto.iteminfo;
	
	// Validate critical fields
	if (typeof item.itemid === 'undefined') {
		this.emit('debug', "Item inspection missing itemid");
		return;
	}

	// decode the wear
	if (typeof item.paintwear !== 'undefined') {
		let buf = Buffer.alloc(4);
		buf.writeUInt32BE(item.paintwear, 0);
		item.paintwear = buf.readFloatBE(0);
	}
	
	// Process stickers array - using helper function for consistency
	if (item.stickers && Array.isArray(item.stickers)) {
		item.stickers = item.stickers.map(sticker => this._mapStickerLikeItem(sticker));
	}
	
	// Process keychains array - using helper function for consistency
	if (item.keychains && Array.isArray(item.keychains)) {
		item.keychains = item.keychains.map(keychain => this._mapStickerLikeItem(keychain));
	}
	
	// Process variations array - using helper function for consistency
	if (item.variations && Array.isArray(item.variations)) {
		item.variations = item.variations.map(variation => this._mapStickerLikeItem(variation));
	}

	this.emit("inspectItemInfo", item);
	this.emit("inspectItemInfo#" + item.itemid, item);
};
// Item manipulation
handlers[Language.CraftResponse] = function(body) {
	let blueprint = body.readInt16(); // recipe ID
	let unknown = body.readUint32(); // always 0 in my experience

	let idCount = body.readUint16();
	let idList = []; // let's form an array of IDs

	for (let i = 0; i < idCount; i++) {
		let id = body.readUint64().toString(); // grab the next id
		idList.push(id); // item id
	}

	this.emit('craftingComplete', blueprint, idList);
};

handlers[Language.ItemCustomizationNotification] = function(body) {
	let proto;
	try {
		proto = decodeProto(Protos.CMsgGCItemCustomizationNotification, body);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode ItemCustomizationNotification: ${err.message}`));
		return;
	}
	
	if (!proto.item_id || proto.item_id.length == 0 || !proto.request) {
		this.emit('debug', "ItemCustomizationNotification missing required fields");
		return;
	}

	this.emit('itemCustomizationNotification', proto.item_id, proto.request);
};

// SO
NodeCS2.prototype._processSOEconItem = function(item) {
	// Inventory position
	let isNew = (item.inventory >>> 30) & 1;
	item.position = (isNew ? 0 : item.inventory & 0xFFFF);

	// Is this item contained in a casket?
	let casketIdLow = getAttributeValueBytes(272);
	let casketIdHigh = getAttributeValueBytes(273);
	if (casketIdLow && casketIdHigh) {
		let casketIdLong = new Long(casketIdLow.readUInt32LE(0), casketIdHigh.readUInt32LE(0));
		item.casket_id = casketIdLong.toString();
	}

	// Item custom names
	let customNameBytes = getAttributeValueBytes(111);
	if (customNameBytes && !item.custom_name) {
		item.custom_name = customNameBytes.slice(2).toString('utf8');
	}

	// Paint index/seed/wear
	let paintIndexBytes = getAttributeValueBytes(6);
	if (paintIndexBytes) {
		item.paint_index = paintIndexBytes.readFloatLE(0);
	}

	let paintSeedBytes = getAttributeValueBytes(7);
	if (paintSeedBytes) {
		item.paint_seed = Math.floor(paintSeedBytes.readFloatLE(0));
	}

	let paintWearBytes = getAttributeValueBytes(8);
	if (paintWearBytes) {
		item.paint_wear = paintWearBytes.readFloatLE(0);
	}

	let tradableAfterDateBytes = getAttributeValueBytes(75);
	if (tradableAfterDateBytes) {
		item.tradable_after = new Date(tradableAfterDateBytes.readUInt32LE(0) * 1000);
	}

	let killEaterBytes = getAttributeValueBytes(80);
	if (killEaterBytes) {
		item.kill_eater_value = killEaterBytes.readUInt32LE(0);
	}

	let killEaterScoreTypeBytes = getAttributeValueBytes(81);
	if (killEaterScoreTypeBytes) {
		item.kill_eater_score_type = killEaterScoreTypeBytes.readUInt32LE(0);
	}

	let questIdBytes = getAttributeValueBytes(168);
	if (questIdBytes) {
		item.quest_id = questIdBytes.readUInt32LE(0);
	}

	let stickers = [];
	for (let i = 0; i <= 5; i++) {
		let stickerIdBytes = getAttributeValueBytes(113 + (i * 4));
		if (stickerIdBytes) {
			let sticker = {
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
			let schemaBytes = getAttributeValueBytes(290 + i);
			if (schemaBytes) {
				sticker.slot = schemaBytes.readUInt32LE(0);
			}

			['wear', 'scale', 'rotation'].forEach((attrib, idx) => {
				let bytes = getAttributeValueBytes(114 + (i * 4) + idx);
				if (bytes) {
					sticker[attrib] = bytes.readFloatLE(0);
				}
			});

			['offset_x', 'offset_y'].forEach((attrib, idx) => {
				let bytes = getAttributeValueBytes(278 + (i * 2) + idx);
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
		case 1201:
			// Storage Unit
			item.casket_contained_item_count = 0;
			let itemCountBytes = getAttributeValueBytes(270);
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
		let attrib = (item.attribute || []).find(attrib => attrib.def_index == attribDefIndex);
		return attrib ? attrib.value_bytes : null;
	}
};

handlers[Language.SO_Create] = function(body) {
	let proto;
	try {
		proto = decodeProto(Protos.CMsgSOSingleObject, body);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode SO_Create: ${err.message}`));
		return;
	}
	this._handleSOCreate(proto);
};

NodeCS2.prototype._handleSOCreate = function(proto) {
	if (!proto || proto.type_id != 1) {
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
	
	this._processSOEconItem(item);
	this.inventory.push(item);

	this.emit('itemAcquired', item);
};

handlers[Language.SO_Update] = function(body) {
	let proto;
	try {
		proto = decodeProto(Protos.CMsgSOSingleObject, body);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode SO_Update: ${err.message}`));
		return;
	}
	this._handleSOUpdate(proto);
};

NodeCS2.prototype._handleSOUpdate = function(so) {
	if (!so || so.type_id != 1) {
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
		this.emit('debug', "SO_Update item missing id");
		return;
	}

	this._processSOEconItem(item);

	for (let i = 0; i < this.inventory.length; i++) {
		if (this.inventory[i].id == item.id) {
			let oldItem = this.inventory[i];
			this.inventory[i] = item;

			this.emit('itemChanged', oldItem, item);
			break;
		}
	}
};

handlers[Language.SO_Destroy] = function(body) {
	let proto;
	try {
		proto = decodeProto(Protos.CMsgSOSingleObject, body);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode SO_Destroy: ${err.message}`));
		return;
	}
	this._handleSODestroy(proto);
};

NodeCS2.prototype._handleSODestroy = function(proto) {
	if (!proto || proto.type_id != 1) {
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
		this.emit('debug', "SO_Destroy item missing id");
		return;
	}

	item.id = item.id.toString();
	let itemData = null;
	for (let i = 0; i < this.inventory.length; i++) {
		if (this.inventory[i].id == item.id) {
			itemData = this.inventory[i];
			this.inventory.splice(i, 1);
			break;
		}
	}

	this.emit('itemRemoved', itemData);
};


handlers[Language.SO_UpdateMultiple] = function(body) {
	let proto;
	try {
		proto = decodeProto(Protos.CMsgSOMultipleObjects, body);
	} catch (err) {
		this.emit('error', new Error(`Failed to decode SO_UpdateMultiple: ${err.message}`));
		return;
	}

	(proto.objects_added || []).forEach(item => this._handleSOCreate(item));
	(proto.objects_modified || []).forEach(item => this._handleSOUpdate(item));
	(proto.objects_removed || []).forEach(item => this._handleSODestroy(item));
};

function decodeProto(proto, encoded) {
	if (ByteBuffer.isByteBuffer(encoded)) {
		encoded = encoded.toBuffer();
	}

	let decoded = proto.decode(encoded);
	let objNoDefaults = proto.toObject(decoded, {"longs": String});
	let objWithDefaults = proto.toObject(decoded, {"defaults": true, "longs": String});
	return replaceDefaults(objNoDefaults, objWithDefaults);

	function replaceDefaults(noDefaults, withDefaults) {
		if (Array.isArray(withDefaults)) {
			return withDefaults.map((val, idx) => replaceDefaults(noDefaults[idx], val));
		}

		for (let i in withDefaults) {
			if (!withDefaults.hasOwnProperty(i)) {
				continue;
			}

			if (withDefaults[i] && typeof withDefaults[i] === 'object' && !Buffer.isBuffer(withDefaults[i])) {
				// Covers both object and array cases, both of which will work
				// Won't replace empty arrays, but that's desired behavior
				withDefaults[i] = replaceDefaults(noDefaults[i], withDefaults[i]);
			} else if (typeof noDefaults[i] === 'undefined' && isReplaceableDefaultValue(withDefaults[i])) {
				withDefaults[i] = null;
			}
		}

		return withDefaults;
	}

	function isReplaceableDefaultValue(val) {
		if (Buffer.isBuffer(val) && val.length == 0) {
			// empty buffer is replaceable
			return true;
		}

		if (Array.isArray(val)) {
			// empty array is not replaceable (empty repeated fields)
			return false;
		}

		if (val === '0') {
			// Zero as a string is replaceable (64-bit integer)
			return true;
		}

		// Anything falsy is true
		return !val;
	}
}
