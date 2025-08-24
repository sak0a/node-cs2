# node-cs2

[![npm version](https://badge.fury.io/js/node-cs2.svg)](https://badge.fury.io/js/node-cs2)
[![Node.js Version](https://img.shields.io/node/v/node-cs2.svg)](https://nodejs.org/)

Modern **CS2/CS:GO Game Coordinator integration** with the latest **GameTracking-CS2 protobuf definitions**. This package provides a simple API for interacting with the Counter-Strike 2 and CS:GO Game Coordinator, with full support for all modern CS2 features.

## 🆕 What's New in This Fork

This fork addresses critical issues with the original `globaloffensive` package and adds comprehensive support for modern CS2 features:

### ✅ **Latest GameTracking-CS2 Protobuf Definitions**
- **All protobuf files updated** from the latest [GameTracking-CS2](https://github.com/SteamDatabase/GameTracking-CS2) repository
- **Future-proof** with current CS2 game definitions
- **Comprehensive field support** for all modern CS2 items

### ✅ **Fixed Missing Fields**
- **`highlight_reel`** support in stickers, keychains, and variations
- **`musicindex`** - Music kit support
- **`entindex`** - Entity index support  
- **`petindex`** - Pet/companion support
- **`style`** - Style variations support
- **`upgrade_level`** - Item upgrade level support

### ✅ **New Array Support**
- **`variations`** - Complete new array for item variations
- **Enhanced stickers array** with all new fields
- **Enhanced keychains array** with all new fields

### ✅ **Enhanced Handler Logic**
- Updated `handlers.js` to process **all new fields**
- Proper field mapping and null handling
- **100% backward compatible** with existing code

## 🐛 **Critical Bug Fixes**

### Missing `highlight_reel` Field
**Problem:** The original package was missing the `highlight_reel` field in inspect responses, causing incomplete data for items with highlight reels.

**Solution:** Updated protobuf definitions and enhanced handlers to properly capture and return `highlight_reel` data.

```javascript
// Before (missing data)
{
  keychains: [
    {
      slot: 0,
      sticker_id: 36,
      offset_x: 3.445085287094116,
      // highlight_reel: MISSING! ❌
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
      highlight_reel: 67890  // ✅ NOW WORKING!
    }
  ]
}
```

## 📦 Installation

```bash
npm install node-cs2
```

## 🔄 Migration from `globaloffensive`

This package is **100% API compatible** with the original `globaloffensive` package:

```javascript
// Old
const GlobalOffensive = require('globaloffensive');

// New - just change the require!
const NodeCS2 = require('node-cs2');

// All your existing code works unchanged!
const cs2 = new NodeCS2(steamUser);
```

## 🚀 Usage

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

// Inspect an item
cs2.inspectItem('76561198057249394', '2569415699', '7115007497');
```

## 🔍 **Inspect URL Support**

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

## 📋 **Complete Field Support**

### Basic Item Fields
- `defindex` - Item definition index
- `paintindex` - Paint/skin index
- `paintseed` - Paint seed
- `paintwear` - Wear value
- `rarity` - Item rarity
- `quality` - Item quality

### Modern CS2 Fields ✨
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

## 🔧 **Development**

### Building from Source
```bash
git clone https://github.com/sak0a/node-cs2.git
cd node-globaloffensive
npm install
npm run generate-protos
```

### Updating Protobuf Definitions
```bash
# Copy latest protobuf files from GameTracking-CS2
# Then regenerate:
npm run generate-protos
```

## 📄 **License**

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 **Credits**

- **Original Author:** [Alex Corn (DoctorMcKay)](https://github.com/DoctorMcKay) - Original `globaloffensive` package
- **Protobuf Definitions:** [SteamDatabase GameTracking-CS2](https://github.com/SteamDatabase/GameTracking-CS2)
- **Fork Maintainer:** [sak0a](https://github.com/sak0a)

## 🐛 **Issues & Support**

If you encounter any issues or need support:
1. Check if the issue exists in the original package
2. Open an issue on [GitHub](https://github.com/sak0a/node-cs2/issues)
3. Provide detailed information about your use case

## 🚀 **Why Use This Fork?**

- ✅ **Up-to-date** with latest CS2 definitions
- ✅ **Bug fixes** for missing fields
- ✅ **Enhanced functionality** with new CS2 features
- ✅ **100% compatible** with existing code
- ✅ **Actively maintained** with GameTracking-CS2 updates
- ✅ **Community-driven** improvements
