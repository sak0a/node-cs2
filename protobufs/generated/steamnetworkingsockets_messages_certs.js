/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    var $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $RangeError = $util.global.RangeError, $TypeError = $util.global.TypeError, $parseInt = $util.global.parseInt, $String = $util.global.String, $Array = $util.global.Array, $Number = $util.global.Number, $BigInt = $util.global.BigInt;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.CMsgSteamNetworkingIdentityLegacyBinary = (function() {
    
        /**
         * Properties of a CMsgSteamNetworkingIdentityLegacyBinary.
         * @typedef {Object} CMsgSteamNetworkingIdentityLegacyBinary.$Properties
         * @property {number|Long|null} [steam_id] CMsgSteamNetworkingIdentityLegacyBinary steam_id
         * @property {Uint8Array|null} [generic_bytes] CMsgSteamNetworkingIdentityLegacyBinary generic_bytes
         * @property {string|null} [generic_string] CMsgSteamNetworkingIdentityLegacyBinary generic_string
         * @property {Uint8Array|null} [ipv6_and_port] CMsgSteamNetworkingIdentityLegacyBinary ipv6_and_port
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
    
        /**
         * Properties of a CMsgSteamNetworkingIdentityLegacyBinary.
         * @exports ICMsgSteamNetworkingIdentityLegacyBinary
         * @interface ICMsgSteamNetworkingIdentityLegacyBinary
         * @augments CMsgSteamNetworkingIdentityLegacyBinary.$Properties
         * @deprecated Use CMsgSteamNetworkingIdentityLegacyBinary.$Properties instead.
         */
    
        /**
         * Shape of a CMsgSteamNetworkingIdentityLegacyBinary.
         * @typedef {CMsgSteamNetworkingIdentityLegacyBinary.$Properties} CMsgSteamNetworkingIdentityLegacyBinary.$Shape
         */
    
        /**
         * Constructs a new CMsgSteamNetworkingIdentityLegacyBinary.
         * @exports CMsgSteamNetworkingIdentityLegacyBinary
         * @classdesc Represents a CMsgSteamNetworkingIdentityLegacyBinary.
         * @constructor
         * @param {CMsgSteamNetworkingIdentityLegacyBinary.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var CMsgSteamNetworkingIdentityLegacyBinary = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };
    
        /**
         * CMsgSteamNetworkingIdentityLegacyBinary steam_id.
         * @member {number|Long} steam_id
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @instance
         */
        CMsgSteamNetworkingIdentityLegacyBinary.prototype.steam_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamNetworkingIdentityLegacyBinary generic_bytes.
         * @member {Uint8Array} generic_bytes
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @instance
         */
        CMsgSteamNetworkingIdentityLegacyBinary.prototype.generic_bytes = $util.newBuffer([]);
    
        /**
         * CMsgSteamNetworkingIdentityLegacyBinary generic_string.
         * @member {string} generic_string
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @instance
         */
        CMsgSteamNetworkingIdentityLegacyBinary.prototype.generic_string = "";
    
        /**
         * CMsgSteamNetworkingIdentityLegacyBinary ipv6_and_port.
         * @member {Uint8Array} ipv6_and_port
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @instance
         */
        CMsgSteamNetworkingIdentityLegacyBinary.prototype.ipv6_and_port = $util.newBuffer([]);
    
        /**
         * Creates a new CMsgSteamNetworkingIdentityLegacyBinary instance using the specified properties.
         * @function create
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @static
         * @param {CMsgSteamNetworkingIdentityLegacyBinary.$Properties=} [properties] Properties to set
         * @returns {CMsgSteamNetworkingIdentityLegacyBinary} CMsgSteamNetworkingIdentityLegacyBinary instance
         * @type {{
         *   (properties: CMsgSteamNetworkingIdentityLegacyBinary.$Shape): CMsgSteamNetworkingIdentityLegacyBinary & CMsgSteamNetworkingIdentityLegacyBinary.$Shape;
         *   (properties?: CMsgSteamNetworkingIdentityLegacyBinary.$Properties): CMsgSteamNetworkingIdentityLegacyBinary;
         * }}
         */
        CMsgSteamNetworkingIdentityLegacyBinary.create = function(properties) {
            return new CMsgSteamNetworkingIdentityLegacyBinary(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamNetworkingIdentityLegacyBinary message. Does not implicitly {@link CMsgSteamNetworkingIdentityLegacyBinary.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @static
         * @param {CMsgSteamNetworkingIdentityLegacyBinary.$Properties} message CMsgSteamNetworkingIdentityLegacyBinary message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamNetworkingIdentityLegacyBinary.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.generic_bytes != null && $Object.hasOwnProperty.call(message, "generic_bytes"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.generic_bytes);
            if (message.generic_string != null && $Object.hasOwnProperty.call(message, "generic_string"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.generic_string);
            if (message.ipv6_and_port != null && $Object.hasOwnProperty.call(message, "ipv6_and_port"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.ipv6_and_port);
            if (message.steam_id != null && $Object.hasOwnProperty.call(message, "steam_id"))
                writer.uint32(/* id 16, wireType 1 =*/129).fixed64(message.steam_id);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamNetworkingIdentityLegacyBinary message, length delimited. Does not implicitly {@link CMsgSteamNetworkingIdentityLegacyBinary.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @static
         * @param {CMsgSteamNetworkingIdentityLegacyBinary.$Properties} message CMsgSteamNetworkingIdentityLegacyBinary message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamNetworkingIdentityLegacyBinary.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamNetworkingIdentityLegacyBinary message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamNetworkingIdentityLegacyBinary & CMsgSteamNetworkingIdentityLegacyBinary.$Shape} CMsgSteamNetworkingIdentityLegacyBinary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamNetworkingIdentityLegacyBinary.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.CMsgSteamNetworkingIdentityLegacyBinary();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 16: {
                        if (wireType !== 1)
                            break;
                        message.steam_id = reader.fixed64();
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.generic_bytes = reader.bytes();
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.generic_string = reader.string();
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        message.ipv6_and_port = reader.bytes();
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };
    
        /**
         * Decodes a CMsgSteamNetworkingIdentityLegacyBinary message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamNetworkingIdentityLegacyBinary & CMsgSteamNetworkingIdentityLegacyBinary.$Shape} CMsgSteamNetworkingIdentityLegacyBinary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamNetworkingIdentityLegacyBinary.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };
    
        /**
         * Verifies a CMsgSteamNetworkingIdentityLegacyBinary message.
         * @function verify
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamNetworkingIdentityLegacyBinary.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.steam_id != null && $Object.hasOwnProperty.call(message, "steam_id"))
                if (!$util.isInteger(message.steam_id) && !(message.steam_id && $util.isInteger(message.steam_id.low) && $util.isInteger(message.steam_id.high)))
                    return "steam_id: integer|Long expected";
            if (message.generic_bytes != null && $Object.hasOwnProperty.call(message, "generic_bytes"))
                if (!(message.generic_bytes && typeof message.generic_bytes.length === "number" || $util.isString(message.generic_bytes)))
                    return "generic_bytes: buffer expected";
            if (message.generic_string != null && $Object.hasOwnProperty.call(message, "generic_string"))
                if (!$util.isString(message.generic_string))
                    return "generic_string: string expected";
            if (message.ipv6_and_port != null && $Object.hasOwnProperty.call(message, "ipv6_and_port"))
                if (!(message.ipv6_and_port && typeof message.ipv6_and_port.length === "number" || $util.isString(message.ipv6_and_port)))
                    return "ipv6_and_port: buffer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamNetworkingIdentityLegacyBinary message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamNetworkingIdentityLegacyBinary} CMsgSteamNetworkingIdentityLegacyBinary
         */
        CMsgSteamNetworkingIdentityLegacyBinary.fromObject = function (object, _depth) {
            if (object instanceof $root.CMsgSteamNetworkingIdentityLegacyBinary)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".CMsgSteamNetworkingIdentityLegacyBinary: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.CMsgSteamNetworkingIdentityLegacyBinary();
            if (object.steam_id != null)
                if ($util.Long)
                    message.steam_id = $util.Long.fromValue(object.steam_id, true);
                else if (typeof object.steam_id === "string")
                    message.steam_id = $parseInt(object.steam_id, 10);
                else if (typeof object.steam_id === "number")
                    message.steam_id = object.steam_id;
                else if (typeof object.steam_id === "object")
                    message.steam_id = new $util.LongBits(object.steam_id.low >>> 0, object.steam_id.high >>> 0).toNumber(true);
            if (object.generic_bytes != null)
                if (typeof object.generic_bytes === "string")
                    $util.base64.decode(object.generic_bytes, message.generic_bytes = $util.newBuffer($util.base64.length(object.generic_bytes)), 0);
                else if (object.generic_bytes.length >= 0)
                    message.generic_bytes = object.generic_bytes;
            if (object.generic_string != null)
                message.generic_string = $String(object.generic_string);
            if (object.ipv6_and_port != null)
                if (typeof object.ipv6_and_port === "string")
                    $util.base64.decode(object.ipv6_and_port, message.ipv6_and_port = $util.newBuffer($util.base64.length(object.ipv6_and_port)), 0);
                else if (object.ipv6_and_port.length >= 0)
                    message.ipv6_and_port = object.ipv6_and_port;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamNetworkingIdentityLegacyBinary message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @static
         * @param {CMsgSteamNetworkingIdentityLegacyBinary} message CMsgSteamNetworkingIdentityLegacyBinary
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamNetworkingIdentityLegacyBinary.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.defaults) {
                if (options.bytes === $String)
                    object.generic_bytes = "";
                else {
                    object.generic_bytes = [];
                    if (options.bytes !== $Array)
                        object.generic_bytes = $util.newBuffer(object.generic_bytes);
                }
                object.generic_string = "";
                if (options.bytes === $String)
                    object.ipv6_and_port = "";
                else {
                    object.ipv6_and_port = [];
                    if (options.bytes !== $Array)
                        object.ipv6_and_port = $util.newBuffer(object.ipv6_and_port);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.steam_id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                } else
                    object.steam_id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
            }
            if (message.generic_bytes != null && $Object.hasOwnProperty.call(message, "generic_bytes"))
                object.generic_bytes = options.bytes === $String ? $util.base64.encode(message.generic_bytes, 0, message.generic_bytes.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.generic_bytes) : message.generic_bytes;
            if (message.generic_string != null && $Object.hasOwnProperty.call(message, "generic_string"))
                object.generic_string = message.generic_string;
            if (message.ipv6_and_port != null && $Object.hasOwnProperty.call(message, "ipv6_and_port"))
                object.ipv6_and_port = options.bytes === $String ? $util.base64.encode(message.ipv6_and_port, 0, message.ipv6_and_port.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.ipv6_and_port) : message.ipv6_and_port;
            if (message.steam_id != null && $Object.hasOwnProperty.call(message, "steam_id"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.steam_id = typeof message.steam_id === "number" ? $BigInt(message.steam_id) : $util.Long.fromBits(message.steam_id.low >>> 0, message.steam_id.high >>> 0, true).toBigInt();
                else if (typeof message.steam_id === "number")
                    object.steam_id = options.longs === $String ? $String(message.steam_id) : message.steam_id;
                else
                    object.steam_id = options.longs === $String ? $util.Long.prototype.toString.call(message.steam_id) : options.longs === $Number ? new $util.LongBits(message.steam_id.low >>> 0, message.steam_id.high >>> 0).toNumber(true) : message.steam_id;
            return object;
        };
    
        /**
         * Converts this CMsgSteamNetworkingIdentityLegacyBinary to JSON.
         * @function toJSON
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamNetworkingIdentityLegacyBinary.prototype.toJSON = function() {
            return CMsgSteamNetworkingIdentityLegacyBinary.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the type url for CMsgSteamNetworkingIdentityLegacyBinary
         * @function getTypeUrl
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        CMsgSteamNetworkingIdentityLegacyBinary.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/CMsgSteamNetworkingIdentityLegacyBinary";
        };
    
        return CMsgSteamNetworkingIdentityLegacyBinary;
    })();
    
    $root.CMsgSteamDatagramCertificate = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramCertificate.
         * @typedef {Object} CMsgSteamDatagramCertificate.$Properties
         * @property {CMsgSteamDatagramCertificate.EKeyType|null} [key_type] CMsgSteamDatagramCertificate key_type
         * @property {Uint8Array|null} [key_data] CMsgSteamDatagramCertificate key_data
         * @property {number|Long|null} [legacy_steam_id] CMsgSteamDatagramCertificate legacy_steam_id
         * @property {CMsgSteamNetworkingIdentityLegacyBinary.$Properties|null} [legacy_identity_binary] CMsgSteamDatagramCertificate legacy_identity_binary
         * @property {string|null} [identity_string] CMsgSteamDatagramCertificate identity_string
         * @property {Array.<number>|null} [gameserver_datacenter_ids] CMsgSteamDatagramCertificate gameserver_datacenter_ids
         * @property {number|null} [time_created] CMsgSteamDatagramCertificate time_created
         * @property {number|null} [time_expiry] CMsgSteamDatagramCertificate time_expiry
         * @property {Array.<number>|null} [app_ids] CMsgSteamDatagramCertificate app_ids
         * @property {Array.<string>|null} [ip_addresses] CMsgSteamDatagramCertificate ip_addresses
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
    
        /**
         * Properties of a CMsgSteamDatagramCertificate.
         * @exports ICMsgSteamDatagramCertificate
         * @interface ICMsgSteamDatagramCertificate
         * @augments CMsgSteamDatagramCertificate.$Properties
         * @deprecated Use CMsgSteamDatagramCertificate.$Properties instead.
         */
    
        /**
         * Shape of a CMsgSteamDatagramCertificate.
         * @typedef {CMsgSteamDatagramCertificate.$Properties} CMsgSteamDatagramCertificate.$Shape
         */
    
        /**
         * Constructs a new CMsgSteamDatagramCertificate.
         * @exports CMsgSteamDatagramCertificate
         * @classdesc Represents a CMsgSteamDatagramCertificate.
         * @constructor
         * @param {CMsgSteamDatagramCertificate.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var CMsgSteamDatagramCertificate = function (properties) {
            this.gameserver_datacenter_ids = [];
            this.app_ids = [];
            this.ip_addresses = [];
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };
    
        /**
         * CMsgSteamDatagramCertificate key_type.
         * @member {CMsgSteamDatagramCertificate.EKeyType} key_type
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.key_type = 0;
    
        /**
         * CMsgSteamDatagramCertificate key_data.
         * @member {Uint8Array} key_data
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.key_data = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramCertificate legacy_steam_id.
         * @member {number|Long} legacy_steam_id
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.legacy_steam_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramCertificate legacy_identity_binary.
         * @member {CMsgSteamNetworkingIdentityLegacyBinary.$Properties|null|undefined} legacy_identity_binary
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.legacy_identity_binary = null;
    
        /**
         * CMsgSteamDatagramCertificate identity_string.
         * @member {string} identity_string
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.identity_string = "";
    
        /**
         * CMsgSteamDatagramCertificate gameserver_datacenter_ids.
         * @member {Array.<number>} gameserver_datacenter_ids
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.gameserver_datacenter_ids = $util.emptyArray;
    
        /**
         * CMsgSteamDatagramCertificate time_created.
         * @member {number} time_created
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.time_created = 0;
    
        /**
         * CMsgSteamDatagramCertificate time_expiry.
         * @member {number} time_expiry
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.time_expiry = 0;
    
        /**
         * CMsgSteamDatagramCertificate app_ids.
         * @member {Array.<number>} app_ids
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.app_ids = $util.emptyArray;
    
        /**
         * CMsgSteamDatagramCertificate ip_addresses.
         * @member {Array.<string>} ip_addresses
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.ip_addresses = $util.emptyArray;
    
        /**
         * Creates a new CMsgSteamDatagramCertificate instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramCertificate
         * @static
         * @param {CMsgSteamDatagramCertificate.$Properties=} [properties] Properties to set
         * @returns {CMsgSteamDatagramCertificate} CMsgSteamDatagramCertificate instance
         * @type {{
         *   (properties: CMsgSteamDatagramCertificate.$Shape): CMsgSteamDatagramCertificate & CMsgSteamDatagramCertificate.$Shape;
         *   (properties?: CMsgSteamDatagramCertificate.$Properties): CMsgSteamDatagramCertificate;
         * }}
         */
        CMsgSteamDatagramCertificate.create = function(properties) {
            return new CMsgSteamDatagramCertificate(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramCertificate message. Does not implicitly {@link CMsgSteamDatagramCertificate.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramCertificate
         * @static
         * @param {CMsgSteamDatagramCertificate.$Properties} message CMsgSteamDatagramCertificate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramCertificate.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.key_type != null && $Object.hasOwnProperty.call(message, "key_type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.key_type);
            if (message.key_data != null && $Object.hasOwnProperty.call(message, "key_data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.key_data);
            if (message.legacy_steam_id != null && $Object.hasOwnProperty.call(message, "legacy_steam_id"))
                writer.uint32(/* id 4, wireType 1 =*/33).fixed64(message.legacy_steam_id);
            if (message.gameserver_datacenter_ids != null && message.gameserver_datacenter_ids.length)
                for (var i = 0; i < message.gameserver_datacenter_ids.length; ++i)
                    writer.uint32(/* id 5, wireType 5 =*/45).fixed32(message.gameserver_datacenter_ids[i]);
            if (message.time_created != null && $Object.hasOwnProperty.call(message, "time_created"))
                writer.uint32(/* id 8, wireType 5 =*/69).fixed32(message.time_created);
            if (message.time_expiry != null && $Object.hasOwnProperty.call(message, "time_expiry"))
                writer.uint32(/* id 9, wireType 5 =*/77).fixed32(message.time_expiry);
            if (message.app_ids != null && message.app_ids.length)
                for (var i = 0; i < message.app_ids.length; ++i)
                    writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.app_ids[i]);
            if (message.legacy_identity_binary != null && $Object.hasOwnProperty.call(message, "legacy_identity_binary"))
                $root.CMsgSteamNetworkingIdentityLegacyBinary.encode(message.legacy_identity_binary, writer.uint32(/* id 11, wireType 2 =*/90).fork(), _depth + 1).ldelim();
            if (message.identity_string != null && $Object.hasOwnProperty.call(message, "identity_string"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.identity_string);
            if (message.ip_addresses != null && message.ip_addresses.length)
                for (var i = 0; i < message.ip_addresses.length; ++i)
                    writer.uint32(/* id 13, wireType 2 =*/106).string(message.ip_addresses[i]);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramCertificate message, length delimited. Does not implicitly {@link CMsgSteamDatagramCertificate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramCertificate
         * @static
         * @param {CMsgSteamDatagramCertificate.$Properties} message CMsgSteamDatagramCertificate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramCertificate.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramCertificate message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramCertificate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramCertificate & CMsgSteamDatagramCertificate.$Shape} CMsgSteamDatagramCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramCertificate.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.CMsgSteamDatagramCertificate();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        value = reader.int32();
                        if ($root.CMsgSteamDatagramCertificate.EKeyType[value] !== $undefined)
                            message.key_type = value;
                        else if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.key_data = reader.bytes();
                        continue;
                    }
                case 4: {
                        if (wireType !== 1)
                            break;
                        message.legacy_steam_id = reader.fixed64();
                        continue;
                    }
                case 11: {
                        if (wireType !== 2)
                            break;
                        message.legacy_identity_binary = $root.CMsgSteamNetworkingIdentityLegacyBinary.decode(reader, reader.size(), $undefined, _depth + 1, message.legacy_identity_binary);
                        continue;
                    }
                case 12: {
                        if (wireType !== 2)
                            break;
                        message.identity_string = reader.string();
                        continue;
                    }
                case 5: {
                        if (wireType === 2) {
                            if (!(message.gameserver_datacenter_ids && message.gameserver_datacenter_ids.length))
                                message.gameserver_datacenter_ids = [];
                            reader.fixed32s(message.gameserver_datacenter_ids);
                            continue;
                        }
                        if (wireType !== 5)
                            break;
                        if (!(message.gameserver_datacenter_ids && message.gameserver_datacenter_ids.length))
                            message.gameserver_datacenter_ids = [];
                        message.gameserver_datacenter_ids.push(reader.fixed32());
                        continue;
                    }
                case 8: {
                        if (wireType !== 5)
                            break;
                        message.time_created = reader.fixed32();
                        continue;
                    }
                case 9: {
                        if (wireType !== 5)
                            break;
                        message.time_expiry = reader.fixed32();
                        continue;
                    }
                case 10: {
                        if (wireType === 2) {
                            if (!(message.app_ids && message.app_ids.length))
                                message.app_ids = [];
                            reader.uint32s(message.app_ids);
                            continue;
                        }
                        if (wireType !== 0)
                            break;
                        if (!(message.app_ids && message.app_ids.length))
                            message.app_ids = [];
                        message.app_ids.push(reader.uint32());
                        continue;
                    }
                case 13: {
                        if (wireType !== 2)
                            break;
                        if (!(message.ip_addresses && message.ip_addresses.length))
                            message.ip_addresses = [];
                        message.ip_addresses.push(reader.string());
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramCertificate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramCertificate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramCertificate & CMsgSteamDatagramCertificate.$Shape} CMsgSteamDatagramCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramCertificate.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };
    
        /**
         * Verifies a CMsgSteamDatagramCertificate message.
         * @function verify
         * @memberof CMsgSteamDatagramCertificate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramCertificate.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.key_type != null && $Object.hasOwnProperty.call(message, "key_type"))
                switch (message.key_type) {
                default:
                    return "key_type: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.key_data != null && $Object.hasOwnProperty.call(message, "key_data"))
                if (!(message.key_data && typeof message.key_data.length === "number" || $util.isString(message.key_data)))
                    return "key_data: buffer expected";
            if (message.legacy_steam_id != null && $Object.hasOwnProperty.call(message, "legacy_steam_id"))
                if (!$util.isInteger(message.legacy_steam_id) && !(message.legacy_steam_id && $util.isInteger(message.legacy_steam_id.low) && $util.isInteger(message.legacy_steam_id.high)))
                    return "legacy_steam_id: integer|Long expected";
            if (message.legacy_identity_binary != null && $Object.hasOwnProperty.call(message, "legacy_identity_binary")) {
                var error = $root.CMsgSteamNetworkingIdentityLegacyBinary.verify(message.legacy_identity_binary, _depth + 1);
                if (error)
                    return "legacy_identity_binary." + error;
            }
            if (message.identity_string != null && $Object.hasOwnProperty.call(message, "identity_string"))
                if (!$util.isString(message.identity_string))
                    return "identity_string: string expected";
            if (message.gameserver_datacenter_ids != null && $Object.hasOwnProperty.call(message, "gameserver_datacenter_ids")) {
                if (!$Array.isArray(message.gameserver_datacenter_ids))
                    return "gameserver_datacenter_ids: array expected";
                for (var i = 0; i < message.gameserver_datacenter_ids.length; ++i)
                    if (!$util.isInteger(message.gameserver_datacenter_ids[i]))
                        return "gameserver_datacenter_ids: integer[] expected";
            }
            if (message.time_created != null && $Object.hasOwnProperty.call(message, "time_created"))
                if (!$util.isInteger(message.time_created))
                    return "time_created: integer expected";
            if (message.time_expiry != null && $Object.hasOwnProperty.call(message, "time_expiry"))
                if (!$util.isInteger(message.time_expiry))
                    return "time_expiry: integer expected";
            if (message.app_ids != null && $Object.hasOwnProperty.call(message, "app_ids")) {
                if (!$Array.isArray(message.app_ids))
                    return "app_ids: array expected";
                for (var i = 0; i < message.app_ids.length; ++i)
                    if (!$util.isInteger(message.app_ids[i]))
                        return "app_ids: integer[] expected";
            }
            if (message.ip_addresses != null && $Object.hasOwnProperty.call(message, "ip_addresses")) {
                if (!$Array.isArray(message.ip_addresses))
                    return "ip_addresses: array expected";
                for (var i = 0; i < message.ip_addresses.length; ++i)
                    if (!$util.isString(message.ip_addresses[i]))
                        return "ip_addresses: string[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramCertificate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramCertificate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramCertificate} CMsgSteamDatagramCertificate
         */
        CMsgSteamDatagramCertificate.fromObject = function (object, _depth) {
            if (object instanceof $root.CMsgSteamDatagramCertificate)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".CMsgSteamDatagramCertificate: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.CMsgSteamDatagramCertificate();
            switch (object.key_type) {
            case "INVALID":
            case 0:
                message.key_type = 0;
                break;
            case "ED25519":
            case 1:
                message.key_type = 1;
                break;
            default:
            }
            if (object.key_data != null)
                if (typeof object.key_data === "string")
                    $util.base64.decode(object.key_data, message.key_data = $util.newBuffer($util.base64.length(object.key_data)), 0);
                else if (object.key_data.length >= 0)
                    message.key_data = object.key_data;
            if (object.legacy_steam_id != null)
                if ($util.Long)
                    message.legacy_steam_id = $util.Long.fromValue(object.legacy_steam_id, true);
                else if (typeof object.legacy_steam_id === "string")
                    message.legacy_steam_id = $parseInt(object.legacy_steam_id, 10);
                else if (typeof object.legacy_steam_id === "number")
                    message.legacy_steam_id = object.legacy_steam_id;
                else if (typeof object.legacy_steam_id === "object")
                    message.legacy_steam_id = new $util.LongBits(object.legacy_steam_id.low >>> 0, object.legacy_steam_id.high >>> 0).toNumber(true);
            if (object.legacy_identity_binary != null) {
                if (!$util.isObject(object.legacy_identity_binary))
                    throw $TypeError(".CMsgSteamDatagramCertificate.legacy_identity_binary: object expected");
                message.legacy_identity_binary = $root.CMsgSteamNetworkingIdentityLegacyBinary.fromObject(object.legacy_identity_binary, _depth + 1);
            }
            if (object.identity_string != null)
                message.identity_string = $String(object.identity_string);
            if (object.gameserver_datacenter_ids) {
                if (!$Array.isArray(object.gameserver_datacenter_ids))
                    throw $TypeError(".CMsgSteamDatagramCertificate.gameserver_datacenter_ids: array expected");
                message.gameserver_datacenter_ids = $Array(object.gameserver_datacenter_ids.length);
                for (var i = 0; i < object.gameserver_datacenter_ids.length; ++i)
                    message.gameserver_datacenter_ids[i] = object.gameserver_datacenter_ids[i] >>> 0;
            }
            if (object.time_created != null)
                message.time_created = object.time_created >>> 0;
            if (object.time_expiry != null)
                message.time_expiry = object.time_expiry >>> 0;
            if (object.app_ids) {
                if (!$Array.isArray(object.app_ids))
                    throw $TypeError(".CMsgSteamDatagramCertificate.app_ids: array expected");
                message.app_ids = $Array(object.app_ids.length);
                for (var i = 0; i < object.app_ids.length; ++i)
                    message.app_ids[i] = object.app_ids[i] >>> 0;
            }
            if (object.ip_addresses) {
                if (!$Array.isArray(object.ip_addresses))
                    throw $TypeError(".CMsgSteamDatagramCertificate.ip_addresses: array expected");
                message.ip_addresses = $Array(object.ip_addresses.length);
                for (var i = 0; i < object.ip_addresses.length; ++i)
                    message.ip_addresses[i] = $String(object.ip_addresses[i]);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramCertificate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramCertificate
         * @static
         * @param {CMsgSteamDatagramCertificate} message CMsgSteamDatagramCertificate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramCertificate.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.arrays || options.defaults) {
                object.gameserver_datacenter_ids = [];
                object.app_ids = [];
                object.ip_addresses = [];
            }
            if (options.defaults) {
                object.key_type = options.enums === $String ? "INVALID" : 0;
                if (options.bytes === $String)
                    object.key_data = "";
                else {
                    object.key_data = [];
                    if (options.bytes !== $Array)
                        object.key_data = $util.newBuffer(object.key_data);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.legacy_steam_id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                } else
                    object.legacy_steam_id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                object.time_created = 0;
                object.time_expiry = 0;
                object.legacy_identity_binary = null;
                object.identity_string = "";
            }
            if (message.key_type != null && $Object.hasOwnProperty.call(message, "key_type"))
                object.key_type = options.enums === $String ? $root.CMsgSteamDatagramCertificate.EKeyType[message.key_type] === $undefined ? message.key_type : $root.CMsgSteamDatagramCertificate.EKeyType[message.key_type] : message.key_type;
            if (message.key_data != null && $Object.hasOwnProperty.call(message, "key_data"))
                object.key_data = options.bytes === $String ? $util.base64.encode(message.key_data, 0, message.key_data.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.key_data) : message.key_data;
            if (message.legacy_steam_id != null && $Object.hasOwnProperty.call(message, "legacy_steam_id"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.legacy_steam_id = typeof message.legacy_steam_id === "number" ? $BigInt(message.legacy_steam_id) : $util.Long.fromBits(message.legacy_steam_id.low >>> 0, message.legacy_steam_id.high >>> 0, true).toBigInt();
                else if (typeof message.legacy_steam_id === "number")
                    object.legacy_steam_id = options.longs === $String ? $String(message.legacy_steam_id) : message.legacy_steam_id;
                else
                    object.legacy_steam_id = options.longs === $String ? $util.Long.prototype.toString.call(message.legacy_steam_id) : options.longs === $Number ? new $util.LongBits(message.legacy_steam_id.low >>> 0, message.legacy_steam_id.high >>> 0).toNumber(true) : message.legacy_steam_id;
            if (message.gameserver_datacenter_ids && message.gameserver_datacenter_ids.length) {
                object.gameserver_datacenter_ids = $Array(message.gameserver_datacenter_ids.length);
                for (var j = 0; j < message.gameserver_datacenter_ids.length; ++j)
                    object.gameserver_datacenter_ids[j] = message.gameserver_datacenter_ids[j];
            }
            if (message.time_created != null && $Object.hasOwnProperty.call(message, "time_created"))
                object.time_created = message.time_created;
            if (message.time_expiry != null && $Object.hasOwnProperty.call(message, "time_expiry"))
                object.time_expiry = message.time_expiry;
            if (message.app_ids && message.app_ids.length) {
                object.app_ids = $Array(message.app_ids.length);
                for (var j = 0; j < message.app_ids.length; ++j)
                    object.app_ids[j] = message.app_ids[j];
            }
            if (message.legacy_identity_binary != null && $Object.hasOwnProperty.call(message, "legacy_identity_binary"))
                object.legacy_identity_binary = $root.CMsgSteamNetworkingIdentityLegacyBinary.toObject(message.legacy_identity_binary, options, _depth + 1);
            if (message.identity_string != null && $Object.hasOwnProperty.call(message, "identity_string"))
                object.identity_string = message.identity_string;
            if (message.ip_addresses && message.ip_addresses.length) {
                object.ip_addresses = $Array(message.ip_addresses.length);
                for (var j = 0; j < message.ip_addresses.length; ++j)
                    object.ip_addresses[j] = message.ip_addresses[j];
            }
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramCertificate to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramCertificate.prototype.toJSON = function() {
            return CMsgSteamDatagramCertificate.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the type url for CMsgSteamDatagramCertificate
         * @function getTypeUrl
         * @memberof CMsgSteamDatagramCertificate
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        CMsgSteamDatagramCertificate.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/CMsgSteamDatagramCertificate";
        };
    
        /**
         * EKeyType enum.
         * @name CMsgSteamDatagramCertificate.EKeyType
         * @enum {number}
         * @property {number} INVALID=0 INVALID value
         * @property {number} ED25519=1 ED25519 value
         */
        CMsgSteamDatagramCertificate.EKeyType = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "INVALID"] = 0;
            values[valuesById[1] = "ED25519"] = 1;
            return values;
        })();
    
        return CMsgSteamDatagramCertificate;
    })();
    
    $root.CMsgSteamDatagramCertificateSigned = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramCertificateSigned.
         * @typedef {Object} CMsgSteamDatagramCertificateSigned.$Properties
         * @property {Uint8Array|null} [cert] CMsgSteamDatagramCertificateSigned cert
         * @property {number|Long|null} [ca_key_id] CMsgSteamDatagramCertificateSigned ca_key_id
         * @property {Uint8Array|null} [ca_signature] CMsgSteamDatagramCertificateSigned ca_signature
         * @property {Uint8Array|null} [private_key_data] CMsgSteamDatagramCertificateSigned private_key_data
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
    
        /**
         * Properties of a CMsgSteamDatagramCertificateSigned.
         * @exports ICMsgSteamDatagramCertificateSigned
         * @interface ICMsgSteamDatagramCertificateSigned
         * @augments CMsgSteamDatagramCertificateSigned.$Properties
         * @deprecated Use CMsgSteamDatagramCertificateSigned.$Properties instead.
         */
    
        /**
         * Shape of a CMsgSteamDatagramCertificateSigned.
         * @typedef {CMsgSteamDatagramCertificateSigned.$Properties} CMsgSteamDatagramCertificateSigned.$Shape
         */
    
        /**
         * Constructs a new CMsgSteamDatagramCertificateSigned.
         * @exports CMsgSteamDatagramCertificateSigned
         * @classdesc Represents a CMsgSteamDatagramCertificateSigned.
         * @constructor
         * @param {CMsgSteamDatagramCertificateSigned.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var CMsgSteamDatagramCertificateSigned = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };
    
        /**
         * CMsgSteamDatagramCertificateSigned cert.
         * @member {Uint8Array} cert
         * @memberof CMsgSteamDatagramCertificateSigned
         * @instance
         */
        CMsgSteamDatagramCertificateSigned.prototype.cert = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramCertificateSigned ca_key_id.
         * @member {number|Long} ca_key_id
         * @memberof CMsgSteamDatagramCertificateSigned
         * @instance
         */
        CMsgSteamDatagramCertificateSigned.prototype.ca_key_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramCertificateSigned ca_signature.
         * @member {Uint8Array} ca_signature
         * @memberof CMsgSteamDatagramCertificateSigned
         * @instance
         */
        CMsgSteamDatagramCertificateSigned.prototype.ca_signature = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramCertificateSigned private_key_data.
         * @member {Uint8Array} private_key_data
         * @memberof CMsgSteamDatagramCertificateSigned
         * @instance
         */
        CMsgSteamDatagramCertificateSigned.prototype.private_key_data = $util.newBuffer([]);
    
        /**
         * Creates a new CMsgSteamDatagramCertificateSigned instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramCertificateSigned
         * @static
         * @param {CMsgSteamDatagramCertificateSigned.$Properties=} [properties] Properties to set
         * @returns {CMsgSteamDatagramCertificateSigned} CMsgSteamDatagramCertificateSigned instance
         * @type {{
         *   (properties: CMsgSteamDatagramCertificateSigned.$Shape): CMsgSteamDatagramCertificateSigned & CMsgSteamDatagramCertificateSigned.$Shape;
         *   (properties?: CMsgSteamDatagramCertificateSigned.$Properties): CMsgSteamDatagramCertificateSigned;
         * }}
         */
        CMsgSteamDatagramCertificateSigned.create = function(properties) {
            return new CMsgSteamDatagramCertificateSigned(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramCertificateSigned message. Does not implicitly {@link CMsgSteamDatagramCertificateSigned.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramCertificateSigned
         * @static
         * @param {CMsgSteamDatagramCertificateSigned.$Properties} message CMsgSteamDatagramCertificateSigned message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramCertificateSigned.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.private_key_data != null && $Object.hasOwnProperty.call(message, "private_key_data"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.private_key_data);
            if (message.cert != null && $Object.hasOwnProperty.call(message, "cert"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.cert);
            if (message.ca_key_id != null && $Object.hasOwnProperty.call(message, "ca_key_id"))
                writer.uint32(/* id 5, wireType 1 =*/41).fixed64(message.ca_key_id);
            if (message.ca_signature != null && $Object.hasOwnProperty.call(message, "ca_signature"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.ca_signature);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramCertificateSigned message, length delimited. Does not implicitly {@link CMsgSteamDatagramCertificateSigned.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramCertificateSigned
         * @static
         * @param {CMsgSteamDatagramCertificateSigned.$Properties} message CMsgSteamDatagramCertificateSigned message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramCertificateSigned.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramCertificateSigned message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramCertificateSigned
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramCertificateSigned & CMsgSteamDatagramCertificateSigned.$Shape} CMsgSteamDatagramCertificateSigned
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramCertificateSigned.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.CMsgSteamDatagramCertificateSigned();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 4: {
                        if (wireType !== 2)
                            break;
                        message.cert = reader.bytes();
                        continue;
                    }
                case 5: {
                        if (wireType !== 1)
                            break;
                        message.ca_key_id = reader.fixed64();
                        continue;
                    }
                case 6: {
                        if (wireType !== 2)
                            break;
                        message.ca_signature = reader.bytes();
                        continue;
                    }
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.private_key_data = reader.bytes();
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramCertificateSigned message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramCertificateSigned
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramCertificateSigned & CMsgSteamDatagramCertificateSigned.$Shape} CMsgSteamDatagramCertificateSigned
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramCertificateSigned.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };
    
        /**
         * Verifies a CMsgSteamDatagramCertificateSigned message.
         * @function verify
         * @memberof CMsgSteamDatagramCertificateSigned
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramCertificateSigned.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.cert != null && $Object.hasOwnProperty.call(message, "cert"))
                if (!(message.cert && typeof message.cert.length === "number" || $util.isString(message.cert)))
                    return "cert: buffer expected";
            if (message.ca_key_id != null && $Object.hasOwnProperty.call(message, "ca_key_id"))
                if (!$util.isInteger(message.ca_key_id) && !(message.ca_key_id && $util.isInteger(message.ca_key_id.low) && $util.isInteger(message.ca_key_id.high)))
                    return "ca_key_id: integer|Long expected";
            if (message.ca_signature != null && $Object.hasOwnProperty.call(message, "ca_signature"))
                if (!(message.ca_signature && typeof message.ca_signature.length === "number" || $util.isString(message.ca_signature)))
                    return "ca_signature: buffer expected";
            if (message.private_key_data != null && $Object.hasOwnProperty.call(message, "private_key_data"))
                if (!(message.private_key_data && typeof message.private_key_data.length === "number" || $util.isString(message.private_key_data)))
                    return "private_key_data: buffer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramCertificateSigned message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramCertificateSigned
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramCertificateSigned} CMsgSteamDatagramCertificateSigned
         */
        CMsgSteamDatagramCertificateSigned.fromObject = function (object, _depth) {
            if (object instanceof $root.CMsgSteamDatagramCertificateSigned)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".CMsgSteamDatagramCertificateSigned: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.CMsgSteamDatagramCertificateSigned();
            if (object.cert != null)
                if (typeof object.cert === "string")
                    $util.base64.decode(object.cert, message.cert = $util.newBuffer($util.base64.length(object.cert)), 0);
                else if (object.cert.length >= 0)
                    message.cert = object.cert;
            if (object.ca_key_id != null)
                if ($util.Long)
                    message.ca_key_id = $util.Long.fromValue(object.ca_key_id, true);
                else if (typeof object.ca_key_id === "string")
                    message.ca_key_id = $parseInt(object.ca_key_id, 10);
                else if (typeof object.ca_key_id === "number")
                    message.ca_key_id = object.ca_key_id;
                else if (typeof object.ca_key_id === "object")
                    message.ca_key_id = new $util.LongBits(object.ca_key_id.low >>> 0, object.ca_key_id.high >>> 0).toNumber(true);
            if (object.ca_signature != null)
                if (typeof object.ca_signature === "string")
                    $util.base64.decode(object.ca_signature, message.ca_signature = $util.newBuffer($util.base64.length(object.ca_signature)), 0);
                else if (object.ca_signature.length >= 0)
                    message.ca_signature = object.ca_signature;
            if (object.private_key_data != null)
                if (typeof object.private_key_data === "string")
                    $util.base64.decode(object.private_key_data, message.private_key_data = $util.newBuffer($util.base64.length(object.private_key_data)), 0);
                else if (object.private_key_data.length >= 0)
                    message.private_key_data = object.private_key_data;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramCertificateSigned message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramCertificateSigned
         * @static
         * @param {CMsgSteamDatagramCertificateSigned} message CMsgSteamDatagramCertificateSigned
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramCertificateSigned.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.defaults) {
                if (options.bytes === $String)
                    object.private_key_data = "";
                else {
                    object.private_key_data = [];
                    if (options.bytes !== $Array)
                        object.private_key_data = $util.newBuffer(object.private_key_data);
                }
                if (options.bytes === $String)
                    object.cert = "";
                else {
                    object.cert = [];
                    if (options.bytes !== $Array)
                        object.cert = $util.newBuffer(object.cert);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.ca_key_id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                } else
                    object.ca_key_id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                if (options.bytes === $String)
                    object.ca_signature = "";
                else {
                    object.ca_signature = [];
                    if (options.bytes !== $Array)
                        object.ca_signature = $util.newBuffer(object.ca_signature);
                }
            }
            if (message.private_key_data != null && $Object.hasOwnProperty.call(message, "private_key_data"))
                object.private_key_data = options.bytes === $String ? $util.base64.encode(message.private_key_data, 0, message.private_key_data.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.private_key_data) : message.private_key_data;
            if (message.cert != null && $Object.hasOwnProperty.call(message, "cert"))
                object.cert = options.bytes === $String ? $util.base64.encode(message.cert, 0, message.cert.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.cert) : message.cert;
            if (message.ca_key_id != null && $Object.hasOwnProperty.call(message, "ca_key_id"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.ca_key_id = typeof message.ca_key_id === "number" ? $BigInt(message.ca_key_id) : $util.Long.fromBits(message.ca_key_id.low >>> 0, message.ca_key_id.high >>> 0, true).toBigInt();
                else if (typeof message.ca_key_id === "number")
                    object.ca_key_id = options.longs === $String ? $String(message.ca_key_id) : message.ca_key_id;
                else
                    object.ca_key_id = options.longs === $String ? $util.Long.prototype.toString.call(message.ca_key_id) : options.longs === $Number ? new $util.LongBits(message.ca_key_id.low >>> 0, message.ca_key_id.high >>> 0).toNumber(true) : message.ca_key_id;
            if (message.ca_signature != null && $Object.hasOwnProperty.call(message, "ca_signature"))
                object.ca_signature = options.bytes === $String ? $util.base64.encode(message.ca_signature, 0, message.ca_signature.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.ca_signature) : message.ca_signature;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramCertificateSigned to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramCertificateSigned
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramCertificateSigned.prototype.toJSON = function() {
            return CMsgSteamDatagramCertificateSigned.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the type url for CMsgSteamDatagramCertificateSigned
         * @function getTypeUrl
         * @memberof CMsgSteamDatagramCertificateSigned
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        CMsgSteamDatagramCertificateSigned.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/CMsgSteamDatagramCertificateSigned";
        };
    
        return CMsgSteamDatagramCertificateSigned;
    })();
    
    $root.CMsgSteamDatagramCertificateRequest = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramCertificateRequest.
         * @typedef {Object} CMsgSteamDatagramCertificateRequest.$Properties
         * @property {CMsgSteamDatagramCertificate.$Properties|null} [cert] CMsgSteamDatagramCertificateRequest cert
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
    
        /**
         * Properties of a CMsgSteamDatagramCertificateRequest.
         * @exports ICMsgSteamDatagramCertificateRequest
         * @interface ICMsgSteamDatagramCertificateRequest
         * @augments CMsgSteamDatagramCertificateRequest.$Properties
         * @deprecated Use CMsgSteamDatagramCertificateRequest.$Properties instead.
         */
    
        /**
         * Shape of a CMsgSteamDatagramCertificateRequest.
         * @typedef {CMsgSteamDatagramCertificateRequest.$Properties} CMsgSteamDatagramCertificateRequest.$Shape
         */
    
        /**
         * Constructs a new CMsgSteamDatagramCertificateRequest.
         * @exports CMsgSteamDatagramCertificateRequest
         * @classdesc Represents a CMsgSteamDatagramCertificateRequest.
         * @constructor
         * @param {CMsgSteamDatagramCertificateRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var CMsgSteamDatagramCertificateRequest = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };
    
        /**
         * CMsgSteamDatagramCertificateRequest cert.
         * @member {CMsgSteamDatagramCertificate.$Properties|null|undefined} cert
         * @memberof CMsgSteamDatagramCertificateRequest
         * @instance
         */
        CMsgSteamDatagramCertificateRequest.prototype.cert = null;
    
        /**
         * Creates a new CMsgSteamDatagramCertificateRequest instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramCertificateRequest
         * @static
         * @param {CMsgSteamDatagramCertificateRequest.$Properties=} [properties] Properties to set
         * @returns {CMsgSteamDatagramCertificateRequest} CMsgSteamDatagramCertificateRequest instance
         * @type {{
         *   (properties: CMsgSteamDatagramCertificateRequest.$Shape): CMsgSteamDatagramCertificateRequest & CMsgSteamDatagramCertificateRequest.$Shape;
         *   (properties?: CMsgSteamDatagramCertificateRequest.$Properties): CMsgSteamDatagramCertificateRequest;
         * }}
         */
        CMsgSteamDatagramCertificateRequest.create = function(properties) {
            return new CMsgSteamDatagramCertificateRequest(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramCertificateRequest message. Does not implicitly {@link CMsgSteamDatagramCertificateRequest.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramCertificateRequest
         * @static
         * @param {CMsgSteamDatagramCertificateRequest.$Properties} message CMsgSteamDatagramCertificateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramCertificateRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.cert != null && $Object.hasOwnProperty.call(message, "cert"))
                $root.CMsgSteamDatagramCertificate.encode(message.cert, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramCertificateRequest message, length delimited. Does not implicitly {@link CMsgSteamDatagramCertificateRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramCertificateRequest
         * @static
         * @param {CMsgSteamDatagramCertificateRequest.$Properties} message CMsgSteamDatagramCertificateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramCertificateRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramCertificateRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramCertificateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramCertificateRequest & CMsgSteamDatagramCertificateRequest.$Shape} CMsgSteamDatagramCertificateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramCertificateRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.CMsgSteamDatagramCertificateRequest();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.cert = $root.CMsgSteamDatagramCertificate.decode(reader, reader.size(), $undefined, _depth + 1, message.cert);
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramCertificateRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramCertificateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramCertificateRequest & CMsgSteamDatagramCertificateRequest.$Shape} CMsgSteamDatagramCertificateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramCertificateRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };
    
        /**
         * Verifies a CMsgSteamDatagramCertificateRequest message.
         * @function verify
         * @memberof CMsgSteamDatagramCertificateRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramCertificateRequest.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.cert != null && $Object.hasOwnProperty.call(message, "cert")) {
                var error = $root.CMsgSteamDatagramCertificate.verify(message.cert, _depth + 1);
                if (error)
                    return "cert." + error;
            }
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramCertificateRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramCertificateRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramCertificateRequest} CMsgSteamDatagramCertificateRequest
         */
        CMsgSteamDatagramCertificateRequest.fromObject = function (object, _depth) {
            if (object instanceof $root.CMsgSteamDatagramCertificateRequest)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".CMsgSteamDatagramCertificateRequest: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.CMsgSteamDatagramCertificateRequest();
            if (object.cert != null) {
                if (!$util.isObject(object.cert))
                    throw $TypeError(".CMsgSteamDatagramCertificateRequest.cert: object expected");
                message.cert = $root.CMsgSteamDatagramCertificate.fromObject(object.cert, _depth + 1);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramCertificateRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramCertificateRequest
         * @static
         * @param {CMsgSteamDatagramCertificateRequest} message CMsgSteamDatagramCertificateRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramCertificateRequest.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.defaults)
                object.cert = null;
            if (message.cert != null && $Object.hasOwnProperty.call(message, "cert"))
                object.cert = $root.CMsgSteamDatagramCertificate.toObject(message.cert, options, _depth + 1);
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramCertificateRequest to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramCertificateRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramCertificateRequest.prototype.toJSON = function() {
            return CMsgSteamDatagramCertificateRequest.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the type url for CMsgSteamDatagramCertificateRequest
         * @function getTypeUrl
         * @memberof CMsgSteamDatagramCertificateRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        CMsgSteamDatagramCertificateRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/CMsgSteamDatagramCertificateRequest";
        };
    
        return CMsgSteamDatagramCertificateRequest;
    })();

    return $root;
});
