# Shared inspect wire corpus

`inspect-corpus.json` is committed identically in `sak0a/node-cs2` and
`sak0a/cs2-inspect-lib`. Run `python3 scripts/generate-inspect-corpus.py` and copy
the resulting file to the other repository when extending it. The generator
uses only Python's standard library: explicit protobuf tags/varints, `struct`
IEEE754 conversion, and `zlib.crc32`. Neither project encoder contributes input
bytes or expected values. The seed is fixed at 73020261002.

These are **synthetic independent fixtures, not sanitized Steam captures**.
No authenticated replay was available for this change; passing this corpus is
not evidence that a live GC accepts a mutation or that account prerequisites
are met. The schema is `CEconItemPreviewDataBlock` and its nested `Sticker` in
the repositories' recorded GameTracking-CS2 protocol snapshot.

The 56 valid cases cover uint64 zero, safe-integer boundaries and maximum;
float32 zero, subnormal, rounded fractions and one; uint32 maximum; negative
int32; repeated Unicode names including empty strings and combining marks;
stickers, keychains, variations, transformations, opaque bytes; and unknown
varint, fixed32, fixed64 and length-delimited fields, including nested unknown
fields. Forty-eight cases are reproducible randomized combinations. Five
structurally malformed payloads have correct independent checksums, ensuring
framing validity cannot hide truncated fields. Tests additionally corrupt the
checksum of every valid case.

## Semantic agreement and documented representation differences

- `node-cs2` exposes uint64 item IDs as decimal strings; `cs2-inspect-lib`
  exposes them as bigint. Compare their exact decimal values, never Numbers.
- `node-cs2` exposes binary data as Buffer; the browser core uses Uint8Array.
  Compare the byte sequence, including explicit empty bytes.
- Missing optional node-cs2 scalars generally appear as null. The inspect core
  omits optional values and supplies its historical required model defaults
  (defindex, paintindex, paintseed and paintwear = 0). The corpus compares all
  explicitly encoded supported fields; defaults are not evidence of wire
  presence.
- An absent repeated name field is `[]` in node-cs2 and may be undefined in
  the inspect model. Both retain every encoded occurrence, including empty
  names; the compatibility `customname` alias is the last occurrence.
- Floats are compared after IEEE754 float32 encoding. Unknown wire fields
  are not part of either decoded item model. `InspectDocument` additionally
  retains original unknown field segments and opaque bytes when editing;
  nested attachment edits preserve that attachment's unknown segments.
- The historical inspect decoder accepts legacy unchecked zero CRC framing.
  Strict `decodeInspectDocument` and node-cs2 embedded decoding verify CRC.

The packed inspect consumer validation installs both libraries and compares
the actual outputs field by field. Set `NODE_CS2_PACKAGE` to a prerequisite
npm tarball to validate unreleased dependency combinations, and rerun without
that override after publication before claiming registry compatibility.
