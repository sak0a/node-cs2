import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { CS2, FakeSteam, Language as L, inspect, notification, bytes, uint, fixed64 } from './helpers/fake-steam.mjs';
let steam, cs;
beforeEach(() => {
	vi.useFakeTimers();
	steam = new FakeSteam();
	cs = new CS2(steam);
	cs._inspectTimeout = 50;
	cs._stickerTimeout = 50;
});
afterEach(() => {
	cs.dispose();
	vi.useRealTimers();
});
it('correlates concurrent inspect replies out of order, with exactly-once callback/Promise completion', async () => {
	const cb = vi.fn();
	const a = cs.inspectItem('M1A11D1');
	cs.inspectItem('M1A22D1', cb);
	expect(steam.sent[0].payload.toString('hex')).toBe('0800100b18012001');
	steam.receive(L.Client2GCEconPreviewDataBlockResponse, inspect(22));
	steam.receive(L.Client2GCEconPreviewDataBlockResponse, inspect(22));
	steam.receive(L.Client2GCEconPreviewDataBlockResponse, inspect(11));
	expect((await a).itemid).toBe('11');
	expect(cb).toHaveBeenCalledTimes(1);
	expect(cs.listenerCount('inspectItemInfo#11')).toBe(0);
	expect(vi.getTimerCount()).toBe(0);
});
it('handles a synchronous transport response', async () => {
	steam.onSend = () => steam.receive(L.Client2GCEconPreviewDataBlockResponse, inspect(11));
	expect((await cs.inspectItem('M1A11D1')).itemid).toBe('11');
});
it('times out, ignores late replies, and blocks unsafe correlation reuse', async () => {
	const a = cs.inspectItem('M1A11D1');
	const failure = expect(a).rejects.toMatchObject({ code: 'TIMEOUT', uncertain: false });
	await vi.advanceTimersByTimeAsync(50);
	await failure;
	steam.receive(L.Client2GCEconPreviewDataBlockResponse, inspect(11));
	await expect(cs.inspectItem('M1A11D1')).rejects.toMatchObject({ code: 'UNCERTAIN_PREVIOUS_RESULT' });
	expect(cs.listenerCount('inspectItemInfo#11')).toBe(0);
});
it.each(['extractSticker', 'applyPatch', 'removePatch', 'applyKeychain', 'encapsulateSticker'])(
	'%s checks item and notification type and serializes same-item work',
	async (method) => {
		const types = {
			extractSticker: 'ExtractSticker',
			applyPatch: 'ApplyPatch',
			removePatch: 'RemovePatch',
			applyKeychain: 'ApplyKeychain',
			encapsulateSticker: 'EncapsulateSticker'
		};
		const type = CS2.ItemCustomizationNotification[types[method]];
		const a = cs[method]('11', ...(method === 'encapsulateSticker' ? [] : [2]));
		const b = cs[method]('11', ...(method === 'encapsulateSticker' ? [] : [3]));
		expect(steam.sent).toHaveLength(1);
		steam.receive(L.ItemCustomizationNotification, notification(22, type));
		steam.receive(L.ItemCustomizationNotification, notification(11, type + 1));
		expect(steam.sent).toHaveLength(1);
		steam.receive(L.ItemCustomizationNotification, notification(11, type));
		steam.receive(L.ItemCustomizationNotification, notification(11, type));
		await a;
		await vi.runAllTicks();
		expect(steam.sent).toHaveLength(2);
		steam.receive(L.ItemCustomizationNotification, notification(11, type));
		await b;
		expect(vi.getTimerCount()).toBe(0);
	}
);
it('serializes rewards globally when responses do not identify a request', async () => {
	const a = cs.redeemFreeReward(1, 1, [1]);
	const b = cs.claimVolatileItemReward(2);
	expect(steam.sent).toHaveLength(1);
	steam.receive(
		L.ItemCustomizationNotification,
		notification(88, CS2.ItemCustomizationNotification.ClientRedeemFreeReward)
	);
	await a;
	await vi.runAllTicks();
	expect(steam.sent).toHaveLength(2);
	steam.receive(
		L.ItemCustomizationNotification,
		notification(99, CS2.ItemCustomizationNotification.ClientRedeemFreeReward)
	);
	expect(await b).toEqual(['99']);
});
it('cancels active and queued mutations on disconnect without retrying', async () => {
	const a = cs.applyPatch('11', '22');
	const b = cs.applyPatch('11', '33');
	const results = Promise.allSettled([a, b]);
	steam.emit('disconnected');
	expect((await results).map((r) => r.reason.code)).toEqual(['DISCONNECTED', 'DISCONNECTED']);
	expect(vi.getTimerCount()).toBe(0);
	expect(cs.listenerCount('itemCustomizationNotification')).toBe(0);
	steam.emit('appLaunched', 730);
	expect(vi.getTimerCount()).toBe(1);
	steam.emit('appQuit', 730);
	expect(vi.getTimerCount()).toBe(0);
	cs.dispose();
	for (const event of ['receivedFromGC', 'appLaunched', 'appQuit', 'disconnected', 'error'])
		expect(steam.listenerCount(event)).toBe(0);
});
it('cleans profile callback and Promise listeners on timeout', async () => {
	cs._profileTimeout = 50;
	const cb = vi.fn();
	cs.requestPlayersProfile('76561198000000001', cb);
	const a = cs.requestPlayersProfile('76561198000000002');
	const failed = expect(a).rejects.toMatchObject({ code: 'TIMEOUT' });
	await vi.advanceTimersByTimeAsync(50);
	await failed;
	expect(cb.mock.calls[0][0]).toBeInstanceOf(Error);
	expect(cs.eventNames().filter((n) => String(n).startsWith('playersProfile#'))).toEqual([]);
});
it('reports malformed protobuf and skips unknown fields while preserving uint64/zero', async () => {
	const errors = vi.fn();
	cs.on('error', errors);
	steam.receive(L.Client2GCEconPreviewDataBlockResponse, [10, 127, 128]);
	expect(errors).toHaveBeenCalledOnce();
	const a = cs.inspectItem('M1A18446744073709551615D1');
	steam.receive(L.Client2GCEconPreviewDataBlockResponse, [...inspect('18446744073709551615'), ...uint(99, 1)]);
	expect((await a).itemid).toBe('18446744073709551615');
	expect(cs._mapStickerLikeItem({ wear: 0, offset_x: 0 }).wear).toBe(0);
});
it('inventory messages are idempotent and reject reordered cache versions including tombstones', () => {
	steam.receive(L.ClientWelcome, []);
	const changes = vi.fn();
	cs.on('itemChanged', changes);
	const acquired = vi.fn();
	cs.on('itemAcquired', acquired);
	const removed = vi.fn();
	cs.on('itemRemoved', removed);
	const so = (v, position = 0) => [
		...uint(2, 1),
		...bytes(3, [...uint(1, 11), ...uint(3, position)]),
		...fixed64(4, v)
	];
	steam.receive(L.SO_Create, so(1));
	steam.receive(L.SO_Create, so(1));
	expect(cs.inventory).toHaveLength(1);
	expect(acquired).toHaveBeenCalledOnce();
	steam.receive(L.SO_Update, so(3, 2));
	steam.receive(L.SO_Update, so(2, 1));
	expect(changes).toHaveBeenCalledOnce();
	steam.receive(L.SO_Destroy, so(4));
	steam.receive(L.SO_Destroy, so(4));
	steam.receive(L.SO_Create, so(3));
	expect(cs.inventory).toHaveLength(0);
	expect(removed).toHaveBeenCalledOnce();
});
it.each(['4.2.0', '4.29.3', '5.3.0'])('accepts the %s steam transport contract', (version) => {
	steam.packageVersion = version;
	const other = new CS2(steam);
	other.dispose();
});
it('volatile contents ignore unrelated customizations and subscribe before the send', async () => {
	cs.inventory = [{ id: '11' }];
	cs._volatileItemTimeout = 50;
	steam.onSend = () => {
		steam.receive(L.ItemCustomizationNotification, notification(11, CS2.ItemCustomizationNotification.ApplyPatch));
		steam.receive(L.ItemCustomizationNotification, notification(11, CS2.ItemCustomizationNotification.CasketContents));
	};
	expect(await cs.loadVolatileItemContents('11')).toEqual([{ id: '11' }]);
	expect(cs.listenerCount('itemCustomizationNotification')).toBe(0);
});
it('delivers all profiles in a multi-profile response', async () => {
	const a = cs.requestPlayersProfile('76561197960265729');
	const b = cs.requestPlayersProfile('76561197960265730');
	steam.receive(L.PlayersProfile, [...bytes(2, uint(1, 2)), ...bytes(2, uint(1, 1))]);
	expect((await a).account_id).toBe(1);
	expect((await b).account_id).toBe(2);
});
it('preserves absent paintwear and rejects nested truncated strings', () => {
	const items = vi.fn(),
		errors = vi.fn();
	cs.on('inspectItemInfo', items);
	cs.on('error', errors);
	steam.receive(L.Client2GCEconPreviewDataBlockResponse, bytes(1, uint(2, 11)));
	expect(items.mock.calls[0][0].paintwear).toBeNull();
	steam.receive(L.Client2GCEconPreviewDataBlockResponse, bytes(1, [...uint(2, 11), 90, 5, 97, 98]));
	expect(errors).toHaveBeenCalledOnce();
	expect(items).toHaveBeenCalledOnce();
	steam.receive(L.CraftResponse, [1]);
	expect(errors).toHaveBeenCalledTimes(2);
});
it('manual cancellation rejects queued and active work exactly once and preserves other listeners', async () => {
	const external = vi.fn();
	cs.on('inspectItemInfo#11', external);
	const a = cs.inspectItem('M1A11D1'),
		b = cs.inspectItem('M1A11D1');
	const results = Promise.allSettled([a, b]);
	cs.cancelPendingRequests();
	cs.cancelPendingRequests();
	expect((await results).map((r) => r.reason.code)).toEqual(['CANCELLED', 'CANCELLED']);
	expect(steam.sent).toHaveLength(1);
	expect(cs.listenerCount('inspectItemInfo#11')).toBe(1);
	expect(vi.getTimerCount()).toBe(0);
});
it('mutation timeout is uncertain and never sends queued work', async () => {
	const a = cs.applyPatch('11', '22'),
		b = cs.applyKeychain('11', '33');
	const results = Promise.allSettled([a, b]);
	await vi.advanceTimersByTimeAsync(50);
	expect((await results).map((r) => ({ code: r.reason.code, uncertain: r.reason.uncertain }))).toEqual([
		{ code: 'TIMEOUT', uncertain: true },
		{ code: 'UNCERTAIN_PREVIOUS_RESULT', uncertain: false }
	]);
	expect(steam.sent).toHaveLength(1);
});
it('does not poison unsent requests and suppresses transport sends after disposal', async () => {
	steam.steamID = null;
	await expect(cs.inspectItem('M1A11D1')).rejects.toMatchObject({ code: 'NOT_CONNECTED' });
	steam.steamID = '76561198000000001';
	steam.onSend = () => steam.receive(L.Client2GCEconPreviewDataBlockResponse, inspect(11));
	expect((await cs.inspectItem('M1A11D1')).itemid).toBe('11');
	cs.dispose();
	cs.ackPetEvent('11');
	expect(steam.sent).toHaveLength(1);
	await expect(cs.inspectItem('M1A12D1')).rejects.toMatchObject({ code: 'DISPOSED' });
});
it('callback and Promise receive identical customization results through dispatch', async () => {
	const callback = vi.fn();
	cs.removePatch('11', 0, callback);
	const result = cs.removePatch('22', 0);
	steam.receive(L.ItemCustomizationNotification, notification(22, 1089));
	steam.receive(L.ItemCustomizationNotification, notification(11, 1089));
	expect(callback).toHaveBeenCalledWith(null, ['11']);
	expect(await result).toEqual(['22']);
});
it('SO multiple versions, duplicate creates, and malformed attributes preserve inventory state', () => {
	steam.receive(L.ClientWelcome, []);
	const item = (position) => [...uint(1, 11), ...uint(3, position)];
	const so = (version, position) => [...uint(2, 1), ...bytes(3, item(position)), ...fixed64(4, version)];
	steam.receive(L.SO_Create, so(1, 1));
	steam.receive(L.SO_Create, so(2, 2));
	expect(cs.inventory[0].inventory).toBe(2);
	steam.receive(L.SO_UpdateMultiple, [...bytes(2, [...uint(1, 1), ...bytes(2, item(4))]), ...fixed64(3, 4)]);
	steam.receive(L.SO_Update, so(3, 3));
	expect(cs.inventory[0].inventory).toBe(4);
});
it('keeps explicit market owners, canonicalizes request keys, and validates uint64 input', async () => {
	const result = cs.inspectItem('M76561198000000001A00011D00000');
	expect(steam.sent[0].payload).toEqual(
		Buffer.from([...uint(1, 0), ...uint(2, 11), ...uint(3, 0), ...uint(4, '76561198000000001')])
	);
	steam.receive(L.Client2GCEconPreviewDataBlockResponse, inspect(11));
	expect((await result).itemid).toBe('11');
	for (const value of ['18446744073709551616', '-1', '1.5', 9007199254740992, NaN]) {
		expect(() => cs.inspectItem('1', value, '1')).toThrow('uint64');
	}
	expect(() => cs.inspectItem('S1A11D1')).toThrow('SteamID');
	expect(steam.sent).toHaveLength(1);
});
it('rejects incoming known uint32 overflow and ignores missing connection status', () => {
	const errors = vi.fn();
	cs.on('error', errors);
	cs.haveGCSession = true;
	steam.receive(L.ClientConnectionStatus, []);
	expect(cs.haveGCSession).toBe(true);
	steam.receive(L.Client2GCEconPreviewDataBlockResponse, bytes(1, [...uint(2, 11), ...uint(3, '4294967296')]));
	expect(errors).toHaveBeenCalledOnce();
});
