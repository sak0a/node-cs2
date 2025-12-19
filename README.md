# node-cs2

[![npm version](https://badge.fury.io/js/node-cs2.svg)](https://badge.fury.io/js/node-cs2)
[![Node.js Version](https://img.shields.io/node/v/node-cs2.svg)](https://nodejs.org/)

Modern **CS2/CS:GO Game Coordinator integration** with the latest **GameTracking-CS2 protobuf definitions**. This package provides a simple API for interacting with the Counter-Strike 2 and CS:GO Game Coordinator, with full support for all modern CS2 features.

## Features

- ✅ **Latest Protobuf Definitions** - Always up-to-date with GameTracking-CS2
- ✅ **Complete Field Support** - All modern CS2 fields including `highlight_reel`, `wrapped_sticker`, `variations`
- ✅ **Promise-Based API** - Modern async/await support with backward-compatible callbacks
- ✅ **Volatile Items** - Support for rental items and temporary items
- ✅ **XP Shop & Rewards** - Redeem rewards and track XP progress
- ✅ **Recurring Missions** - Request and track mission schedules
- ✅ **Premier Season** - Access premier season data and leaderboards
- ✅ **Enhanced Error Handling** - Comprehensive error detection and validation
- ✅ **100% Backward Compatible** - Drop-in replacement for `globaloffensive`

## Installation

```bash
npm install node-cs2
```

## Quick Start

```javascript
const SteamUser = require('steam-user');
const NodeCS2 = require('node-cs2');

const user = new SteamUser();
const cs2 = new NodeCS2(user);

user.logOn({
    accountName: 'your_username',
    password: 'your_password'
});

user.on('loggedOn', () => {
    user.gamesPlayed([730]); // CS2/CS:GO app ID
});

user.on('appLaunched', (appid) => {
    if (appid == 730) {
        cs2.helloGC();
    }
});

cs2.on('connectedToGC', async () => {
    // Inspect an item
    const item = await cs2.inspectItem('76561198057249394', '2569415699', '7115007497');
    console.log('Item:', item);
});
```

## Core Features

### Item Inspection
```javascript
// Promise style
const item = await cs2.inspectItem(owner, assetid, classid);

// Callback style
cs2.inspectItem(owner, assetid, classid, (item) => {
    console.log(item);
});
```

### Volatile Items
```javascript
// Load volatile item contents
const items = await cs2.loadVolatileItemContents(volatileItemId);

// Claim volatile item reward
await cs2.claimVolatileItemReward(defindex);
```

### XP Shop & Rewards
```javascript
// Redeem free reward
await cs2.redeemFreeReward(generationTime, redeemableBalance, items);

// Listen for XP shop updates
cs2.on('xpShopNotification', (data) => {
    console.log('XP:', data.current_xp, 'Level:', data.current_level);
});
```

### Recurring Missions
```javascript
// Request mission schedule
const schema = await cs2.requestRecurringMissionSchedule();
```

### Premier Season
```javascript
// Set leaderboard safe name
cs2.setLeaderboardSafeName('MySafeName');

// Listen for premier season data
cs2.on('premierSeasonSummary', (summary) => {
    console.log('Premier season:', summary);
});
```

### Crate Opening & Item Customization
```javascript
// Open a crate
await cs2.openCrate(toolItemId, subjectItemId);

// Extract/encapsulate stickers
await cs2.extractSticker(itemId, stickerSlot);
await cs2.encapsulateSticker(stickerId);

// Apply/remove patches
await cs2.applyPatch(itemId, patchId, patchSlot);
await cs2.removePatch(itemId, patchSlot);

// Apply/remove keychains
await cs2.applyKeychain(itemId, keychainId, keychainSlot);
await cs2.removeKeychain(itemId, keychainSlot);
```

## Documentation

- **[EXAMPLES.md](./EXAMPLES.md)** - Comprehensive usage examples
- **[DETAILED_DOCUMENTATION.md](./DETAILED_DOCUMENTATION.md)** - Complete API reference and technical details
- **[MEDIUM_PRIORITY_FEATURES.md](./MEDIUM_PRIORITY_FEATURES.md)** - Feature implementation status

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

## What's Fixed

- ✅ **Missing Fields** - `highlight_reel` and `wrapped_sticker` now properly extracted
- ✅ **Modern CS2 Support** - All new CS2 fields and arrays supported
- ✅ **Error Handling** - Comprehensive error detection and validation
- ✅ **Code Quality** - Deduplication, better maintainability

## Requirements

- Node.js >= 14.0.0
- steam-user >= 4.2.0

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Credits

- **Original Author:** [DoctorMcKay](https://github.com/DoctorMcKay) - Original `globaloffensive` package
- **Protobuf Definitions:** [SteamDatabase GameTracking-CS2](https://github.com/SteamDatabase/GameTracking-CS2)
- **Fork Maintainer:** [sak0a](https://github.com/sak0a)

## Support

- **Issues:** [GitHub Issues](https://github.com/sak0a/node-cs2/issues)
- **Examples:** See [EXAMPLES.md](./EXAMPLES.md)
- **Documentation:** See [DETAILED_DOCUMENTATION.md](./DETAILED_DOCUMENTATION.md)
