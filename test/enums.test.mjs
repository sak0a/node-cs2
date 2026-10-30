import { describe, it, expect } from 'vitest';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// enums.js requires index.js internally and attaches static properties to the
// NodeCS2 constructor. We can require it without instantiating NodeCS2.
require('../enums.js');
const NodeCS2 = require('../index.js');

describe('enums.js', () => {
	describe('NodeCS2.GCConnectionStatus', () => {
		it('is defined on NodeCS2', () => {
			expect(NodeCS2.GCConnectionStatus).toBeDefined();
		});

		it('has exactly 5 entries', () => {
			expect(Object.keys(NodeCS2.GCConnectionStatus).length).toBe(5);
		});

		it('HAVE_SESSION is 0', () => {
			expect(NodeCS2.GCConnectionStatus.HAVE_SESSION).toBe(0);
		});

		it('GC_GOING_DOWN is 1', () => {
			expect(NodeCS2.GCConnectionStatus.GC_GOING_DOWN).toBe(1);
		});

		it('NO_SESSION is 2', () => {
			expect(NodeCS2.GCConnectionStatus.NO_SESSION).toBe(2);
		});

		it('NO_SESSION_IN_LOGON_QUEUE is 3', () => {
			expect(NodeCS2.GCConnectionStatus.NO_SESSION_IN_LOGON_QUEUE).toBe(3);
		});

		it('NO_STEAM is 4', () => {
			expect(NodeCS2.GCConnectionStatus.NO_STEAM).toBe(4);
		});

		it('all values are numbers', () => {
			Object.values(NodeCS2.GCConnectionStatus).forEach((val) => {
				expect(typeof val).toBe('number');
			});
		});
	});

	describe('NodeCS2.ItemCustomizationNotification', () => {
		it('is defined on NodeCS2', () => {
			expect(NodeCS2.ItemCustomizationNotification).toBeDefined();
		});

		it('all values are numbers', () => {
			Object.values(NodeCS2.ItemCustomizationNotification).forEach((val) => {
				expect(typeof val).toBe('number');
			});
		});

		const expectedEntries = {
			NameItem: 1006,
			UnlockCrate: 1007,
			XRayItemReveal: 1008,
			XRayItemClaim: 1009,
			CasketTooFull: 1011,
			CasketContents: 1012,
			CasketAdded: 1013,
			CasketRemoved: 1014,
			CasketInvFull: 1015,
			NameBaseItem: 1019,
			RemoveItemName: 1030,
			RemoveSticker: 1053,
			ExtractSticker: 1054,
			EncapsulateSticker: 1055,
			ApplySticker: 1086,
			StatTrakSwap: 1088,
			RemovePatch: 1089,
			ApplyPatch: 1090,
			ApplyKeychain: 1091,
			RemoveKeychain: 1092,
			ActivateFanToken: 9178,
			ActivateOperationCoin: 9179,
			GraffitiUnseal: 9185,
			GenerateSouvenir: 9204,
			ClientRedeemMissionReward: 9209,
			ClientRedeemFreeReward: 9219,
			XpShopUseTicket: 9221,
			XpShopAckTracks: 9222
		};

		Object.entries(expectedEntries).forEach(([name, value]) => {
			it(`${name} is ${value}`, () => {
				expect(NodeCS2.ItemCustomizationNotification[name]).toBe(value);
			});
		});

		it('has all expected keys', () => {
			const expected = Object.keys(expectedEntries);
			const actual = Object.keys(NodeCS2.ItemCustomizationNotification);
			expected.forEach((key) => {
				expect(actual).toContain(key);
			});
		});
	});
});
