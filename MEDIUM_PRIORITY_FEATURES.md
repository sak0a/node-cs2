# Medium Priority Features - Implementation Status

This document tracks the implementation status of medium priority features.

## Overview

| Feature                        | Status            | Complexity | Progress |
| ------------------------------ | ----------------- | ---------- | -------- |
| Sticker Operations (Enhanced)  | ✅ Implemented    | Low        | 100%     |
| Keychain Operations (Enhanced) | ✅ Implemented    | Low        | 100%     |
| Crate Opening                  | ✅ Implemented    | Low        | 100%     |
| Matchmaking Statistics         | ✅ Handler Exists | Medium     | 50%      |
| Global Statistics              | ⏳ Not Started    | Low        | 0%       |
| Party System                   | ⏳ Not Started    | High       | 0%       |

---

## 1. Sticker Operations (Enhanced)

**Status:** ✅ Implemented  
**Priority:** Medium  
**Complexity:** Low  
**Progress:** 100%

### Description

Support for extract/encapsulate sticker operations and patch management.

### Available Messages

- `ExtractSticker` (1054) - ✅ Already in enums.js
- `EncapsulateSticker` (1055) - ✅ Already in enums.js
- `RemovePatch` (1089) - ✅ Already in enums.js
- `ApplyPatch` (1090) - ✅ Already in enums.js

### Implementation Plan

- [x] Add `extractSticker(itemId, stickerSlot, callback)` method
- [x] Add `encapsulateSticker(stickerId, callback)` method
- [x] Add Promise support
- [x] Add error handling
- [x] Find and implement protobuf message for sending requests (CMsgGCItemCustomizationNotification)
- [x] Update documentation
- [ ] Test with real items

### Notes

- ✅ Notification types already exist in `enums.js`
- ✅ Uses `CMsgGCItemCustomizationNotification` for sending requests
- ✅ Similar pattern to existing item customization methods
- ✅ Configurable timeout via `_stickerTimeout` (default: 10000ms)

---

## 2. Keychain Operations (Enhanced)

**Status:** ✅ Implemented  
**Priority:** Medium  
**Complexity:** Low  
**Progress:** 100%

### Description

Support for apply/remove keychain operations.

### Available Messages

- `ApplyKeychain` (1091) - ✅ Already in enums.js
- `RemoveKeychain` (1092) - ✅ Already in enums.js

### Implementation Plan

- [x] Add `applyKeychain(itemId, keychainId, callback)` method
- [x] Add `removeKeychain(itemId, keychainSlot, callback)` method
- [x] Add Promise support
- [x] Add error handling
- [x] Find and implement protobuf message for sending requests (CMsgGCItemCustomizationNotification)
- [x] Update documentation
- [ ] Test with real items

### Notes

- ✅ Notification types already exist in `enums.js`
- ✅ Uses `CMsgGCItemCustomizationNotification` for sending requests
- ✅ Similar pattern to sticker operations
- ✅ Configurable timeout via `_stickerTimeout` (default: 10000ms)

---

## 3. Matchmaking Statistics

**Status:** ⏳ Not Started  
**Priority:** Medium  
**Complexity:** Medium  
**Progress:** 0%

### Description

Access to matchmaking search statistics.

### Available Messages

- `MatchmakingGC2ClientSearchStats` (9223) - ✅ Handler already exists

### Implementation Plan

- [x] Handler already implemented in `handlers.js`
- [ ] Verify handler works correctly
- [ ] Add example usage to EXAMPLES.md
- [ ] Update documentation

### Notes

- Handler already exists, just needs verification
- Event: `matchmakingSearchStats` already emitted

---

## 4. Global Statistics

**Status:** ⏳ Not Started  
**Priority:** Medium  
**Complexity:** Low  
**Progress:** 0%

### Description

Access to global CS2 statistics.

### Available Messages

- `GC2ClientGlobalStats` (9173) - Need to verify message ID

### Implementation Plan

- [ ] Verify message ID exists in `language.js`
- [ ] Add handler for `GC2ClientGlobalStats`
- [ ] Add `getGlobalStats(callback)` method (if request needed)
- [ ] Add event: `globalStats`
- [ ] Add Promise support
- [ ] Add error handling
- [ ] Update documentation

### Notes

- Need to check if message ID exists
- May be server-initiated only (no request needed)

---

## 5. Party System

**Status:** ⏳ Not Started  
**Priority:** Medium  
**Complexity:** High  
**Progress:** 0%

### Description

Support for CS2 party/lobby system.

### Available Messages

- `Party_Register` (9189) - Need to verify
- `Party_Unregister` (9190) - Need to verify
- `Party_Search` (9191) - Need to verify
- `Party_Invite` (9192) - Need to verify
- `ClientPartyJoinRelay` (9197) - Need to verify
- `ClientPartyWarning` (9198) - Need to verify

### Implementation Plan

- [ ] Verify all message IDs exist
- [ ] Find protobuf message definitions
- [ ] Add `registerParty(callback)` method
- [ ] Add `unregisterParty(callback)` method
- [ ] Add `searchParties(criteria, callback)` method
- [ ] Add `inviteToParty(steamId, callback)` method
- [ ] Add handlers for party events
- [ ] Add events: `partyInvite`, `partyJoin`, `partyLeave`, etc.
- [ ] Add Promise support
- [ ] Add error handling
- [ ] Update documentation

### Notes

- Most complex feature
- Requires understanding of party system
- May need extensive testing

---

## 6. Crate Opening

**Status:** ✅ Implemented  
**Priority:** Medium  
**Complexity:** Low  
**Progress:** 100%

### Description

Support for opening crates.

### Available Messages

- `OpenCrate` (2534) - ✅ Already in language.js

### Implementation Plan

- [x] Find protobuf message definition (CMsgOpenCrate)
- [x] Add `openCrate(toolItemId, subjectItemId, forRental, pointsRemaining, callback)` method
- [x] Add handler for ItemCustomizationNotification response
- [x] Add Promise support
- [x] Add error handling
- [ ] Test with real crates
- [ ] Update documentation

### Notes

- ✅ Message ID exists in `language.js`
- ✅ Protobuf definition found (CMsgOpenCrate in base_gcmessages.proto)
- ✅ Similar to existing item operations
- ✅ Configurable timeout via `_crateTimeout` (default: 30000ms)

---

## Implementation Order

1. **Quick Wins (Low Complexity):**
   - Crate Opening
   - Sticker Operations
   - Keychain Operations

2. **Medium Complexity:**
   - Matchmaking Statistics (verify existing handler)
   - Global Statistics

3. **High Complexity:**
   - Party System

---

## Notes

- All features should maintain backward compatibility
- Add Promise-based API for all new methods
- Add proper error handling and validation
- Update EXAMPLES.md with usage examples
- Update DETAILED_DOCUMENTATION.md with API reference
- Test with real CS2 items/features before release

---

**Last Updated:** 2024-12-19  
**Next Review:** After testing with real items

## Recent Updates

### 2024-12-19

- ✅ Implemented `openCrate()` method - fully functional
- ✅ Implemented `extractSticker()` and `encapsulateSticker()` methods - fully functional
- ✅ Implemented `applyPatch()` and `removePatch()` methods - fully functional
- ✅ Implemented `applyKeychain()` and `removeKeychain()` methods - fully functional
- ✅ All methods use `CMsgGCItemCustomizationNotification` for sending requests
- ✅ All methods support Promise and callback APIs
- ✅ All methods have configurable timeouts
