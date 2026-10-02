'use strict';
const schemas = require('./wire-schema.json');
const utf8 = new (require('util').TextDecoder)('utf-8', { fatal: true });

// protobufjs can accept a length-delimited string truncated at the buffer end.
// Validate boundaries before decoding, including every known nested message.
module.exports = function validateWire(bytes, name) {
	let offset = 0;
	const fail = () => {
		throw new Error('Malformed protobuf wire data');
	};
	function varint(end) {
		let value = 0n;
		for (let shift = 0; shift < 70; shift += 7) {
			if (offset >= end) return fail();
			const byte = bytes[offset++];
			if (shift === 63 && byte > 1) return fail();
			value |= BigInt(byte & 127) << BigInt(shift);
			if (!(byte & 128)) return value;
		}
		return fail();
	}
	function integer(value, known) {
		if (!known) return;
		if (['uint32', 'sint32'].includes(known[3]) && value > 0xffffffffn) return fail();
		// Accept both five-byte negative int32 encodings and proper uint64 sign extension.
		if (['int32', 'enum'].includes(known[3]) && value > 0xffffffffn && value < 0xffffffff80000000n) return fail();
	}
	function scan(end, schema, depth, group) {
		if (depth > 64) return fail();
		while (offset < end) {
			const tag = varint(end);
			if (tag > 0xffffffffn || tag < 8n) return fail();
			const field = Number(tag >> 3n),
				wire = Number(tag & 7n);
			const known = schema && schema[field];
			if (wire === 4) {
				if (field !== group) return fail();
				return;
			}
			if (known && wire !== known[0] && !(known[2] && wire === 2)) return fail();
			if (wire === 0) {
				const value = varint(end);
				integer(value, known);
			} else if (wire === 1 || wire === 5) {
				offset += wire === 1 ? 8 : 4;
				if (offset > end) return fail();
			} else if (wire === 2) {
				const length = varint(end);
				if (length > BigInt(end - offset)) return fail();
				const limit = offset + Number(length);
				if (known && known[1]) scan(limit, schemas[known[1]], depth + 1);
				else if (known && known[2]) {
					if (known[0] === 0) {
						while (offset < limit) {
							const value = varint(limit);
							integer(value, known);
						}
					} else if (Number(length) % (known[0] === 1 ? 8 : 4)) return fail();
				}
				if (known && known[3] === 'string') {
					try {
						utf8.decode(bytes.subarray(offset, limit));
					} catch (error) {
						return fail();
					}
				}
				offset = limit;
			} else if (wire === 3) scan(end, null, depth + 1, field);
			else return fail();
		}
		if (group !== undefined) return fail();
	}
	scan(bytes.length, schemas[name], 0);
};
