#!/usr/bin/env node
/* Validate the packed npm artifact, not repository-relative imports. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const cp = require('node:child_process');
const root = path.resolve(__dirname, '..');
const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'node-cs2-consumers-'));
function run(command, args, cwd = temporary) {
	const result = cp.spawnSync(command, args, { cwd, encoding: 'utf8', timeout: 300000 });
	if (result.status !== 0) throw new Error(`${command} ${args.join(' ')} failed\n${result.stdout}\n${result.stderr}`);
	return result.stdout.trim();
}
try {
	const [packed] = JSON.parse(
		run('npm', ['pack', '--json', '--ignore-scripts', '--pack-destination', temporary], root)
	);
	assert(packed.files.some((file) => file.path === 'types/index.d.ts'));
	assert(packed.files.some((file) => file.path === 'protobufs/generated/_load.js'));
	assert(!packed.files.some((file) => /^(?:test|node_modules)\//.test(file.path)));
	fs.writeFileSync(path.join(temporary, 'package.json'), JSON.stringify({ private: true }));
	// Set NODE_CS2_TEST_RUNTIMES=current for a fast smoke check; default tests the
	// advertised minimum and supported major release lines with actual binaries.
	const versions = (process.env.NODE_CS2_TEST_RUNTIMES || '14.21.3,16.20.2,18.20.8,20.19.0,22.12.0,24.0.0').split(',');
	const peers = ['4.2.0', '4.29.3', '5.3.0'];
	const runtimeDeps = versions
		.filter((version) => version !== 'current')
		.map((version) => `runtime-${version.split('.')[0]}@npm:node@${version}`);
	run('npm', [
		'install',
		'--no-audit',
		'--no-fund',
		path.join(temporary, packed.filename),
		...peers.map((version) => `steam-${version.replace(/\./g, '-')}@npm:steam-user@${version}`),
		...runtimeDeps,
		'typescript@5.9.3',
		'@types/node@24.19.1',
		'@types/steam-user@5.1.1'
	]);
	const usage = fs
		.readFileSync(path.join(root, 'test/types/usage.ts'), 'utf8')
		.replace("require('../..')", "require('node-cs2')");
	fs.writeFileSync(path.join(temporary, 'usage.ts'), usage);
	run(process.execPath, [
		path.join(temporary, 'node_modules/typescript/bin/tsc'),
		'--strict',
		'--noEmit',
		'--target',
		'ES2020',
		'--module',
		'commonjs',
		'usage.ts'
	]);
	console.log('Packed TypeScript declarations and callback/Promise examples passed.');
	fs.copyFileSync(path.join(root, 'fixtures/inspect-corpus.json'), path.join(temporary, 'corpus.json'));
	fs.writeFileSync(
		path.join(temporary, 'consumer.cjs'),
		`
const assert = require('assert').strict;
const NodeCS2 = require('node-cs2');
const Steam = require(process.argv[2]);
const corpus = require('./corpus.json');
const steam = new Steam({ dataDirectory: null });
const cs2 = new NodeCS2(steam);
(async () => {
 for (const fixture of corpus.valid) {
  const item = await cs2.inspectItem('steam://rungame/730/0/+csgo_econ_action_preview%20' + fixture.token);
  assert.equal(item.itemid, fixture.expected.itemid);
  assert.equal(item.paintwear, fixture.expected.paintwear);
 }
 assert.equal(typeof cs2.inspectItem, 'function');
 if (cs2.dispose) cs2.dispose();
 console.log(process.version + ' / ' + process.argv[2] + ': 56 independent fixtures passed');
})().catch(error => { console.error(error); process.exitCode = 1; });
`
	);
	for (const version of versions) {
		const binary =
			version === 'current'
				? process.execPath
				: path.join(temporary, 'node_modules', `runtime-${version.split('.')[0]}`, 'bin', 'node');
		for (const peer of peers) console.log(run(binary, ['consumer.cjs', `steam-${peer.replace(/\./g, '-')}`]));
	}
	console.log(`Validated packed ${packed.filename}; Node runtime and steam-user matrix complete.`);
} finally {
	if (process.env.KEEP_CONSUMER_PROJECT) console.log(`Consumer project retained: ${temporary}`);
	else fs.rmSync(temporary, { recursive: true, force: true });
}
