import { EventEmitter } from 'events';
import SteamUser = require('steam-user');
import SteamID = require('steamid');

declare namespace NodeCS2 {
	// ─── Enums ──────────────────────────────────────────────────────────────────

	enum GCConnectionStatus {
		HAVE_SESSION = 0,
		GC_GOING_DOWN = 1,
		NO_SESSION = 2,
		NO_SESSION_IN_LOGON_QUEUE = 3,
		NO_STEAM = 4
	}

	enum ItemCustomizationNotification {
		NameItem = 1006,
		UnlockCrate = 1007,
		XRayItemReveal = 1008,
		XRayItemClaim = 1009,
		CasketTooFull = 1011,
		CasketContents = 1012,
		CasketAdded = 1013,
		CasketRemoved = 1014,
		CasketInvFull = 1015,
		NameBaseItem = 1019,
		RemoveItemName = 1030,
		RemoveSticker = 1053,
		ExtractSticker = 1054,
		EncapsulateSticker = 1055,
		ApplySticker = 1086,
		StatTrakSwap = 1088,
		RemovePatch = 1089,
		ApplyPatch = 1090,
		ApplyKeychain = 1091,
		RemoveKeychain = 1092,
		ActivateFanToken = 9178,
		ActivateOperationCoin = 9179,
		GraffitiUnseal = 9185,
		GenerateSouvenir = 9204,
		ClientRedeemMissionReward = 9209,
		ClientRedeemFreeReward = 9219,
		XpShopUseTicket = 9221,
		XpShopAckTracks = 9222
	}

	// ─── Data Types ─────────────────────────────────────────────────────────────

	interface StickerLike {
		slot: number;
		sticker_id: number;
		wear: number | null;
		scale: number | null;
		rotation: number | null;
		tint_id: number | null;
		offset_x: number | null;
		offset_y: number | null;
		offset_z: number | null;
		pattern: number | null;
		highlight_reel: number | null;
		wrapped_sticker: number | null;
	}

	interface InventorySticker {
		slot: number;
		sticker_id: number;
		wear: number | null;
		scale: number | null;
		rotation: number | null;
		offset_x: number | null;
		offset_y: number | null;
	}

	interface EconItem {
		id: string;
		account_id: number;
		inventory: number;
		def_index: number;
		quantity: number;
		level: number;
		quality: number;
		flags: number;
		origin: number;
		custom_name?: string;
		custom_desc?: string;
		attribute?: Array<{ def_index: number; value_bytes: Buffer }>;
		equipped_state?: Array<{ new_class: number; new_slot: number }>;
		position: number;
		paint_index?: number;
		paint_seed?: number;
		paint_wear?: number;
		tradable_after?: Date;
		kill_eater_value?: number;
		kill_eater_score_type?: number;
		quest_id?: number;
		casket_id?: string;
		casket_contained_item_count?: number;
		stickers?: InventorySticker[];
		volatile_item_id?: string;
	}

	interface ItemInfo {
		accountid: string | null;
		itemid: string;
		defindex: number;
		paintindex: number;
		rarity: number;
		quality: number;
		paintwear: number;
		paintseed: number;
		killeaterscoretype: number | null;
		killeatervalue: number | null;
		customname: string | null;
		stickers: StickerLike[];
		keychains: StickerLike[];
		variations: StickerLike[];
		inventory: number;
		origin: number;
		questid: number | null;
		dropreason: number | null;
		musicindex: number | null;
		entindex: number | null;
	}

	interface PlayerProfile {
		account_id: number;
		ongoingmatch: unknown;
		global_stats: unknown;
		penalty_seconds: number | null;
		penalty_reason: number | null;
		vac_banned: number | null;
		ranking: unknown;
		commendation: unknown;
		medals: unknown;
		my_current_event: unknown;
		my_current_event_teams: unknown[];
		my_current_team: unknown;
		my_current_event_stages: unknown[];
		survey_vote: number | null;
		activity: unknown;
		player_level: number | null;
		player_cur_xp: number | null;
		player_xp_bonus_flags: number | null;
	}

	interface ShareCodeDetails {
		matchId: string;
		outcomeId: string;
		token: number;
	}

