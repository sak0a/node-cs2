import { describe, it, expect } from 'vitest';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const Constants = require('../constants.js');

describe('constants.js', () => {
	describe('Steam / App', () => {
		it('exports STEAM_APPID as 730', () => {
			expect(Constants.STEAM_APPID).toBe(730);
		});
	});

	describe('GC Hello / Connection', () => {
		it('exports GC_HELLO_VERSION as 2000244', () => {
			expect(Constants.GC_HELLO_VERSION).toBe(2000244);
		});

		it('HELLO_INITIAL_DELAY_MS is a positive number', () => {
			expect(typeof Constants.HELLO_INITIAL_DELAY_MS).toBe('number');
			expect(Constants.HELLO_INITIAL_DELAY_MS).toBeGreaterThan(0);
		});

		it('HELLO_BACKOFF_START_MS is a positive number', () => {
			expect(typeof Constants.HELLO_BACKOFF_START_MS).toBe('number');
			expect(Constants.HELLO_BACKOFF_START_MS).toBeGreaterThan(0);
		});

		it('HELLO_BACKOFF_MAX_MS is a positive number', () => {
			expect(typeof Constants.HELLO_BACKOFF_MAX_MS).toBe('number');
			expect(Constants.HELLO_BACKOFF_MAX_MS).toBeGreaterThan(0);
		});

		it('HELLO_BACKOFF_MAX_MS is greater than HELLO_BACKOFF_START_MS', () => {
			expect(Constants.HELLO_BACKOFF_MAX_MS).toBeGreaterThan(Constants.HELLO_BACKOFF_START_MS);
		});
	});

	describe('Operation Timeouts', () => {
		const timeoutConstants = [
			'INSPECT_ITEM_TIMEOUT_MS',
			'PROFILE_TIMEOUT_MS',
			'MISSION_TIMEOUT_MS',
			'STICKER_TIMEOUT_MS',
			'REWARD_TIMEOUT_MS',
			'CASKET_TIMEOUT_MS',
			'VOLATILE_ITEM_TIMEOUT_MS',
			'CRATE_TIMEOUT_MS'
		];

		timeoutConstants.forEach((name) => {
			it(`${name} is a positive number`, () => {
				expect(typeof Constants[name]).toBe('number');
				expect(Constants[name]).toBeGreaterThan(0);
			});
		});
	});

	describe('Item Attribute Definition Indices (ATTRIB_*)', () => {
		const attribConstants = [
			'ATTRIB_PAINT_INDEX',
			'ATTRIB_PAINT_SEED',
			'ATTRIB_PAINT_WEAR',
			'ATTRIB_TRADABLE_AFTER_DATE',
			'ATTRIB_KILL_EATER_VALUE',
			'ATTRIB_KILL_EATER_SCORE_TYPE',
			'ATTRIB_CUSTOM_NAME',
			'ATTRIB_STICKER_ID_BASE',
			'ATTRIB_STICKER_WEAR_BASE',
			'ATTRIB_QUEST_ID',
			'ATTRIB_CASKET_ITEM_COUNT',
			'ATTRIB_CASKET_ID_LOW',
			'ATTRIB_CASKET_ID_HIGH',
			'ATTRIB_STICKER_OFFSET_BASE',
			'ATTRIB_STICKER_SCHEMA_BASE'
		];

		attribConstants.forEach((name) => {
			it(`${name} is a positive integer`, () => {
				const val = Constants[name];
				expect(typeof val).toBe('number');
				expect(val).toBeGreaterThan(0);
				expect(Number.isInteger(val)).toBe(true);
			});
		});

		it('ATTRIB_PAINT_INDEX is 6', () => {
			expect(Constants.ATTRIB_PAINT_INDEX).toBe(6);
		});

		it('ATTRIB_PAINT_SEED is 7', () => {
			expect(Constants.ATTRIB_PAINT_SEED).toBe(7);
		});

		it('ATTRIB_PAINT_WEAR is 8', () => {
			expect(Constants.ATTRIB_PAINT_WEAR).toBe(8);
		});

		it('ATTRIB_CUSTOM_NAME is 111', () => {
			expect(Constants.ATTRIB_CUSTOM_NAME).toBe(111);
		});
	});

	describe('Shared Object Types', () => {
		it('SO_TYPE_ECON_ITEM is 1', () => {
			expect(Constants.SO_TYPE_ECON_ITEM).toBe(1);
		});
	});

	describe('Item Definition Indices', () => {
		it('DEFINDEX_STORAGE_UNIT is a positive integer', () => {
			expect(typeof Constants.DEFINDEX_STORAGE_UNIT).toBe('number');
			expect(Constants.DEFINDEX_STORAGE_UNIT).toBeGreaterThan(0);
			expect(Number.isInteger(Constants.DEFINDEX_STORAGE_UNIT)).toBe(true);
		});
	});

	describe('Sticker Slots', () => {
		it('STICKER_SLOT_COUNT is a positive integer', () => {
			expect(typeof Constants.STICKER_SLOT_COUNT).toBe('number');
			expect(Constants.STICKER_SLOT_COUNT).toBeGreaterThan(0);
			expect(Number.isInteger(Constants.STICKER_SLOT_COUNT)).toBe(true);
		});

		it('STICKER_SLOT_COUNT is 5', () => {
			expect(Constants.STICKER_SLOT_COUNT).toBe(5);
		});
	});

	describe('Keychain Sentinel', () => {
		it('REMOVE_KEYCHAIN_STICKER_ITEM_ID is a string', () => {
			expect(typeof Constants.REMOVE_KEYCHAIN_STICKER_ITEM_ID).toBe('string');
		});

		it('REMOVE_KEYCHAIN_STICKER_ITEM_ID is the expected sentinel value', () => {
			expect(Constants.REMOVE_KEYCHAIN_STICKER_ITEM_ID).toBe('17293822569102704705');
		});
	});

	describe('module exports completeness', () => {
		const expectedKeys = [
			'STEAM_APPID',
			'GC_HELLO_VERSION',
			'HELLO_INITIAL_DELAY_MS',
			'HELLO_BACKOFF_START_MS',
			'HELLO_BACKOFF_MAX_MS',
			'INSPECT_ITEM_TIMEOUT_MS',
			'PROFILE_TIMEOUT_MS',
			'MISSION_TIMEOUT_MS',
			'STICKER_TIMEOUT_MS',
			'REWARD_TIMEOUT_MS',
			'CASKET_TIMEOUT_MS',
			'VOLATILE_ITEM_TIMEOUT_MS',
			'CRATE_TIMEOUT_MS',
			'PLAYERS_PROFILE_REQUEST_LEVEL',
			'SO_TYPE_ECON_ITEM',
			'DEFINDEX_STORAGE_UNIT',
			'ATTRIB_PAINT_INDEX',
			'ATTRIB_PAINT_SEED',
			'ATTRIB_PAINT_WEAR',
			'ATTRIB_TRADABLE_AFTER_DATE',
			'ATTRIB_KILL_EATER_VALUE',
			'ATTRIB_KILL_EATER_SCORE_TYPE',
			'ATTRIB_CUSTOM_NAME',
			'ATTRIB_STICKER_ID_BASE',
			'ATTRIB_STICKER_WEAR_BASE',
			'ATTRIB_QUEST_ID',
			'ATTRIB_CASKET_ITEM_COUNT',
			'ATTRIB_CASKET_ID_LOW',
			'ATTRIB_CASKET_ID_HIGH',
			'ATTRIB_STICKER_OFFSET_BASE',
			'ATTRIB_STICKER_SCHEMA_BASE',
			'STICKER_SLOT_COUNT',
			'REMOVE_KEYCHAIN_STICKER_ITEM_ID'
		];

		expectedKeys.forEach((key) => {
			it(`exports ${key}`, () => {
				expect(Constants).toHaveProperty(key);
			});
		});
	});
});
