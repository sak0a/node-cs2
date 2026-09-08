const ByteBuffer = require('bytebuffer');

module.exports = decodeProto;

function decodeProto(proto, encoded) {
	if (ByteBuffer.isByteBuffer(encoded)) {
		encoded = encoded.toBuffer();
	}

	const decoded = proto.decode(encoded);
	const objNoDefaults = proto.toObject(decoded, { longs: String });
	const objWithDefaults = proto.toObject(decoded, { defaults: true, longs: String });
	return replaceDefaults(objNoDefaults, objWithDefaults);

	function replaceDefaults(noDefaults, withDefaults) {
		if (Array.isArray(withDefaults)) {
			return withDefaults.map((val, idx) => replaceDefaults(noDefaults[idx], val));
		}

		for (const i in withDefaults) {
			if (!withDefaults.hasOwnProperty(i)) {
				continue;
			}

			if (withDefaults[i] && typeof withDefaults[i] === 'object' && !Buffer.isBuffer(withDefaults[i])) {
				// Covers both object and array cases, both of which will work
				// Won't replace empty arrays, but that's desired behavior
				withDefaults[i] = replaceDefaults(noDefaults[i], withDefaults[i]);
			} else if (typeof noDefaults[i] === 'undefined' && isReplaceableDefaultValue(withDefaults[i])) {
				withDefaults[i] = null;
			}
		}

		return withDefaults;
	}

	function isReplaceableDefaultValue(val) {
		if (Buffer.isBuffer(val) && val.length == 0) {
			// empty buffer is replaceable
			return true;
		}

		if (Array.isArray(val)) {
			// empty array is not replaceable (empty repeated fields)
			return false;
		}

		if (val === '0') {
			// Zero as a string is replaceable (64-bit integer)
			return true;
		}

		// Anything falsy is true
		return !val;
	}
}
