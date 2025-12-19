# node-cs2 Examples

Comprehensive examples for using the `node-cs2` library.

## Table of Contents

- [Basic Setup](#basic-setup)
- [Item Inspection](#item-inspection)
- [Inventory Management](#inventory-management)
- [Volatile Items](#volatile-items)
- [XP Shop & Rewards](#xp-shop--rewards)
- [Recurring Missions](#recurring-missions)
- [Premier Season & Leaderboards](#premier-season--leaderboards)
- [Event Handling](#event-handling)
- [Error Handling](#error-handling)
- [Advanced Usage](#advanced-usage)

---

## Basic Setup

### Simple Connection

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
    // Ready to use!
});
```

### Using Sentry File (Recommended)

```javascript
const SteamUser = require('steam-user');
const NodeCS2 = require('node-cs2');
const fs = require('fs');

const user = new SteamUser();
const cs2 = new NodeCS2(user);

// Load sentry file if exists
if (fs.existsSync('sentry.bin')) {
    user.logOn({
        accountName: 'your_username',
        password: 'your_password',
        sentry: fs.readFileSync('sentry.bin')
    });
} else {
    user.logOn({
        accountName: 'your_username',
        password: 'your_password'
    });
}

// Save sentry file after login
user.on('loggedOn', () => {
    if (user.sentry) {
        fs.writeFileSync('sentry.bin', user.sentry);
    }
    user.gamesPlayed([730]);
});
```

---

## Item Inspection

### Basic Inspection (Callback)

```javascript
cs2.on('connectedToGC', () => {
    // Inspect an item
    cs2.inspectItem('76561198057249394', '2569415699', '7115007497', (item) => {
        if (!item) {
            console.log('Item not found or timed out');
            return;
        }
        
        console.log('Item inspected:', {
            defindex: item.defindex,
            paintindex: item.paintindex,
            paintwear: item.paintwear,
            stickers: item.stickers,
            keychains: item.keychains,
            variations: item.variations
        });
    });
});
```

### Inspection with Promises

```javascript
cs2.on('connectedToGC', async () => {
    try {
        const item = await cs2.inspectItem('76561198057249394', '2569415699', '7115007497');
        console.log('Item:', item);
        
        // Access modern CS2 fields
        console.log('Music Kit:', item.musicindex);
        console.log('Pet Index:', item.petindex);
        console.log('Style:', item.style);
        console.log('Upgrade Level:', item.upgrade_level);
        
        // Access stickers with all fields
        if (item.stickers) {
            item.stickers.forEach((sticker, index) => {
                console.log(`Sticker ${index}:`, {
                    slot: sticker.slot,
                    sticker_id: sticker.sticker_id,
                    wear: sticker.wear,
                    highlight_reel: sticker.highlight_reel,
                    wrapped_sticker: sticker.wrapped_sticker
                });
            });
        }
    } catch (err) {
        console.error('Inspection failed:', err.message);
    }
});
```

### Inspect from URL

```javascript
// Unmasked URL
const unmaskedUrl = 'steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20S76561198857794835A45540551473D7523863830991655521';

// Extract parameters
const match = unmaskedUrl.match(/S(\d+)A(\d+)D(\d+)/);
if (match) {
    const [, ownerId, assetId, classId] = match;
    const item = await cs2.inspectItem(ownerId, assetId, classId);
    console.log('Item from URL:', item);
}

// Masked URL (requires Steam client)
const maskedUrl = 'steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20M[U:1:123456]A45540551473D7523863830991655521';
// Similar extraction logic...
```

### Handling Timeouts

```javascript
// Set custom timeout
cs2._inspectTimeout = 20000; // 20 seconds

cs2.inspectItem(owner, assetid, classid)
    .then(item => {
        console.log('Item:', item);
    })
    .catch(err => {
        if (err.message.includes('timed out')) {
            console.log('Inspection timed out, retrying...');
            // Retry logic
        } else {
            console.error('Error:', err);
        }
    });
```

---

## Inventory Management

### Get Casket Contents

```javascript
// Using Promise
const casketItems = await cs2.getCasketContents(casketId);
console.log('Casket contains:', casketItems.length, 'items');

// Using callback
cs2.getCasketContents(casketId, (err, items) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Items:', items);
});
```

### Listen for Inventory Updates

```javascript
cs2.on('itemCustomizationNotification', (itemIds, notificationType) => {
    console.log('Notification type:', notificationType);
    console.log('Item IDs:', itemIds);
    
    switch (notificationType) {
        case NodeCS2.ItemCustomizationNotification.CasketAdded:
            console.log('Casket added:', itemIds[0]);
            break;
        case NodeCS2.ItemCustomizationNotification.CasketRemoved:
            console.log('Casket removed:', itemIds[0]);
            break;
        case NodeCS2.ItemCustomizationNotification.CasketContents:
            console.log('Casket contents updated:', itemIds[0]);
            break;
    }
});
```

---

## Volatile Items

### Load Volatile Item Contents

```javascript
// Set custom timeout for volatile items
cs2._volatileItemTimeout = 45000; // 45 seconds

// Load contents
const items = await cs2.loadVolatileItemContents(volatileItemId);
console.log('Volatile item contains:', items.length, 'items');

// With callback
cs2.loadVolatileItemContents(volatileItemId, (err, items) => {
    if (err) {
        console.error('Error loading volatile item:', err);
        return;
    }
    console.log('Items:', items);
});
```

### Claim Volatile Item Reward

```javascript
// Claim reward
await cs2.claimVolatileItemReward(defindex);

// With callback
cs2.claimVolatileItemReward(defindex, (err, itemIds) => {
    if (err) {
        console.error('Error claiming reward:', err);
        return;
    }
    console.log('Reward claimed, items:', itemIds);
});
```

### Acknowledge Rental Expiration

```javascript
// Acknowledge rental expiration
cs2.acknowledgeRentalExpiration(crateItemId);
```

---

## XP Shop & Rewards

### Acknowledge XP Shop Tracks

```javascript
// Acknowledge tracks
cs2.acknowledgeXPShopTracks();
```

### Redeem Free Reward

```javascript
// Redeem free reward
const generationTime = Date.now() / 1000;
const redeemableBalance = 100;
const items = [1234567890, 9876543210];

await cs2.redeemFreeReward(generationTime, redeemableBalance, items);

// With callback
cs2.redeemFreeReward(generationTime, redeemableBalance, items, (err, itemIds) => {
    if (err) {
        console.error('Error redeeming reward:', err);
        return;
    }
    console.log('Reward redeemed, items:', itemIds);
});
```

### Redeem Mission Reward

```javascript
const campaignId = 1;
const redeemId = 123;
const redeemableBalance = 50;
const expectedCost = 25;
const bidControl = 0; // Optional

await cs2.redeemMissionReward(campaignId, redeemId, redeemableBalance, expectedCost, bidControl);

// Without bidControl
await cs2.redeemMissionReward(campaignId, redeemId, redeemableBalance, expectedCost);
```

### Listen for XP Shop Notifications

```javascript
cs2.on('xpShopNotification', (data) => {
    console.log('XP Shop Update:');
    console.log('Current XP:', data.current_xp);
    console.log('Current Level:', data.current_level);
    console.log('Prematch:', data.prematch);
    console.log('Postmatch:', data.postmatch);
});
```

---

## Recurring Missions

### Request Mission Schedule

```javascript
// Request schedule
const schema = await cs2.requestRecurringMissionSchedule();
console.log('Mission schema:', schema);

// With callback
cs2.requestRecurringMissionSchedule((err, schema) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Schema:', schema);
    schema.missions.forEach(mission => {
        console.log('Period:', mission.period);
        console.log('Templates:', mission.mission_templates.length);
    });
});
```

### Listen for Mission Schema

```javascript
cs2.on('recurringMissionSchema', (schema) => {
    console.log('Mission schema received:', schema);
    // Process mission templates...
});
```

---

## Premier Season & Leaderboards

### Set Leaderboard Safe Name

```javascript
// Set safe name
cs2.setLeaderboardSafeName('MySafeName123');

// With validation
try {
    cs2.setLeaderboardSafeName('ValidName');
} catch (err) {
    console.error('Invalid name:', err.message);
}
```

### Listen for Premier Season Summary

```javascript
cs2.on('premierSeasonSummary', (summary) => {
    console.log('Premier Season Summary:');
    console.log('Account ID:', summary.account_id);
    console.log('Season ID:', summary.season_id);
    console.log('Data per week:', summary.data_per_week);
    console.log('Data per map:', summary.data_per_map);
    
    // Process weekly data
    summary.data_per_week.forEach(week => {
        console.log(`Week ${week.week_id}: Rank ${week.rank_id}, Matches: ${week.matches_played}`);
    });
    
    // Process map data
    summary.data_per_map.forEach(map => {
        console.log(`Map ${map.map_id}: ${map.wins}W-${map.losses}L, Kills: ${map.kills}`);
    });
});
```

### Listen for Matchmaking Search Stats

```javascript
cs2.on('matchmakingSearchStats', (stats) => {
    console.log('Matchmaking Search Stats:');
    console.log('Location ID:', stats.gs_location_id);
    console.log('Data Center ID:', stats.data_center_id);
    console.log('Locked In:', stats.num_locked_in);
    console.log('Found Nearby:', stats.num_found_nearby);
    console.log('Note Level:', stats.note_level);
});
```

---

## Event Handling

### Connection Events

```javascript
// GC connection status
cs2.on('connectedToGC', () => {
    console.log('Connected to Game Coordinator');
});

cs2.on('disconnectedFromGC', () => {
    console.log('Disconnected from Game Coordinator');
});

cs2.on('gcConnectionStatus', (status) => {
    console.log('GC Status:', status);
    // 0 = HAVE_SESSION
    // 1 = GC_GOING_DOWN
    // 2 = NO_SESSION
    // 3 = NO_SESSION_IN_LOGON_QUEUE
    // 4 = NO_STEAM
});
```

### Item Events

```javascript
// Item inspection
cs2.on('inspectItemInfo', (item) => {
    console.log('Item inspected:', item.itemid);
});

cs2.on('inspectItemTimedOut', (assetid) => {
    console.log('Inspection timed out for asset:', assetid);
});

// Item customization notifications
cs2.on('itemCustomizationNotification', (itemIds, notificationType) => {
    const typeName = Object.keys(NodeCS2.ItemCustomizationNotification)
        .find(key => NodeCS2.ItemCustomizationNotification[key] === notificationType);
    console.log(`Notification: ${typeName} for items:`, itemIds);
});
```

### Profile Events

```javascript
// Player profile
cs2.on('playersProfile', (profile) => {
    console.log('Profile received:', profile);
});

// Request profile
cs2.requestPlayersProfile('76561198057249394')
    .then(profile => {
        console.log('Profile:', profile);
    });
```

---

## Error Handling

### Try-Catch with Promises

```javascript
try {
    const item = await cs2.inspectItem(owner, assetid, classid);
    console.log('Success:', item);
} catch (err) {
    console.error('Error:', err.message);
    // Handle specific error types
    if (err.message.includes('timed out')) {
        // Retry logic
    } else if (err.message.includes('Invalid')) {
        // Invalid input
    }
}
```

### Error Event Listener

```javascript
cs2.on('error', (err) => {
    console.error('CS2 Error:', err.message);
    // Log to file, send to monitoring service, etc.
});
```

### Callback Error Handling

```javascript
cs2.inspectItem(owner, assetid, classid, (item) => {
    if (!item) {
        console.log('Item not found or timed out');
        return;
    }
    // Process item...
});
```

---

## Crate Opening

### Open a Crate

```javascript
// Open a crate with a key
const toolItemId = 1234567890; // Key item ID
const subjectItemId = 9876543210; // Crate item ID

await cs2.openCrate(toolItemId, subjectItemId);

// With optional parameters
await cs2.openCrate(toolItemId, subjectItemId, false, 100); // forRental, pointsRemaining

// With callback
cs2.openCrate(toolItemId, subjectItemId, (err, itemIds) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Crate opened, items:', itemIds);
});
```

---

## Sticker Operations

### Extract Sticker

```javascript
// Extract sticker from item
const itemId = 1234567890;
const stickerSlot = 0;

await cs2.extractSticker(itemId, stickerSlot);

// With callback
cs2.extractSticker(itemId, stickerSlot, (err, itemIds) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Sticker extracted, items:', itemIds);
});
```

### Encapsulate Sticker

```javascript
// Encapsulate a sticker
const stickerId = 1234567890;

await cs2.encapsulateSticker(stickerId);

// With callback
cs2.encapsulateSticker(stickerId, (err, itemIds) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Sticker encapsulated, items:', itemIds);
});
```

---

## Patch Operations

### Apply Patch

```javascript
// Apply patch to item
const itemId = 1234567890;
const patchId = 9876543210;
const patchSlot = 0; // Optional

await cs2.applyPatch(itemId, patchId, patchSlot);

// Without slot
await cs2.applyPatch(itemId, patchId);

// With callback
cs2.applyPatch(itemId, patchId, patchSlot, (err, itemIds) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Patch applied, items:', itemIds);
});
```

### Remove Patch

```javascript
// Remove patch from item
const itemId = 1234567890;
const patchSlot = 0;

await cs2.removePatch(itemId, patchSlot);

// With callback
cs2.removePatch(itemId, patchSlot, (err, itemIds) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Patch removed, items:', itemIds);
});
```

---

## Keychain Operations

### Apply Keychain

```javascript
// Apply keychain to item
const itemId = 1234567890;
const keychainId = 9876543210;
const keychainSlot = 0; // Optional

await cs2.applyKeychain(itemId, keychainId, keychainSlot);

// Without slot
await cs2.applyKeychain(itemId, keychainId);

// With callback
cs2.applyKeychain(itemId, keychainId, keychainSlot, (err, itemIds) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Keychain applied, items:', itemIds);
});
```

### Remove Keychain

```javascript
// Remove keychain from item
const itemId = 1234567890;
const keychainSlot = 0;