	// ─── Events ─────────────────────────────────────────────────────────────────

	interface Events {
		connectedToGC: () => void;
		disconnectedFromGC: (reason: GCConnectionStatus) => void;
		connectionStatus: (status: GCConnectionStatus, data: unknown) => void;
		accountData: (data: unknown) => void;
		matchList: (matches: unknown[], data: unknown) => void;
		inspectItemInfo: (item: ItemInfo) => void;
		inspectItemTimedOut: (assetid: string) => void;
		itemAcquired: (item: EconItem) => void;
		itemChanged: (oldItem: EconItem, newItem: EconItem) => void;
		itemRemoved: (item: EconItem | null) => void;
		itemCustomizationNotification: (itemIds: string[], notificationType: number) => void;
		playersProfile: (profile: PlayerProfile) => void;
		craftingComplete: (recipe: number, itemIds: string[]) => void;
		xpShopNotification: (data: unknown) => void;
		recurringMissionSchema: (schema: unknown) => void;
		premierSeasonSummary: (data: unknown) => void;
		matchmakingSearchStats: (data: unknown) => void;
		debug: (message: string) => void;
		error: (error: Error) => void;
	}
}

declare class NodeCS2 extends EventEmitter {
	constructor(steam: SteamUser);

	// ─── Properties ─────────────────────────────────────────────────────────────
	haveGCSession: boolean;
	inventory: NodeCS2.EconItem[];
	accountData: unknown;

	// Configurable timeouts
	_inspectTimeout: number;
	_profileTimeout: number;
	_missionTimeout: number;
	_stickerTimeout: number;
	_rewardTimeout: number;
	_casketTimeout: number;
	_volatileItemTimeout: number;
	_crateTimeout: number;

	// ─── Connection ─────────────────────────────────────────────────────────────
	helloGC(): void;

	// ─── Match Data ─────────────────────────────────────────────────────────────
	requestGame(shareCodeOrDetails: string | NodeCS2.ShareCodeDetails): void;
	requestLiveGames(): void;
	requestRecentGames(steamid: string | SteamID): boolean | void;
	requestLiveGameForUser(steamid: string | SteamID): boolean | void;

	// ─── Item Inspection ────────────────────────────────────────────────────────
	inspectItem(owner: string | SteamID, assetid: string, d: string, callback: (item: NodeCS2.ItemInfo) => void): void;
	inspectItem(owner: string | SteamID, assetid: string, d: string): Promise<NodeCS2.ItemInfo>;
	inspectItem(inspectLink: string, callback: (item: NodeCS2.ItemInfo) => void): void;
	inspectItem(inspectLink: string): Promise<NodeCS2.ItemInfo>;

	// ─── Player Profile ─────────────────────────────────────────────────────────
	requestPlayersProfile(steamid: string | SteamID, callback: (profile: NodeCS2.PlayerProfile) => void): void;
	requestPlayersProfile(steamid: string | SteamID): Promise<NodeCS2.PlayerProfile>;

	// ─── Item Operations ────────────────────────────────────────────────────────
	nameItem(nameTagId: string, itemId: string, name: string): void;
	deleteItem(itemId: string): void;
	craft(items: string[], recipe: number): void;

	// ─── Casket (Storage Unit) ──────────────────────────────────────────────────
	addToCasket(casketId: string, itemId: string): void;
	removeFromCasket(casketId: string, itemId: string): void;
	getCasketContents(casketId: string, callback: (error: Error | null, items?: NodeCS2.EconItem[]) => void): void;
	getCasketContents(casketId: string): Promise<NodeCS2.EconItem[]>;

	// ─── Volatile Items ─────────────────────────────────────────────────────────
	loadVolatileItemContents(volatileItemId: string, callback: (error: Error | null, items?: NodeCS2.EconItem[]) => void): void;
	loadVolatileItemContents(volatileItemId: string): Promise<NodeCS2.EconItem[]>;
	claimVolatileItemReward(defindex: number, callback: (error: Error | null, itemIds?: string[]) => void): void;
	claimVolatileItemReward(defindex: number): Promise<string[]>;
	acknowledgeRentalExpiration(crateItemId: string): void;

