# node-cs2

[![npm version](https://badge.fury.io/js/node-cs2.svg)](https://badge.fury.io/js/node-cs2)
[![Node.js Version](https://img.shields.io/node/v/node-cs2.svg)](https://nodejs.org/)

Modern **CS2/CS:GO Game Coordinator integration** with the latest **GameTracking-CS2 protobuf definitions**. This package provides a simple API for interacting with the Counter-Strike 2 and CS:GO Game Coordinator, with full support for all modern CS2 features.

## What's New in This Fork

This fork addresses critical issues with the original `globaloffensive` package and adds comprehensive support for modern CS2 features:

### **Latest GameTracking-CS2 Protobuf Definitions**
- **All protobuf files updated** from the latest [GameTracking-CS2](https://github.com/SteamDatabase/GameTracking-CS2) repository
- **Future-proof** with current CS2 game definitions
- **Comprehensive field support** for all modern CS2 items

### **Fixed Missing Fields**
- **`highlight_reel`** support in stickers, keychains, and variations
- **`wrapped_sticker`** - Wrapped sticker support (**NEW!**)
- **`musicindex`** - Music kit support
- **`entindex`** - Entity index support
- **`petindex`** - Pet/companion support
- **`style`** - Style variations support
- **`upgrade_level`** - Item upgrade level support

### **New Array Support**
- **`variations`** - Complete new array for item variations
- **Enhanced stickers array** with all new fields
- **Enhanced keychains array** with all new fields

### **Enhanced Handler Logic**
- Updated `handlers.js` to process **all new fields**
- Proper field mapping and null handling
- **Code deduplication** - Reusable helper functions
- **Comprehensive error handling** - All protobuf decoding wrapped in try-catch
- **Field validation** - Defensive checks for critical data
- **100% backward compatible** with existing code

## **Critical Bug Fixes**

### Missing Fields (`highlight_reel`, `wrapped_sticker`)
**Problem:** The original package was missing the `highlight_reel` and `wrapped_sticker` fields in inspect responses, causing incomplete data for items with these features.

**Solution:** Updated protobuf definitions and enhanced handlers to properly capture and return all field data, including `highlight_reel` and `wrapped_sticker`.

```javascript
// Before (missing data)
{
  keychains: [
    {
      slot: 0,
      sticker_id: 36,
      offset_x: 3.445085287094116,
      // highlight_reel: MISSING!
    }
  ]
}

// After (complete data)
{
  keychains: [
    {
      slot: 0,
      sticker_id: 36,
      offset_x: 3.445085287094116,
      highlight_reel: 67890  // NOW WORKING!
    }
  ]
}
```

## Installation

```bash
npm install node-cs2
```

## Migration from `globaloffensive`

This package is **100% API compatible** with the original `globaloffensive` package:

```javascript
// Old
const GlobalOffensive = require('globaloffensive');

// New - just change the require!
const NodeCS2 = require('node-cs2');

// All your existing code works unchanged!
const cs2 = new NodeCS2(steamUser);
```

## Usage

```javascript
const SteamUser = require('steam-user');
const NodeCS2 = require('node-cs2');

const user = new SteamUser();
const cs2 = new NodeCS2(user);

user.logOn({
    accountName: 'username',
    password: 'password'
});

user.on('loggedOn', () => {
    console.log('Logged into Steam');
    user.gamesPlayed([730]); // CS2/CS:GO app ID
});

user.on('appLaunched', (appid) => {
    if (appid == 730) {
        console.log('CS2/CS:GO launched');
        cs2.helloGC();
    }
});

cs2.on('connectedToGC', () => {
    console.log('Connected to CS2/CS:GO Game Coordinator');
});

// Inspect an item with full modern field support
cs2.on('inspectItemInfo', (item) => {
    console.log('Item data with all modern fields:', {
        defindex: item.defindex,
        paintindex: item.paintindex,
        paintwear: item.paintwear,
        
        // NEW FIELDS NOW SUPPORTED!
        musicindex: item.musicindex,
        petindex: item.petindex,
        style: item.style,
        upgrade_level: item.upgrade_level,
        
        // ARRAYS WITH FULL FIELD SUPPORT
        stickers: item.stickers, // includes highlight_reel
        keychains: item.keychains, // includes highlight_reel  
        variations: item.variations // NEW! includes highlight_reel
    });
});

// Inspect an item (callback style)
cs2.inspectItem('76561198057249394', '2569415699', '7115007497', (item) => {
    console.log('Item inspected:', item);
});

// Or use Promise/async-await style (NEW!)
try {
    const item = await cs2.inspectItem('76561198057249394', '2569415699', '7115007497');
    console.log('Item inspected:', item);
} catch (err) {
    console.error('Inspection failed:', err);
}
```

## **Inspect URL Support**

Full support for both masked and unmasked inspect URLs:

```javascript
// Unmasked URL (requires Steam client) - NOW WITH FULL FIELD SUPPORT!
const unmaskedUrl = 'steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20S76561198857794835A45540551473D7523863830991655521';

// Extract parameters and inspect
const match = unmaskedUrl.match(/S(\d+)A(\d+)D(\d+)/);
if (match) {
    const [, ownerId, assetId, classId] = match;
    cs2.inspectItem(ownerId, assetId, classId);
}
```

## **Complete Field Support**

### Basic Item Fields
- `defindex` - Item definition index
- `paintindex` - Paint/skin index
- `paintseed` - Paint seed
- `paintwear` - Wear value
- `rarity` - Item rarity
- `quality` - Item quality

### Modern CS2 Fields
- `musicindex` - Music kit index
- `entindex` - Entity index
- `petindex` - Pet/companion index
- `style` - Style variation index
- `upgrade_level` - Item upgrade level

### Arrays with Full Field Support
- `stickers[]` - Sticker applications
- `keychains[]` - Keychain attachments
- `variations[]` - Item variations (**NEW!**)

### Sticker/Keychain/Variation Fields
- `slot` - Attachment slot
- `sticker_id` - Sticker/item ID
- `wear` - Wear value
- `scale` - Scale factor
- `rotation` - Rotation angle
- `tint_id` - Tint color ID
- `offset_x`, `offset_y`, `offset_z` - Position offsets
- `pattern` - Pattern index
- `highlight_reel` - Highlight reel ID (**FIXED!**)
- `wrapped_sticker` - Wrapped sticker ID (**NEW!**)

## **New Features & Improvements**

### High Priority Features (NEW in v2.1.0+)

#### Volatile Items Support
```javascript
// Load volatile item contents
const items = await cs2.loadVolatileItemContents(volatileItemId);

// Claim volatile item reward
await cs2.claimVolatileItemReward(defindex);

// Acknowledge rental expiration
cs2.acknowledgeRentalExpiration(crateItemId);
```

#### Recurring Missions
```javascript
// Request recurring mission schedule
const schema = await cs2.requestRecurringMissionSchedule();

// Listen for mission schema
cs2.on('recurringMissionSchema', (schema) => {
    console.log('Mission schema:', schema);
});
```

#### XP Shop & Rewards
```javascript
// Acknowledge XP shop tracks
cs2.acknowledgeXPShopTracks();

// Redeem free reward
await cs2.redeemFreeReward(generationTime, redeemableBalance, items);

// Redeem mission reward
await cs2.redeemMissionReward(campaignId, redeemId, balance, cost, bidControl);

// Listen for XP shop notifications
cs2.on('xpShopNotification', (data) => {
    console.log('XP Shop:', data.current_xp, 'Level:', data.current_level);
});
```

#### Premier Season & Leaderboards
```javascript
// Set leaderboard safe name
cs2.setLeaderboardSafeName('MySafeName');

// Listen for premier season summary
cs2.on('premierSeasonSummary', (summary) => {
    console.log('Premier season data:', summary);
});

// Listen for matchmaking search stats
cs2.on('matchmakingSearchStats', (stats) => {
    console.log('Search stats:', stats);
});
```

### Promise-Based API
All async methods now support both callbacks and Promises:

```javascript
// Callback style (backward compatible)
cs2.inspectItem(owner, assetid, classid, (item) => {
    console.log(item);
});

// Promise style (new)
const item = await cs2.inspectItem(owner, assetid, classid);
// or
cs2.inspectItem(owner, assetid, classid)
    .then(item => console.log(item))
    .catch(err => console.error(err));
```

**Methods with Promise support:**
- `inspectItem()`
- `getCasketContents()`
- `requestPlayersProfile()`
- `loadVolatileItemContents()` ⭐ NEW
- `claimVolatileItemReward()` ⭐ NEW
- `requestRecurringMissionSchedule()` ⭐ NEW
- `redeemFreeReward()` ⭐ NEW
- `redeemMissionReward()` ⭐ NEW

### Configurable Timeouts
Timeouts are now configurable via instance properties:

```javascript
const cs2 = new NodeCS2(steamUser);
cs2._inspectTimeout = 15000;        // 15 seconds (default: 10000)
cs2._casketTimeout = 45000;        // 45 seconds (default: 30000)
cs2._profileTimeout = 15000;       // 15 seconds (default: 10000)
cs2._volatileItemTimeout = 45000;  // 45 seconds (default: 30000) ⭐ NEW
cs2._missionTimeout = 15000;       // 15 seconds (default: 10000) ⭐ NEW
cs2._rewardTimeout = 15000;        // 15 seconds (default: 10000) ⭐ NEW
```

### Error Handling
- All protobuf decoding is wrapped in try-catch blocks
- Errors are emitted via `emit('error', ...)` for proper error propagation
- Field validation prevents runtime errors from missing data

### Code Quality
- Eliminated code duplication with reusable helper functions
- Comprehensive error handling and field validation
- Better maintainability and extensibility

## **Development**

### Building from Source
```bash
git clone https://github.com/sak0a/node-cs2.git
cd node-cs2
npm install
npm run generate-protos
```

### Updating Protobuf Definitions
```bash
# Copy latest protobuf files from GameTracking-CS2
# Then regenerate:
npm run generate-protos
```

### Protobuf Files
See [PROTOBUF_ANALYSIS.md](./PROTOBUF_ANALYSIS.md) for detailed information about which proto files are used and required.

## **License**

MIT License - see [LICENSE](LICENSE) file for details.

## **Credits**

- **Original Author:** [DoctorMcKay](https://github.com/DoctorMcKay) - Original `globaloffensive` package
- **Protobuf Definitions:** [SteamDatabase GameTracking-CS2](https://github.com/SteamDatabase/GameTracking-CS2)
- **Fork Maintainer:** [sak0a](https://github.com/sak0a)

## **Issues & Support**

If you encounter any issues or need support:
1. Check if the issue exists in the original package
2. Open an issue on [GitHub](https://github.com/sak0a/node-cs2/issues)
3. Provide detailed information about your use case

## **Why Use This Fork?**

- **Up-to-date** with latest CS2 definitions
- **Bug fixes** for missing fields (`highlight_reel`, `wrapped_sticker`)
- **Enhanced functionality** with new CS2 features
- **Promise-based API** for modern async/await support
- **Better error handling** and field validation
- **Improved code quality** with deduplication and maintainability
- **100% backward compatible** with existing code
- **Actively maintained** with GameTracking-CS2 updates
- **Community-driven** improvements
