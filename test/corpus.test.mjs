import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { describe, it, expect, vi } from 'vitest';
const require = createRequire(import.meta.url);
const NodeCS2 = require('../index.js');
const Language = require('../language.js');
const corpus = JSON.parse(readFileSync(new URL('../fixtures/inspect-corpus.json', import.meta.url), 'utf8'));
const link = token => `steam://rungame/730/0/+csgo_econ_action_preview%20${token}`;
function instance() { const cs2 = Object.create(NodeCS2.prototype); cs2._send = vi.fn(); return cs2; }
function expected(item) { return { ...item, ...(item.blobdata === undefined ? {} : { blobdata: Buffer.from(item.blobdata, 'hex') }) }; }
// The same bytes and expectations are committed in cs2-inspect-lib. A schema
// encoder is deliberately not used to construct any input in this suite.
describe('shared independent inspect corpus', () => {
  it.each(corpus.valid)('$name decodes through public embedded API and real GC handler', async fixture => {
    const cs2 = instance();
    const embedded = await cs2.inspectItem(link(fixture.token));
    expect(embedded).toMatchObject(expected(fixture.expected));
    expect(cs2._send).not.toHaveBeenCalled();
    const event = vi.fn(); cs2.on('inspectItemInfo', event);
    const bytes = Buffer.from(fixture.protobufHex, 'hex');
    // Independent field-1 length-delimited GC envelope, no generated encode().
    const length = []; let remaining = bytes.length;
    do { length.push((remaining & 127) | (remaining > 127 ? 128 : 0)); remaining >>>= 7; } while (remaining);
    cs2._handlers[Language.Client2GCEconPreviewDataBlockResponse].call(cs2, Buffer.concat([Buffer.from([10, ...length]), bytes]));
    expect(event).toHaveBeenCalledWith(embedded);
    if (fixture.expected.customnames?.length) expect(embedded.customname).toBe(fixture.expected.customnames.at(-1));
  });
  it.each(corpus.malformed)('rejects $name with a valid independently computed checksum', fixture => {
    const cs2 = instance();
    expect(() => cs2.inspectItem(link(fixture.token))).toThrow();
    expect(cs2._send).not.toHaveBeenCalled();
  });
  it('rejects deterministic checksum corruption for every generated item', () => {
    for (const fixture of corpus.valid) {
      const corrupted = fixture.token.slice(0, -2) + (fixture.token.slice(-2) === '00' ? '01' : '00');
      expect(() => instance().inspectItem(link(corrupted))).toThrow(/checksum/i);
    }
  });
});
