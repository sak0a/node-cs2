# Changelog

This changelog tracks `node-cs2` releases. Dates through `2.2.4` use npm publish timestamps; `2.3.0` is the prepared package version in this repository.

Legacy git tags from the upstream `globaloffensive` package are intentionally omitted when they were not published as `node-cs2`.

## [2.5.0] - 2026-09-27

### Added

- Latest pet protocol module and `ackPetEvent(petItemId)` fire-and-forget helper with uint64 validation
- Inspection fields `customnames`, `pet_food_expiration_date`, and `blobdata`, with TypeScript declarations
- New upstream clan tags, encrypted network messages, remote server commands, serialization settings, and network performance metrics

### Changed

- Synced all 44 upstream protobuf files through GameTracking-CS2 commit `3fc98e763328f7d1627405b389d1b6b69c5b0e38` (September 25, 2026): eight changed files and one new file
- Regenerated all 44 schema modules and their loader
- Preserved `inspectItem()`'s `customname` field as the last entry in `customnames`, or `null`, matching the previous singular protobuf decoder
- Pinned each protobuf download run to one upstream commit; `PROTO_REF` optionally selects a snapshot

### Compatibility

- Direct consumers of generated protobuf modules must use `customnames` instead of `customname` when encoding inspection data. The public `inspectItem()` API retains its compatibility alias.
- Upstream renamed legacy chat/team-money enum entries with the `_CSGOLegacy` suffix and removed the obsolete weapon-sound `stealth` field.
- Live Steam/GC operations have not been tested; the pet protocol defines no acknowledgement response.

## [2.4.1] - 2026-09-09

### Changed

- Raised the protobuf runtime minimum to `^7.6.6` and the generator to `^1.3.3` for security fixes; regenerated all 43 static schema modules
- Updated ESLint to `^10.10.0`, Prettier to `^3.9.6`, Vitest to `^4.1.11`, and the development Steam client to `^5.3.0`
- Refreshed the Bun lockfile, including patched transitive tooling dependencies
- Preserved Node.js 14+ runtime support and the existing `steam-user >=4.2.0` peer requirement
- Normalized the npm repository URL

### Tests

- Added offline integration tests using the real SteamUser constructor, outgoing GC payloads, and incoming inspection event dispatch

### Known limitations

- The Steam peer dependency still brings audit findings through `adm-zip` and `steam-appticket`'s protobufjs 6 dependency. This release does not force major-version overrides of those upstream dependencies.
- Live Steam authentication and GC operations were not tested.

## [2.4.0] - 2026-09-08

### Added

- Support for embedded/masked CS2 inspect links in `inspectItem()`, with local decoding, checksum validation, asynchronous callbacks, Promises, and existing inspection events
- Regression coverage for masked and unmasked tokens, 64-bit item IDs, float wear, invalid inputs, legacy inspection, and new protocol messages

### Changed

- Synced all 43 upstream protobuf files against GameTracking-CS2 through commit `fd04856b8668f11cb31ed2b22574607dd9c365e0` (August 24, 2026); two source files changed
- Regenerated modules for custom HUD clicks, VAC reviewer information, and removal of obsolete trading enum entries; legacy `language.js` trading constants remain for compatibility
- Shared inspection normalization and protobuf decoding between local and GC paths
- Synchronized the Bun lockfile with the existing dependency ranges in `package.json`

## [2.3.1] - 2026-07-12

### Changed

- Updated protobuf definitions from GameTracking-CS2 (13 upstream proto files)
- Regenerated static protobuf modules
- Added `SetClanId` (9229) and `VolatileShopSubscribe` (9228) GC message IDs to `language.js`

## [2.3.0] - 2026-06-11

### Added

- Added public `helloGC()` wrapper for the documented manual GC hello/retry flow
- Added `commendPlayer(accountId, commendation, matchId, tokens)` for `CMsgGCCStrike15_v2_ClientCommendPlayer`
- Added optional `volatileLimit` support to `openCrate()`
- Added latest upstream `steammessages_gc.proto`
- Added generated `protobufs/generated/steammessages_gc.js`
- Added focused unit coverage for protobuf-backed message helpers

### Changed

- Updated protobuf definitions from GameTracking-CS2
- Regenerated static protobuf modules
- Made `scripts/generate-protos.js` deterministic by sorting proto files and removing timestamp-only loader changes
- Updated README, examples, and detailed API reference to match the current public API
- Tightened TypeScript declarations for documented callback overloads
- Documented `commendPlayer()` GC eligibility caveats and testing notes

### Fixed

- Cleaned up lint warnings in `inspectItem()`
- Fixed stale documentation for `helloGC()`, match requests, item operations, casket operations, and `connectionStatus`

## [2.2.4] - 2026-03-31

### Added

- Added `scripts/download-protos.js` to fetch latest `.proto` files from GameTracking-CS2
- Added `npm run update-protos` for one-command protobuf updates
- Added protobuf definitions for `source2_steam_stats.proto`, `cs_usercmd.proto`, and `usercmd.proto`

### Changed

- Updated protobuf definitions to latest upstream GameTracking-CS2
- Regenerated all `protobufs/generated/*.js` files
- Updated development dependencies
- Removed outdated internal documentation files

## [2.2.3] - 2026-03-12

### Added

- Added comprehensive TypeScript type definitions in `types/index.d.ts`
- Added `constants.js` with named constants for shared values and magic numbers
- Added ESLint, Prettier, and Vitest configuration
- Added `lint`, `lint:fix`, `format`, and `test` npm scripts

### Changed

- Standardized source formatting across the codebase
- Updated package metadata to publish type definitions and constants

## [2.2.2] - 2026-02-13

### Fixed

- Fixed `removeKeychain()` always timing out by sending `CMsgApplySticker` instead of `CMsgGCItemCustomizationNotification`

### Changed

- `removeKeychain(itemId)` is now a fire-and-forget operation and no longer accepts `keychainSlot` or `callback`

## [2.2.1] - 2025-12-19

### Changed

- Updated README documentation for the expanded CS2 feature set

## [2.2.0] - 2025-12-19

### Added

- Added crate opening support through `openCrate()`
- Added sticker operations through `extractSticker()` and `encapsulateSticker()`
- Added patch operations through `applyPatch()` and `removePatch()`
- Added keychain operations through `applyKeychain()` and `removeKeychain()`
- Added Promise and callback support for the new item customization methods
- Added configurable operation timeouts

### Changed

- Improved error handling for item customization workflows

## [2.1.0] - 2025-12-19

### Added

- Added missing CS2 message IDs to `language.js`
- Added missing item customization notification types to `enums.js`

### Changed

- Improved coverage of modern CS2 Game Coordinator message IDs from protobuf definitions

## [2.0.1] - 2025-09-17

### Added

- Added Promise-based API support for async methods
- Added configurable operation timeouts
- Added support for `variations` arrays in item inspection data

### Changed

- Updated GameTracking-CS2 protobuf definitions
- Improved error handling and validation
- Deduplicated repeated item parsing logic with reusable helpers

### Fixed

- Fixed missing `highlight_reel` field extraction
- Fixed missing `wrapped_sticker` field extraction
- Fixed protobuf decoding errors not being caught
- Fixed missing field validation in parsed item data

## [2.0.0] - 2025-08-24

### Added

- Initial `node-cs2` fork release from the original `globaloffensive` package
- Added support for modern CS2 protobuf definitions from GameTracking-CS2
- Added modern CS2 item inspection fields

### Fixed

- Fixed critical missing fields in item inspection output
