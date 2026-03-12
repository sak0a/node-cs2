/**
 * Named constants for node-cs2.
 * Replaces magic numbers scattered across index.js and handlers.js.
 */

// ─── Steam / App ────────────────────────────────────────────────────────────────
const STEAM_APPID = 730;

// ─── GC Hello / Connection ──────────────────────────────────────────────────────
const GC_HELLO_VERSION = 2000244;
const HELLO_INITIAL_DELAY_MS = 500;
const HELLO_BACKOFF_START_MS = 1000;
const HELLO_BACKOFF_MAX_MS = 60000;

// ─── Operation Timeouts (ms) ────────────────────────────────────────────────────
const INSPECT_ITEM_TIMEOUT_MS = 10000;
const PROFILE_TIMEOUT_MS = 10000;
const MISSION_TIMEOUT_MS = 10000;
const STICKER_TIMEOUT_MS = 10000;
const REWARD_TIMEOUT_MS = 10000;
const CASKET_TIMEOUT_MS = 30000;
const VOLATILE_ITEM_TIMEOUT_MS = 30000;
const CRATE_TIMEOUT_MS = 30000;

// ─── Player Profile ─────────────────────────────────────────────────────────────
const PLAYERS_PROFILE_REQUEST_LEVEL = 32;

// ─── Shared Object Types ────────────────────────────────────────────────────────
const SO_TYPE_ECON_ITEM = 1;

// ─── Item Definition Indices ────────────────────────────────────────────────────
const DEFINDEX_STORAGE_UNIT = 1201;

// ─── Item Attribute Definition Indices ──────────────────────────────────────────
const ATTRIB_PAINT_INDEX = 6;
const ATTRIB_PAINT_SEED = 7;
const ATTRIB_PAINT_WEAR = 8;
const ATTRIB_TRADABLE_AFTER_DATE = 75;
const ATTRIB_KILL_EATER_VALUE = 80;
const ATTRIB_KILL_EATER_SCORE_TYPE = 81;
const ATTRIB_CUSTOM_NAME = 111;
const ATTRIB_STICKER_ID_BASE = 113;
const ATTRIB_STICKER_WEAR_BASE = 114;
const ATTRIB_QUEST_ID = 168;
const ATTRIB_CASKET_ITEM_COUNT = 270;
const ATTRIB_CASKET_ID_LOW = 272;
const ATTRIB_CASKET_ID_HIGH = 273;
const ATTRIB_STICKER_OFFSET_BASE = 278;
const ATTRIB_STICKER_SCHEMA_BASE = 290;

// ─── Sticker Slots ──────────────────────────────────────────────────────────────
const STICKER_SLOT_COUNT = 5;

// ─── Keychain Sentinel ──────────────────────────────────────────────────────────
const REMOVE_KEYCHAIN_STICKER_ITEM_ID = '17293822569102704705';

module.exports = {
	STEAM_APPID,
	GC_HELLO_VERSION,
	HELLO_INITIAL_DELAY_MS,
	HELLO_BACKOFF_START_MS,
	HELLO_BACKOFF_MAX_MS,
	INSPECT_ITEM_TIMEOUT_MS,
	PROFILE_TIMEOUT_MS,
	MISSION_TIMEOUT_MS,
	STICKER_TIMEOUT_MS,
	REWARD_TIMEOUT_MS,
	CASKET_TIMEOUT_MS,
	VOLATILE_ITEM_TIMEOUT_MS,
	CRATE_TIMEOUT_MS,
	PLAYERS_PROFILE_REQUEST_LEVEL,
	SO_TYPE_ECON_ITEM,
	DEFINDEX_STORAGE_UNIT,
	ATTRIB_PAINT_INDEX,
	ATTRIB_PAINT_SEED,
	ATTRIB_PAINT_WEAR,
	ATTRIB_TRADABLE_AFTER_DATE,
	ATTRIB_KILL_EATER_VALUE,
	ATTRIB_KILL_EATER_SCORE_TYPE,
	ATTRIB_CUSTOM_NAME,
	ATTRIB_STICKER_ID_BASE,
	ATTRIB_STICKER_WEAR_BASE,
	ATTRIB_QUEST_ID,
	ATTRIB_CASKET_ITEM_COUNT,
	ATTRIB_CASKET_ID_LOW,
	ATTRIB_CASKET_ID_HIGH,
	ATTRIB_STICKER_OFFSET_BASE,
	ATTRIB_STICKER_SCHEMA_BASE,
	STICKER_SLOT_COUNT,
	REMOVE_KEYCHAIN_STICKER_ITEM_ID
};
