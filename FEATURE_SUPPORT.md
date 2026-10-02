# Feature support and verification

Evidence date: **2026-10-02**. Protocol snapshot: SteamDatabase/GameTracking-CS2
`3fc98e763328f7d1627405b389d1b6b69c5b0e38` (2026-09-25), checked into `protobufs/`.

“Payload” means actual transport bytes agree with separately written wire fixtures.
“Decode” means independent incoming wire bytes reach the public event/result.
“Lifecycle” means an offline fake Steam transport exercises real dispatch and cleanup;
it does **not** establish server acceptance. “Partial” lists the tested subset.
No authenticated live evidence or sanitized account capture was available for this release.
The fixture corpus is synthetic and independently encoded; it is not described as a Steam replay.

| Feature / public API | Outgoing payload | Response decoding | Offline lifecycle | Live behavior / prerequisites |
|---|---|---|---|---|
| Legacy `inspectItem` | Verified | Verified | Concurrent IDs, same-ID queue, timeout, late/duplicate replies, cancel, disconnect, callback/Promise | Unverified; logged-in account, GC session, valid inspect link |
| Embedded `inspectItem` | Local; no send | Verified: masked/unmasked, uint64, float32, Unicode, repeated names, opaque bytes, unknown fields | Callback/Promise parity | Local operation; Steam not required |
| `requestPlayersProfile` | Verified | Verified, including multiple profiles | Success, callback/Promise timeout cleanup | Unverified; GC session, valid profile |
| `requestRecurringMissionSchedule` | Verified | Verified | Shared request lifecycle; response dispatch | Unverified; account/region mission availability |
| `getCasketContents` | Verified | Customization notification verified | Cached/empty behavior retained; shared request lifecycle | Unverified; owned storage unit and accessible contents |
| `loadVolatileItemContents` | Verified | Assumes `CasketContents` notification | Synchronous response, unrelated notification rejection, shared item queue | Unverified; owned volatile item. Notification association remains a hypothesis |
| `extractSticker`, `encapsulateSticker` | Verified against schema | Notification item/type decoding verified | Same-item serialization, wrong item/type, duplicate reply, cleanup | Unverified; eligible sticker/item, any required tool. Notification association not live-proven |
| `applyPatch`, `removePatch`, `applyKeychain` | Verified against schema | Notification item/type decoding verified | Same-item serialization, mixed operations, timeout uncertainty, callback/Promise parity | Unverified; eligible designated items/slots. Notification association not live-proven |
| `removeKeychain` | Verified | No response awaited | Fire-and-forget only | Unverified; attached charm and applicable removal prerequisites |
| `openCrate` | Verified, including explicit zero/false | Notification decoder verified; subject-ID association assumed | Shared item queue; existing callback behavior tested | Unverified; owned crate/key, account eligibility. A response that omits the subject ID will time out |
| `redeemFreeReward`, `claimVolatileItemReward` | Verified | Free-reward notification decoded | Shared global reward lane; no request ID; sequential replies | Unverified; eligible reward/balance; volatile-to-free-reward association assumed |
| `redeemMissionReward` | Verified | Customization decoder verified | Shared mission-reward lane | Unverified; eligible mission/cost/balance |
| Inventory create/update/destroy/multiple | Incoming only | Verified | Duplicate events, reordered versions, tombstones, truncated attributes | Unverified; live inventory cache traffic |
| `requestGame`, `requestLiveGames`, `requestRecentGames`, `requestLiveGameForUser` | Verified | Match-list event verified | Event-only; no request Promise | Unverified; valid sharecode/user, available matches |
| `nameItem`, `deleteItem`, `craft`, `addToCasket`, `removeFromCasket` | Verified | Craft parser rejects truncation; inventory decoder verified | Fire-and-forget; no operation success assertion | Unverified; owned eligible items/tools; destructive operations excluded from runner |
| `commendPlayer`, `setLeaderboardSafeName`, `acknowledgeRentalExpiration`, `acknowledgeXPShopTracks`, `ackPetEvent` | Verified | No operation response awaited | Fire-and-forget only | Unverified; relevant account, item, or match prerequisites |
| Account data, XP shop, mission, match, search-stat events | Incoming only | Verified with independent bytes | Event dispatch | Unverified; event-specific account activity |
| Premier season summary | Incoming only | Schema-derived type; not independently fixture-verified | Existing handler only | Unverified; eligible Premier season history |
| GC connect/reconnect | Existing hello encoding; not independently verified | Welcome/status parser exercised | Timer teardown, reconnect scheduling, disposal | Unverified; Steam and GC availability |

Evidence is in `test/payloads.test.mjs`, `test/lifecycle.test.mjs`,
`test/corpus.test.mjs`, `test/live-runner.test.mjs`, `test/types/usage.ts`, and
`scripts/verify-consumers.js`. CI installs packed artifacts in separate consumer
projects and exercises real steam-user 4.2.0, 4.29.3, and 5.3.0 constructors on
Node 14, 16, 18, 20, 22, and 24. Runtime support does not imply upstream security
maintenance of old Node versions. Test/lint tooling itself requires Node 24.

