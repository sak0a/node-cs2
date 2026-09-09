import { afterEach, describe, expect, it, vi } from 'vitest';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const SteamUser = require('steam-user');
const SteamID = require('steamid');
const NodeCS2 = require('../index.js');
const Language = require('../language.js');
const Protos = require('../protobufs/generated/_load.js');

const offer = {
	generation_time: 1770000000,
	redeemable_balance: 2,
	items: ['9007199254740993', '18446744073709551615']
};

function setup() {
	const steam = new SteamUser({ dataDirectory: null });
	const cs2 = new NodeCS2(steam);
	steam.sendToGC = vi.fn();
	const update = vi.fn();
	cs2.on('personalStoreUpdate', update);
	const deliver = (type, schema, data) =>
		steam.emit('receivedFromGC', 730, type, Buffer.from(schema.encode(data).finish()));
	const object = (data = offer) => ({
		type_id: 4,
		object_data: Protos.CSOAccountItemPersonalStore.encode(data).finish()
	});
	const welcome = (stores = [object()]) =>
		deliver(Language.ClientWelcome, Protos.CMsgClientWelcome, {
			outofdate_subscribed_caches: [
				{ objects: [] },
				{ objects: stores.map(({ type_id, object_data }) => ({ type_id, object_data: [object_data] })) }
			]
		});
	return { steam, cs2, update, deliver, object, welcome };
}

afterEach(() => vi.useRealTimers());

describe('weekly reward personal store', () => {
	it('loads from any welcome cache before connectedToGC, preserving uint64 IDs', () => {
		const { cs2, welcome, update } = setup();
		expect(cs2.personalStore).toBeNull();
		const connected = vi.fn(() => expect(cs2.personalStore).toEqual(offer));
		cs2.on('connectedToGC', connected);
		welcome();
		expect(update).toHaveBeenCalledExactlyOnceWith(offer);
		expect(connected).toHaveBeenCalledOnce();
	});

	it('decodes an independently specified protobuf wire fixture', () => {
		const { cs2, welcome } = setup();
		// Fields 1=123, 2=2, 3=9007199254740993; manually encoded varints.
		welcome([{ type_id: 4, object_data: Buffer.from('087b1002188180808080808010', 'hex') }]);
		expect(cs2.personalStore).toEqual({ generation_time: 123, redeemable_balance: 2, items: ['9007199254740993'] });
	});

	it('retains inventory handling alongside a personal-store welcome', () => {
		const { cs2, deliver, object } = setup();
		const store = object();
		deliver(Language.ClientWelcome, Protos.CMsgClientWelcome, {
			outofdate_subscribed_caches: [
				{
					objects: [
						{ type_id: 1, object_data: [Protos.CSOEconItem.encode({ id: '42', def_index: 7 }).finish()] },
						{ type_id: 4, object_data: [store.object_data] }
					]
				}
			]
		});
		expect(cs2.inventory).toHaveLength(1);
		expect(cs2.inventory[0]).toMatchObject({ id: '42', def_index: 7 });
		expect(cs2.personalStore).toEqual(offer);
	});

	it('handles single create/update/destroy without requiring an inventory', () => {
		const { cs2, deliver, object, update } = setup();
		deliver(Language.SO_Create, Protos.CMsgSOSingleObject, object());
		expect(cs2.personalStore).toEqual(offer);
		const claimed = { ...offer, redeemable_balance: 0, items: [] };
		deliver(Language.SO_Update, Protos.CMsgSOSingleObject, object(claimed));
		expect(cs2.personalStore).toEqual(claimed);
		deliver(Language.SO_Destroy, Protos.CMsgSOSingleObject, { type_id: 4 });
		expect(cs2.personalStore).toBeNull();
		expect(update.mock.calls.map(([store]) => store)).toEqual([offer, claimed, null]);
	});

	it('handles batched updates and ignores unrelated types', () => {
		const { cs2, deliver, object, update } = setup();
		deliver(Language.SO_UpdateMultiple, Protos.CMsgSOMultipleObjects, {
			objects_modified: [object(), { type_id: 999, object_data: Buffer.from([255]) }]
		});
		expect(cs2.personalStore).toEqual(offer);
		expect(update).toHaveBeenCalledExactlyOnceWith(offer);
	});

	it('keeps the last valid store on malformed updates and continues welcome processing', () => {
		const { cs2, deliver, welcome, object } = setup();
		const debug = vi.fn();
		cs2.on('debug', debug);
		welcome([{ type_id: 4, object_data: Buffer.from([255]) }, object()]);
		expect(cs2.personalStore).toEqual(offer);
		deliver(Language.SO_Update, Protos.CMsgSOSingleObject, { type_id: 4, object_data: Buffer.from([255]) });
		expect(cs2.personalStore).toEqual(offer);
		expect(debug.mock.calls.filter(([message]) => message.startsWith('Failed to decode personal store:'))).toHaveLength(
			2
		);
	});

	it('clears stale state on a new welcome without a store', () => {
		const { cs2, welcome, update } = setup();
		welcome();
		welcome([]);
		expect(cs2.personalStore).toBeNull();
		expect(update).toHaveBeenLastCalledWith(null);
	});

	it.each(['disconnected', 'error', 'appQuit', 'gcDisconnect'])(
		'clears state on %s and reloads on reconnect',
		(event) => {
			const { steam, cs2, deliver, welcome, update } = setup();
			welcome();
			cs2._isInCSGO = true;
			cs2._connect = vi.fn();
			if (event === 'gcDisconnect') {
				deliver(Language.ClientConnectionStatus, Protos.CMsgConnectionStatus, {
					status: NodeCS2.GCConnectionStatus.NO_SESSION
				});
			} else {
				steam.emit(event, event === 'appQuit' ? 730 : undefined);
			}
			expect(cs2.personalStore).toBeNull();
			expect(update).toHaveBeenLastCalledWith(null);
			welcome();
			expect(cs2.personalStore).toEqual(offer);
		}
	);

	it('represents omitted scalar fields as null and repeated items as an empty array', () => {
		const { cs2, welcome, object } = setup();
		welcome([object({})]);
		expect(cs2.personalStore).toEqual({ generation_time: null, redeemable_balance: null, items: [] });
	});
});

