/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    /**
     * EGCItemMsg enum.
     * @exports EGCItemMsg
     * @enum {number}
     * @property {number} k_EMsgGCBase=1000 k_EMsgGCBase value
     * @property {number} k_EMsgGCSetItemPosition=1001 k_EMsgGCSetItemPosition value
     * @property {number} k_EMsgGCCraft=1002 k_EMsgGCCraft value
     * @property {number} k_EMsgGCCraftResponse=1003 k_EMsgGCCraftResponse value
     * @property {number} k_EMsgGCDelete=1004 k_EMsgGCDelete value
     * @property {number} k_EMsgGCVerifyCacheSubscription=1005 k_EMsgGCVerifyCacheSubscription value
     * @property {number} k_EMsgGCNameItem=1006 k_EMsgGCNameItem value
     * @property {number} k_EMsgGCUnlockCrate_DEPRECATED=1007 k_EMsgGCUnlockCrate_DEPRECATED value
     * @property {number} k_EMsgGCUnlockCrateResponse=1008 k_EMsgGCUnlockCrateResponse value
     * @property {number} k_EMsgGCPaintItem=1009 k_EMsgGCPaintItem value
     * @property {number} k_EMsgGCPaintItemResponse=1010 k_EMsgGCPaintItemResponse value
     * @property {number} k_EMsgGCGoldenWrenchBroadcast=1011 k_EMsgGCGoldenWrenchBroadcast value
     * @property {number} k_EMsgGCMOTDRequest=1012 k_EMsgGCMOTDRequest value
     * @property {number} k_EMsgGCMOTDRequestResponse=1013 k_EMsgGCMOTDRequestResponse value
     * @property {number} k_EMsgGCAddItemToSocket_DEPRECATED=1014 k_EMsgGCAddItemToSocket_DEPRECATED value
     * @property {number} k_EMsgGCAddItemToSocketResponse_DEPRECATED=1015 k_EMsgGCAddItemToSocketResponse_DEPRECATED value
     * @property {number} k_EMsgGCAddSocketToBaseItem_DEPRECATED=1016 k_EMsgGCAddSocketToBaseItem_DEPRECATED value
     * @property {number} k_EMsgGCAddSocketToItem_DEPRECATED=1017 k_EMsgGCAddSocketToItem_DEPRECATED value
     * @property {number} k_EMsgGCAddSocketToItemResponse_DEPRECATED=1018 k_EMsgGCAddSocketToItemResponse_DEPRECATED value
     * @property {number} k_EMsgGCNameBaseItem=1019 k_EMsgGCNameBaseItem value
     * @property {number} k_EMsgGCNameBaseItemResponse=1020 k_EMsgGCNameBaseItemResponse value
     * @property {number} k_EMsgGCRemoveSocketItem_DEPRECATED=1021 k_EMsgGCRemoveSocketItem_DEPRECATED value
     * @property {number} k_EMsgGCRemoveSocketItemResponse_DEPRECATED=1022 k_EMsgGCRemoveSocketItemResponse_DEPRECATED value
     * @property {number} k_EMsgGCCustomizeItemTexture=1023 k_EMsgGCCustomizeItemTexture value
     * @property {number} k_EMsgGCCustomizeItemTextureResponse=1024 k_EMsgGCCustomizeItemTextureResponse value
     * @property {number} k_EMsgGCUseItemRequest=1025 k_EMsgGCUseItemRequest value
     * @property {number} k_EMsgGCUseItemResponse=1026 k_EMsgGCUseItemResponse value
     * @property {number} k_EMsgGCGiftedItems_DEPRECATED=1027 k_EMsgGCGiftedItems_DEPRECATED value
     * @property {number} k_EMsgGCRemoveItemName=1030 k_EMsgGCRemoveItemName value
     * @property {number} k_EMsgGCRemoveItemPaint=1031 k_EMsgGCRemoveItemPaint value
     * @property {number} k_EMsgGCGiftWrapItem=1032 k_EMsgGCGiftWrapItem value
     * @property {number} k_EMsgGCGiftWrapItemResponse=1033 k_EMsgGCGiftWrapItemResponse value
     * @property {number} k_EMsgGCDeliverGift=1034 k_EMsgGCDeliverGift value
     * @property {number} k_EMsgGCDeliverGiftResponseGiver=1035 k_EMsgGCDeliverGiftResponseGiver value
     * @property {number} k_EMsgGCDeliverGiftResponseReceiver=1036 k_EMsgGCDeliverGiftResponseReceiver value
     * @property {number} k_EMsgGCUnwrapGiftRequest=1037 k_EMsgGCUnwrapGiftRequest value
     * @property {number} k_EMsgGCUnwrapGiftResponse=1038 k_EMsgGCUnwrapGiftResponse value
     * @property {number} k_EMsgGCSetItemStyle=1039 k_EMsgGCSetItemStyle value
     * @property {number} k_EMsgGCUsedClaimCodeItem=1040 k_EMsgGCUsedClaimCodeItem value
     * @property {number} k_EMsgGCSortItems=1041 k_EMsgGCSortItems value
     * @property {number} k_EMsgGC_RevolvingLootList_DEPRECATED=1042 k_EMsgGC_RevolvingLootList_DEPRECATED value
     * @property {number} k_EMsgGCLookupAccount=1043 k_EMsgGCLookupAccount value
     * @property {number} k_EMsgGCLookupAccountResponse=1044 k_EMsgGCLookupAccountResponse value
     * @property {number} k_EMsgGCLookupAccountName=1045 k_EMsgGCLookupAccountName value
     * @property {number} k_EMsgGCLookupAccountNameResponse=1046 k_EMsgGCLookupAccountNameResponse value
     * @property {number} k_EMsgGCUpdateItemSchema=1049 k_EMsgGCUpdateItemSchema value
     * @property {number} k_EMsgGCRemoveCustomTexture=1051 k_EMsgGCRemoveCustomTexture value
     * @property {number} k_EMsgGCRemoveCustomTextureResponse=1052 k_EMsgGCRemoveCustomTextureResponse value
     * @property {number} k_EMsgGCRemoveMakersMark=1053 k_EMsgGCRemoveMakersMark value
     * @property {number} k_EMsgGCRemoveMakersMarkResponse=1054 k_EMsgGCRemoveMakersMarkResponse value
     * @property {number} k_EMsgGCRemoveUniqueCraftIndex=1055 k_EMsgGCRemoveUniqueCraftIndex value
     * @property {number} k_EMsgGCRemoveUniqueCraftIndexResponse=1056 k_EMsgGCRemoveUniqueCraftIndexResponse value
     * @property {number} k_EMsgGCSaxxyBroadcast=1057 k_EMsgGCSaxxyBroadcast value
     * @property {number} k_EMsgGCBackpackSortFinished=1058 k_EMsgGCBackpackSortFinished value
     * @property {number} k_EMsgGCCollectItem=1061 k_EMsgGCCollectItem value
     * @property {number} k_EMsgGCItemAcknowledged__DEPRECATED=1062 k_EMsgGCItemAcknowledged__DEPRECATED value
     * @property {number} k_EMsgGC_ReportAbuse=1065 k_EMsgGC_ReportAbuse value
     * @property {number} k_EMsgGC_ReportAbuseResponse=1066 k_EMsgGC_ReportAbuseResponse value
     * @property {number} k_EMsgGCNameItemNotification=1068 k_EMsgGCNameItemNotification value
     * @property {number} k_EMsgGCApplyConsumableEffects=1069 k_EMsgGCApplyConsumableEffects value
     * @property {number} k_EMsgGCConsumableExhausted=1070 k_EMsgGCConsumableExhausted value
     * @property {number} k_EMsgGCShowItemsPickedUp=1071 k_EMsgGCShowItemsPickedUp value
     * @property {number} k_EMsgGCClientDisplayNotification=1072 k_EMsgGCClientDisplayNotification value
     * @property {number} k_EMsgGCApplyStrangePart=1073 k_EMsgGCApplyStrangePart value
     * @property {number} k_EMsgGC_IncrementKillCountAttribute=1074 k_EMsgGC_IncrementKillCountAttribute value
     * @property {number} k_EMsgGC_IncrementKillCountResponse=1075 k_EMsgGC_IncrementKillCountResponse value
     * @property {number} k_EMsgGCApplyPennantUpgrade=1076 k_EMsgGCApplyPennantUpgrade value
     * @property {number} k_EMsgGCSetItemPositions=1077 k_EMsgGCSetItemPositions value
     * @property {number} k_EMsgGCApplyEggEssence=1078 k_EMsgGCApplyEggEssence value
     * @property {number} k_EMsgGCNameEggEssenceResponse=1079 k_EMsgGCNameEggEssenceResponse value
     * @property {number} k_EMsgGCPaintKitItem=1080 k_EMsgGCPaintKitItem value
     * @property {number} k_EMsgGCPaintKitBaseItem=1081 k_EMsgGCPaintKitBaseItem value
     * @property {number} k_EMsgGCPaintKitItemResponse=1082 k_EMsgGCPaintKitItemResponse value
     * @property {number} k_EMsgGCGiftedItems=1083 k_EMsgGCGiftedItems value
     * @property {number} k_EMsgGCUnlockItemStyle=1084 k_EMsgGCUnlockItemStyle value
     * @property {number} k_EMsgGCUnlockItemStyleResponse=1085 k_EMsgGCUnlockItemStyleResponse value
     * @property {number} k_EMsgGCApplySticker=1086 k_EMsgGCApplySticker value
     * @property {number} k_EMsgGCItemAcknowledged=1087 k_EMsgGCItemAcknowledged value
     * @property {number} k_EMsgGCStatTrakSwap=1088 k_EMsgGCStatTrakSwap value
     * @property {number} k_EMsgGCUserTrackTimePlayedConsecutively=1089 k_EMsgGCUserTrackTimePlayedConsecutively value
     * @property {number} k_EMsgGCItemCustomizationNotification=1090 k_EMsgGCItemCustomizationNotification value
     * @property {number} k_EMsgGCModifyItemAttribute=1091 k_EMsgGCModifyItemAttribute value
     * @property {number} k_EMsgGCCasketItemAdd=1092 k_EMsgGCCasketItemAdd value
     * @property {number} k_EMsgGCCasketItemExtract=1093 k_EMsgGCCasketItemExtract value
     * @property {number} k_EMsgGCCasketItemLoadContents=1094 k_EMsgGCCasketItemLoadContents value
     * @property {number} k_EMsgGCTradingBase=1500 k_EMsgGCTradingBase value
     * @property {number} k_EMsgGCTrading_InitiateTradeRequest=1501 k_EMsgGCTrading_InitiateTradeRequest value
     * @property {number} k_EMsgGCTrading_InitiateTradeResponse=1502 k_EMsgGCTrading_InitiateTradeResponse value
     * @property {number} k_EMsgGCTrading_StartSession=1503 k_EMsgGCTrading_StartSession value
     * @property {number} k_EMsgGCTrading_SetItem=1504 k_EMsgGCTrading_SetItem value
     * @property {number} k_EMsgGCTrading_RemoveItem=1505 k_EMsgGCTrading_RemoveItem value
     * @property {number} k_EMsgGCTrading_UpdateTradeInfo=1506 k_EMsgGCTrading_UpdateTradeInfo value
     * @property {number} k_EMsgGCTrading_SetReadiness=1507 k_EMsgGCTrading_SetReadiness value
     * @property {number} k_EMsgGCTrading_ReadinessResponse=1508 k_EMsgGCTrading_ReadinessResponse value
     * @property {number} k_EMsgGCTrading_SessionClosed=1509 k_EMsgGCTrading_SessionClosed value
     * @property {number} k_EMsgGCTrading_CancelSession=1510 k_EMsgGCTrading_CancelSession value
     * @property {number} k_EMsgGCTrading_TradeChatMsg=1511 k_EMsgGCTrading_TradeChatMsg value
     * @property {number} k_EMsgGCTrading_ConfirmOffer=1512 k_EMsgGCTrading_ConfirmOffer value
     * @property {number} k_EMsgGCTrading_TradeTypingChatMsg=1513 k_EMsgGCTrading_TradeTypingChatMsg value
     * @property {number} k_EMsgGCServerBrowser_FavoriteServer=1601 k_EMsgGCServerBrowser_FavoriteServer value
     * @property {number} k_EMsgGCServerBrowser_BlacklistServer=1602 k_EMsgGCServerBrowser_BlacklistServer value
     * @property {number} k_EMsgGCServerRentalsBase=1700 k_EMsgGCServerRentalsBase value
     * @property {number} k_EMsgGCItemPreviewCheckStatus=1701 k_EMsgGCItemPreviewCheckStatus value
     * @property {number} k_EMsgGCItemPreviewStatusResponse=1702 k_EMsgGCItemPreviewStatusResponse value
     * @property {number} k_EMsgGCItemPreviewRequest=1703 k_EMsgGCItemPreviewRequest value
     * @property {number} k_EMsgGCItemPreviewRequestResponse=1704 k_EMsgGCItemPreviewRequestResponse value
     * @property {number} k_EMsgGCItemPreviewExpire=1705 k_EMsgGCItemPreviewExpire value
     * @property {number} k_EMsgGCItemPreviewExpireNotification=1706 k_EMsgGCItemPreviewExpireNotification value
     * @property {number} k_EMsgGCItemPreviewItemBoughtNotification=1707 k_EMsgGCItemPreviewItemBoughtNotification value
     * @property {number} k_EMsgGCDev_NewItemRequest=2001 k_EMsgGCDev_NewItemRequest value
     * @property {number} k_EMsgGCDev_NewItemRequestResponse=2002 k_EMsgGCDev_NewItemRequestResponse value
     * @property {number} k_EMsgGCDev_PaintKitDropItem=2003 k_EMsgGCDev_PaintKitDropItem value
     * @property {number} k_EMsgGCDev_SchemaReservationRequest=2004 k_EMsgGCDev_SchemaReservationRequest value
     * @property {number} k_EMsgGCStoreGetUserData=2500 k_EMsgGCStoreGetUserData value
     * @property {number} k_EMsgGCStoreGetUserDataResponse=2501 k_EMsgGCStoreGetUserDataResponse value
     * @property {number} k_EMsgGCStorePurchaseInit_DEPRECATED=2502 k_EMsgGCStorePurchaseInit_DEPRECATED value
     * @property {number} k_EMsgGCStorePurchaseInitResponse_DEPRECATED=2503 k_EMsgGCStorePurchaseInitResponse_DEPRECATED value
     * @property {number} k_EMsgGCStorePurchaseFinalize=2504 k_EMsgGCStorePurchaseFinalize value
     * @property {number} k_EMsgGCStorePurchaseFinalizeResponse=2505 k_EMsgGCStorePurchaseFinalizeResponse value
     * @property {number} k_EMsgGCStorePurchaseCancel=2506 k_EMsgGCStorePurchaseCancel value
     * @property {number} k_EMsgGCStorePurchaseCancelResponse=2507 k_EMsgGCStorePurchaseCancelResponse value
     * @property {number} k_EMsgGCStorePurchaseQueryTxn=2508 k_EMsgGCStorePurchaseQueryTxn value
     * @property {number} k_EMsgGCStorePurchaseQueryTxnResponse=2509 k_EMsgGCStorePurchaseQueryTxnResponse value
     * @property {number} k_EMsgGCStorePurchaseInit=2510 k_EMsgGCStorePurchaseInit value
     * @property {number} k_EMsgGCStorePurchaseInitResponse=2511 k_EMsgGCStorePurchaseInitResponse value
     * @property {number} k_EMsgGCBannedWordListRequest=2512 k_EMsgGCBannedWordListRequest value
     * @property {number} k_EMsgGCBannedWordListResponse=2513 k_EMsgGCBannedWordListResponse value
     * @property {number} k_EMsgGCToGCBannedWordListBroadcast=2514 k_EMsgGCToGCBannedWordListBroadcast value
     * @property {number} k_EMsgGCToGCBannedWordListUpdated=2515 k_EMsgGCToGCBannedWordListUpdated value
     * @property {number} k_EMsgGCToGCDirtySDOCache=2516 k_EMsgGCToGCDirtySDOCache value
     * @property {number} k_EMsgGCToGCDirtyMultipleSDOCache=2517 k_EMsgGCToGCDirtyMultipleSDOCache value
     * @property {number} k_EMsgGCToGCUpdateSQLKeyValue=2518 k_EMsgGCToGCUpdateSQLKeyValue value
     * @property {number} k_EMsgGCToGCIsTrustedServer=2519 k_EMsgGCToGCIsTrustedServer value
     * @property {number} k_EMsgGCToGCIsTrustedServerResponse=2520 k_EMsgGCToGCIsTrustedServerResponse value
     * @property {number} k_EMsgGCToGCBroadcastConsoleCommand=2521 k_EMsgGCToGCBroadcastConsoleCommand value
     * @property {number} k_EMsgGCServerVersionUpdated=2522 k_EMsgGCServerVersionUpdated value
     * @property {number} k_EMsgGCToGCWebAPIAccountChanged=2524 k_EMsgGCToGCWebAPIAccountChanged value
     * @property {number} k_EMsgGCRequestAnnouncements=2525 k_EMsgGCRequestAnnouncements value
     * @property {number} k_EMsgGCRequestAnnouncementsResponse=2526 k_EMsgGCRequestAnnouncementsResponse value
     * @property {number} k_EMsgGCRequestPassportItemGrant=2527 k_EMsgGCRequestPassportItemGrant value
     * @property {number} k_EMsgGCClientVersionUpdated=2528 k_EMsgGCClientVersionUpdated value
     * @property {number} k_EMsgGCRecurringSubscriptionStatus=2530 k_EMsgGCRecurringSubscriptionStatus value
     * @property {number} k_EMsgGCAdjustEquipSlotsManual=2531 k_EMsgGCAdjustEquipSlotsManual value
     * @property {number} k_EMsgGCAdjustEquipSlotsShuffle=2532 k_EMsgGCAdjustEquipSlotsShuffle value
     * @property {number} k_EMsgGCOpenCrate=2534 k_EMsgGCOpenCrate value
     * @property {number} k_EMsgGCAcknowledgeRentalExpiration=2535 k_EMsgGCAcknowledgeRentalExpiration value
     * @property {number} k_EMsgGCVolatileItemLoadContents=2536 k_EMsgGCVolatileItemLoadContents value
     */
    $root.EGCItemMsg = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1000] = "k_EMsgGCBase"] = 1000;
        values[valuesById[1001] = "k_EMsgGCSetItemPosition"] = 1001;
        values[valuesById[1002] = "k_EMsgGCCraft"] = 1002;
        values[valuesById[1003] = "k_EMsgGCCraftResponse"] = 1003;
        values[valuesById[1004] = "k_EMsgGCDelete"] = 1004;
        values[valuesById[1005] = "k_EMsgGCVerifyCacheSubscription"] = 1005;
        values[valuesById[1006] = "k_EMsgGCNameItem"] = 1006;
        values[valuesById[1007] = "k_EMsgGCUnlockCrate_DEPRECATED"] = 1007;
        values[valuesById[1008] = "k_EMsgGCUnlockCrateResponse"] = 1008;
        values[valuesById[1009] = "k_EMsgGCPaintItem"] = 1009;
        values[valuesById[1010] = "k_EMsgGCPaintItemResponse"] = 1010;
        values[valuesById[1011] = "k_EMsgGCGoldenWrenchBroadcast"] = 1011;
        values[valuesById[1012] = "k_EMsgGCMOTDRequest"] = 1012;
        values[valuesById[1013] = "k_EMsgGCMOTDRequestResponse"] = 1013;
        values[valuesById[1014] = "k_EMsgGCAddItemToSocket_DEPRECATED"] = 1014;
        values[valuesById[1015] = "k_EMsgGCAddItemToSocketResponse_DEPRECATED"] = 1015;
        values[valuesById[1016] = "k_EMsgGCAddSocketToBaseItem_DEPRECATED"] = 1016;
        values[valuesById[1017] = "k_EMsgGCAddSocketToItem_DEPRECATED"] = 1017;
        values[valuesById[1018] = "k_EMsgGCAddSocketToItemResponse_DEPRECATED"] = 1018;
        values[valuesById[1019] = "k_EMsgGCNameBaseItem"] = 1019;
        values[valuesById[1020] = "k_EMsgGCNameBaseItemResponse"] = 1020;
        values[valuesById[1021] = "k_EMsgGCRemoveSocketItem_DEPRECATED"] = 1021;
        values[valuesById[1022] = "k_EMsgGCRemoveSocketItemResponse_DEPRECATED"] = 1022;
        values[valuesById[1023] = "k_EMsgGCCustomizeItemTexture"] = 1023;
        values[valuesById[1024] = "k_EMsgGCCustomizeItemTextureResponse"] = 1024;
        values[valuesById[1025] = "k_EMsgGCUseItemRequest"] = 1025;
        values[valuesById[1026] = "k_EMsgGCUseItemResponse"] = 1026;
        values[valuesById[1027] = "k_EMsgGCGiftedItems_DEPRECATED"] = 1027;
        values[valuesById[1030] = "k_EMsgGCRemoveItemName"] = 1030;
        values[valuesById[1031] = "k_EMsgGCRemoveItemPaint"] = 1031;
        values[valuesById[1032] = "k_EMsgGCGiftWrapItem"] = 1032;
        values[valuesById[1033] = "k_EMsgGCGiftWrapItemResponse"] = 1033;
        values[valuesById[1034] = "k_EMsgGCDeliverGift"] = 1034;
        values[valuesById[1035] = "k_EMsgGCDeliverGiftResponseGiver"] = 1035;
        values[valuesById[1036] = "k_EMsgGCDeliverGiftResponseReceiver"] = 1036;
        values[valuesById[1037] = "k_EMsgGCUnwrapGiftRequest"] = 1037;
        values[valuesById[1038] = "k_EMsgGCUnwrapGiftResponse"] = 1038;
        values[valuesById[1039] = "k_EMsgGCSetItemStyle"] = 1039;
        values[valuesById[1040] = "k_EMsgGCUsedClaimCodeItem"] = 1040;
        values[valuesById[1041] = "k_EMsgGCSortItems"] = 1041;
        values[valuesById[1042] = "k_EMsgGC_RevolvingLootList_DEPRECATED"] = 1042;
        values[valuesById[1043] = "k_EMsgGCLookupAccount"] = 1043;
        values[valuesById[1044] = "k_EMsgGCLookupAccountResponse"] = 1044;
        values[valuesById[1045] = "k_EMsgGCLookupAccountName"] = 1045;
        values[valuesById[1046] = "k_EMsgGCLookupAccountNameResponse"] = 1046;
        values[valuesById[1049] = "k_EMsgGCUpdateItemSchema"] = 1049;
        values[valuesById[1051] = "k_EMsgGCRemoveCustomTexture"] = 1051;
        values[valuesById[1052] = "k_EMsgGCRemoveCustomTextureResponse"] = 1052;
        values[valuesById[1053] = "k_EMsgGCRemoveMakersMark"] = 1053;
        values[valuesById[1054] = "k_EMsgGCRemoveMakersMarkResponse"] = 1054;
        values[valuesById[1055] = "k_EMsgGCRemoveUniqueCraftIndex"] = 1055;
        values[valuesById[1056] = "k_EMsgGCRemoveUniqueCraftIndexResponse"] = 1056;
        values[valuesById[1057] = "k_EMsgGCSaxxyBroadcast"] = 1057;
        values[valuesById[1058] = "k_EMsgGCBackpackSortFinished"] = 1058;
        values[valuesById[1061] = "k_EMsgGCCollectItem"] = 1061;
        values[valuesById[1062] = "k_EMsgGCItemAcknowledged__DEPRECATED"] = 1062;
        values[valuesById[1065] = "k_EMsgGC_ReportAbuse"] = 1065;
        values[valuesById[1066] = "k_EMsgGC_ReportAbuseResponse"] = 1066;
        values[valuesById[1068] = "k_EMsgGCNameItemNotification"] = 1068;
        values[valuesById[1069] = "k_EMsgGCApplyConsumableEffects"] = 1069;
        values[valuesById[1070] = "k_EMsgGCConsumableExhausted"] = 1070;
        values[valuesById[1071] = "k_EMsgGCShowItemsPickedUp"] = 1071;
        values[valuesById[1072] = "k_EMsgGCClientDisplayNotification"] = 1072;
        values[valuesById[1073] = "k_EMsgGCApplyStrangePart"] = 1073;
        values[valuesById[1074] = "k_EMsgGC_IncrementKillCountAttribute"] = 1074;
        values[valuesById[1075] = "k_EMsgGC_IncrementKillCountResponse"] = 1075;
        values[valuesById[1076] = "k_EMsgGCApplyPennantUpgrade"] = 1076;
        values[valuesById[1077] = "k_EMsgGCSetItemPositions"] = 1077;
        values[valuesById[1078] = "k_EMsgGCApplyEggEssence"] = 1078;
        values[valuesById[1079] = "k_EMsgGCNameEggEssenceResponse"] = 1079;
        values[valuesById[1080] = "k_EMsgGCPaintKitItem"] = 1080;
        values[valuesById[1081] = "k_EMsgGCPaintKitBaseItem"] = 1081;
        values[valuesById[1082] = "k_EMsgGCPaintKitItemResponse"] = 1082;
        values[valuesById[1083] = "k_EMsgGCGiftedItems"] = 1083;
        values[valuesById[1084] = "k_EMsgGCUnlockItemStyle"] = 1084;
        values[valuesById[1085] = "k_EMsgGCUnlockItemStyleResponse"] = 1085;
        values[valuesById[1086] = "k_EMsgGCApplySticker"] = 1086;
        values[valuesById[1087] = "k_EMsgGCItemAcknowledged"] = 1087;
        values[valuesById[1088] = "k_EMsgGCStatTrakSwap"] = 1088;
        values[valuesById[1089] = "k_EMsgGCUserTrackTimePlayedConsecutively"] = 1089;
        values[valuesById[1090] = "k_EMsgGCItemCustomizationNotification"] = 1090;
        values[valuesById[1091] = "k_EMsgGCModifyItemAttribute"] = 1091;
        values[valuesById[1092] = "k_EMsgGCCasketItemAdd"] = 1092;
        values[valuesById[1093] = "k_EMsgGCCasketItemExtract"] = 1093;
        values[valuesById[1094] = "k_EMsgGCCasketItemLoadContents"] = 1094;
        values[valuesById[1500] = "k_EMsgGCTradingBase"] = 1500;
        values[valuesById[1501] = "k_EMsgGCTrading_InitiateTradeRequest"] = 1501;
        values[valuesById[1502] = "k_EMsgGCTrading_InitiateTradeResponse"] = 1502;
        values[valuesById[1503] = "k_EMsgGCTrading_StartSession"] = 1503;
        values[valuesById[1504] = "k_EMsgGCTrading_SetItem"] = 1504;
        values[valuesById[1505] = "k_EMsgGCTrading_RemoveItem"] = 1505;
        values[valuesById[1506] = "k_EMsgGCTrading_UpdateTradeInfo"] = 1506;
        values[valuesById[1507] = "k_EMsgGCTrading_SetReadiness"] = 1507;
        values[valuesById[1508] = "k_EMsgGCTrading_ReadinessResponse"] = 1508;
        values[valuesById[1509] = "k_EMsgGCTrading_SessionClosed"] = 1509;
        values[valuesById[1510] = "k_EMsgGCTrading_CancelSession"] = 1510;
        values[valuesById[1511] = "k_EMsgGCTrading_TradeChatMsg"] = 1511;
        values[valuesById[1512] = "k_EMsgGCTrading_ConfirmOffer"] = 1512;
        values[valuesById[1513] = "k_EMsgGCTrading_TradeTypingChatMsg"] = 1513;
        values[valuesById[1601] = "k_EMsgGCServerBrowser_FavoriteServer"] = 1601;
        values[valuesById[1602] = "k_EMsgGCServerBrowser_BlacklistServer"] = 1602;
        values[valuesById[1700] = "k_EMsgGCServerRentalsBase"] = 1700;
        values[valuesById[1701] = "k_EMsgGCItemPreviewCheckStatus"] = 1701;
        values[valuesById[1702] = "k_EMsgGCItemPreviewStatusResponse"] = 1702;
        values[valuesById[1703] = "k_EMsgGCItemPreviewRequest"] = 1703;
        values[valuesById[1704] = "k_EMsgGCItemPreviewRequestResponse"] = 1704;
        values[valuesById[1705] = "k_EMsgGCItemPreviewExpire"] = 1705;
        values[valuesById[1706] = "k_EMsgGCItemPreviewExpireNotification"] = 1706;
        values[valuesById[1707] = "k_EMsgGCItemPreviewItemBoughtNotification"] = 1707;
        values[valuesById[2001] = "k_EMsgGCDev_NewItemRequest"] = 2001;
        values[valuesById[2002] = "k_EMsgGCDev_NewItemRequestResponse"] = 2002;
        values[valuesById[2003] = "k_EMsgGCDev_PaintKitDropItem"] = 2003;
        values[valuesById[2004] = "k_EMsgGCDev_SchemaReservationRequest"] = 2004;
        values[valuesById[2500] = "k_EMsgGCStoreGetUserData"] = 2500;
        values[valuesById[2501] = "k_EMsgGCStoreGetUserDataResponse"] = 2501;
        values[valuesById[2502] = "k_EMsgGCStorePurchaseInit_DEPRECATED"] = 2502;
        values[valuesById[2503] = "k_EMsgGCStorePurchaseInitResponse_DEPRECATED"] = 2503;
        values[valuesById[2504] = "k_EMsgGCStorePurchaseFinalize"] = 2504;
        values[valuesById[2505] = "k_EMsgGCStorePurchaseFinalizeResponse"] = 2505;
        values[valuesById[2506] = "k_EMsgGCStorePurchaseCancel"] = 2506;
        values[valuesById[2507] = "k_EMsgGCStorePurchaseCancelResponse"] = 2507;
        values[valuesById[2508] = "k_EMsgGCStorePurchaseQueryTxn"] = 2508;
        values[valuesById[2509] = "k_EMsgGCStorePurchaseQueryTxnResponse"] = 2509;
        values[valuesById[2510] = "k_EMsgGCStorePurchaseInit"] = 2510;
        values[valuesById[2511] = "k_EMsgGCStorePurchaseInitResponse"] = 2511;
        values[valuesById[2512] = "k_EMsgGCBannedWordListRequest"] = 2512;
        values[valuesById[2513] = "k_EMsgGCBannedWordListResponse"] = 2513;
        values[valuesById[2514] = "k_EMsgGCToGCBannedWordListBroadcast"] = 2514;
        values[valuesById[2515] = "k_EMsgGCToGCBannedWordListUpdated"] = 2515;
        values[valuesById[2516] = "k_EMsgGCToGCDirtySDOCache"] = 2516;
        values[valuesById[2517] = "k_EMsgGCToGCDirtyMultipleSDOCache"] = 2517;
        values[valuesById[2518] = "k_EMsgGCToGCUpdateSQLKeyValue"] = 2518;
        values[valuesById[2519] = "k_EMsgGCToGCIsTrustedServer"] = 2519;
        values[valuesById[2520] = "k_EMsgGCToGCIsTrustedServerResponse"] = 2520;
        values[valuesById[2521] = "k_EMsgGCToGCBroadcastConsoleCommand"] = 2521;
        values[valuesById[2522] = "k_EMsgGCServerVersionUpdated"] = 2522;
        values[valuesById[2524] = "k_EMsgGCToGCWebAPIAccountChanged"] = 2524;
        values[valuesById[2525] = "k_EMsgGCRequestAnnouncements"] = 2525;
        values[valuesById[2526] = "k_EMsgGCRequestAnnouncementsResponse"] = 2526;
        values[valuesById[2527] = "k_EMsgGCRequestPassportItemGrant"] = 2527;
        values[valuesById[2528] = "k_EMsgGCClientVersionUpdated"] = 2528;
        values[valuesById[2530] = "k_EMsgGCRecurringSubscriptionStatus"] = 2530;
        values[valuesById[2531] = "k_EMsgGCAdjustEquipSlotsManual"] = 2531;
        values[valuesById[2532] = "k_EMsgGCAdjustEquipSlotsShuffle"] = 2532;
        values[valuesById[2534] = "k_EMsgGCOpenCrate"] = 2534;
        values[valuesById[2535] = "k_EMsgGCAcknowledgeRentalExpiration"] = 2535;
        values[valuesById[2536] = "k_EMsgGCVolatileItemLoadContents"] = 2536;
        return values;
    })();
    
    /**
     * EGCMsgResponse enum.
     * @exports EGCMsgResponse
     * @enum {number}
     * @property {number} k_EGCMsgResponseOK=0 k_EGCMsgResponseOK value
     * @property {number} k_EGCMsgResponseDenied=1 k_EGCMsgResponseDenied value
     * @property {number} k_EGCMsgResponseServerError=2 k_EGCMsgResponseServerError value
     * @property {number} k_EGCMsgResponseTimeout=3 k_EGCMsgResponseTimeout value
     * @property {number} k_EGCMsgResponseInvalid=4 k_EGCMsgResponseInvalid value
     * @property {number} k_EGCMsgResponseNoMatch=5 k_EGCMsgResponseNoMatch value
     * @property {number} k_EGCMsgResponseUnknownError=6 k_EGCMsgResponseUnknownError value
     * @property {number} k_EGCMsgResponseNotLoggedOn=7 k_EGCMsgResponseNotLoggedOn value
     * @property {number} k_EGCMsgFailedToCreate=8 k_EGCMsgFailedToCreate value
     * @property {number} k_EGCMsgLimitExceeded=9 k_EGCMsgLimitExceeded value
     * @property {number} k_EGCMsgCommitUnfinalized=10 k_EGCMsgCommitUnfinalized value
     */
    $root.EGCMsgResponse = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EGCMsgResponseOK"] = 0;
        values[valuesById[1] = "k_EGCMsgResponseDenied"] = 1;
        values[valuesById[2] = "k_EGCMsgResponseServerError"] = 2;
        values[valuesById[3] = "k_EGCMsgResponseTimeout"] = 3;
        values[valuesById[4] = "k_EGCMsgResponseInvalid"] = 4;
        values[valuesById[5] = "k_EGCMsgResponseNoMatch"] = 5;
        values[valuesById[6] = "k_EGCMsgResponseUnknownError"] = 6;
        values[valuesById[7] = "k_EGCMsgResponseNotLoggedOn"] = 7;
        values[valuesById[8] = "k_EGCMsgFailedToCreate"] = 8;
        values[valuesById[9] = "k_EGCMsgLimitExceeded"] = 9;
        values[valuesById[10] = "k_EGCMsgCommitUnfinalized"] = 10;
        return values;
    })();
    
    /**
     * EUnlockStyle enum.
     * @exports EUnlockStyle
     * @enum {number}
     * @property {number} k_UnlockStyle_Succeeded=0 k_UnlockStyle_Succeeded value
     * @property {number} k_UnlockStyle_Failed_PreReq=1 k_UnlockStyle_Failed_PreReq value
     * @property {number} k_UnlockStyle_Failed_CantAfford=2 k_UnlockStyle_Failed_CantAfford value
     * @property {number} k_UnlockStyle_Failed_CantCommit=3 k_UnlockStyle_Failed_CantCommit value
     * @property {number} k_UnlockStyle_Failed_CantLockCache=4 k_UnlockStyle_Failed_CantLockCache value
     * @property {number} k_UnlockStyle_Failed_CantAffordAttrib=5 k_UnlockStyle_Failed_CantAffordAttrib value
     */
    $root.EUnlockStyle = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_UnlockStyle_Succeeded"] = 0;
        values[valuesById[1] = "k_UnlockStyle_Failed_PreReq"] = 1;
        values[valuesById[2] = "k_UnlockStyle_Failed_CantAfford"] = 2;
        values[valuesById[3] = "k_UnlockStyle_Failed_CantCommit"] = 3;
        values[valuesById[4] = "k_UnlockStyle_Failed_CantLockCache"] = 4;
        values[valuesById[5] = "k_UnlockStyle_Failed_CantAffordAttrib"] = 5;
        return values;
    })();
    
    /**
     * EGCItemCustomizationNotification enum.
     * @exports EGCItemCustomizationNotification
     * @enum {number}
     * @property {number} k_EGCItemCustomizationNotification_NameItem=1006 k_EGCItemCustomizationNotification_NameItem value
     * @property {number} k_EGCItemCustomizationNotification_UnlockCrate=1007 k_EGCItemCustomizationNotification_UnlockCrate value
     * @property {number} k_EGCItemCustomizationNotification_XRayItemReveal=1008 k_EGCItemCustomizationNotification_XRayItemReveal value
     * @property {number} k_EGCItemCustomizationNotification_XRayItemClaim=1009 k_EGCItemCustomizationNotification_XRayItemClaim value
     * @property {number} k_EGCItemCustomizationNotification_CasketTooFull=1011 k_EGCItemCustomizationNotification_CasketTooFull value
     * @property {number} k_EGCItemCustomizationNotification_CasketContents=1012 k_EGCItemCustomizationNotification_CasketContents value
     * @property {number} k_EGCItemCustomizationNotification_CasketAdded=1013 k_EGCItemCustomizationNotification_CasketAdded value
     * @property {number} k_EGCItemCustomizationNotification_CasketRemoved=1014 k_EGCItemCustomizationNotification_CasketRemoved value
     * @property {number} k_EGCItemCustomizationNotification_CasketInvFull=1015 k_EGCItemCustomizationNotification_CasketInvFull value
     * @property {number} k_EGCItemCustomizationNotification_NameBaseItem=1019 k_EGCItemCustomizationNotification_NameBaseItem value
     * @property {number} k_EGCItemCustomizationNotification_RemoveItemName=1030 k_EGCItemCustomizationNotification_RemoveItemName value
     * @property {number} k_EGCItemCustomizationNotification_RemoveSticker=1053 k_EGCItemCustomizationNotification_RemoveSticker value
     * @property {number} k_EGCItemCustomizationNotification_ApplySticker=1086 k_EGCItemCustomizationNotification_ApplySticker value
     * @property {number} k_EGCItemCustomizationNotification_StatTrakSwap=1088 k_EGCItemCustomizationNotification_StatTrakSwap value
     * @property {number} k_EGCItemCustomizationNotification_RemovePatch=1089 k_EGCItemCustomizationNotification_RemovePatch value
     * @property {number} k_EGCItemCustomizationNotification_ApplyPatch=1090 k_EGCItemCustomizationNotification_ApplyPatch value
     * @property {number} k_EGCItemCustomizationNotification_ApplyKeychain=1091 k_EGCItemCustomizationNotification_ApplyKeychain value
     * @property {number} k_EGCItemCustomizationNotification_RemoveKeychain=1092 k_EGCItemCustomizationNotification_RemoveKeychain value
     * @property {number} k_EGCItemCustomizationNotification_ActivateFanToken=9178 k_EGCItemCustomizationNotification_ActivateFanToken value
     * @property {number} k_EGCItemCustomizationNotification_ActivateOperationCoin=9179 k_EGCItemCustomizationNotification_ActivateOperationCoin value
     * @property {number} k_EGCItemCustomizationNotification_GraffitiUnseal=9185 k_EGCItemCustomizationNotification_GraffitiUnseal value
     * @property {number} k_EGCItemCustomizationNotification_GenerateSouvenir=9204 k_EGCItemCustomizationNotification_GenerateSouvenir value
     * @property {number} k_EGCItemCustomizationNotification_ClientRedeemMissionReward=9209 k_EGCItemCustomizationNotification_ClientRedeemMissionReward value
     * @property {number} k_EGCItemCustomizationNotification_ClientRedeemFreeReward=9219 k_EGCItemCustomizationNotification_ClientRedeemFreeReward value
     * @property {number} k_EGCItemCustomizationNotification_XpShopUseTicket=9221 k_EGCItemCustomizationNotification_XpShopUseTicket value
     * @property {number} k_EGCItemCustomizationNotification_XpShopAckTracks=9222 k_EGCItemCustomizationNotification_XpShopAckTracks value
     */
    $root.EGCItemCustomizationNotification = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1006] = "k_EGCItemCustomizationNotification_NameItem"] = 1006;
        values[valuesById[1007] = "k_EGCItemCustomizationNotification_UnlockCrate"] = 1007;
        values[valuesById[1008] = "k_EGCItemCustomizationNotification_XRayItemReveal"] = 1008;
        values[valuesById[1009] = "k_EGCItemCustomizationNotification_XRayItemClaim"] = 1009;
        values[valuesById[1011] = "k_EGCItemCustomizationNotification_CasketTooFull"] = 1011;
        values[valuesById[1012] = "k_EGCItemCustomizationNotification_CasketContents"] = 1012;
        values[valuesById[1013] = "k_EGCItemCustomizationNotification_CasketAdded"] = 1013;
        values[valuesById[1014] = "k_EGCItemCustomizationNotification_CasketRemoved"] = 1014;
        values[valuesById[1015] = "k_EGCItemCustomizationNotification_CasketInvFull"] = 1015;
        values[valuesById[1019] = "k_EGCItemCustomizationNotification_NameBaseItem"] = 1019;
        values[valuesById[1030] = "k_EGCItemCustomizationNotification_RemoveItemName"] = 1030;
        values[valuesById[1053] = "k_EGCItemCustomizationNotification_RemoveSticker"] = 1053;
        values[valuesById[1086] = "k_EGCItemCustomizationNotification_ApplySticker"] = 1086;
        values[valuesById[1088] = "k_EGCItemCustomizationNotification_StatTrakSwap"] = 1088;
        values[valuesById[1089] = "k_EGCItemCustomizationNotification_RemovePatch"] = 1089;
        values[valuesById[1090] = "k_EGCItemCustomizationNotification_ApplyPatch"] = 1090;
        values[valuesById[1091] = "k_EGCItemCustomizationNotification_ApplyKeychain"] = 1091;
        values[valuesById[1092] = "k_EGCItemCustomizationNotification_RemoveKeychain"] = 1092;
        values[valuesById[9178] = "k_EGCItemCustomizationNotification_ActivateFanToken"] = 9178;
        values[valuesById[9179] = "k_EGCItemCustomizationNotification_ActivateOperationCoin"] = 9179;
        values[valuesById[9185] = "k_EGCItemCustomizationNotification_GraffitiUnseal"] = 9185;
        values[valuesById[9204] = "k_EGCItemCustomizationNotification_GenerateSouvenir"] = 9204;
        values[valuesById[9209] = "k_EGCItemCustomizationNotification_ClientRedeemMissionReward"] = 9209;
        values[valuesById[9219] = "k_EGCItemCustomizationNotification_ClientRedeemFreeReward"] = 9219;
        values[valuesById[9221] = "k_EGCItemCustomizationNotification_XpShopUseTicket"] = 9221;
        values[valuesById[9222] = "k_EGCItemCustomizationNotification_XpShopAckTracks"] = 9222;
        return values;
    })();
    
    $root.CMsgGCGiftedItems = (function() {
    
        /**
         * Properties of a CMsgGCGiftedItems.
         * @exports ICMsgGCGiftedItems
         * @interface ICMsgGCGiftedItems
         * @property {number|null} [accountid] CMsgGCGiftedItems accountid
         * @property {number|null} [giftdefindex] CMsgGCGiftedItems giftdefindex
         * @property {number|null} [max_gifts_possible] CMsgGCGiftedItems max_gifts_possible
         * @property {number|null} [num_eligible_recipients] CMsgGCGiftedItems num_eligible_recipients
         * @property {Array.<number>|null} [recipients_accountids] CMsgGCGiftedItems recipients_accountids
         */
    
        /**
         * Constructs a new CMsgGCGiftedItems.
         * @exports CMsgGCGiftedItems
         * @classdesc Represents a CMsgGCGiftedItems.
         * @implements ICMsgGCGiftedItems
         * @constructor
         * @param {ICMsgGCGiftedItems=} [properties] Properties to set
         */
        function CMsgGCGiftedItems(properties) {
            this.recipients_accountids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGCGiftedItems accountid.
         * @member {number} accountid
         * @memberof CMsgGCGiftedItems
         * @instance
         */
        CMsgGCGiftedItems.prototype.accountid = 0;
    
        /**
         * CMsgGCGiftedItems giftdefindex.
         * @member {number} giftdefindex
         * @memberof CMsgGCGiftedItems
         * @instance
         */
        CMsgGCGiftedItems.prototype.giftdefindex = 0;
    
        /**
         * CMsgGCGiftedItems max_gifts_possible.
         * @member {number} max_gifts_possible
         * @memberof CMsgGCGiftedItems
         * @instance
         */
        CMsgGCGiftedItems.prototype.max_gifts_possible = 0;
    
        /**
         * CMsgGCGiftedItems num_eligible_recipients.
         * @member {number} num_eligible_recipients
         * @memberof CMsgGCGiftedItems
         * @instance
         */
        CMsgGCGiftedItems.prototype.num_eligible_recipients = 0;
    
        /**
         * CMsgGCGiftedItems recipients_accountids.
         * @member {Array.<number>} recipients_accountids
         * @memberof CMsgGCGiftedItems
         * @instance
         */
        CMsgGCGiftedItems.prototype.recipients_accountids = $util.emptyArray;
    
        /**
         * Creates a new CMsgGCGiftedItems instance using the specified properties.
         * @function create
         * @memberof CMsgGCGiftedItems
         * @static
         * @param {ICMsgGCGiftedItems=} [properties] Properties to set
         * @returns {CMsgGCGiftedItems} CMsgGCGiftedItems instance
         */
        CMsgGCGiftedItems.create = function create(properties) {
            return new CMsgGCGiftedItems(properties);
        };
    
        /**
         * Encodes the specified CMsgGCGiftedItems message. Does not implicitly {@link CMsgGCGiftedItems.verify|verify} messages.
         * @function encode
         * @memberof CMsgGCGiftedItems
         * @static
         * @param {ICMsgGCGiftedItems} message CMsgGCGiftedItems message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCGiftedItems.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountid != null && Object.hasOwnProperty.call(message, "accountid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.accountid);
            if (message.giftdefindex != null && Object.hasOwnProperty.call(message, "giftdefindex"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.giftdefindex);
            if (message.max_gifts_possible != null && Object.hasOwnProperty.call(message, "max_gifts_possible"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.max_gifts_possible);
            if (message.num_eligible_recipients != null && Object.hasOwnProperty.call(message, "num_eligible_recipients"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.num_eligible_recipients);
            if (message.recipients_accountids != null && message.recipients_accountids.length)
                for (var i = 0; i < message.recipients_accountids.length; ++i)
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.recipients_accountids[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGCGiftedItems message, length delimited. Does not implicitly {@link CMsgGCGiftedItems.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGCGiftedItems
         * @static
         * @param {ICMsgGCGiftedItems} message CMsgGCGiftedItems message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCGiftedItems.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGCGiftedItems message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGCGiftedItems
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGCGiftedItems} CMsgGCGiftedItems
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCGiftedItems.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGCGiftedItems();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.accountid = reader.uint32();
                        break;
                    }
                case 2: {
                        message.giftdefindex = reader.uint32();
                        break;
                    }
                case 3: {
                        message.max_gifts_possible = reader.uint32();
                        break;
                    }
                case 4: {
                        message.num_eligible_recipients = reader.uint32();
                        break;
                    }
                case 5: {
                        if (!(message.recipients_accountids && message.recipients_accountids.length))
                            message.recipients_accountids = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.recipients_accountids.push(reader.uint32());
                        } else
                            message.recipients_accountids.push(reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGCGiftedItems message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGCGiftedItems
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGCGiftedItems} CMsgGCGiftedItems
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCGiftedItems.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGCGiftedItems message.
         * @function verify
         * @memberof CMsgGCGiftedItems
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGCGiftedItems.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                if (!$util.isInteger(message.accountid))
                    return "accountid: integer expected";
            if (message.giftdefindex != null && message.hasOwnProperty("giftdefindex"))
                if (!$util.isInteger(message.giftdefindex))
                    return "giftdefindex: integer expected";
            if (message.max_gifts_possible != null && message.hasOwnProperty("max_gifts_possible"))
                if (!$util.isInteger(message.max_gifts_possible))
                    return "max_gifts_possible: integer expected";
            if (message.num_eligible_recipients != null && message.hasOwnProperty("num_eligible_recipients"))
                if (!$util.isInteger(message.num_eligible_recipients))
                    return "num_eligible_recipients: integer expected";
            if (message.recipients_accountids != null && message.hasOwnProperty("recipients_accountids")) {
                if (!Array.isArray(message.recipients_accountids))
                    return "recipients_accountids: array expected";
                for (var i = 0; i < message.recipients_accountids.length; ++i)
                    if (!$util.isInteger(message.recipients_accountids[i]))
                        return "recipients_accountids: integer[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CMsgGCGiftedItems message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGCGiftedItems
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGCGiftedItems} CMsgGCGiftedItems
         */
        CMsgGCGiftedItems.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGCGiftedItems)
                return object;
            var message = new $root.CMsgGCGiftedItems();
            if (object.accountid != null)
                message.accountid = object.accountid >>> 0;
            if (object.giftdefindex != null)
                message.giftdefindex = object.giftdefindex >>> 0;
            if (object.max_gifts_possible != null)
                message.max_gifts_possible = object.max_gifts_possible >>> 0;
            if (object.num_eligible_recipients != null)
                message.num_eligible_recipients = object.num_eligible_recipients >>> 0;
            if (object.recipients_accountids) {
                if (!Array.isArray(object.recipients_accountids))
                    throw TypeError(".CMsgGCGiftedItems.recipients_accountids: array expected");
                message.recipients_accountids = [];
                for (var i = 0; i < object.recipients_accountids.length; ++i)
                    message.recipients_accountids[i] = object.recipients_accountids[i] >>> 0;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGCGiftedItems message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGCGiftedItems
         * @static
         * @param {CMsgGCGiftedItems} message CMsgGCGiftedItems
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGCGiftedItems.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.recipients_accountids = [];
            if (options.defaults) {
                object.accountid = 0;
                object.giftdefindex = 0;
                object.max_gifts_possible = 0;
                object.num_eligible_recipients = 0;
            }
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                object.accountid = message.accountid;
            if (message.giftdefindex != null && message.hasOwnProperty("giftdefindex"))
                object.giftdefindex = message.giftdefindex;
            if (message.max_gifts_possible != null && message.hasOwnProperty("max_gifts_possible"))
                object.max_gifts_possible = message.max_gifts_possible;
            if (message.num_eligible_recipients != null && message.hasOwnProperty("num_eligible_recipients"))
                object.num_eligible_recipients = message.num_eligible_recipients;
            if (message.recipients_accountids && message.recipients_accountids.length) {
                object.recipients_accountids = [];
                for (var j = 0; j < message.recipients_accountids.length; ++j)
                    object.recipients_accountids[j] = message.recipients_accountids[j];
            }
            return object;
        };
    
        /**
         * Converts this CMsgGCGiftedItems to JSON.
         * @function toJSON
         * @memberof CMsgGCGiftedItems
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGCGiftedItems.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgGCGiftedItems
         * @function getTypeUrl
         * @memberof CMsgGCGiftedItems
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgGCGiftedItems.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgGCGiftedItems";
        };
    
        return CMsgGCGiftedItems;
    })();
    
    $root.CMsgGCDev_SchemaReservationRequest = (function() {
    
        /**
         * Properties of a CMsgGCDev_SchemaReservationRequest.
         * @exports ICMsgGCDev_SchemaReservationRequest
         * @interface ICMsgGCDev_SchemaReservationRequest
         * @property {string|null} [schema_typename] CMsgGCDev_SchemaReservationRequest schema_typename
         * @property {string|null} [instance_name] CMsgGCDev_SchemaReservationRequest instance_name
         * @property {number|Long|null} [context] CMsgGCDev_SchemaReservationRequest context
         * @property {number|Long|null} [id] CMsgGCDev_SchemaReservationRequest id
         */
    
        /**
         * Constructs a new CMsgGCDev_SchemaReservationRequest.
         * @exports CMsgGCDev_SchemaReservationRequest
         * @classdesc Represents a CMsgGCDev_SchemaReservationRequest.
         * @implements ICMsgGCDev_SchemaReservationRequest
         * @constructor
         * @param {ICMsgGCDev_SchemaReservationRequest=} [properties] Properties to set
         */
        function CMsgGCDev_SchemaReservationRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGCDev_SchemaReservationRequest schema_typename.
         * @member {string} schema_typename
         * @memberof CMsgGCDev_SchemaReservationRequest
         * @instance
         */
        CMsgGCDev_SchemaReservationRequest.prototype.schema_typename = "";
    
        /**
         * CMsgGCDev_SchemaReservationRequest instance_name.
         * @member {string} instance_name
         * @memberof CMsgGCDev_SchemaReservationRequest
         * @instance
         */
        CMsgGCDev_SchemaReservationRequest.prototype.instance_name = "";
    
        /**
         * CMsgGCDev_SchemaReservationRequest context.
         * @member {number|Long} context
         * @memberof CMsgGCDev_SchemaReservationRequest
         * @instance
         */
        CMsgGCDev_SchemaReservationRequest.prototype.context = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgGCDev_SchemaReservationRequest id.
         * @member {number|Long} id
         * @memberof CMsgGCDev_SchemaReservationRequest
         * @instance
         */
        CMsgGCDev_SchemaReservationRequest.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CMsgGCDev_SchemaReservationRequest instance using the specified properties.
         * @function create
         * @memberof CMsgGCDev_SchemaReservationRequest
         * @static
         * @param {ICMsgGCDev_SchemaReservationRequest=} [properties] Properties to set
         * @returns {CMsgGCDev_SchemaReservationRequest} CMsgGCDev_SchemaReservationRequest instance
         */
        CMsgGCDev_SchemaReservationRequest.create = function create(properties) {
            return new CMsgGCDev_SchemaReservationRequest(properties);
        };
    
        /**
         * Encodes the specified CMsgGCDev_SchemaReservationRequest message. Does not implicitly {@link CMsgGCDev_SchemaReservationRequest.verify|verify} messages.
         * @function encode
         * @memberof CMsgGCDev_SchemaReservationRequest
         * @static
         * @param {ICMsgGCDev_SchemaReservationRequest} message CMsgGCDev_SchemaReservationRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCDev_SchemaReservationRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.schema_typename != null && Object.hasOwnProperty.call(message, "schema_typename"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.schema_typename);
            if (message.instance_name != null && Object.hasOwnProperty.call(message, "instance_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.instance_name);
            if (message.context != null && Object.hasOwnProperty.call(message, "context"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.context);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGCDev_SchemaReservationRequest message, length delimited. Does not implicitly {@link CMsgGCDev_SchemaReservationRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGCDev_SchemaReservationRequest
         * @static
         * @param {ICMsgGCDev_SchemaReservationRequest} message CMsgGCDev_SchemaReservationRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCDev_SchemaReservationRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGCDev_SchemaReservationRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGCDev_SchemaReservationRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGCDev_SchemaReservationRequest} CMsgGCDev_SchemaReservationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCDev_SchemaReservationRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGCDev_SchemaReservationRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.schema_typename = reader.string();
                        break;
                    }
                case 2: {
                        message.instance_name = reader.string();
                        break;
                    }
                case 3: {
                        message.context = reader.uint64();
                        break;
                    }
                case 4: {
                        message.id = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGCDev_SchemaReservationRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGCDev_SchemaReservationRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGCDev_SchemaReservationRequest} CMsgGCDev_SchemaReservationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCDev_SchemaReservationRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGCDev_SchemaReservationRequest message.
         * @function verify
         * @memberof CMsgGCDev_SchemaReservationRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGCDev_SchemaReservationRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.schema_typename != null && message.hasOwnProperty("schema_typename"))
                if (!$util.isString(message.schema_typename))
                    return "schema_typename: string expected";
            if (message.instance_name != null && message.hasOwnProperty("instance_name"))
                if (!$util.isString(message.instance_name))
                    return "instance_name: string expected";
            if (message.context != null && message.hasOwnProperty("context"))
                if (!$util.isInteger(message.context) && !(message.context && $util.isInteger(message.context.low) && $util.isInteger(message.context.high)))
                    return "context: integer|Long expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CMsgGCDev_SchemaReservationRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGCDev_SchemaReservationRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGCDev_SchemaReservationRequest} CMsgGCDev_SchemaReservationRequest
         */
        CMsgGCDev_SchemaReservationRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGCDev_SchemaReservationRequest)
                return object;
            var message = new $root.CMsgGCDev_SchemaReservationRequest();
            if (object.schema_typename != null)
                message.schema_typename = String(object.schema_typename);
            if (object.instance_name != null)
                message.instance_name = String(object.instance_name);
            if (object.context != null)
                if ($util.Long)
                    (message.context = $util.Long.fromValue(object.context)).unsigned = true;
                else if (typeof object.context === "string")
                    message.context = parseInt(object.context, 10);
                else if (typeof object.context === "number")
                    message.context = object.context;
                else if (typeof object.context === "object")
                    message.context = new $util.LongBits(object.context.low >>> 0, object.context.high >>> 0).toNumber(true);
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGCDev_SchemaReservationRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGCDev_SchemaReservationRequest
         * @static
         * @param {CMsgGCDev_SchemaReservationRequest} message CMsgGCDev_SchemaReservationRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGCDev_SchemaReservationRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.schema_typename = "";
                object.instance_name = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.context = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.context = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
            }
            if (message.schema_typename != null && message.hasOwnProperty("schema_typename"))
                object.schema_typename = message.schema_typename;
            if (message.instance_name != null && message.hasOwnProperty("instance_name"))
                object.instance_name = message.instance_name;
            if (message.context != null && message.hasOwnProperty("context"))
                if (typeof message.context === "number")
                    object.context = options.longs === String ? String(message.context) : message.context;
                else
                    object.context = options.longs === String ? $util.Long.prototype.toString.call(message.context) : options.longs === Number ? new $util.LongBits(message.context.low >>> 0, message.context.high >>> 0).toNumber(true) : message.context;
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
            return object;
        };
    
        /**
         * Converts this CMsgGCDev_SchemaReservationRequest to JSON.
         * @function toJSON
         * @memberof CMsgGCDev_SchemaReservationRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGCDev_SchemaReservationRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgGCDev_SchemaReservationRequest
         * @function getTypeUrl
         * @memberof CMsgGCDev_SchemaReservationRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgGCDev_SchemaReservationRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgGCDev_SchemaReservationRequest";
        };
    
        return CMsgGCDev_SchemaReservationRequest;
    })();
    
    $root.CMsgCasketItem = (function() {
    
        /**
         * Properties of a CMsgCasketItem.
         * @exports ICMsgCasketItem
         * @interface ICMsgCasketItem
         * @property {number|Long|null} [casket_item_id] CMsgCasketItem casket_item_id
         * @property {number|Long|null} [item_item_id] CMsgCasketItem item_item_id
         */
    
        /**
         * Constructs a new CMsgCasketItem.
         * @exports CMsgCasketItem
         * @classdesc Represents a CMsgCasketItem.
         * @implements ICMsgCasketItem
         * @constructor
         * @param {ICMsgCasketItem=} [properties] Properties to set
         */
        function CMsgCasketItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgCasketItem casket_item_id.
         * @member {number|Long} casket_item_id
         * @memberof CMsgCasketItem
         * @instance
         */
        CMsgCasketItem.prototype.casket_item_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgCasketItem item_item_id.
         * @member {number|Long} item_item_id
         * @memberof CMsgCasketItem
         * @instance
         */
        CMsgCasketItem.prototype.item_item_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CMsgCasketItem instance using the specified properties.
         * @function create
         * @memberof CMsgCasketItem
         * @static
         * @param {ICMsgCasketItem=} [properties] Properties to set
         * @returns {CMsgCasketItem} CMsgCasketItem instance
         */
        CMsgCasketItem.create = function create(properties) {
            return new CMsgCasketItem(properties);
        };
    
        /**
         * Encodes the specified CMsgCasketItem message. Does not implicitly {@link CMsgCasketItem.verify|verify} messages.
         * @function encode
         * @memberof CMsgCasketItem
         * @static
         * @param {ICMsgCasketItem} message CMsgCasketItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgCasketItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.casket_item_id != null && Object.hasOwnProperty.call(message, "casket_item_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.casket_item_id);
            if (message.item_item_id != null && Object.hasOwnProperty.call(message, "item_item_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.item_item_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgCasketItem message, length delimited. Does not implicitly {@link CMsgCasketItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgCasketItem
         * @static
         * @param {ICMsgCasketItem} message CMsgCasketItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgCasketItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgCasketItem message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgCasketItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgCasketItem} CMsgCasketItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgCasketItem.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgCasketItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.casket_item_id = reader.uint64();
                        break;
                    }
                case 2: {
                        message.item_item_id = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgCasketItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgCasketItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgCasketItem} CMsgCasketItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgCasketItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgCasketItem message.
         * @function verify
         * @memberof CMsgCasketItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgCasketItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.casket_item_id != null && message.hasOwnProperty("casket_item_id"))
                if (!$util.isInteger(message.casket_item_id) && !(message.casket_item_id && $util.isInteger(message.casket_item_id.low) && $util.isInteger(message.casket_item_id.high)))
                    return "casket_item_id: integer|Long expected";
            if (message.item_item_id != null && message.hasOwnProperty("item_item_id"))
                if (!$util.isInteger(message.item_item_id) && !(message.item_item_id && $util.isInteger(message.item_item_id.low) && $util.isInteger(message.item_item_id.high)))
                    return "item_item_id: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CMsgCasketItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgCasketItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgCasketItem} CMsgCasketItem
         */
        CMsgCasketItem.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgCasketItem)
                return object;
            var message = new $root.CMsgCasketItem();
            if (object.casket_item_id != null)
                if ($util.Long)
                    (message.casket_item_id = $util.Long.fromValue(object.casket_item_id)).unsigned = true;
                else if (typeof object.casket_item_id === "string")
                    message.casket_item_id = parseInt(object.casket_item_id, 10);
                else if (typeof object.casket_item_id === "number")
                    message.casket_item_id = object.casket_item_id;
                else if (typeof object.casket_item_id === "object")
                    message.casket_item_id = new $util.LongBits(object.casket_item_id.low >>> 0, object.casket_item_id.high >>> 0).toNumber(true);
            if (object.item_item_id != null)
                if ($util.Long)
                    (message.item_item_id = $util.Long.fromValue(object.item_item_id)).unsigned = true;
                else if (typeof object.item_item_id === "string")
                    message.item_item_id = parseInt(object.item_item_id, 10);
                else if (typeof object.item_item_id === "number")
                    message.item_item_id = object.item_item_id;
                else if (typeof object.item_item_id === "object")
                    message.item_item_id = new $util.LongBits(object.item_item_id.low >>> 0, object.item_item_id.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgCasketItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgCasketItem
         * @static
         * @param {CMsgCasketItem} message CMsgCasketItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgCasketItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.casket_item_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.casket_item_id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.item_item_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.item_item_id = options.longs === String ? "0" : 0;
            }
            if (message.casket_item_id != null && message.hasOwnProperty("casket_item_id"))
                if (typeof message.casket_item_id === "number")
                    object.casket_item_id = options.longs === String ? String(message.casket_item_id) : message.casket_item_id;
                else
                    object.casket_item_id = options.longs === String ? $util.Long.prototype.toString.call(message.casket_item_id) : options.longs === Number ? new $util.LongBits(message.casket_item_id.low >>> 0, message.casket_item_id.high >>> 0).toNumber(true) : message.casket_item_id;
            if (message.item_item_id != null && message.hasOwnProperty("item_item_id"))
                if (typeof message.item_item_id === "number")
                    object.item_item_id = options.longs === String ? String(message.item_item_id) : message.item_item_id;
                else
                    object.item_item_id = options.longs === String ? $util.Long.prototype.toString.call(message.item_item_id) : options.longs === Number ? new $util.LongBits(message.item_item_id.low >>> 0, message.item_item_id.high >>> 0).toNumber(true) : message.item_item_id;
            return object;
        };
    
        /**
         * Converts this CMsgCasketItem to JSON.
         * @function toJSON
         * @memberof CMsgCasketItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgCasketItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgCasketItem
         * @function getTypeUrl
         * @memberof CMsgCasketItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgCasketItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgCasketItem";
        };
    
        return CMsgCasketItem;
    })();
    
    $root.CMsgGCUserTrackTimePlayedConsecutively = (function() {
    
        /**
         * Properties of a CMsgGCUserTrackTimePlayedConsecutively.
         * @exports ICMsgGCUserTrackTimePlayedConsecutively
         * @interface ICMsgGCUserTrackTimePlayedConsecutively
         * @property {number|null} [state] CMsgGCUserTrackTimePlayedConsecutively state
         */
    
        /**
         * Constructs a new CMsgGCUserTrackTimePlayedConsecutively.
         * @exports CMsgGCUserTrackTimePlayedConsecutively
         * @classdesc Represents a CMsgGCUserTrackTimePlayedConsecutively.
         * @implements ICMsgGCUserTrackTimePlayedConsecutively
         * @constructor
         * @param {ICMsgGCUserTrackTimePlayedConsecutively=} [properties] Properties to set
         */
        function CMsgGCUserTrackTimePlayedConsecutively(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGCUserTrackTimePlayedConsecutively state.
         * @member {number} state
         * @memberof CMsgGCUserTrackTimePlayedConsecutively
         * @instance
         */
        CMsgGCUserTrackTimePlayedConsecutively.prototype.state = 0;
    
        /**
         * Creates a new CMsgGCUserTrackTimePlayedConsecutively instance using the specified properties.
         * @function create
         * @memberof CMsgGCUserTrackTimePlayedConsecutively
         * @static
         * @param {ICMsgGCUserTrackTimePlayedConsecutively=} [properties] Properties to set
         * @returns {CMsgGCUserTrackTimePlayedConsecutively} CMsgGCUserTrackTimePlayedConsecutively instance
         */
        CMsgGCUserTrackTimePlayedConsecutively.create = function create(properties) {
            return new CMsgGCUserTrackTimePlayedConsecutively(properties);
        };
    
        /**
         * Encodes the specified CMsgGCUserTrackTimePlayedConsecutively message. Does not implicitly {@link CMsgGCUserTrackTimePlayedConsecutively.verify|verify} messages.
         * @function encode
         * @memberof CMsgGCUserTrackTimePlayedConsecutively
         * @static
         * @param {ICMsgGCUserTrackTimePlayedConsecutively} message CMsgGCUserTrackTimePlayedConsecutively message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCUserTrackTimePlayedConsecutively.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.state);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGCUserTrackTimePlayedConsecutively message, length delimited. Does not implicitly {@link CMsgGCUserTrackTimePlayedConsecutively.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGCUserTrackTimePlayedConsecutively
         * @static
         * @param {ICMsgGCUserTrackTimePlayedConsecutively} message CMsgGCUserTrackTimePlayedConsecutively message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCUserTrackTimePlayedConsecutively.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGCUserTrackTimePlayedConsecutively message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGCUserTrackTimePlayedConsecutively
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGCUserTrackTimePlayedConsecutively} CMsgGCUserTrackTimePlayedConsecutively
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCUserTrackTimePlayedConsecutively.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGCUserTrackTimePlayedConsecutively();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.state = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGCUserTrackTimePlayedConsecutively message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGCUserTrackTimePlayedConsecutively
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGCUserTrackTimePlayedConsecutively} CMsgGCUserTrackTimePlayedConsecutively
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCUserTrackTimePlayedConsecutively.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGCUserTrackTimePlayedConsecutively message.
         * @function verify
         * @memberof CMsgGCUserTrackTimePlayedConsecutively
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGCUserTrackTimePlayedConsecutively.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgGCUserTrackTimePlayedConsecutively message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGCUserTrackTimePlayedConsecutively
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGCUserTrackTimePlayedConsecutively} CMsgGCUserTrackTimePlayedConsecutively
         */
        CMsgGCUserTrackTimePlayedConsecutively.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGCUserTrackTimePlayedConsecutively)
                return object;
            var message = new $root.CMsgGCUserTrackTimePlayedConsecutively();
            if (object.state != null)
                message.state = object.state >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGCUserTrackTimePlayedConsecutively message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGCUserTrackTimePlayedConsecutively
         * @static
         * @param {CMsgGCUserTrackTimePlayedConsecutively} message CMsgGCUserTrackTimePlayedConsecutively
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGCUserTrackTimePlayedConsecutively.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.state = 0;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            return object;
        };
    
        /**
         * Converts this CMsgGCUserTrackTimePlayedConsecutively to JSON.
         * @function toJSON
         * @memberof CMsgGCUserTrackTimePlayedConsecutively
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGCUserTrackTimePlayedConsecutively.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgGCUserTrackTimePlayedConsecutively
         * @function getTypeUrl
         * @memberof CMsgGCUserTrackTimePlayedConsecutively
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgGCUserTrackTimePlayedConsecutively.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgGCUserTrackTimePlayedConsecutively";
        };
    
        return CMsgGCUserTrackTimePlayedConsecutively;
    })();
    
    $root.CMsgGCItemCustomizationNotification = (function() {
    
        /**
         * Properties of a CMsgGCItemCustomizationNotification.
         * @exports ICMsgGCItemCustomizationNotification
         * @interface ICMsgGCItemCustomizationNotification
         * @property {Array.<number|Long>|null} [item_id] CMsgGCItemCustomizationNotification item_id
         * @property {number|null} [request] CMsgGCItemCustomizationNotification request
         * @property {Array.<number|Long>|null} [extra_data] CMsgGCItemCustomizationNotification extra_data
         */
    
        /**
         * Constructs a new CMsgGCItemCustomizationNotification.
         * @exports CMsgGCItemCustomizationNotification
         * @classdesc Represents a CMsgGCItemCustomizationNotification.
         * @implements ICMsgGCItemCustomizationNotification
         * @constructor
         * @param {ICMsgGCItemCustomizationNotification=} [properties] Properties to set
         */
        function CMsgGCItemCustomizationNotification(properties) {
            this.item_id = [];
            this.extra_data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGCItemCustomizationNotification item_id.
         * @member {Array.<number|Long>} item_id
         * @memberof CMsgGCItemCustomizationNotification
         * @instance
         */
        CMsgGCItemCustomizationNotification.prototype.item_id = $util.emptyArray;
    
        /**
         * CMsgGCItemCustomizationNotification request.
         * @member {number} request
         * @memberof CMsgGCItemCustomizationNotification
         * @instance
         */
        CMsgGCItemCustomizationNotification.prototype.request = 0;
    
        /**
         * CMsgGCItemCustomizationNotification extra_data.
         * @member {Array.<number|Long>} extra_data
         * @memberof CMsgGCItemCustomizationNotification
         * @instance
         */
        CMsgGCItemCustomizationNotification.prototype.extra_data = $util.emptyArray;
    
        /**
         * Creates a new CMsgGCItemCustomizationNotification instance using the specified properties.
         * @function create
         * @memberof CMsgGCItemCustomizationNotification
         * @static
         * @param {ICMsgGCItemCustomizationNotification=} [properties] Properties to set
         * @returns {CMsgGCItemCustomizationNotification} CMsgGCItemCustomizationNotification instance
         */
        CMsgGCItemCustomizationNotification.create = function create(properties) {
            return new CMsgGCItemCustomizationNotification(properties);
        };
    
        /**
         * Encodes the specified CMsgGCItemCustomizationNotification message. Does not implicitly {@link CMsgGCItemCustomizationNotification.verify|verify} messages.
         * @function encode
         * @memberof CMsgGCItemCustomizationNotification
         * @static
         * @param {ICMsgGCItemCustomizationNotification} message CMsgGCItemCustomizationNotification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCItemCustomizationNotification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.item_id != null && message.item_id.length)
                for (var i = 0; i < message.item_id.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.item_id[i]);
            if (message.request != null && Object.hasOwnProperty.call(message, "request"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.request);
            if (message.extra_data != null && message.extra_data.length)
                for (var i = 0; i < message.extra_data.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.extra_data[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGCItemCustomizationNotification message, length delimited. Does not implicitly {@link CMsgGCItemCustomizationNotification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGCItemCustomizationNotification
         * @static
         * @param {ICMsgGCItemCustomizationNotification} message CMsgGCItemCustomizationNotification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCItemCustomizationNotification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGCItemCustomizationNotification message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGCItemCustomizationNotification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGCItemCustomizationNotification} CMsgGCItemCustomizationNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCItemCustomizationNotification.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGCItemCustomizationNotification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.item_id && message.item_id.length))
                            message.item_id = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.item_id.push(reader.uint64());
                        } else
                            message.item_id.push(reader.uint64());
                        break;
                    }
                case 2: {
                        message.request = reader.uint32();
                        break;
                    }
                case 3: {
                        if (!(message.extra_data && message.extra_data.length))
                            message.extra_data = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.extra_data.push(reader.uint64());
                        } else
                            message.extra_data.push(reader.uint64());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGCItemCustomizationNotification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGCItemCustomizationNotification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGCItemCustomizationNotification} CMsgGCItemCustomizationNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCItemCustomizationNotification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGCItemCustomizationNotification message.
         * @function verify
         * @memberof CMsgGCItemCustomizationNotification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGCItemCustomizationNotification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.item_id != null && message.hasOwnProperty("item_id")) {
                if (!Array.isArray(message.item_id))
                    return "item_id: array expected";
                for (var i = 0; i < message.item_id.length; ++i)
                    if (!$util.isInteger(message.item_id[i]) && !(message.item_id[i] && $util.isInteger(message.item_id[i].low) && $util.isInteger(message.item_id[i].high)))
                        return "item_id: integer|Long[] expected";
            }
            if (message.request != null && message.hasOwnProperty("request"))
                if (!$util.isInteger(message.request))
                    return "request: integer expected";
            if (message.extra_data != null && message.hasOwnProperty("extra_data")) {
                if (!Array.isArray(message.extra_data))
                    return "extra_data: array expected";
                for (var i = 0; i < message.extra_data.length; ++i)
                    if (!$util.isInteger(message.extra_data[i]) && !(message.extra_data[i] && $util.isInteger(message.extra_data[i].low) && $util.isInteger(message.extra_data[i].high)))
                        return "extra_data: integer|Long[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CMsgGCItemCustomizationNotification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGCItemCustomizationNotification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGCItemCustomizationNotification} CMsgGCItemCustomizationNotification
         */
        CMsgGCItemCustomizationNotification.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGCItemCustomizationNotification)
                return object;
            var message = new $root.CMsgGCItemCustomizationNotification();
            if (object.item_id) {
                if (!Array.isArray(object.item_id))
                    throw TypeError(".CMsgGCItemCustomizationNotification.item_id: array expected");
                message.item_id = [];
                for (var i = 0; i < object.item_id.length; ++i)
                    if ($util.Long)
                        (message.item_id[i] = $util.Long.fromValue(object.item_id[i])).unsigned = true;
                    else if (typeof object.item_id[i] === "string")
                        message.item_id[i] = parseInt(object.item_id[i], 10);
                    else if (typeof object.item_id[i] === "number")
                        message.item_id[i] = object.item_id[i];
                    else if (typeof object.item_id[i] === "object")
                        message.item_id[i] = new $util.LongBits(object.item_id[i].low >>> 0, object.item_id[i].high >>> 0).toNumber(true);
            }
            if (object.request != null)
                message.request = object.request >>> 0;
            if (object.extra_data) {
                if (!Array.isArray(object.extra_data))
                    throw TypeError(".CMsgGCItemCustomizationNotification.extra_data: array expected");
                message.extra_data = [];
                for (var i = 0; i < object.extra_data.length; ++i)
                    if ($util.Long)
                        (message.extra_data[i] = $util.Long.fromValue(object.extra_data[i])).unsigned = true;
                    else if (typeof object.extra_data[i] === "string")
                        message.extra_data[i] = parseInt(object.extra_data[i], 10);
                    else if (typeof object.extra_data[i] === "number")
                        message.extra_data[i] = object.extra_data[i];
                    else if (typeof object.extra_data[i] === "object")
                        message.extra_data[i] = new $util.LongBits(object.extra_data[i].low >>> 0, object.extra_data[i].high >>> 0).toNumber(true);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGCItemCustomizationNotification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGCItemCustomizationNotification
         * @static
         * @param {CMsgGCItemCustomizationNotification} message CMsgGCItemCustomizationNotification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGCItemCustomizationNotification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.item_id = [];
                object.extra_data = [];
            }
            if (options.defaults)
                object.request = 0;
            if (message.item_id && message.item_id.length) {
                object.item_id = [];
                for (var j = 0; j < message.item_id.length; ++j)
                    if (typeof message.item_id[j] === "number")
                        object.item_id[j] = options.longs === String ? String(message.item_id[j]) : message.item_id[j];
                    else
                        object.item_id[j] = options.longs === String ? $util.Long.prototype.toString.call(message.item_id[j]) : options.longs === Number ? new $util.LongBits(message.item_id[j].low >>> 0, message.item_id[j].high >>> 0).toNumber(true) : message.item_id[j];
            }
            if (message.request != null && message.hasOwnProperty("request"))
                object.request = message.request;
            if (message.extra_data && message.extra_data.length) {
                object.extra_data = [];
                for (var j = 0; j < message.extra_data.length; ++j)
                    if (typeof message.extra_data[j] === "number")
                        object.extra_data[j] = options.longs === String ? String(message.extra_data[j]) : message.extra_data[j];
                    else
                        object.extra_data[j] = options.longs === String ? $util.Long.prototype.toString.call(message.extra_data[j]) : options.longs === Number ? new $util.LongBits(message.extra_data[j].low >>> 0, message.extra_data[j].high >>> 0).toNumber(true) : message.extra_data[j];
            }
            return object;
        };
    
        /**
         * Converts this CMsgGCItemCustomizationNotification to JSON.
         * @function toJSON
         * @memberof CMsgGCItemCustomizationNotification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGCItemCustomizationNotification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgGCItemCustomizationNotification
         * @function getTypeUrl
         * @memberof CMsgGCItemCustomizationNotification
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgGCItemCustomizationNotification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgGCItemCustomizationNotification";
        };
    
        return CMsgGCItemCustomizationNotification;
    })();
    
    /**
     * GCProtoBufMsgSrc enum.
     * @exports GCProtoBufMsgSrc
     * @enum {number}
     * @property {number} GCProtoBufMsgSrc_Unspecified=0 GCProtoBufMsgSrc_Unspecified value
     * @property {number} GCProtoBufMsgSrc_FromSystem=1 GCProtoBufMsgSrc_FromSystem value
     * @property {number} GCProtoBufMsgSrc_FromSteamID=2 GCProtoBufMsgSrc_FromSteamID value
     * @property {number} GCProtoBufMsgSrc_FromGC=3 GCProtoBufMsgSrc_FromGC value
     * @property {number} GCProtoBufMsgSrc_ReplySystem=4 GCProtoBufMsgSrc_ReplySystem value
     */
    $root.GCProtoBufMsgSrc = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GCProtoBufMsgSrc_Unspecified"] = 0;
        values[valuesById[1] = "GCProtoBufMsgSrc_FromSystem"] = 1;
        values[valuesById[2] = "GCProtoBufMsgSrc_FromSteamID"] = 2;
        values[valuesById[3] = "GCProtoBufMsgSrc_FromGC"] = 3;
        values[valuesById[4] = "GCProtoBufMsgSrc_ReplySystem"] = 4;
        return values;
    })();
    
    $root.CMsgProtoBufHeader = (function() {
    
        /**
         * Properties of a CMsgProtoBufHeader.
         * @exports ICMsgProtoBufHeader
         * @interface ICMsgProtoBufHeader
         * @property {number|Long|null} [client_steam_id] CMsgProtoBufHeader client_steam_id
         * @property {number|null} [client_session_id] CMsgProtoBufHeader client_session_id
         * @property {number|null} [source_app_id] CMsgProtoBufHeader source_app_id
         * @property {number|Long|null} [job_id_source] CMsgProtoBufHeader job_id_source
         * @property {number|Long|null} [job_id_target] CMsgProtoBufHeader job_id_target
         * @property {string|null} [target_job_name] CMsgProtoBufHeader target_job_name
         * @property {number|null} [eresult] CMsgProtoBufHeader eresult
         * @property {string|null} [error_message] CMsgProtoBufHeader error_message
         * @property {number|null} [ip] CMsgProtoBufHeader ip
         * @property {GCProtoBufMsgSrc|null} [gc_msg_src] CMsgProtoBufHeader gc_msg_src
         * @property {number|null} [gc_dir_index_source] CMsgProtoBufHeader gc_dir_index_source
         */
    
        /**
         * Constructs a new CMsgProtoBufHeader.
         * @exports CMsgProtoBufHeader
         * @classdesc Represents a CMsgProtoBufHeader.
         * @implements ICMsgProtoBufHeader
         * @constructor
         * @param {ICMsgProtoBufHeader=} [properties] Properties to set
         */
        function CMsgProtoBufHeader(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgProtoBufHeader client_steam_id.
         * @member {number|Long} client_steam_id
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.client_steam_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgProtoBufHeader client_session_id.
         * @member {number} client_session_id
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.client_session_id = 0;
    
        /**
         * CMsgProtoBufHeader source_app_id.
         * @member {number} source_app_id
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.source_app_id = 0;
    
        /**
         * CMsgProtoBufHeader job_id_source.
         * @member {number|Long} job_id_source
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.job_id_source = $util.Long ? $util.Long.fromBits(-1,2147483647,false) : 9223372036854776000;
    
        /**
         * CMsgProtoBufHeader job_id_target.
         * @member {number|Long} job_id_target
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.job_id_target = $util.Long ? $util.Long.fromBits(-1,2147483647,false) : 9223372036854776000;
    
        /**
         * CMsgProtoBufHeader target_job_name.
         * @member {string} target_job_name
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.target_job_name = "";
    
        /**
         * CMsgProtoBufHeader eresult.
         * @member {number} eresult
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.eresult = 2;
    
        /**
         * CMsgProtoBufHeader error_message.
         * @member {string} error_message
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.error_message = "";
    
        /**
         * CMsgProtoBufHeader ip.
         * @member {number} ip
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.ip = 0;
    
        /**
         * CMsgProtoBufHeader gc_msg_src.
         * @member {GCProtoBufMsgSrc} gc_msg_src
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.gc_msg_src = 0;
    
        /**
         * CMsgProtoBufHeader gc_dir_index_source.
         * @member {number} gc_dir_index_source
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.gc_dir_index_source = 0;
    
        /**
         * Creates a new CMsgProtoBufHeader instance using the specified properties.
         * @function create
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {ICMsgProtoBufHeader=} [properties] Properties to set
         * @returns {CMsgProtoBufHeader} CMsgProtoBufHeader instance
         */
        CMsgProtoBufHeader.create = function create(properties) {
            return new CMsgProtoBufHeader(properties);
        };
    
        /**
         * Encodes the specified CMsgProtoBufHeader message. Does not implicitly {@link CMsgProtoBufHeader.verify|verify} messages.
         * @function encode
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {ICMsgProtoBufHeader} message CMsgProtoBufHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgProtoBufHeader.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.client_steam_id != null && Object.hasOwnProperty.call(message, "client_steam_id"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.client_steam_id);
            if (message.client_session_id != null && Object.hasOwnProperty.call(message, "client_session_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.client_session_id);
            if (message.source_app_id != null && Object.hasOwnProperty.call(message, "source_app_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.source_app_id);
            if (message.job_id_source != null && Object.hasOwnProperty.call(message, "job_id_source"))
                writer.uint32(/* id 10, wireType 1 =*/81).fixed64(message.job_id_source);
            if (message.job_id_target != null && Object.hasOwnProperty.call(message, "job_id_target"))
                writer.uint32(/* id 11, wireType 1 =*/89).fixed64(message.job_id_target);
            if (message.target_job_name != null && Object.hasOwnProperty.call(message, "target_job_name"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.target_job_name);
            if (message.eresult != null && Object.hasOwnProperty.call(message, "eresult"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.eresult);
            if (message.error_message != null && Object.hasOwnProperty.call(message, "error_message"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.error_message);
            if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
                writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ip);
            if (message.gc_msg_src != null && Object.hasOwnProperty.call(message, "gc_msg_src"))
                writer.uint32(/* id 200, wireType 0 =*/1600).int32(message.gc_msg_src);
            if (message.gc_dir_index_source != null && Object.hasOwnProperty.call(message, "gc_dir_index_source"))
                writer.uint32(/* id 201, wireType 0 =*/1608).uint32(message.gc_dir_index_source);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgProtoBufHeader message, length delimited. Does not implicitly {@link CMsgProtoBufHeader.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {ICMsgProtoBufHeader} message CMsgProtoBufHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgProtoBufHeader.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgProtoBufHeader message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgProtoBufHeader} CMsgProtoBufHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgProtoBufHeader.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgProtoBufHeader();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.client_steam_id = reader.fixed64();
                        break;
                    }
                case 2: {
                        message.client_session_id = reader.int32();
                        break;
                    }
                case 3: {
                        message.source_app_id = reader.uint32();
                        break;
                    }
                case 10: {
                        message.job_id_source = reader.fixed64();
                        break;
                    }
                case 11: {
                        message.job_id_target = reader.fixed64();
                        break;
                    }
                case 12: {
                        message.target_job_name = reader.string();
                        break;
                    }
                case 13: {
                        message.eresult = reader.int32();
                        break;
                    }
                case 14: {
                        message.error_message = reader.string();
                        break;
                    }
                case 15: {
                        message.ip = reader.uint32();
                        break;
                    }
                case 200: {
                        message.gc_msg_src = reader.int32();
                        break;
                    }
                case 201: {
                        message.gc_dir_index_source = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgProtoBufHeader message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgProtoBufHeader} CMsgProtoBufHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgProtoBufHeader.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgProtoBufHeader message.
         * @function verify
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgProtoBufHeader.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.client_steam_id != null && message.hasOwnProperty("client_steam_id"))
                if (!$util.isInteger(message.client_steam_id) && !(message.client_steam_id && $util.isInteger(message.client_steam_id.low) && $util.isInteger(message.client_steam_id.high)))
                    return "client_steam_id: integer|Long expected";
            if (message.client_session_id != null && message.hasOwnProperty("client_session_id"))
                if (!$util.isInteger(message.client_session_id))
                    return "client_session_id: integer expected";
            if (message.source_app_id != null && message.hasOwnProperty("source_app_id"))
                if (!$util.isInteger(message.source_app_id))
                    return "source_app_id: integer expected";
            if (message.job_id_source != null && message.hasOwnProperty("job_id_source"))
                if (!$util.isInteger(message.job_id_source) && !(message.job_id_source && $util.isInteger(message.job_id_source.low) && $util.isInteger(message.job_id_source.high)))
                    return "job_id_source: integer|Long expected";
            if (message.job_id_target != null && message.hasOwnProperty("job_id_target"))
                if (!$util.isInteger(message.job_id_target) && !(message.job_id_target && $util.isInteger(message.job_id_target.low) && $util.isInteger(message.job_id_target.high)))
                    return "job_id_target: integer|Long expected";
            if (message.target_job_name != null && message.hasOwnProperty("target_job_name"))
                if (!$util.isString(message.target_job_name))
                    return "target_job_name: string expected";
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                if (!$util.isInteger(message.eresult))
                    return "eresult: integer expected";
            if (message.error_message != null && message.hasOwnProperty("error_message"))
                if (!$util.isString(message.error_message))
                    return "error_message: string expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isInteger(message.ip))
                    return "ip: integer expected";
            if (message.gc_msg_src != null && message.hasOwnProperty("gc_msg_src"))
                switch (message.gc_msg_src) {
                default:
                    return "gc_msg_src: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.gc_dir_index_source != null && message.hasOwnProperty("gc_dir_index_source"))
                if (!$util.isInteger(message.gc_dir_index_source))
                    return "gc_dir_index_source: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgProtoBufHeader message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgProtoBufHeader} CMsgProtoBufHeader
         */
        CMsgProtoBufHeader.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgProtoBufHeader)
                return object;
            var message = new $root.CMsgProtoBufHeader();
            if (object.client_steam_id != null)
                if ($util.Long)
                    (message.client_steam_id = $util.Long.fromValue(object.client_steam_id)).unsigned = false;
                else if (typeof object.client_steam_id === "string")
                    message.client_steam_id = parseInt(object.client_steam_id, 10);
                else if (typeof object.client_steam_id === "number")
                    message.client_steam_id = object.client_steam_id;
                else if (typeof object.client_steam_id === "object")
                    message.client_steam_id = new $util.LongBits(object.client_steam_id.low >>> 0, object.client_steam_id.high >>> 0).toNumber();
            if (object.client_session_id != null)
                message.client_session_id = object.client_session_id | 0;
            if (object.source_app_id != null)
                message.source_app_id = object.source_app_id >>> 0;
            if (object.job_id_source != null)
                if ($util.Long)
                    (message.job_id_source = $util.Long.fromValue(object.job_id_source)).unsigned = false;
                else if (typeof object.job_id_source === "string")
                    message.job_id_source = parseInt(object.job_id_source, 10);
                else if (typeof object.job_id_source === "number")
                    message.job_id_source = object.job_id_source;
                else if (typeof object.job_id_source === "object")
                    message.job_id_source = new $util.LongBits(object.job_id_source.low >>> 0, object.job_id_source.high >>> 0).toNumber();
            if (object.job_id_target != null)
                if ($util.Long)
                    (message.job_id_target = $util.Long.fromValue(object.job_id_target)).unsigned = false;
                else if (typeof object.job_id_target === "string")
                    message.job_id_target = parseInt(object.job_id_target, 10);
                else if (typeof object.job_id_target === "number")
                    message.job_id_target = object.job_id_target;
                else if (typeof object.job_id_target === "object")
                    message.job_id_target = new $util.LongBits(object.job_id_target.low >>> 0, object.job_id_target.high >>> 0).toNumber();
            if (object.target_job_name != null)
                message.target_job_name = String(object.target_job_name);
            if (object.eresult != null)
                message.eresult = object.eresult | 0;
            if (object.error_message != null)
                message.error_message = String(object.error_message);
            if (object.ip != null)
                message.ip = object.ip >>> 0;
            switch (object.gc_msg_src) {
            default:
                if (typeof object.gc_msg_src === "number") {
                    message.gc_msg_src = object.gc_msg_src;
                    break;
                }
                break;
            case "GCProtoBufMsgSrc_Unspecified":
            case 0:
                message.gc_msg_src = 0;
                break;
            case "GCProtoBufMsgSrc_FromSystem":
            case 1:
                message.gc_msg_src = 1;
                break;
            case "GCProtoBufMsgSrc_FromSteamID":
            case 2:
                message.gc_msg_src = 2;
                break;
            case "GCProtoBufMsgSrc_FromGC":
            case 3:
                message.gc_msg_src = 3;
                break;
            case "GCProtoBufMsgSrc_ReplySystem":
            case 4:
                message.gc_msg_src = 4;
                break;
            }
            if (object.gc_dir_index_source != null)
                message.gc_dir_index_source = object.gc_dir_index_source >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgProtoBufHeader message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {CMsgProtoBufHeader} message CMsgProtoBufHeader
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgProtoBufHeader.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.client_steam_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.client_steam_id = options.longs === String ? "0" : 0;
                object.client_session_id = 0;
                object.source_app_id = 0;
                if ($util.Long) {
                    var long = new $util.Long(-1, 2147483647, false);
                    object.job_id_source = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.job_id_source = options.longs === String ? "9223372036854775807" : 9223372036854776000;
                if ($util.Long) {
                    var long = new $util.Long(-1, 2147483647, false);
                    object.job_id_target = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.job_id_target = options.longs === String ? "9223372036854775807" : 9223372036854776000;
                object.target_job_name = "";
                object.eresult = 2;
                object.error_message = "";
                object.ip = 0;
                object.gc_msg_src = options.enums === String ? "GCProtoBufMsgSrc_Unspecified" : 0;
                object.gc_dir_index_source = 0;
            }
            if (message.client_steam_id != null && message.hasOwnProperty("client_steam_id"))
                if (typeof message.client_steam_id === "number")
                    object.client_steam_id = options.longs === String ? String(message.client_steam_id) : message.client_steam_id;
                else
                    object.client_steam_id = options.longs === String ? $util.Long.prototype.toString.call(message.client_steam_id) : options.longs === Number ? new $util.LongBits(message.client_steam_id.low >>> 0, message.client_steam_id.high >>> 0).toNumber() : message.client_steam_id;
            if (message.client_session_id != null && message.hasOwnProperty("client_session_id"))
                object.client_session_id = message.client_session_id;
            if (message.source_app_id != null && message.hasOwnProperty("source_app_id"))
                object.source_app_id = message.source_app_id;
            if (message.job_id_source != null && message.hasOwnProperty("job_id_source"))
                if (typeof message.job_id_source === "number")
                    object.job_id_source = options.longs === String ? String(message.job_id_source) : message.job_id_source;
                else
                    object.job_id_source = options.longs === String ? $util.Long.prototype.toString.call(message.job_id_source) : options.longs === Number ? new $util.LongBits(message.job_id_source.low >>> 0, message.job_id_source.high >>> 0).toNumber() : message.job_id_source;
            if (message.job_id_target != null && message.hasOwnProperty("job_id_target"))
                if (typeof message.job_id_target === "number")
                    object.job_id_target = options.longs === String ? String(message.job_id_target) : message.job_id_target;
                else
                    object.job_id_target = options.longs === String ? $util.Long.prototype.toString.call(message.job_id_target) : options.longs === Number ? new $util.LongBits(message.job_id_target.low >>> 0, message.job_id_target.high >>> 0).toNumber() : message.job_id_target;
            if (message.target_job_name != null && message.hasOwnProperty("target_job_name"))
                object.target_job_name = message.target_job_name;
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                object.eresult = message.eresult;
            if (message.error_message != null && message.hasOwnProperty("error_message"))
                object.error_message = message.error_message;
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.gc_msg_src != null && message.hasOwnProperty("gc_msg_src"))
                object.gc_msg_src = options.enums === String ? $root.GCProtoBufMsgSrc[message.gc_msg_src] === undefined ? message.gc_msg_src : $root.GCProtoBufMsgSrc[message.gc_msg_src] : message.gc_msg_src;
            if (message.gc_dir_index_source != null && message.hasOwnProperty("gc_dir_index_source"))
                object.gc_dir_index_source = message.gc_dir_index_source;
            return object;
        };
    
        /**
         * Converts this CMsgProtoBufHeader to JSON.
         * @function toJSON
         * @memberof CMsgProtoBufHeader
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgProtoBufHeader.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgProtoBufHeader
         * @function getTypeUrl
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgProtoBufHeader.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgProtoBufHeader";
        };
    
        return CMsgProtoBufHeader;
    })();
    
    $root.CChinaAgreementSessions_StartAgreementSessionInGame_Request = (function() {
    
        /**
         * Properties of a CChinaAgreementSessions_StartAgreementSessionInGame_Request.
         * @exports ICChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @interface ICChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @property {number|null} [appid] CChinaAgreementSessions_StartAgreementSessionInGame_Request appid
         * @property {number|Long|null} [steamid] CChinaAgreementSessions_StartAgreementSessionInGame_Request steamid
         * @property {string|null} [client_ipaddress] CChinaAgreementSessions_StartAgreementSessionInGame_Request client_ipaddress
         */
    
        /**
         * Constructs a new CChinaAgreementSessions_StartAgreementSessionInGame_Request.
         * @exports CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @classdesc Represents a CChinaAgreementSessions_StartAgreementSessionInGame_Request.
         * @implements ICChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @constructor
         * @param {ICChinaAgreementSessions_StartAgreementSessionInGame_Request=} [properties] Properties to set
         */
        function CChinaAgreementSessions_StartAgreementSessionInGame_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CChinaAgreementSessions_StartAgreementSessionInGame_Request appid.
         * @member {number} appid
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @instance
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Request.prototype.appid = 0;
    
        /**
         * CChinaAgreementSessions_StartAgreementSessionInGame_Request steamid.
         * @member {number|Long} steamid
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @instance
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CChinaAgreementSessions_StartAgreementSessionInGame_Request client_ipaddress.
         * @member {string} client_ipaddress
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @instance
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Request.prototype.client_ipaddress = "";
    
        /**
         * Creates a new CChinaAgreementSessions_StartAgreementSessionInGame_Request instance using the specified properties.
         * @function create
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @static
         * @param {ICChinaAgreementSessions_StartAgreementSessionInGame_Request=} [properties] Properties to set
         * @returns {CChinaAgreementSessions_StartAgreementSessionInGame_Request} CChinaAgreementSessions_StartAgreementSessionInGame_Request instance
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Request.create = function create(properties) {
            return new CChinaAgreementSessions_StartAgreementSessionInGame_Request(properties);
        };
    
        /**
         * Encodes the specified CChinaAgreementSessions_StartAgreementSessionInGame_Request message. Does not implicitly {@link CChinaAgreementSessions_StartAgreementSessionInGame_Request.verify|verify} messages.
         * @function encode
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @static
         * @param {ICChinaAgreementSessions_StartAgreementSessionInGame_Request} message CChinaAgreementSessions_StartAgreementSessionInGame_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.steamid);
            if (message.client_ipaddress != null && Object.hasOwnProperty.call(message, "client_ipaddress"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.client_ipaddress);
            return writer;
        };
    
        /**
         * Encodes the specified CChinaAgreementSessions_StartAgreementSessionInGame_Request message, length delimited. Does not implicitly {@link CChinaAgreementSessions_StartAgreementSessionInGame_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @static
         * @param {ICChinaAgreementSessions_StartAgreementSessionInGame_Request} message CChinaAgreementSessions_StartAgreementSessionInGame_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CChinaAgreementSessions_StartAgreementSessionInGame_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CChinaAgreementSessions_StartAgreementSessionInGame_Request} CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Request.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CChinaAgreementSessions_StartAgreementSessionInGame_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.appid = reader.uint32();
                        break;
                    }
                case 2: {
                        message.steamid = reader.fixed64();
                        break;
                    }
                case 3: {
                        message.client_ipaddress = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CChinaAgreementSessions_StartAgreementSessionInGame_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CChinaAgreementSessions_StartAgreementSessionInGame_Request} CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CChinaAgreementSessions_StartAgreementSessionInGame_Request message.
         * @function verify
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.client_ipaddress != null && message.hasOwnProperty("client_ipaddress"))
                if (!$util.isString(message.client_ipaddress))
                    return "client_ipaddress: string expected";
            return null;
        };
    
        /**
         * Creates a CChinaAgreementSessions_StartAgreementSessionInGame_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CChinaAgreementSessions_StartAgreementSessionInGame_Request} CChinaAgreementSessions_StartAgreementSessionInGame_Request
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CChinaAgreementSessions_StartAgreementSessionInGame_Request)
                return object;
            var message = new $root.CChinaAgreementSessions_StartAgreementSessionInGame_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.client_ipaddress != null)
                message.client_ipaddress = String(object.client_ipaddress);
            return message;
        };
    
        /**
         * Creates a plain object from a CChinaAgreementSessions_StartAgreementSessionInGame_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @static
         * @param {CChinaAgreementSessions_StartAgreementSessionInGame_Request} message CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.client_ipaddress = "";
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.client_ipaddress != null && message.hasOwnProperty("client_ipaddress"))
                object.client_ipaddress = message.client_ipaddress;
            return object;
        };
    
        /**
         * Converts this CChinaAgreementSessions_StartAgreementSessionInGame_Request to JSON.
         * @function toJSON
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @function getTypeUrl
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CChinaAgreementSessions_StartAgreementSessionInGame_Request";
        };
    
        return CChinaAgreementSessions_StartAgreementSessionInGame_Request;
    })();
    
    $root.CChinaAgreementSessions_StartAgreementSessionInGame_Response = (function() {
    
        /**
         * Properties of a CChinaAgreementSessions_StartAgreementSessionInGame_Response.
         * @exports ICChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @interface ICChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @property {string|null} [agreement_url] CChinaAgreementSessions_StartAgreementSessionInGame_Response agreement_url
         */
    
        /**
         * Constructs a new CChinaAgreementSessions_StartAgreementSessionInGame_Response.
         * @exports CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @classdesc Represents a CChinaAgreementSessions_StartAgreementSessionInGame_Response.
         * @implements ICChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @constructor
         * @param {ICChinaAgreementSessions_StartAgreementSessionInGame_Response=} [properties] Properties to set
         */
        function CChinaAgreementSessions_StartAgreementSessionInGame_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CChinaAgreementSessions_StartAgreementSessionInGame_Response agreement_url.
         * @member {string} agreement_url
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @instance
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Response.prototype.agreement_url = "";
    
        /**
         * Creates a new CChinaAgreementSessions_StartAgreementSessionInGame_Response instance using the specified properties.
         * @function create
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @static
         * @param {ICChinaAgreementSessions_StartAgreementSessionInGame_Response=} [properties] Properties to set
         * @returns {CChinaAgreementSessions_StartAgreementSessionInGame_Response} CChinaAgreementSessions_StartAgreementSessionInGame_Response instance
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Response.create = function create(properties) {
            return new CChinaAgreementSessions_StartAgreementSessionInGame_Response(properties);
        };
    
        /**
         * Encodes the specified CChinaAgreementSessions_StartAgreementSessionInGame_Response message. Does not implicitly {@link CChinaAgreementSessions_StartAgreementSessionInGame_Response.verify|verify} messages.
         * @function encode
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @static
         * @param {ICChinaAgreementSessions_StartAgreementSessionInGame_Response} message CChinaAgreementSessions_StartAgreementSessionInGame_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.agreement_url != null && Object.hasOwnProperty.call(message, "agreement_url"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.agreement_url);
            return writer;
        };
    
        /**
         * Encodes the specified CChinaAgreementSessions_StartAgreementSessionInGame_Response message, length delimited. Does not implicitly {@link CChinaAgreementSessions_StartAgreementSessionInGame_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @static
         * @param {ICChinaAgreementSessions_StartAgreementSessionInGame_Response} message CChinaAgreementSessions_StartAgreementSessionInGame_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CChinaAgreementSessions_StartAgreementSessionInGame_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CChinaAgreementSessions_StartAgreementSessionInGame_Response} CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Response.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CChinaAgreementSessions_StartAgreementSessionInGame_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.agreement_url = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CChinaAgreementSessions_StartAgreementSessionInGame_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CChinaAgreementSessions_StartAgreementSessionInGame_Response} CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CChinaAgreementSessions_StartAgreementSessionInGame_Response message.
         * @function verify
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.agreement_url != null && message.hasOwnProperty("agreement_url"))
                if (!$util.isString(message.agreement_url))
                    return "agreement_url: string expected";
            return null;
        };
    
        /**
         * Creates a CChinaAgreementSessions_StartAgreementSessionInGame_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CChinaAgreementSessions_StartAgreementSessionInGame_Response} CChinaAgreementSessions_StartAgreementSessionInGame_Response
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CChinaAgreementSessions_StartAgreementSessionInGame_Response)
                return object;
            var message = new $root.CChinaAgreementSessions_StartAgreementSessionInGame_Response();
            if (object.agreement_url != null)
                message.agreement_url = String(object.agreement_url);
            return message;
        };
    
        /**
         * Creates a plain object from a CChinaAgreementSessions_StartAgreementSessionInGame_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @static
         * @param {CChinaAgreementSessions_StartAgreementSessionInGame_Response} message CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.agreement_url = "";
            if (message.agreement_url != null && message.hasOwnProperty("agreement_url"))
                object.agreement_url = message.agreement_url;
            return object;
        };
    
        /**
         * Converts this CChinaAgreementSessions_StartAgreementSessionInGame_Response to JSON.
         * @function toJSON
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @function getTypeUrl
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CChinaAgreementSessions_StartAgreementSessionInGame_Response";
        };
    
        return CChinaAgreementSessions_StartAgreementSessionInGame_Response;
    })();
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.FileDescriptorSet = (function() {
    
                /**
                 * Properties of a FileDescriptorSet.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorSet
                 * @property {Array.<google.protobuf.IFileDescriptorProto>|null} [file] FileDescriptorSet file
                 */
    
                /**
                 * Constructs a new FileDescriptorSet.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorSet.
                 * @implements IFileDescriptorSet
                 * @constructor
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 */
                function FileDescriptorSet(properties) {
                    this.file = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorSet file.
                 * @member {Array.<google.protobuf.IFileDescriptorProto>} file
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 */
                FileDescriptorSet.prototype.file = $util.emptyArray;
    
                /**
                 * Creates a new FileDescriptorSet instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
                 */
                FileDescriptorSet.create = function create(properties) {
                    return new FileDescriptorSet(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.file != null && message.file.length)
                        for (var i = 0; i < message.file.length; ++i)
                            $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorSet message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.file && message.file.length))
                                    message.file = [];
                                message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorSet message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorSet.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.file != null && message.hasOwnProperty("file")) {
                        if (!Array.isArray(message.file))
                            return "file: array expected";
                        for (var i = 0; i < message.file.length; ++i) {
                            var error = $root.google.protobuf.FileDescriptorProto.verify(message.file[i]);
                            if (error)
                                return "file." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 */
                FileDescriptorSet.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileDescriptorSet)
                        return object;
                    var message = new $root.google.protobuf.FileDescriptorSet();
                    if (object.file) {
                        if (!Array.isArray(object.file))
                            throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                        message.file = [];
                        for (var i = 0; i < object.file.length; ++i) {
                            if (typeof object.file[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                            message.file[i] = $root.google.protobuf.FileDescriptorProto.fromObject(object.file[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorSet.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.file = [];
                    if (message.file && message.file.length) {
                        object.file = [];
                        for (var j = 0; j < message.file.length; ++j)
                            object.file[j] = $root.google.protobuf.FileDescriptorProto.toObject(message.file[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorSet to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorSet.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for FileDescriptorSet
                 * @function getTypeUrl
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FileDescriptorSet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.FileDescriptorSet";
                };
    
                return FileDescriptorSet;
            })();
    
            protobuf.FileDescriptorProto = (function() {
    
                /**
                 * Properties of a FileDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorProto
                 * @property {string|null} [name] FileDescriptorProto name
                 * @property {string|null} ["package"] FileDescriptorProto package
                 * @property {Array.<string>|null} [dependency] FileDescriptorProto dependency
                 * @property {Array.<google.protobuf.IDescriptorProto>|null} [message_type] FileDescriptorProto message_type
                 * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enum_type] FileDescriptorProto enum_type
                 * @property {Array.<google.protobuf.IServiceDescriptorProto>|null} [service] FileDescriptorProto service
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] FileDescriptorProto extension
                 * @property {google.protobuf.IFileOptions|null} [options] FileDescriptorProto options
                 * @property {google.protobuf.ISourceCodeInfo|null} [source_code_info] FileDescriptorProto source_code_info
                 */
    
                /**
                 * Constructs a new FileDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorProto.
                 * @implements IFileDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
                 */
                function FileDescriptorProto(properties) {
                    this.dependency = [];
                    this.message_type = [];
                    this.enum_type = [];
                    this.service = [];
                    this.extension = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.name = "";
    
                /**
                 * FileDescriptorProto package.
                 * @member {string} package
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype["package"] = "";
    
                /**
                 * FileDescriptorProto dependency.
                 * @member {Array.<string>} dependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.dependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto message_type.
                 * @member {Array.<google.protobuf.IDescriptorProto>} message_type
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.message_type = $util.emptyArray;
    
                /**
                 * FileDescriptorProto enum_type.
                 * @member {Array.<google.protobuf.IEnumDescriptorProto>} enum_type
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.enum_type = $util.emptyArray;
    
                /**
                 * FileDescriptorProto service.
                 * @member {Array.<google.protobuf.IServiceDescriptorProto>} service
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.service = $util.emptyArray;
    
                /**
                 * FileDescriptorProto extension.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * FileDescriptorProto options.
                 * @member {google.protobuf.IFileOptions|null|undefined} options
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.options = null;
    
                /**
                 * FileDescriptorProto source_code_info.
                 * @member {google.protobuf.ISourceCodeInfo|null|undefined} source_code_info
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.source_code_info = null;
    
                /**
                 * Creates a new FileDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
                 */
                FileDescriptorProto.create = function create(properties) {
                    return new FileDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message["package"] != null && Object.hasOwnProperty.call(message, "package"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                    if (message.dependency != null && message.dependency.length)
                        for (var i = 0; i < message.dependency.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                    if (message.message_type != null && message.message_type.length)
                        for (var i = 0; i < message.message_type.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.message_type[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.enum_type != null && message.enum_type.length)
                        for (var i = 0; i < message.enum_type.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enum_type[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.service != null && message.service.length)
                        for (var i = 0; i < message.service.length; ++i)
                            $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.source_code_info != null && Object.hasOwnProperty.call(message, "source_code_info"))
                        $root.google.protobuf.SourceCodeInfo.encode(message.source_code_info, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                message["package"] = reader.string();
                                break;
                            }
                        case 3: {
                                if (!(message.dependency && message.dependency.length))
                                    message.dependency = [];
                                message.dependency.push(reader.string());
                                break;
                            }
                        case 4: {
                                if (!(message.message_type && message.message_type.length))
                                    message.message_type = [];
                                message.message_type.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 5: {
                                if (!(message.enum_type && message.enum_type.length))
                                    message.enum_type = [];
                                message.enum_type.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 6: {
                                if (!(message.service && message.service.length))
                                    message.service = [];
                                message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 7: {
                                if (!(message.extension && message.extension.length))
                                    message.extension = [];
                                message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 8: {
                                message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                                break;
                            }
                        case 9: {
                                message.source_code_info = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        if (!$util.isString(message["package"]))
                            return "package: string expected";
                    if (message.dependency != null && message.hasOwnProperty("dependency")) {
                        if (!Array.isArray(message.dependency))
                            return "dependency: array expected";
                        for (var i = 0; i < message.dependency.length; ++i)
                            if (!$util.isString(message.dependency[i]))
                                return "dependency: string[] expected";
                    }
                    if (message.message_type != null && message.hasOwnProperty("message_type")) {
                        if (!Array.isArray(message.message_type))
                            return "message_type: array expected";
                        for (var i = 0; i < message.message_type.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.message_type[i]);
                            if (error)
                                return "message_type." + error;
                        }
                    }
                    if (message.enum_type != null && message.hasOwnProperty("enum_type")) {
                        if (!Array.isArray(message.enum_type))
                            return "enum_type: array expected";
                        for (var i = 0; i < message.enum_type.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enum_type[i]);
                            if (error)
                                return "enum_type." + error;
                        }
                    }
                    if (message.service != null && message.hasOwnProperty("service")) {
                        if (!Array.isArray(message.service))
                            return "service: array expected";
                        for (var i = 0; i < message.service.length; ++i) {
                            var error = $root.google.protobuf.ServiceDescriptorProto.verify(message.service[i]);
                            if (error)
                                return "service." + error;
                        }
                    }
                    if (message.extension != null && message.hasOwnProperty("extension")) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.FileOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.source_code_info != null && message.hasOwnProperty("source_code_info")) {
                        var error = $root.google.protobuf.SourceCodeInfo.verify(message.source_code_info);
                        if (error)
                            return "source_code_info." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 */
                FileDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.FileDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object["package"] != null)
                        message["package"] = String(object["package"]);
                    if (object.dependency) {
                        if (!Array.isArray(object.dependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                        message.dependency = [];
                        for (var i = 0; i < object.dependency.length; ++i)
                            message.dependency[i] = String(object.dependency[i]);
                    }
                    if (object.message_type) {
                        if (!Array.isArray(object.message_type))
                            throw TypeError(".google.protobuf.FileDescriptorProto.message_type: array expected");
                        message.message_type = [];
                        for (var i = 0; i < object.message_type.length; ++i) {
                            if (typeof object.message_type[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.message_type: object expected");
                            message.message_type[i] = $root.google.protobuf.DescriptorProto.fromObject(object.message_type[i]);
                        }
                    }
                    if (object.enum_type) {
                        if (!Array.isArray(object.enum_type))
                            throw TypeError(".google.protobuf.FileDescriptorProto.enum_type: array expected");
                        message.enum_type = [];
                        for (var i = 0; i < object.enum_type.length; ++i) {
                            if (typeof object.enum_type[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.enum_type: object expected");
                            message.enum_type[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enum_type[i]);
                        }
                    }
                    if (object.service) {
                        if (!Array.isArray(object.service))
                            throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                        message.service = [];
                        for (var i = 0; i < object.service.length; ++i) {
                            if (typeof object.service[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                            message.service[i] = $root.google.protobuf.ServiceDescriptorProto.fromObject(object.service[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                        message.extension = [];
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FileOptions.fromObject(object.options);
                    }
                    if (object.source_code_info != null) {
                        if (typeof object.source_code_info !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.source_code_info: object expected");
                        message.source_code_info = $root.google.protobuf.SourceCodeInfo.fromObject(object.source_code_info);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.dependency = [];
                        object.message_type = [];
                        object.enum_type = [];
                        object.service = [];
                        object.extension = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object["package"] = "";
                        object.options = null;
                        object.source_code_info = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        object["package"] = message["package"];
                    if (message.dependency && message.dependency.length) {
                        object.dependency = [];
                        for (var j = 0; j < message.dependency.length; ++j)
                            object.dependency[j] = message.dependency[j];
                    }
                    if (message.message_type && message.message_type.length) {
                        object.message_type = [];
                        for (var j = 0; j < message.message_type.length; ++j)
                            object.message_type[j] = $root.google.protobuf.DescriptorProto.toObject(message.message_type[j], options);
                    }
                    if (message.enum_type && message.enum_type.length) {
                        object.enum_type = [];
                        for (var j = 0; j < message.enum_type.length; ++j)
                            object.enum_type[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enum_type[j], options);
                    }
                    if (message.service && message.service.length) {
                        object.service = [];
                        for (var j = 0; j < message.service.length; ++j)
                            object.service[j] = $root.google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = [];
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.FileOptions.toObject(message.options, options);
                    if (message.source_code_info != null && message.hasOwnProperty("source_code_info"))
                        object.source_code_info = $root.google.protobuf.SourceCodeInfo.toObject(message.source_code_info, options);
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for FileDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FileDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.FileDescriptorProto";
                };
    
                return FileDescriptorProto;
            })();
    
            protobuf.DescriptorProto = (function() {
    
                /**
                 * Properties of a DescriptorProto.
                 * @memberof google.protobuf
                 * @interface IDescriptorProto
                 * @property {string|null} [name] DescriptorProto name
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [field] DescriptorProto field
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] DescriptorProto extension
                 * @property {Array.<google.protobuf.IDescriptorProto>|null} [nested_type] DescriptorProto nested_type
                 * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enum_type] DescriptorProto enum_type
                 * @property {Array.<google.protobuf.DescriptorProto.IExtensionRange>|null} [extension_range] DescriptorProto extension_range
                 * @property {google.protobuf.IMessageOptions|null} [options] DescriptorProto options
                 */
    
                /**
                 * Constructs a new DescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a DescriptorProto.
                 * @implements IDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
                 */
                function DescriptorProto(properties) {
                    this.field = [];
                    this.extension = [];
                    this.nested_type = [];
                    this.enum_type = [];
                    this.extension_range = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * DescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.name = "";
    
                /**
                 * DescriptorProto field.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} field
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.field = $util.emptyArray;
    
                /**
                 * DescriptorProto extension.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * DescriptorProto nested_type.
                 * @member {Array.<google.protobuf.IDescriptorProto>} nested_type
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.nested_type = $util.emptyArray;
    
                /**
                 * DescriptorProto enum_type.
                 * @member {Array.<google.protobuf.IEnumDescriptorProto>} enum_type
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.enum_type = $util.emptyArray;
    
                /**
                 * DescriptorProto extension_range.
                 * @member {Array.<google.protobuf.DescriptorProto.IExtensionRange>} extension_range
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extension_range = $util.emptyArray;
    
                /**
                 * DescriptorProto options.
                 * @member {google.protobuf.IMessageOptions|null|undefined} options
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new DescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
                 */
                DescriptorProto.create = function create(properties) {
                    return new DescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.field != null && message.field.length)
                        for (var i = 0; i < message.field.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.nested_type != null && message.nested_type.length)
                        for (var i = 0; i < message.nested_type.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.nested_type[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.enum_type != null && message.enum_type.length)
                        for (var i = 0; i < message.enum_type.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enum_type[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.extension_range != null && message.extension_range.length)
                        for (var i = 0; i < message.extension_range.length; ++i)
                            $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extension_range[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a DescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                if (!(message.field && message.field.length))
                                    message.field = [];
                                message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 6: {
                                if (!(message.extension && message.extension.length))
                                    message.extension = [];
                                message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 3: {
                                if (!(message.nested_type && message.nested_type.length))
                                    message.nested_type = [];
                                message.nested_type.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 4: {
                                if (!(message.enum_type && message.enum_type.length))
                                    message.enum_type = [];
                                message.enum_type.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 5: {
                                if (!(message.extension_range && message.extension_range.length))
                                    message.extension_range = [];
                                message.extension_range.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                                break;
                            }
                        case 7: {
                                message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a DescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.field != null && message.hasOwnProperty("field")) {
                        if (!Array.isArray(message.field))
                            return "field: array expected";
                        for (var i = 0; i < message.field.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.field[i]);
                            if (error)
                                return "field." + error;
                        }
                    }
                    if (message.extension != null && message.hasOwnProperty("extension")) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.nested_type != null && message.hasOwnProperty("nested_type")) {
                        if (!Array.isArray(message.nested_type))
                            return "nested_type: array expected";
                        for (var i = 0; i < message.nested_type.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.nested_type[i]);
                            if (error)
                                return "nested_type." + error;
                        }
                    }
                    if (message.enum_type != null && message.hasOwnProperty("enum_type")) {
                        if (!Array.isArray(message.enum_type))
                            return "enum_type: array expected";
                        for (var i = 0; i < message.enum_type.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enum_type[i]);
                            if (error)
                                return "enum_type." + error;
                        }
                    }
                    if (message.extension_range != null && message.hasOwnProperty("extension_range")) {
                        if (!Array.isArray(message.extension_range))
                            return "extension_range: array expected";
                        for (var i = 0; i < message.extension_range.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.ExtensionRange.verify(message.extension_range[i]);
                            if (error)
                                return "extension_range." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.MessageOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 */
                DescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.field) {
                        if (!Array.isArray(object.field))
                            throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                        message.field = [];
                        for (var i = 0; i < object.field.length; ++i) {
                            if (typeof object.field[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                            message.field[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.field[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                        message.extension = [];
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                        }
                    }
                    if (object.nested_type) {
                        if (!Array.isArray(object.nested_type))
                            throw TypeError(".google.protobuf.DescriptorProto.nested_type: array expected");
                        message.nested_type = [];
                        for (var i = 0; i < object.nested_type.length; ++i) {
                            if (typeof object.nested_type[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.nested_type: object expected");
                            message.nested_type[i] = $root.google.protobuf.DescriptorProto.fromObject(object.nested_type[i]);
                        }
                    }
                    if (object.enum_type) {
                        if (!Array.isArray(object.enum_type))
                            throw TypeError(".google.protobuf.DescriptorProto.enum_type: array expected");
                        message.enum_type = [];
                        for (var i = 0; i < object.enum_type.length; ++i) {
                            if (typeof object.enum_type[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.enum_type: object expected");
                            message.enum_type[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enum_type[i]);
                        }
                    }
                    if (object.extension_range) {
                        if (!Array.isArray(object.extension_range))
                            throw TypeError(".google.protobuf.DescriptorProto.extension_range: array expected");
                        message.extension_range = [];
                        for (var i = 0; i < object.extension_range.length; ++i) {
                            if (typeof object.extension_range[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extension_range: object expected");
                            message.extension_range[i] = $root.google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extension_range[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MessageOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.DescriptorProto} message DescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.field = [];
                        object.nested_type = [];
                        object.enum_type = [];
                        object.extension_range = [];
                        object.extension = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.field && message.field.length) {
                        object.field = [];
                        for (var j = 0; j < message.field.length; ++j)
                            object.field[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.field[j], options);
                    }
                    if (message.nested_type && message.nested_type.length) {
                        object.nested_type = [];
                        for (var j = 0; j < message.nested_type.length; ++j)
                            object.nested_type[j] = $root.google.protobuf.DescriptorProto.toObject(message.nested_type[j], options);
                    }
                    if (message.enum_type && message.enum_type.length) {
                        object.enum_type = [];
                        for (var j = 0; j < message.enum_type.length; ++j)
                            object.enum_type[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enum_type[j], options);
                    }
                    if (message.extension_range && message.extension_range.length) {
                        object.extension_range = [];
                        for (var j = 0; j < message.extension_range.length; ++j)
                            object.extension_range[j] = $root.google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extension_range[j], options);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = [];
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MessageOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this DescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for DescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.DescriptorProto";
                };
    
                DescriptorProto.ExtensionRange = (function() {
    
                    /**
                     * Properties of an ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @interface IExtensionRange
                     * @property {number|null} [start] ExtensionRange start
                     * @property {number|null} [end] ExtensionRange end
                     */
    
                    /**
                     * Constructs a new ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @classdesc Represents an ExtensionRange.
                     * @implements IExtensionRange
                     * @constructor
                     * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                     */
                    function ExtensionRange(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ExtensionRange start.
                     * @member {number} start
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.start = 0;
    
                    /**
                     * ExtensionRange end.
                     * @member {number} end
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.end = 0;
    
                    /**
                     * Creates a new ExtensionRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                     */
                    ExtensionRange.create = function create(properties) {
                        return new ExtensionRange(properties);
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an ExtensionRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.start = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.end = reader.int32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an ExtensionRange message.
                     * @function verify
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ExtensionRange.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.start != null && message.hasOwnProperty("start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     */
                    ExtensionRange.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                            return object;
                        var message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ExtensionRange.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                        }
                        if (message.start != null && message.hasOwnProperty("start"))
                            object.start = message.start;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this ExtensionRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ExtensionRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for ExtensionRange
                     * @function getTypeUrl
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ExtensionRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.protobuf.DescriptorProto.ExtensionRange";
                    };
    
                    return ExtensionRange;
                })();
    
                return DescriptorProto;
            })();
    
            protobuf.FieldDescriptorProto = (function() {
    
                /**
                 * Properties of a FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFieldDescriptorProto
                 * @property {string|null} [name] FieldDescriptorProto name
                 * @property {number|null} [number] FieldDescriptorProto number
                 * @property {google.protobuf.FieldDescriptorProto.Label|null} [label] FieldDescriptorProto label
                 * @property {google.protobuf.FieldDescriptorProto.Type|null} [type] FieldDescriptorProto type
                 * @property {string|null} [type_name] FieldDescriptorProto type_name
                 * @property {string|null} [extendee] FieldDescriptorProto extendee
                 * @property {string|null} [default_value] FieldDescriptorProto default_value
                 * @property {google.protobuf.IFieldOptions|null} [options] FieldDescriptorProto options
                 */
    
                /**
                 * Constructs a new FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldDescriptorProto.
                 * @implements IFieldDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
                 */
                function FieldDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.name = "";
    
                /**
                 * FieldDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.number = 0;
    
                /**
                 * FieldDescriptorProto label.
                 * @member {google.protobuf.FieldDescriptorProto.Label} label
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.label = 1;
    
                /**
                 * FieldDescriptorProto type.
                 * @member {google.protobuf.FieldDescriptorProto.Type} type
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.type = 1;
    
                /**
                 * FieldDescriptorProto type_name.
                 * @member {string} type_name
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.type_name = "";
    
                /**
                 * FieldDescriptorProto extendee.
                 * @member {string} extendee
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.extendee = "";
    
                /**
                 * FieldDescriptorProto default_value.
                 * @member {string} default_value
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.default_value = "";
    
                /**
                 * FieldDescriptorProto options.
                 * @member {google.protobuf.IFieldOptions|null|undefined} options
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new FieldDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
                 */
                FieldDescriptorProto.create = function create(properties) {
                    return new FieldDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.extendee != null && Object.hasOwnProperty.call(message, "extendee"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                    if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                    if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                    if (message.type_name != null && Object.hasOwnProperty.call(message, "type_name"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.type_name);
                    if (message.default_value != null && Object.hasOwnProperty.call(message, "default_value"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.default_value);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 3: {
                                message.number = reader.int32();
                                break;
                            }
                        case 4: {
                                message.label = reader.int32();
                                break;
                            }
                        case 5: {
                                message.type = reader.int32();
                                break;
                            }
                        case 6: {
                                message.type_name = reader.string();
                                break;
                            }
                        case 2: {
                                message.extendee = reader.string();
                                break;
                            }
                        case 7: {
                                message.default_value = reader.string();
                                break;
                            }
                        case 8: {
                                message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.label != null && message.hasOwnProperty("label"))
                        switch (message.label) {
                        default:
                            return "label: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                        case 16:
                        case 17:
                        case 18:
                            break;
                        }
                    if (message.type_name != null && message.hasOwnProperty("type_name"))
                        if (!$util.isString(message.type_name))
                            return "type_name: string expected";
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        if (!$util.isString(message.extendee))
                            return "extendee: string expected";
                    if (message.default_value != null && message.hasOwnProperty("default_value"))
                        if (!$util.isString(message.default_value))
                            return "default_value: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.FieldOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 */
                FieldDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.FieldDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    switch (object.label) {
                    default:
                        if (typeof object.label === "number") {
                            message.label = object.label;
                            break;
                        }
                        break;
                    case "LABEL_OPTIONAL":
                    case 1:
                        message.label = 1;
                        break;
                    case "LABEL_REQUIRED":
                    case 2:
                        message.label = 2;
                        break;
                    case "LABEL_REPEATED":
                    case 3:
                        message.label = 3;
                        break;
                    }
                    switch (object.type) {
                    default:
                        if (typeof object.type === "number") {
                            message.type = object.type;
                            break;
                        }
                        break;
                    case "TYPE_DOUBLE":
                    case 1:
                        message.type = 1;
                        break;
                    case "TYPE_FLOAT":
                    case 2:
                        message.type = 2;
                        break;
                    case "TYPE_INT64":
                    case 3:
                        message.type = 3;
                        break;
                    case "TYPE_UINT64":
                    case 4:
                        message.type = 4;
                        break;
                    case "TYPE_INT32":
                    case 5:
                        message.type = 5;
                        break;
                    case "TYPE_FIXED64":
                    case 6:
                        message.type = 6;
                        break;
                    case "TYPE_FIXED32":
                    case 7:
                        message.type = 7;
                        break;
                    case "TYPE_BOOL":
                    case 8:
                        message.type = 8;
                        break;
                    case "TYPE_STRING":
                    case 9:
                        message.type = 9;
                        break;
                    case "TYPE_GROUP":
                    case 10:
                        message.type = 10;
                        break;
                    case "TYPE_MESSAGE":
                    case 11:
                        message.type = 11;
                        break;
                    case "TYPE_BYTES":
                    case 12:
                        message.type = 12;
                        break;
                    case "TYPE_UINT32":
                    case 13:
                        message.type = 13;
                        break;
                    case "TYPE_ENUM":
                    case 14:
                        message.type = 14;
                        break;
                    case "TYPE_SFIXED32":
                    case 15:
                        message.type = 15;
                        break;
                    case "TYPE_SFIXED64":
                    case 16:
                        message.type = 16;
                        break;
                    case "TYPE_SINT32":
                    case 17:
                        message.type = 17;
                        break;
                    case "TYPE_SINT64":
                    case 18:
                        message.type = 18;
                        break;
                    }
                    if (object.type_name != null)
                        message.type_name = String(object.type_name);
                    if (object.extendee != null)
                        message.extendee = String(object.extendee);
                    if (object.default_value != null)
                        message.default_value = String(object.default_value);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FieldOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.extendee = "";
                        object.number = 0;
                        object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                        object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                        object.type_name = "";
                        object.default_value = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        object.extendee = message.extendee;
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.label != null && message.hasOwnProperty("label"))
                        object.label = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] === undefined ? message.label : $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] === undefined ? message.type : $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
                    if (message.type_name != null && message.hasOwnProperty("type_name"))
                        object.type_name = message.type_name;
                    if (message.default_value != null && message.hasOwnProperty("default_value"))
                        object.default_value = message.default_value;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.FieldOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this FieldDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for FieldDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FieldDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.FieldDescriptorProto";
                };
    
                /**
                 * Type enum.
                 * @name google.protobuf.FieldDescriptorProto.Type
                 * @enum {number}
                 * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
                 * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
                 * @property {number} TYPE_INT64=3 TYPE_INT64 value
                 * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
                 * @property {number} TYPE_INT32=5 TYPE_INT32 value
                 * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
                 * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
                 * @property {number} TYPE_BOOL=8 TYPE_BOOL value
                 * @property {number} TYPE_STRING=9 TYPE_STRING value
                 * @property {number} TYPE_GROUP=10 TYPE_GROUP value
                 * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
                 * @property {number} TYPE_BYTES=12 TYPE_BYTES value
                 * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
                 * @property {number} TYPE_ENUM=14 TYPE_ENUM value
                 * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
                 * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
                 * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
                 * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
                 */
                FieldDescriptorProto.Type = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                    values[valuesById[2] = "TYPE_FLOAT"] = 2;
                    values[valuesById[3] = "TYPE_INT64"] = 3;
                    values[valuesById[4] = "TYPE_UINT64"] = 4;
                    values[valuesById[5] = "TYPE_INT32"] = 5;
                    values[valuesById[6] = "TYPE_FIXED64"] = 6;
                    values[valuesById[7] = "TYPE_FIXED32"] = 7;
                    values[valuesById[8] = "TYPE_BOOL"] = 8;
                    values[valuesById[9] = "TYPE_STRING"] = 9;
                    values[valuesById[10] = "TYPE_GROUP"] = 10;
                    values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                    values[valuesById[12] = "TYPE_BYTES"] = 12;
                    values[valuesById[13] = "TYPE_UINT32"] = 13;
                    values[valuesById[14] = "TYPE_ENUM"] = 14;
                    values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                    values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                    values[valuesById[17] = "TYPE_SINT32"] = 17;
                    values[valuesById[18] = "TYPE_SINT64"] = 18;
                    return values;
                })();
    
                /**
                 * Label enum.
                 * @name google.protobuf.FieldDescriptorProto.Label
                 * @enum {number}
                 * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
                 * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
                 * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
                 */
                FieldDescriptorProto.Label = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                    values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                    values[valuesById[3] = "LABEL_REPEATED"] = 3;
                    return values;
                })();
    
                return FieldDescriptorProto;
            })();
    
            protobuf.EnumDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumDescriptorProto
                 * @property {string|null} [name] EnumDescriptorProto name
                 * @property {Array.<google.protobuf.IEnumValueDescriptorProto>|null} [value] EnumDescriptorProto value
                 * @property {google.protobuf.IEnumOptions|null} [options] EnumDescriptorProto options
                 */
    
                /**
                 * Constructs a new EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumDescriptorProto.
                 * @implements IEnumDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
                 */
                function EnumDescriptorProto(properties) {
                    this.value = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.name = "";
    
                /**
                 * EnumDescriptorProto value.
                 * @member {Array.<google.protobuf.IEnumValueDescriptorProto>} value
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.value = $util.emptyArray;
    
                /**
                 * EnumDescriptorProto options.
                 * @member {google.protobuf.IEnumOptions|null|undefined} options
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new EnumDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
                 */
                EnumDescriptorProto.create = function create(properties) {
                    return new EnumDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.value != null && message.value.length)
                        for (var i = 0; i < message.value.length; ++i)
                            $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                if (!(message.value && message.value.length))
                                    message.value = [];
                                message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 3: {
                                message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.value != null && message.hasOwnProperty("value")) {
                        if (!Array.isArray(message.value))
                            return "value: array expected";
                        for (var i = 0; i < message.value.length; ++i) {
                            var error = $root.google.protobuf.EnumValueDescriptorProto.verify(message.value[i]);
                            if (error)
                                return "value." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.EnumOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 */
                EnumDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.EnumDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.value) {
                        if (!Array.isArray(object.value))
                            throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                        message.value = [];
                        for (var i = 0; i < object.value.length; ++i) {
                            if (typeof object.value[i] !== "object")
                                throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                            message.value[i] = $root.google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.value = [];
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.value && message.value.length) {
                        object.value = [];
                        for (var j = 0; j < message.value.length; ++j)
                            object.value[j] = $root.google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.EnumOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this EnumDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for EnumDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                EnumDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.EnumDescriptorProto";
                };
    
                return EnumDescriptorProto;
            })();
    
            protobuf.EnumValueDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumValueDescriptorProto
                 * @property {string|null} [name] EnumValueDescriptorProto name
                 * @property {number|null} [number] EnumValueDescriptorProto number
                 * @property {google.protobuf.IEnumValueOptions|null} [options] EnumValueDescriptorProto options
                 */
    
                /**
                 * Constructs a new EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueDescriptorProto.
                 * @implements IEnumValueDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
                 */
                function EnumValueDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.name = "";
    
                /**
                 * EnumValueDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.number = 0;
    
                /**
                 * EnumValueDescriptorProto options.
                 * @member {google.protobuf.IEnumValueOptions|null|undefined} options
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new EnumValueDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
                 */
                EnumValueDescriptorProto.create = function create(properties) {
                    return new EnumValueDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                message.number = reader.int32();
                                break;
                            }
                        case 3: {
                                message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.EnumValueOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 */
                EnumValueDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.EnumValueDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumValueOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.number = 0;
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.EnumValueOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this EnumValueDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for EnumValueDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                EnumValueDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.EnumValueDescriptorProto";
                };
    
                return EnumValueDescriptorProto;
            })();
    
            protobuf.ServiceDescriptorProto = (function() {
    
                /**
                 * Properties of a ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IServiceDescriptorProto
                 * @property {string|null} [name] ServiceDescriptorProto name
                 * @property {Array.<google.protobuf.IMethodDescriptorProto>|null} [method] ServiceDescriptorProto method
                 * @property {google.protobuf.IServiceOptions|null} [options] ServiceDescriptorProto options
                 */
    
                /**
                 * Constructs a new ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceDescriptorProto.
                 * @implements IServiceDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
                 */
                function ServiceDescriptorProto(properties) {
                    this.method = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.name = "";
    
                /**
                 * ServiceDescriptorProto method.
                 * @member {Array.<google.protobuf.IMethodDescriptorProto>} method
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.method = $util.emptyArray;
    
                /**
                 * ServiceDescriptorProto options.
                 * @member {google.protobuf.IServiceOptions|null|undefined} options
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new ServiceDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
                 */
                ServiceDescriptorProto.create = function create(properties) {
                    return new ServiceDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.method != null && message.method.length)
                        for (var i = 0; i < message.method.length; ++i)
                            $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                if (!(message.method && message.method.length))
                                    message.method = [];
                                message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                                break;
                            }
                        case 3: {
                                message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.method != null && message.hasOwnProperty("method")) {
                        if (!Array.isArray(message.method))
                            return "method: array expected";
                        for (var i = 0; i < message.method.length; ++i) {
                            var error = $root.google.protobuf.MethodDescriptorProto.verify(message.method[i]);
                            if (error)
                                return "method." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.ServiceOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 */
                ServiceDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.ServiceDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.method) {
                        if (!Array.isArray(object.method))
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                        message.method = [];
                        for (var i = 0; i < object.method.length; ++i) {
                            if (typeof object.method[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                            message.method[i] = $root.google.protobuf.MethodDescriptorProto.fromObject(object.method[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.ServiceOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.method = [];
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.method && message.method.length) {
                        object.method = [];
                        for (var j = 0; j < message.method.length; ++j)
                            object.method[j] = $root.google.protobuf.MethodDescriptorProto.toObject(message.method[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.ServiceOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this ServiceDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for ServiceDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ServiceDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.ServiceDescriptorProto";
                };
    
                return ServiceDescriptorProto;
            })();
    
            protobuf.MethodDescriptorProto = (function() {
    
                /**
                 * Properties of a MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IMethodDescriptorProto
                 * @property {string|null} [name] MethodDescriptorProto name
                 * @property {string|null} [input_type] MethodDescriptorProto input_type
                 * @property {string|null} [output_type] MethodDescriptorProto output_type
                 * @property {google.protobuf.IMethodOptions|null} [options] MethodDescriptorProto options
                 */
    
                /**
                 * Constructs a new MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodDescriptorProto.
                 * @implements IMethodDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
                 */
                function MethodDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.name = "";
    
                /**
                 * MethodDescriptorProto input_type.
                 * @member {string} input_type
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.input_type = "";
    
                /**
                 * MethodDescriptorProto output_type.
                 * @member {string} output_type
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.output_type = "";
    
                /**
                 * MethodDescriptorProto options.
                 * @member {google.protobuf.IMethodOptions|null|undefined} options
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new MethodDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
                 */
                MethodDescriptorProto.create = function create(properties) {
                    return new MethodDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.input_type != null && Object.hasOwnProperty.call(message, "input_type"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.input_type);
                    if (message.output_type != null && Object.hasOwnProperty.call(message, "output_type"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.output_type);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                message.input_type = reader.string();
                                break;
                            }
                        case 3: {
                                message.output_type = reader.string();
                                break;
                            }
                        case 4: {
                                message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.input_type != null && message.hasOwnProperty("input_type"))
                        if (!$util.isString(message.input_type))
                            return "input_type: string expected";
                    if (message.output_type != null && message.hasOwnProperty("output_type"))
                        if (!$util.isString(message.output_type))
                            return "output_type: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.MethodOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 */
                MethodDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.MethodDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.input_type != null)
                        message.input_type = String(object.input_type);
                    if (object.output_type != null)
                        message.output_type = String(object.output_type);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MethodOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.input_type = "";
                        object.output_type = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.input_type != null && message.hasOwnProperty("input_type"))
                        object.input_type = message.input_type;
                    if (message.output_type != null && message.hasOwnProperty("output_type"))
                        object.output_type = message.output_type;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this MethodDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for MethodDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MethodDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.MethodDescriptorProto";
                };
    
                return MethodDescriptorProto;
            })();
    
            protobuf.FileOptions = (function() {
    
                /**
                 * Properties of a FileOptions.
                 * @memberof google.protobuf
                 * @interface IFileOptions
                 * @property {string|null} [java_package] FileOptions java_package
                 * @property {string|null} [java_outer_classname] FileOptions java_outer_classname
                 * @property {boolean|null} [java_multiple_files] FileOptions java_multiple_files
                 * @property {boolean|null} [java_generate_equals_and_hash] FileOptions java_generate_equals_and_hash
                 * @property {google.protobuf.FileOptions.OptimizeMode|null} [optimize_for] FileOptions optimize_for
                 * @property {boolean|null} [cc_generic_services] FileOptions cc_generic_services
                 * @property {boolean|null} [java_generic_services] FileOptions java_generic_services
                 * @property {boolean|null} [py_generic_services] FileOptions py_generic_services
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] FileOptions uninterpreted_option
                 */
    
                /**
                 * Constructs a new FileOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileOptions.
                 * @implements IFileOptions
                 * @constructor
                 * @param {google.protobuf.IFileOptions=} [properties] Properties to set
                 */
                function FileOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileOptions java_package.
                 * @member {string} java_package
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_package = "";
    
                /**
                 * FileOptions java_outer_classname.
                 * @member {string} java_outer_classname
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_outer_classname = "";
    
                /**
                 * FileOptions java_multiple_files.
                 * @member {boolean} java_multiple_files
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_multiple_files = false;
    
                /**
                 * FileOptions java_generate_equals_and_hash.
                 * @member {boolean} java_generate_equals_and_hash
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_generate_equals_and_hash = false;
    
                /**
                 * FileOptions optimize_for.
                 * @member {google.protobuf.FileOptions.OptimizeMode} optimize_for
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.optimize_for = 1;
    
                /**
                 * FileOptions cc_generic_services.
                 * @member {boolean} cc_generic_services
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.cc_generic_services = false;
    
                /**
                 * FileOptions java_generic_services.
                 * @member {boolean} java_generic_services
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_generic_services = false;
    
                /**
                 * FileOptions py_generic_services.
                 * @member {boolean} py_generic_services
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.py_generic_services = false;
    
                /**
                 * FileOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new FileOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions=} [properties] Properties to set
                 * @returns {google.protobuf.FileOptions} FileOptions instance
                 */
                FileOptions.create = function create(properties) {
                    return new FileOptions(properties);
                };
    
                /**
                 * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.java_package != null && Object.hasOwnProperty.call(message, "java_package"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.java_package);
                    if (message.java_outer_classname != null && Object.hasOwnProperty.call(message, "java_outer_classname"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.java_outer_classname);
                    if (message.optimize_for != null && Object.hasOwnProperty.call(message, "optimize_for"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimize_for);
                    if (message.java_multiple_files != null && Object.hasOwnProperty.call(message, "java_multiple_files"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.java_multiple_files);
                    if (message.cc_generic_services != null && Object.hasOwnProperty.call(message, "cc_generic_services"))
                        writer.uint32(/* id 16, wireType 0 =*/128).bool(message.cc_generic_services);
                    if (message.java_generic_services != null && Object.hasOwnProperty.call(message, "java_generic_services"))
                        writer.uint32(/* id 17, wireType 0 =*/136).bool(message.java_generic_services);
                    if (message.py_generic_services != null && Object.hasOwnProperty.call(message, "py_generic_services"))
                        writer.uint32(/* id 18, wireType 0 =*/144).bool(message.py_generic_services);
                    if (message.java_generate_equals_and_hash != null && Object.hasOwnProperty.call(message, "java_generate_equals_and_hash"))
                        writer.uint32(/* id 20, wireType 0 =*/160).bool(message.java_generate_equals_and_hash);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileOptions} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.java_package = reader.string();
                                break;
                            }
                        case 8: {
                                message.java_outer_classname = reader.string();
                                break;
                            }
                        case 10: {
                                message.java_multiple_files = reader.bool();
                                break;
                            }
                        case 20: {
                                message.java_generate_equals_and_hash = reader.bool();
                                break;
                            }
                        case 9: {
                                message.optimize_for = reader.int32();
                                break;
                            }
                        case 16: {
                                message.cc_generic_services = reader.bool();
                                break;
                            }
                        case 17: {
                                message.java_generic_services = reader.bool();
                                break;
                            }
                        case 18: {
                                message.py_generic_services = reader.bool();
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                    message.uninterpreted_option = [];
                                message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileOptions} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileOptions message.
                 * @function verify
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.java_package != null && message.hasOwnProperty("java_package"))
                        if (!$util.isString(message.java_package))
                            return "java_package: string expected";
                    if (message.java_outer_classname != null && message.hasOwnProperty("java_outer_classname"))
                        if (!$util.isString(message.java_outer_classname))
                            return "java_outer_classname: string expected";
                    if (message.java_multiple_files != null && message.hasOwnProperty("java_multiple_files"))
                        if (typeof message.java_multiple_files !== "boolean")
                            return "java_multiple_files: boolean expected";
                    if (message.java_generate_equals_and_hash != null && message.hasOwnProperty("java_generate_equals_and_hash"))
                        if (typeof message.java_generate_equals_and_hash !== "boolean")
                            return "java_generate_equals_and_hash: boolean expected";
                    if (message.optimize_for != null && message.hasOwnProperty("optimize_for"))
                        switch (message.optimize_for) {
                        default:
                            return "optimize_for: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.cc_generic_services != null && message.hasOwnProperty("cc_generic_services"))
                        if (typeof message.cc_generic_services !== "boolean")
                            return "cc_generic_services: boolean expected";
                    if (message.java_generic_services != null && message.hasOwnProperty("java_generic_services"))
                        if (typeof message.java_generic_services !== "boolean")
                            return "java_generic_services: boolean expected";
                    if (message.py_generic_services != null && message.hasOwnProperty("py_generic_services"))
                        if (typeof message.py_generic_services !== "boolean")
                            return "py_generic_services: boolean expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileOptions} FileOptions
                 */
                FileOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileOptions)
                        return object;
                    var message = new $root.google.protobuf.FileOptions();
                    if (object.java_package != null)
                        message.java_package = String(object.java_package);
                    if (object.java_outer_classname != null)
                        message.java_outer_classname = String(object.java_outer_classname);
                    if (object.java_multiple_files != null)
                        message.java_multiple_files = Boolean(object.java_multiple_files);
                    if (object.java_generate_equals_and_hash != null)
                        message.java_generate_equals_and_hash = Boolean(object.java_generate_equals_and_hash);
                    switch (object.optimize_for) {
                    default:
                        if (typeof object.optimize_for === "number") {
                            message.optimize_for = object.optimize_for;
                            break;
                        }
                        break;
                    case "SPEED":
                    case 1:
                        message.optimize_for = 1;
                        break;
                    case "CODE_SIZE":
                    case 2:
                        message.optimize_for = 2;
                        break;
                    case "LITE_RUNTIME":
                    case 3:
                        message.optimize_for = 3;
                        break;
                    }
                    if (object.cc_generic_services != null)
                        message.cc_generic_services = Boolean(object.cc_generic_services);
                    if (object.java_generic_services != null)
                        message.java_generic_services = Boolean(object.java_generic_services);
                    if (object.py_generic_services != null)
                        message.py_generic_services = Boolean(object.py_generic_services);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.FileOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.FileOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.FileOptions} message FileOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.java_package = "";
                        object.java_outer_classname = "";
                        object.optimize_for = options.enums === String ? "SPEED" : 1;
                        object.java_multiple_files = false;
                        object.cc_generic_services = false;
                        object.java_generic_services = false;
                        object.py_generic_services = false;
                        object.java_generate_equals_and_hash = false;
                    }
                    if (message.java_package != null && message.hasOwnProperty("java_package"))
                        object.java_package = message.java_package;
                    if (message.java_outer_classname != null && message.hasOwnProperty("java_outer_classname"))
                        object.java_outer_classname = message.java_outer_classname;
                    if (message.optimize_for != null && message.hasOwnProperty("optimize_for"))
                        object.optimize_for = options.enums === String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimize_for] === undefined ? message.optimize_for : $root.google.protobuf.FileOptions.OptimizeMode[message.optimize_for] : message.optimize_for;
                    if (message.java_multiple_files != null && message.hasOwnProperty("java_multiple_files"))
                        object.java_multiple_files = message.java_multiple_files;
                    if (message.cc_generic_services != null && message.hasOwnProperty("cc_generic_services"))
                        object.cc_generic_services = message.cc_generic_services;
                    if (message.java_generic_services != null && message.hasOwnProperty("java_generic_services"))
                        object.java_generic_services = message.java_generic_services;
                    if (message.py_generic_services != null && message.hasOwnProperty("py_generic_services"))
                        object.py_generic_services = message.py_generic_services;
                    if (message.java_generate_equals_and_hash != null && message.hasOwnProperty("java_generate_equals_and_hash"))
                        object.java_generate_equals_and_hash = message.java_generate_equals_and_hash;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FileOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for FileOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FileOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.FileOptions";
                };
    
                /**
                 * OptimizeMode enum.
                 * @name google.protobuf.FileOptions.OptimizeMode
                 * @enum {number}
                 * @property {number} SPEED=1 SPEED value
                 * @property {number} CODE_SIZE=2 CODE_SIZE value
                 * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
                 */
                FileOptions.OptimizeMode = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "SPEED"] = 1;
                    values[valuesById[2] = "CODE_SIZE"] = 2;
                    values[valuesById[3] = "LITE_RUNTIME"] = 3;
                    return values;
                })();
    
                return FileOptions;
            })();
    
            protobuf.MessageOptions = (function() {
    
                /**
                 * Properties of a MessageOptions.
                 * @memberof google.protobuf
                 * @interface IMessageOptions
                 * @property {boolean|null} [message_set_wire_format] MessageOptions message_set_wire_format
                 * @property {boolean|null} [no_standard_descriptor_accessor] MessageOptions no_standard_descriptor_accessor
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] MessageOptions uninterpreted_option
                 * @property {number|null} [".msgpool_soft_limit"] MessageOptions .msgpool_soft_limit
                 * @property {number|null} [".msgpool_hard_limit"] MessageOptions .msgpool_hard_limit
                 */
    
                /**
                 * Constructs a new MessageOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MessageOptions.
                 * @implements IMessageOptions
                 * @constructor
                 * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
                 */
                function MessageOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MessageOptions message_set_wire_format.
                 * @member {boolean} message_set_wire_format
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.message_set_wire_format = false;
    
                /**
                 * MessageOptions no_standard_descriptor_accessor.
                 * @member {boolean} no_standard_descriptor_accessor
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.no_standard_descriptor_accessor = false;
    
                /**
                 * MessageOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * MessageOptions .msgpool_soft_limit.
                 * @member {number} .msgpool_soft_limit
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype[".msgpool_soft_limit"] = 32;
    
                /**
                 * MessageOptions .msgpool_hard_limit.
                 * @member {number} .msgpool_hard_limit
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype[".msgpool_hard_limit"] = 384;
    
                /**
                 * Creates a new MessageOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
                 * @returns {google.protobuf.MessageOptions} MessageOptions instance
                 */
                MessageOptions.create = function create(properties) {
                    return new MessageOptions(properties);
                };
    
                /**
                 * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.message_set_wire_format != null && Object.hasOwnProperty.call(message, "message_set_wire_format"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.message_set_wire_format);
                    if (message.no_standard_descriptor_accessor != null && Object.hasOwnProperty.call(message, "no_standard_descriptor_accessor"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.no_standard_descriptor_accessor);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".msgpool_soft_limit"] != null && Object.hasOwnProperty.call(message, ".msgpool_soft_limit"))
                        writer.uint32(/* id 60000, wireType 0 =*/480000).int32(message[".msgpool_soft_limit"]);
                    if (message[".msgpool_hard_limit"] != null && Object.hasOwnProperty.call(message, ".msgpool_hard_limit"))
                        writer.uint32(/* id 60001, wireType 0 =*/480008).int32(message[".msgpool_hard_limit"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MessageOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.message_set_wire_format = reader.bool();
                                break;
                            }
                        case 2: {
                                message.no_standard_descriptor_accessor = reader.bool();
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                    message.uninterpreted_option = [];
                                message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        case 60000: {
                                message[".msgpool_soft_limit"] = reader.int32();
                                break;
                            }
                        case 60001: {
                                message[".msgpool_hard_limit"] = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MessageOptions message.
                 * @function verify
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MessageOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.message_set_wire_format != null && message.hasOwnProperty("message_set_wire_format"))
                        if (typeof message.message_set_wire_format !== "boolean")
                            return "message_set_wire_format: boolean expected";
                    if (message.no_standard_descriptor_accessor != null && message.hasOwnProperty("no_standard_descriptor_accessor"))
                        if (typeof message.no_standard_descriptor_accessor !== "boolean")
                            return "no_standard_descriptor_accessor: boolean expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    if (message[".msgpool_soft_limit"] != null && message.hasOwnProperty(".msgpool_soft_limit"))
                        if (!$util.isInteger(message[".msgpool_soft_limit"]))
                            return ".msgpool_soft_limit: integer expected";
                    if (message[".msgpool_hard_limit"] != null && message.hasOwnProperty(".msgpool_hard_limit"))
                        if (!$util.isInteger(message[".msgpool_hard_limit"]))
                            return ".msgpool_hard_limit: integer expected";
                    return null;
                };
    
                /**
                 * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 */
                MessageOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MessageOptions)
                        return object;
                    var message = new $root.google.protobuf.MessageOptions();
                    if (object.message_set_wire_format != null)
                        message.message_set_wire_format = Boolean(object.message_set_wire_format);
                    if (object.no_standard_descriptor_accessor != null)
                        message.no_standard_descriptor_accessor = Boolean(object.no_standard_descriptor_accessor);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.MessageOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.MessageOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    if (object[".msgpool_soft_limit"] != null)
                        message[".msgpool_soft_limit"] = object[".msgpool_soft_limit"] | 0;
                    if (object[".msgpool_hard_limit"] != null)
                        message[".msgpool_hard_limit"] = object[".msgpool_hard_limit"] | 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.MessageOptions} message MessageOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.message_set_wire_format = false;
                        object.no_standard_descriptor_accessor = false;
                        object[".msgpool_soft_limit"] = 32;
                        object[".msgpool_hard_limit"] = 384;
                    }
                    if (message.message_set_wire_format != null && message.hasOwnProperty("message_set_wire_format"))
                        object.message_set_wire_format = message.message_set_wire_format;
                    if (message.no_standard_descriptor_accessor != null && message.hasOwnProperty("no_standard_descriptor_accessor"))
                        object.no_standard_descriptor_accessor = message.no_standard_descriptor_accessor;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    if (message[".msgpool_soft_limit"] != null && message.hasOwnProperty(".msgpool_soft_limit"))
                        object[".msgpool_soft_limit"] = message[".msgpool_soft_limit"];
                    if (message[".msgpool_hard_limit"] != null && message.hasOwnProperty(".msgpool_hard_limit"))
                        object[".msgpool_hard_limit"] = message[".msgpool_hard_limit"];
                    return object;
                };
    
                /**
                 * Converts this MessageOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MessageOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for MessageOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MessageOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.MessageOptions";
                };
    
                return MessageOptions;
            })();
    
            protobuf.FieldOptions = (function() {
    
                /**
                 * Properties of a FieldOptions.
                 * @memberof google.protobuf
                 * @interface IFieldOptions
                 * @property {google.protobuf.FieldOptions.CType|null} [ctype] FieldOptions ctype
                 * @property {boolean|null} [packed] FieldOptions packed
                 * @property {boolean|null} [deprecated] FieldOptions deprecated
                 * @property {string|null} [experimental_map_key] FieldOptions experimental_map_key
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] FieldOptions uninterpreted_option
                 * @property {boolean|null} [".key_field"] FieldOptions .key_field
                 */
    
                /**
                 * Constructs a new FieldOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldOptions.
                 * @implements IFieldOptions
                 * @constructor
                 * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
                 */
                function FieldOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldOptions ctype.
                 * @member {google.protobuf.FieldOptions.CType} ctype
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.ctype = 0;
    
                /**
                 * FieldOptions packed.
                 * @member {boolean} packed
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.packed = false;
    
                /**
                 * FieldOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.deprecated = false;
    
                /**
                 * FieldOptions experimental_map_key.
                 * @member {string} experimental_map_key
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.experimental_map_key = "";
    
                /**
                 * FieldOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * FieldOptions .key_field.
                 * @member {boolean} .key_field
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype[".key_field"] = false;
    
                /**
                 * Creates a new FieldOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
                 * @returns {google.protobuf.FieldOptions} FieldOptions instance
                 */
                FieldOptions.create = function create(properties) {
                    return new FieldOptions(properties);
                };
    
                /**
                 * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ctype != null && Object.hasOwnProperty.call(message, "ctype"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                    if (message.packed != null && Object.hasOwnProperty.call(message, "packed"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.experimental_map_key != null && Object.hasOwnProperty.call(message, "experimental_map_key"))
                        writer.uint32(/* id 9, wireType 2 =*/74).string(message.experimental_map_key);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".key_field"] != null && Object.hasOwnProperty.call(message, ".key_field"))
                        writer.uint32(/* id 60000, wireType 0 =*/480000).bool(message[".key_field"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.ctype = reader.int32();
                                break;
                            }
                        case 2: {
                                message.packed = reader.bool();
                                break;
                            }
                        case 3: {
                                message.deprecated = reader.bool();
                                break;
                            }
                        case 9: {
                                message.experimental_map_key = reader.string();
                                break;
                            }
                        case 999: {
                                if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                    message.uninterpreted_option = [];
                                message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        case 60000: {
                                message[".key_field"] = reader.bool();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldOptions message.
                 * @function verify
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        switch (message.ctype) {
                        default:
                            return "ctype: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        if (typeof message.packed !== "boolean")
                            return "packed: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.experimental_map_key != null && message.hasOwnProperty("experimental_map_key"))
                        if (!$util.isString(message.experimental_map_key))
                            return "experimental_map_key: string expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    if (message[".key_field"] != null && message.hasOwnProperty(".key_field"))
                        if (typeof message[".key_field"] !== "boolean")
                            return ".key_field: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 */
                FieldOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldOptions)
                        return object;
                    var message = new $root.google.protobuf.FieldOptions();
                    switch (object.ctype) {
                    default:
                        if (typeof object.ctype === "number") {
                            message.ctype = object.ctype;
                            break;
                        }
                        break;
                    case "STRING":
                    case 0:
                        message.ctype = 0;
                        break;
                    case "CORD":
                    case 1:
                        message.ctype = 1;
                        break;
                    case "STRING_PIECE":
                    case 2:
                        message.ctype = 2;
                        break;
                    }
                    if (object.packed != null)
                        message.packed = Boolean(object.packed);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.experimental_map_key != null)
                        message.experimental_map_key = String(object.experimental_map_key);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.FieldOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.FieldOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    if (object[".key_field"] != null)
                        message[".key_field"] = Boolean(object[".key_field"]);
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.FieldOptions} message FieldOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.ctype = options.enums === String ? "STRING" : 0;
                        object.packed = false;
                        object.deprecated = false;
                        object.experimental_map_key = "";
                        object[".key_field"] = false;
                    }
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        object.ctype = options.enums === String ? $root.google.protobuf.FieldOptions.CType[message.ctype] === undefined ? message.ctype : $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        object.packed = message.packed;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.experimental_map_key != null && message.hasOwnProperty("experimental_map_key"))
                        object.experimental_map_key = message.experimental_map_key;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    if (message[".key_field"] != null && message.hasOwnProperty(".key_field"))
                        object[".key_field"] = message[".key_field"];
                    return object;
                };
    
                /**
                 * Converts this FieldOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for FieldOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FieldOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.FieldOptions";
                };
    
                /**
                 * CType enum.
                 * @name google.protobuf.FieldOptions.CType
                 * @enum {number}
                 * @property {number} STRING=0 STRING value
                 * @property {number} CORD=1 CORD value
                 * @property {number} STRING_PIECE=2 STRING_PIECE value
                 */
                FieldOptions.CType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "STRING"] = 0;
                    values[valuesById[1] = "CORD"] = 1;
                    values[valuesById[2] = "STRING_PIECE"] = 2;
                    return values;
                })();
    
                return FieldOptions;
            })();
    
            protobuf.EnumOptions = (function() {
    
                /**
                 * Properties of an EnumOptions.
                 * @memberof google.protobuf
                 * @interface IEnumOptions
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] EnumOptions uninterpreted_option
                 */
    
                /**
                 * Constructs a new EnumOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumOptions.
                 * @implements IEnumOptions
                 * @constructor
                 * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
                 */
                function EnumOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new EnumOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
                 * @returns {google.protobuf.EnumOptions} EnumOptions instance
                 */
                EnumOptions.create = function create(properties) {
                    return new EnumOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 999: {
                                if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                    message.uninterpreted_option = [];
                                message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 */
                EnumOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumOptions)
                        return object;
                    var message = new $root.google.protobuf.EnumOptions();
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.EnumOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.EnumOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.EnumOptions} message EnumOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this EnumOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for EnumOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                EnumOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.EnumOptions";
                };
    
                return EnumOptions;
            })();
    
            protobuf.EnumValueOptions = (function() {
    
                /**
                 * Properties of an EnumValueOptions.
                 * @memberof google.protobuf
                 * @interface IEnumValueOptions
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] EnumValueOptions uninterpreted_option
                 */
    
                /**
                 * Constructs a new EnumValueOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueOptions.
                 * @implements IEnumValueOptions
                 * @constructor
                 * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
                 */
                function EnumValueOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new EnumValueOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
                 */
                EnumValueOptions.create = function create(properties) {
                    return new EnumValueOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 999: {
                                if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                    message.uninterpreted_option = [];
                                message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 */
                EnumValueOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumValueOptions)
                        return object;
                    var message = new $root.google.protobuf.EnumValueOptions();
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.EnumValueOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.EnumValueOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this EnumValueOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for EnumValueOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                EnumValueOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.EnumValueOptions";
                };
    
                return EnumValueOptions;
            })();
    
            protobuf.ServiceOptions = (function() {
    
                /**
                 * Properties of a ServiceOptions.
                 * @memberof google.protobuf
                 * @interface IServiceOptions
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] ServiceOptions uninterpreted_option
                 */
    
                /**
                 * Constructs a new ServiceOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceOptions.
                 * @implements IServiceOptions
                 * @constructor
                 * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
                 */
                function ServiceOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new ServiceOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
                 */
                ServiceOptions.create = function create(properties) {
                    return new ServiceOptions(properties);
                };
    
                /**
                 * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 999: {
                                if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                    message.uninterpreted_option = [];
                                message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceOptions message.
                 * @function verify
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 */
                ServiceOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ServiceOptions)
                        return object;
                    var message = new $root.google.protobuf.ServiceOptions();
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.ServiceOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.ServiceOptions} message ServiceOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this ServiceOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for ServiceOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ServiceOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.ServiceOptions";
                };
    
                return ServiceOptions;
            })();
    
            protobuf.MethodOptions = (function() {
    
                /**
                 * Properties of a MethodOptions.
                 * @memberof google.protobuf
                 * @interface IMethodOptions
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] MethodOptions uninterpreted_option
                 */
    
                /**
                 * Constructs a new MethodOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodOptions.
                 * @implements IMethodOptions
                 * @constructor
                 * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
                 */
                function MethodOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new MethodOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
                 * @returns {google.protobuf.MethodOptions} MethodOptions instance
                 */
                MethodOptions.create = function create(properties) {
                    return new MethodOptions(properties);
                };
    
                /**
                 * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 999: {
                                if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                    message.uninterpreted_option = [];
                                message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodOptions message.
                 * @function verify
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 */
                MethodOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MethodOptions)
                        return object;
                    var message = new $root.google.protobuf.MethodOptions();
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.MethodOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.MethodOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.MethodOptions} message MethodOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this MethodOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for MethodOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MethodOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.MethodOptions";
                };
    
                return MethodOptions;
            })();
    
            protobuf.UninterpretedOption = (function() {
    
                /**
                 * Properties of an UninterpretedOption.
                 * @memberof google.protobuf
                 * @interface IUninterpretedOption
                 * @property {Array.<google.protobuf.UninterpretedOption.INamePart>|null} [name] UninterpretedOption name
                 * @property {string|null} [identifier_value] UninterpretedOption identifier_value
                 * @property {number|Long|null} [positive_int_value] UninterpretedOption positive_int_value
                 * @property {number|Long|null} [negative_int_value] UninterpretedOption negative_int_value
                 * @property {number|null} [double_value] UninterpretedOption double_value
                 * @property {Uint8Array|null} [string_value] UninterpretedOption string_value
                 * @property {string|null} [aggregate_value] UninterpretedOption aggregate_value
                 */
    
                /**
                 * Constructs a new UninterpretedOption.
                 * @memberof google.protobuf
                 * @classdesc Represents an UninterpretedOption.
                 * @implements IUninterpretedOption
                 * @constructor
                 * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
                 */
                function UninterpretedOption(properties) {
                    this.name = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * UninterpretedOption name.
                 * @member {Array.<google.protobuf.UninterpretedOption.INamePart>} name
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.name = $util.emptyArray;
    
                /**
                 * UninterpretedOption identifier_value.
                 * @member {string} identifier_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.identifier_value = "";
    
                /**
                 * UninterpretedOption positive_int_value.
                 * @member {number|Long} positive_int_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.positive_int_value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * UninterpretedOption negative_int_value.
                 * @member {number|Long} negative_int_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.negative_int_value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * UninterpretedOption double_value.
                 * @member {number} double_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.double_value = 0;
    
                /**
                 * UninterpretedOption string_value.
                 * @member {Uint8Array} string_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.string_value = $util.newBuffer([]);
    
                /**
                 * UninterpretedOption aggregate_value.
                 * @member {string} aggregate_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.aggregate_value = "";
    
                /**
                 * Creates a new UninterpretedOption instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
                 */
                UninterpretedOption.create = function create(properties) {
                    return new UninterpretedOption(properties);
                };
    
                /**
                 * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.name.length)
                        for (var i = 0; i < message.name.length; ++i)
                            $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.identifier_value != null && Object.hasOwnProperty.call(message, "identifier_value"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifier_value);
                    if (message.positive_int_value != null && Object.hasOwnProperty.call(message, "positive_int_value"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positive_int_value);
                    if (message.negative_int_value != null && Object.hasOwnProperty.call(message, "negative_int_value"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negative_int_value);
                    if (message.double_value != null && Object.hasOwnProperty.call(message, "double_value"))
                        writer.uint32(/* id 6, wireType 1 =*/49).double(message.double_value);
                    if (message.string_value != null && Object.hasOwnProperty.call(message, "string_value"))
                        writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.string_value);
                    if (message.aggregate_value != null && Object.hasOwnProperty.call(message, "aggregate_value"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregate_value);
                    return writer;
                };
    
                /**
                 * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an UninterpretedOption message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 2: {
                                if (!(message.name && message.name.length))
                                    message.name = [];
                                message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                                break;
                            }
                        case 3: {
                                message.identifier_value = reader.string();
                                break;
                            }
                        case 4: {
                                message.positive_int_value = reader.uint64();
                                break;
                            }
                        case 5: {
                                message.negative_int_value = reader.int64();
                                break;
                            }
                        case 6: {
                                message.double_value = reader.double();
                                break;
                            }
                        case 7: {
                                message.string_value = reader.bytes();
                                break;
                            }
                        case 8: {
                                message.aggregate_value = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an UninterpretedOption message.
                 * @function verify
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UninterpretedOption.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name")) {
                        if (!Array.isArray(message.name))
                            return "name: array expected";
                        for (var i = 0; i < message.name.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.NamePart.verify(message.name[i]);
                            if (error)
                                return "name." + error;
                        }
                    }
                    if (message.identifier_value != null && message.hasOwnProperty("identifier_value"))
                        if (!$util.isString(message.identifier_value))
                            return "identifier_value: string expected";
                    if (message.positive_int_value != null && message.hasOwnProperty("positive_int_value"))
                        if (!$util.isInteger(message.positive_int_value) && !(message.positive_int_value && $util.isInteger(message.positive_int_value.low) && $util.isInteger(message.positive_int_value.high)))
                            return "positive_int_value: integer|Long expected";
                    if (message.negative_int_value != null && message.hasOwnProperty("negative_int_value"))
                        if (!$util.isInteger(message.negative_int_value) && !(message.negative_int_value && $util.isInteger(message.negative_int_value.low) && $util.isInteger(message.negative_int_value.high)))
                            return "negative_int_value: integer|Long expected";
                    if (message.double_value != null && message.hasOwnProperty("double_value"))
                        if (typeof message.double_value !== "number")
                            return "double_value: number expected";
                    if (message.string_value != null && message.hasOwnProperty("string_value"))
                        if (!(message.string_value && typeof message.string_value.length === "number" || $util.isString(message.string_value)))
                            return "string_value: buffer expected";
                    if (message.aggregate_value != null && message.hasOwnProperty("aggregate_value"))
                        if (!$util.isString(message.aggregate_value))
                            return "aggregate_value: string expected";
                    return null;
                };
    
                /**
                 * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 */
                UninterpretedOption.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption)
                        return object;
                    var message = new $root.google.protobuf.UninterpretedOption();
                    if (object.name) {
                        if (!Array.isArray(object.name))
                            throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                        message.name = [];
                        for (var i = 0; i < object.name.length; ++i) {
                            if (typeof object.name[i] !== "object")
                                throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                            message.name[i] = $root.google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i]);
                        }
                    }
                    if (object.identifier_value != null)
                        message.identifier_value = String(object.identifier_value);
                    if (object.positive_int_value != null)
                        if ($util.Long)
                            (message.positive_int_value = $util.Long.fromValue(object.positive_int_value)).unsigned = true;
                        else if (typeof object.positive_int_value === "string")
                            message.positive_int_value = parseInt(object.positive_int_value, 10);
                        else if (typeof object.positive_int_value === "number")
                            message.positive_int_value = object.positive_int_value;
                        else if (typeof object.positive_int_value === "object")
                            message.positive_int_value = new $util.LongBits(object.positive_int_value.low >>> 0, object.positive_int_value.high >>> 0).toNumber(true);
                    if (object.negative_int_value != null)
                        if ($util.Long)
                            (message.negative_int_value = $util.Long.fromValue(object.negative_int_value)).unsigned = false;
                        else if (typeof object.negative_int_value === "string")
                            message.negative_int_value = parseInt(object.negative_int_value, 10);
                        else if (typeof object.negative_int_value === "number")
                            message.negative_int_value = object.negative_int_value;
                        else if (typeof object.negative_int_value === "object")
                            message.negative_int_value = new $util.LongBits(object.negative_int_value.low >>> 0, object.negative_int_value.high >>> 0).toNumber();
                    if (object.double_value != null)
                        message.double_value = Number(object.double_value);
                    if (object.string_value != null)
                        if (typeof object.string_value === "string")
                            $util.base64.decode(object.string_value, message.string_value = $util.newBuffer($util.base64.length(object.string_value)), 0);
                        else if (object.string_value.length >= 0)
                            message.string_value = object.string_value;
                    if (object.aggregate_value != null)
                        message.aggregate_value = String(object.aggregate_value);
                    return message;
                };
    
                /**
                 * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UninterpretedOption.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.name = [];
                    if (options.defaults) {
                        object.identifier_value = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.positive_int_value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.positive_int_value = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.negative_int_value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.negative_int_value = options.longs === String ? "0" : 0;
                        object.double_value = 0;
                        if (options.bytes === String)
                            object.string_value = "";
                        else {
                            object.string_value = [];
                            if (options.bytes !== Array)
                                object.string_value = $util.newBuffer(object.string_value);
                        }
                        object.aggregate_value = "";
                    }
                    if (message.name && message.name.length) {
                        object.name = [];
                        for (var j = 0; j < message.name.length; ++j)
                            object.name[j] = $root.google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options);
                    }
                    if (message.identifier_value != null && message.hasOwnProperty("identifier_value"))
                        object.identifier_value = message.identifier_value;
                    if (message.positive_int_value != null && message.hasOwnProperty("positive_int_value"))
                        if (typeof message.positive_int_value === "number")
                            object.positive_int_value = options.longs === String ? String(message.positive_int_value) : message.positive_int_value;
                        else
                            object.positive_int_value = options.longs === String ? $util.Long.prototype.toString.call(message.positive_int_value) : options.longs === Number ? new $util.LongBits(message.positive_int_value.low >>> 0, message.positive_int_value.high >>> 0).toNumber(true) : message.positive_int_value;
                    if (message.negative_int_value != null && message.hasOwnProperty("negative_int_value"))
                        if (typeof message.negative_int_value === "number")
                            object.negative_int_value = options.longs === String ? String(message.negative_int_value) : message.negative_int_value;
                        else
                            object.negative_int_value = options.longs === String ? $util.Long.prototype.toString.call(message.negative_int_value) : options.longs === Number ? new $util.LongBits(message.negative_int_value.low >>> 0, message.negative_int_value.high >>> 0).toNumber() : message.negative_int_value;
                    if (message.double_value != null && message.hasOwnProperty("double_value"))
                        object.double_value = options.json && !isFinite(message.double_value) ? String(message.double_value) : message.double_value;
                    if (message.string_value != null && message.hasOwnProperty("string_value"))
                        object.string_value = options.bytes === String ? $util.base64.encode(message.string_value, 0, message.string_value.length) : options.bytes === Array ? Array.prototype.slice.call(message.string_value) : message.string_value;
                    if (message.aggregate_value != null && message.hasOwnProperty("aggregate_value"))
                        object.aggregate_value = message.aggregate_value;
                    return object;
                };
    
                /**
                 * Converts this UninterpretedOption to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UninterpretedOption.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for UninterpretedOption
                 * @function getTypeUrl
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                UninterpretedOption.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.UninterpretedOption";
                };
    
                UninterpretedOption.NamePart = (function() {
    
                    /**
                     * Properties of a NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @interface INamePart
                     * @property {string} name_part NamePart name_part
                     * @property {boolean} is_extension NamePart is_extension
                     */
    
                    /**
                     * Constructs a new NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @classdesc Represents a NamePart.
                     * @implements INamePart
                     * @constructor
                     * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                     */
                    function NamePart(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * NamePart name_part.
                     * @member {string} name_part
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.name_part = "";
    
                    /**
                     * NamePart is_extension.
                     * @member {boolean} is_extension
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.is_extension = false;
    
                    /**
                     * Creates a new NamePart instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                     */
                    NamePart.create = function create(properties) {
                        return new NamePart(properties);
                    };
    
                    /**
                     * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name_part);
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.is_extension);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.name_part = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.is_extension = reader.bool();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("name_part"))
                            throw $util.ProtocolError("missing required 'name_part'", { instance: message });
                        if (!message.hasOwnProperty("is_extension"))
                            throw $util.ProtocolError("missing required 'is_extension'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a NamePart message.
                     * @function verify
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    NamePart.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isString(message.name_part))
                            return "name_part: string expected";
                        if (typeof message.is_extension !== "boolean")
                            return "is_extension: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     */
                    NamePart.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                            return object;
                        var message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        if (object.name_part != null)
                            message.name_part = String(object.name_part);
                        if (object.is_extension != null)
                            message.is_extension = Boolean(object.is_extension);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NamePart.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.name_part = "";
                            object.is_extension = false;
                        }
                        if (message.name_part != null && message.hasOwnProperty("name_part"))
                            object.name_part = message.name_part;
                        if (message.is_extension != null && message.hasOwnProperty("is_extension"))
                            object.is_extension = message.is_extension;
                        return object;
                    };
    
                    /**
                     * Converts this NamePart to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    NamePart.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for NamePart
                     * @function getTypeUrl
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    NamePart.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.protobuf.UninterpretedOption.NamePart";
                    };
    
                    return NamePart;
                })();
    
                return UninterpretedOption;
            })();
    
            protobuf.SourceCodeInfo = (function() {
    
                /**
                 * Properties of a SourceCodeInfo.
                 * @memberof google.protobuf
                 * @interface ISourceCodeInfo
                 * @property {Array.<google.protobuf.SourceCodeInfo.ILocation>|null} [location] SourceCodeInfo location
                 */
    
                /**
                 * Constructs a new SourceCodeInfo.
                 * @memberof google.protobuf
                 * @classdesc Represents a SourceCodeInfo.
                 * @implements ISourceCodeInfo
                 * @constructor
                 * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
                 */
                function SourceCodeInfo(properties) {
                    this.location = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * SourceCodeInfo location.
                 * @member {Array.<google.protobuf.SourceCodeInfo.ILocation>} location
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 */
                SourceCodeInfo.prototype.location = $util.emptyArray;
    
                /**
                 * Creates a new SourceCodeInfo instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
                 */
                SourceCodeInfo.create = function create(properties) {
                    return new SourceCodeInfo(properties);
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.location != null && message.location.length)
                        for (var i = 0; i < message.location.length; ++i)
                            $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a SourceCodeInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.location && message.location.length))
                                    message.location = [];
                                message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a SourceCodeInfo message.
                 * @function verify
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SourceCodeInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.location != null && message.hasOwnProperty("location")) {
                        if (!Array.isArray(message.location))
                            return "location: array expected";
                        for (var i = 0; i < message.location.length; ++i) {
                            var error = $root.google.protobuf.SourceCodeInfo.Location.verify(message.location[i]);
                            if (error)
                                return "location." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 */
                SourceCodeInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo)
                        return object;
                    var message = new $root.google.protobuf.SourceCodeInfo();
                    if (object.location) {
                        if (!Array.isArray(object.location))
                            throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                        message.location = [];
                        for (var i = 0; i < object.location.length; ++i) {
                            if (typeof object.location[i] !== "object")
                                throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                            message.location[i] = $root.google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SourceCodeInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.location = [];
                    if (message.location && message.location.length) {
                        object.location = [];
                        for (var j = 0; j < message.location.length; ++j)
                            object.location[j] = $root.google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this SourceCodeInfo to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SourceCodeInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for SourceCodeInfo
                 * @function getTypeUrl
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SourceCodeInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.SourceCodeInfo";
                };
    
                SourceCodeInfo.Location = (function() {
    
                    /**
                     * Properties of a Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @interface ILocation
                     * @property {Array.<number>|null} [path] Location path
                     * @property {Array.<number>|null} [span] Location span
                     */
    
                    /**
                     * Constructs a new Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @classdesc Represents a Location.
                     * @implements ILocation
                     * @constructor
                     * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                     */
                    function Location(properties) {
                        this.path = [];
                        this.span = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Location path.
                     * @member {Array.<number>} path
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.path = $util.emptyArray;
    
                    /**
                     * Location span.
                     * @member {Array.<number>} span
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.span = $util.emptyArray;
    
                    /**
                     * Creates a new Location instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                     */
                    Location.create = function create(properties) {
                        return new Location(properties);
                    };
    
                    /**
                     * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.path != null && message.path.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.path.length; ++i)
                                writer.int32(message.path[i]);
                            writer.ldelim();
                        }
                        if (message.span != null && message.span.length) {
                            writer.uint32(/* id 2, wireType 2 =*/18).fork();
                            for (var i = 0; i < message.span.length; ++i)
                                writer.int32(message.span[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a Location message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.path && message.path.length))
                                        message.path = [];
                                    if ((tag & 7) === 2) {
                                        var end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.path.push(reader.int32());
                                    } else
                                        message.path.push(reader.int32());
                                    break;
                                }
                            case 2: {
                                    if (!(message.span && message.span.length))
                                        message.span = [];
                                    if ((tag & 7) === 2) {
                                        var end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.span.push(reader.int32());
                                    } else
                                        message.span.push(reader.int32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a Location message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Location message.
                     * @function verify
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Location.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.path != null && message.hasOwnProperty("path")) {
                            if (!Array.isArray(message.path))
                                return "path: array expected";
                            for (var i = 0; i < message.path.length; ++i)
                                if (!$util.isInteger(message.path[i]))
                                    return "path: integer[] expected";
                        }
                        if (message.span != null && message.hasOwnProperty("span")) {
                            if (!Array.isArray(message.span))
                                return "span: array expected";
                            for (var i = 0; i < message.span.length; ++i)
                                if (!$util.isInteger(message.span[i]))
                                    return "span: integer[] expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a Location message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     */
                    Location.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                            return object;
                        var message = new $root.google.protobuf.SourceCodeInfo.Location();
                        if (object.path) {
                            if (!Array.isArray(object.path))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                            message.path = [];
                            for (var i = 0; i < object.path.length; ++i)
                                message.path[i] = object.path[i] | 0;
                        }
                        if (object.span) {
                            if (!Array.isArray(object.span))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                            message.span = [];
                            for (var i = 0; i < object.span.length; ++i)
                                message.span[i] = object.span[i] | 0;
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Location message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.Location} message Location
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Location.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.path = [];
                            object.span = [];
                        }
                        if (message.path && message.path.length) {
                            object.path = [];
                            for (var j = 0; j < message.path.length; ++j)
                                object.path[j] = message.path[j];
                        }
                        if (message.span && message.span.length) {
                            object.span = [];
                            for (var j = 0; j < message.span.length; ++j)
                                object.span[j] = message.span[j];
                        }
                        return object;
                    };
    
                    /**
                     * Converts this Location to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Location.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for Location
                     * @function getTypeUrl
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Location.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.protobuf.SourceCodeInfo.Location";
                    };
    
                    return Location;
                })();
    
                return SourceCodeInfo;
            })();
    
            return protobuf;
        })();
    
        return google;
    })();

    return $root;
});