## Lifecycle and migration notes

Existing callback and Promise call signatures remain supported. Inspect callbacks
retain their historical success-only signature; use `inspectItemTimedOut` for their
timeout event, or use the Promise overload for structured failure handling. Profile
callbacks continue receiving either a profile or an Error. Mutation callbacks remain
error-first. Promise overload declarations now correctly infer Promise return types.

`cancelPendingRequests()` rejects active and queued requests and clears their timers
and listeners. `dispose()` also permanently removes this instance's Steam transport
listeners. Neither method retries a request. External event listeners are preserved.

Promise rejections and error-first callbacks use `NodeCS2.RequestError` with `code`
(`TIMEOUT`, `CANCELLED`, `DISCONNECTED`, `DISPOSED`, `NOT_CONNECTED`, `SEND_FAILED`,
`UNCERTAIN_PREVIOUS_RESULT`) and `uncertain`. A sent mutation that times out or loses
its connection may already have happened. Reconcile the inventory before deciding
what to do; **never automatically retry it**.

Requests with the same inspect/profile key or item-mutation key are serialized.
Rewards without a request identifier are serialized globally within their notification
class. Once a sent request fails or is cancelled, its key is quarantined for that
client's lifetime: subsequent queued/new work receives `UNCERTAIN_PREVIOUS_RESULT`.
A reconnect does not reset quarantine. After independently reconciling the result,
dispose the client and construct a new one to begin a new correlation lifetime.
Unsent failures do not quarantine a key. Different keys remain usable.

Serialization prevents simultaneous ambiguous requests and a synchronous duplicate
response from completing queued work. The protocol cannot distinguish an arbitrarily
late duplicate of a successful operation from the response to a later operation on
the same key. Do not interpret a notification alone as proof of a mutation; verify
inventory state. Inventory messages lacking versions can be deduplicated by content,
but cannot be reliably reordered. Version tombstones last until a fresh welcome cache.
Fire-and-forget APIs have no request lifecycle and remain caller-coordinated.

Decoded event types are generated from the checked-in schema in `types/responses.d.ts`.
64-bit integers are decimal strings, absent scalars/messages are null, and repeated
fields are arrays. `ItemInfo.accountid` correctly reflects the wire's uint32 number.
Absent paintwear now stays null instead of being coerced to zero. Malformed wire
payloads (including nested truncations) are rejected before protobuf decoding; attach
an `error` listener to observe incoming decoding failures as with other GC errors.

## Opt-in authenticated live runner

Nothing authenticates during `npm test`. To run the default read-only self-profile
case, provide credentials through your environment and explicitly enable the runner:

```sh
CS2_LIVE=1 STEAM_REFRESH_TOKEN=... npm run test:live
```

Alternatively set `STEAM_ACCOUNT_NAME`, `STEAM_PASSWORD`, and, if needed,
`STEAM_TWO_FACTOR_CODE`. Do not commit credentials. No refresh token is written to
disk. Select a single named case with `-- --case NAME`; there is no “all mutations”
option. `CS2_LIVE_CONFIG` points to a local JSON file, for example:

```json
{
  "testItemIds": ["111", "222"],
  "cases": {
    "inspect-test-item": { "method": "inspect", "args": ["M1A111D3"] },
    "apply-test-patch": {
      "method": "applyPatch", "args": ["111", "222", 0],
      "expectedInventory": [{ "id": "222", "present": false }]
    }
  }
}
```

Replace these illustrative IDs with sacrificial items in your own inventory. All
consumed/modified IDs must appear in `testItemIds`, exist before the operation, and
have an explicit postcondition which does not already hold. For a present-item
postcondition supply `properties` (exact values of normalized inventory properties).
Use a postcondition specific enough to demonstrate the intended result; patch tool
consumption alone may be weaker evidence than also asserting the target's attributes.
The runner requires both the method's correlated notification and that postcondition.
It invokes a mutation exactly once; failure to observe the postcondition is uncertain.

Supported read methods: `profile`, `inspect`, `missions`, `casket`. Individually
selectable mutations: `applyPatch`, `removePatch`, `extractSticker`,
`encapsulateSticker`, `applyKeychain`, `openCrate`. Other mutations remain excluded
until a meaningful automated state assertion is available. There are no automatic
retries, including after Steam/GC timeout, disconnect, or ambiguous notification.

The sanitized JSON report records UTC time, case name, method, protocol snapshot,
and outcome. Exit codes: 0 passed; 1 assertion failure; 2 unavailable account/config
prerequisite; 3 Steam/GC outage; 4 uncertain mutation. Missing acknowledgements can
also indicate a protocol mismatch: an “outage” result is not proof of its cause.
A successful send never counts as a pass. Retain reports alongside sanitized inventory
evidence before upgrading any matrix entry to live-verified; include account
prerequisites, verification date, exact snapshot, and the operation-specific assertion.
