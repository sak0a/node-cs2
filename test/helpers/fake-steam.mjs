import { EventEmitter } from 'node:events';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
export const CS2 = require('../../');
export const Language = require('../../language');
// Minimal steam-user contract; no library encoder or handler is replaced.
export class FakeSteam extends EventEmitter {
	packageName = 'steam-user';
	packageVersion = '5.3.0';
	steamID = '76561198000000001';
	sent = [];
	sendToGC(appid, type, headers, payload) {
		this.sent.push({ appid, type, headers, payload: Buffer.from(payload) });
		this.onSend?.(type, payload);
	}
	receive(type, bytes) {
		this.emit('receivedFromGC', 730, type, Buffer.from(bytes));
	}
}
// Independent wire encoder, deliberately does not use generated protobuf code.
export function varint(value) {
	let n = BigInt(value);
	const bytes = [];
	do {
		let b = Number(n & 127n);
		n >>= 7n;
		if (n) b |= 128;
		bytes.push(b);
	} while (n);
	return bytes;
}
export const uint = (field, value) => [...varint(field * 8), ...varint(value)];
export const bytes = (field, value) => [...varint(field * 8 + 2), ...varint(value.length), ...value];
export const fixed64 = (field, value) => [
	...varint(field * 8 + 1),
	...Array.from({ length: 8 }, (_, i) => Number((BigInt(value) >> BigInt(i * 8)) & 255n))
];
export const inspect = (id) => bytes(1, [...uint(2, id), ...uint(3, 7), ...uint(7, 1040187392)]);
export const notification = (id, type) => [...uint(1, id), ...uint(2, type)];
