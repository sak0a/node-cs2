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
