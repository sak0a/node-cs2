const https = require('https');
const fs = require('fs');
const path = require('path');

const REPO_API_URL = 'https://api.github.com/repos/SteamTracking/GameTracking-CS2/contents/Protobufs';
const RAW_BASE_URL = 'https://raw.githubusercontent.com/SteamTracking/GameTracking-CS2/master/Protobufs';
const PROTO_DIR = path.join(__dirname, '..', 'protobufs');

function fetch(url) {
	return new Promise((resolve, reject) => {
		https.get(url, {headers: {'User-Agent': 'node-cs2'}}, (res) => {
			if (res.statusCode === 301 || res.statusCode === 302) {
				return fetch(res.headers.location).then(resolve, reject);
			}
			if (res.statusCode !== 200) {
				return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
			}
			const chunks = [];
			res.on('data', (chunk) => chunks.push(chunk));
			res.on('end', () => resolve(Buffer.concat(chunks)));
			res.on('error', reject);
		}).on('error', reject);
	});
}

async function getFileList(apiUrl) {
	const data = JSON.parse(await fetch(apiUrl));
	let files = [];

	for (const entry of data) {
		if (entry.type === 'file' && entry.name.endsWith('.proto')) {
			files.push({name: entry.name, download_url: entry.download_url, path: entry.path});
		} else if (entry.type === 'dir') {
			const subFiles = await getFileList(entry.url);
			files = files.concat(subFiles.map((f) => ({...f, subdir: entry.name})));
		}
	}

	return files;
}

async function main() {
	console.log('Fetching file list from GameTracking-CS2...');
	const files = await getFileList(REPO_API_URL);
	console.log(`Found ${files.length} proto files\n`);

	let updated = 0;
	let unchanged = 0;
	let added = 0;

	for (const file of files) {
		const subdir = file.subdir || '';
		const destDir = subdir ? path.join(PROTO_DIR, subdir) : PROTO_DIR;
		const destPath = path.join(destDir, file.name);

		const rawUrl = subdir
			? `${RAW_BASE_URL}/${subdir}/${file.name}`
			: `${RAW_BASE_URL}/${file.name}`;

		const content = await fetch(rawUrl);

		if (!fs.existsSync(destDir)) {
			fs.mkdirSync(destDir, {recursive: true});
		}

		if (fs.existsSync(destPath)) {
			const existing = fs.readFileSync(destPath);
			if (existing.equals(content)) {
				unchanged++;
				continue;
			}
			fs.writeFileSync(destPath, content);
			console.log(`Updated: ${subdir ? subdir + '/' : ''}${file.name}`);
			updated++;
		} else {
			fs.writeFileSync(destPath, content);
			console.log(`Added:   ${subdir ? subdir + '/' : ''}${file.name}`);
			added++;
		}
	}

	console.log(`\nDone! ${added} added, ${updated} updated, ${unchanged} unchanged`);
}

main().catch((err) => {
	console.error('Error:', err.message);
	process.exit(1);
});
