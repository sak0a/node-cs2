import { describe, it, expect, vi } from 'vitest';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const NodeCS2 = require('../index.js');
const Protos = require('../protobufs/generated/_load.js');
const Language = require('../language.js');

// Hand-encoded protobuf bytes and independently calculated Python zlib CRCs.
const fixtures = [['', '108180808080808010', '00108180808080808010cbe12388'], ['Old name', '1081808080808080105a084f6c64206e616d65', '001081808080808080105a084f6c64206e616d65a6507d5a'], ['New name', '1081808080808080105a084f6c64206e616d655a084e6577206e616d65c0017bca010300ff80', '001081808080808080105a084f6c64206e616d655a084e6577206e616d65c0017bca010300ff8083f00904']];

describe('September 2026 protocol compatibility', () => {
	it.each(fixtures)('preserves names through embedded and GC inspection: %s', async (name, hex, token) => {
		const cs2 = Object.create(NodeCS2.prototype);
		const local = await cs2.inspectItem(`csgo_econ_action_preview ${token}`);
		expect(local.customname).toBe(name || null);
		expect(local.customnames).toEqual(name === 'New name' ? ['Old name', 'New name'] : name ? [name] : []);
		const listener = vi.fn();
		cs2.on('inspectItemInfo', listener);
		const payload = Buffer.from(hex, 'hex');
		// Wrap the independent item bytes in response field 1.
		cs2._handlers[Language.Client2GCEconPreviewDataBlockResponse].call(cs2,
			Buffer.concat([Buffer.from([10, payload.length]), payload]));
		expect(listener).toHaveBeenCalledWith(local);
		if (name === 'New name') {
			expect(local.pet_food_expiration_date).toBe(123);
			expect(local.blobdata).toEqual(Buffer.from([0, 255, 128]));
		} else {
			expect(local.pet_food_expiration_date).toBeNull();
			expect(local.blobdata).toBeNull();
		}
	});

	it('sends pet acknowledgements without losing uint64 precision', () => {
		const cs2 = Object.create(NodeCS2.prototype);
		cs2._send = vi.fn();
		expect(cs2.ackPetEvent('18446744073709551615')).toBeUndefined();
		const [id, proto, body] = cs2._send.mock.calls[0];
		expect(id).toBe(2538);
		expect(id).toBe(Protos.EGCPetMsg.k_EMsgGCAckPetEvent);
		expect(Buffer.from(proto.encode(body).finish()).toString('hex')).toBe('08ffffffffffffffffff01');
	});

	it.each([undefined, null, 123, '', '0', '-1', '1.5', 'abc', '18446744073709551616'])('rejects invalid pet ID %s', (id) => {
		const cs2 = Object.create(NodeCS2.prototype);
		cs2._send = vi.fn();
		expect(() => cs2.ackPetEvent(id)).toThrow('petItemId');
		expect(cs2._send).not.toHaveBeenCalled();
	});

	it('exposes new clan and networking fields through the merged schema loader', () => {
		const persona = Protos.CSOPersonaDataPublic;
		expect(persona.decode(Buffer.from('3a0454455354', 'hex')).clan_tag).toBe('TEST');
		const encrypted = Protos.CSVCMsg_EncryptedData;
		expect(encrypted.decode(Buffer.from('0a0201021003', 'hex'))).toMatchObject({ key_type: 3 });
		expect(Protos.SVC_Messages.svc_EncryptedData).toBe(78);
		expect(Protos.EBaseUserMessages.UM_RemoteServerCommand).toBe(169);
		expect(Protos.EGCSystemMsg.k_EGCMsgGetClanDetailsResponse).toBe(539);
	});
});
