'use strict';

// An opt-in harness, never a background task. Reports contain no account or item IDs.
const fs = require('fs');
const { isDeepStrictEqual } = require('util');
const NodeCS2 = require('../');
const SNAPSHOT = '3fc98e763328f7d1627405b389d1b6b69c5b0e38';
const READS = new Set(['profile', 'inspect', 'missions', 'casket']);
const MUTATIONS = {
	applyPatch: [0, 1],
	removePatch: [0],
	extractSticker: [0],
	encapsulateSticker: [0],
	applyKeychain: [0, 1],
	openCrate: [0, 1]
};
function failure(code, message) {
	const error = new Error(message);
	error.code = code;
	return error;
}
function selectCase(config, name) {
	if (name === 'profile') return { name, method: 'profile', args: [], mutation: false };
	const entry = (config.cases || {})[name];
	if (!entry || !Array.isArray(entry.args)) throw failure('PREREQUISITE', 'Selected case is not configured');
	if (READS.has(entry.method)) return { ...entry, name, mutation: false };
	const indexes = Object.prototype.hasOwnProperty.call(MUTATIONS, entry.method) && MUTATIONS[entry.method];
	if (!indexes) throw failure('PREREQUISITE', 'This method has no supported live assertion');
	const designated = new Set(config.testItemIds || []);
	if (!indexes.every((i) => typeof entry.args[i] === 'string' && designated.has(entry.args[i]))) {
		throw failure('PREREQUISITE', 'Every consumed or changed item must be designated');
	}
	if (
		!Array.isArray(entry.expectedInventory) ||
		!entry.expectedInventory.length ||
		!entry.expectedInventory.every(
			(check) =>
				typeof check.id === 'string' &&
				designated.has(check.id) &&
				typeof check.present === 'boolean' &&
				(!check.present || (check.properties && Object.keys(check.properties).length))
		)
	) {
		throw failure('PREREQUISITE', 'An explicit observable inventory postcondition is required');
	}
	return { ...entry, name, mutation: true, itemIndexes: indexes };
}
function inventoryMatches(inventory, expected) {
	return expected.every((check) => {
		const item = inventory.find((candidate) => candidate.id === check.id);
		if (!check.present) return !item;
		return !!item && Object.entries(check.properties).every(([key, value]) => isDeepStrictEqual(item[key], value));
	});
}
function classify(error, mutationSent) {
	if (mutationSent && error.code !== 'ASSERTION') return 'uncertain';
	if (error.code === 'PREREQUISITE') return 'unavailable-prerequisite';
	if (error.code === 'ASSERTION') return 'assertion-failure';
	return 'steam-or-gc-outage';
}
function waitEvent(emitter, event, timeout) {
	let cancel;
	const promise = new Promise((resolve, reject) => {
		const cleanup = () => {
			clearTimeout(timer);
			emitter.removeListener(event, success);
			emitter.removeListener('error', fail);
		};
		const success = (...args) => {
			cleanup();
			resolve(args);
		};
		const fail = (error) => {
			cleanup();
			reject(error);
		};
		const timer = setTimeout(() => fail(failure('TIMEOUT', 'Steam/GC response unavailable')), timeout);
		cancel = cleanup;
		emitter.once(event, success);
		emitter.once('error', fail);
	});
	// A transport may emit an error and then throw before the caller can await.
	promise.catch(() => {});
	return { promise, cancel };
}
async function runCase(cs, steam, selected, markSent) {
	const args = selected.args;
	if (selected.method === 'profile') {
		const value = await cs.requestPlayersProfile(args[0] || steam.steamID);
		if (!value.account_id) throw failure('ASSERTION', 'Profile response missing account');
		return;
	}
	if (selected.method === 'inspect') {
		if (typeof args[0] !== 'string') throw failure('PREREQUISITE', 'Inspect link required');
		const item = await cs.inspectItem(args[0]);
		if (!item.itemid) throw failure('ASSERTION', 'Inspect response missing item');
		return;
	}
	if (selected.method === 'missions') {
		await cs.requestRecurringMissionSchedule();
		return;
	}
	if (selected.method === 'casket') {
		if (!(cs.inventory || []).some((item) => item.id === args[0]))
			throw failure('PREREQUISITE', 'Casket is unavailable');
		await cs.getCasketContents(args[0]);
		return;
	}
	if (!selected.itemIndexes.every((i) => (cs.inventory || []).some((item) => item.id === args[i]))) {
		throw failure('PREREQUISITE', 'Designated test items are unavailable');
	}
	if (inventoryMatches(cs.inventory || [], selected.expectedInventory))
		throw failure('PREREQUISITE', 'Postcondition already holds; cannot verify a change');
	markSent();
	// Exactly one invocation. Never retry even after timeout, disconnect, or send failure.
	await cs[selected.method](...args);
	const deadline = Date.now() + 10000;
	while (!inventoryMatches(cs.inventory || [], selected.expectedInventory)) {
		if (Date.now() >= deadline)
			throw failure('UNCERTAIN', 'Notification received but inventory postcondition not observed');
		await new Promise((resolve) => setTimeout(resolve, 100));
	}
}
async function main(argv = process.argv.slice(2), env = process.env, dependencies = {}) {
	const waiters = [];
	let steam,
		cs,
		mutationSent = false;
	let name = 'profile';
	const report = { date: new Date().toISOString(), protocolSnapshot: SNAPSHOT, case: name };
	try {
		if (env.CS2_LIVE !== '1') throw failure('PREREQUISITE', 'Set CS2_LIVE=1 to enable authenticated tests');
		if (argv.length && (argv.length !== 2 || argv[0] !== '--case' || !argv[1]))
			throw failure('PREREQUISITE', 'Select exactly one --case');
		if (argv.length) name = argv[1];
		report.case = name;
		let config;
		try {
			config = env.CS2_LIVE_CONFIG ? JSON.parse(fs.readFileSync(env.CS2_LIVE_CONFIG, 'utf8')) : {};
		} catch (error) {
			throw failure('PREREQUISITE', 'Live configuration must be readable JSON');
		}
		if (!config || typeof config !== 'object' || Array.isArray(config))
			throw failure('PREREQUISITE', 'Live configuration must be an object');
		const selected = selectCase(config, name);
		report.method = selected.method;
		if (!env.STEAM_REFRESH_TOKEN && !(env.STEAM_ACCOUNT_NAME && env.STEAM_PASSWORD))
			throw failure('PREREQUISITE', 'Steam credentials are unavailable');
		const SteamUser = dependencies.SteamUser || require('steam-user');
		steam = new SteamUser({ dataDirectory: null });
		cs = new NodeCS2(steam);
		// Keep error events handled after individual waiters settle.
		steam.on('error', () => {});
		cs.on('error', () => {});
		const loggedOn = waitEvent(steam, 'loggedOn', 60000);
		waiters.push(loggedOn.cancel);
		steam.logOn(
			env.STEAM_REFRESH_TOKEN
				? { refreshToken: env.STEAM_REFRESH_TOKEN }
				: {
						accountName: env.STEAM_ACCOUNT_NAME,
						password: env.STEAM_PASSWORD,
						twoFactorCode: env.STEAM_TWO_FACTOR_CODE
					}
		);
		try {
			await loggedOn.promise;
		} catch (error) {
			if ([5, 63, 65, 85, 88].includes(error.eresult))
				throw failure('PREREQUISITE', 'Steam authentication requires attention');
			throw error;
		}
		const connected = waitEvent(cs, 'connectedToGC', 60000);
		waiters.push(connected.cancel);
		steam.gamesPlayed([730]);
		await connected.promise;
		await runCase(cs, steam, selected, () => {
			mutationSent = true;
		});
		report.outcome = 'passed';
	} catch (error) {
		report.outcome = classify(error, mutationSent);
		report.code = typeof error.code === 'string' ? error.code : 'UNAVAILABLE';
		process.exitCode = { 'unavailable-prerequisite': 2, 'steam-or-gc-outage': 3, 'assertion-failure': 1, uncertain: 4 }[
			report.outcome
		];
	} finally {
		for (const cancel of waiters) cancel();
		if (cs) cs.dispose();
		if (steam) steam.logOff();
	}
	console.log(JSON.stringify(report));
}
module.exports = { selectCase, inventoryMatches, classify, runCase, main, waitEvent };
if (require.main === module) main();
