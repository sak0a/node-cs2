const SteamUser = require('steam-user');
const SteamID = require('steamid');
const NodeCS2 = require('./index.js');
const usermessages = require('./protobufs/generated/usermessages.js');

const user = new SteamUser();
const cs2 = new NodeCS2(user);

// ─── Config ────────────────────────────────────────────────────────────────
const CREDENTIALS = {
	accountName: 'cs2inspectdev',
	password: 'utg!hdh6ydp@gxh4DRV'
};

const TARGET_ACCOUNT_ID = 1705614979; // 32-bit account ID of the player to commend

// ─── Login ─────────────────────────────────────────────────────────────────
user.logOn(CREDENTIALS);

user.on('loggedOn', () => {
	console.log(`Logged in as ${user.steamID.getSteamID64()} (account_id: ${user.steamID.accountid})`);
	user.gamesPlayed([730]);
});

user.on('error', (err) => {
	console.error('Steam error:', err.message);
});

// ─── CS2 GC ────────────────────────────────────────────────────────────────
user.on('appLaunched', (appid) => {
	if (appid === 730) {
		console.log('CS2 launched, saying hello to GC...');
		cs2.helloGC();
	}
});

cs2.on('connectedToGC', async () => {
	console.log('Connected to GC!');

	// ─── Debug: fetch own profile to inspect weekly reward / drop data ───
	const ownSteamId = user.steamID;
	console.log(`\n=== Own Profile Debug (${ownSteamId.getSteamID64()}) ===`);
	try {
		const ownProfile = await cs2.requestPlayersProfile(ownSteamId);
		console.log('Full profile response:\n', JSON.stringify(ownProfile, null, 2));
	} catch (err) {
		console.log('Could not fetch own profile:', err.message);
	}
	console.log('=== End Own Profile Debug ===\n');

	// Check profile BEFORE commend
	const targetSteamId = SteamID.fromIndividualAccountID(TARGET_ACCOUNT_ID);
	console.log(`\n--- Checking profile BEFORE commend ---`);
	try {
		const profileBefore = await cs2.requestPlayersProfile(targetSteamId);
		console.log('Commendations before:', JSON.stringify(profileBefore.commendation || 'none'));
	} catch (err) {
		console.log('Could not fetch profile before:', err.message);
	}

	// Send commend with tokens=1
	console.log(`\nCommending player ${TARGET_ACCOUNT_ID} (with tokens=1)...`);
	cs2.commendPlayer(TARGET_ACCOUNT_ID, {
		cmd_friendly: true,
		cmd_teaching: true,
		cmd_leader: true
	}, null, 1);

	console.log('Commend sent! Waiting before re-checking profile...');

	// Check profile AFTER commend (wait a bit for GC to process)
	setTimeout(async () => {
		console.log(`\n--- Checking profile AFTER commend ---`);
		try {
			const profileAfter = await cs2.requestPlayersProfile(targetSteamId);
			console.log('Commendations after:', JSON.stringify(profileAfter.commendation || 'none'));
		} catch (err) {
			console.log('Could not fetch profile after:', err.message);
		}

		setTimeout(() => {
			console.log('\nDone. Exiting.');
			process.exit(0);
		}, 2000);
	}, 5000);
});

cs2.on('debug', (msg) => {
	console.log('[debug]', msg);
});

cs2.on('error', (err) => {
	console.error('[cs2 error]', err.message);
});