await cs2.removeKeychain(itemId, keychainSlot);

// With callback
cs2.removeKeychain(itemId, keychainSlot, (err, itemIds) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Keychain removed, items:', itemIds);
});
```

---

## Advanced Usage

### Custom Timeouts

```javascript
const cs2 = new NodeCS2(steamUser);

// Configure all timeouts
cs2._inspectTimeout = 15000;        // 15 seconds
cs2._casketTimeout = 45000;          // 45 seconds
cs2._profileTimeout = 15000;         // 15 seconds
cs2._volatileItemTimeout = 45000;    // 45 seconds
cs2._missionTimeout = 15000;        // 15 seconds
cs2._rewardTimeout = 15000;          // 15 seconds
```

### Batch Operations

```javascript
// Inspect multiple items
async function inspectMultiple(items) {
    const results = await Promise.allSettled(
        items.map(item => cs2.inspectItem(item.owner, item.assetid, item.classid))
    );
    
    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(`Item ${index}:`, result.value);
        } else {
            console.error(`Item ${index} failed:`, result.reason);
        }
    });
}
```

### Event-Driven Architecture

```javascript
class ItemTracker {
    constructor(cs2) {
        this.cs2 = cs2;
        this.items = new Map();
        this.setupListeners();
    }
    
    setupListeners() {
        this.cs2.on('inspectItemInfo', (item) => {
            this.items.set(item.itemid, item);
            this.onItemUpdate(item);
        });
        
        this.cs2.on('itemCustomizationNotification', (itemIds, type) => {
            itemIds.forEach(id => {
                if (this.items.has(id)) {
                    this.onItemModified(id, type);
                }
            });
        });
    }
    
