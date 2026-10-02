import { afterEach, beforeEach, expect, it } from 'vitest';
import { CS2, FakeSteam, Language as L, uint, bytes } from './helpers/fake-steam.mjs';
let steam, cs;
beforeEach(() => {
	steam = new FakeSteam();
	cs = new CS2(steam);
	cs.inventory = [{ id: '11', casket_contained_item_count: 1 }];
});
afterEach(() => cs.dispose());
// Field numbers and encodings come from the checked-in .proto schema. No
// protobuf encoder or decoder participates in the expected bytes.
const notification = (ids, type, slot) => [
	...ids.flatMap((id) => uint(1, id)),
	...uint(2, type),
	...(slot === undefined ? [] : uint(3, slot))
];
it.each([
	['requestPlayersProfile', ['76561197960265729'], 'ClientRequestPlayersProfile', [...uint(3, 1), ...uint(4, 32)]],
	['requestRecurringMissionSchedule', [], 'RequestRecurringMissionSchedule', []],
	['getCasketContents', ['11'], 'CasketItemLoadContents', [...uint(1, 11), ...uint(2, 11)]],
	['loadVolatileItemContents', ['11'], 'VolatileItemLoadContents', [...uint(1, 11), ...uint(2, 11)]],
	[
		'redeemFreeReward',
		[1, 0, ['18446744073709551615']],
		'ClientRedeemFreeReward',
		[...uint(1, 1), ...uint(2, 0), ...uint(3, '18446744073709551615')]
	],
	[
		'redeemMissionReward',
		[1, 2, 0, 0, 0],
		'ClientRedeemMissionReward',
		[...uint(1, 1), ...uint(2, 2), ...uint(3, 0), ...uint(4, 0), ...uint(5, 0)]
	],
	['claimVolatileItemReward', [0xffffffff], 'VolatileItemClaimReward', [255, 255, 255, 255]],
	[
		'openCrate',
		['11', '22', false, 0, 0],
		'OpenCrate',
		[...uint(1, 11), ...uint(2, 22), ...uint(3, 0), ...uint(4, 0), ...uint(5, 0)]
	],
	['extractSticker', ['11', 0], 'ItemCustomizationNotification', notification([11], 1054, 0)],
	['encapsulateSticker', ['11'], 'ItemCustomizationNotification', notification([11], 1055)],
	['applyPatch', ['11', '22', 0], 'ItemCustomizationNotification', notification([11, 22], 1090, 0)],
	['removePatch', ['11', 0], 'ItemCustomizationNotification', notification([11], 1089, 0)],
	['applyKeychain', ['11', '22', 0], 'ItemCustomizationNotification', notification([11, 22], 1091, 0)]
])('%s emits independent schema bytes', (method, args, type, payload) => {
	cs[method](...args, () => {});
	expect(steam.sent).toHaveLength(1);
	expect(steam.sent[0]).toMatchObject({ appid: 730, type: L[type], payload: Buffer.from(payload) });
});
it.each([
	['addToCasket', ['11', '22'], 'CasketItemAdd', [...uint(1, 11), ...uint(2, 22)]],
	['removeFromCasket', ['11', '22'], 'CasketItemExtract', [...uint(1, 11), ...uint(2, 22)]],
	['removeKeychain', ['11'], 'ApplySticker', [...uint(1, '17293822569102704705'), ...uint(2, 11)]],
	['acknowledgeRentalExpiration', ['11'], 'AcknowledgeRentalExpiration', uint(1, 11)],
	['acknowledgeXPShopTracks', [], 'Client2GcAckXPShopTracks', []],
	['setLeaderboardSafeName', ['🎮'], 'SetPlayerLeaderboardSafeName', bytes(1, Buffer.from('🎮'))],
	['ackPetEvent', ['18446744073709551615'], 'AckPetEvent', uint(1, '18446744073709551615')],
	[
		'requestGame',
		[{ matchId: '11', outcomeId: '22', token: 0 }],
		'MatchListRequestFullGameInfo',
		[...uint(1, 11), ...uint(2, 22), ...uint(3, 0)]
	],
	['requestLiveGames', [], 'MatchListRequestCurrentLiveGames', []],
	['requestRecentGames', ['76561197960265729'], 'MatchListRequestRecentUserGames', uint(1, 1)],
	['requestLiveGameForUser', ['76561197960265729'], 'MatchListRequestLiveGameForUser', uint(1, 1)],
	[
		'commendPlayer',
		[1, { cmd_friendly: true }, '18446744073709551615', 0],
		'ClientCommendPlayer',
		[
			...uint(1, 1),
			...uint(8, '18446744073709551615'),
			...bytes(9, [...uint(1, 1), ...uint(2, 0), ...uint(4, 0)]),
			...uint(10, 0)
		]
	],
	['deleteItem', ['11'], 'Delete', [11, 0, 0, 0, 0, 0, 0, 0]],
	[
		'nameItem',
		['11', '22', '名'],
		'NameItem',
		[11, 0, 0, 0, 0, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, ...Buffer.from('名'), 0]
	],
	['craft', [['11'], 0], 'Craft', [0, 0, 1, 0, 11, 0, 0, 0, 0, 0, 0, 0]]
])('%s emits independent fire-and-forget bytes', (method, args, type, payload) => {
	cs[method](...args);
	expect(steam.sent[0]).toMatchObject({ appid: 730, type: L[type], payload: Buffer.from(payload) });
});
it.each([
	['MatchmakingGC2ClientHello', 'accountData', uint(1, 1), { account_id: 1 }],
	['GC2ClientNotifyXPShop', 'xpShopNotification', uint(3, 0), { current_xp: 0 }],
	[
		'RecurringMissionSchema',
		'recurringMissionSchema',
		bytes(1, uint(1, 2)),
		{ missions: [{ period: 2, mission_templates: [] }] }
	],
	['MatchmakingGC2ClientSearchStats', 'matchmakingSearchStats', uint(4, 0), { num_found_nearby: 0 }],
	['MatchList', 'matchList', bytes(4, uint(1, '18446744073709551615')), [{ matchid: '18446744073709551615' }]]
])('%s decodes independent incoming bytes', (type, event, payload, expected) => {
	let value;
	cs.on(event, (data) => {
		value = data;
	});
	steam.receive(L[type], payload);
	expect(value).toMatchObject(expected);
});
