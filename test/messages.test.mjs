import { describe, it, expect, vi } from 'vitest';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const NodeCS2 = require('../index.js');
const Language = require('../language.js');
const Protos = require('../protobufs/generated/_load.js');

function makeInstance() {
	const instance = Object.create(NodeCS2.prototype);
	instance._send = vi.fn();
	return instance;
}

describe('NodeCS2 message helpers', () => {
	it('helloGC delegates to the connection loop', () => {
		const instance = makeInstance();
		instance._connect = vi.fn();

		instance.helloGC();

		expect(instance._connect).toHaveBeenCalledOnce();
	});

	it('openCrate sends volatile_limit and preserves zero-valued optional fields', () => {
		const instance = makeInstance();
		const callback = vi.fn();

		instance.openCrate('11', '22', false, 0, 0, callback);

		expect(instance._send).toHaveBeenCalledWith(Language.OpenCrate, Protos.CMsgOpenCrate, {
			tool_item_id: '11',
			subject_item_id: '22',
			for_rental: false,
			points_remaining: 0,
			volatile_limit: 0
		});

		instance.emit('itemCustomizationNotification', ['22'], NodeCS2.ItemCustomizationNotification.UnlockCrate);
		expect(callback).toHaveBeenCalledWith(null, ['22']);
	});

	it('commendPlayer sends the schema-correct commend payload', () => {
		const instance = makeInstance();

		instance.commendPlayer(1234, { cmd_friendly: true, cmd_leader: true }, '987654321', 0);

		expect(instance._send).toHaveBeenCalledWith(
			Language.ClientCommendPlayer,
			Protos.CMsgGCCStrike15_v2_ClientCommendPlayer,
			{
				account_id: 1234,
				commendation: {
					cmd_friendly: 1,
					cmd_teaching: 0,
					cmd_leader: 1
				},
				match_id: '987654321',
				tokens: 0
			}
		);
	});

	it('commendPlayer requires at least one commendation flag', () => {
		const instance = makeInstance();

		expect(() => instance.commendPlayer(1234, {})).toThrow(
			'At least one commendation flag (cmd_friendly, cmd_teaching, cmd_leader) must be set'
		);
	});
});

// Fixtures use Python zlib.crc32 and manually encoded protobuf wire bytes,
// independently of the JavaScript decoder and generated protobuf encoder.
const inspectTokens = [
	'00108180808080808010180738808080f00305212160',
	'a5b524252525252525b5bda29d25252555a6349f8965'
];

describe('embedded inspect links', () => {
	it.each(inspectTokens)('decodes token %s without contacting the GC', async (token) => {
		const instance = makeInstance();
		const event = vi.fn();
		const specific = vi.fn();
		instance.on('inspectItemInfo', event);
		instance.on('inspectItemInfo#9007199254740993', specific);
		const item = await instance.inspectItem(`steam://rungame/730/0/+csgo_econ_action_preview%20${token}?source=test`);
		expect(item).toMatchObject({ itemid: '9007199254740993', defindex: 7, paintwear: 0.125 });
		expect(event).toHaveBeenCalledWith(item);
		expect(specific).toHaveBeenCalledWith(item);
		expect(instance._send).not.toHaveBeenCalled();
	});

	it('delivers callbacks asynchronously and accepts bare tokens', async () => {
		const instance = makeInstance();
		const callback = vi.fn();
		expect(instance.inspectItem(inspectTokens[1], callback)).toBeUndefined();
		expect(callback).not.toHaveBeenCalled();
		await new Promise(setImmediate);
		expect(callback).toHaveBeenCalledOnce();
		expect(callback.mock.calls[0][0].itemid).toBe('9007199254740993');
	});

	it('normalizes embedded and GC item data identically', async () => {
		const instance = makeInstance();
		const embedded = await instance.inspectItem(inspectTokens[0]);
		const event = vi.fn();
		instance.on('inspectItemInfo', event);
		instance._handlers[Language.Client2GCEconPreviewDataBlockResponse].call(instance,
			Protos.CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockResponse.encode({
				iteminfo: { itemid: '9007199254740993', defindex: 7, paintwear: 1040187392 }
			}).finish());
		expect(event).toHaveBeenCalledWith(embedded);
	});

	it.each([
		['csgo_econ_action_preview 001807c67d7d38', 'item data'],
		['csgo_econ_action_preview 001080b076d8a5', 'item data'],
		['csgo_econ_action_preview aabb', 'length'],
		['csgo_econ_action_preview 00108180808080808010180738808080f0030521216', 'length'],
		['csgo_econ_action_preview 00108180808080808010180738808080f00305212161', 'checksum'],
		['csgo_econ_action_preview %ZZ', 'encoding']
	])('rejects malformed input %s without a GC request', (link, error) => {
		const instance = makeInstance();
		expect(() => instance.inspectItem(link)).toThrow(error);
		expect(instance._send).not.toHaveBeenCalled();
	});

	it.each(['S76561198057249394A22D33', 'M12345A22D33'])('preserves legacy link %s', (token) => {
		const instance = makeInstance();
		const callback = vi.fn();
		instance.inspectItem(`steam://rungame/730/0/+csgo_econ_action_preview%20${token}`, callback);
		expect(instance._send).toHaveBeenCalledWith(
			Language.Client2GCEconPreviewDataBlockRequest,
			Protos.CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest,
			{ param_a: '22', param_d: '33', param_s: token[0] === 'S' ? '76561198057249394' : 0,
				param_m: token[0] === 'M' ? '12345' : 0 });
		instance.emit('inspectItemInfo#22', { itemid: '22' });
		expect(callback).toHaveBeenCalledOnce();
	});

	it('preserves the owner/assetid/d Promise overload', async () => {
		const instance = makeInstance();
		const result = instance.inspectItem('76561198057249394', '22', '33');
		expect(instance._send.mock.calls[0][2].param_s).toBe('76561198057249394');
		instance.emit('inspectItemInfo#22', { itemid: '22' });
		await expect(result).resolves.toEqual({ itemid: '22' });
	});
});

describe('current CS2 protocol definitions', () => {
	it('round trips custom HUD clicks and VAC reviewer permissions', () => {
		const hud = Protos.CCSUsrMsg_CustomHudClicked;
		expect(hud.decode(hud.encode({ custom_hud_layout: 17, button_id: 'confirm' }).finish()))
			.toMatchObject({ custom_hud_layout: 17, button_id: 'confirm' });
		const reviewer = Protos.CVacNet_GetReviewerInfo_Response;
		expect(reviewer.decode(reviewer.encode({ reviewer_info: { permissions: ['review'] } }).finish()))
			.toMatchObject({ reviewer_info: { permissions: ['review'] } });
	});
});
