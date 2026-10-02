import { it, expect, vi } from 'vitest';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { selectCase, inventoryMatches, classify, runCase } = require('../scripts/live-test');
it('defaults to a read and rejects unconfigured or undesignated mutations', () => {
	expect(selectCase({}, 'profile')).toMatchObject({ mutation: false, method: 'profile' });
	expect(() => selectCase({}, 'all')).toThrow();
	expect(() => selectCase({ cases: { patch: { method: 'applyPatch', args: ['1', '2'] } } }, 'patch')).toThrow(
		'designated'
	);
	expect(() =>
		selectCase({ testItemIds: ['1', '2'], cases: { patch: { method: 'applyPatch', args: ['1', '2'] } } }, 'patch')
	).toThrow('postcondition');
});
it('requires a concrete changed inventory postcondition', () => {
	const config = {
		testItemIds: ['1', '2'],
		cases: { patch: { method: 'applyPatch', args: ['1', '2'], expectedInventory: [{ id: '2', present: false }] } }
	};
	expect(selectCase(config, 'patch').mutation).toBe(true);
	expect(inventoryMatches([{ id: '2' }], config.cases.patch.expectedInventory)).toBe(false);
	expect(inventoryMatches([{ id: '1' }], config.cases.patch.expectedInventory)).toBe(true);
});
it('never retries an uncertain mutation and distinguishes outcomes', async () => {
	const failure = Object.assign(new Error('timeout'), { code: 'TIMEOUT' });
	const cs = { inventory: [{ id: '1' }, { id: '2' }], applyPatch: vi.fn().mockRejectedValue(failure) };
	const selected = selectCase(
		{
			testItemIds: ['1', '2'],
			cases: { patch: { method: 'applyPatch', args: ['1', '2'], expectedInventory: [{ id: '2', present: false }] } }
		},
		'patch'
	);
	const sent = vi.fn();
	await expect(runCase(cs, {}, selected, sent)).rejects.toBe(failure);
	expect(cs.applyPatch).toHaveBeenCalledTimes(1);
	expect(sent).toHaveBeenCalledOnce();
	expect(classify(failure, true)).toBe('uncertain');
	expect(classify(failure, false)).toBe('steam-or-gc-outage');
	expect(classify({ code: 'ASSERTION' }, false)).toBe('assertion-failure');
	expect(classify({ code: 'PREREQUISITE' }, false)).toBe('unavailable-prerequisite');
});
it('cleans authentication waiters after a synchronous login failure', async () => {
	const { FakeSteam } = await import('./helpers/fake-steam.mjs');
	class ThrowingSteam extends FakeSteam {
		logOn() {
			throw new Error('offline');
		}
		logOff() {}
	}
	const { main } = require('../scripts/live-test');
	vi.useFakeTimers();
	const log = vi.spyOn(console, 'log').mockImplementation(() => {});
	const previous = process.exitCode;
	try {
		await main([], { CS2_LIVE: '1', STEAM_REFRESH_TOKEN: 'test-token' }, { SteamUser: ThrowingSteam });
		expect(vi.getTimerCount()).toBe(0);
		expect(JSON.parse(log.mock.calls[0][0]).outcome).toBe('steam-or-gc-outage');
	} finally {
		process.exitCode = previous;
		log.mockRestore();
		vi.useRealTimers();
	}
});
it('reports missing configuration files as unavailable prerequisites', async () => {
	const { main } = require('../scripts/live-test');
	const log = vi.spyOn(console, 'log').mockImplementation(() => {});
	const previous = process.exitCode;
	try {
		await main([], { CS2_LIVE: '1', CS2_LIVE_CONFIG: '/nonexistent/node-cs2-live.json' });
		expect(JSON.parse(log.mock.calls[0][0]).outcome).toBe('unavailable-prerequisite');
	} finally {
		process.exitCode = previous;
		log.mockRestore();
	}
});
