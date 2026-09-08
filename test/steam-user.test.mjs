import { describe, it, expect, vi } from 'vitest';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const SteamUser = require('steam-user');
const SteamID = require('steamid');
const NodeCS2 = require('../index.js');
const Language = require('../language.js');
const Protos = require('../protobufs/generated/_load.js');

describe('steam-user integration without network access', () => {
	it('constructs with the installed SteamUser and sends schema-correct GC messages', () => {
		const steam = new SteamUser({ dataDirectory: null });
		const cs2 = new NodeCS2(steam);
		steam.steamID = new SteamID('76561198057249394');
		steam.sendToGC = vi.fn();
		cs2.commendPlayer(1234, { cmd_friendly: true }, '9007199254740993', 0);
		const [appid, type, headers, payload] = steam.sendToGC.mock.calls[0];
		expect(appid).toBe(730);
		expect(type).toBe(Language.ClientCommendPlayer);
		expect(headers).toEqual({});
		const decoded = Protos.CMsgGCCStrike15_v2_ClientCommendPlayer.decode(payload);
		expect(decoded.account_id).toBe(1234);
		expect(decoded.match_id.toString()).toBe('9007199254740993');
	});

	it('dispatches incoming GC buffers and preserves inspect events', () => {
		const steam = new SteamUser({ dataDirectory: null });
		const cs2 = new NodeCS2(steam);
		const listener = vi.fn();
		cs2.on('inspectItemInfo', listener);
		const payload = Protos.CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockResponse.encode({
			iteminfo: { itemid: '9007199254740993', defindex: 7, paintwear: 1040187392 }
		}).finish();
		steam.emit('receivedFromGC', 440, Language.Client2GCEconPreviewDataBlockResponse, Buffer.from(payload));
		expect(listener).not.toHaveBeenCalled();
		steam.emit('receivedFromGC', 730, Language.Client2GCEconPreviewDataBlockResponse, Buffer.from(payload));
		expect(listener).toHaveBeenCalledWith(expect.objectContaining({
			itemid: '9007199254740993', defindex: 7, paintwear: 0.125
		}));
	});
});
