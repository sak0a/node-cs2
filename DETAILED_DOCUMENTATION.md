# node-cs2 Detailed Documentation

Comprehensive technical documentation for the `node-cs2` library.

## Table of Contents

- [Architecture](#architecture)
- [API Reference](#api-reference)
- [Event Reference](#event-reference)
- [Protobuf Messages](#protobuf-messages)
- [Field Reference](#field-reference)
- [Error Handling](#error-handling)
- [Performance Considerations](#performance-considerations)
- [Troubleshooting](#troubleshooting)

---

## Architecture

### Overview

`node-cs2` is built on top of `steam-user` and communicates with the CS2/CS:GO Game Coordinator (GC) using protobuf messages. The library provides a high-level API that abstracts away the complexity of protobuf encoding/decoding and message routing.

### Core Components

1. **NodeCS2 Class** (`index.js`)
   - Main entry point
   - Manages GC connection
   - Provides public API methods
   - Handles message sending

2. **Message Handlers** (`handlers.js`)
   - Processes incoming GC messages
   - Decodes protobuf data
   - Emits events for application use

3. **Message IDs** (`language.js`)
   - Maps message names to numeric IDs
   - Used for routing messages

4. **Enums** (`enums.js`)
   - Defines constants (GCConnectionStatus, ItemCustomizationNotification)
   - Used throughout the library

5. **Protobuf Definitions** (`protobufs/generated/`)
   - Auto-generated from `.proto` files
   - Provides message encoding/decoding

### Message Flow

```
Application → NodeCS2 → steam-user → Game Coordinator
                ↓
            EventEmitter
                ↓
         Application Handlers
```

---

## API Reference

### Constructor

```javascript
new NodeCS2(steamUser)
```

**Parameters:**
- `steamUser` (SteamUser) - An instance of `steam-user` v4.2.0+

**Throws:**
- `Error` if `steam-user` version is incompatible

### Methods

#### Connection Methods

##### `helloGC()`
Sends a hello message to the Game Coordinator to establish connection.

```javascript
cs2.helloGC();
```

**Returns:** `undefined`

---

#### Item Inspection

##### `inspectItem(owner, assetid, d, callback)`
Inspects an item from another player's inventory.

**Parameters:**
- `owner` (string|number) - SteamID64 of the item owner
- `assetid` (string|number) - Asset ID of the item
- `d` (string|number) - D parameter (usually class ID)
- `callback` (function, optional) - Callback function `(item) => {}`

**Returns:**
- If callback provided: `undefined`
- If no callback: `Promise<Object>` - Resolves with item data

**Item Object Structure:**
```javascript
{
    itemid: number,
    defindex: number,
    paintindex: number,
    paintseed: number,
    paintwear: number,
    rarity: number,
    quality: number,
    musicindex: number,
    entindex: number,
    petindex: number,
    style: number,
    upgrade_level: number,
    stickers: Array<StickerObject>,
    keychains: Array<KeychainObject>,
    variations: Array<VariationObject>
}
```

**Events Emitted:**
- `inspectItemInfo` - When item data is received
- `inspectItemInfo#<assetid>` - Specific item event
- `inspectItemTimedOut` - When inspection times out
- `inspectItemTimedOut#<assetid>` - Specific timeout event

---

#### Casket Operations

##### `getCasketContents(casketId, callback)`
Gets the contents of a casket (container item).

**Parameters:**
- `casketId` (number) - ID of the casket item
- `callback` (function, optional) - Callback function `(err, items) => {}`

**Returns:**
- If callback provided: `undefined`
- If no callback: `Promise<Array>` - Resolves with array of items

**Events Emitted:**
- `itemCustomizationNotification` - When casket contents are loaded

---

#### Volatile Items

##### `loadVolatileItemContents(volatileItemId, callback)`
Loads the contents of a volatile item (rental/temporary item).

**Parameters:**
- `volatileItemId` (number) - ID of the volatile item
- `callback` (function, optional) - Callback function `(err, items) => {}`

**Returns:**
- If callback provided: `undefined`
- If no callback: `Promise<Array>` - Resolves with array of items

**Timeout:** Configurable via `_volatileItemTimeout` (default: 30000ms)

---

##### `claimVolatileItemReward(defindex, callback)`
Claims a reward from a volatile item.

**Parameters:**
- `defindex` (number) - Definition index of the volatile item
- `callback` (function, optional) - Callback function `(err, itemIds) => {}`

**Returns:**
- If callback provided: `undefined`
- If no callback: `Promise<Array>` - Resolves with array of item IDs

**Timeout:** Configurable via `_volatileItemTimeout` (default: 30000ms)

---

##### `acknowledgeRentalExpiration(crateItemId)`
Acknowledges rental expiration for a crate/item.

**Parameters:**
- `crateItemId` (number) - ID of the crate/item

**Returns:** `undefined`

---

#### Recurring Missions

##### `requestRecurringMissionSchedule(callback)`
Requests the recurring mission schedule.

**Parameters:**
- `callback` (function, optional) - Callback function `(err, schema) => {}`

**Returns:**
- If callback provided: `undefined`
- If no callback: `Promise<Object>` - Resolves with mission schema

**Schema Structure:**
```javascript
{
    missions: [
        {
            period: number,
            mission_templates: Array<Buffer>
        }
    ]
}
```

**Events Emitted:**
- `recurringMissionSchema` - When schema is received

**Timeout:** Configurable via `_missionTimeout` (default: 10000ms)

---

#### XP Shop & Rewards

##### `acknowledgeXPShopTracks()`
Acknowledges XP shop tracks.

**Parameters:** None

**Returns:** `undefined`

---

##### `redeemFreeReward(generationTime, redeemableBalance, items, callback)`
Redeems a free reward.

**Parameters:**
- `generationTime` (number) - Generation time of the reward
- `redeemableBalance` (number) - Redeemable balance
- `items` (Array<number>) - Array of item IDs
- `callback` (function, optional) - Callback function `(err, itemIds) => {}`

**Returns:**
- If callback provided: `undefined`
- If no callback: `Promise<Array>` - Resolves with array of item IDs

**Timeout:** Configurable via `_rewardTimeout` (default: 10000ms)

---

##### `redeemMissionReward(campaignId, redeemId, redeemableBalance, expectedCost, bidControl, callback)`
Redeems a mission reward.

**Parameters:**
- `campaignId` (number) - Campaign ID
- `redeemId` (number) - Redeem ID
- `redeemableBalance` (number) - Redeemable balance
- `expectedCost` (number) - Expected cost
- `bidControl` (number, optional) - Bid control value
- `callback` (function, optional) - Callback function `(err, itemIds) => {}`

**Returns:**
- If callback provided: `undefined`
- If no callback: `Promise<Array>` - Resolves with array of item IDs

**Timeout:** Configurable via `_rewardTimeout` (default: 10000ms)

---

#### Premier Season & Leaderboards

##### `setLeaderboardSafeName(leaderboardSafeName)`
Sets the player's leaderboard safe name.

**Parameters:**
- `leaderboardSafeName` (string) - The safe name for leaderboards

**Returns:** `undefined`

**Throws:**
- `Error` if `leaderboardSafeName` is not a non-empty string

---

#### Crate Opening

##### `openCrate(toolItemId, subjectItemId, forRental, pointsRemaining, callback)`
Opens a crate using a key.

**Parameters:**
- `toolItemId` (number) - The ID of the tool (key) item
- `subjectItemId` (number) - The ID of the crate item
- `forRental` (boolean, optional) - Whether this is for a rental
- `pointsRemaining` (number, optional) - Points remaining
- `callback` (function, optional) - Callback function `(err, itemIds) => {}`

**Returns:**
- If callback provided: `undefined`
- If no callback: `Promise<Array>` - Resolves with array of item IDs

**Timeout:** Configurable via `_crateTimeout` (default: 30000ms)

---

#### Sticker Operations

##### `extractSticker(itemId, stickerSlot, callback)`
Extracts a sticker from an item.

**Parameters:**
- `itemId` (number) - The ID of the item with the sticker
- `stickerSlot` (number) - The slot number of the sticker to extract
- `callback` (function, optional) - Callback function `(err, itemIds) => {}`

**Returns:**
- If callback provided: `undefined`
- If no callback: `Promise<Array>` - Resolves with array of item IDs

**Timeout:** Configurable via `_stickerTimeout` (default: 10000ms)

---

##### `encapsulateSticker(stickerId, callback)`
Encapsulates a sticker.

**Parameters:**
- `stickerId` (number) - The ID of the sticker to encapsulate
- `callback` (function, optional) - Callback function `(err, itemIds) => {}`

**Returns:**
- If callback provided: `undefined`
- If no callback: `Promise<Array>` - Resolves with array of item IDs

**Timeout:** Configurable via `_stickerTimeout` (default: 10000ms)

---

#### Patch Operations

##### `applyPatch(itemId, patchId, patchSlot, callback)`
Applies a patch to an item.

**Parameters:**
- `itemId` (number) - The ID of the item to apply patch to
- `patchId` (number) - The ID of the patch item
- `patchSlot` (number, optional) - The slot number for the patch
- `callback` (function, optional) - Callback function `(err, itemIds) => {}`

**Returns:**
- If callback provided: `undefined`
- If no callback: `Promise<Array>` - Resolves with array of item IDs

**Timeout:** Configurable via `_stickerTimeout` (default: 10000ms)

---

##### `removePatch(itemId, patchSlot, callback)`
Removes a patch from an item.

**Parameters:**
- `itemId` (number) - The ID of the item with the patch
- `patchSlot` (number) - The slot number of the patch to remove
- `callback` (function, optional) - Callback function `(err, itemIds) => {}`

**Returns:**
- If callback provided: `undefined`
- If no callback: `Promise<Array>` - Resolves with array of item IDs

**Timeout:** Configurable via `_stickerTimeout` (default: 10000ms)

---

#### Keychain Operations

##### `applyKeychain(itemId, keychainId, keychainSlot, callback)`
Applies a keychain to an item.

**Parameters:**
- `itemId` (number) - The ID of the item to apply keychain to
- `keychainId` (number) - The ID of the keychain item
- `keychainSlot` (number, optional) - The slot number for the keychain
- `callback` (function, optional) - Callback function `(err, itemIds) => {}`

**Returns:**
- If callback provided: `undefined`
- If no callback: `Promise<Array>` - Resolves with array of item IDs

**Timeout:** Configurable via `_stickerTimeout` (default: 10000ms)

---

##### `removeKeychain(itemId, keychainSlot, callback)`
Removes a keychain from an item.

**Parameters:**
- `itemId` (number) - The ID of the item with the keychain
- `keychainSlot` (number) - The slot number of the keychain to remove
- `callback` (function, optional) - Callback function `(err, itemIds) => {}`

**Returns:**
- If callback provided: `undefined`
- If no callback: `Promise<Array>` - Resolves with array of item IDs

**Timeout:** Configurable via `_stickerTimeout` (default: 10000ms)

---

#### Profile Methods

##### `requestPlayersProfile(steamid, callback)`
Requests a player's profile data.

**Parameters:**
- `steamid` (string|SteamID) - SteamID of the player
- `callback` (function, optional) - Callback function `(err, profile) => {}`

**Returns:**
- If callback provided: `undefined`
- If no callback: `Promise<Object>` - Resolves with profile data

**Timeout:** Configurable via `_profileTimeout` (default: 10000ms)

**Events Emitted:**
- `playersProfile` - When profile is received
- `playersProfile#<steamid64>` - Specific profile event

---

### Instance Properties

#### Connection Status
- `haveGCSession` (boolean) - Whether GC session is active
- `_isInCSGO` (boolean) - Whether CS2/CS:GO is launched

#### XP Shop Account
- `xpShop` (Object) - XP shop account data, automatically populated from the GC

The object contains:
```javascript
{
    redeemable_balance: number, // Current star balance
    xp_tracks: Array<number>,   // Array of XP track IDs
    generation_time: number     // Generation time
}
```

> **Note:** This property is null if the user has no XP shop data. The data is automatically updated via the `xpShopUpdate` event.

#### Timeouts (Configurable)
- `_inspectTimeout` (number) - Inspection timeout in ms (default: 10000)
- `_casketTimeout` (number) - Casket loading timeout in ms (default: 30000)
- `_profileTimeout` (number) - Profile request timeout in ms (default: 10000)
- `_volatileItemTimeout` (number) - Volatile item timeout in ms (default: 30000)
- `_missionTimeout` (number) - Mission request timeout in ms (default: 10000)
- `_rewardTimeout` (number) - Reward redemption timeout in ms (default: 10000)
- `_crateTimeout` (number) - Crate opening timeout in ms (default: 30000)
- `_stickerTimeout` (number) - Sticker/patch/keychain operations timeout in ms (default: 10000)

---

## Event Reference

### Connection Events

#### `connectedToGC`
Emitted when connected to the Game Coordinator.

**No parameters**

---

#### `disconnectedFromGC`
Emitted when disconnected from the Game Coordinator.

**No parameters**

---

#### `gcConnectionStatus`
Emitted when GC connection status changes.

**Parameters:**
- `status` (number) - Connection status code
  - `0` = HAVE_SESSION
  - `1` = GC_GOING_DOWN
  - `2` = NO_SESSION
  - `3` = NO_SESSION_IN_LOGON_QUEUE
  - `4` = NO_STEAM

---

### Item Events

#### `inspectItemInfo`
Emitted when item inspection data is received.

**Parameters:**
- `item` (Object) - Item data object

---

#### `inspectItemInfo#<assetid>`
Emitted for a specific item inspection.

**Parameters:**
- `item` (Object) - Item data object

---

#### `inspectItemTimedOut`
Emitted when an item inspection times out.

**Parameters:**
- `assetid` (number) - Asset ID that timed out

---

#### `itemCustomizationNotification`
Emitted when an item customization notification is received.

**Parameters:**
- `itemIds` (Array<number>) - Array of affected item IDs
- `notificationType` (number) - Notification type (see ItemCustomizationNotification enum)

---

### Profile Events

#### `playersProfile`
Emitted when player profile data is received.

**Parameters:**
- `profile` (Object) - Profile data object

---

#### `playersProfile#<steamid64>`
Emitted for a specific player profile.

**Parameters:**
- `profile` (Object) - Profile data object

---

### New Feature Events

#### `xpShopNotification`
Emitted when XP shop notification is received.

**Parameters:**
- `data` (Object) - XP shop data
  - `prematch` (Object) - Prematch XP shop data
  - `postmatch` (Object) - Postmatch XP shop data
  - `current_xp` (number) - Current XP
  - `current_level` (number) - Current level

---

#### `recurringMissionSchema`
Emitted when recurring mission schema is received.

**Parameters:**
- `schema` (Object) - Mission schema object

---

#### `premierSeasonSummary`
Emitted when premier season summary is received.

**Parameters:**
- `summary` (Object) - Premier season summary data

---

#### `matchmakingSearchStats`
Emitted when matchmaking search statistics are received.

**Parameters:**
- `stats` (Object) - Search statistics object

---

#### `xpShopUpdate`
Emitted when XP shop account data is created, updated, or removed.

**Parameters:**
- `xpShop` (Object) - XP shop account object (or null if removed)

**Example:**
```javascript
cs2.on('xpShopUpdate', (xpShop) => {
    if (xpShop) {
        console.log('XP Shop Balance:', xpShop.redeemable_balance);
        console.log('XP Tracks:', xpShop.xp_tracks);
    }
});
```

---

### System Events

#### `error`
Emitted when an error occurs.

**Parameters:**
- `error` (Error) - Error object

---

#### `debug`
Emitted for debug messages.

**Parameters:**
- `message` (string) - Debug message

---

## Protobuf Messages

### Message IDs

All message IDs are defined in `language.js`. Common message IDs:

- `ClientHello: 4006`
- `Client2GCEconPreviewDataBlockRequest: 2001`
- `Client2GCEconPreviewDataBlockResponse: 2002`
- `CasketItemLoadContents: 2003`
- `VolatileItemLoadContents: 2536`
- `GC2ClientNotifyXPShop: 9221`
- `RequestRecurringMissionSchedule: 9225`
- `RecurringMissionSchema: 9226`
- `PremierSeasonSummary: 9224`

See `language.js` for complete list.

---

## Field Reference

### Item Fields

#### Basic Fields
- `itemid` (number) - Item ID
- `defindex` (number) - Definition index
- `paintindex` (number) - Paint/skin index
- `paintseed` (number) - Paint seed
- `paintwear` (number) - Wear value (0-1)
- `rarity` (number) - Rarity level
- `quality` (number) - Quality level

#### Modern CS2 Fields
- `musicindex` (number) - Music kit index
- `entindex` (number) - Entity index
- `petindex` (number) - Pet/companion index
- `style` (number) - Style variation index
- `upgrade_level` (number) - Item upgrade level

### Sticker/Keychain/Variation Fields

All sticker-like items (stickers, keychains, variations) share the same structure:

```javascript
{
    slot: number,              // Slot number
    sticker_id: number,         // Sticker/item ID
    wear: number,              // Wear value (0-1)
    scale: number,             // Scale factor
    rotation: number,          // Rotation angle
    tint_id: number,          // Tint color ID
    offset_x: number,          // X offset
    offset_y: number,          // Y offset
    offset_z: number,          // Z offset
    pattern: number,           // Pattern index
    highlight_reel: number,    // Highlight reel ID
    wrapped_sticker: number    // Wrapped sticker ID
}
```

---

## Error Handling

### Error Types

1. **Timeout Errors**
   - Occur when operations exceed timeout duration
   - Message: `"<operation> timed out"`
   - Solution: Increase timeout or retry

2. **Protobuf Decoding Errors**
   - Occur when received data is malformed
   - Emitted via `error` event
   - Solution: Check network connection, retry

3. **Validation Errors**
   - Occur when invalid parameters are provided
   - Thrown immediately
   - Solution: Validate input before calling

4. **Connection Errors**
   - Occur when GC connection is lost
   - Emitted via `error` event
   - Solution: Reconnect to GC

### Best Practices

1. Always handle errors in Promise chains
2. Listen for `error` events
3. Validate input before calling methods
4. Use appropriate timeouts for operations
5. Implement retry logic for transient failures

---

## Performance Considerations

### Timeouts

Default timeouts are conservative. Adjust based on your use case:

- **Inspection:** 10s (usually fast)
- **Casket Loading:** 30s (can be slow)
- **Profile Requests:** 10s (usually fast)
- **Volatile Items:** 30s (can be slow)
- **Missions:** 10s (usually fast)
- **Rewards:** 10s (usually fast)

### Batch Operations

When inspecting multiple items, add delays between requests:

```javascript
for (const item of items) {
    await cs2.inspectItem(item.owner, item.assetid, item.classid);
    await new Promise(resolve => setTimeout(resolve, 1000)); // 1s delay
}
```

### Memory Management

The library maintains minimal state. Inventory data is managed by `steam-user`.

---

## Troubleshooting

### Common Issues

#### "Item not found or timed out"
- **Cause:** Item doesn't exist, owner is offline, or GC is slow
- **Solution:** Verify item exists, check owner status, increase timeout

#### "Failed to decode protobuf"
- **Cause:** Malformed data received from GC
- **Solution:** Retry operation, check network connection

#### "Invalid SteamID"
- **Cause:** Invalid SteamID format provided
- **Solution:** Use valid SteamID64 or SteamID object

#### "GC connection lost"
- **Cause:** Network issues or GC restart
- **Solution:** Reconnect to GC, check network

### Debug Mode

Enable debug logging:

```javascript
cs2.on('debug', (message) => {
    console.log('[CS2]', message);
});
```

This will log all GC messages and connection status changes.

---

For usage examples, see [EXAMPLES.md](./EXAMPLES.md).

