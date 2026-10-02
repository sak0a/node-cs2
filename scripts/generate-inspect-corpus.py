#!/usr/bin/env python3
"""Independent synthetic wire corpus. No library/protobuf runtime imports.

Schema: protobufs/cstrike15_gcmessages.proto CEconItemPreviewDataBlock,
Valve GameTracking-CS2 snapshot recorded in each repository. These are NOT
captured Steam replays. struct implements IEEE754; zlib implements CRC32.
Run from either repository; copy fixtures/inspect-corpus.json to the other.
"""
import json
import pathlib
import random
import struct
import zlib

ROOT = pathlib.Path(__file__).resolve().parent.parent

def varint(value):
    value &= (1 << 64) - 1
    output = bytearray()
    while value > 127:
        output.append((value & 127) | 128)
        value >>= 7
    return bytes(output + bytes([value]))

def scalar(field, value):
    return varint(field << 3) + varint(value)

def blob(field, value):
    return varint((field << 3) | 2) + varint(len(value)) + value

def f32(value):
    return struct.unpack('<f', struct.pack('<f', value))[0]

def token(payload, mask=0):
    raw = bytes([mask]) + payload
    crc = zlib.crc32(raw)
    checksum = ((crc & 65535) ^ (len(payload) * crc)) & 0xffffffff
    raw += struct.pack('>I', checksum)
    return bytes([mask] + [b ^ mask for b in raw[1:]]).hex().upper()

FIELDS = {'accountid':1,'itemid':2,'defindex':3,'paintindex':4,'rarity':5,'quality':6,'paintwear':7,'paintseed':8,'killeaterscoretype':9,'killeatervalue':10,'inventory':13,'origin':14,'questid':15,'dropreason':16,'musicindex':17,'entindex':18,'petindex':19,'style':21,'upgrade_level':23,'pet_food_expiration_date':24}
ATTACHMENTS = {'stickers':12,'keychains':20,'variations':22}
SFIELDS = {'slot':1,'sticker_id':2,'wear':3,'scale':4,'rotation':5,'tint_id':6,'offset_x':7,'offset_y':8,'offset_z':9,'pattern':10,'highlight_reel':11,'wrapped_sticker':12}
UNKNOWN = scalar(101, 0xffffffffffffffff) + blob(102, bytes.fromhex('00ff80fe')) + varint(103 << 3 | 5) + bytes.fromhex('78563412') + varint(104 << 3 | 1) + bytes.fromhex('8877665544332211')
NESTED = blob(77, bytes.fromhex('00ffaa')) + scalar(78, 9007199254740993)

def encode(item, unknown=False):
    parts = []
    for key, field in FIELDS.items():
        if key in item:
            value = item[key]
            if key == 'paintwear':
                value = struct.unpack('<I', struct.pack('<f', value))[0]
            parts.append(scalar(field, int(value)))
    for name in item.get('customnames', []):
        parts.append(blob(11, name.encode('utf8')))
    for key, field in ATTACHMENTS.items():
        for attachment in item.get(key, []):
            nested = b''
            for skey, sfield in SFIELDS.items():
                if skey in attachment:
                    value = attachment[skey]
                    nested += (varint(sfield << 3 | 5) + struct.pack('<f', value)) if sfield in [3,4,5,7,8,9] else scalar(sfield, value)
            parts.append(blob(field, nested + (NESTED if unknown else b'')))
    if 'blobdata' in item:
        parts.append(blob(25, bytes.fromhex(item['blobdata'])))
    return b''.join(parts) + (UNKNOWN if unknown else b'')

rng = random.Random(73020261002)
items = []
for index, itemid in enumerate(['0','1','9007199254740991','9007199254740992','9007199254740993','18446744073709551615']):
    items.append((f'uint64-{itemid}', {'itemid':itemid,'defindex':7,'paintindex':44,'paintseed':index,'paintwear':f32([0,1,0.1,0.15,2**-149,0.99999994][index])}))
items.append(('all-fields-unknown', {'accountid':4294967295,'itemid':'18446744073709551615','defindex':7,'paintindex':44,'rarity':6,'quality':0,'paintwear':f32(0.15),'paintseed':4294967295,'killeaterscoretype':0,'killeatervalue':4294967295,'customnames':['','龍🔥 e\u0301','é','龍🔥 e\u0301'],'inventory':0,'origin':0,'questid':0,'dropreason':0,'musicindex':0,'entindex':-2147483648,'petindex':0,'style':0,'upgrade_level':0,'pet_food_expiration_date':4294967295,'blobdata':'00ff80fe000102','stickers':[{'slot':0,'sticker_id':1,'wear':f32(.1),'scale':1,'rotation':-180,'tint_id':0,'offset_x':f32(.2),'offset_y':f32(-.3),'offset_z':0,'pattern':4294967295,'highlight_reel':0,'wrapped_sticker':1}],'keychains':[{'slot':0,'sticker_id':20,'pattern':123,'offset_x':f32(.125)}],'variations':[{'slot':0,'sticker_id':100,'pattern':50}]}))
items.append(('empty-and-explicit-zero', {'itemid':'0','defindex':0,'paintindex':0,'paintseed':0,'paintwear':0,'customnames':[''],'blobdata':'','stickers':[{'slot':0,'sticker_id':0,'wear':0}]}))
for index in range(48):
    items.append((f'seeded-{index:02}', {'itemid':str(rng.randrange(1<<64)),'defindex':rng.choice([1,7,9,16,60]),'paintindex':rng.randrange(2000),'paintseed':rng.randrange(1<<32),'paintwear':f32(rng.random()),'customnames':[rng.choice(['','日本語','a\u0301','🔥','test']) for _ in range(rng.randrange(4))],'stickers':[{'slot':slot,'sticker_id':rng.randrange(1<<32),'wear':f32(rng.random()),'rotation':f32(rng.uniform(-180,180))} for slot in range(rng.randrange(4))],'keychains':[{'slot':0,'sticker_id':rng.randrange(1<<32),'pattern':rng.randrange(1<<32)}],'blobdata':bytes(rng.randrange(256) for _ in range(rng.randrange(16))).hex()}))
valid = []
for index, (name, item) in enumerate(items):
    payload = encode(item, name == 'all-fields-unknown')
    valid.append({'name':name,'protobufHex':payload.hex(),'token':token(payload,[0,165,255][index%3]),'expected':item})
malformed = []
for name, payload in [('truncated-uint64',b'\x10\x80'),('truncated-string',b'\x10\x01\x5a\x05ab'),('truncated-attachment',b'\x10\x01\x62\x03\x08'),('truncated-fixed32',b'\x10\x01\x62\x02\x1d\x00'),('invalid-wire-type',b'\x10\x01\x0f')]:
    malformed.append({'name':name,'protobufHex':payload.hex(),'token':token(payload)})
result = {'formatVersion':1,'provenance':{'kind':'independently-encoded-synthetic','generator':'scripts/generate-inspect-corpus.py','seed':73020261002,'encoding':'Python stdlib varints, struct IEEE754 and zlib CRC32; no project codec or generated protobuf used','schema':'CEconItemPreviewDataBlock and nested Sticker in Valve GameTracking-CS2 cstrike15_gcmessages.proto','liveCapture':False},'unknownSegments':{'top':UNKNOWN.hex(),'nested':NESTED.hex()},'valid':valid,'malformed':malformed}
(ROOT/'fixtures').mkdir(exist_ok=True)
(ROOT/'fixtures'/'inspect-corpus.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
