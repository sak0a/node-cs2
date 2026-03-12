# Release Notes

## v2.2.3 - Code Quality, TypeScript Definitions & Developer Tooling

**Release Date:** March 2026

### Summary

This release focuses on developer experience and code maintainability. It introduces TypeScript type definitions, extracts magic numbers into named constants, adds ESLint + Prettier for consistent formatting, and sets up Vitest for testing.

### New Features

#### TypeScript Type Definitions

- Added comprehensive `types/index.d.ts` with full type definitions for all public APIs
- Typed all methods, events, enums, and item structures
- Enables IntelliSense and compile-time type checking for TypeScript projects

#### Named Constants

- Added `constants.js` extracting all magic numbers into descriptive named constants
- Covers Steam/App IDs, GC connection parameters, operation timeouts, shared object types, item definition indices, and attribute definition indices
- Improves code readability and maintainability

### Improvements

#### Developer Tooling

- Added ESLint configuration (`eslint.config.js`) with Prettier integration
- Added Prettier configuration (`.prettierrc`, `.prettierignore`)
- Added Vitest configuration (`vitest.config.mjs`) for unit testing
- Added `lint`, `lint:fix`, `format`, and `test` npm scripts

#### Code Formatting

- Standardized code formatting across all source files using Prettier
- Improved readability in `index.js`, `handlers.js`, `enums.js`, `language.js`, and `scripts/generate-protos.js`

### Technical Details

- All changes are additive and non-breaking
- 100% backward compatible
- Published `files` list updated to include `constants.js` and `types/`

---

## v2.2.0 - Crate Opening & Item Customization Operations

**Release Date:** December 19, 2024

### Summary

This release adds comprehensive support for crate opening and item customization operations, including sticker extraction/encapsulation, patch management, and keychain operations.

### New Features

#### Crate Opening

- Added `openCrate()` method to open crates using keys
- Full Promise and callback API support
- Configurable timeout (`_crateTimeout`, default: 30000ms)

#### Sticker Operations

- Added `extractSticker()` method to extract stickers from items
- Added `encapsulateSticker()` method to encapsulate stickers
- Configurable timeout (`_stickerTimeout`, default: 10000ms)

#### Patch Operations

- Added `applyPatch()` method to apply patches to items
- Added `removePatch()` method to remove patches from items
- Configurable timeout (`_stickerTimeout`, default: 10000ms)

#### Keychain Operations

- Added `applyKeychain()` method to apply keychains to items
- Added `removeKeychain()` method to remove keychains from items
- Configurable timeout (`_stickerTimeout`, default: 10000ms)

### Technical Details

- All operations use `CMsgGCItemCustomizationNotification` protobuf message
- Automatic event handling via `ItemCustomizationNotification`
- Full error handling and validation
- 100% backward compatible

### Documentation

- Updated EXAMPLES.md with comprehensive examples
- Updated DETAILED_DOCUMENTATION.md with complete API reference
- Updated README.md with quick start examples

---

## v2.1.0 - Missing Message IDs & Notification Types

**Release Date:** December 19, 2024

### Summary

This release adds missing message IDs and notification types, preparing the library for future feature implementations.

### Changes

#### Added Missing Message IDs to language.js

From EGCItemMsg (7 new IDs):

- Dev_SchemaReservationRequest: 2004
- RecurringSubscriptionStatus: 2530
- AdjustEquipSlotsManual: 2531
- AdjustEquipSlotsShuffle: 2532
- OpenCrate: 2534
- AcknowledgeRentalExpiration: 2535
- VolatileItemLoadContents: 2536

From ECsgoGCMsg (11 new IDs):

- BetaEnrollment: 9217
- SetPlayerLeaderboardSafeName: 9218
- ClientRedeemFreeReward: 9219
- ClientNetworkConfig: 9220
- GC2ClientNotifyXPShop: 9221
- Client2GcAckXPShopTracks: 9222
- MatchmakingGC2ClientSearchStats: 9223
- PremierSeasonSummary: 9224
- RequestRecurringMissionSchedule: 9225
- RecurringMissionSchema: 9226
- VolatileItemClaimReward: 9227

#### Added Missing Notification Types to enums.js

New ItemCustomizationNotification types (10 added):

- ExtractSticker: 1054
- EncapsulateSticker: 1055
- RemovePatch: 1089
- ApplyPatch: 1090
- ApplyKeychain: 1091
- RemoveKeychain: 1092
- ClientRedeemMissionReward: 9209
- ClientRedeemFreeReward: 9219
- XpShopUseTicket: 9221
- XpShopAckTracks: 9222

### Impact

- Backward Compatible: All changes are additive, no breaking changes
- Future Ready: Message IDs are now available for implementing new features
- Complete Coverage: All known CS2 message IDs from latest protobuf definitions are included

---

## v2.0.1 - Initial Fork Release

**Release Date:** December 2024

### Summary

Initial release of the node-cs2 fork with updated protobuf definitions and bug fixes.

### Changes

- Updated to latest GameTracking-CS2 protobuf definitions
- Fixed missing `highlight_reel` field in stickers, keychains, and variations
- Fixed missing `wrapped_sticker` field in sticker data
- Added support for `variations` array
- Enhanced error handling with try-catch blocks
- Added field validation for critical data
- Code deduplication with reusable helper functions
- Promise-based API support for async methods
- Configurable timeouts for all async operations

### Bug Fixes

- Fixed missing `highlight_reel` field extraction
- Fixed missing `wrapped_sticker` field extraction
- Fixed protobuf decoding errors not being caught
- Fixed missing field validation causing runtime errors

### Improvements

- Added Promise support to `inspectItem()`, `getCasketContents()`, `requestPlayersProfile()`
- Added configurable timeouts: `_inspectTimeout`, `_casketTimeout`, `_profileTimeout`
- Improved error handling throughout the codebase
- Better code maintainability with helper functions
