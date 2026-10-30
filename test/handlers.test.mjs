import { describe, it, expect, beforeEach } from 'vitest';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// Load handlers.js which attaches _mapStickerLikeItem and _processSOEconItem
// to NodeCS2.prototype. enums.js must be loaded first so enums are present.
require('../enums.js');
require('../handlers.js');
const NodeCS2 = require('../index.js');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Build a fake NodeCS2 instance that satisfies the prototype methods without
 * needing a real steam-user object.
 */
function makeFakeInstance() {
	const instance = Object.create(NodeCS2.prototype);
	instance.haveGCSession = false;
	instance._isInCSGO = false;
	instance.inventory = [];
	instance._helloTimer = null;
	instance._helloTimerMs = 1000;
	instance._steam = { on: () => {} };
	// No-op emit so handlers that call this.emit() don't throw
	instance.emit = () => {};
	return instance;
}

/**
 * Create a 4-byte Buffer encoding a float32 in little-endian.
 */
function floatLE(value) {
	const buf = Buffer.alloc(4);
	buf.writeFloatLE(value, 0);
	return buf;
}

/**
 * Create a 4-byte Buffer encoding a uint32 in little-endian.
 */
function uint32LE(value) {
	const buf = Buffer.alloc(4);
	buf.writeUInt32LE(value, 0);
	return buf;
}

// ---------------------------------------------------------------------------
// _mapStickerLikeItem
// ---------------------------------------------------------------------------

describe('NodeCS2.prototype._mapStickerLikeItem', () => {
	let instance;

	beforeEach(() => {
		instance = makeFakeInstance();
	});

	it('returns an object with all expected keys for empty input', () => {
		const result = instance._mapStickerLikeItem({});
		const expectedKeys = [
			'slot',
			'sticker_id',
			'wear',
			'scale',
			'rotation',
			'tint_id',
			'offset_x',
			'offset_y',
			'offset_z',
			'pattern',
			'highlight_reel',
			'wrapped_sticker'
		];
		expectedKeys.forEach((key) => {
			expect(result).toHaveProperty(key);
		});
	});

	it('defaults slot to 0 when not provided', () => {
		expect(instance._mapStickerLikeItem({}).slot).toBe(0);
	});

	it('defaults sticker_id to 0 when not provided', () => {
		expect(instance._mapStickerLikeItem({}).sticker_id).toBe(0);
	});

	it('defaults nullable fields to null when not provided', () => {
		const result = instance._mapStickerLikeItem({});
		const nullableKeys = [
			'wear',
			'scale',
			'rotation',
			'tint_id',
			'offset_x',
			'offset_y',
			'offset_z',
			'pattern',
			'highlight_reel',
			'wrapped_sticker'
		];
		nullableKeys.forEach((key) => {
			expect(result[key]).toBeNull();
		});
	});

	it('preserves slot when provided', () => {
		expect(instance._mapStickerLikeItem({ slot: 3 }).slot).toBe(3);
	});

	it('preserves sticker_id when provided', () => {
		expect(instance._mapStickerLikeItem({ sticker_id: 4321 }).sticker_id).toBe(4321);
	});

	it('preserves wear when provided', () => {
		expect(instance._mapStickerLikeItem({ wear: 0.5 }).wear).toBe(0.5);
	});

	it('preserves scale when provided', () => {
		expect(instance._mapStickerLikeItem({ scale: 1.0 }).scale).toBe(1.0);
	});

	it('preserves rotation when provided', () => {
		expect(instance._mapStickerLikeItem({ rotation: 90 }).rotation).toBe(90);
	});

	it('preserves tint_id when provided', () => {
		expect(instance._mapStickerLikeItem({ tint_id: 7 }).tint_id).toBe(7);
	});

	it('preserves offset_x when provided', () => {
		expect(instance._mapStickerLikeItem({ offset_x: 0.25 }).offset_x).toBe(0.25);
	});

	it('preserves offset_y when provided', () => {
		expect(instance._mapStickerLikeItem({ offset_y: 0.75 }).offset_y).toBe(0.75);
	});

	it('preserves offset_z when provided', () => {
		expect(instance._mapStickerLikeItem({ offset_z: 0.1 }).offset_z).toBe(0.1);
	});

	it('preserves pattern when provided', () => {
		expect(instance._mapStickerLikeItem({ pattern: 42 }).pattern).toBe(42);
	});

	it('preserves highlight_reel when provided', () => {
		expect(instance._mapStickerLikeItem({ highlight_reel: true }).highlight_reel).toBe(true);
	});

	it('preserves wrapped_sticker when provided', () => {
		expect(instance._mapStickerLikeItem({ wrapped_sticker: 'abc' }).wrapped_sticker).toBe('abc');
	});

	it('preserves all fields when fully populated', () => {
		const input = {
			slot: 2,
			sticker_id: 9999,
			wear: 0.3,
			scale: 0.9,
			rotation: 180,
			tint_id: 5,
			offset_x: 0.1,
			offset_y: 0.2,
			offset_z: 0.3,
			pattern: 17,
			highlight_reel: false,
			wrapped_sticker: 'wrapped'
		};
		const result = instance._mapStickerLikeItem(input);
		expect(result.slot).toBe(2);
		expect(result.sticker_id).toBe(9999);
		expect(result.wear).toBe(0.3);
		expect(result.scale).toBe(0.9);
		expect(result.rotation).toBe(180);
		expect(result.tint_id).toBe(5);
		expect(result.offset_x).toBe(0.1);
		expect(result.offset_y).toBe(0.2);
		expect(result.offset_z).toBe(0.3);
		expect(result.pattern).toBe(17);
		expect(result.highlight_reel).toBe(false); // ?? keeps defined falsy values
		expect(result.wrapped_sticker).toBe('wrapped');
	});
});