describe('redeeming server-provided weekly rewards', () => {
	it.each(['promise', 'callback'])(
		'encodes precise IDs and resolves the %s API only on reward confirmation',
		async (mode) => {
			const { steam, cs2, welcome, deliver } = setup();
			steam.steamID = new SteamID('76561198057249394');
			welcome();
			const callback = vi.fn();
			const { generation_time, redeemable_balance, items } = cs2.personalStore;
			const result = cs2.redeemFreeReward(
				generation_time,
				redeemable_balance,
				items,
				mode === 'callback' ? callback : undefined
			);
			const [, type, , payload] = steam.sendToGC.mock.calls[0];
			expect(type).toBe(Language.ClientRedeemFreeReward);
			const request = Protos.CMsgGCCstrike15_v2_ClientRedeemFreeReward.decode(payload);
			expect(request.generation_time).toBe(offer.generation_time);
			expect(request.redeemable_balance).toBe(2);
			expect(request.items.map(String)).toEqual(items);
			cs2.emit('itemCustomizationNotification', ['11'], NodeCS2.ItemCustomizationNotification.UnlockCrate);
			expect(cs2.listenerCount('itemCustomizationNotification')).toBe(1);
			expect(callback).not.toHaveBeenCalled();
			deliver(Language.ItemCustomizationNotification, Protos.CMsgGCItemCustomizationNotification, {
				item_id: items,
				request: NodeCS2.ItemCustomizationNotification.ClientRedeemFreeReward
			});
			if (mode === 'callback') {
				expect(result).toBeUndefined();
				expect(callback).toHaveBeenCalledExactlyOnceWith(null, items);
			} else {
				await expect(result).resolves.toEqual(items);
			}
			expect(cs2.listenerCount('itemCustomizationNotification')).toBe(0);
		}
	);

	it.each(['promise', 'callback'])('cleans up the %s listener on timeout', async (mode) => {
		vi.useFakeTimers();
		const { cs2 } = setup();
		cs2._send = vi.fn();
		const callback = vi.fn();
		const result = cs2.redeemFreeReward(
			offer.generation_time,
			2,
			offer.items,
			mode === 'callback' ? callback : undefined
		);
		const rejection = mode === 'promise' ? expect(result).rejects.toThrow('Redeeming free reward timed out') : null;
		await vi.advanceTimersByTimeAsync(10000);
		if (rejection) await rejection;
		else
			expect(callback).toHaveBeenCalledExactlyOnceWith(
				expect.objectContaining({ message: 'Redeeming free reward timed out' })
			);
		expect(cs2.listenerCount('itemCustomizationNotification')).toBe(0);
	});
});