    onItemUpdate(item) {
        console.log('Item updated:', item.itemid);
    }
    
    onItemModified(itemId, type) {
        console.log('Item modified:', itemId, type);
    }
}

const tracker = new ItemTracker(cs2);
```

### Debug Mode

```javascript
// Enable debug logging
cs2.on('debug', (message) => {
    console.log('[CS2 Debug]', message);
});

// This will log all GC messages
```

---

## Complete Example: Item Inspector Bot

```javascript
const SteamUser = require('steam-user');
const NodeCS2 = require('node-cs2');

const user = new SteamUser();
const cs2 = new NodeCS2(user);

// Configuration
const INSPECT_URLS = [
    'steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20S76561198857794835A45540551473D7523863830991655521',
    // Add more URLs...
];

// Setup
user.logOn({
    accountName: 'your_username',
    password: 'your_password'
});

user.on('loggedOn', () => {
    user.gamesPlayed([730]);
});

user.on('appLaunched', (appid) => {
    if (appid == 730) {
        cs2.helloGC();
    }
});

cs2.on('connectedToGC', async () => {
    console.log('Connected! Starting inspections...');
    
    for (const url of INSPECT_URLS) {
        const match = url.match(/S(\d+)A(\d+)D(\d+)/);
        if (match) {
            const [, ownerId, assetId, classId] = match;
            try {
                const item = await cs2.inspectItem(ownerId, assetId, classId);
                console.log(`Item ${assetId}:`, {
                    defindex: item.defindex,
                    paintindex: item.paintindex,
                    paintwear: item.paintwear,
                    stickers: item.stickers?.length || 0
                });
            } catch (err) {
                console.error(`Failed to inspect ${assetId}:`, err.message);
            }
            // Wait between inspections
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
});

cs2.on('error', (err) => {
    console.error('CS2 Error:', err);
});
```

---

For more detailed information, see [DETAILED_DOCUMENTATION.md](./DETAILED_DOCUMENTATION.md).