	// ─── Recurring Missions ─────────────────────────────────────────────────────
	requestRecurringMissionSchedule(callback: (error: Error | null, schema?: unknown) => void): void;
	requestRecurringMissionSchedule(): Promise<unknown>;

	// ─── XP Shop & Rewards ──────────────────────────────────────────────────────
	acknowledgeXPShopTracks(): void;
	redeemFreeReward(generationTime: number, redeemableBalance: number, items: number[], callback: (error: Error | null, itemIds?: string[]) => void): void;
	redeemFreeReward(generationTime: number, redeemableBalance: number, items: number[]): Promise<string[]>;
	redeemMissionReward(campaignId: number, redeemId: number, redeemableBalance: number, expectedCost: number, bidControl?: number, callback?: (error: Error | null, itemIds?: string[]) => void): void;
	redeemMissionReward(campaignId: number, redeemId: number, redeemableBalance: number, expectedCost: number, bidControl?: number): Promise<string[]>;

	// ─── Premier Season ─────────────────────────────────────────────────────────
	setLeaderboardSafeName(leaderboardSafeName: string): void;

	// ─── Crate Opening ──────────────────────────────────────────────────────────
	openCrate(toolItemId: string, subjectItemId: string, forRental?: boolean, pointsRemaining?: number, callback?: (error: Error | null, itemIds?: string[]) => void): void;
	openCrate(toolItemId: string, subjectItemId: string, callback: (error: Error | null, itemIds?: string[]) => void): void;
	openCrate(toolItemId: string, subjectItemId: string, forRental?: boolean, pointsRemaining?: number): Promise<string[]>;

	// ─── Sticker Operations ─────────────────────────────────────────────────────
	extractSticker(itemId: string, stickerSlot: number, callback: (error: Error | null, itemIds?: string[]) => void): void;
	extractSticker(itemId: string, stickerSlot: number): Promise<string[]>;
	encapsulateSticker(stickerId: string, callback: (error: Error | null, itemIds?: string[]) => void): void;
	encapsulateSticker(stickerId: string): Promise<string[]>;

	// ─── Patch Operations ───────────────────────────────────────────────────────
	applyPatch(itemId: string, patchId: string, patchSlot?: number, callback?: (error: Error | null, itemIds?: string[]) => void): void;
	applyPatch(itemId: string, patchId: string, callback: (error: Error | null, itemIds?: string[]) => void): void;
	applyPatch(itemId: string, patchId: string, patchSlot?: number): Promise<string[]>;
	removePatch(itemId: string, patchSlot: number, callback: (error: Error | null, itemIds?: string[]) => void): void;
	removePatch(itemId: string, patchSlot: number): Promise<string[]>;

	// ─── Keychain Operations ────────────────────────────────────────────────────
	applyKeychain(itemId: string, keychainId: string, keychainSlot?: number, callback?: (error: Error | null, itemIds?: string[]) => void): void;
	applyKeychain(itemId: string, keychainId: string, callback: (error: Error | null, itemIds?: string[]) => void): void;
	applyKeychain(itemId: string, keychainId: string, keychainSlot?: number): Promise<string[]>;
	removeKeychain(itemId: string): void;

	// ─── Typed Event Emitter ────────────────────────────────────────────────────
	on<K extends keyof NodeCS2.Events>(event: K, listener: NodeCS2.Events[K]): this;
	on(event: string, listener: (...args: any[]) => void): this;
	once<K extends keyof NodeCS2.Events>(event: K, listener: NodeCS2.Events[K]): this;
	once(event: string, listener: (...args: any[]) => void): this;
	off<K extends keyof NodeCS2.Events>(event: K, listener: NodeCS2.Events[K]): this;
	off(event: string, listener: (...args: any[]) => void): this;
	emit<K extends keyof NodeCS2.Events>(event: K, ...args: Parameters<NodeCS2.Events[K]>): boolean;
	emit(event: string, ...args: any[]): boolean;
	removeListener<K extends keyof NodeCS2.Events>(event: K, listener: NodeCS2.Events[K]): this;
	removeListener(event: string, listener: (...args: any[]) => void): this;
}

export = NodeCS2;