// ---------------------------------------------------------------------------
// _processSOEconItem
// ---------------------------------------------------------------------------

describe('NodeCS2.prototype._processSOEconItem', () => {
	let instance;

	beforeEach(() => {
		instance = makeFakeInstance();
	});

	it('sets position to 0 for a new item (bit 30 set)', () => {
		// inventory with bit 30 set => isNew = 1 => position = 0
		const item = { inventory: 1 << 30, attribute: [] };
		instance._processSOEconItem(item);
		expect(item.position).toBe(0);
	});

	it('sets position from low 16 bits when item is not new', () => {
		// bit 30 clear, low 16 bits = 5 => position = 5
		const item = { inventory: 5, attribute: [] };
		instance._processSOEconItem(item);
		expect(item.position).toBe(5);
	});

	it('extracts paint_index from ATTRIB_PAINT_INDEX (def_index 6)', () => {
		const item = {
			inventory: 0,
			attribute: [{ def_index: 6, value_bytes: floatLE(31) }]
		};
		instance._processSOEconItem(item);
		// readFloatLE preserves the value
		expect(item.paint_index).toBeCloseTo(31, 2);
	});

	it('extracts paint_seed from ATTRIB_PAINT_SEED (def_index 7)', () => {
		const item = {
			inventory: 0,
			attribute: [{ def_index: 7, value_bytes: floatLE(417) }]
		};
		instance._processSOEconItem(item);
		expect(item.paint_seed).toBe(Math.floor(417));
	});

	it('extracts paint_wear from ATTRIB_PAINT_WEAR (def_index 8)', () => {
		const paintWear = 0.123456789;
		const item = {
			inventory: 0,
			attribute: [{ def_index: 8, value_bytes: floatLE(paintWear) }]
		};
		instance._processSOEconItem(item);
		expect(item.paint_wear).toBeCloseTo(paintWear, 5);
	});

	it('extracts custom_name from ATTRIB_CUSTOM_NAME (def_index 111)', () => {
		// custom_name bytes: 2-byte prefix + UTF-8 string
		const name = 'My Knife';
		const prefix = Buffer.alloc(2); // 2-byte prefix (ignored)
		const nameBytes = Buffer.concat([prefix, Buffer.from(name, 'utf8')]);
		const item = {
			inventory: 0,
			attribute: [{ def_index: 111, value_bytes: nameBytes }]
		};
		instance._processSOEconItem(item);
		expect(item.custom_name).toBe(name);
	});

	it('does not overwrite existing custom_name', () => {
		const prefix = Buffer.alloc(2);
		const nameBytes = Buffer.concat([prefix, Buffer.from('New Name', 'utf8')]);
		const item = {
			inventory: 0,
			custom_name: 'Original',
			attribute: [{ def_index: 111, value_bytes: nameBytes }]
		};
		instance._processSOEconItem(item);
		expect(item.custom_name).toBe('Original');
	});

	it('extracts casket_id when both ATTRIB_CASKET_ID_LOW (272) and HIGH (273) are present', () => {
		// Use Long to verify: low=1, high=0 => casketId = 1
		const item = {
			inventory: 0,
			attribute: [
				{ def_index: 272, value_bytes: uint32LE(1) }, // low
				{ def_index: 273, value_bytes: uint32LE(0) } // high
			]
		};
		instance._processSOEconItem(item);
		expect(typeof item.casket_id).toBe('string');
		expect(item.casket_id).toBe('1');
	});

	it('does not set casket_id when only ATTRIB_CASKET_ID_LOW is present', () => {
		const item = {
			inventory: 0,
			attribute: [{ def_index: 272, value_bytes: uint32LE(1) }]
		};
		instance._processSOEconItem(item);
		expect(item.casket_id).toBeUndefined();
	});

	it('does not set casket_id when only ATTRIB_CASKET_ID_HIGH is present', () => {
		const item = {
			inventory: 0,
			attribute: [{ def_index: 273, value_bytes: uint32LE(1) }]
		};
		instance._processSOEconItem(item);
		expect(item.casket_id).toBeUndefined();
	});

	it('extracts sticker from ATTRIB_STICKER_ID_BASE (def_index 113)', () => {
		// Slot 0 sticker ID is at def_index 113 + (0 * 4) = 113
		const item = {
			inventory: 0,
			attribute: [{ def_index: 113, value_bytes: uint32LE(1234) }]
		};
		instance._processSOEconItem(item);
		expect(Array.isArray(item.stickers)).toBe(true);
		expect(item.stickers.length).toBe(1);
		expect(item.stickers[0].sticker_id).toBe(1234);
		expect(item.stickers[0].slot).toBe(0);
	});

	it('extracts sticker wear from ATTRIB_STICKER_WEAR_BASE (def_index 114)', () => {
		// Slot 0: sticker ID at 113, wear at 114 + (0*4) + 0 = 114
		const wear = 0.5;
		const item = {
			inventory: 0,
			attribute: [
				{ def_index: 113, value_bytes: uint32LE(500) },
				{ def_index: 114, value_bytes: floatLE(wear) }
			]
		};
		instance._processSOEconItem(item);
		expect(item.stickers[0].wear).toBeCloseTo(wear, 5);
	});

	it('extracts sticker slot override from ATTRIB_STICKER_SCHEMA_BASE (def_index 290)', () => {
		// Schema at 290 + slot index overrides the slot number
		const item = {
			inventory: 0,
			attribute: [
				{ def_index: 113, value_bytes: uint32LE(777) },
				{ def_index: 290, value_bytes: uint32LE(4) } // override slot to 4
			]
		};
		instance._processSOEconItem(item);
		expect(item.stickers[0].slot).toBe(4);
	});

	it('extracts multiple stickers across different slots', () => {
		// Slot 0 => def_index 113; Slot 1 => def_index 113 + 4 = 117
		const item = {
			inventory: 0,
			attribute: [
				{ def_index: 113, value_bytes: uint32LE(100) },
				{ def_index: 117, value_bytes: uint32LE(200) }
			]
		};
		instance._processSOEconItem(item);
		expect(item.stickers.length).toBe(2);
		const ids = item.stickers.map((s) => s.sticker_id);
		expect(ids).toContain(100);
		expect(ids).toContain(200);
	});

	it('does not set item.stickers when no sticker attributes are present', () => {
		const item = { inventory: 0, attribute: [] };
		instance._processSOEconItem(item);
		expect(item.stickers).toBeUndefined();
	});

	it('sets casket_contained_item_count for DEFINDEX_STORAGE_UNIT (1201) with no count attr', () => {
		const item = {
			inventory: 0,
			def_index: 1201,
			attribute: []
		};
		instance._processSOEconItem(item);
		expect(item.casket_contained_item_count).toBe(0);
	});

	it('sets casket_contained_item_count for DEFINDEX_STORAGE_UNIT when ATTRIB_CASKET_ITEM_COUNT (270) present', () => {
		const item = {
			inventory: 0,
			def_index: 1201,
			attribute: [{ def_index: 270, value_bytes: uint32LE(42) }]
		};
		instance._processSOEconItem(item);
		expect(item.casket_contained_item_count).toBe(42);
	});

	it('does not set casket_contained_item_count for non-storage-unit items', () => {
		const item = {
			inventory: 0,
			def_index: 7,
			attribute: []
		};
		instance._processSOEconItem(item);
		expect(item.casket_contained_item_count).toBeUndefined();
	});

	it('extracts tradable_after date from ATTRIB_TRADABLE_AFTER_DATE (def_index 75)', () => {
		const timestamp = 1700000000; // some Unix timestamp
		const item = {
			inventory: 0,
			attribute: [{ def_index: 75, value_bytes: uint32LE(timestamp) }]
		};
		instance._processSOEconItem(item);
		expect(item.tradable_after).toBeInstanceOf(Date);
		expect(item.tradable_after.getTime()).toBe(timestamp * 1000);
	});

	it('extracts kill_eater_value from ATTRIB_KILL_EATER_VALUE (def_index 80)', () => {
		const item = {
			inventory: 0,
			attribute: [{ def_index: 80, value_bytes: uint32LE(512) }]
		};
		instance._processSOEconItem(item);
		expect(item.kill_eater_value).toBe(512);
	});

	it('extracts kill_eater_score_type from ATTRIB_KILL_EATER_SCORE_TYPE (def_index 81)', () => {
		const item = {
			inventory: 0,
			attribute: [{ def_index: 81, value_bytes: uint32LE(3) }]
		};
		instance._processSOEconItem(item);
		expect(item.kill_eater_score_type).toBe(3);
	});

	it('does not throw when attribute array is empty', () => {
		const item = { inventory: 0, attribute: [] };
		expect(() => instance._processSOEconItem(item)).not.toThrow();
	});

	it('does not throw when attribute property is missing', () => {
		// attribute defaults to [] via || operator in getAttributeValueBytes
		const item = { inventory: 0 };
		expect(() => instance._processSOEconItem(item)).not.toThrow();
	});
});
