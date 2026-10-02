import CS2 = require('../..');
import SteamUser = require('steam-user');
const cs = new CS2(new SteamUser());
const inspection: Promise<CS2.ItemInfo> = cs.inspectItem('M1A2D3');
const patch: Promise<string[]> = cs.applyPatch('1', '2');
const chain: Promise<string[]> = cs.applyKeychain('1', '2');
const crate: Promise<string[]> = cs.openCrate('1', '2');
const reward: Promise<string[]> = cs.redeemMissionReward(1, 2, 3, 4);
const schedule: Promise<CS2.RecurringMissionSchema> = cs.requestRecurringMissionSchedule();
cs.requestPlayersProfile('76561198000000001', (profile) => {
	if (!(profile instanceof Error)) {
		const rank: number | null | undefined = profile.ranking?.rank_id;
	}
});
cs.on('accountData', (data) => {
	const account: number | null = data.account_id;
});
cs.on('matchList', (matches, data) => {
	const same: typeof matches = data.matches;
});
cs.on('connectionStatus', (status, data) => {
	const position: number | null = data.queue_position;
});
cs.requestRecurringMissionSchedule((error, schema) => {
	const typed: CS2.RecurringMissionSchema | undefined = schema;
});
const error = new CS2.RequestError('TIMEOUT', 'Timed out', true);
const uncertain: boolean = error.uncertain;
cs.cancelPendingRequests();
cs.dispose();
// @ts-expect-error Item IDs must not lose precision through number coercion.
cs.applyPatch(9007199254740993, '2');
