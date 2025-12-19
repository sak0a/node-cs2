var NodeCS2 = require('./index.js');

NodeCS2.GCConnectionStatus = {
	HAVE_SESSION: 0,
	GC_GOING_DOWN: 1,
	NO_SESSION: 2,
	NO_SESSION_IN_LOGON_QUEUE: 3,
	NO_STEAM: 4
};

NodeCS2.ItemCustomizationNotification = {
	NameItem: 1006,
	UnlockCrate: 1007,
	XRayItemReveal: 1008,
	XRayItemClaim: 1009,
	CasketTooFull: 1011,
	CasketContents: 1012,
	CasketAdded: 1013,
	CasketRemoved: 1014,
	CasketInvFull: 1015,
	NameBaseItem: 1019,
	RemoveItemName: 1030,
	RemoveSticker: 1053,
	ExtractSticker: 1054, // NEW: Extract sticker from item
	EncapsulateSticker: 1055, // NEW: Encapsulate sticker
	ApplySticker: 1086,
	StatTrakSwap: 1088,
	RemovePatch: 1089, // NEW: Remove patch from item
	ApplyPatch: 1090, // NEW: Apply patch to item
	ApplyKeychain: 1091, // NEW: Apply keychain to item
	RemoveKeychain: 1092, // NEW: Remove keychain from item
	ActivateFanToken: 9178,
	ActivateOperationCoin: 9179,
	GraffitiUnseal: 9185,
	GenerateSouvenir: 9204,
	ClientRedeemMissionReward: 9209, // NEW: Redeem mission reward
	ClientRedeemFreeReward: 9219, // NEW: Redeem free reward
	XpShopUseTicket: 9221, // NEW: Use XP shop ticket
	XpShopAckTracks: 9222 // NEW: Acknowledge XP shop tracks
};
