const Protos = require('../protobufs/generated/_load.js');
const decodeProto = require('./proto-decode.js');

// Embedded inspect tokens contain a mask byte, protobuf payload and checksum.
// Wire format follows DoctorMcKay/node-globaloffensive's inspect-link decoder.
module.exports = function decodeInspectLink(link) {
	let decoded;
	try {
		decoded = decodeURIComponent(link).split('?')[0].trim();
	} catch (err) {
		throw new Error('Invalid inspect link encoding');
	}
	const match = decoded.match(/(?:^|\s)([0-9a-fA-F]+)$/);
	// Numeric owner IDs and legacy S/M tokens belong to the GC request path.
	if (!match || (!decoded.includes(' ') && /^\d+$/.test(decoded))) {
		return null;
	}
	const token = match[1];
	if (token.length < 12 || token.length % 2 !== 0) {
		throw new Error('Invalid embedded inspect token length');
	}
	const buffer = Buffer.from(token, 'hex');
	for (let i = 1; i < buffer.length; i++) {
		buffer[i] ^= buffer[0];
	}
	const payloadEnd = buffer.length - 4;
	let crc = 0xffffffff;
	for (const byte of buffer.subarray(0, payloadEnd)) {
		crc ^= byte;
		for (let bit = 0; bit < 8; bit++) {
			crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
		}
	}
	crc = (crc ^ 0xffffffff) >>> 0;
	const checksum = ((crc & 0xffff) ^ ((payloadEnd - 1) * crc)) >>> 0;
	if (checksum !== buffer.readUInt32BE(payloadEnd)) {
		throw new Error('Invalid embedded inspect token checksum');
	}
	try {
		const item = decodeProto(Protos.CEconItemPreviewDataBlock, buffer.subarray(1, payloadEnd));
		if (item.itemid === null || item.itemid === undefined) {
			throw new Error('Missing itemid');
		}
		return item;
	} catch (err) {
		throw new Error('Invalid embedded inspect item data');
	}
};
