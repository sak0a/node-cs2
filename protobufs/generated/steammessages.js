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
    var $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $RangeError = $util.global.RangeError, $TypeError = $util.global.TypeError, $parseInt = $util.global.parseInt, $String = $util.global.String, $Number = $util.global.Number, $BigInt = $util.global.BigInt, $Array = $util.global.Array, $Boolean = $util.global.Boolean, $isFinite = $util.global.isFinite;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    /**
     * GCProtoBufMsgSrc enum.
     * @name GCProtoBufMsgSrc
     * @enum {number}
     * @property {number} GCProtoBufMsgSrc_Unspecified=0 GCProtoBufMsgSrc_Unspecified value
     * @property {number} GCProtoBufMsgSrc_FromSystem=1 GCProtoBufMsgSrc_FromSystem value
     * @property {number} GCProtoBufMsgSrc_FromSteamID=2 GCProtoBufMsgSrc_FromSteamID value
     * @property {number} GCProtoBufMsgSrc_FromGC=3 GCProtoBufMsgSrc_FromGC value
     * @property {number} GCProtoBufMsgSrc_ReplySystem=4 GCProtoBufMsgSrc_ReplySystem value
     */
    $root.GCProtoBufMsgSrc = (function() {
        var valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[0] = "GCProtoBufMsgSrc_Unspecified"] = 0;
        values[valuesById[1] = "GCProtoBufMsgSrc_FromSystem"] = 1;
        values[valuesById[2] = "GCProtoBufMsgSrc_FromSteamID"] = 2;
        values[valuesById[3] = "GCProtoBufMsgSrc_FromGC"] = 3;
        values[valuesById[4] = "GCProtoBufMsgSrc_ReplySystem"] = 4;
        return values;
    })();
    
    $root.CMsgProtoBufHeader = (function() {
    
        /**
         * Properties of a CMsgProtoBufHeader.
         * @typedef {Object} CMsgProtoBufHeader.$Properties
         * @property {number|Long|null} [client_steam_id] CMsgProtoBufHeader client_steam_id
         * @property {number|null} [client_session_id] CMsgProtoBufHeader client_session_id
         * @property {number|null} [source_app_id] CMsgProtoBufHeader source_app_id
         * @property {number|Long|null} [job_id_source] CMsgProtoBufHeader job_id_source
         * @property {number|Long|null} [job_id_target] CMsgProtoBufHeader job_id_target
         * @property {string|null} [target_job_name] CMsgProtoBufHeader target_job_name
         * @property {number|null} [eresult] CMsgProtoBufHeader eresult
         * @property {string|null} [error_message] CMsgProtoBufHeader error_message
         * @property {number|null} [ip] CMsgProtoBufHeader ip
         * @property {GCProtoBufMsgSrc|null} [gc_msg_src] CMsgProtoBufHeader gc_msg_src
         * @property {number|null} [gc_dir_index_source] CMsgProtoBufHeader gc_dir_index_source
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
    
        /**
         * Properties of a CMsgProtoBufHeader.
         * @exports ICMsgProtoBufHeader
         * @interface ICMsgProtoBufHeader
         * @augments CMsgProtoBufHeader.$Properties
         * @deprecated Use CMsgProtoBufHeader.$Properties instead.
         */
    
        /**
         * Shape of a CMsgProtoBufHeader.
         * @typedef {CMsgProtoBufHeader.$Properties} CMsgProtoBufHeader.$Shape
         */
    
        /**
         * Constructs a new CMsgProtoBufHeader.
         * @exports CMsgProtoBufHeader
         * @classdesc Represents a CMsgProtoBufHeader.
         * @constructor
         * @param {CMsgProtoBufHeader.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var CMsgProtoBufHeader = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };
    
        /**
         * CMsgProtoBufHeader client_steam_id.
         * @member {number|Long} client_steam_id
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.client_steam_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgProtoBufHeader client_session_id.
         * @member {number} client_session_id
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.client_session_id = 0;
    
        /**
         * CMsgProtoBufHeader source_app_id.
         * @member {number} source_app_id
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.source_app_id = 0;
    
        /**
         * CMsgProtoBufHeader job_id_source.
         * @member {number|Long} job_id_source
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.job_id_source = $util.Long ? $util.Long.fromBits(-1,-1,true) : 18446744073709552000;
    
        /**
         * CMsgProtoBufHeader job_id_target.
         * @member {number|Long} job_id_target
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.job_id_target = $util.Long ? $util.Long.fromBits(-1,-1,true) : 18446744073709552000;
    
        /**
         * CMsgProtoBufHeader target_job_name.
         * @member {string} target_job_name
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.target_job_name = "";
    
        /**
         * CMsgProtoBufHeader eresult.
         * @member {number} eresult
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.eresult = 2;
    
        /**
         * CMsgProtoBufHeader error_message.
         * @member {string} error_message
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.error_message = "";
    
        /**
         * CMsgProtoBufHeader ip.
         * @member {number} ip
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.ip = 0;
    
        /**
         * CMsgProtoBufHeader gc_msg_src.
         * @member {GCProtoBufMsgSrc} gc_msg_src
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.gc_msg_src = 0;
    
        /**
         * CMsgProtoBufHeader gc_dir_index_source.
         * @member {number} gc_dir_index_source
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.gc_dir_index_source = 0;
    
        /**
         * Creates a new CMsgProtoBufHeader instance using the specified properties.
         * @function create
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {CMsgProtoBufHeader.$Properties=} [properties] Properties to set
         * @returns {CMsgProtoBufHeader} CMsgProtoBufHeader instance
         * @type {{
         *   (properties: CMsgProtoBufHeader.$Shape): CMsgProtoBufHeader & CMsgProtoBufHeader.$Shape;
         *   (properties?: CMsgProtoBufHeader.$Properties): CMsgProtoBufHeader;
         * }}
         */
        CMsgProtoBufHeader.create = function(properties) {
            return new CMsgProtoBufHeader(properties);
        };
    
        /**
         * Encodes the specified CMsgProtoBufHeader message. Does not implicitly {@link CMsgProtoBufHeader.verify|verify} messages.
         * @function encode
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {CMsgProtoBufHeader.$Properties} message CMsgProtoBufHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgProtoBufHeader.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.client_steam_id != null && $Object.hasOwnProperty.call(message, "client_steam_id"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.client_steam_id);
            if (message.client_session_id != null && $Object.hasOwnProperty.call(message, "client_session_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.client_session_id);
            if (message.source_app_id != null && $Object.hasOwnProperty.call(message, "source_app_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.source_app_id);
            if (message.job_id_source != null && $Object.hasOwnProperty.call(message, "job_id_source"))
                writer.uint32(/* id 10, wireType 1 =*/81).fixed64(message.job_id_source);
            if (message.job_id_target != null && $Object.hasOwnProperty.call(message, "job_id_target"))
                writer.uint32(/* id 11, wireType 1 =*/89).fixed64(message.job_id_target);
            if (message.target_job_name != null && $Object.hasOwnProperty.call(message, "target_job_name"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.target_job_name);
            if (message.eresult != null && $Object.hasOwnProperty.call(message, "eresult"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.eresult);
            if (message.error_message != null && $Object.hasOwnProperty.call(message, "error_message"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.error_message);
            if (message.ip != null && $Object.hasOwnProperty.call(message, "ip"))
                writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ip);
            if (message.gc_msg_src != null && $Object.hasOwnProperty.call(message, "gc_msg_src"))
                writer.uint32(/* id 200, wireType 0 =*/1600).int32(message.gc_msg_src);
            if (message.gc_dir_index_source != null && $Object.hasOwnProperty.call(message, "gc_dir_index_source"))
                writer.uint32(/* id 201, wireType 0 =*/1608).uint32(message.gc_dir_index_source);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgProtoBufHeader message, length delimited. Does not implicitly {@link CMsgProtoBufHeader.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {CMsgProtoBufHeader.$Properties} message CMsgProtoBufHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgProtoBufHeader.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };
    
        /**
         * Decodes a CMsgProtoBufHeader message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgProtoBufHeader & CMsgProtoBufHeader.$Shape} CMsgProtoBufHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgProtoBufHeader.decode = function (reader, length, _end, _depth, _target) {
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
            message = _target || new $root.CMsgProtoBufHeader();
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
                        if (wireType !== 1)
                            break;
                        message.client_steam_id = reader.fixed64();
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.client_session_id = reader.int32();
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.source_app_id = reader.uint32();
                        continue;
                    }
                case 10: {
                        if (wireType !== 1)
                            break;
                        message.job_id_source = reader.fixed64();
                        continue;
                    }
                case 11: {
                        if (wireType !== 1)
                            break;
                        message.job_id_target = reader.fixed64();
                        continue;
                    }
                case 12: {
                        if (wireType !== 2)
                            break;
                        message.target_job_name = reader.string();
                        continue;
                    }
                case 13: {
                        if (wireType !== 0)
                            break;
                        message.eresult = reader.int32();
                        continue;
                    }
                case 14: {
                        if (wireType !== 2)
                            break;
                        message.error_message = reader.string();
                        continue;
                    }
                case 15: {
                        if (wireType !== 0)
                            break;
                        message.ip = reader.uint32();
                        continue;
                    }
                case 200: {
                        if (wireType !== 0)
                            break;
                        value = reader.int32();
                        if ($root.GCProtoBufMsgSrc[value] !== $undefined)
                            message.gc_msg_src = value;
                        else if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                        continue;
                    }
                case 201: {
                        if (wireType !== 0)
                            break;
                        message.gc_dir_index_source = reader.uint32();
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
         * Decodes a CMsgProtoBufHeader message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgProtoBufHeader & CMsgProtoBufHeader.$Shape} CMsgProtoBufHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgProtoBufHeader.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };
    
        /**
         * Verifies a CMsgProtoBufHeader message.
         * @function verify
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgProtoBufHeader.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.client_steam_id != null && $Object.hasOwnProperty.call(message, "client_steam_id"))
                if (!$util.isInteger(message.client_steam_id) && !(message.client_steam_id && $util.isInteger(message.client_steam_id.low) && $util.isInteger(message.client_steam_id.high)))
                    return "client_steam_id: integer|Long expected";
            if (message.client_session_id != null && $Object.hasOwnProperty.call(message, "client_session_id"))
                if (!$util.isInteger(message.client_session_id))
                    return "client_session_id: integer expected";
            if (message.source_app_id != null && $Object.hasOwnProperty.call(message, "source_app_id"))
                if (!$util.isInteger(message.source_app_id))
                    return "source_app_id: integer expected";
            if (message.job_id_source != null && $Object.hasOwnProperty.call(message, "job_id_source"))
                if (!$util.isInteger(message.job_id_source) && !(message.job_id_source && $util.isInteger(message.job_id_source.low) && $util.isInteger(message.job_id_source.high)))
                    return "job_id_source: integer|Long expected";
            if (message.job_id_target != null && $Object.hasOwnProperty.call(message, "job_id_target"))
                if (!$util.isInteger(message.job_id_target) && !(message.job_id_target && $util.isInteger(message.job_id_target.low) && $util.isInteger(message.job_id_target.high)))
                    return "job_id_target: integer|Long expected";
            if (message.target_job_name != null && $Object.hasOwnProperty.call(message, "target_job_name"))
                if (!$util.isString(message.target_job_name))
                    return "target_job_name: string expected";
            if (message.eresult != null && $Object.hasOwnProperty.call(message, "eresult"))
                if (!$util.isInteger(message.eresult))
                    return "eresult: integer expected";
            if (message.error_message != null && $Object.hasOwnProperty.call(message, "error_message"))
                if (!$util.isString(message.error_message))
                    return "error_message: string expected";
            if (message.ip != null && $Object.hasOwnProperty.call(message, "ip"))
                if (!$util.isInteger(message.ip))
                    return "ip: integer expected";
            if (message.gc_msg_src != null && $Object.hasOwnProperty.call(message, "gc_msg_src"))
                switch (message.gc_msg_src) {
                default:
                    return "gc_msg_src: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.gc_dir_index_source != null && $Object.hasOwnProperty.call(message, "gc_dir_index_source"))
                if (!$util.isInteger(message.gc_dir_index_source))
                    return "gc_dir_index_source: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgProtoBufHeader message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgProtoBufHeader} CMsgProtoBufHeader
         */
        CMsgProtoBufHeader.fromObject = function (object, _depth) {
            if (object instanceof $root.CMsgProtoBufHeader)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".CMsgProtoBufHeader: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.CMsgProtoBufHeader();
            if (object.client_steam_id != null)
                if ($util.Long)
                    message.client_steam_id = $util.Long.fromValue(object.client_steam_id, true);
                else if (typeof object.client_steam_id === "string")
                    message.client_steam_id = $parseInt(object.client_steam_id, 10);
                else if (typeof object.client_steam_id === "number")
                    message.client_steam_id = object.client_steam_id;
                else if (typeof object.client_steam_id === "object")
                    message.client_steam_id = new $util.LongBits(object.client_steam_id.low >>> 0, object.client_steam_id.high >>> 0).toNumber(true);
            if (object.client_session_id != null)
                message.client_session_id = object.client_session_id | 0;
            if (object.source_app_id != null)
                message.source_app_id = object.source_app_id >>> 0;
            if (object.job_id_source != null)
                if ($util.Long)
                    message.job_id_source = $util.Long.fromValue(object.job_id_source, true);
                else if (typeof object.job_id_source === "string")
                    message.job_id_source = $parseInt(object.job_id_source, 10);
                else if (typeof object.job_id_source === "number")
                    message.job_id_source = object.job_id_source;
                else if (typeof object.job_id_source === "object")
                    message.job_id_source = new $util.LongBits(object.job_id_source.low >>> 0, object.job_id_source.high >>> 0).toNumber(true);
            if (object.job_id_target != null)
                if ($util.Long)
                    message.job_id_target = $util.Long.fromValue(object.job_id_target, true);
                else if (typeof object.job_id_target === "string")
                    message.job_id_target = $parseInt(object.job_id_target, 10);
                else if (typeof object.job_id_target === "number")
                    message.job_id_target = object.job_id_target;
                else if (typeof object.job_id_target === "object")
                    message.job_id_target = new $util.LongBits(object.job_id_target.low >>> 0, object.job_id_target.high >>> 0).toNumber(true);
            if (object.target_job_name != null)
                message.target_job_name = $String(object.target_job_name);
            if (object.eresult != null)
                message.eresult = object.eresult | 0;
            if (object.error_message != null)
                message.error_message = $String(object.error_message);
            if (object.ip != null)
                message.ip = object.ip >>> 0;
            switch (object.gc_msg_src) {
            case "GCProtoBufMsgSrc_Unspecified":
            case 0:
                message.gc_msg_src = 0;
                break;
            case "GCProtoBufMsgSrc_FromSystem":
            case 1:
                message.gc_msg_src = 1;
                break;
            case "GCProtoBufMsgSrc_FromSteamID":
            case 2:
                message.gc_msg_src = 2;
                break;
            case "GCProtoBufMsgSrc_FromGC":
            case 3:
                message.gc_msg_src = 3;
                break;
            case "GCProtoBufMsgSrc_ReplySystem":
            case 4:
                message.gc_msg_src = 4;
                break;
            default:
            }
            if (object.gc_dir_index_source != null)
                message.gc_dir_index_source = object.gc_dir_index_source >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgProtoBufHeader message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {CMsgProtoBufHeader} message CMsgProtoBufHeader
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgProtoBufHeader.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.client_steam_id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                } else
                    object.client_steam_id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                object.client_session_id = 0;
                object.source_app_id = 0;
                if ($util.Long) {
                    var long = new $util.Long(-1, -1, true);
                    object.job_id_source = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                } else
                    object.job_id_source = options.longs === $String ? "18446744073709551615" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("18446744073709551615") : 18446744073709552000;
                if ($util.Long) {
                    var long = new $util.Long(-1, -1, true);
                    object.job_id_target = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                } else
                    object.job_id_target = options.longs === $String ? "18446744073709551615" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("18446744073709551615") : 18446744073709552000;
                object.target_job_name = "";
                object.eresult = 2;
                object.error_message = "";
                object.ip = 0;
                object.gc_msg_src = options.enums === $String ? "GCProtoBufMsgSrc_Unspecified" : 0;
                object.gc_dir_index_source = 0;
            }
            if (message.client_steam_id != null && $Object.hasOwnProperty.call(message, "client_steam_id"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.client_steam_id = typeof message.client_steam_id === "number" ? $BigInt(message.client_steam_id) : $util.Long.fromBits(message.client_steam_id.low >>> 0, message.client_steam_id.high >>> 0, true).toBigInt();
                else if (typeof message.client_steam_id === "number")
                    object.client_steam_id = options.longs === $String ? $String(message.client_steam_id) : message.client_steam_id;
                else
                    object.client_steam_id = options.longs === $String ? $util.Long.prototype.toString.call(message.client_steam_id) : options.longs === $Number ? new $util.LongBits(message.client_steam_id.low >>> 0, message.client_steam_id.high >>> 0).toNumber(true) : message.client_steam_id;
            if (message.client_session_id != null && $Object.hasOwnProperty.call(message, "client_session_id"))
                object.client_session_id = message.client_session_id;
            if (message.source_app_id != null && $Object.hasOwnProperty.call(message, "source_app_id"))
                object.source_app_id = message.source_app_id;
            if (message.job_id_source != null && $Object.hasOwnProperty.call(message, "job_id_source"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.job_id_source = typeof message.job_id_source === "number" ? $BigInt(message.job_id_source) : $util.Long.fromBits(message.job_id_source.low >>> 0, message.job_id_source.high >>> 0, true).toBigInt();
                else if (typeof message.job_id_source === "number")
                    object.job_id_source = options.longs === $String ? $String(message.job_id_source) : message.job_id_source;
                else
                    object.job_id_source = options.longs === $String ? $util.Long.prototype.toString.call(message.job_id_source) : options.longs === $Number ? new $util.LongBits(message.job_id_source.low >>> 0, message.job_id_source.high >>> 0).toNumber(true) : message.job_id_source;
            if (message.job_id_target != null && $Object.hasOwnProperty.call(message, "job_id_target"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.job_id_target = typeof message.job_id_target === "number" ? $BigInt(message.job_id_target) : $util.Long.fromBits(message.job_id_target.low >>> 0, message.job_id_target.high >>> 0, true).toBigInt();
                else if (typeof message.job_id_target === "number")
                    object.job_id_target = options.longs === $String ? $String(message.job_id_target) : message.job_id_target;
                else
                    object.job_id_target = options.longs === $String ? $util.Long.prototype.toString.call(message.job_id_target) : options.longs === $Number ? new $util.LongBits(message.job_id_target.low >>> 0, message.job_id_target.high >>> 0).toNumber(true) : message.job_id_target;
            if (message.target_job_name != null && $Object.hasOwnProperty.call(message, "target_job_name"))
                object.target_job_name = message.target_job_name;
            if (message.eresult != null && $Object.hasOwnProperty.call(message, "eresult"))
                object.eresult = message.eresult;
            if (message.error_message != null && $Object.hasOwnProperty.call(message, "error_message"))
                object.error_message = message.error_message;
            if (message.ip != null && $Object.hasOwnProperty.call(message, "ip"))
                object.ip = message.ip;
            if (message.gc_msg_src != null && $Object.hasOwnProperty.call(message, "gc_msg_src"))
                object.gc_msg_src = options.enums === $String ? $root.GCProtoBufMsgSrc[message.gc_msg_src] === $undefined ? message.gc_msg_src : $root.GCProtoBufMsgSrc[message.gc_msg_src] : message.gc_msg_src;
            if (message.gc_dir_index_source != null && $Object.hasOwnProperty.call(message, "gc_dir_index_source"))
                object.gc_dir_index_source = message.gc_dir_index_source;
            return object;
        };
    
        /**
         * Converts this CMsgProtoBufHeader to JSON.
         * @function toJSON
         * @memberof CMsgProtoBufHeader
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgProtoBufHeader.prototype.toJSON = function() {
            return CMsgProtoBufHeader.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the type url for CMsgProtoBufHeader
         * @function getTypeUrl
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        CMsgProtoBufHeader.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/CMsgProtoBufHeader";
        };
    
        return CMsgProtoBufHeader;
    })();
    
    $root.CChinaAgreementSessions_StartAgreementSessionInGame_Request = (function() {
    
        /**
         * Properties of a CChinaAgreementSessions_StartAgreementSessionInGame_Request.
         * @typedef {Object} CChinaAgreementSessions_StartAgreementSessionInGame_Request.$Properties
         * @property {number|null} [appid] CChinaAgreementSessions_StartAgreementSessionInGame_Request appid
         * @property {number|Long|null} [steamid] CChinaAgreementSessions_StartAgreementSessionInGame_Request steamid
         * @property {string|null} [client_ipaddress] CChinaAgreementSessions_StartAgreementSessionInGame_Request client_ipaddress
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
    
        /**
         * Properties of a CChinaAgreementSessions_StartAgreementSessionInGame_Request.
         * @exports ICChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @interface ICChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @augments CChinaAgreementSessions_StartAgreementSessionInGame_Request.$Properties
         * @deprecated Use CChinaAgreementSessions_StartAgreementSessionInGame_Request.$Properties instead.
         */
    
        /**
         * Shape of a CChinaAgreementSessions_StartAgreementSessionInGame_Request.
         * @typedef {CChinaAgreementSessions_StartAgreementSessionInGame_Request.$Properties} CChinaAgreementSessions_StartAgreementSessionInGame_Request.$Shape
         */
    
        /**
         * Constructs a new CChinaAgreementSessions_StartAgreementSessionInGame_Request.
         * @exports CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @classdesc Represents a CChinaAgreementSessions_StartAgreementSessionInGame_Request.
         * @constructor
         * @param {CChinaAgreementSessions_StartAgreementSessionInGame_Request.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var CChinaAgreementSessions_StartAgreementSessionInGame_Request = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };
    
        /**
         * CChinaAgreementSessions_StartAgreementSessionInGame_Request appid.
         * @member {number} appid
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @instance
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Request.prototype.appid = 0;
    
        /**
         * CChinaAgreementSessions_StartAgreementSessionInGame_Request steamid.
         * @member {number|Long} steamid
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @instance
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CChinaAgreementSessions_StartAgreementSessionInGame_Request client_ipaddress.
         * @member {string} client_ipaddress
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @instance
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Request.prototype.client_ipaddress = "";
    
        /**
         * Creates a new CChinaAgreementSessions_StartAgreementSessionInGame_Request instance using the specified properties.
         * @function create
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @static
         * @param {CChinaAgreementSessions_StartAgreementSessionInGame_Request.$Properties=} [properties] Properties to set
         * @returns {CChinaAgreementSessions_StartAgreementSessionInGame_Request} CChinaAgreementSessions_StartAgreementSessionInGame_Request instance
         * @type {{
         *   (properties: CChinaAgreementSessions_StartAgreementSessionInGame_Request.$Shape): CChinaAgreementSessions_StartAgreementSessionInGame_Request & CChinaAgreementSessions_StartAgreementSessionInGame_Request.$Shape;
         *   (properties?: CChinaAgreementSessions_StartAgreementSessionInGame_Request.$Properties): CChinaAgreementSessions_StartAgreementSessionInGame_Request;
         * }}
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Request.create = function(properties) {
            return new CChinaAgreementSessions_StartAgreementSessionInGame_Request(properties);
        };
    
        /**
         * Encodes the specified CChinaAgreementSessions_StartAgreementSessionInGame_Request message. Does not implicitly {@link CChinaAgreementSessions_StartAgreementSessionInGame_Request.verify|verify} messages.
         * @function encode
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @static
         * @param {CChinaAgreementSessions_StartAgreementSessionInGame_Request.$Properties} message CChinaAgreementSessions_StartAgreementSessionInGame_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Request.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.appid != null && $Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.steamid != null && $Object.hasOwnProperty.call(message, "steamid"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.steamid);
            if (message.client_ipaddress != null && $Object.hasOwnProperty.call(message, "client_ipaddress"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.client_ipaddress);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CChinaAgreementSessions_StartAgreementSessionInGame_Request message, length delimited. Does not implicitly {@link CChinaAgreementSessions_StartAgreementSessionInGame_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @static
         * @param {CChinaAgreementSessions_StartAgreementSessionInGame_Request.$Properties} message CChinaAgreementSessions_StartAgreementSessionInGame_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Request.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };
    
        /**
         * Decodes a CChinaAgreementSessions_StartAgreementSessionInGame_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CChinaAgreementSessions_StartAgreementSessionInGame_Request & CChinaAgreementSessions_StartAgreementSessionInGame_Request.$Shape} CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Request.decode = function (reader, length, _end, _depth, _target) {
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
            message = _target || new $root.CChinaAgreementSessions_StartAgreementSessionInGame_Request();
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
                        message.appid = reader.uint32();
                        continue;
                    }
                case 2: {
                        if (wireType !== 1)
                            break;
                        message.steamid = reader.fixed64();
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.client_ipaddress = reader.string();
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
         * Decodes a CChinaAgreementSessions_StartAgreementSessionInGame_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CChinaAgreementSessions_StartAgreementSessionInGame_Request & CChinaAgreementSessions_StartAgreementSessionInGame_Request.$Shape} CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Request.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };
    
        /**
         * Verifies a CChinaAgreementSessions_StartAgreementSessionInGame_Request message.
         * @function verify
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Request.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.appid != null && $Object.hasOwnProperty.call(message, "appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.steamid != null && $Object.hasOwnProperty.call(message, "steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.client_ipaddress != null && $Object.hasOwnProperty.call(message, "client_ipaddress"))
                if (!$util.isString(message.client_ipaddress))
                    return "client_ipaddress: string expected";
            return null;
        };
    
        /**
         * Creates a CChinaAgreementSessions_StartAgreementSessionInGame_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CChinaAgreementSessions_StartAgreementSessionInGame_Request} CChinaAgreementSessions_StartAgreementSessionInGame_Request
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Request.fromObject = function (object, _depth) {
            if (object instanceof $root.CChinaAgreementSessions_StartAgreementSessionInGame_Request)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".CChinaAgreementSessions_StartAgreementSessionInGame_Request: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.CChinaAgreementSessions_StartAgreementSessionInGame_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.steamid != null)
                if ($util.Long)
                    message.steamid = $util.Long.fromValue(object.steamid, true);
                else if (typeof object.steamid === "string")
                    message.steamid = $parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber(true);
            if (object.client_ipaddress != null)
                message.client_ipaddress = $String(object.client_ipaddress);
            return message;
        };
    
        /**
         * Creates a plain object from a CChinaAgreementSessions_StartAgreementSessionInGame_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @static
         * @param {CChinaAgreementSessions_StartAgreementSessionInGame_Request} message CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Request.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.steamid = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                } else
                    object.steamid = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                object.client_ipaddress = "";
            }
            if (message.appid != null && $Object.hasOwnProperty.call(message, "appid"))
                object.appid = message.appid;
            if (message.steamid != null && $Object.hasOwnProperty.call(message, "steamid"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.steamid = typeof message.steamid === "number" ? $BigInt(message.steamid) : $util.Long.fromBits(message.steamid.low >>> 0, message.steamid.high >>> 0, true).toBigInt();
                else if (typeof message.steamid === "number")
                    object.steamid = options.longs === $String ? $String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === $String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === $Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber(true) : message.steamid;
            if (message.client_ipaddress != null && $Object.hasOwnProperty.call(message, "client_ipaddress"))
                object.client_ipaddress = message.client_ipaddress;
            return object;
        };
    
        /**
         * Converts this CChinaAgreementSessions_StartAgreementSessionInGame_Request to JSON.
         * @function toJSON
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Request.prototype.toJSON = function() {
            return CChinaAgreementSessions_StartAgreementSessionInGame_Request.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the type url for CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @function getTypeUrl
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Request
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Request.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/CChinaAgreementSessions_StartAgreementSessionInGame_Request";
        };
    
        return CChinaAgreementSessions_StartAgreementSessionInGame_Request;
    })();
    
    $root.CChinaAgreementSessions_StartAgreementSessionInGame_Response = (function() {
    
        /**
         * Properties of a CChinaAgreementSessions_StartAgreementSessionInGame_Response.
         * @typedef {Object} CChinaAgreementSessions_StartAgreementSessionInGame_Response.$Properties
         * @property {string|null} [agreement_url] CChinaAgreementSessions_StartAgreementSessionInGame_Response agreement_url
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
    
        /**
         * Properties of a CChinaAgreementSessions_StartAgreementSessionInGame_Response.
         * @exports ICChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @interface ICChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @augments CChinaAgreementSessions_StartAgreementSessionInGame_Response.$Properties
         * @deprecated Use CChinaAgreementSessions_StartAgreementSessionInGame_Response.$Properties instead.
         */
    
        /**
         * Shape of a CChinaAgreementSessions_StartAgreementSessionInGame_Response.
         * @typedef {CChinaAgreementSessions_StartAgreementSessionInGame_Response.$Properties} CChinaAgreementSessions_StartAgreementSessionInGame_Response.$Shape
         */
    
        /**
         * Constructs a new CChinaAgreementSessions_StartAgreementSessionInGame_Response.
         * @exports CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @classdesc Represents a CChinaAgreementSessions_StartAgreementSessionInGame_Response.
         * @constructor
         * @param {CChinaAgreementSessions_StartAgreementSessionInGame_Response.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var CChinaAgreementSessions_StartAgreementSessionInGame_Response = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };
    
        /**
         * CChinaAgreementSessions_StartAgreementSessionInGame_Response agreement_url.
         * @member {string} agreement_url
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @instance
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Response.prototype.agreement_url = "";
    
        /**
         * Creates a new CChinaAgreementSessions_StartAgreementSessionInGame_Response instance using the specified properties.
         * @function create
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @static
         * @param {CChinaAgreementSessions_StartAgreementSessionInGame_Response.$Properties=} [properties] Properties to set
         * @returns {CChinaAgreementSessions_StartAgreementSessionInGame_Response} CChinaAgreementSessions_StartAgreementSessionInGame_Response instance
         * @type {{
         *   (properties: CChinaAgreementSessions_StartAgreementSessionInGame_Response.$Shape): CChinaAgreementSessions_StartAgreementSessionInGame_Response & CChinaAgreementSessions_StartAgreementSessionInGame_Response.$Shape;
         *   (properties?: CChinaAgreementSessions_StartAgreementSessionInGame_Response.$Properties): CChinaAgreementSessions_StartAgreementSessionInGame_Response;
         * }}
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Response.create = function(properties) {
            return new CChinaAgreementSessions_StartAgreementSessionInGame_Response(properties);
        };
    
        /**
         * Encodes the specified CChinaAgreementSessions_StartAgreementSessionInGame_Response message. Does not implicitly {@link CChinaAgreementSessions_StartAgreementSessionInGame_Response.verify|verify} messages.
         * @function encode
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @static
         * @param {CChinaAgreementSessions_StartAgreementSessionInGame_Response.$Properties} message CChinaAgreementSessions_StartAgreementSessionInGame_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Response.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.agreement_url != null && $Object.hasOwnProperty.call(message, "agreement_url"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.agreement_url);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CChinaAgreementSessions_StartAgreementSessionInGame_Response message, length delimited. Does not implicitly {@link CChinaAgreementSessions_StartAgreementSessionInGame_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @static
         * @param {CChinaAgreementSessions_StartAgreementSessionInGame_Response.$Properties} message CChinaAgreementSessions_StartAgreementSessionInGame_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Response.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };
    
        /**
         * Decodes a CChinaAgreementSessions_StartAgreementSessionInGame_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CChinaAgreementSessions_StartAgreementSessionInGame_Response & CChinaAgreementSessions_StartAgreementSessionInGame_Response.$Shape} CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Response.decode = function (reader, length, _end, _depth, _target) {
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
            message = _target || new $root.CChinaAgreementSessions_StartAgreementSessionInGame_Response();
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
                        message.agreement_url = reader.string();
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
         * Decodes a CChinaAgreementSessions_StartAgreementSessionInGame_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CChinaAgreementSessions_StartAgreementSessionInGame_Response & CChinaAgreementSessions_StartAgreementSessionInGame_Response.$Shape} CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Response.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };
    
        /**
         * Verifies a CChinaAgreementSessions_StartAgreementSessionInGame_Response message.
         * @function verify
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Response.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.agreement_url != null && $Object.hasOwnProperty.call(message, "agreement_url"))
                if (!$util.isString(message.agreement_url))
                    return "agreement_url: string expected";
            return null;
        };
    
        /**
         * Creates a CChinaAgreementSessions_StartAgreementSessionInGame_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CChinaAgreementSessions_StartAgreementSessionInGame_Response} CChinaAgreementSessions_StartAgreementSessionInGame_Response
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Response.fromObject = function (object, _depth) {
            if (object instanceof $root.CChinaAgreementSessions_StartAgreementSessionInGame_Response)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".CChinaAgreementSessions_StartAgreementSessionInGame_Response: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.CChinaAgreementSessions_StartAgreementSessionInGame_Response();
            if (object.agreement_url != null)
                message.agreement_url = $String(object.agreement_url);
            return message;
        };
    
        /**
         * Creates a plain object from a CChinaAgreementSessions_StartAgreementSessionInGame_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @static
         * @param {CChinaAgreementSessions_StartAgreementSessionInGame_Response} message CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Response.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.defaults)
                object.agreement_url = "";
            if (message.agreement_url != null && $Object.hasOwnProperty.call(message, "agreement_url"))
                object.agreement_url = message.agreement_url;
            return object;
        };
    
        /**
         * Converts this CChinaAgreementSessions_StartAgreementSessionInGame_Response to JSON.
         * @function toJSON
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Response.prototype.toJSON = function() {
            return CChinaAgreementSessions_StartAgreementSessionInGame_Response.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the type url for CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @function getTypeUrl
         * @memberof CChinaAgreementSessions_StartAgreementSessionInGame_Response
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        CChinaAgreementSessions_StartAgreementSessionInGame_Response.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/CChinaAgreementSessions_StartAgreementSessionInGame_Response";
        };
    
        return CChinaAgreementSessions_StartAgreementSessionInGame_Response;
    })();
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.FileDescriptorSet = (function() {
    
                /**
                 * Properties of a FileDescriptorSet.
                 * @typedef {Object} google.protobuf.FileDescriptorSet.$Properties
                 * @property {Array.<google.protobuf.FileDescriptorProto.$Properties>|null} [file] FileDescriptorSet file
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
    
                /**
                 * Properties of a FileDescriptorSet.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorSet
                 * @augments google.protobuf.FileDescriptorSet.$Properties
                 * @deprecated Use google.protobuf.FileDescriptorSet.$Properties instead.
                 */
    
                /**
                 * Shape of a FileDescriptorSet.
                 * @typedef {google.protobuf.FileDescriptorSet.$Properties} google.protobuf.FileDescriptorSet.$Shape
                 */
    
                /**
                 * Constructs a new FileDescriptorSet.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorSet.
                 * @constructor
                 * @param {google.protobuf.FileDescriptorSet.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var FileDescriptorSet = function (properties) {
                    this.file = [];
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };
    
                /**
                 * FileDescriptorSet file.
                 * @member {Array.<google.protobuf.FileDescriptorProto.$Properties>} file
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 */
                FileDescriptorSet.prototype.file = $util.emptyArray;
    
                /**
                 * Creates a new FileDescriptorSet instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.FileDescriptorSet.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
                 * @type {{
                 *   (properties: google.protobuf.FileDescriptorSet.$Shape): google.protobuf.FileDescriptorSet & google.protobuf.FileDescriptorSet.$Shape;
                 *   (properties?: google.protobuf.FileDescriptorSet.$Properties): google.protobuf.FileDescriptorSet;
                 * }}
                 */
                FileDescriptorSet.create = function(properties) {
                    return new FileDescriptorSet(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.FileDescriptorSet.$Properties} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.file != null && message.file.length)
                        for (var i = 0; i < message.file.length; ++i)
                            $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.FileDescriptorSet.$Properties} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorSet message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorSet & google.protobuf.FileDescriptorSet.$Shape} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decode = function (reader, length, _end, _depth, _target) {
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
                    message = _target || new $root.google.protobuf.FileDescriptorSet();
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
                                if (!(message.file && message.file.length))
                                    message.file = [];
                                message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.size(), $undefined, _depth + 1));
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
                 * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorSet & google.protobuf.FileDescriptorSet.$Shape} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.size());
                };
    
                /**
                 * Verifies a FileDescriptorSet message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorSet.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.file != null && $Object.hasOwnProperty.call(message, "file")) {
                        if (!$Array.isArray(message.file))
                            return "file: array expected";
                        for (var i = 0; i < message.file.length; ++i) {
                            var error = $root.google.protobuf.FileDescriptorProto.verify(message.file[i], _depth + 1);
                            if (error)
                                return "file." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 */
                FileDescriptorSet.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.FileDescriptorSet)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.FileDescriptorSet: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.FileDescriptorSet();
                    if (object.file) {
                        if (!$Array.isArray(object.file))
                            throw $TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                        message.file = $Array(object.file.length);
                        for (var i = 0; i < object.file.length; ++i) {
                            if (!$util.isObject(object.file[i]))
                                throw $TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                            message.file[i] = $root.google.protobuf.FileDescriptorProto.fromObject(object.file[i], _depth + 1);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorSet.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.file = [];
                    if (message.file && message.file.length) {
                        object.file = $Array(message.file.length);
                        for (var j = 0; j < message.file.length; ++j)
                            object.file[j] = $root.google.protobuf.FileDescriptorProto.toObject(message.file[j], options, _depth + 1);
                    }
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorSet to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorSet.prototype.toJSON = function() {
                    return FileDescriptorSet.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the type url for FileDescriptorSet
                 * @function getTypeUrl
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                FileDescriptorSet.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.FileDescriptorSet";
                };
    
                return FileDescriptorSet;
            })();
    
            protobuf.FileDescriptorProto = (function() {
    
                /**
                 * Properties of a FileDescriptorProto.
                 * @typedef {Object} google.protobuf.FileDescriptorProto.$Properties
                 * @property {string|null} [name] FileDescriptorProto name
                 * @property {string|null} ["package"] FileDescriptorProto package
                 * @property {Array.<string>|null} [dependency] FileDescriptorProto dependency
                 * @property {Array.<number>|null} [public_dependency] FileDescriptorProto public_dependency
                 * @property {Array.<number>|null} [weak_dependency] FileDescriptorProto weak_dependency
                 * @property {Array.<google.protobuf.DescriptorProto.$Properties>|null} [message_type] FileDescriptorProto message_type
                 * @property {Array.<google.protobuf.EnumDescriptorProto.$Properties>|null} [enum_type] FileDescriptorProto enum_type
                 * @property {Array.<google.protobuf.ServiceDescriptorProto.$Properties>|null} [service] FileDescriptorProto service
                 * @property {Array.<google.protobuf.FieldDescriptorProto.$Properties>|null} [extension] FileDescriptorProto extension
                 * @property {google.protobuf.FileOptions.$Properties|null} [options] FileDescriptorProto options
                 * @property {google.protobuf.SourceCodeInfo.$Properties|null} [source_code_info] FileDescriptorProto source_code_info
                 * @property {string|null} [syntax] FileDescriptorProto syntax
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
    
                /**
                 * Properties of a FileDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorProto
                 * @augments google.protobuf.FileDescriptorProto.$Properties
                 * @deprecated Use google.protobuf.FileDescriptorProto.$Properties instead.
                 */
    
                /**
                 * Shape of a FileDescriptorProto.
                 * @typedef {google.protobuf.FileDescriptorProto.$Properties} google.protobuf.FileDescriptorProto.$Shape
                 */
    
                /**
                 * Constructs a new FileDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorProto.
                 * @constructor
                 * @param {google.protobuf.FileDescriptorProto.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var FileDescriptorProto = function (properties) {
                    this.dependency = [];
                    this.public_dependency = [];
                    this.weak_dependency = [];
                    this.message_type = [];
                    this.enum_type = [];
                    this.service = [];
                    this.extension = [];
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };
    
                /**
                 * FileDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.name = "";
    
                /**
                 * FileDescriptorProto package.
                 * @member {string} package
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype["package"] = "";
    
                /**
                 * FileDescriptorProto dependency.
                 * @member {Array.<string>} dependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.dependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto public_dependency.
                 * @member {Array.<number>} public_dependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.public_dependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto weak_dependency.
                 * @member {Array.<number>} weak_dependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.weak_dependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto message_type.
                 * @member {Array.<google.protobuf.DescriptorProto.$Properties>} message_type
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.message_type = $util.emptyArray;
    
                /**
                 * FileDescriptorProto enum_type.
                 * @member {Array.<google.protobuf.EnumDescriptorProto.$Properties>} enum_type
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.enum_type = $util.emptyArray;
    
                /**
                 * FileDescriptorProto service.
                 * @member {Array.<google.protobuf.ServiceDescriptorProto.$Properties>} service
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.service = $util.emptyArray;
    
                /**
                 * FileDescriptorProto extension.
                 * @member {Array.<google.protobuf.FieldDescriptorProto.$Properties>} extension
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * FileDescriptorProto options.
                 * @member {google.protobuf.FileOptions.$Properties|null|undefined} options
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.options = null;
    
                /**
                 * FileDescriptorProto source_code_info.
                 * @member {google.protobuf.SourceCodeInfo.$Properties|null|undefined} source_code_info
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.source_code_info = null;
    
                /**
                 * FileDescriptorProto syntax.
                 * @member {string} syntax
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.syntax = "";
    
                /**
                 * Creates a new FileDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.FileDescriptorProto.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
                 * @type {{
                 *   (properties: google.protobuf.FileDescriptorProto.$Shape): google.protobuf.FileDescriptorProto & google.protobuf.FileDescriptorProto.$Shape;
                 *   (properties?: google.protobuf.FileDescriptorProto.$Properties): google.protobuf.FileDescriptorProto;
                 * }}
                 */
                FileDescriptorProto.create = function(properties) {
                    return new FileDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.FileDescriptorProto.$Properties} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message["package"] != null && $Object.hasOwnProperty.call(message, "package"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                    if (message.dependency != null && message.dependency.length)
                        for (var i = 0; i < message.dependency.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                    if (message.message_type != null && message.message_type.length)
                        for (var i = 0; i < message.message_type.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.message_type[i], writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
                    if (message.enum_type != null && message.enum_type.length)
                        for (var i = 0; i < message.enum_type.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enum_type[i], writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
                    if (message.service != null && message.service.length)
                        for (var i = 0; i < message.service.length; ++i)
                            $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
                    if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork(), _depth + 1).ldelim();
                    if (message.source_code_info != null && $Object.hasOwnProperty.call(message, "source_code_info"))
                        $root.google.protobuf.SourceCodeInfo.encode(message.source_code_info, writer.uint32(/* id 9, wireType 2 =*/74).fork(), _depth + 1).ldelim();
                    if (message.public_dependency != null && message.public_dependency.length)
                        for (var i = 0; i < message.public_dependency.length; ++i)
                            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.public_dependency[i]);
                    if (message.weak_dependency != null && message.weak_dependency.length)
                        for (var i = 0; i < message.weak_dependency.length; ++i)
                            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weak_dependency[i]);
                    if (message.syntax != null && $Object.hasOwnProperty.call(message, "syntax"))
                        writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.FileDescriptorProto.$Properties} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorProto & google.protobuf.FileDescriptorProto.$Shape} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decode = function (reader, length, _end, _depth, _target) {
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
                    message = _target || new $root.google.protobuf.FileDescriptorProto();
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
                                message.name = reader.string();
                                continue;
                            }
                        case 2: {
                                if (wireType !== 2)
                                    break;
                                message["package"] = reader.string();
                                continue;
                            }
                        case 3: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.dependency && message.dependency.length))
                                    message.dependency = [];
                                message.dependency.push(reader.string());
                                continue;
                            }
                        case 10: {
                                if (wireType === 2) {
                                    if (!(message.public_dependency && message.public_dependency.length))
                                        message.public_dependency = [];
                                    reader.int32s(message.public_dependency);
                                    continue;
                                }
                                if (wireType !== 0)
                                    break;
                                if (!(message.public_dependency && message.public_dependency.length))
                                    message.public_dependency = [];
                                message.public_dependency.push(reader.int32());
                                continue;
                            }
                        case 11: {
                                if (wireType === 2) {
                                    if (!(message.weak_dependency && message.weak_dependency.length))
                                        message.weak_dependency = [];
                                    reader.int32s(message.weak_dependency);
                                    continue;
                                }
                                if (wireType !== 0)
                                    break;
                                if (!(message.weak_dependency && message.weak_dependency.length))
                                    message.weak_dependency = [];
                                message.weak_dependency.push(reader.int32());
                                continue;
                            }
                        case 4: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.message_type && message.message_type.length))
                                    message.message_type = [];
                                message.message_type.push($root.google.protobuf.DescriptorProto.decode(reader, reader.size(), $undefined, _depth + 1));
                                continue;
                            }
                        case 5: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.enum_type && message.enum_type.length))
                                    message.enum_type = [];
                                message.enum_type.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.size(), $undefined, _depth + 1));
                                continue;
                            }
                        case 6: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.service && message.service.length))
                                    message.service = [];
                                message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.size(), $undefined, _depth + 1));
                                continue;
                            }
                        case 7: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.extension && message.extension.length))
                                    message.extension = [];
                                message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.size(), $undefined, _depth + 1));
                                continue;
                            }
                        case 8: {
                                if (wireType !== 2)
                                    break;
                                message.options = $root.google.protobuf.FileOptions.decode(reader, reader.size(), $undefined, _depth + 1, message.options);
                                continue;
                            }
                        case 9: {
                                if (wireType !== 2)
                                    break;
                                message.source_code_info = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.size(), $undefined, _depth + 1, message.source_code_info);
                                continue;
                            }
                        case 12: {
                                if (wireType !== 2)
                                    break;
                                message.syntax = reader.string();
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
                 * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorProto & google.protobuf.FileDescriptorProto.$Shape} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.size());
                };
    
                /**
                 * Verifies a FileDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorProto.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message["package"] != null && $Object.hasOwnProperty.call(message, "package"))
                        if (!$util.isString(message["package"]))
                            return "package: string expected";
                    if (message.dependency != null && $Object.hasOwnProperty.call(message, "dependency")) {
                        if (!$Array.isArray(message.dependency))
                            return "dependency: array expected";
                        for (var i = 0; i < message.dependency.length; ++i)
                            if (!$util.isString(message.dependency[i]))
                                return "dependency: string[] expected";
                    }
                    if (message.public_dependency != null && $Object.hasOwnProperty.call(message, "public_dependency")) {
                        if (!$Array.isArray(message.public_dependency))
                            return "public_dependency: array expected";
                        for (var i = 0; i < message.public_dependency.length; ++i)
                            if (!$util.isInteger(message.public_dependency[i]))
                                return "public_dependency: integer[] expected";
                    }
                    if (message.weak_dependency != null && $Object.hasOwnProperty.call(message, "weak_dependency")) {
                        if (!$Array.isArray(message.weak_dependency))
                            return "weak_dependency: array expected";
                        for (var i = 0; i < message.weak_dependency.length; ++i)
                            if (!$util.isInteger(message.weak_dependency[i]))
                                return "weak_dependency: integer[] expected";
                    }
                    if (message.message_type != null && $Object.hasOwnProperty.call(message, "message_type")) {
                        if (!$Array.isArray(message.message_type))
                            return "message_type: array expected";
                        for (var i = 0; i < message.message_type.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.message_type[i], _depth + 1);
                            if (error)
                                return "message_type." + error;
                        }
                    }
                    if (message.enum_type != null && $Object.hasOwnProperty.call(message, "enum_type")) {
                        if (!$Array.isArray(message.enum_type))
                            return "enum_type: array expected";
                        for (var i = 0; i < message.enum_type.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enum_type[i], _depth + 1);
                            if (error)
                                return "enum_type." + error;
                        }
                    }
                    if (message.service != null && $Object.hasOwnProperty.call(message, "service")) {
                        if (!$Array.isArray(message.service))
                            return "service: array expected";
                        for (var i = 0; i < message.service.length; ++i) {
                            var error = $root.google.protobuf.ServiceDescriptorProto.verify(message.service[i], _depth + 1);
                            if (error)
                                return "service." + error;
                        }
                    }
                    if (message.extension != null && $Object.hasOwnProperty.call(message, "extension")) {
                        if (!$Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i], _depth + 1);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.options != null && $Object.hasOwnProperty.call(message, "options")) {
                        var error = $root.google.protobuf.FileOptions.verify(message.options, _depth + 1);
                        if (error)
                            return "options." + error;
                    }
                    if (message.source_code_info != null && $Object.hasOwnProperty.call(message, "source_code_info")) {
                        var error = $root.google.protobuf.SourceCodeInfo.verify(message.source_code_info, _depth + 1);
                        if (error)
                            return "source_code_info." + error;
                    }
                    if (message.syntax != null && $Object.hasOwnProperty.call(message, "syntax"))
                        if (!$util.isString(message.syntax))
                            return "syntax: string expected";
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 */
                FileDescriptorProto.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.FileDescriptorProto)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.FileDescriptorProto: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.FileDescriptorProto();
                    if (object.name != null)
                        message.name = $String(object.name);
                    if (object["package"] != null)
                        message["package"] = $String(object["package"]);
                    if (object.dependency) {
                        if (!$Array.isArray(object.dependency))
                            throw $TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                        message.dependency = $Array(object.dependency.length);
                        for (var i = 0; i < object.dependency.length; ++i)
                            message.dependency[i] = $String(object.dependency[i]);
                    }
                    if (object.public_dependency) {
                        if (!$Array.isArray(object.public_dependency))
                            throw $TypeError(".google.protobuf.FileDescriptorProto.public_dependency: array expected");
                        message.public_dependency = $Array(object.public_dependency.length);
                        for (var i = 0; i < object.public_dependency.length; ++i)
                            message.public_dependency[i] = object.public_dependency[i] | 0;
                    }
                    if (object.weak_dependency) {
                        if (!$Array.isArray(object.weak_dependency))
                            throw $TypeError(".google.protobuf.FileDescriptorProto.weak_dependency: array expected");
                        message.weak_dependency = $Array(object.weak_dependency.length);
                        for (var i = 0; i < object.weak_dependency.length; ++i)
                            message.weak_dependency[i] = object.weak_dependency[i] | 0;
                    }
                    if (object.message_type) {
                        if (!$Array.isArray(object.message_type))
                            throw $TypeError(".google.protobuf.FileDescriptorProto.message_type: array expected");
                        message.message_type = $Array(object.message_type.length);
                        for (var i = 0; i < object.message_type.length; ++i) {
                            if (!$util.isObject(object.message_type[i]))
                                throw $TypeError(".google.protobuf.FileDescriptorProto.message_type: object expected");
                            message.message_type[i] = $root.google.protobuf.DescriptorProto.fromObject(object.message_type[i], _depth + 1);
                        }
                    }
                    if (object.enum_type) {
                        if (!$Array.isArray(object.enum_type))
                            throw $TypeError(".google.protobuf.FileDescriptorProto.enum_type: array expected");
                        message.enum_type = $Array(object.enum_type.length);
                        for (var i = 0; i < object.enum_type.length; ++i) {
                            if (!$util.isObject(object.enum_type[i]))
                                throw $TypeError(".google.protobuf.FileDescriptorProto.enum_type: object expected");
                            message.enum_type[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enum_type[i], _depth + 1);
                        }
                    }
                    if (object.service) {
                        if (!$Array.isArray(object.service))
                            throw $TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                        message.service = $Array(object.service.length);
                        for (var i = 0; i < object.service.length; ++i) {
                            if (!$util.isObject(object.service[i]))
                                throw $TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                            message.service[i] = $root.google.protobuf.ServiceDescriptorProto.fromObject(object.service[i], _depth + 1);
                        }
                    }
                    if (object.extension) {
                        if (!$Array.isArray(object.extension))
                            throw $TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                        message.extension = $Array(object.extension.length);
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (!$util.isObject(object.extension[i]))
                                throw $TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i], _depth + 1);
                        }
                    }
                    if (object.options != null) {
                        if (!$util.isObject(object.options))
                            throw $TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FileOptions.fromObject(object.options, _depth + 1);
                    }
                    if (object.source_code_info != null) {
                        if (!$util.isObject(object.source_code_info))
                            throw $TypeError(".google.protobuf.FileDescriptorProto.source_code_info: object expected");
                        message.source_code_info = $root.google.protobuf.SourceCodeInfo.fromObject(object.source_code_info, _depth + 1);
                    }
                    if (object.syntax != null)
                        message.syntax = $String(object.syntax);
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorProto.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.dependency = [];
                        object.message_type = [];
                        object.enum_type = [];
                        object.service = [];
                        object.extension = [];
                        object.public_dependency = [];
                        object.weak_dependency = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object["package"] = "";
                        object.options = null;
                        object.source_code_info = null;
                        object.syntax = "";
                    }
                    if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                        object.name = message.name;
                    if (message["package"] != null && $Object.hasOwnProperty.call(message, "package"))
                        object["package"] = message["package"];
                    if (message.dependency && message.dependency.length) {
                        object.dependency = $Array(message.dependency.length);
                        for (var j = 0; j < message.dependency.length; ++j)
                            object.dependency[j] = message.dependency[j];
                    }
                    if (message.message_type && message.message_type.length) {
                        object.message_type = $Array(message.message_type.length);
                        for (var j = 0; j < message.message_type.length; ++j)
                            object.message_type[j] = $root.google.protobuf.DescriptorProto.toObject(message.message_type[j], options, _depth + 1);
                    }
                    if (message.enum_type && message.enum_type.length) {
                        object.enum_type = $Array(message.enum_type.length);
                        for (var j = 0; j < message.enum_type.length; ++j)
                            object.enum_type[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enum_type[j], options, _depth + 1);
                    }
                    if (message.service && message.service.length) {
                        object.service = $Array(message.service.length);
                        for (var j = 0; j < message.service.length; ++j)
                            object.service[j] = $root.google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options, _depth + 1);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = $Array(message.extension.length);
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options, _depth + 1);
                    }
                    if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                        object.options = $root.google.protobuf.FileOptions.toObject(message.options, options, _depth + 1);
                    if (message.source_code_info != null && $Object.hasOwnProperty.call(message, "source_code_info"))
                        object.source_code_info = $root.google.protobuf.SourceCodeInfo.toObject(message.source_code_info, options, _depth + 1);
                    if (message.public_dependency && message.public_dependency.length) {
                        object.public_dependency = $Array(message.public_dependency.length);
                        for (var j = 0; j < message.public_dependency.length; ++j)
                            object.public_dependency[j] = message.public_dependency[j];
                    }
                    if (message.weak_dependency && message.weak_dependency.length) {
                        object.weak_dependency = $Array(message.weak_dependency.length);
                        for (var j = 0; j < message.weak_dependency.length; ++j)
                            object.weak_dependency[j] = message.weak_dependency[j];
                    }
                    if (message.syntax != null && $Object.hasOwnProperty.call(message, "syntax"))
                        object.syntax = message.syntax;
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorProto.prototype.toJSON = function() {
                    return FileDescriptorProto.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the type url for FileDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                FileDescriptorProto.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.FileDescriptorProto";
                };
    
                return FileDescriptorProto;
            })();
    
            protobuf.DescriptorProto = (function() {
    
                /**
                 * Properties of a DescriptorProto.
                 * @typedef {Object} google.protobuf.DescriptorProto.$Properties
                 * @property {string|null} [name] DescriptorProto name
                 * @property {Array.<google.protobuf.FieldDescriptorProto.$Properties>|null} [field] DescriptorProto field
                 * @property {Array.<google.protobuf.FieldDescriptorProto.$Properties>|null} [extension] DescriptorProto extension
                 * @property {Array.<google.protobuf.DescriptorProto.$Properties>|null} [nested_type] DescriptorProto nested_type
                 * @property {Array.<google.protobuf.EnumDescriptorProto.$Properties>|null} [enum_type] DescriptorProto enum_type
                 * @property {Array.<google.protobuf.DescriptorProto.ExtensionRange.$Properties>|null} [extension_range] DescriptorProto extension_range
                 * @property {Array.<google.protobuf.OneofDescriptorProto.$Properties>|null} [oneof_decl] DescriptorProto oneof_decl
                 * @property {google.protobuf.MessageOptions.$Properties|null} [options] DescriptorProto options
                 * @property {Array.<google.protobuf.DescriptorProto.ReservedRange.$Properties>|null} [reserved_range] DescriptorProto reserved_range
                 * @property {Array.<string>|null} [reserved_name] DescriptorProto reserved_name
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
    
                /**
                 * Properties of a DescriptorProto.
                 * @memberof google.protobuf
                 * @interface IDescriptorProto
                 * @augments google.protobuf.DescriptorProto.$Properties
                 * @deprecated Use google.protobuf.DescriptorProto.$Properties instead.
                 */
    
                /**
                 * Shape of a DescriptorProto.
                 * @typedef {google.protobuf.DescriptorProto.$Properties} google.protobuf.DescriptorProto.$Shape
                 */
    
                /**
                 * Constructs a new DescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a DescriptorProto.
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var DescriptorProto = function (properties) {
                    this.field = [];
                    this.extension = [];
                    this.nested_type = [];
                    this.enum_type = [];
                    this.extension_range = [];
                    this.oneof_decl = [];
                    this.reserved_range = [];
                    this.reserved_name = [];
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };
    
                /**
                 * DescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.name = "";
    
                /**
                 * DescriptorProto field.
                 * @member {Array.<google.protobuf.FieldDescriptorProto.$Properties>} field
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.field = $util.emptyArray;
    
                /**
                 * DescriptorProto extension.
                 * @member {Array.<google.protobuf.FieldDescriptorProto.$Properties>} extension
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * DescriptorProto nested_type.
                 * @member {Array.<google.protobuf.DescriptorProto.$Properties>} nested_type
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.nested_type = $util.emptyArray;
    
                /**
                 * DescriptorProto enum_type.
                 * @member {Array.<google.protobuf.EnumDescriptorProto.$Properties>} enum_type
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.enum_type = $util.emptyArray;
    
                /**
                 * DescriptorProto extension_range.
                 * @member {Array.<google.protobuf.DescriptorProto.ExtensionRange.$Properties>} extension_range
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extension_range = $util.emptyArray;
    
                /**
                 * DescriptorProto oneof_decl.
                 * @member {Array.<google.protobuf.OneofDescriptorProto.$Properties>} oneof_decl
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.oneof_decl = $util.emptyArray;
    
                /**
                 * DescriptorProto options.
                 * @member {google.protobuf.MessageOptions.$Properties|null|undefined} options
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.options = null;
    
                /**
                 * DescriptorProto reserved_range.
                 * @member {Array.<google.protobuf.DescriptorProto.ReservedRange.$Properties>} reserved_range
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.reserved_range = $util.emptyArray;
    
                /**
                 * DescriptorProto reserved_name.
                 * @member {Array.<string>} reserved_name
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.reserved_name = $util.emptyArray;
    
                /**
                 * Creates a new DescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.DescriptorProto.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
                 * @type {{
                 *   (properties: google.protobuf.DescriptorProto.$Shape): google.protobuf.DescriptorProto & google.protobuf.DescriptorProto.$Shape;
                 *   (properties?: google.protobuf.DescriptorProto.$Properties): google.protobuf.DescriptorProto;
                 * }}
                 */
                DescriptorProto.create = function(properties) {
                    return new DescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.DescriptorProto.$Properties} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.field != null && message.field.length)
                        for (var i = 0; i < message.field.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                    if (message.nested_type != null && message.nested_type.length)
                        for (var i = 0; i < message.nested_type.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.nested_type[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                    if (message.enum_type != null && message.enum_type.length)
                        for (var i = 0; i < message.enum_type.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enum_type[i], writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
                    if (message.extension_range != null && message.extension_range.length)
                        for (var i = 0; i < message.extension_range.length; ++i)
                            $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extension_range[i], writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
                    if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
                    if (message.oneof_decl != null && message.oneof_decl.length)
                        for (var i = 0; i < message.oneof_decl.length; ++i)
                            $root.google.protobuf.OneofDescriptorProto.encode(message.oneof_decl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork(), _depth + 1).ldelim();
                    if (message.reserved_range != null && message.reserved_range.length)
                        for (var i = 0; i < message.reserved_range.length; ++i)
                            $root.google.protobuf.DescriptorProto.ReservedRange.encode(message.reserved_range[i], writer.uint32(/* id 9, wireType 2 =*/74).fork(), _depth + 1).ldelim();
                    if (message.reserved_name != null && message.reserved_name.length)
                        for (var i = 0; i < message.reserved_name.length; ++i)
                            writer.uint32(/* id 10, wireType 2 =*/82).string(message.reserved_name[i]);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.DescriptorProto.$Properties} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };
    
                /**
                 * Decodes a DescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto & google.protobuf.DescriptorProto.$Shape} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decode = function (reader, length, _end, _depth, _target) {
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
                    message = _target || new $root.google.protobuf.DescriptorProto();
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
                                message.name = reader.string();
                                continue;
                            }
                        case 2: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.field && message.field.length))
                                    message.field = [];
                                message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.size(), $undefined, _depth + 1));
                                continue;
                            }
                        case 6: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.extension && message.extension.length))
                                    message.extension = [];
                                message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.size(), $undefined, _depth + 1));
                                continue;
                            }
                        case 3: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.nested_type && message.nested_type.length))
                                    message.nested_type = [];
                                message.nested_type.push($root.google.protobuf.DescriptorProto.decode(reader, reader.size(), $undefined, _depth + 1));
                                continue;
                            }
                        case 4: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.enum_type && message.enum_type.length))
                                    message.enum_type = [];
                                message.enum_type.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.size(), $undefined, _depth + 1));
                                continue;
                            }
                        case 5: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.extension_range && message.extension_range.length))
                                    message.extension_range = [];
                                message.extension_range.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.size(), $undefined, _depth + 1));
                                continue;
                            }
                        case 8: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.oneof_decl && message.oneof_decl.length))
                                    message.oneof_decl = [];
                                message.oneof_decl.push($root.google.protobuf.OneofDescriptorProto.decode(reader, reader.size(), $undefined, _depth + 1));
                                continue;
                            }
                        case 7: {
                                if (wireType !== 2)
                                    break;
                                message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.size(), $undefined, _depth + 1, message.options);
                                continue;
                            }
                        case 9: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.reserved_range && message.reserved_range.length))
                                    message.reserved_range = [];
                                message.reserved_range.push($root.google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.size(), $undefined, _depth + 1));
                                continue;
                            }
                        case 10: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.reserved_name && message.reserved_name.length))
                                    message.reserved_name = [];
                                message.reserved_name.push(reader.string());
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
                 * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto & google.protobuf.DescriptorProto.$Shape} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.size());
                };
    
                /**
                 * Verifies a DescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DescriptorProto.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.field != null && $Object.hasOwnProperty.call(message, "field")) {
                        if (!$Array.isArray(message.field))
                            return "field: array expected";
                        for (var i = 0; i < message.field.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.field[i], _depth + 1);
                            if (error)
                                return "field." + error;
                        }
                    }
                    if (message.extension != null && $Object.hasOwnProperty.call(message, "extension")) {
                        if (!$Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i], _depth + 1);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.nested_type != null && $Object.hasOwnProperty.call(message, "nested_type")) {
                        if (!$Array.isArray(message.nested_type))
                            return "nested_type: array expected";
                        for (var i = 0; i < message.nested_type.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.nested_type[i], _depth + 1);
                            if (error)
                                return "nested_type." + error;
                        }
                    }
                    if (message.enum_type != null && $Object.hasOwnProperty.call(message, "enum_type")) {
                        if (!$Array.isArray(message.enum_type))
                            return "enum_type: array expected";
                        for (var i = 0; i < message.enum_type.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enum_type[i], _depth + 1);
                            if (error)
                                return "enum_type." + error;
                        }
                    }
                    if (message.extension_range != null && $Object.hasOwnProperty.call(message, "extension_range")) {
                        if (!$Array.isArray(message.extension_range))
                            return "extension_range: array expected";
                        for (var i = 0; i < message.extension_range.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.ExtensionRange.verify(message.extension_range[i], _depth + 1);
                            if (error)
                                return "extension_range." + error;
                        }
                    }
                    if (message.oneof_decl != null && $Object.hasOwnProperty.call(message, "oneof_decl")) {
                        if (!$Array.isArray(message.oneof_decl))
                            return "oneof_decl: array expected";
                        for (var i = 0; i < message.oneof_decl.length; ++i) {
                            var error = $root.google.protobuf.OneofDescriptorProto.verify(message.oneof_decl[i], _depth + 1);
                            if (error)
                                return "oneof_decl." + error;
                        }
                    }
                    if (message.options != null && $Object.hasOwnProperty.call(message, "options")) {
                        var error = $root.google.protobuf.MessageOptions.verify(message.options, _depth + 1);
                        if (error)
                            return "options." + error;
                    }
                    if (message.reserved_range != null && $Object.hasOwnProperty.call(message, "reserved_range")) {
                        if (!$Array.isArray(message.reserved_range))
                            return "reserved_range: array expected";
                        for (var i = 0; i < message.reserved_range.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.ReservedRange.verify(message.reserved_range[i], _depth + 1);
                            if (error)
                                return "reserved_range." + error;
                        }
                    }
                    if (message.reserved_name != null && $Object.hasOwnProperty.call(message, "reserved_name")) {
                        if (!$Array.isArray(message.reserved_name))
                            return "reserved_name: array expected";
                        for (var i = 0; i < message.reserved_name.length; ++i)
                            if (!$util.isString(message.reserved_name[i]))
                                return "reserved_name: string[] expected";
                    }
                    return null;
                };
    
                /**
                 * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 */
                DescriptorProto.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.DescriptorProto)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.DescriptorProto: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.DescriptorProto();
                    if (object.name != null)
                        message.name = $String(object.name);
                    if (object.field) {
                        if (!$Array.isArray(object.field))
                            throw $TypeError(".google.protobuf.DescriptorProto.field: array expected");
                        message.field = $Array(object.field.length);
                        for (var i = 0; i < object.field.length; ++i) {
                            if (!$util.isObject(object.field[i]))
                                throw $TypeError(".google.protobuf.DescriptorProto.field: object expected");
                            message.field[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.field[i], _depth + 1);
                        }
                    }
                    if (object.extension) {
                        if (!$Array.isArray(object.extension))
                            throw $TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                        message.extension = $Array(object.extension.length);
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (!$util.isObject(object.extension[i]))
                                throw $TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i], _depth + 1);
                        }
                    }
                    if (object.nested_type) {
                        if (!$Array.isArray(object.nested_type))
                            throw $TypeError(".google.protobuf.DescriptorProto.nested_type: array expected");
                        message.nested_type = $Array(object.nested_type.length);
                        for (var i = 0; i < object.nested_type.length; ++i) {
                            if (!$util.isObject(object.nested_type[i]))
                                throw $TypeError(".google.protobuf.DescriptorProto.nested_type: object expected");
                            message.nested_type[i] = $root.google.protobuf.DescriptorProto.fromObject(object.nested_type[i], _depth + 1);
                        }
                    }
                    if (object.enum_type) {
                        if (!$Array.isArray(object.enum_type))
                            throw $TypeError(".google.protobuf.DescriptorProto.enum_type: array expected");
                        message.enum_type = $Array(object.enum_type.length);
                        for (var i = 0; i < object.enum_type.length; ++i) {
                            if (!$util.isObject(object.enum_type[i]))
                                throw $TypeError(".google.protobuf.DescriptorProto.enum_type: object expected");
                            message.enum_type[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enum_type[i], _depth + 1);
                        }
                    }
                    if (object.extension_range) {
                        if (!$Array.isArray(object.extension_range))
                            throw $TypeError(".google.protobuf.DescriptorProto.extension_range: array expected");
                        message.extension_range = $Array(object.extension_range.length);
                        for (var i = 0; i < object.extension_range.length; ++i) {
                            if (!$util.isObject(object.extension_range[i]))
                                throw $TypeError(".google.protobuf.DescriptorProto.extension_range: object expected");
                            message.extension_range[i] = $root.google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extension_range[i], _depth + 1);
                        }
                    }
                    if (object.oneof_decl) {
                        if (!$Array.isArray(object.oneof_decl))
                            throw $TypeError(".google.protobuf.DescriptorProto.oneof_decl: array expected");
                        message.oneof_decl = $Array(object.oneof_decl.length);
                        for (var i = 0; i < object.oneof_decl.length; ++i) {
                            if (!$util.isObject(object.oneof_decl[i]))
                                throw $TypeError(".google.protobuf.DescriptorProto.oneof_decl: object expected");
                            message.oneof_decl[i] = $root.google.protobuf.OneofDescriptorProto.fromObject(object.oneof_decl[i], _depth + 1);
                        }
                    }
                    if (object.options != null) {
                        if (!$util.isObject(object.options))
                            throw $TypeError(".google.protobuf.DescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MessageOptions.fromObject(object.options, _depth + 1);
                    }
                    if (object.reserved_range) {
                        if (!$Array.isArray(object.reserved_range))
                            throw $TypeError(".google.protobuf.DescriptorProto.reserved_range: array expected");
                        message.reserved_range = $Array(object.reserved_range.length);
                        for (var i = 0; i < object.reserved_range.length; ++i) {
                            if (!$util.isObject(object.reserved_range[i]))
                                throw $TypeError(".google.protobuf.DescriptorProto.reserved_range: object expected");
                            message.reserved_range[i] = $root.google.protobuf.DescriptorProto.ReservedRange.fromObject(object.reserved_range[i], _depth + 1);
                        }
                    }
                    if (object.reserved_name) {
                        if (!$Array.isArray(object.reserved_name))
                            throw $TypeError(".google.protobuf.DescriptorProto.reserved_name: array expected");
                        message.reserved_name = $Array(object.reserved_name.length);
                        for (var i = 0; i < object.reserved_name.length; ++i)
                            message.reserved_name[i] = $String(object.reserved_name[i]);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.DescriptorProto} message DescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DescriptorProto.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.field = [];
                        object.nested_type = [];
                        object.enum_type = [];
                        object.extension_range = [];
                        object.extension = [];
                        object.oneof_decl = [];
                        object.reserved_range = [];
                        object.reserved_name = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                        object.name = message.name;
                    if (message.field && message.field.length) {
                        object.field = $Array(message.field.length);
                        for (var j = 0; j < message.field.length; ++j)
                            object.field[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.field[j], options, _depth + 1);
                    }
                    if (message.nested_type && message.nested_type.length) {
                        object.nested_type = $Array(message.nested_type.length);
                        for (var j = 0; j < message.nested_type.length; ++j)
                            object.nested_type[j] = $root.google.protobuf.DescriptorProto.toObject(message.nested_type[j], options, _depth + 1);
                    }
                    if (message.enum_type && message.enum_type.length) {
                        object.enum_type = $Array(message.enum_type.length);
                        for (var j = 0; j < message.enum_type.length; ++j)
                            object.enum_type[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enum_type[j], options, _depth + 1);
                    }
                    if (message.extension_range && message.extension_range.length) {
                        object.extension_range = $Array(message.extension_range.length);
                        for (var j = 0; j < message.extension_range.length; ++j)
                            object.extension_range[j] = $root.google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extension_range[j], options, _depth + 1);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = $Array(message.extension.length);
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options, _depth + 1);
                    }
                    if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                        object.options = $root.google.protobuf.MessageOptions.toObject(message.options, options, _depth + 1);
                    if (message.oneof_decl && message.oneof_decl.length) {
                        object.oneof_decl = $Array(message.oneof_decl.length);
                        for (var j = 0; j < message.oneof_decl.length; ++j)
                            object.oneof_decl[j] = $root.google.protobuf.OneofDescriptorProto.toObject(message.oneof_decl[j], options, _depth + 1);
                    }
                    if (message.reserved_range && message.reserved_range.length) {
                        object.reserved_range = $Array(message.reserved_range.length);
                        for (var j = 0; j < message.reserved_range.length; ++j)
                            object.reserved_range[j] = $root.google.protobuf.DescriptorProto.ReservedRange.toObject(message.reserved_range[j], options, _depth + 1);
                    }
                    if (message.reserved_name && message.reserved_name.length) {
                        object.reserved_name = $Array(message.reserved_name.length);
                        for (var j = 0; j < message.reserved_name.length; ++j)
                            object.reserved_name[j] = message.reserved_name[j];
                    }
                    return object;
                };
    
                /**
                 * Converts this DescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DescriptorProto.prototype.toJSON = function() {
                    return DescriptorProto.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the type url for DescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                DescriptorProto.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.DescriptorProto";
                };
    
                DescriptorProto.ExtensionRange = (function() {
    
                    /**
                     * Properties of an ExtensionRange.
                     * @typedef {Object} google.protobuf.DescriptorProto.ExtensionRange.$Properties
                     * @property {number|null} [start] ExtensionRange start
                     * @property {number|null} [end] ExtensionRange end
                     * @property {google.protobuf.ExtensionRangeOptions.$Properties|null} [options] ExtensionRange options
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
    
                    /**
                     * Properties of an ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @interface IExtensionRange
                     * @augments google.protobuf.DescriptorProto.ExtensionRange.$Properties
                     * @deprecated Use google.protobuf.DescriptorProto.ExtensionRange.$Properties instead.
                     */
    
                    /**
                     * Shape of an ExtensionRange.
                     * @typedef {google.protobuf.DescriptorProto.ExtensionRange.$Properties} google.protobuf.DescriptorProto.ExtensionRange.$Shape
                     */
    
                    /**
                     * Constructs a new ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @classdesc Represents an ExtensionRange.
                     * @constructor
                     * @param {google.protobuf.DescriptorProto.ExtensionRange.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    var ExtensionRange = function (properties) {
                        if (properties)
                            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };
    
                    /**
                     * ExtensionRange start.
                     * @member {number} start
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.start = 0;
    
                    /**
                     * ExtensionRange end.
                     * @member {number} end
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.end = 0;
    
                    /**
                     * ExtensionRange options.
                     * @member {google.protobuf.ExtensionRangeOptions.$Properties|null|undefined} options
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.options = null;
    
                    /**
                     * Creates a new ExtensionRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ExtensionRange.$Properties=} [properties] Properties to set
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                     * @type {{
                     *   (properties: google.protobuf.DescriptorProto.ExtensionRange.$Shape): google.protobuf.DescriptorProto.ExtensionRange & google.protobuf.DescriptorProto.ExtensionRange.$Shape;
                     *   (properties?: google.protobuf.DescriptorProto.ExtensionRange.$Properties): google.protobuf.DescriptorProto.ExtensionRange;
                     * }}
                     */
                    ExtensionRange.create = function(properties) {
                        return new ExtensionRange(properties);
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ExtensionRange.$Properties} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.start != null && $Object.hasOwnProperty.call(message, "start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && $Object.hasOwnProperty.call(message, "end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                            $root.google.protobuf.ExtensionRangeOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (var i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ExtensionRange.$Properties} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encodeDelimited = function(message, writer) {
                        return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                    };
    
                    /**
                     * Decodes an ExtensionRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange & google.protobuf.DescriptorProto.ExtensionRange.$Shape} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decode = function (reader, length, _end, _depth, _target) {
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
                        message = _target || new $root.google.protobuf.DescriptorProto.ExtensionRange();
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
                                    message.start = reader.int32();
                                    continue;
                                }
                            case 2: {
                                    if (wireType !== 0)
                                        break;
                                    message.end = reader.int32();
                                    continue;
                                }
                            case 3: {
                                    if (wireType !== 2)
                                        break;
                                    message.options = $root.google.protobuf.ExtensionRangeOptions.decode(reader, reader.size(), $undefined, _depth + 1, message.options);
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
                     * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange & google.protobuf.DescriptorProto.ExtensionRange.$Shape} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.size());
                    };
    
                    /**
                     * Verifies an ExtensionRange message.
                     * @function verify
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ExtensionRange.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.start != null && $Object.hasOwnProperty.call(message, "start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && $Object.hasOwnProperty.call(message, "end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        if (message.options != null && $Object.hasOwnProperty.call(message, "options")) {
                            var error = $root.google.protobuf.ExtensionRangeOptions.verify(message.options, _depth + 1);
                            if (error)
                                return "options." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     */
                    ExtensionRange.fromObject = function (object, _depth) {
                        if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".google.protobuf.DescriptorProto.ExtensionRange: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        if (object.options != null) {
                            if (!$util.isObject(object.options))
                                throw $TypeError(".google.protobuf.DescriptorProto.ExtensionRange.options: object expected");
                            message.options = $root.google.protobuf.ExtensionRangeOptions.fromObject(object.options, _depth + 1);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ExtensionRange.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                            object.options = null;
                        }
                        if (message.start != null && $Object.hasOwnProperty.call(message, "start"))
                            object.start = message.start;
                        if (message.end != null && $Object.hasOwnProperty.call(message, "end"))
                            object.end = message.end;
                        if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                            object.options = $root.google.protobuf.ExtensionRangeOptions.toObject(message.options, options, _depth + 1);
                        return object;
                    };
    
                    /**
                     * Converts this ExtensionRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ExtensionRange.prototype.toJSON = function() {
                        return ExtensionRange.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the type url for ExtensionRange
                     * @function getTypeUrl
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    ExtensionRange.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/google.protobuf.DescriptorProto.ExtensionRange";
                    };
    
                    return ExtensionRange;
                })();
    
                DescriptorProto.ReservedRange = (function() {
    
                    /**
                     * Properties of a ReservedRange.
                     * @typedef {Object} google.protobuf.DescriptorProto.ReservedRange.$Properties
                     * @property {number|null} [start] ReservedRange start
                     * @property {number|null} [end] ReservedRange end
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
    
                    /**
                     * Properties of a ReservedRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @interface IReservedRange
                     * @augments google.protobuf.DescriptorProto.ReservedRange.$Properties
                     * @deprecated Use google.protobuf.DescriptorProto.ReservedRange.$Properties instead.
                     */
    
                    /**
                     * Shape of a ReservedRange.
                     * @typedef {google.protobuf.DescriptorProto.ReservedRange.$Properties} google.protobuf.DescriptorProto.ReservedRange.$Shape
                     */
    
                    /**
                     * Constructs a new ReservedRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @classdesc Represents a ReservedRange.
                     * @constructor
                     * @param {google.protobuf.DescriptorProto.ReservedRange.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    var ReservedRange = function (properties) {
                        if (properties)
                            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };
    
                    /**
                     * ReservedRange start.
                     * @member {number} start
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     */
                    ReservedRange.prototype.start = 0;
    
                    /**
                     * ReservedRange end.
                     * @member {number} end
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     */
                    ReservedRange.prototype.end = 0;
    
                    /**
                     * Creates a new ReservedRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ReservedRange.$Properties=} [properties] Properties to set
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange instance
                     * @type {{
                     *   (properties: google.protobuf.DescriptorProto.ReservedRange.$Shape): google.protobuf.DescriptorProto.ReservedRange & google.protobuf.DescriptorProto.ReservedRange.$Shape;
                     *   (properties?: google.protobuf.DescriptorProto.ReservedRange.$Properties): google.protobuf.DescriptorProto.ReservedRange;
                     * }}
                     */
                    ReservedRange.create = function(properties) {
                        return new ReservedRange(properties);
                    };
    
                    /**
                     * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ReservedRange.$Properties} message ReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReservedRange.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.start != null && $Object.hasOwnProperty.call(message, "start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && $Object.hasOwnProperty.call(message, "end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (var i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ReservedRange.$Properties} message ReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReservedRange.encodeDelimited = function(message, writer) {
                        return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                    };
    
                    /**
                     * Decodes a ReservedRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.DescriptorProto.ReservedRange & google.protobuf.DescriptorProto.ReservedRange.$Shape} ReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReservedRange.decode = function (reader, length, _end, _depth, _target) {
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
                        message = _target || new $root.google.protobuf.DescriptorProto.ReservedRange();
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
                                    message.start = reader.int32();
                                    continue;
                                }
                            case 2: {
                                    if (wireType !== 0)
                                        break;
                                    message.end = reader.int32();
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
                     * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.DescriptorProto.ReservedRange & google.protobuf.DescriptorProto.ReservedRange.$Shape} ReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReservedRange.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.size());
                    };
    
                    /**
                     * Verifies a ReservedRange message.
                     * @function verify
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReservedRange.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.start != null && $Object.hasOwnProperty.call(message, "start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && $Object.hasOwnProperty.call(message, "end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     */
                    ReservedRange.fromObject = function (object, _depth) {
                        if (object instanceof $root.google.protobuf.DescriptorProto.ReservedRange)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".google.protobuf.DescriptorProto.ReservedRange: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ReservedRange} message ReservedRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReservedRange.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                        }
                        if (message.start != null && $Object.hasOwnProperty.call(message, "start"))
                            object.start = message.start;
                        if (message.end != null && $Object.hasOwnProperty.call(message, "end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this ReservedRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReservedRange.prototype.toJSON = function() {
                        return ReservedRange.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the type url for ReservedRange
                     * @function getTypeUrl
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    ReservedRange.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/google.protobuf.DescriptorProto.ReservedRange";
                    };
    
                    return ReservedRange;
                })();
    
                return DescriptorProto;
            })();
    
            protobuf.ExtensionRangeOptions = (function() {
    
                /**
                 * Properties of an ExtensionRangeOptions.
                 * @typedef {Object} google.protobuf.ExtensionRangeOptions.$Properties
                 * @property {Array.<google.protobuf.UninterpretedOption.$Properties>|null} [uninterpreted_option] ExtensionRangeOptions uninterpreted_option
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
    
                /**
                 * Properties of an ExtensionRangeOptions.
                 * @memberof google.protobuf
                 * @interface IExtensionRangeOptions
                 * @augments google.protobuf.ExtensionRangeOptions.$Properties
                 * @deprecated Use google.protobuf.ExtensionRangeOptions.$Properties instead.
                 */
    
                /**
                 * Shape of an ExtensionRangeOptions.
                 * @typedef {google.protobuf.ExtensionRangeOptions.$Properties} google.protobuf.ExtensionRangeOptions.$Shape
                 */
    
                /**
                 * Constructs a new ExtensionRangeOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an ExtensionRangeOptions.
                 * @constructor
                 * @param {google.protobuf.ExtensionRangeOptions.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var ExtensionRangeOptions = function (properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };
    
                /**
                 * ExtensionRangeOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.UninterpretedOption.$Properties>} uninterpreted_option
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @instance
                 */
                ExtensionRangeOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new ExtensionRangeOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {google.protobuf.ExtensionRangeOptions.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions instance
                 * @type {{
                 *   (properties: google.protobuf.ExtensionRangeOptions.$Shape): google.protobuf.ExtensionRangeOptions & google.protobuf.ExtensionRangeOptions.$Shape;
                 *   (properties?: google.protobuf.ExtensionRangeOptions.$Properties): google.protobuf.ExtensionRangeOptions;
                 * }}
                 */
                ExtensionRangeOptions.create = function(properties) {
                    return new ExtensionRangeOptions(properties);
                };
    
                /**
                 * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {google.protobuf.ExtensionRangeOptions.$Properties} message ExtensionRangeOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRangeOptions.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork(), _depth + 1).ldelim();
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {google.protobuf.ExtensionRangeOptions.$Properties} message ExtensionRangeOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRangeOptions.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };
    
                /**
                 * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ExtensionRangeOptions & google.protobuf.ExtensionRangeOptions.$Shape} ExtensionRangeOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRangeOptions.decode = function (reader, length, _end, _depth, _target) {
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
                    message = _target || new $root.google.protobuf.ExtensionRangeOptions();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 999: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                    message.uninterpreted_option = [];
                                message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.size(), $undefined, _depth + 1));
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
                 * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ExtensionRangeOptions & google.protobuf.ExtensionRangeOptions.$Shape} ExtensionRangeOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRangeOptions.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.size());
                };
    
                /**
                 * Verifies an ExtensionRangeOptions message.
                 * @function verify
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ExtensionRangeOptions.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.uninterpreted_option != null && $Object.hasOwnProperty.call(message, "uninterpreted_option")) {
                        if (!$Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i], _depth + 1);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions
                 */
                ExtensionRangeOptions.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.ExtensionRangeOptions)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.ExtensionRangeOptions: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.ExtensionRangeOptions();
                    if (object.uninterpreted_option) {
                        if (!$Array.isArray(object.uninterpreted_option))
                            throw $TypeError(".google.protobuf.ExtensionRangeOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = $Array(object.uninterpreted_option.length);
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (!$util.isObject(object.uninterpreted_option[i]))
                                throw $TypeError(".google.protobuf.ExtensionRangeOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i], _depth + 1);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {google.protobuf.ExtensionRangeOptions} message ExtensionRangeOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ExtensionRangeOptions.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = $Array(message.uninterpreted_option.length);
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options, _depth + 1);
                    }
                    return object;
                };
    
                /**
                 * Converts this ExtensionRangeOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ExtensionRangeOptions.prototype.toJSON = function() {
                    return ExtensionRangeOptions.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the type url for ExtensionRangeOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                ExtensionRangeOptions.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.ExtensionRangeOptions";
                };
    
                return ExtensionRangeOptions;
            })();
    
            protobuf.FieldDescriptorProto = (function() {
    
                /**
                 * Properties of a FieldDescriptorProto.
                 * @typedef {Object} google.protobuf.FieldDescriptorProto.$Properties
                 * @property {string|null} [name] FieldDescriptorProto name
                 * @property {number|null} [number] FieldDescriptorProto number
                 * @property {google.protobuf.FieldDescriptorProto.Label|null} [label] FieldDescriptorProto label
                 * @property {google.protobuf.FieldDescriptorProto.Type|null} [type] FieldDescriptorProto type
                 * @property {string|null} [type_name] FieldDescriptorProto type_name
                 * @property {string|null} [extendee] FieldDescriptorProto extendee
                 * @property {string|null} [default_value] FieldDescriptorProto default_value
                 * @property {number|null} [oneof_index] FieldDescriptorProto oneof_index
                 * @property {string|null} [json_name] FieldDescriptorProto json_name
                 * @property {google.protobuf.FieldOptions.$Properties|null} [options] FieldDescriptorProto options
                 * @property {boolean|null} [proto3_optional] FieldDescriptorProto proto3_optional
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
    
                /**
                 * Properties of a FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFieldDescriptorProto
                 * @augments google.protobuf.FieldDescriptorProto.$Properties
                 * @deprecated Use google.protobuf.FieldDescriptorProto.$Properties instead.
                 */
    
                /**
                 * Shape of a FieldDescriptorProto.
                 * @typedef {google.protobuf.FieldDescriptorProto.$Properties} google.protobuf.FieldDescriptorProto.$Shape
                 */
    
                /**
                 * Constructs a new FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldDescriptorProto.
                 * @constructor
                 * @param {google.protobuf.FieldDescriptorProto.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var FieldDescriptorProto = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };
    
                /**
                 * FieldDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.name = "";
    
                /**
                 * FieldDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.number = 0;
    
                /**
                 * FieldDescriptorProto label.
                 * @member {google.protobuf.FieldDescriptorProto.Label} label
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.label = 1;
    
                /**
                 * FieldDescriptorProto type.
                 * @member {google.protobuf.FieldDescriptorProto.Type} type
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.type = 1;
    
                /**
                 * FieldDescriptorProto type_name.
                 * @member {string} type_name
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.type_name = "";
    
                /**
                 * FieldDescriptorProto extendee.
                 * @member {string} extendee
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.extendee = "";
    
                /**
                 * FieldDescriptorProto default_value.
                 * @member {string} default_value
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.default_value = "";
    
                /**
                 * FieldDescriptorProto oneof_index.
                 * @member {number} oneof_index
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.oneof_index = 0;
    
                /**
                 * FieldDescriptorProto json_name.
                 * @member {string} json_name
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.json_name = "";
    
                /**
                 * FieldDescriptorProto options.
                 * @member {google.protobuf.FieldOptions.$Properties|null|undefined} options
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.options = null;
    
                /**
                 * FieldDescriptorProto proto3_optional.
                 * @member {boolean} proto3_optional
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.proto3_optional = false;
    
                /**
                 * Creates a new FieldDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.FieldDescriptorProto.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
                 * @type {{
                 *   (properties: google.protobuf.FieldDescriptorProto.$Shape): google.protobuf.FieldDescriptorProto & google.protobuf.FieldDescriptorProto.$Shape;
                 *   (properties?: google.protobuf.FieldDescriptorProto.$Properties): google.protobuf.FieldDescriptorProto;
                 * }}
                 */
                FieldDescriptorProto.create = function(properties) {
                    return new FieldDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.FieldDescriptorProto.$Properties} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.extendee != null && $Object.hasOwnProperty.call(message, "extendee"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                    if (message.number != null && $Object.hasOwnProperty.call(message, "number"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                    if (message.label != null && $Object.hasOwnProperty.call(message, "label"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                    if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                    if (message.type_name != null && $Object.hasOwnProperty.call(message, "type_name"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.type_name);
                    if (message.default_value != null && $Object.hasOwnProperty.call(message, "default_value"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.default_value);
                    if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork(), _depth + 1).ldelim();
                    if (message.oneof_index != null && $Object.hasOwnProperty.call(message, "oneof_index"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneof_index);
                    if (message.json_name != null && $Object.hasOwnProperty.call(message, "json_name"))
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.json_name);
                    if (message.proto3_optional != null && $Object.hasOwnProperty.call(message, "proto3_optional"))
                        writer.uint32(/* id 17, wireType 0 =*/136).bool(message.proto3_optional);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.FieldDescriptorProto.$Properties} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };
    
                /**
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldDescriptorProto & google.protobuf.FieldDescriptorProto.$Shape} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decode = function (reader, length, _end, _depth, _target) {
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
                    message = _target || new $root.google.protobuf.FieldDescriptorProto();
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
                                message.name = reader.string();
                                continue;
                            }
                        case 3: {
                                if (wireType !== 0)
                                    break;
                                message.number = reader.int32();
                                continue;
                            }
                        case 4: {
                                if (wireType !== 0)
                                    break;
                                value = reader.int32();
                                if ($root.google.protobuf.FieldDescriptorProto.Label[value] !== $undefined)
                                    message.label = value;
                                else if (!reader.discardUnknown) {
                                    $util.makeProp(message, "$unknowns", false);
                                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                                }
                                continue;
                            }
                        case 5: {
                                if (wireType !== 0)
                                    break;
                                value = reader.int32();
                                if ($root.google.protobuf.FieldDescriptorProto.Type[value] !== $undefined)
                                    message.type = value;
                                else if (!reader.discardUnknown) {
                                    $util.makeProp(message, "$unknowns", false);
                                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                                }
                                continue;
                            }
                        case 6: {
                                if (wireType !== 2)
                                    break;
                                message.type_name = reader.string();
                                continue;
                            }
                        case 2: {
                                if (wireType !== 2)
                                    break;
                                message.extendee = reader.string();
                                continue;
                            }
                        case 7: {
                                if (wireType !== 2)
                                    break;
                                message.default_value = reader.string();
                                continue;
                            }
                        case 9: {
                                if (wireType !== 0)
                                    break;
                                message.oneof_index = reader.int32();
                                continue;
                            }
                        case 10: {
                                if (wireType !== 2)
                                    break;
                                message.json_name = reader.string();
                                continue;
                            }
                        case 8: {
                                if (wireType !== 2)
                                    break;
                                message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.size(), $undefined, _depth + 1, message.options);
                                continue;
                            }
                        case 17: {
                                if (wireType !== 0)
                                    break;
                                message.proto3_optional = reader.bool();
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
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldDescriptorProto & google.protobuf.FieldDescriptorProto.$Shape} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.size());
                };
    
                /**
                 * Verifies a FieldDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldDescriptorProto.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && $Object.hasOwnProperty.call(message, "number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.label != null && $Object.hasOwnProperty.call(message, "label"))
                        switch (message.label) {
                        default:
                            return "label: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                        case 16:
                        case 17:
                        case 18:
                            break;
                        }
                    if (message.type_name != null && $Object.hasOwnProperty.call(message, "type_name"))
                        if (!$util.isString(message.type_name))
                            return "type_name: string expected";
                    if (message.extendee != null && $Object.hasOwnProperty.call(message, "extendee"))
                        if (!$util.isString(message.extendee))
                            return "extendee: string expected";
                    if (message.default_value != null && $Object.hasOwnProperty.call(message, "default_value"))
                        if (!$util.isString(message.default_value))
                            return "default_value: string expected";
                    if (message.oneof_index != null && $Object.hasOwnProperty.call(message, "oneof_index"))
                        if (!$util.isInteger(message.oneof_index))
                            return "oneof_index: integer expected";
                    if (message.json_name != null && $Object.hasOwnProperty.call(message, "json_name"))
                        if (!$util.isString(message.json_name))
                            return "json_name: string expected";
                    if (message.options != null && $Object.hasOwnProperty.call(message, "options")) {
                        var error = $root.google.protobuf.FieldOptions.verify(message.options, _depth + 1);
                        if (error)
                            return "options." + error;
                    }
                    if (message.proto3_optional != null && $Object.hasOwnProperty.call(message, "proto3_optional"))
                        if (typeof message.proto3_optional !== "boolean")
                            return "proto3_optional: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 */
                FieldDescriptorProto.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.FieldDescriptorProto: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.FieldDescriptorProto();
                    if (object.name != null)
                        message.name = $String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    switch (object.label) {
                    case "LABEL_OPTIONAL":
                    case 1:
                        message.label = 1;
                        break;
                    case "LABEL_REQUIRED":
                    case 2:
                        message.label = 2;
                        break;
                    case "LABEL_REPEATED":
                    case 3:
                        message.label = 3;
                        break;
                    default:
                    }
                    switch (object.type) {
                    case "TYPE_DOUBLE":
                    case 1:
                        message.type = 1;
                        break;
                    case "TYPE_FLOAT":
                    case 2:
                        message.type = 2;
                        break;
                    case "TYPE_INT64":
                    case 3:
                        message.type = 3;
                        break;
                    case "TYPE_UINT64":
                    case 4:
                        message.type = 4;
                        break;
                    case "TYPE_INT32":
                    case 5:
                        message.type = 5;
                        break;
                    case "TYPE_FIXED64":
                    case 6:
                        message.type = 6;
                        break;
                    case "TYPE_FIXED32":
                    case 7:
                        message.type = 7;
                        break;
                    case "TYPE_BOOL":
                    case 8:
                        message.type = 8;
                        break;
                    case "TYPE_STRING":
                    case 9:
                        message.type = 9;
                        break;
                    case "TYPE_GROUP":
                    case 10:
                        message.type = 10;
                        break;
                    case "TYPE_MESSAGE":
                    case 11:
                        message.type = 11;
                        break;
                    case "TYPE_BYTES":
                    case 12:
                        message.type = 12;
                        break;
                    case "TYPE_UINT32":
                    case 13:
                        message.type = 13;
                        break;
                    case "TYPE_ENUM":
                    case 14:
                        message.type = 14;
                        break;
                    case "TYPE_SFIXED32":
                    case 15:
                        message.type = 15;
                        break;
                    case "TYPE_SFIXED64":
                    case 16:
                        message.type = 16;
                        break;
                    case "TYPE_SINT32":
                    case 17:
                        message.type = 17;
                        break;
                    case "TYPE_SINT64":
                    case 18:
                        message.type = 18;
                        break;
                    default:
                    }
                    if (object.type_name != null)
                        message.type_name = $String(object.type_name);
                    if (object.extendee != null)
                        message.extendee = $String(object.extendee);
                    if (object.default_value != null)
                        message.default_value = $String(object.default_value);
                    if (object.oneof_index != null)
                        message.oneof_index = object.oneof_index | 0;
                    if (object.json_name != null)
                        message.json_name = $String(object.json_name);
                    if (object.options != null) {
                        if (!$util.isObject(object.options))
                            throw $TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FieldOptions.fromObject(object.options, _depth + 1);
                    }
                    if (object.proto3_optional != null)
                        message.proto3_optional = $Boolean(object.proto3_optional);
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldDescriptorProto.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.extendee = "";
                        object.number = 0;
                        object.label = options.enums === $String ? "LABEL_OPTIONAL" : 1;
                        object.type = options.enums === $String ? "TYPE_DOUBLE" : 1;
                        object.type_name = "";
                        object.default_value = "";
                        object.options = null;
                        object.oneof_index = 0;
                        object.json_name = "";
                        object.proto3_optional = false;
                    }
                    if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                        object.name = message.name;
                    if (message.extendee != null && $Object.hasOwnProperty.call(message, "extendee"))
                        object.extendee = message.extendee;
                    if (message.number != null && $Object.hasOwnProperty.call(message, "number"))
                        object.number = message.number;
                    if (message.label != null && $Object.hasOwnProperty.call(message, "label"))
                        object.label = options.enums === $String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] === $undefined ? message.label : $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                    if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                        object.type = options.enums === $String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] === $undefined ? message.type : $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
                    if (message.type_name != null && $Object.hasOwnProperty.call(message, "type_name"))
                        object.type_name = message.type_name;
                    if (message.default_value != null && $Object.hasOwnProperty.call(message, "default_value"))
                        object.default_value = message.default_value;
                    if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                        object.options = $root.google.protobuf.FieldOptions.toObject(message.options, options, _depth + 1);
                    if (message.oneof_index != null && $Object.hasOwnProperty.call(message, "oneof_index"))
                        object.oneof_index = message.oneof_index;
                    if (message.json_name != null && $Object.hasOwnProperty.call(message, "json_name"))
                        object.json_name = message.json_name;
                    if (message.proto3_optional != null && $Object.hasOwnProperty.call(message, "proto3_optional"))
                        object.proto3_optional = message.proto3_optional;
                    return object;
                };
    
                /**
                 * Converts this FieldDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldDescriptorProto.prototype.toJSON = function() {
                    return FieldDescriptorProto.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the type url for FieldDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                FieldDescriptorProto.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.FieldDescriptorProto";
                };
    
                /**
                 * Type enum.
                 * @name google.protobuf.FieldDescriptorProto.Type
                 * @enum {number}
                 * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
                 * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
                 * @property {number} TYPE_INT64=3 TYPE_INT64 value
                 * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
                 * @property {number} TYPE_INT32=5 TYPE_INT32 value
                 * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
                 * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
                 * @property {number} TYPE_BOOL=8 TYPE_BOOL value
                 * @property {number} TYPE_STRING=9 TYPE_STRING value
                 * @property {number} TYPE_GROUP=10 TYPE_GROUP value
                 * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
                 * @property {number} TYPE_BYTES=12 TYPE_BYTES value
                 * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
                 * @property {number} TYPE_ENUM=14 TYPE_ENUM value
                 * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
                 * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
                 * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
                 * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
                 */
                FieldDescriptorProto.Type = (function() {
                    var valuesById = $Object.create(null), values = $Object.create(valuesById);
                    values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                    values[valuesById[2] = "TYPE_FLOAT"] = 2;
                    values[valuesById[3] = "TYPE_INT64"] = 3;
                    values[valuesById[4] = "TYPE_UINT64"] = 4;
                    values[valuesById[5] = "TYPE_INT32"] = 5;
                    values[valuesById[6] = "TYPE_FIXED64"] = 6;
                    values[valuesById[7] = "TYPE_FIXED32"] = 7;
                    values[valuesById[8] = "TYPE_BOOL"] = 8;
                    values[valuesById[9] = "TYPE_STRING"] = 9;
                    values[valuesById[10] = "TYPE_GROUP"] = 10;
                    values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                    values[valuesById[12] = "TYPE_BYTES"] = 12;
                    values[valuesById[13] = "TYPE_UINT32"] = 13;
                    values[valuesById[14] = "TYPE_ENUM"] = 14;
                    values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                    values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                    values[valuesById[17] = "TYPE_SINT32"] = 17;
                    values[valuesById[18] = "TYPE_SINT64"] = 18;
                    return values;
                })();
    
                /**
                 * Label enum.
                 * @name google.protobuf.FieldDescriptorProto.Label
                 * @enum {number}
                 * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
                 * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
                 * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
                 */
                FieldDescriptorProto.Label = (function() {
                    var valuesById = $Object.create(null), values = $Object.create(valuesById);
                    values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                    values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                    values[valuesById[3] = "LABEL_REPEATED"] = 3;
                    return values;
                })();
    
                return FieldDescriptorProto;
            })();
    
            protobuf.OneofDescriptorProto = (function() {
    
                /**
                 * Properties of a OneofDescriptorProto.
                 * @typedef {Object} google.protobuf.OneofDescriptorProto.$Properties
                 * @property {string|null} [name] OneofDescriptorProto name
                 * @property {google.protobuf.OneofOptions.$Properties|null} [options] OneofDescriptorProto options
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
    
                /**
                 * Properties of a OneofDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IOneofDescriptorProto
                 * @augments google.protobuf.OneofDescriptorProto.$Properties
                 * @deprecated Use google.protobuf.OneofDescriptorProto.$Properties instead.
                 */
    
                /**
                 * Shape of a OneofDescriptorProto.
                 * @typedef {google.protobuf.OneofDescriptorProto.$Properties} google.protobuf.OneofDescriptorProto.$Shape
                 */
    
                /**
                 * Constructs a new OneofDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a OneofDescriptorProto.
                 * @constructor
                 * @param {google.protobuf.OneofDescriptorProto.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var OneofDescriptorProto = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };
    
                /**
                 * OneofDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 */
                OneofDescriptorProto.prototype.name = "";
    
                /**
                 * OneofDescriptorProto options.
                 * @member {google.protobuf.OneofOptions.$Properties|null|undefined} options
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 */
                OneofDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new OneofDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.OneofDescriptorProto.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto instance
                 * @type {{
                 *   (properties: google.protobuf.OneofDescriptorProto.$Shape): google.protobuf.OneofDescriptorProto & google.protobuf.OneofDescriptorProto.$Shape;
                 *   (properties?: google.protobuf.OneofDescriptorProto.$Properties): google.protobuf.OneofDescriptorProto;
                 * }}
                 */
                OneofDescriptorProto.create = function(properties) {
                    return new OneofDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.OneofDescriptorProto.$Properties} message OneofDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofDescriptorProto.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.OneofOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.OneofDescriptorProto.$Properties} message OneofDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofDescriptorProto.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };
    
                /**
                 * Decodes a OneofDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.OneofDescriptorProto & google.protobuf.OneofDescriptorProto.$Shape} OneofDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofDescriptorProto.decode = function (reader, length, _end, _depth, _target) {
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
                    message = _target || new $root.google.protobuf.OneofDescriptorProto();
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
                                message.name = reader.string();
                                continue;
                            }
                        case 2: {
                                if (wireType !== 2)
                                    break;
                                message.options = $root.google.protobuf.OneofOptions.decode(reader, reader.size(), $undefined, _depth + 1, message.options);
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
                 * Decodes a OneofDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.OneofDescriptorProto & google.protobuf.OneofDescriptorProto.$Shape} OneofDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofDescriptorProto.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.size());
                };
    
                /**
                 * Verifies a OneofDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OneofDescriptorProto.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.options != null && $Object.hasOwnProperty.call(message, "options")) {
                        var error = $root.google.protobuf.OneofOptions.verify(message.options, _depth + 1);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 */
                OneofDescriptorProto.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.OneofDescriptorProto)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.OneofDescriptorProto: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.OneofDescriptorProto();
                    if (object.name != null)
                        message.name = $String(object.name);
                    if (object.options != null) {
                        if (!$util.isObject(object.options))
                            throw $TypeError(".google.protobuf.OneofDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.OneofOptions.fromObject(object.options, _depth + 1);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a OneofDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.OneofDescriptorProto} message OneofDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OneofDescriptorProto.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                        object.name = message.name;
                    if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                        object.options = $root.google.protobuf.OneofOptions.toObject(message.options, options, _depth + 1);
                    return object;
                };
    
                /**
                 * Converts this OneofDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OneofDescriptorProto.prototype.toJSON = function() {
                    return OneofDescriptorProto.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the type url for OneofDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                OneofDescriptorProto.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.OneofDescriptorProto";
                };
    
                return OneofDescriptorProto;
            })();
    
            protobuf.EnumDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumDescriptorProto.
                 * @typedef {Object} google.protobuf.EnumDescriptorProto.$Properties
                 * @property {string|null} [name] EnumDescriptorProto name
                 * @property {Array.<google.protobuf.EnumValueDescriptorProto.$Properties>|null} [value] EnumDescriptorProto value
                 * @property {google.protobuf.EnumOptions.$Properties|null} [options] EnumDescriptorProto options
                 * @property {Array.<google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties>|null} [reserved_range] EnumDescriptorProto reserved_range
                 * @property {Array.<string>|null} [reserved_name] EnumDescriptorProto reserved_name
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
    
                /**
                 * Properties of an EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumDescriptorProto
                 * @augments google.protobuf.EnumDescriptorProto.$Properties
                 * @deprecated Use google.protobuf.EnumDescriptorProto.$Properties instead.
                 */
    
                /**
                 * Shape of an EnumDescriptorProto.
                 * @typedef {google.protobuf.EnumDescriptorProto.$Properties} google.protobuf.EnumDescriptorProto.$Shape
                 */
    
                /**
                 * Constructs a new EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumDescriptorProto.
                 * @constructor
                 * @param {google.protobuf.EnumDescriptorProto.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var EnumDescriptorProto = function (properties) {
                    this.value = [];
                    this.reserved_range = [];
                    this.reserved_name = [];
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };
    
                /**
                 * EnumDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.name = "";
    
                /**
                 * EnumDescriptorProto value.
                 * @member {Array.<google.protobuf.EnumValueDescriptorProto.$Properties>} value
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.value = $util.emptyArray;
    
                /**
                 * EnumDescriptorProto options.
                 * @member {google.protobuf.EnumOptions.$Properties|null|undefined} options
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.options = null;
    
                /**
                 * EnumDescriptorProto reserved_range.
                 * @member {Array.<google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties>} reserved_range
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.reserved_range = $util.emptyArray;
    
                /**
                 * EnumDescriptorProto reserved_name.
                 * @member {Array.<string>} reserved_name
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.reserved_name = $util.emptyArray;
    
                /**
                 * Creates a new EnumDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
                 * @type {{
                 *   (properties: google.protobuf.EnumDescriptorProto.$Shape): google.protobuf.EnumDescriptorProto & google.protobuf.EnumDescriptorProto.$Shape;
                 *   (properties?: google.protobuf.EnumDescriptorProto.$Properties): google.protobuf.EnumDescriptorProto;
                 * }}
                 */
                EnumDescriptorProto.create = function(properties) {
                    return new EnumDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto.$Properties} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.value != null && message.value.length)
                        for (var i = 0; i < message.value.length; ++i)
                            $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                    if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                    if (message.reserved_range != null && message.reserved_range.length)
                        for (var i = 0; i < message.reserved_range.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.encode(message.reserved_range[i], writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
                    if (message.reserved_name != null && message.reserved_name.length)
                        for (var i = 0; i < message.reserved_name.length; ++i)
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.reserved_name[i]);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto.$Properties} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };
    
                /**
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumDescriptorProto & google.protobuf.EnumDescriptorProto.$Shape} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decode = function (reader, length, _end, _depth, _target) {
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
                    message = _target || new $root.google.protobuf.EnumDescriptorProto();
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
                                message.name = reader.string();
                                continue;
                            }
                        case 2: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.value && message.value.length))
                                    message.value = [];
                                message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.size(), $undefined, _depth + 1));
                                continue;
                            }
                        case 3: {
                                if (wireType !== 2)
                                    break;
                                message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.size(), $undefined, _depth + 1, message.options);
                                continue;
                            }
                        case 4: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.reserved_range && message.reserved_range.length))
                                    message.reserved_range = [];
                                message.reserved_range.push($root.google.protobuf.EnumDescriptorProto.EnumReservedRange.decode(reader, reader.size(), $undefined, _depth + 1));
                                continue;
                            }
                        case 5: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.reserved_name && message.reserved_name.length))
                                    message.reserved_name = [];
                                message.reserved_name.push(reader.string());
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
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumDescriptorProto & google.protobuf.EnumDescriptorProto.$Shape} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.size());
                };
    
                /**
                 * Verifies an EnumDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumDescriptorProto.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.value != null && $Object.hasOwnProperty.call(message, "value")) {
                        if (!$Array.isArray(message.value))
                            return "value: array expected";
                        for (var i = 0; i < message.value.length; ++i) {
                            var error = $root.google.protobuf.EnumValueDescriptorProto.verify(message.value[i], _depth + 1);
                            if (error)
                                return "value." + error;
                        }
                    }
                    if (message.options != null && $Object.hasOwnProperty.call(message, "options")) {
                        var error = $root.google.protobuf.EnumOptions.verify(message.options, _depth + 1);
                        if (error)
                            return "options." + error;
                    }
                    if (message.reserved_range != null && $Object.hasOwnProperty.call(message, "reserved_range")) {
                        if (!$Array.isArray(message.reserved_range))
                            return "reserved_range: array expected";
                        for (var i = 0; i < message.reserved_range.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.verify(message.reserved_range[i], _depth + 1);
                            if (error)
                                return "reserved_range." + error;
                        }
                    }
                    if (message.reserved_name != null && $Object.hasOwnProperty.call(message, "reserved_name")) {
                        if (!$Array.isArray(message.reserved_name))
                            return "reserved_name: array expected";
                        for (var i = 0; i < message.reserved_name.length; ++i)
                            if (!$util.isString(message.reserved_name[i]))
                                return "reserved_name: string[] expected";
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 */
                EnumDescriptorProto.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.EnumDescriptorProto: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.EnumDescriptorProto();
                    if (object.name != null)
                        message.name = $String(object.name);
                    if (object.value) {
                        if (!$Array.isArray(object.value))
                            throw $TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                        message.value = $Array(object.value.length);
                        for (var i = 0; i < object.value.length; ++i) {
                            if (!$util.isObject(object.value[i]))
                                throw $TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                            message.value[i] = $root.google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i], _depth + 1);
                        }
                    }
                    if (object.options != null) {
                        if (!$util.isObject(object.options))
                            throw $TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumOptions.fromObject(object.options, _depth + 1);
                    }
                    if (object.reserved_range) {
                        if (!$Array.isArray(object.reserved_range))
                            throw $TypeError(".google.protobuf.EnumDescriptorProto.reserved_range: array expected");
                        message.reserved_range = $Array(object.reserved_range.length);
                        for (var i = 0; i < object.reserved_range.length; ++i) {
                            if (!$util.isObject(object.reserved_range[i]))
                                throw $TypeError(".google.protobuf.EnumDescriptorProto.reserved_range: object expected");
                            message.reserved_range[i] = $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.fromObject(object.reserved_range[i], _depth + 1);
                        }
                    }
                    if (object.reserved_name) {
                        if (!$Array.isArray(object.reserved_name))
                            throw $TypeError(".google.protobuf.EnumDescriptorProto.reserved_name: array expected");
                        message.reserved_name = $Array(object.reserved_name.length);
                        for (var i = 0; i < object.reserved_name.length; ++i)
                            message.reserved_name[i] = $String(object.reserved_name[i]);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumDescriptorProto.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.value = [];
                        object.reserved_range = [];
                        object.reserved_name = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                        object.name = message.name;
                    if (message.value && message.value.length) {
                        object.value = $Array(message.value.length);
                        for (var j = 0; j < message.value.length; ++j)
                            object.value[j] = $root.google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options, _depth + 1);
                    }
                    if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                        object.options = $root.google.protobuf.EnumOptions.toObject(message.options, options, _depth + 1);
                    if (message.reserved_range && message.reserved_range.length) {
                        object.reserved_range = $Array(message.reserved_range.length);
                        for (var j = 0; j < message.reserved_range.length; ++j)
                            object.reserved_range[j] = $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.toObject(message.reserved_range[j], options, _depth + 1);
                    }
                    if (message.reserved_name && message.reserved_name.length) {
                        object.reserved_name = $Array(message.reserved_name.length);
                        for (var j = 0; j < message.reserved_name.length; ++j)
                            object.reserved_name[j] = message.reserved_name[j];
                    }
                    return object;
                };
    
                /**
                 * Converts this EnumDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumDescriptorProto.prototype.toJSON = function() {
                    return EnumDescriptorProto.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the type url for EnumDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                EnumDescriptorProto.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.EnumDescriptorProto";
                };
    
                EnumDescriptorProto.EnumReservedRange = (function() {
    
                    /**
                     * Properties of an EnumReservedRange.
                     * @typedef {Object} google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties
                     * @property {number|null} [start] EnumReservedRange start
                     * @property {number|null} [end] EnumReservedRange end
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
    
                    /**
                     * Properties of an EnumReservedRange.
                     * @memberof google.protobuf.EnumDescriptorProto
                     * @interface IEnumReservedRange
                     * @augments google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties
                     * @deprecated Use google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties instead.
                     */
    
                    /**
                     * Shape of an EnumReservedRange.
                     * @typedef {google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties} google.protobuf.EnumDescriptorProto.EnumReservedRange.$Shape
                     */
    
                    /**
                     * Constructs a new EnumReservedRange.
                     * @memberof google.protobuf.EnumDescriptorProto
                     * @classdesc Represents an EnumReservedRange.
                     * @constructor
                     * @param {google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    var EnumReservedRange = function (properties) {
                        if (properties)
                            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };
    
                    /**
                     * EnumReservedRange start.
                     * @member {number} start
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @instance
                     */
                    EnumReservedRange.prototype.start = 0;
    
                    /**
                     * EnumReservedRange end.
                     * @member {number} end
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @instance
                     */
                    EnumReservedRange.prototype.end = 0;
    
                    /**
                     * Creates a new EnumReservedRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties=} [properties] Properties to set
                     * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange instance
                     * @type {{
                     *   (properties: google.protobuf.EnumDescriptorProto.EnumReservedRange.$Shape): google.protobuf.EnumDescriptorProto.EnumReservedRange & google.protobuf.EnumDescriptorProto.EnumReservedRange.$Shape;
                     *   (properties?: google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties): google.protobuf.EnumDescriptorProto.EnumReservedRange;
                     * }}
                     */
                    EnumReservedRange.create = function(properties) {
                        return new EnumReservedRange(properties);
                    };
    
                    /**
                     * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties} message EnumReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EnumReservedRange.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.start != null && $Object.hasOwnProperty.call(message, "start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && $Object.hasOwnProperty.call(message, "end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (var i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties} message EnumReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EnumReservedRange.encodeDelimited = function(message, writer) {
                        return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                    };
    
                    /**
                     * Decodes an EnumReservedRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange & google.protobuf.EnumDescriptorProto.EnumReservedRange.$Shape} EnumReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EnumReservedRange.decode = function (reader, length, _end, _depth, _target) {
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
                        message = _target || new $root.google.protobuf.EnumDescriptorProto.EnumReservedRange();
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
                                    message.start = reader.int32();
                                    continue;
                                }
                            case 2: {
                                    if (wireType !== 0)
                                        break;
                                    message.end = reader.int32();
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
                     * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange & google.protobuf.EnumDescriptorProto.EnumReservedRange.$Shape} EnumReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EnumReservedRange.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.size());
                    };
    
                    /**
                     * Verifies an EnumReservedRange message.
                     * @function verify
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    EnumReservedRange.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.start != null && $Object.hasOwnProperty.call(message, "start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && $Object.hasOwnProperty.call(message, "end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange
                     */
                    EnumReservedRange.fromObject = function (object, _depth) {
                        if (object instanceof $root.google.protobuf.EnumDescriptorProto.EnumReservedRange)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".google.protobuf.EnumDescriptorProto.EnumReservedRange: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var message = new $root.google.protobuf.EnumDescriptorProto.EnumReservedRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {google.protobuf.EnumDescriptorProto.EnumReservedRange} message EnumReservedRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    EnumReservedRange.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                        }
                        if (message.start != null && $Object.hasOwnProperty.call(message, "start"))
                            object.start = message.start;
                        if (message.end != null && $Object.hasOwnProperty.call(message, "end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this EnumReservedRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    EnumReservedRange.prototype.toJSON = function() {
                        return EnumReservedRange.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the type url for EnumReservedRange
                     * @function getTypeUrl
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    EnumReservedRange.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/google.protobuf.EnumDescriptorProto.EnumReservedRange";
                    };
    
                    return EnumReservedRange;
                })();
    
                return EnumDescriptorProto;
            })();
    
            protobuf.EnumValueDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumValueDescriptorProto.
                 * @typedef {Object} google.protobuf.EnumValueDescriptorProto.$Properties
                 * @property {string|null} [name] EnumValueDescriptorProto name
                 * @property {number|null} [number] EnumValueDescriptorProto number
                 * @property {google.protobuf.EnumValueOptions.$Properties|null} [options] EnumValueDescriptorProto options
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
    
                /**
                 * Properties of an EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumValueDescriptorProto
                 * @augments google.protobuf.EnumValueDescriptorProto.$Properties
                 * @deprecated Use google.protobuf.EnumValueDescriptorProto.$Properties instead.
                 */
    
                /**
                 * Shape of an EnumValueDescriptorProto.
                 * @typedef {google.protobuf.EnumValueDescriptorProto.$Properties} google.protobuf.EnumValueDescriptorProto.$Shape
                 */
    
                /**
                 * Constructs a new EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueDescriptorProto.
                 * @constructor
                 * @param {google.protobuf.EnumValueDescriptorProto.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var EnumValueDescriptorProto = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };
    
                /**
                 * EnumValueDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.name = "";
    
                /**
                 * EnumValueDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.number = 0;
    
                /**
                 * EnumValueDescriptorProto options.
                 * @member {google.protobuf.EnumValueOptions.$Properties|null|undefined} options
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new EnumValueDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumValueDescriptorProto.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
                 * @type {{
                 *   (properties: google.protobuf.EnumValueDescriptorProto.$Shape): google.protobuf.EnumValueDescriptorProto & google.protobuf.EnumValueDescriptorProto.$Shape;
                 *   (properties?: google.protobuf.EnumValueDescriptorProto.$Properties): google.protobuf.EnumValueDescriptorProto;
                 * }}
                 */
                EnumValueDescriptorProto.create = function(properties) {
                    return new EnumValueDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumValueDescriptorProto.$Properties} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.number != null && $Object.hasOwnProperty.call(message, "number"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                    if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumValueDescriptorProto.$Properties} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };
    
                /**
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueDescriptorProto & google.protobuf.EnumValueDescriptorProto.$Shape} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decode = function (reader, length, _end, _depth, _target) {
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
                    message = _target || new $root.google.protobuf.EnumValueDescriptorProto();
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
                                message.name = reader.string();
                                continue;
                            }
                        case 2: {
                                if (wireType !== 0)
                                    break;
                                message.number = reader.int32();
                                continue;
                            }
                        case 3: {
                                if (wireType !== 2)
                                    break;
                                message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.size(), $undefined, _depth + 1, message.options);
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
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueDescriptorProto & google.protobuf.EnumValueDescriptorProto.$Shape} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.size());
                };
    
                /**
                 * Verifies an EnumValueDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueDescriptorProto.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && $Object.hasOwnProperty.call(message, "number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.options != null && $Object.hasOwnProperty.call(message, "options")) {
                        var error = $root.google.protobuf.EnumValueOptions.verify(message.options, _depth + 1);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 */
                EnumValueDescriptorProto.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.EnumValueDescriptorProto: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.EnumValueDescriptorProto();
                    if (object.name != null)
                        message.name = $String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    if (object.options != null) {
                        if (!$util.isObject(object.options))
                            throw $TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumValueOptions.fromObject(object.options, _depth + 1);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueDescriptorProto.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.number = 0;
                        object.options = null;
                    }
                    if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                        object.name = message.name;
                    if (message.number != null && $Object.hasOwnProperty.call(message, "number"))
                        object.number = message.number;
                    if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                        object.options = $root.google.protobuf.EnumValueOptions.toObject(message.options, options, _depth + 1);
                    return object;
                };
    
                /**
                 * Converts this EnumValueDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueDescriptorProto.prototype.toJSON = function() {
                    return EnumValueDescriptorProto.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the type url for EnumValueDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                EnumValueDescriptorProto.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.EnumValueDescriptorProto";
                };
    
                return EnumValueDescriptorProto;
            })();
    
            protobuf.ServiceDescriptorProto = (function() {
    
                /**
                 * Properties of a ServiceDescriptorProto.
                 * @typedef {Object} google.protobuf.ServiceDescriptorProto.$Properties
                 * @property {string|null} [name] ServiceDescriptorProto name
                 * @property {Array.<google.protobuf.MethodDescriptorProto.$Properties>|null} [method] ServiceDescriptorProto method
                 * @property {google.protobuf.ServiceOptions.$Properties|null} [options] ServiceDescriptorProto options
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
    
                /**
                 * Properties of a ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IServiceDescriptorProto
                 * @augments google.protobuf.ServiceDescriptorProto.$Properties
                 * @deprecated Use google.protobuf.ServiceDescriptorProto.$Properties instead.
                 */
    
                /**
                 * Shape of a ServiceDescriptorProto.
                 * @typedef {google.protobuf.ServiceDescriptorProto.$Properties} google.protobuf.ServiceDescriptorProto.$Shape
                 */
    
                /**
                 * Constructs a new ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceDescriptorProto.
                 * @constructor
                 * @param {google.protobuf.ServiceDescriptorProto.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var ServiceDescriptorProto = function (properties) {
                    this.method = [];
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };
    
                /**
                 * ServiceDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.name = "";
    
                /**
                 * ServiceDescriptorProto method.
                 * @member {Array.<google.protobuf.MethodDescriptorProto.$Properties>} method
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.method = $util.emptyArray;
    
                /**
                 * ServiceDescriptorProto options.
                 * @member {google.protobuf.ServiceOptions.$Properties|null|undefined} options
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new ServiceDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.ServiceDescriptorProto.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
                 * @type {{
                 *   (properties: google.protobuf.ServiceDescriptorProto.$Shape): google.protobuf.ServiceDescriptorProto & google.protobuf.ServiceDescriptorProto.$Shape;
                 *   (properties?: google.protobuf.ServiceDescriptorProto.$Properties): google.protobuf.ServiceDescriptorProto;
                 * }}
                 */
                ServiceDescriptorProto.create = function(properties) {
                    return new ServiceDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.ServiceDescriptorProto.$Properties} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.method != null && message.method.length)
                        for (var i = 0; i < message.method.length; ++i)
                            $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                    if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.ServiceDescriptorProto.$Properties} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };
    
                /**
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceDescriptorProto & google.protobuf.ServiceDescriptorProto.$Shape} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decode = function (reader, length, _end, _depth, _target) {
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
                    message = _target || new $root.google.protobuf.ServiceDescriptorProto();
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
                                message.name = reader.string();
                                continue;
                            }
                        case 2: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.method && message.method.length))
                                    message.method = [];
                                message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.size(), $undefined, _depth + 1));
                                continue;
                            }
                        case 3: {
                                if (wireType !== 2)
                                    break;
                                message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.size(), $undefined, _depth + 1, message.options);
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
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceDescriptorProto & google.protobuf.ServiceDescriptorProto.$Shape} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.size());
                };
    
                /**
                 * Verifies a ServiceDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceDescriptorProto.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.method != null && $Object.hasOwnProperty.call(message, "method")) {
                        if (!$Array.isArray(message.method))
                            return "method: array expected";
                        for (var i = 0; i < message.method.length; ++i) {
                            var error = $root.google.protobuf.MethodDescriptorProto.verify(message.method[i], _depth + 1);
                            if (error)
                                return "method." + error;
                        }
                    }
                    if (message.options != null && $Object.hasOwnProperty.call(message, "options")) {
                        var error = $root.google.protobuf.ServiceOptions.verify(message.options, _depth + 1);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 */
                ServiceDescriptorProto.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.ServiceDescriptorProto: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.ServiceDescriptorProto();
                    if (object.name != null)
                        message.name = $String(object.name);
                    if (object.method) {
                        if (!$Array.isArray(object.method))
                            throw $TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                        message.method = $Array(object.method.length);
                        for (var i = 0; i < object.method.length; ++i) {
                            if (!$util.isObject(object.method[i]))
                                throw $TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                            message.method[i] = $root.google.protobuf.MethodDescriptorProto.fromObject(object.method[i], _depth + 1);
                        }
                    }
                    if (object.options != null) {
                        if (!$util.isObject(object.options))
                            throw $TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.ServiceOptions.fromObject(object.options, _depth + 1);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceDescriptorProto.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.method = [];
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                        object.name = message.name;
                    if (message.method && message.method.length) {
                        object.method = $Array(message.method.length);
                        for (var j = 0; j < message.method.length; ++j)
                            object.method[j] = $root.google.protobuf.MethodDescriptorProto.toObject(message.method[j], options, _depth + 1);
                    }
                    if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                        object.options = $root.google.protobuf.ServiceOptions.toObject(message.options, options, _depth + 1);
                    return object;
                };
    
                /**
                 * Converts this ServiceDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceDescriptorProto.prototype.toJSON = function() {
                    return ServiceDescriptorProto.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the type url for ServiceDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                ServiceDescriptorProto.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.ServiceDescriptorProto";
                };
    
                return ServiceDescriptorProto;
            })();
    
            protobuf.MethodDescriptorProto = (function() {
    
                /**
                 * Properties of a MethodDescriptorProto.
                 * @typedef {Object} google.protobuf.MethodDescriptorProto.$Properties
                 * @property {string|null} [name] MethodDescriptorProto name
                 * @property {string|null} [input_type] MethodDescriptorProto input_type
                 * @property {string|null} [output_type] MethodDescriptorProto output_type
                 * @property {google.protobuf.MethodOptions.$Properties|null} [options] MethodDescriptorProto options
                 * @property {boolean|null} [client_streaming] MethodDescriptorProto client_streaming
                 * @property {boolean|null} [server_streaming] MethodDescriptorProto server_streaming
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
    
                /**
                 * Properties of a MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IMethodDescriptorProto
                 * @augments google.protobuf.MethodDescriptorProto.$Properties
                 * @deprecated Use google.protobuf.MethodDescriptorProto.$Properties instead.
                 */
    
                /**
                 * Shape of a MethodDescriptorProto.
                 * @typedef {google.protobuf.MethodDescriptorProto.$Properties} google.protobuf.MethodDescriptorProto.$Shape
                 */
    
                /**
                 * Constructs a new MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodDescriptorProto.
                 * @constructor
                 * @param {google.protobuf.MethodDescriptorProto.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var MethodDescriptorProto = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };
    
                /**
                 * MethodDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.name = "";
    
                /**
                 * MethodDescriptorProto input_type.
                 * @member {string} input_type
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.input_type = "";
    
                /**
                 * MethodDescriptorProto output_type.
                 * @member {string} output_type
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.output_type = "";
    
                /**
                 * MethodDescriptorProto options.
                 * @member {google.protobuf.MethodOptions.$Properties|null|undefined} options
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.options = null;
    
                /**
                 * MethodDescriptorProto client_streaming.
                 * @member {boolean} client_streaming
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.client_streaming = false;
    
                /**
                 * MethodDescriptorProto server_streaming.
                 * @member {boolean} server_streaming
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.server_streaming = false;
    
                /**
                 * Creates a new MethodDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.MethodDescriptorProto.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
                 * @type {{
                 *   (properties: google.protobuf.MethodDescriptorProto.$Shape): google.protobuf.MethodDescriptorProto & google.protobuf.MethodDescriptorProto.$Shape;
                 *   (properties?: google.protobuf.MethodDescriptorProto.$Properties): google.protobuf.MethodDescriptorProto;
                 * }}
                 */
                MethodDescriptorProto.create = function(properties) {
                    return new MethodDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.MethodDescriptorProto.$Properties} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.input_type != null && $Object.hasOwnProperty.call(message, "input_type"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.input_type);
                    if (message.output_type != null && $Object.hasOwnProperty.call(message, "output_type"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.output_type);
                    if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
                    if (message.client_streaming != null && $Object.hasOwnProperty.call(message, "client_streaming"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.client_streaming);
                    if (message.server_streaming != null && $Object.hasOwnProperty.call(message, "server_streaming"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.server_streaming);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.MethodDescriptorProto.$Properties} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };
    
                /**
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodDescriptorProto & google.protobuf.MethodDescriptorProto.$Shape} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decode = function (reader, length, _end, _depth, _target) {
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
                    message = _target || new $root.google.protobuf.MethodDescriptorProto();
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
                                message.name = reader.string();
                                continue;
                            }
                        case 2: {
                                if (wireType !== 2)
                                    break;
                                message.input_type = reader.string();
                                continue;
                            }
                        case 3: {
                                if (wireType !== 2)
                                    break;
                                message.output_type = reader.string();
                                continue;
                            }
                        case 4: {
                                if (wireType !== 2)
                                    break;
                                message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.size(), $undefined, _depth + 1, message.options);
                                continue;
                            }
                        case 5: {
                                if (wireType !== 0)
                                    break;
                                message.client_streaming = reader.bool();
                                continue;
                            }
                        case 6: {
                                if (wireType !== 0)
                                    break;
                                message.server_streaming = reader.bool();
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
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodDescriptorProto & google.protobuf.MethodDescriptorProto.$Shape} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.size());
                };
    
                /**
                 * Verifies a MethodDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodDescriptorProto.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.input_type != null && $Object.hasOwnProperty.call(message, "input_type"))
                        if (!$util.isString(message.input_type))
                            return "input_type: string expected";
                    if (message.output_type != null && $Object.hasOwnProperty.call(message, "output_type"))
                        if (!$util.isString(message.output_type))
                            return "output_type: string expected";
                    if (message.options != null && $Object.hasOwnProperty.call(message, "options")) {
                        var error = $root.google.protobuf.MethodOptions.verify(message.options, _depth + 1);
                        if (error)
                            return "options." + error;
                    }
                    if (message.client_streaming != null && $Object.hasOwnProperty.call(message, "client_streaming"))
                        if (typeof message.client_streaming !== "boolean")
                            return "client_streaming: boolean expected";
                    if (message.server_streaming != null && $Object.hasOwnProperty.call(message, "server_streaming"))
                        if (typeof message.server_streaming !== "boolean")
                            return "server_streaming: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 */
                MethodDescriptorProto.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.MethodDescriptorProto: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.MethodDescriptorProto();
                    if (object.name != null)
                        message.name = $String(object.name);
                    if (object.input_type != null)
                        message.input_type = $String(object.input_type);
                    if (object.output_type != null)
                        message.output_type = $String(object.output_type);
                    if (object.options != null) {
                        if (!$util.isObject(object.options))
                            throw $TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MethodOptions.fromObject(object.options, _depth + 1);
                    }
                    if (object.client_streaming != null)
                        message.client_streaming = $Boolean(object.client_streaming);
                    if (object.server_streaming != null)
                        message.server_streaming = $Boolean(object.server_streaming);
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodDescriptorProto.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.input_type = "";
                        object.output_type = "";
                        object.options = null;
                        object.client_streaming = false;
                        object.server_streaming = false;
                    }
                    if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                        object.name = message.name;
                    if (message.input_type != null && $Object.hasOwnProperty.call(message, "input_type"))
                        object.input_type = message.input_type;
                    if (message.output_type != null && $Object.hasOwnProperty.call(message, "output_type"))
                        object.output_type = message.output_type;
                    if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                        object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options, _depth + 1);
                    if (message.client_streaming != null && $Object.hasOwnProperty.call(message, "client_streaming"))
                        object.client_streaming = message.client_streaming;
                    if (message.server_streaming != null && $Object.hasOwnProperty.call(message, "server_streaming"))
                        object.server_streaming = message.server_streaming;
                    return object;
                };
    
                /**
                 * Converts this MethodDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodDescriptorProto.prototype.toJSON = function() {
                    return MethodDescriptorProto.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the type url for MethodDescriptorProto
                 * @function getTypeUrl
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                MethodDescriptorProto.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.MethodDescriptorProto";
                };
    
                return MethodDescriptorProto;
            })();
    
            protobuf.FileOptions = (function() {
    
                /**
                 * Properties of a FileOptions.
                 * @typedef {Object} google.protobuf.FileOptions.$Properties
                 * @property {string|null} [java_package] FileOptions java_package
                 * @property {string|null} [java_outer_classname] FileOptions java_outer_classname
                 * @property {boolean|null} [java_multiple_files] FileOptions java_multiple_files
                 * @property {boolean|null} [java_generate_equals_and_hash] FileOptions java_generate_equals_and_hash
                 * @property {boolean|null} [java_string_check_utf8] FileOptions java_string_check_utf8
                 * @property {google.protobuf.FileOptions.OptimizeMode|null} [optimize_for] FileOptions optimize_for
                 * @property {string|null} [go_package] FileOptions go_package
                 * @property {boolean|null} [cc_generic_services] FileOptions cc_generic_services
                 * @property {boolean|null} [java_generic_services] FileOptions java_generic_services
                 * @property {boolean|null} [py_generic_services] FileOptions py_generic_services
                 * @property {boolean|null} [php_generic_services] FileOptions php_generic_services
                 * @property {boolean|null} [deprecated] FileOptions deprecated
                 * @property {boolean|null} [cc_enable_arenas] FileOptions cc_enable_arenas
                 * @property {string|null} [objc_class_prefix] FileOptions objc_class_prefix
                 * @property {string|null} [csharp_namespace] FileOptions csharp_namespace
                 * @property {string|null} [swift_prefix] FileOptions swift_prefix
                 * @property {string|null} [php_class_prefix] FileOptions php_class_prefix
                 * @property {string|null} [php_namespace] FileOptions php_namespace
                 * @property {string|null} [php_metadata_namespace] FileOptions php_metadata_namespace
                 * @property {string|null} [ruby_package] FileOptions ruby_package
                 * @property {Array.<string>|null} [additional_includes] FileOptions additional_includes
                 * @property {Array.<google.protobuf.UninterpretedOption.$Properties>|null} [uninterpreted_option] FileOptions uninterpreted_option
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
    
                /**
                 * Properties of a FileOptions.
                 * @memberof google.protobuf
                 * @interface IFileOptions
                 * @augments google.protobuf.FileOptions.$Properties
                 * @deprecated Use google.protobuf.FileOptions.$Properties instead.
                 */
    
                /**
                 * Shape of a FileOptions.
                 * @typedef {google.protobuf.FileOptions.$Properties} google.protobuf.FileOptions.$Shape
                 */
    
                /**
                 * Constructs a new FileOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileOptions.
                 * @constructor
                 * @param {google.protobuf.FileOptions.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var FileOptions = function (properties) {
                    this.additional_includes = [];
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };
    
                /**
                 * FileOptions java_package.
                 * @member {string} java_package
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_package = "";
    
                /**
                 * FileOptions java_outer_classname.
                 * @member {string} java_outer_classname
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_outer_classname = "";
    
                /**
                 * FileOptions java_multiple_files.
                 * @member {boolean} java_multiple_files
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_multiple_files = false;
    
                /**
                 * FileOptions java_generate_equals_and_hash.
                 * @member {boolean} java_generate_equals_and_hash
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_generate_equals_and_hash = false;
    
                /**
                 * FileOptions java_string_check_utf8.
                 * @member {boolean} java_string_check_utf8
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_string_check_utf8 = false;
    
                /**
                 * FileOptions optimize_for.
                 * @member {google.protobuf.FileOptions.OptimizeMode} optimize_for
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.optimize_for = 1;
    
                /**
                 * FileOptions go_package.
                 * @member {string} go_package
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.go_package = "";
    
                /**
                 * FileOptions cc_generic_services.
                 * @member {boolean} cc_generic_services
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.cc_generic_services = false;
    
                /**
                 * FileOptions java_generic_services.
                 * @member {boolean} java_generic_services
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_generic_services = false;
    
                /**
                 * FileOptions py_generic_services.
                 * @member {boolean} py_generic_services
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.py_generic_services = false;
    
                /**
                 * FileOptions php_generic_services.
                 * @member {boolean} php_generic_services
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.php_generic_services = false;
    
                /**
                 * FileOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.deprecated = false;
    
                /**
                 * FileOptions cc_enable_arenas.
                 * @member {boolean} cc_enable_arenas
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.cc_enable_arenas = true;
    
                /**
                 * FileOptions objc_class_prefix.
                 * @member {string} objc_class_prefix
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.objc_class_prefix = "";
    
                /**
                 * FileOptions csharp_namespace.
                 * @member {string} csharp_namespace
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.csharp_namespace = "";
    
                /**
                 * FileOptions swift_prefix.
                 * @member {string} swift_prefix
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.swift_prefix = "";
    
                /**
                 * FileOptions php_class_prefix.
                 * @member {string} php_class_prefix
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.php_class_prefix = "";
    
                /**
                 * FileOptions php_namespace.
                 * @member {string} php_namespace
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.php_namespace = "";
    
                /**
                 * FileOptions php_metadata_namespace.
                 * @member {string} php_metadata_namespace
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.php_metadata_namespace = "";
    
                /**
                 * FileOptions ruby_package.
                 * @member {string} ruby_package
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.ruby_package = "";
    
                /**
                 * FileOptions additional_includes.
                 * @member {Array.<string>} additional_includes
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.additional_includes = $util.emptyArray;
    
                /**
                 * FileOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.UninterpretedOption.$Properties>} uninterpreted_option
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new FileOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.FileOptions.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.FileOptions} FileOptions instance
                 * @type {{
                 *   (properties: google.protobuf.FileOptions.$Shape): google.protobuf.FileOptions & google.protobuf.FileOptions.$Shape;
                 *   (properties?: google.protobuf.FileOptions.$Properties): google.protobuf.FileOptions;
                 * }}
                 */
                FileOptions.create = function(properties) {
                    return new FileOptions(properties);
                };
    
                /**
                 * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.FileOptions.$Properties} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.java_package != null && $Object.hasOwnProperty.call(message, "java_package"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.java_package);
                    if (message.java_outer_classname != null && $Object.hasOwnProperty.call(message, "java_outer_classname"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.java_outer_classname);
                    if (message.optimize_for != null && $Object.hasOwnProperty.call(message, "optimize_for"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimize_for);
                    if (message.java_multiple_files != null && $Object.hasOwnProperty.call(message, "java_multiple_files"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.java_multiple_files);
                    if (message.go_package != null && $Object.hasOwnProperty.call(message, "go_package"))
                        writer.uint32(/* id 11, wireType 2 =*/90).string(message.go_package);
                    if (message.cc_generic_services != null && $Object.hasOwnProperty.call(message, "cc_generic_services"))
                        writer.uint32(/* id 16, wireType 0 =*/128).bool(message.cc_generic_services);
                    if (message.java_generic_services != null && $Object.hasOwnProperty.call(message, "java_generic_services"))
                        writer.uint32(/* id 17, wireType 0 =*/136).bool(message.java_generic_services);
                    if (message.py_generic_services != null && $Object.hasOwnProperty.call(message, "py_generic_services"))
                        writer.uint32(/* id 18, wireType 0 =*/144).bool(message.py_generic_services);
                    if (message.java_generate_equals_and_hash != null && $Object.hasOwnProperty.call(message, "java_generate_equals_and_hash"))
                        writer.uint32(/* id 20, wireType 0 =*/160).bool(message.java_generate_equals_and_hash);
                    if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                    if (message.java_string_check_utf8 != null && $Object.hasOwnProperty.call(message, "java_string_check_utf8"))
                        writer.uint32(/* id 27, wireType 0 =*/216).bool(message.java_string_check_utf8);
                    if (message.cc_enable_arenas != null && $Object.hasOwnProperty.call(message, "cc_enable_arenas"))
                        writer.uint32(/* id 31, wireType 0 =*/248).bool(message.cc_enable_arenas);
                    if (message.objc_class_prefix != null && $Object.hasOwnProperty.call(message, "objc_class_prefix"))
                        writer.uint32(/* id 36, wireType 2 =*/290).string(message.objc_class_prefix);
                    if (message.csharp_namespace != null && $Object.hasOwnProperty.call(message, "csharp_namespace"))
                        writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharp_namespace);
                    if (message.swift_prefix != null && $Object.hasOwnProperty.call(message, "swift_prefix"))
                        writer.uint32(/* id 39, wireType 2 =*/314).string(message.swift_prefix);
                    if (message.php_class_prefix != null && $Object.hasOwnProperty.call(message, "php_class_prefix"))
                        writer.uint32(/* id 40, wireType 2 =*/322).string(message.php_class_prefix);
                    if (message.php_namespace != null && $Object.hasOwnProperty.call(message, "php_namespace"))
                        writer.uint32(/* id 41, wireType 2 =*/330).string(message.php_namespace);
                    if (message.php_generic_services != null && $Object.hasOwnProperty.call(message, "php_generic_services"))
                        writer.uint32(/* id 42, wireType 0 =*/336).bool(message.php_generic_services);
                    if (message.php_metadata_namespace != null && $Object.hasOwnProperty.call(message, "php_metadata_namespace"))
                        writer.uint32(/* id 44, wireType 2 =*/354).string(message.php_metadata_namespace);
                    if (message.ruby_package != null && $Object.hasOwnProperty.call(message, "ruby_package"))
                        writer.uint32(/* id 45, wireType 2 =*/362).string(message.ruby_package);
                    if (message.additional_includes != null && message.additional_includes.length)
                        for (var i = 0; i < message.additional_includes.length; ++i)
                            writer.uint32(/* id 50, wireType 2 =*/402).string(message.additional_includes[i]);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork(), _depth + 1).ldelim();
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.FileOptions.$Properties} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };
    
                /**
                 * Decodes a FileOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileOptions & google.protobuf.FileOptions.$Shape} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decode = function (reader, length, _end, _depth, _target) {
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
                    message = _target || new $root.google.protobuf.FileOptions();
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
                                message.java_package = reader.string();
                                continue;
                            }
                        case 8: {
                                if (wireType !== 2)
                                    break;
                                message.java_outer_classname = reader.string();
                                continue;
                            }
                        case 10: {
                                if (wireType !== 0)
                                    break;
                                message.java_multiple_files = reader.bool();
                                continue;
                            }
                        case 20: {
                                if (wireType !== 0)
                                    break;
                                message.java_generate_equals_and_hash = reader.bool();
                                continue;
                            }
                        case 27: {
                                if (wireType !== 0)
                                    break;
                                message.java_string_check_utf8 = reader.bool();
                                continue;
                            }
                        case 9: {
                                if (wireType !== 0)
                                    break;
                                value = reader.int32();
                                if ($root.google.protobuf.FileOptions.OptimizeMode[value] !== $undefined)
                                    message.optimize_for = value;
                                else if (!reader.discardUnknown) {
                                    $util.makeProp(message, "$unknowns", false);
                                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                                }
                                continue;
                            }
                        case 11: {
                                if (wireType !== 2)
                                    break;
                                message.go_package = reader.string();
                                continue;
                            }
                        case 16: {
                                if (wireType !== 0)
                                    break;
                                message.cc_generic_services = reader.bool();
                                continue;
                            }
                        case 17: {
                                if (wireType !== 0)
                                    break;
                                message.java_generic_services = reader.bool();
                                continue;
                            }
                        case 18: {
                                if (wireType !== 0)
                                    break;
                                message.py_generic_services = reader.bool();
                                continue;
                            }
                        case 42: {
                                if (wireType !== 0)
                                    break;
                                message.php_generic_services = reader.bool();
                                continue;
                            }
                        case 23: {
                                if (wireType !== 0)
                                    break;
                                message.deprecated = reader.bool();
                                continue;
                            }
                        case 31: {
                                if (wireType !== 0)
                                    break;
                                message.cc_enable_arenas = reader.bool();
                                continue;
                            }
                        case 36: {
                                if (wireType !== 2)
                                    break;
                                message.objc_class_prefix = reader.string();
                                continue;
                            }
                        case 37: {
                                if (wireType !== 2)
                                    break;
                                message.csharp_namespace = reader.string();
                                continue;
                            }
                        case 39: {
                                if (wireType !== 2)
                                    break;
                                message.swift_prefix = reader.string();
                                continue;
                            }
                        case 40: {
                                if (wireType !== 2)
                                    break;
                                message.php_class_prefix = reader.string();
                                continue;
                            }
                        case 41: {
                                if (wireType !== 2)
                                    break;
                                message.php_namespace = reader.string();
                                continue;
                            }
                        case 44: {
                                if (wireType !== 2)
                                    break;
                                message.php_metadata_namespace = reader.string();
                                continue;
                            }
                        case 45: {
                                if (wireType !== 2)
                                    break;
                                message.ruby_package = reader.string();
                                continue;
                            }
                        case 50: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.additional_includes && message.additional_includes.length))
                                    message.additional_includes = [];
                                message.additional_includes.push(reader.string());
                                continue;
                            }
                        case 999: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                    message.uninterpreted_option = [];
                                message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.size(), $undefined, _depth + 1));
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
                 * Decodes a FileOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileOptions & google.protobuf.FileOptions.$Shape} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.size());
                };
    
                /**
                 * Verifies a FileOptions message.
                 * @function verify
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileOptions.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.java_package != null && $Object.hasOwnProperty.call(message, "java_package"))
                        if (!$util.isString(message.java_package))
                            return "java_package: string expected";
                    if (message.java_outer_classname != null && $Object.hasOwnProperty.call(message, "java_outer_classname"))
                        if (!$util.isString(message.java_outer_classname))
                            return "java_outer_classname: string expected";
                    if (message.java_multiple_files != null && $Object.hasOwnProperty.call(message, "java_multiple_files"))
                        if (typeof message.java_multiple_files !== "boolean")
                            return "java_multiple_files: boolean expected";
                    if (message.java_generate_equals_and_hash != null && $Object.hasOwnProperty.call(message, "java_generate_equals_and_hash"))
                        if (typeof message.java_generate_equals_and_hash !== "boolean")
                            return "java_generate_equals_and_hash: boolean expected";
                    if (message.java_string_check_utf8 != null && $Object.hasOwnProperty.call(message, "java_string_check_utf8"))
                        if (typeof message.java_string_check_utf8 !== "boolean")
                            return "java_string_check_utf8: boolean expected";
                    if (message.optimize_for != null && $Object.hasOwnProperty.call(message, "optimize_for"))
                        switch (message.optimize_for) {
                        default:
                            return "optimize_for: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.go_package != null && $Object.hasOwnProperty.call(message, "go_package"))
                        if (!$util.isString(message.go_package))
                            return "go_package: string expected";
                    if (message.cc_generic_services != null && $Object.hasOwnProperty.call(message, "cc_generic_services"))
                        if (typeof message.cc_generic_services !== "boolean")
                            return "cc_generic_services: boolean expected";
                    if (message.java_generic_services != null && $Object.hasOwnProperty.call(message, "java_generic_services"))
                        if (typeof message.java_generic_services !== "boolean")
                            return "java_generic_services: boolean expected";
                    if (message.py_generic_services != null && $Object.hasOwnProperty.call(message, "py_generic_services"))
                        if (typeof message.py_generic_services !== "boolean")
                            return "py_generic_services: boolean expected";
                    if (message.php_generic_services != null && $Object.hasOwnProperty.call(message, "php_generic_services"))
                        if (typeof message.php_generic_services !== "boolean")
                            return "php_generic_services: boolean expected";
                    if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.cc_enable_arenas != null && $Object.hasOwnProperty.call(message, "cc_enable_arenas"))
                        if (typeof message.cc_enable_arenas !== "boolean")
                            return "cc_enable_arenas: boolean expected";
                    if (message.objc_class_prefix != null && $Object.hasOwnProperty.call(message, "objc_class_prefix"))
                        if (!$util.isString(message.objc_class_prefix))
                            return "objc_class_prefix: string expected";
                    if (message.csharp_namespace != null && $Object.hasOwnProperty.call(message, "csharp_namespace"))
                        if (!$util.isString(message.csharp_namespace))
                            return "csharp_namespace: string expected";
                    if (message.swift_prefix != null && $Object.hasOwnProperty.call(message, "swift_prefix"))
                        if (!$util.isString(message.swift_prefix))
                            return "swift_prefix: string expected";
                    if (message.php_class_prefix != null && $Object.hasOwnProperty.call(message, "php_class_prefix"))
                        if (!$util.isString(message.php_class_prefix))
                            return "php_class_prefix: string expected";
                    if (message.php_namespace != null && $Object.hasOwnProperty.call(message, "php_namespace"))
                        if (!$util.isString(message.php_namespace))
                            return "php_namespace: string expected";
                    if (message.php_metadata_namespace != null && $Object.hasOwnProperty.call(message, "php_metadata_namespace"))
                        if (!$util.isString(message.php_metadata_namespace))
                            return "php_metadata_namespace: string expected";
                    if (message.ruby_package != null && $Object.hasOwnProperty.call(message, "ruby_package"))
                        if (!$util.isString(message.ruby_package))
                            return "ruby_package: string expected";
                    if (message.additional_includes != null && $Object.hasOwnProperty.call(message, "additional_includes")) {
                        if (!$Array.isArray(message.additional_includes))
                            return "additional_includes: array expected";
                        for (var i = 0; i < message.additional_includes.length; ++i)
                            if (!$util.isString(message.additional_includes[i]))
                                return "additional_includes: string[] expected";
                    }
                    if (message.uninterpreted_option != null && $Object.hasOwnProperty.call(message, "uninterpreted_option")) {
                        if (!$Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i], _depth + 1);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileOptions} FileOptions
                 */
                FileOptions.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.FileOptions)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.FileOptions: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.FileOptions();
                    if (object.java_package != null)
                        message.java_package = $String(object.java_package);
                    if (object.java_outer_classname != null)
                        message.java_outer_classname = $String(object.java_outer_classname);
                    if (object.java_multiple_files != null)
                        message.java_multiple_files = $Boolean(object.java_multiple_files);
                    if (object.java_generate_equals_and_hash != null)
                        message.java_generate_equals_and_hash = $Boolean(object.java_generate_equals_and_hash);
                    if (object.java_string_check_utf8 != null)
                        message.java_string_check_utf8 = $Boolean(object.java_string_check_utf8);
                    switch (object.optimize_for) {
                    case "SPEED":
                    case 1:
                        message.optimize_for = 1;
                        break;
                    case "CODE_SIZE":
                    case 2:
                        message.optimize_for = 2;
                        break;
                    case "LITE_RUNTIME":
                    case 3:
                        message.optimize_for = 3;
                        break;
                    default:
                    }
                    if (object.go_package != null)
                        message.go_package = $String(object.go_package);
                    if (object.cc_generic_services != null)
                        message.cc_generic_services = $Boolean(object.cc_generic_services);
                    if (object.java_generic_services != null)
                        message.java_generic_services = $Boolean(object.java_generic_services);
                    if (object.py_generic_services != null)
                        message.py_generic_services = $Boolean(object.py_generic_services);
                    if (object.php_generic_services != null)
                        message.php_generic_services = $Boolean(object.php_generic_services);
                    if (object.deprecated != null)
                        message.deprecated = $Boolean(object.deprecated);
                    if (object.cc_enable_arenas != null)
                        message.cc_enable_arenas = $Boolean(object.cc_enable_arenas);
                    if (object.objc_class_prefix != null)
                        message.objc_class_prefix = $String(object.objc_class_prefix);
                    if (object.csharp_namespace != null)
                        message.csharp_namespace = $String(object.csharp_namespace);
                    if (object.swift_prefix != null)
                        message.swift_prefix = $String(object.swift_prefix);
                    if (object.php_class_prefix != null)
                        message.php_class_prefix = $String(object.php_class_prefix);
                    if (object.php_namespace != null)
                        message.php_namespace = $String(object.php_namespace);
                    if (object.php_metadata_namespace != null)
                        message.php_metadata_namespace = $String(object.php_metadata_namespace);
                    if (object.ruby_package != null)
                        message.ruby_package = $String(object.ruby_package);
                    if (object.additional_includes) {
                        if (!$Array.isArray(object.additional_includes))
                            throw $TypeError(".google.protobuf.FileOptions.additional_includes: array expected");
                        message.additional_includes = $Array(object.additional_includes.length);
                        for (var i = 0; i < object.additional_includes.length; ++i)
                            message.additional_includes[i] = $String(object.additional_includes[i]);
                    }
                    if (object.uninterpreted_option) {
                        if (!$Array.isArray(object.uninterpreted_option))
                            throw $TypeError(".google.protobuf.FileOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = $Array(object.uninterpreted_option.length);
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (!$util.isObject(object.uninterpreted_option[i]))
                                throw $TypeError(".google.protobuf.FileOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i], _depth + 1);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.FileOptions} message FileOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileOptions.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.additional_includes = [];
                        object.uninterpreted_option = [];
                    }
                    if (options.defaults) {
                        object.java_package = "";
                        object.java_outer_classname = "";
                        object.optimize_for = options.enums === $String ? "SPEED" : 1;
                        object.java_multiple_files = false;
                        object.go_package = "";
                        object.cc_generic_services = false;
                        object.java_generic_services = false;
                        object.py_generic_services = false;
                        object.java_generate_equals_and_hash = false;
                        object.deprecated = false;
                        object.java_string_check_utf8 = false;
                        object.cc_enable_arenas = true;
                        object.objc_class_prefix = "";
                        object.csharp_namespace = "";
                        object.swift_prefix = "";
                        object.php_class_prefix = "";
                        object.php_namespace = "";
                        object.php_generic_services = false;
                        object.php_metadata_namespace = "";
                        object.ruby_package = "";
                    }
                    if (message.java_package != null && $Object.hasOwnProperty.call(message, "java_package"))
                        object.java_package = message.java_package;
                    if (message.java_outer_classname != null && $Object.hasOwnProperty.call(message, "java_outer_classname"))
                        object.java_outer_classname = message.java_outer_classname;
                    if (message.optimize_for != null && $Object.hasOwnProperty.call(message, "optimize_for"))
                        object.optimize_for = options.enums === $String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimize_for] === $undefined ? message.optimize_for : $root.google.protobuf.FileOptions.OptimizeMode[message.optimize_for] : message.optimize_for;
                    if (message.java_multiple_files != null && $Object.hasOwnProperty.call(message, "java_multiple_files"))
                        object.java_multiple_files = message.java_multiple_files;
                    if (message.go_package != null && $Object.hasOwnProperty.call(message, "go_package"))
                        object.go_package = message.go_package;
                    if (message.cc_generic_services != null && $Object.hasOwnProperty.call(message, "cc_generic_services"))
                        object.cc_generic_services = message.cc_generic_services;
                    if (message.java_generic_services != null && $Object.hasOwnProperty.call(message, "java_generic_services"))
                        object.java_generic_services = message.java_generic_services;
                    if (message.py_generic_services != null && $Object.hasOwnProperty.call(message, "py_generic_services"))
                        object.py_generic_services = message.py_generic_services;
                    if (message.java_generate_equals_and_hash != null && $Object.hasOwnProperty.call(message, "java_generate_equals_and_hash"))
                        object.java_generate_equals_and_hash = message.java_generate_equals_and_hash;
                    if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.java_string_check_utf8 != null && $Object.hasOwnProperty.call(message, "java_string_check_utf8"))
                        object.java_string_check_utf8 = message.java_string_check_utf8;
                    if (message.cc_enable_arenas != null && $Object.hasOwnProperty.call(message, "cc_enable_arenas"))
                        object.cc_enable_arenas = message.cc_enable_arenas;
                    if (message.objc_class_prefix != null && $Object.hasOwnProperty.call(message, "objc_class_prefix"))
                        object.objc_class_prefix = message.objc_class_prefix;
                    if (message.csharp_namespace != null && $Object.hasOwnProperty.call(message, "csharp_namespace"))
                        object.csharp_namespace = message.csharp_namespace;
                    if (message.swift_prefix != null && $Object.hasOwnProperty.call(message, "swift_prefix"))
                        object.swift_prefix = message.swift_prefix;
                    if (message.php_class_prefix != null && $Object.hasOwnProperty.call(message, "php_class_prefix"))
                        object.php_class_prefix = message.php_class_prefix;
                    if (message.php_namespace != null && $Object.hasOwnProperty.call(message, "php_namespace"))
                        object.php_namespace = message.php_namespace;
                    if (message.php_generic_services != null && $Object.hasOwnProperty.call(message, "php_generic_services"))
                        object.php_generic_services = message.php_generic_services;
                    if (message.php_metadata_namespace != null && $Object.hasOwnProperty.call(message, "php_metadata_namespace"))
                        object.php_metadata_namespace = message.php_metadata_namespace;
                    if (message.ruby_package != null && $Object.hasOwnProperty.call(message, "ruby_package"))
                        object.ruby_package = message.ruby_package;
                    if (message.additional_includes && message.additional_includes.length) {
                        object.additional_includes = $Array(message.additional_includes.length);
                        for (var j = 0; j < message.additional_includes.length; ++j)
                            object.additional_includes[j] = message.additional_includes[j];
                    }
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = $Array(message.uninterpreted_option.length);
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options, _depth + 1);
                    }
                    return object;
                };
    
                /**
                 * Converts this FileOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileOptions.prototype.toJSON = function() {
                    return FileOptions.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the type url for FileOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                FileOptions.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.FileOptions";
                };
    
                /**
                 * OptimizeMode enum.
                 * @name google.protobuf.FileOptions.OptimizeMode
                 * @enum {number}
                 * @property {number} SPEED=1 SPEED value
                 * @property {number} CODE_SIZE=2 CODE_SIZE value
                 * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
                 */
                FileOptions.OptimizeMode = (function() {
                    var valuesById = $Object.create(null), values = $Object.create(valuesById);
                    values[valuesById[1] = "SPEED"] = 1;
                    values[valuesById[2] = "CODE_SIZE"] = 2;
                    values[valuesById[3] = "LITE_RUNTIME"] = 3;
                    return values;
                })();
    
                return FileOptions;
            })();
    
            protobuf.MessageOptions = (function() {
    
                /**
                 * Properties of a MessageOptions.
                 * @typedef {Object} google.protobuf.MessageOptions.$Properties
                 * @property {boolean|null} [message_set_wire_format] MessageOptions message_set_wire_format
                 * @property {boolean|null} [no_standard_descriptor_accessor] MessageOptions no_standard_descriptor_accessor
                 * @property {boolean|null} [deprecated] MessageOptions deprecated
                 * @property {boolean|null} [map_entry] MessageOptions map_entry
                 * @property {Array.<google.protobuf.UninterpretedOption.$Properties>|null} [uninterpreted_option] MessageOptions uninterpreted_option
                 * @property {number|null} [".msgpool_soft_limit"] MessageOptions .msgpool_soft_limit
                 * @property {number|null} [".msgpool_hard_limit"] MessageOptions .msgpool_hard_limit
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
    
                /**
                 * Properties of a MessageOptions.
                 * @memberof google.protobuf
                 * @interface IMessageOptions
                 * @augments google.protobuf.MessageOptions.$Properties
                 * @deprecated Use google.protobuf.MessageOptions.$Properties instead.
                 */
    
                /**
                 * Shape of a MessageOptions.
                 * @typedef {google.protobuf.MessageOptions.$Properties} google.protobuf.MessageOptions.$Shape
                 */
    
                /**
                 * Constructs a new MessageOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MessageOptions.
                 * @constructor
                 * @param {google.protobuf.MessageOptions.$Properties=} [properties] Properties to set
                 * @property {number} ".msgpool_soft_limit" MessageOptions .msgpool_soft_limit
                 * @property {number} ".msgpool_hard_limit" MessageOptions .msgpool_hard_limit
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var MessageOptions = function (properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };
    
                /**
                 * MessageOptions message_set_wire_format.
                 * @member {boolean} message_set_wire_format
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.message_set_wire_format = false;
    
                /**
                 * MessageOptions no_standard_descriptor_accessor.
                 * @member {boolean} no_standard_descriptor_accessor
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.no_standard_descriptor_accessor = false;
    
                /**
                 * MessageOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.deprecated = false;
    
                /**
                 * MessageOptions map_entry.
                 * @member {boolean} map_entry
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.map_entry = false;
    
                /**
                 * MessageOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.UninterpretedOption.$Properties>} uninterpreted_option
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                MessageOptions.prototype[".msgpool_soft_limit"] = 32;
                MessageOptions.prototype[".msgpool_hard_limit"] = 384;
    
                /**
                 * Creates a new MessageOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.MessageOptions.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.MessageOptions} MessageOptions instance
                 * @type {{
                 *   (properties: google.protobuf.MessageOptions.$Shape): google.protobuf.MessageOptions & google.protobuf.MessageOptions.$Shape;
                 *   (properties?: google.protobuf.MessageOptions.$Properties): google.protobuf.MessageOptions;
                 * }}
                 */
                MessageOptions.create = function(properties) {
                    return new MessageOptions(properties);
                };
    
                /**
                 * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.MessageOptions.$Properties} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.message_set_wire_format != null && $Object.hasOwnProperty.call(message, "message_set_wire_format"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.message_set_wire_format);
                    if (message.no_standard_descriptor_accessor != null && $Object.hasOwnProperty.call(message, "no_standard_descriptor_accessor"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.no_standard_descriptor_accessor);
                    if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.map_entry != null && $Object.hasOwnProperty.call(message, "map_entry"))
                        writer.uint32(/* id 7, wireType 0 =*/56).bool(message.map_entry);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork(), _depth + 1).ldelim();
                    if (message[".msgpool_soft_limit"] != null && $Object.hasOwnProperty.call(message, ".msgpool_soft_limit"))
                        writer.uint32(/* id 60000, wireType 0 =*/480000).int32(message[".msgpool_soft_limit"]);
                    if (message[".msgpool_hard_limit"] != null && $Object.hasOwnProperty.call(message, ".msgpool_hard_limit"))
                        writer.uint32(/* id 60001, wireType 0 =*/480008).int32(message[".msgpool_hard_limit"]);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.MessageOptions.$Properties} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };
    
                /**
                 * Decodes a MessageOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MessageOptions & google.protobuf.MessageOptions.$Shape} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decode = function (reader, length, _end, _depth, _target) {
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
                    message = _target || new $root.google.protobuf.MessageOptions();
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
                                message.message_set_wire_format = reader.bool();
                                continue;
                            }
                        case 2: {
                                if (wireType !== 0)
                                    break;
                                message.no_standard_descriptor_accessor = reader.bool();
                                continue;
                            }
                        case 3: {
                                if (wireType !== 0)
                                    break;
                                message.deprecated = reader.bool();
                                continue;
                            }
                        case 7: {
                                if (wireType !== 0)
                                    break;
                                message.map_entry = reader.bool();
                                continue;
                            }
                        case 999: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                    message.uninterpreted_option = [];
                                message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.size(), $undefined, _depth + 1));
                                continue;
                            }
                        case 60000: {
                                if (wireType !== 0)
                                    break;
                                message[".msgpool_soft_limit"] = reader.int32();
                                continue;
                            }
                        case 60001: {
                                if (wireType !== 0)
                                    break;
                                message[".msgpool_hard_limit"] = reader.int32();
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
                 * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MessageOptions & google.protobuf.MessageOptions.$Shape} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.size());
                };
    
                /**
                 * Verifies a MessageOptions message.
                 * @function verify
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MessageOptions.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.message_set_wire_format != null && $Object.hasOwnProperty.call(message, "message_set_wire_format"))
                        if (typeof message.message_set_wire_format !== "boolean")
                            return "message_set_wire_format: boolean expected";
                    if (message.no_standard_descriptor_accessor != null && $Object.hasOwnProperty.call(message, "no_standard_descriptor_accessor"))
                        if (typeof message.no_standard_descriptor_accessor !== "boolean")
                            return "no_standard_descriptor_accessor: boolean expected";
                    if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.map_entry != null && $Object.hasOwnProperty.call(message, "map_entry"))
                        if (typeof message.map_entry !== "boolean")
                            return "map_entry: boolean expected";
                    if (message.uninterpreted_option != null && $Object.hasOwnProperty.call(message, "uninterpreted_option")) {
                        if (!$Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i], _depth + 1);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    if (message[".msgpool_soft_limit"] != null && $Object.hasOwnProperty.call(message, ".msgpool_soft_limit"))
                        if (!$util.isInteger(message[".msgpool_soft_limit"]))
                            return ".msgpool_soft_limit: integer expected";
                    if (message[".msgpool_hard_limit"] != null && $Object.hasOwnProperty.call(message, ".msgpool_hard_limit"))
                        if (!$util.isInteger(message[".msgpool_hard_limit"]))
                            return ".msgpool_hard_limit: integer expected";
                    return null;
                };
    
                /**
                 * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 */
                MessageOptions.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.MessageOptions)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.MessageOptions: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.MessageOptions();
                    if (object.message_set_wire_format != null)
                        message.message_set_wire_format = $Boolean(object.message_set_wire_format);
                    if (object.no_standard_descriptor_accessor != null)
                        message.no_standard_descriptor_accessor = $Boolean(object.no_standard_descriptor_accessor);
                    if (object.deprecated != null)
                        message.deprecated = $Boolean(object.deprecated);
                    if (object.map_entry != null)
                        message.map_entry = $Boolean(object.map_entry);
                    if (object.uninterpreted_option) {
                        if (!$Array.isArray(object.uninterpreted_option))
                            throw $TypeError(".google.protobuf.MessageOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = $Array(object.uninterpreted_option.length);
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (!$util.isObject(object.uninterpreted_option[i]))
                                throw $TypeError(".google.protobuf.MessageOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i], _depth + 1);
                        }
                    }
                    if (object[".msgpool_soft_limit"] != null)
                        message[".msgpool_soft_limit"] = object[".msgpool_soft_limit"] | 0;
                    if (object[".msgpool_hard_limit"] != null)
                        message[".msgpool_hard_limit"] = object[".msgpool_hard_limit"] | 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.MessageOptions} message MessageOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageOptions.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.message_set_wire_format = false;
                        object.no_standard_descriptor_accessor = false;
                        object.deprecated = false;
                        object.map_entry = false;
                        object[".msgpool_soft_limit"] = 32;
                        object[".msgpool_hard_limit"] = 384;
                    }
                    if (message.message_set_wire_format != null && $Object.hasOwnProperty.call(message, "message_set_wire_format"))
                        object.message_set_wire_format = message.message_set_wire_format;
                    if (message.no_standard_descriptor_accessor != null && $Object.hasOwnProperty.call(message, "no_standard_descriptor_accessor"))
                        object.no_standard_descriptor_accessor = message.no_standard_descriptor_accessor;
                    if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.map_entry != null && $Object.hasOwnProperty.call(message, "map_entry"))
                        object.map_entry = message.map_entry;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = $Array(message.uninterpreted_option.length);
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options, _depth + 1);
                    }
                    if (message[".msgpool_soft_limit"] != null && $Object.hasOwnProperty.call(message, ".msgpool_soft_limit"))
                        object[".msgpool_soft_limit"] = message[".msgpool_soft_limit"];
                    if (message[".msgpool_hard_limit"] != null && $Object.hasOwnProperty.call(message, ".msgpool_hard_limit"))
                        object[".msgpool_hard_limit"] = message[".msgpool_hard_limit"];
                    return object;
                };
    
                /**
                 * Converts this MessageOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MessageOptions.prototype.toJSON = function() {
                    return MessageOptions.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the type url for MessageOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                MessageOptions.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.MessageOptions";
                };
    
                return MessageOptions;
            })();
    
            protobuf.FieldOptions = (function() {
    
                /**
                 * Properties of a FieldOptions.
                 * @typedef {Object} google.protobuf.FieldOptions.$Properties
                 * @property {google.protobuf.FieldOptions.CType|null} [ctype] FieldOptions ctype
                 * @property {boolean|null} [packed] FieldOptions packed
                 * @property {google.protobuf.FieldOptions.JSType|null} [jstype] FieldOptions jstype
                 * @property {boolean|null} [lazy] FieldOptions lazy
                 * @property {boolean|null} [unverified_lazy] FieldOptions unverified_lazy
                 * @property {boolean|null} [deprecated] FieldOptions deprecated
                 * @property {boolean|null} [weak] FieldOptions weak
                 * @property {string|null} [boxed_type] FieldOptions boxed_type
                 * @property {string|null} [synthetic_default] FieldOptions synthetic_default
                 * @property {Array.<google.protobuf.UninterpretedOption.$Properties>|null} [uninterpreted_option] FieldOptions uninterpreted_option
                 * @property {boolean|null} [".key_field"] FieldOptions .key_field
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
    
                /**
                 * Properties of a FieldOptions.
                 * @memberof google.protobuf
                 * @interface IFieldOptions
                 * @augments google.protobuf.FieldOptions.$Properties
                 * @deprecated Use google.protobuf.FieldOptions.$Properties instead.
                 */
    
                /**
                 * Shape of a FieldOptions.
                 * @typedef {google.protobuf.FieldOptions.$Properties} google.protobuf.FieldOptions.$Shape
                 */
    
                /**
                 * Constructs a new FieldOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldOptions.
                 * @constructor
                 * @param {google.protobuf.FieldOptions.$Properties=} [properties] Properties to set
                 * @property {boolean} ".key_field" FieldOptions .key_field
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var FieldOptions = function (properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };
    
                /**
                 * FieldOptions ctype.
                 * @member {google.protobuf.FieldOptions.CType} ctype
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.ctype = 0;
    
                /**
                 * FieldOptions packed.
                 * @member {boolean} packed
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.packed = false;
    
                /**
                 * FieldOptions jstype.
                 * @member {google.protobuf.FieldOptions.JSType} jstype
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.jstype = 0;
    
                /**
                 * FieldOptions lazy.
                 * @member {boolean} lazy
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.lazy = false;
    
                /**
                 * FieldOptions unverified_lazy.
                 * @member {boolean} unverified_lazy
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.unverified_lazy = false;
    
                /**
                 * FieldOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.deprecated = false;
    
                /**
                 * FieldOptions weak.
                 * @member {boolean} weak
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.weak = false;
    
                /**
                 * FieldOptions boxed_type.
                 * @member {string} boxed_type
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.boxed_type = "";
    
                /**
                 * FieldOptions synthetic_default.
                 * @member {string} synthetic_default
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.synthetic_default = "";
    
                /**
                 * FieldOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.UninterpretedOption.$Properties>} uninterpreted_option
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                FieldOptions.prototype[".key_field"] = false;
    
                /**
                 * Creates a new FieldOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.FieldOptions.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.FieldOptions} FieldOptions instance
                 * @type {{
                 *   (properties: google.protobuf.FieldOptions.$Shape): google.protobuf.FieldOptions & google.protobuf.FieldOptions.$Shape;
                 *   (properties?: google.protobuf.FieldOptions.$Properties): google.protobuf.FieldOptions;
                 * }}
                 */
                FieldOptions.create = function(properties) {
                    return new FieldOptions(properties);
                };
    
                /**
                 * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.FieldOptions.$Properties} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.ctype != null && $Object.hasOwnProperty.call(message, "ctype"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                    if (message.packed != null && $Object.hasOwnProperty.call(message, "packed"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                    if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.lazy != null && $Object.hasOwnProperty.call(message, "lazy"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                    if (message.jstype != null && $Object.hasOwnProperty.call(message, "jstype"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.jstype);
                    if (message.weak != null && $Object.hasOwnProperty.call(message, "weak"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                    if (message.unverified_lazy != null && $Object.hasOwnProperty.call(message, "unverified_lazy"))
                        writer.uint32(/* id 15, wireType 0 =*/120).bool(message.unverified_lazy);
                    if (message.boxed_type != null && $Object.hasOwnProperty.call(message, "boxed_type"))
                        writer.uint32(/* id 20, wireType 2 =*/162).string(message.boxed_type);
                    if (message.synthetic_default != null && $Object.hasOwnProperty.call(message, "synthetic_default"))
                        writer.uint32(/* id 21, wireType 2 =*/170).string(message.synthetic_default);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork(), _depth + 1).ldelim();
                    if (message[".key_field"] != null && $Object.hasOwnProperty.call(message, ".key_field"))
                        writer.uint32(/* id 60000, wireType 0 =*/480000).bool(message[".key_field"]);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.FieldOptions.$Properties} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };
    
                /**
                 * Decodes a FieldOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldOptions & google.protobuf.FieldOptions.$Shape} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decode = function (reader, length, _end, _depth, _target) {
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
                    message = _target || new $root.google.protobuf.FieldOptions();
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
                                if ($root.google.protobuf.FieldOptions.CType[value] !== $undefined)
                                    message.ctype = value;
                                else if (!reader.discardUnknown) {
                                    $util.makeProp(message, "$unknowns", false);
                                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                                }
                                continue;
                            }
                        case 2: {
                                if (wireType !== 0)
                                    break;
                                message.packed = reader.bool();
                                continue;
                            }
                        case 6: {
                                if (wireType !== 0)
                                    break;
                                value = reader.int32();
                                if ($root.google.protobuf.FieldOptions.JSType[value] !== $undefined)
                                    message.jstype = value;
                                else if (!reader.discardUnknown) {
                                    $util.makeProp(message, "$unknowns", false);
                                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                                }
                                continue;
                            }
                        case 5: {
                                if (wireType !== 0)
                                    break;
                                message.lazy = reader.bool();
                                continue;
                            }
                        case 15: {
                                if (wireType !== 0)
                                    break;
                                message.unverified_lazy = reader.bool();
                                continue;
                            }
                        case 3: {
                                if (wireType !== 0)
                                    break;
                                message.deprecated = reader.bool();
                                continue;
                            }
                        case 10: {
                                if (wireType !== 0)
                                    break;
                                message.weak = reader.bool();
                                continue;
                            }
                        case 20: {
                                if (wireType !== 2)
                                    break;
                                message.boxed_type = reader.string();
                                continue;
                            }
                        case 21: {
                                if (wireType !== 2)
                                    break;
                                message.synthetic_default = reader.string();
                                continue;
                            }
                        case 999: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                    message.uninterpreted_option = [];
                                message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.size(), $undefined, _depth + 1));
                                continue;
                            }
                        case 60000: {
                                if (wireType !== 0)
                                    break;
                                message[".key_field"] = reader.bool();
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
                 * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldOptions & google.protobuf.FieldOptions.$Shape} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.size());
                };
    
                /**
                 * Verifies a FieldOptions message.
                 * @function verify
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldOptions.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.ctype != null && $Object.hasOwnProperty.call(message, "ctype"))
                        switch (message.ctype) {
                        default:
                            return "ctype: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.packed != null && $Object.hasOwnProperty.call(message, "packed"))
                        if (typeof message.packed !== "boolean")
                            return "packed: boolean expected";
                    if (message.jstype != null && $Object.hasOwnProperty.call(message, "jstype"))
                        switch (message.jstype) {
                        default:
                            return "jstype: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.lazy != null && $Object.hasOwnProperty.call(message, "lazy"))
                        if (typeof message.lazy !== "boolean")
                            return "lazy: boolean expected";
                    if (message.unverified_lazy != null && $Object.hasOwnProperty.call(message, "unverified_lazy"))
                        if (typeof message.unverified_lazy !== "boolean")
                            return "unverified_lazy: boolean expected";
                    if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.weak != null && $Object.hasOwnProperty.call(message, "weak"))
                        if (typeof message.weak !== "boolean")
                            return "weak: boolean expected";
                    if (message.boxed_type != null && $Object.hasOwnProperty.call(message, "boxed_type"))
                        if (!$util.isString(message.boxed_type))
                            return "boxed_type: string expected";
                    if (message.synthetic_default != null && $Object.hasOwnProperty.call(message, "synthetic_default"))
                        if (!$util.isString(message.synthetic_default))
                            return "synthetic_default: string expected";
                    if (message.uninterpreted_option != null && $Object.hasOwnProperty.call(message, "uninterpreted_option")) {
                        if (!$Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i], _depth + 1);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    if (message[".key_field"] != null && $Object.hasOwnProperty.call(message, ".key_field"))
                        if (typeof message[".key_field"] !== "boolean")
                            return ".key_field: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 */
                FieldOptions.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.FieldOptions)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.FieldOptions: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.FieldOptions();
                    switch (object.ctype) {
                    case "STRING":
                    case 0:
                        message.ctype = 0;
                        break;
                    case "CORD":
                    case 1:
                        message.ctype = 1;
                        break;
                    case "STRING_PIECE":
                    case 2:
                        message.ctype = 2;
                        break;
                    default:
                    }
                    if (object.packed != null)
                        message.packed = $Boolean(object.packed);
                    switch (object.jstype) {
                    case "JS_NORMAL":
                    case 0:
                        message.jstype = 0;
                        break;
                    case "JS_STRING":
                    case 1:
                        message.jstype = 1;
                        break;
                    case "JS_NUMBER":
                    case 2:
                        message.jstype = 2;
                        break;
                    default:
                    }
                    if (object.lazy != null)
                        message.lazy = $Boolean(object.lazy);
                    if (object.unverified_lazy != null)
                        message.unverified_lazy = $Boolean(object.unverified_lazy);
                    if (object.deprecated != null)
                        message.deprecated = $Boolean(object.deprecated);
                    if (object.weak != null)
                        message.weak = $Boolean(object.weak);
                    if (object.boxed_type != null)
                        message.boxed_type = $String(object.boxed_type);
                    if (object.synthetic_default != null)
                        message.synthetic_default = $String(object.synthetic_default);
                    if (object.uninterpreted_option) {
                        if (!$Array.isArray(object.uninterpreted_option))
                            throw $TypeError(".google.protobuf.FieldOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = $Array(object.uninterpreted_option.length);
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (!$util.isObject(object.uninterpreted_option[i]))
                                throw $TypeError(".google.protobuf.FieldOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i], _depth + 1);
                        }
                    }
                    if (object[".key_field"] != null)
                        message[".key_field"] = $Boolean(object[".key_field"]);
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.FieldOptions} message FieldOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldOptions.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.ctype = options.enums === $String ? "STRING" : 0;
                        object.packed = false;
                        object.deprecated = false;
                        object.lazy = false;
                        object.jstype = options.enums === $String ? "JS_NORMAL" : 0;
                        object.weak = false;
                        object.unverified_lazy = false;
                        object.boxed_type = "";
                        object.synthetic_default = "";
                        object[".key_field"] = false;
                    }
                    if (message.ctype != null && $Object.hasOwnProperty.call(message, "ctype"))
                        object.ctype = options.enums === $String ? $root.google.protobuf.FieldOptions.CType[message.ctype] === $undefined ? message.ctype : $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                    if (message.packed != null && $Object.hasOwnProperty.call(message, "packed"))
                        object.packed = message.packed;
                    if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.lazy != null && $Object.hasOwnProperty.call(message, "lazy"))
                        object.lazy = message.lazy;
                    if (message.jstype != null && $Object.hasOwnProperty.call(message, "jstype"))
                        object.jstype = options.enums === $String ? $root.google.protobuf.FieldOptions.JSType[message.jstype] === $undefined ? message.jstype : $root.google.protobuf.FieldOptions.JSType[message.jstype] : message.jstype;
                    if (message.weak != null && $Object.hasOwnProperty.call(message, "weak"))
                        object.weak = message.weak;
                    if (message.unverified_lazy != null && $Object.hasOwnProperty.call(message, "unverified_lazy"))
                        object.unverified_lazy = message.unverified_lazy;
                    if (message.boxed_type != null && $Object.hasOwnProperty.call(message, "boxed_type"))
                        object.boxed_type = message.boxed_type;
                    if (message.synthetic_default != null && $Object.hasOwnProperty.call(message, "synthetic_default"))
                        object.synthetic_default = message.synthetic_default;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = $Array(message.uninterpreted_option.length);
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options, _depth + 1);
                    }
                    if (message[".key_field"] != null && $Object.hasOwnProperty.call(message, ".key_field"))
                        object[".key_field"] = message[".key_field"];
                    return object;
                };
    
                /**
                 * Converts this FieldOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldOptions.prototype.toJSON = function() {
                    return FieldOptions.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the type url for FieldOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                FieldOptions.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.FieldOptions";
                };
    
                /**
                 * CType enum.
                 * @name google.protobuf.FieldOptions.CType
                 * @enum {number}
                 * @property {number} STRING=0 STRING value
                 * @property {number} CORD=1 CORD value
                 * @property {number} STRING_PIECE=2 STRING_PIECE value
                 */
                FieldOptions.CType = (function() {
                    var valuesById = $Object.create(null), values = $Object.create(valuesById);
                    values[valuesById[0] = "STRING"] = 0;
                    values[valuesById[1] = "CORD"] = 1;
                    values[valuesById[2] = "STRING_PIECE"] = 2;
                    return values;
                })();
    
                /**
                 * JSType enum.
                 * @name google.protobuf.FieldOptions.JSType
                 * @enum {number}
                 * @property {number} JS_NORMAL=0 JS_NORMAL value
                 * @property {number} JS_STRING=1 JS_STRING value
                 * @property {number} JS_NUMBER=2 JS_NUMBER value
                 */
                FieldOptions.JSType = (function() {
                    var valuesById = $Object.create(null), values = $Object.create(valuesById);
                    values[valuesById[0] = "JS_NORMAL"] = 0;
                    values[valuesById[1] = "JS_STRING"] = 1;
                    values[valuesById[2] = "JS_NUMBER"] = 2;
                    return values;
                })();
    
                return FieldOptions;
            })();
    
            protobuf.OneofOptions = (function() {
    
                /**
                 * Properties of a OneofOptions.
                 * @typedef {Object} google.protobuf.OneofOptions.$Properties
                 * @property {Array.<google.protobuf.UninterpretedOption.$Properties>|null} [uninterpreted_option] OneofOptions uninterpreted_option
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
    
                /**
                 * Properties of a OneofOptions.
                 * @memberof google.protobuf
                 * @interface IOneofOptions
                 * @augments google.protobuf.OneofOptions.$Properties
                 * @deprecated Use google.protobuf.OneofOptions.$Properties instead.
                 */
    
                /**
                 * Shape of a OneofOptions.
                 * @typedef {google.protobuf.OneofOptions.$Properties} google.protobuf.OneofOptions.$Shape
                 */
    
                /**
                 * Constructs a new OneofOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a OneofOptions.
                 * @constructor
                 * @param {google.protobuf.OneofOptions.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var OneofOptions = function (properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };
    
                /**
                 * OneofOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.UninterpretedOption.$Properties>} uninterpreted_option
                 * @memberof google.protobuf.OneofOptions
                 * @instance
                 */
                OneofOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new OneofOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.OneofOptions.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.OneofOptions} OneofOptions instance
                 * @type {{
                 *   (properties: google.protobuf.OneofOptions.$Shape): google.protobuf.OneofOptions & google.protobuf.OneofOptions.$Shape;
                 *   (properties?: google.protobuf.OneofOptions.$Properties): google.protobuf.OneofOptions;
                 * }}
                 */
                OneofOptions.create = function(properties) {
                    return new OneofOptions(properties);
                };
    
                /**
                 * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.OneofOptions.$Properties} message OneofOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofOptions.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork(), _depth + 1).ldelim();
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.OneofOptions.$Properties} message OneofOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofOptions.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };
    
                /**
                 * Decodes a OneofOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.OneofOptions & google.protobuf.OneofOptions.$Shape} OneofOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofOptions.decode = function (reader, length, _end, _depth, _target) {
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
                    message = _target || new $root.google.protobuf.OneofOptions();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 999: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                    message.uninterpreted_option = [];
                                message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.size(), $undefined, _depth + 1));
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
                 * Decodes a OneofOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.OneofOptions & google.protobuf.OneofOptions.$Shape} OneofOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofOptions.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.size());
                };
    
                /**
                 * Verifies a OneofOptions message.
                 * @function verify
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OneofOptions.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.uninterpreted_option != null && $Object.hasOwnProperty.call(message, "uninterpreted_option")) {
                        if (!$Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i], _depth + 1);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a OneofOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 */
                OneofOptions.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.OneofOptions)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.OneofOptions: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.OneofOptions();
                    if (object.uninterpreted_option) {
                        if (!$Array.isArray(object.uninterpreted_option))
                            throw $TypeError(".google.protobuf.OneofOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = $Array(object.uninterpreted_option.length);
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (!$util.isObject(object.uninterpreted_option[i]))
                                throw $TypeError(".google.protobuf.OneofOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i], _depth + 1);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a OneofOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.OneofOptions} message OneofOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OneofOptions.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = $Array(message.uninterpreted_option.length);
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options, _depth + 1);
                    }
                    return object;
                };
    
                /**
                 * Converts this OneofOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.OneofOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OneofOptions.prototype.toJSON = function() {
                    return OneofOptions.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the type url for OneofOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                OneofOptions.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.OneofOptions";
                };
    
                return OneofOptions;
            })();
    
            protobuf.EnumOptions = (function() {
    
                /**
                 * Properties of an EnumOptions.
                 * @typedef {Object} google.protobuf.EnumOptions.$Properties
                 * @property {boolean|null} [allow_alias] EnumOptions allow_alias
                 * @property {boolean|null} [deprecated] EnumOptions deprecated
                 * @property {Array.<google.protobuf.UninterpretedOption.$Properties>|null} [uninterpreted_option] EnumOptions uninterpreted_option
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
    
                /**
                 * Properties of an EnumOptions.
                 * @memberof google.protobuf
                 * @interface IEnumOptions
                 * @augments google.protobuf.EnumOptions.$Properties
                 * @deprecated Use google.protobuf.EnumOptions.$Properties instead.
                 */
    
                /**
                 * Shape of an EnumOptions.
                 * @typedef {google.protobuf.EnumOptions.$Properties} google.protobuf.EnumOptions.$Shape
                 */
    
                /**
                 * Constructs a new EnumOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumOptions.
                 * @constructor
                 * @param {google.protobuf.EnumOptions.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var EnumOptions = function (properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };
    
                /**
                 * EnumOptions allow_alias.
                 * @member {boolean} allow_alias
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.allow_alias = false;
    
                /**
                 * EnumOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.deprecated = false;
    
                /**
                 * EnumOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.UninterpretedOption.$Properties>} uninterpreted_option
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new EnumOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.EnumOptions.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.EnumOptions} EnumOptions instance
                 * @type {{
                 *   (properties: google.protobuf.EnumOptions.$Shape): google.protobuf.EnumOptions & google.protobuf.EnumOptions.$Shape;
                 *   (properties?: google.protobuf.EnumOptions.$Properties): google.protobuf.EnumOptions;
                 * }}
                 */
                EnumOptions.create = function(properties) {
                    return new EnumOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.EnumOptions.$Properties} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.allow_alias != null && $Object.hasOwnProperty.call(message, "allow_alias"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allow_alias);
                    if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork(), _depth + 1).ldelim();
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.EnumOptions.$Properties} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };
    
                /**
                 * Decodes an EnumOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumOptions & google.protobuf.EnumOptions.$Shape} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decode = function (reader, length, _end, _depth, _target) {
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
                    message = _target || new $root.google.protobuf.EnumOptions();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 2: {
                                if (wireType !== 0)
                                    break;
                                message.allow_alias = reader.bool();
                                continue;
                            }
                        case 3: {
                                if (wireType !== 0)
                                    break;
                                message.deprecated = reader.bool();
                                continue;
                            }
                        case 999: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                    message.uninterpreted_option = [];
                                message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.size(), $undefined, _depth + 1));
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
                 * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumOptions & google.protobuf.EnumOptions.$Shape} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.size());
                };
    
                /**
                 * Verifies an EnumOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumOptions.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.allow_alias != null && $Object.hasOwnProperty.call(message, "allow_alias"))
                        if (typeof message.allow_alias !== "boolean")
                            return "allow_alias: boolean expected";
                    if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpreted_option != null && $Object.hasOwnProperty.call(message, "uninterpreted_option")) {
                        if (!$Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i], _depth + 1);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 */
                EnumOptions.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.EnumOptions)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.EnumOptions: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.EnumOptions();
                    if (object.allow_alias != null)
                        message.allow_alias = $Boolean(object.allow_alias);
                    if (object.deprecated != null)
                        message.deprecated = $Boolean(object.deprecated);
                    if (object.uninterpreted_option) {
                        if (!$Array.isArray(object.uninterpreted_option))
                            throw $TypeError(".google.protobuf.EnumOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = $Array(object.uninterpreted_option.length);
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (!$util.isObject(object.uninterpreted_option[i]))
                                throw $TypeError(".google.protobuf.EnumOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i], _depth + 1);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.EnumOptions} message EnumOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumOptions.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.allow_alias = false;
                        object.deprecated = false;
                    }
                    if (message.allow_alias != null && $Object.hasOwnProperty.call(message, "allow_alias"))
                        object.allow_alias = message.allow_alias;
                    if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = $Array(message.uninterpreted_option.length);
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options, _depth + 1);
                    }
                    return object;
                };
    
                /**
                 * Converts this EnumOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumOptions.prototype.toJSON = function() {
                    return EnumOptions.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the type url for EnumOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                EnumOptions.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.EnumOptions";
                };
    
                return EnumOptions;
            })();
    
            protobuf.EnumValueOptions = (function() {
    
                /**
                 * Properties of an EnumValueOptions.
                 * @typedef {Object} google.protobuf.EnumValueOptions.$Properties
                 * @property {boolean|null} [deprecated] EnumValueOptions deprecated
                 * @property {Array.<google.protobuf.UninterpretedOption.$Properties>|null} [uninterpreted_option] EnumValueOptions uninterpreted_option
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
    
                /**
                 * Properties of an EnumValueOptions.
                 * @memberof google.protobuf
                 * @interface IEnumValueOptions
                 * @augments google.protobuf.EnumValueOptions.$Properties
                 * @deprecated Use google.protobuf.EnumValueOptions.$Properties instead.
                 */
    
                /**
                 * Shape of an EnumValueOptions.
                 * @typedef {google.protobuf.EnumValueOptions.$Properties} google.protobuf.EnumValueOptions.$Shape
                 */
    
                /**
                 * Constructs a new EnumValueOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueOptions.
                 * @constructor
                 * @param {google.protobuf.EnumValueOptions.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var EnumValueOptions = function (properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };
    
                /**
                 * EnumValueOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype.deprecated = false;
    
                /**
                 * EnumValueOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.UninterpretedOption.$Properties>} uninterpreted_option
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new EnumValueOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.EnumValueOptions.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
                 * @type {{
                 *   (properties: google.protobuf.EnumValueOptions.$Shape): google.protobuf.EnumValueOptions & google.protobuf.EnumValueOptions.$Shape;
                 *   (properties?: google.protobuf.EnumValueOptions.$Properties): google.protobuf.EnumValueOptions;
                 * }}
                 */
                EnumValueOptions.create = function(properties) {
                    return new EnumValueOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.EnumValueOptions.$Properties} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork(), _depth + 1).ldelim();
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.EnumValueOptions.$Properties} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };
    
                /**
                 * Decodes an EnumValueOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueOptions & google.protobuf.EnumValueOptions.$Shape} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decode = function (reader, length, _end, _depth, _target) {
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
                    message = _target || new $root.google.protobuf.EnumValueOptions();
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
                                message.deprecated = reader.bool();
                                continue;
                            }
                        case 999: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                    message.uninterpreted_option = [];
                                message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.size(), $undefined, _depth + 1));
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
                 * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueOptions & google.protobuf.EnumValueOptions.$Shape} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.size());
                };
    
                /**
                 * Verifies an EnumValueOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueOptions.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpreted_option != null && $Object.hasOwnProperty.call(message, "uninterpreted_option")) {
                        if (!$Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i], _depth + 1);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 */
                EnumValueOptions.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.EnumValueOptions)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.EnumValueOptions: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.EnumValueOptions();
                    if (object.deprecated != null)
                        message.deprecated = $Boolean(object.deprecated);
                    if (object.uninterpreted_option) {
                        if (!$Array.isArray(object.uninterpreted_option))
                            throw $TypeError(".google.protobuf.EnumValueOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = $Array(object.uninterpreted_option.length);
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (!$util.isObject(object.uninterpreted_option[i]))
                                throw $TypeError(".google.protobuf.EnumValueOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i], _depth + 1);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueOptions.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults)
                        object.deprecated = false;
                    if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = $Array(message.uninterpreted_option.length);
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options, _depth + 1);
                    }
                    return object;
                };
    
                /**
                 * Converts this EnumValueOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueOptions.prototype.toJSON = function() {
                    return EnumValueOptions.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the type url for EnumValueOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                EnumValueOptions.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.EnumValueOptions";
                };
    
                return EnumValueOptions;
            })();
    
            protobuf.ServiceOptions = (function() {
    
                /**
                 * Properties of a ServiceOptions.
                 * @typedef {Object} google.protobuf.ServiceOptions.$Properties
                 * @property {boolean|null} [deprecated] ServiceOptions deprecated
                 * @property {Array.<google.protobuf.UninterpretedOption.$Properties>|null} [uninterpreted_option] ServiceOptions uninterpreted_option
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
    
                /**
                 * Properties of a ServiceOptions.
                 * @memberof google.protobuf
                 * @interface IServiceOptions
                 * @augments google.protobuf.ServiceOptions.$Properties
                 * @deprecated Use google.protobuf.ServiceOptions.$Properties instead.
                 */
    
                /**
                 * Shape of a ServiceOptions.
                 * @typedef {google.protobuf.ServiceOptions.$Properties} google.protobuf.ServiceOptions.$Shape
                 */
    
                /**
                 * Constructs a new ServiceOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceOptions.
                 * @constructor
                 * @param {google.protobuf.ServiceOptions.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var ServiceOptions = function (properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };
    
                /**
                 * ServiceOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype.deprecated = false;
    
                /**
                 * ServiceOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.UninterpretedOption.$Properties>} uninterpreted_option
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new ServiceOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.ServiceOptions.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
                 * @type {{
                 *   (properties: google.protobuf.ServiceOptions.$Shape): google.protobuf.ServiceOptions & google.protobuf.ServiceOptions.$Shape;
                 *   (properties?: google.protobuf.ServiceOptions.$Properties): google.protobuf.ServiceOptions;
                 * }}
                 */
                ServiceOptions.create = function(properties) {
                    return new ServiceOptions(properties);
                };
    
                /**
                 * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.ServiceOptions.$Properties} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork(), _depth + 1).ldelim();
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.ServiceOptions.$Properties} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };
    
                /**
                 * Decodes a ServiceOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceOptions & google.protobuf.ServiceOptions.$Shape} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decode = function (reader, length, _end, _depth, _target) {
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
                    message = _target || new $root.google.protobuf.ServiceOptions();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 33: {
                                if (wireType !== 0)
                                    break;
                                message.deprecated = reader.bool();
                                continue;
                            }
                        case 999: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                    message.uninterpreted_option = [];
                                message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.size(), $undefined, _depth + 1));
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
                 * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceOptions & google.protobuf.ServiceOptions.$Shape} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.size());
                };
    
                /**
                 * Verifies a ServiceOptions message.
                 * @function verify
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceOptions.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpreted_option != null && $Object.hasOwnProperty.call(message, "uninterpreted_option")) {
                        if (!$Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i], _depth + 1);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 */
                ServiceOptions.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.ServiceOptions)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.ServiceOptions: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.ServiceOptions();
                    if (object.deprecated != null)
                        message.deprecated = $Boolean(object.deprecated);
                    if (object.uninterpreted_option) {
                        if (!$Array.isArray(object.uninterpreted_option))
                            throw $TypeError(".google.protobuf.ServiceOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = $Array(object.uninterpreted_option.length);
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (!$util.isObject(object.uninterpreted_option[i]))
                                throw $TypeError(".google.protobuf.ServiceOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i], _depth + 1);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.ServiceOptions} message ServiceOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceOptions.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults)
                        object.deprecated = false;
                    if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = $Array(message.uninterpreted_option.length);
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options, _depth + 1);
                    }
                    return object;
                };
    
                /**
                 * Converts this ServiceOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceOptions.prototype.toJSON = function() {
                    return ServiceOptions.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the type url for ServiceOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                ServiceOptions.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.ServiceOptions";
                };
    
                return ServiceOptions;
            })();
    
            protobuf.MethodOptions = (function() {
    
                /**
                 * Properties of a MethodOptions.
                 * @typedef {Object} google.protobuf.MethodOptions.$Properties
                 * @property {boolean|null} [deprecated] MethodOptions deprecated
                 * @property {google.protobuf.MethodOptions.IdempotencyLevel|null} [idempotency_level] MethodOptions idempotency_level
                 * @property {Array.<google.protobuf.UninterpretedOption.$Properties>|null} [uninterpreted_option] MethodOptions uninterpreted_option
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
    
                /**
                 * Properties of a MethodOptions.
                 * @memberof google.protobuf
                 * @interface IMethodOptions
                 * @augments google.protobuf.MethodOptions.$Properties
                 * @deprecated Use google.protobuf.MethodOptions.$Properties instead.
                 */
    
                /**
                 * Shape of a MethodOptions.
                 * @typedef {google.protobuf.MethodOptions.$Properties} google.protobuf.MethodOptions.$Shape
                 */
    
                /**
                 * Constructs a new MethodOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodOptions.
                 * @constructor
                 * @param {google.protobuf.MethodOptions.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var MethodOptions = function (properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };
    
                /**
                 * MethodOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.deprecated = false;
    
                /**
                 * MethodOptions idempotency_level.
                 * @member {google.protobuf.MethodOptions.IdempotencyLevel} idempotency_level
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.idempotency_level = 0;
    
                /**
                 * MethodOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.UninterpretedOption.$Properties>} uninterpreted_option
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new MethodOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.MethodOptions.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.MethodOptions} MethodOptions instance
                 * @type {{
                 *   (properties: google.protobuf.MethodOptions.$Shape): google.protobuf.MethodOptions & google.protobuf.MethodOptions.$Shape;
                 *   (properties?: google.protobuf.MethodOptions.$Properties): google.protobuf.MethodOptions;
                 * }}
                 */
                MethodOptions.create = function(properties) {
                    return new MethodOptions(properties);
                };
    
                /**
                 * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.MethodOptions.$Properties} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                    if (message.idempotency_level != null && $Object.hasOwnProperty.call(message, "idempotency_level"))
                        writer.uint32(/* id 34, wireType 0 =*/272).int32(message.idempotency_level);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork(), _depth + 1).ldelim();
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.MethodOptions.$Properties} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };
    
                /**
                 * Decodes a MethodOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodOptions & google.protobuf.MethodOptions.$Shape} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decode = function (reader, length, _end, _depth, _target) {
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
                    message = _target || new $root.google.protobuf.MethodOptions();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 33: {
                                if (wireType !== 0)
                                    break;
                                message.deprecated = reader.bool();
                                continue;
                            }
                        case 34: {
                                if (wireType !== 0)
                                    break;
                                value = reader.int32();
                                if ($root.google.protobuf.MethodOptions.IdempotencyLevel[value] !== $undefined)
                                    message.idempotency_level = value;
                                else if (!reader.discardUnknown) {
                                    $util.makeProp(message, "$unknowns", false);
                                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                                }
                                continue;
                            }
                        case 999: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                    message.uninterpreted_option = [];
                                message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.size(), $undefined, _depth + 1));
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
                 * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodOptions & google.protobuf.MethodOptions.$Shape} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.size());
                };
    
                /**
                 * Verifies a MethodOptions message.
                 * @function verify
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodOptions.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.idempotency_level != null && $Object.hasOwnProperty.call(message, "idempotency_level"))
                        switch (message.idempotency_level) {
                        default:
                            return "idempotency_level: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.uninterpreted_option != null && $Object.hasOwnProperty.call(message, "uninterpreted_option")) {
                        if (!$Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i], _depth + 1);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 */
                MethodOptions.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.MethodOptions)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.MethodOptions: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.MethodOptions();
                    if (object.deprecated != null)
                        message.deprecated = $Boolean(object.deprecated);
                    switch (object.idempotency_level) {
                    case "IDEMPOTENCY_UNKNOWN":
                    case 0:
                        message.idempotency_level = 0;
                        break;
                    case "NO_SIDE_EFFECTS":
                    case 1:
                        message.idempotency_level = 1;
                        break;
                    case "IDEMPOTENT":
                    case 2:
                        message.idempotency_level = 2;
                        break;
                    default:
                    }
                    if (object.uninterpreted_option) {
                        if (!$Array.isArray(object.uninterpreted_option))
                            throw $TypeError(".google.protobuf.MethodOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = $Array(object.uninterpreted_option.length);
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (!$util.isObject(object.uninterpreted_option[i]))
                                throw $TypeError(".google.protobuf.MethodOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i], _depth + 1);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.MethodOptions} message MethodOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodOptions.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.deprecated = false;
                        object.idempotency_level = options.enums === $String ? "IDEMPOTENCY_UNKNOWN" : 0;
                    }
                    if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.idempotency_level != null && $Object.hasOwnProperty.call(message, "idempotency_level"))
                        object.idempotency_level = options.enums === $String ? $root.google.protobuf.MethodOptions.IdempotencyLevel[message.idempotency_level] === $undefined ? message.idempotency_level : $root.google.protobuf.MethodOptions.IdempotencyLevel[message.idempotency_level] : message.idempotency_level;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = $Array(message.uninterpreted_option.length);
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options, _depth + 1);
                    }
                    return object;
                };
    
                /**
                 * Converts this MethodOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodOptions.prototype.toJSON = function() {
                    return MethodOptions.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the type url for MethodOptions
                 * @function getTypeUrl
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                MethodOptions.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.MethodOptions";
                };
    
                /**
                 * IdempotencyLevel enum.
                 * @name google.protobuf.MethodOptions.IdempotencyLevel
                 * @enum {number}
                 * @property {number} IDEMPOTENCY_UNKNOWN=0 IDEMPOTENCY_UNKNOWN value
                 * @property {number} NO_SIDE_EFFECTS=1 NO_SIDE_EFFECTS value
                 * @property {number} IDEMPOTENT=2 IDEMPOTENT value
                 */
                MethodOptions.IdempotencyLevel = (function() {
                    var valuesById = $Object.create(null), values = $Object.create(valuesById);
                    values[valuesById[0] = "IDEMPOTENCY_UNKNOWN"] = 0;
                    values[valuesById[1] = "NO_SIDE_EFFECTS"] = 1;
                    values[valuesById[2] = "IDEMPOTENT"] = 2;
                    return values;
                })();
    
                return MethodOptions;
            })();
    
            protobuf.UninterpretedOption = (function() {
    
                /**
                 * Properties of an UninterpretedOption.
                 * @typedef {Object} google.protobuf.UninterpretedOption.$Properties
                 * @property {Array.<google.protobuf.UninterpretedOption.NamePart.$Properties>|null} [name] UninterpretedOption name
                 * @property {string|null} [identifier_value] UninterpretedOption identifier_value
                 * @property {number|Long|null} [positive_int_value] UninterpretedOption positive_int_value
                 * @property {number|Long|null} [negative_int_value] UninterpretedOption negative_int_value
                 * @property {number|null} [double_value] UninterpretedOption double_value
                 * @property {Uint8Array|null} [string_value] UninterpretedOption string_value
                 * @property {string|null} [aggregate_value] UninterpretedOption aggregate_value
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
    
                /**
                 * Properties of an UninterpretedOption.
                 * @memberof google.protobuf
                 * @interface IUninterpretedOption
                 * @augments google.protobuf.UninterpretedOption.$Properties
                 * @deprecated Use google.protobuf.UninterpretedOption.$Properties instead.
                 */
    
                /**
                 * Shape of an UninterpretedOption.
                 * @typedef {google.protobuf.UninterpretedOption.$Properties} google.protobuf.UninterpretedOption.$Shape
                 */
    
                /**
                 * Constructs a new UninterpretedOption.
                 * @memberof google.protobuf
                 * @classdesc Represents an UninterpretedOption.
                 * @constructor
                 * @param {google.protobuf.UninterpretedOption.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var UninterpretedOption = function (properties) {
                    this.name = [];
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };
    
                /**
                 * UninterpretedOption name.
                 * @member {Array.<google.protobuf.UninterpretedOption.NamePart.$Properties>} name
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.name = $util.emptyArray;
    
                /**
                 * UninterpretedOption identifier_value.
                 * @member {string} identifier_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.identifier_value = "";
    
                /**
                 * UninterpretedOption positive_int_value.
                 * @member {number|Long} positive_int_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.positive_int_value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * UninterpretedOption negative_int_value.
                 * @member {number|Long} negative_int_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.negative_int_value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * UninterpretedOption double_value.
                 * @member {number} double_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.double_value = 0;
    
                /**
                 * UninterpretedOption string_value.
                 * @member {Uint8Array} string_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.string_value = $util.newBuffer([]);
    
                /**
                 * UninterpretedOption aggregate_value.
                 * @member {string} aggregate_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.aggregate_value = "";
    
                /**
                 * Creates a new UninterpretedOption instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.UninterpretedOption.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
                 * @type {{
                 *   (properties: google.protobuf.UninterpretedOption.$Shape): google.protobuf.UninterpretedOption & google.protobuf.UninterpretedOption.$Shape;
                 *   (properties?: google.protobuf.UninterpretedOption.$Properties): google.protobuf.UninterpretedOption;
                 * }}
                 */
                UninterpretedOption.create = function(properties) {
                    return new UninterpretedOption(properties);
                };
    
                /**
                 * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.UninterpretedOption.$Properties} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.name != null && message.name.length)
                        for (var i = 0; i < message.name.length; ++i)
                            $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                    if (message.identifier_value != null && $Object.hasOwnProperty.call(message, "identifier_value"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifier_value);
                    if (message.positive_int_value != null && $Object.hasOwnProperty.call(message, "positive_int_value"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positive_int_value);
                    if (message.negative_int_value != null && $Object.hasOwnProperty.call(message, "negative_int_value"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negative_int_value);
                    if (message.double_value != null && $Object.hasOwnProperty.call(message, "double_value"))
                        writer.uint32(/* id 6, wireType 1 =*/49).double(message.double_value);
                    if (message.string_value != null && $Object.hasOwnProperty.call(message, "string_value"))
                        writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.string_value);
                    if (message.aggregate_value != null && $Object.hasOwnProperty.call(message, "aggregate_value"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregate_value);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.UninterpretedOption.$Properties} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };
    
                /**
                 * Decodes an UninterpretedOption message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption & google.protobuf.UninterpretedOption.$Shape} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decode = function (reader, length, _end, _depth, _target) {
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
                    message = _target || new $root.google.protobuf.UninterpretedOption();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 2: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.name && message.name.length))
                                    message.name = [];
                                message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.size(), $undefined, _depth + 1));
                                continue;
                            }
                        case 3: {
                                if (wireType !== 2)
                                    break;
                                message.identifier_value = reader.string();
                                continue;
                            }
                        case 4: {
                                if (wireType !== 0)
                                    break;
                                message.positive_int_value = reader.uint64();
                                continue;
                            }
                        case 5: {
                                if (wireType !== 0)
                                    break;
                                message.negative_int_value = reader.int64();
                                continue;
                            }
                        case 6: {
                                if (wireType !== 1)
                                    break;
                                message.double_value = reader.double();
                                continue;
                            }
                        case 7: {
                                if (wireType !== 2)
                                    break;
                                message.string_value = reader.bytes();
                                continue;
                            }
                        case 8: {
                                if (wireType !== 2)
                                    break;
                                message.aggregate_value = reader.string();
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
                 * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption & google.protobuf.UninterpretedOption.$Shape} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.size());
                };
    
                /**
                 * Verifies an UninterpretedOption message.
                 * @function verify
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UninterpretedOption.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.name != null && $Object.hasOwnProperty.call(message, "name")) {
                        if (!$Array.isArray(message.name))
                            return "name: array expected";
                        for (var i = 0; i < message.name.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.NamePart.verify(message.name[i], _depth + 1);
                            if (error)
                                return "name." + error;
                        }
                    }
                    if (message.identifier_value != null && $Object.hasOwnProperty.call(message, "identifier_value"))
                        if (!$util.isString(message.identifier_value))
                            return "identifier_value: string expected";
                    if (message.positive_int_value != null && $Object.hasOwnProperty.call(message, "positive_int_value"))
                        if (!$util.isInteger(message.positive_int_value) && !(message.positive_int_value && $util.isInteger(message.positive_int_value.low) && $util.isInteger(message.positive_int_value.high)))
                            return "positive_int_value: integer|Long expected";
                    if (message.negative_int_value != null && $Object.hasOwnProperty.call(message, "negative_int_value"))
                        if (!$util.isInteger(message.negative_int_value) && !(message.negative_int_value && $util.isInteger(message.negative_int_value.low) && $util.isInteger(message.negative_int_value.high)))
                            return "negative_int_value: integer|Long expected";
                    if (message.double_value != null && $Object.hasOwnProperty.call(message, "double_value"))
                        if (typeof message.double_value !== "number")
                            return "double_value: number expected";
                    if (message.string_value != null && $Object.hasOwnProperty.call(message, "string_value"))
                        if (!(message.string_value && typeof message.string_value.length === "number" || $util.isString(message.string_value)))
                            return "string_value: buffer expected";
                    if (message.aggregate_value != null && $Object.hasOwnProperty.call(message, "aggregate_value"))
                        if (!$util.isString(message.aggregate_value))
                            return "aggregate_value: string expected";
                    return null;
                };
    
                /**
                 * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 */
                UninterpretedOption.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.UninterpretedOption: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.UninterpretedOption();
                    if (object.name) {
                        if (!$Array.isArray(object.name))
                            throw $TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                        message.name = $Array(object.name.length);
                        for (var i = 0; i < object.name.length; ++i) {
                            if (!$util.isObject(object.name[i]))
                                throw $TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                            message.name[i] = $root.google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i], _depth + 1);
                        }
                    }
                    if (object.identifier_value != null)
                        message.identifier_value = $String(object.identifier_value);
                    if (object.positive_int_value != null)
                        if ($util.Long)
                            message.positive_int_value = $util.Long.fromValue(object.positive_int_value, true);
                        else if (typeof object.positive_int_value === "string")
                            message.positive_int_value = $parseInt(object.positive_int_value, 10);
                        else if (typeof object.positive_int_value === "number")
                            message.positive_int_value = object.positive_int_value;
                        else if (typeof object.positive_int_value === "object")
                            message.positive_int_value = new $util.LongBits(object.positive_int_value.low >>> 0, object.positive_int_value.high >>> 0).toNumber(true);
                    if (object.negative_int_value != null)
                        if ($util.Long)
                            message.negative_int_value = $util.Long.fromValue(object.negative_int_value, false);
                        else if (typeof object.negative_int_value === "string")
                            message.negative_int_value = $parseInt(object.negative_int_value, 10);
                        else if (typeof object.negative_int_value === "number")
                            message.negative_int_value = object.negative_int_value;
                        else if (typeof object.negative_int_value === "object")
                            message.negative_int_value = new $util.LongBits(object.negative_int_value.low >>> 0, object.negative_int_value.high >>> 0).toNumber();
                    if (object.double_value != null)
                        message.double_value = $Number(object.double_value);
                    if (object.string_value != null)
                        if (typeof object.string_value === "string")
                            $util.base64.decode(object.string_value, message.string_value = $util.newBuffer($util.base64.length(object.string_value)), 0);
                        else if (object.string_value.length >= 0)
                            message.string_value = object.string_value;
                    if (object.aggregate_value != null)
                        message.aggregate_value = $String(object.aggregate_value);
                    return message;
                };
    
                /**
                 * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UninterpretedOption.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.name = [];
                    if (options.defaults) {
                        object.identifier_value = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.positive_int_value = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                        } else
                            object.positive_int_value = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.negative_int_value = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                        } else
                            object.negative_int_value = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                        object.double_value = 0;
                        if (options.bytes === $String)
                            object.string_value = "";
                        else {
                            object.string_value = [];
                            if (options.bytes !== $Array)
                                object.string_value = $util.newBuffer(object.string_value);
                        }
                        object.aggregate_value = "";
                    }
                    if (message.name && message.name.length) {
                        object.name = $Array(message.name.length);
                        for (var j = 0; j < message.name.length; ++j)
                            object.name[j] = $root.google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options, _depth + 1);
                    }
                    if (message.identifier_value != null && $Object.hasOwnProperty.call(message, "identifier_value"))
                        object.identifier_value = message.identifier_value;
                    if (message.positive_int_value != null && $Object.hasOwnProperty.call(message, "positive_int_value"))
                        if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                            object.positive_int_value = typeof message.positive_int_value === "number" ? $BigInt(message.positive_int_value) : $util.Long.fromBits(message.positive_int_value.low >>> 0, message.positive_int_value.high >>> 0, true).toBigInt();
                        else if (typeof message.positive_int_value === "number")
                            object.positive_int_value = options.longs === $String ? $String(message.positive_int_value) : message.positive_int_value;
                        else
                            object.positive_int_value = options.longs === $String ? $util.Long.prototype.toString.call(message.positive_int_value) : options.longs === $Number ? new $util.LongBits(message.positive_int_value.low >>> 0, message.positive_int_value.high >>> 0).toNumber(true) : message.positive_int_value;
                    if (message.negative_int_value != null && $Object.hasOwnProperty.call(message, "negative_int_value"))
                        if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                            object.negative_int_value = typeof message.negative_int_value === "number" ? $BigInt(message.negative_int_value) : $util.Long.fromBits(message.negative_int_value.low >>> 0, message.negative_int_value.high >>> 0, false).toBigInt();
                        else if (typeof message.negative_int_value === "number")
                            object.negative_int_value = options.longs === $String ? $String(message.negative_int_value) : message.negative_int_value;
                        else
                            object.negative_int_value = options.longs === $String ? $util.Long.prototype.toString.call(message.negative_int_value) : options.longs === $Number ? new $util.LongBits(message.negative_int_value.low >>> 0, message.negative_int_value.high >>> 0).toNumber() : message.negative_int_value;
                    if (message.double_value != null && $Object.hasOwnProperty.call(message, "double_value"))
                        object.double_value = options.json && !$isFinite(message.double_value) ? $String(message.double_value) : message.double_value;
                    if (message.string_value != null && $Object.hasOwnProperty.call(message, "string_value"))
                        object.string_value = options.bytes === $String ? $util.base64.encode(message.string_value, 0, message.string_value.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.string_value) : message.string_value;
                    if (message.aggregate_value != null && $Object.hasOwnProperty.call(message, "aggregate_value"))
                        object.aggregate_value = message.aggregate_value;
                    return object;
                };
    
                /**
                 * Converts this UninterpretedOption to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UninterpretedOption.prototype.toJSON = function() {
                    return UninterpretedOption.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the type url for UninterpretedOption
                 * @function getTypeUrl
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                UninterpretedOption.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.UninterpretedOption";
                };
    
                UninterpretedOption.NamePart = (function() {
    
                    /**
                     * Properties of a NamePart.
                     * @typedef {Object} google.protobuf.UninterpretedOption.NamePart.$Properties
                     * @property {string} name_part NamePart name_part
                     * @property {boolean} is_extension NamePart is_extension
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
    
                    /**
                     * Properties of a NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @interface INamePart
                     * @augments google.protobuf.UninterpretedOption.NamePart.$Properties
                     * @deprecated Use google.protobuf.UninterpretedOption.NamePart.$Properties instead.
                     */
    
                    /**
                     * Shape of a NamePart.
                     * @typedef {google.protobuf.UninterpretedOption.NamePart.$Properties} google.protobuf.UninterpretedOption.NamePart.$Shape
                     */
    
                    /**
                     * Constructs a new NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @classdesc Represents a NamePart.
                     * @constructor
                     * @param {google.protobuf.UninterpretedOption.NamePart.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    var NamePart = function (properties) {
                        if (properties)
                            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };
    
                    /**
                     * NamePart name_part.
                     * @member {string} name_part
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.name_part = "";
    
                    /**
                     * NamePart is_extension.
                     * @member {boolean} is_extension
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.is_extension = false;
    
                    /**
                     * Creates a new NamePart instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.NamePart.$Properties=} [properties] Properties to set
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                     * @type {{
                     *   (properties: google.protobuf.UninterpretedOption.NamePart.$Shape): google.protobuf.UninterpretedOption.NamePart & google.protobuf.UninterpretedOption.NamePart.$Shape;
                     *   (properties?: google.protobuf.UninterpretedOption.NamePart.$Properties): google.protobuf.UninterpretedOption.NamePart;
                     * }}
                     */
                    NamePart.create = function(properties) {
                        return new NamePart(properties);
                    };
    
                    /**
                     * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.NamePart.$Properties} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name_part);
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.is_extension);
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (var i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.NamePart.$Properties} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encodeDelimited = function(message, writer) {
                        return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.UninterpretedOption.NamePart & google.protobuf.UninterpretedOption.NamePart.$Shape} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decode = function (reader, length, _end, _depth, _target) {
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
                        message = _target || new $root.google.protobuf.UninterpretedOption.NamePart();
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
                                    message.name_part = reader.string();
                                    continue;
                                }
                            case 2: {
                                    if (wireType !== 0)
                                        break;
                                    message.is_extension = reader.bool();
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
                        if (!$Object.hasOwnProperty.call(message, "name_part"))
                            throw $util.ProtocolError("missing required 'name_part'", { instance: message });
                        if (!$Object.hasOwnProperty.call(message, "is_extension"))
                            throw $util.ProtocolError("missing required 'is_extension'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.UninterpretedOption.NamePart & google.protobuf.UninterpretedOption.NamePart.$Shape} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.size());
                    };
    
                    /**
                     * Verifies a NamePart message.
                     * @function verify
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    NamePart.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (!$util.isString(message.name_part))
                            return "name_part: string expected";
                        if (typeof message.is_extension !== "boolean")
                            return "is_extension: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     */
                    NamePart.fromObject = function (object, _depth) {
                        if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".google.protobuf.UninterpretedOption.NamePart: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        if (object.name_part != null)
                            message.name_part = $String(object.name_part);
                        if (object.is_extension != null)
                            message.is_extension = $Boolean(object.is_extension);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NamePart.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var object = {};
                        if (options.defaults) {
                            object.name_part = "";
                            object.is_extension = false;
                        }
                        if (message.name_part != null && $Object.hasOwnProperty.call(message, "name_part"))
                            object.name_part = message.name_part;
                        if (message.is_extension != null && $Object.hasOwnProperty.call(message, "is_extension"))
                            object.is_extension = message.is_extension;
                        return object;
                    };
    
                    /**
                     * Converts this NamePart to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    NamePart.prototype.toJSON = function() {
                        return NamePart.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the type url for NamePart
                     * @function getTypeUrl
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    NamePart.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/google.protobuf.UninterpretedOption.NamePart";
                    };
    
                    return NamePart;
                })();
    
                return UninterpretedOption;
            })();
    
            protobuf.SourceCodeInfo = (function() {
    
                /**
                 * Properties of a SourceCodeInfo.
                 * @typedef {Object} google.protobuf.SourceCodeInfo.$Properties
                 * @property {Array.<google.protobuf.SourceCodeInfo.Location.$Properties>|null} [location] SourceCodeInfo location
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
    
                /**
                 * Properties of a SourceCodeInfo.
                 * @memberof google.protobuf
                 * @interface ISourceCodeInfo
                 * @augments google.protobuf.SourceCodeInfo.$Properties
                 * @deprecated Use google.protobuf.SourceCodeInfo.$Properties instead.
                 */
    
                /**
                 * Shape of a SourceCodeInfo.
                 * @typedef {google.protobuf.SourceCodeInfo.$Properties} google.protobuf.SourceCodeInfo.$Shape
                 */
    
                /**
                 * Constructs a new SourceCodeInfo.
                 * @memberof google.protobuf
                 * @classdesc Represents a SourceCodeInfo.
                 * @constructor
                 * @param {google.protobuf.SourceCodeInfo.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var SourceCodeInfo = function (properties) {
                    this.location = [];
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };
    
                /**
                 * SourceCodeInfo location.
                 * @member {Array.<google.protobuf.SourceCodeInfo.Location.$Properties>} location
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 */
                SourceCodeInfo.prototype.location = $util.emptyArray;
    
                /**
                 * Creates a new SourceCodeInfo instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
                 * @type {{
                 *   (properties: google.protobuf.SourceCodeInfo.$Shape): google.protobuf.SourceCodeInfo & google.protobuf.SourceCodeInfo.$Shape;
                 *   (properties?: google.protobuf.SourceCodeInfo.$Properties): google.protobuf.SourceCodeInfo;
                 * }}
                 */
                SourceCodeInfo.create = function(properties) {
                    return new SourceCodeInfo(properties);
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.$Properties} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.location != null && message.location.length)
                        for (var i = 0; i < message.location.length; ++i)
                            $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.$Properties} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };
    
                /**
                 * Decodes a SourceCodeInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo & google.protobuf.SourceCodeInfo.$Shape} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decode = function (reader, length, _end, _depth, _target) {
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
                    message = _target || new $root.google.protobuf.SourceCodeInfo();
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
                                if (!(message.location && message.location.length))
                                    message.location = [];
                                message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.size(), $undefined, _depth + 1));
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
                 * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo & google.protobuf.SourceCodeInfo.$Shape} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.size());
                };
    
                /**
                 * Verifies a SourceCodeInfo message.
                 * @function verify
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SourceCodeInfo.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.location != null && $Object.hasOwnProperty.call(message, "location")) {
                        if (!$Array.isArray(message.location))
                            return "location: array expected";
                        for (var i = 0; i < message.location.length; ++i) {
                            var error = $root.google.protobuf.SourceCodeInfo.Location.verify(message.location[i], _depth + 1);
                            if (error)
                                return "location." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 */
                SourceCodeInfo.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.SourceCodeInfo: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.SourceCodeInfo();
                    if (object.location) {
                        if (!$Array.isArray(object.location))
                            throw $TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                        message.location = $Array(object.location.length);
                        for (var i = 0; i < object.location.length; ++i) {
                            if (!$util.isObject(object.location[i]))
                                throw $TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                            message.location[i] = $root.google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i], _depth + 1);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SourceCodeInfo.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.location = [];
                    if (message.location && message.location.length) {
                        object.location = $Array(message.location.length);
                        for (var j = 0; j < message.location.length; ++j)
                            object.location[j] = $root.google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options, _depth + 1);
                    }
                    return object;
                };
    
                /**
                 * Converts this SourceCodeInfo to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SourceCodeInfo.prototype.toJSON = function() {
                    return SourceCodeInfo.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the type url for SourceCodeInfo
                 * @function getTypeUrl
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                SourceCodeInfo.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.SourceCodeInfo";
                };
    
                SourceCodeInfo.Location = (function() {
    
                    /**
                     * Properties of a Location.
                     * @typedef {Object} google.protobuf.SourceCodeInfo.Location.$Properties
                     * @property {Array.<number>|null} [path] Location path
                     * @property {Array.<number>|null} [span] Location span
                     * @property {string|null} [leading_comments] Location leading_comments
                     * @property {string|null} [trailing_comments] Location trailing_comments
                     * @property {Array.<string>|null} [leading_detached_comments] Location leading_detached_comments
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
    
                    /**
                     * Properties of a Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @interface ILocation
                     * @augments google.protobuf.SourceCodeInfo.Location.$Properties
                     * @deprecated Use google.protobuf.SourceCodeInfo.Location.$Properties instead.
                     */
    
                    /**
                     * Shape of a Location.
                     * @typedef {google.protobuf.SourceCodeInfo.Location.$Properties} google.protobuf.SourceCodeInfo.Location.$Shape
                     */
    
                    /**
                     * Constructs a new Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @classdesc Represents a Location.
                     * @constructor
                     * @param {google.protobuf.SourceCodeInfo.Location.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    var Location = function (properties) {
                        this.path = [];
                        this.span = [];
                        this.leading_detached_comments = [];
                        if (properties)
                            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };
    
                    /**
                     * Location path.
                     * @member {Array.<number>} path
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.path = $util.emptyArray;
    
                    /**
                     * Location span.
                     * @member {Array.<number>} span
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.span = $util.emptyArray;
    
                    /**
                     * Location leading_comments.
                     * @member {string} leading_comments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.leading_comments = "";
    
                    /**
                     * Location trailing_comments.
                     * @member {string} trailing_comments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.trailing_comments = "";
    
                    /**
                     * Location leading_detached_comments.
                     * @member {Array.<string>} leading_detached_comments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.leading_detached_comments = $util.emptyArray;
    
                    /**
                     * Creates a new Location instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.Location.$Properties=} [properties] Properties to set
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                     * @type {{
                     *   (properties: google.protobuf.SourceCodeInfo.Location.$Shape): google.protobuf.SourceCodeInfo.Location & google.protobuf.SourceCodeInfo.Location.$Shape;
                     *   (properties?: google.protobuf.SourceCodeInfo.Location.$Properties): google.protobuf.SourceCodeInfo.Location;
                     * }}
                     */
                    Location.create = function(properties) {
                        return new Location(properties);
                    };
    
                    /**
                     * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.Location.$Properties} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.path != null && message.path.length)
                            writer.uint32(/* id 1, wireType 2 =*/10).int32s(message.path);
                        if (message.span != null && message.span.length)
                            writer.uint32(/* id 2, wireType 2 =*/18).int32s(message.span);
                        if (message.leading_comments != null && $Object.hasOwnProperty.call(message, "leading_comments"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.leading_comments);
                        if (message.trailing_comments != null && $Object.hasOwnProperty.call(message, "trailing_comments"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailing_comments);
                        if (message.leading_detached_comments != null && message.leading_detached_comments.length)
                            for (var i = 0; i < message.leading_detached_comments.length; ++i)
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.leading_detached_comments[i]);
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (var i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.Location.$Properties} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encodeDelimited = function(message, writer) {
                        return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                    };
    
                    /**
                     * Decodes a Location message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.SourceCodeInfo.Location & google.protobuf.SourceCodeInfo.Location.$Shape} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decode = function (reader, length, _end, _depth, _target) {
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
                        message = _target || new $root.google.protobuf.SourceCodeInfo.Location();
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
                                    if (wireType === 2) {
                                        if (!(message.path && message.path.length))
                                            message.path = [];
                                        reader.int32s(message.path);
                                        continue;
                                    }
                                    if (wireType !== 0)
                                        break;
                                    if (!(message.path && message.path.length))
                                        message.path = [];
                                    message.path.push(reader.int32());
                                    continue;
                                }
                            case 2: {
                                    if (wireType === 2) {
                                        if (!(message.span && message.span.length))
                                            message.span = [];
                                        reader.int32s(message.span);
                                        continue;
                                    }
                                    if (wireType !== 0)
                                        break;
                                    if (!(message.span && message.span.length))
                                        message.span = [];
                                    message.span.push(reader.int32());
                                    continue;
                                }
                            case 3: {
                                    if (wireType !== 2)
                                        break;
                                    message.leading_comments = reader.string();
                                    continue;
                                }
                            case 4: {
                                    if (wireType !== 2)
                                        break;
                                    message.trailing_comments = reader.string();
                                    continue;
                                }
                            case 6: {
                                    if (wireType !== 2)
                                        break;
                                    if (!(message.leading_detached_comments && message.leading_detached_comments.length))
                                        message.leading_detached_comments = [];
                                    message.leading_detached_comments.push(reader.string());
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
                     * Decodes a Location message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.SourceCodeInfo.Location & google.protobuf.SourceCodeInfo.Location.$Shape} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.size());
                    };
    
                    /**
                     * Verifies a Location message.
                     * @function verify
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Location.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.path != null && $Object.hasOwnProperty.call(message, "path")) {
                            if (!$Array.isArray(message.path))
                                return "path: array expected";
                            for (var i = 0; i < message.path.length; ++i)
                                if (!$util.isInteger(message.path[i]))
                                    return "path: integer[] expected";
                        }
                        if (message.span != null && $Object.hasOwnProperty.call(message, "span")) {
                            if (!$Array.isArray(message.span))
                                return "span: array expected";
                            for (var i = 0; i < message.span.length; ++i)
                                if (!$util.isInteger(message.span[i]))
                                    return "span: integer[] expected";
                        }
                        if (message.leading_comments != null && $Object.hasOwnProperty.call(message, "leading_comments"))
                            if (!$util.isString(message.leading_comments))
                                return "leading_comments: string expected";
                        if (message.trailing_comments != null && $Object.hasOwnProperty.call(message, "trailing_comments"))
                            if (!$util.isString(message.trailing_comments))
                                return "trailing_comments: string expected";
                        if (message.leading_detached_comments != null && $Object.hasOwnProperty.call(message, "leading_detached_comments")) {
                            if (!$Array.isArray(message.leading_detached_comments))
                                return "leading_detached_comments: array expected";
                            for (var i = 0; i < message.leading_detached_comments.length; ++i)
                                if (!$util.isString(message.leading_detached_comments[i]))
                                    return "leading_detached_comments: string[] expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a Location message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     */
                    Location.fromObject = function (object, _depth) {
                        if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".google.protobuf.SourceCodeInfo.Location: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var message = new $root.google.protobuf.SourceCodeInfo.Location();
                        if (object.path) {
                            if (!$Array.isArray(object.path))
                                throw $TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                            message.path = $Array(object.path.length);
                            for (var i = 0; i < object.path.length; ++i)
                                message.path[i] = object.path[i] | 0;
                        }
                        if (object.span) {
                            if (!$Array.isArray(object.span))
                                throw $TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                            message.span = $Array(object.span.length);
                            for (var i = 0; i < object.span.length; ++i)
                                message.span[i] = object.span[i] | 0;
                        }
                        if (object.leading_comments != null)
                            message.leading_comments = $String(object.leading_comments);
                        if (object.trailing_comments != null)
                            message.trailing_comments = $String(object.trailing_comments);
                        if (object.leading_detached_comments) {
                            if (!$Array.isArray(object.leading_detached_comments))
                                throw $TypeError(".google.protobuf.SourceCodeInfo.Location.leading_detached_comments: array expected");
                            message.leading_detached_comments = $Array(object.leading_detached_comments.length);
                            for (var i = 0; i < object.leading_detached_comments.length; ++i)
                                message.leading_detached_comments[i] = $String(object.leading_detached_comments[i]);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Location message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.Location} message Location
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Location.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.path = [];
                            object.span = [];
                            object.leading_detached_comments = [];
                        }
                        if (options.defaults) {
                            object.leading_comments = "";
                            object.trailing_comments = "";
                        }
                        if (message.path && message.path.length) {
                            object.path = $Array(message.path.length);
                            for (var j = 0; j < message.path.length; ++j)
                                object.path[j] = message.path[j];
                        }
                        if (message.span && message.span.length) {
                            object.span = $Array(message.span.length);
                            for (var j = 0; j < message.span.length; ++j)
                                object.span[j] = message.span[j];
                        }
                        if (message.leading_comments != null && $Object.hasOwnProperty.call(message, "leading_comments"))
                            object.leading_comments = message.leading_comments;
                        if (message.trailing_comments != null && $Object.hasOwnProperty.call(message, "trailing_comments"))
                            object.trailing_comments = message.trailing_comments;
                        if (message.leading_detached_comments && message.leading_detached_comments.length) {
                            object.leading_detached_comments = $Array(message.leading_detached_comments.length);
                            for (var j = 0; j < message.leading_detached_comments.length; ++j)
                                object.leading_detached_comments[j] = message.leading_detached_comments[j];
                        }
                        return object;
                    };
    
                    /**
                     * Converts this Location to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Location.prototype.toJSON = function() {
                        return Location.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the type url for Location
                     * @function getTypeUrl
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    Location.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/google.protobuf.SourceCodeInfo.Location";
                    };
    
                    return Location;
                })();
    
                return SourceCodeInfo;
            })();
    
            protobuf.GeneratedCodeInfo = (function() {
    
                /**
                 * Properties of a GeneratedCodeInfo.
                 * @typedef {Object} google.protobuf.GeneratedCodeInfo.$Properties
                 * @property {Array.<google.protobuf.GeneratedCodeInfo.Annotation.$Properties>|null} [annotation] GeneratedCodeInfo annotation
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
    
                /**
                 * Properties of a GeneratedCodeInfo.
                 * @memberof google.protobuf
                 * @interface IGeneratedCodeInfo
                 * @augments google.protobuf.GeneratedCodeInfo.$Properties
                 * @deprecated Use google.protobuf.GeneratedCodeInfo.$Properties instead.
                 */
    
                /**
                 * Shape of a GeneratedCodeInfo.
                 * @typedef {google.protobuf.GeneratedCodeInfo.$Properties} google.protobuf.GeneratedCodeInfo.$Shape
                 */
    
                /**
                 * Constructs a new GeneratedCodeInfo.
                 * @memberof google.protobuf
                 * @classdesc Represents a GeneratedCodeInfo.
                 * @constructor
                 * @param {google.protobuf.GeneratedCodeInfo.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var GeneratedCodeInfo = function (properties) {
                    this.annotation = [];
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };
    
                /**
                 * GeneratedCodeInfo annotation.
                 * @member {Array.<google.protobuf.GeneratedCodeInfo.Annotation.$Properties>} annotation
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @instance
                 */
                GeneratedCodeInfo.prototype.annotation = $util.emptyArray;
    
                /**
                 * Creates a new GeneratedCodeInfo instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo instance
                 * @type {{
                 *   (properties: google.protobuf.GeneratedCodeInfo.$Shape): google.protobuf.GeneratedCodeInfo & google.protobuf.GeneratedCodeInfo.$Shape;
                 *   (properties?: google.protobuf.GeneratedCodeInfo.$Properties): google.protobuf.GeneratedCodeInfo;
                 * }}
                 */
                GeneratedCodeInfo.create = function(properties) {
                    return new GeneratedCodeInfo(properties);
                };
    
                /**
                 * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.$Properties} message GeneratedCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeneratedCodeInfo.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.annotation != null && message.annotation.length)
                        for (var i = 0; i < message.annotation.length; ++i)
                            $root.google.protobuf.GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.$Properties} message GeneratedCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeneratedCodeInfo.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };
    
                /**
                 * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo & google.protobuf.GeneratedCodeInfo.$Shape} GeneratedCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeneratedCodeInfo.decode = function (reader, length, _end, _depth, _target) {
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
                    message = _target || new $root.google.protobuf.GeneratedCodeInfo();
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
                                if (!(message.annotation && message.annotation.length))
                                    message.annotation = [];
                                message.annotation.push($root.google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.size(), $undefined, _depth + 1));
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
                 * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.GeneratedCodeInfo & google.protobuf.GeneratedCodeInfo.$Shape} GeneratedCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeneratedCodeInfo.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.size());
                };
    
                /**
                 * Verifies a GeneratedCodeInfo message.
                 * @function verify
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GeneratedCodeInfo.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.annotation != null && $Object.hasOwnProperty.call(message, "annotation")) {
                        if (!$Array.isArray(message.annotation))
                            return "annotation: array expected";
                        for (var i = 0; i < message.annotation.length; ++i) {
                            var error = $root.google.protobuf.GeneratedCodeInfo.Annotation.verify(message.annotation[i], _depth + 1);
                            if (error)
                                return "annotation." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 */
                GeneratedCodeInfo.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.GeneratedCodeInfo)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.GeneratedCodeInfo: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.GeneratedCodeInfo();
                    if (object.annotation) {
                        if (!$Array.isArray(object.annotation))
                            throw $TypeError(".google.protobuf.GeneratedCodeInfo.annotation: array expected");
                        message.annotation = $Array(object.annotation.length);
                        for (var i = 0; i < object.annotation.length; ++i) {
                            if (!$util.isObject(object.annotation[i]))
                                throw $TypeError(".google.protobuf.GeneratedCodeInfo.annotation: object expected");
                            message.annotation[i] = $root.google.protobuf.GeneratedCodeInfo.Annotation.fromObject(object.annotation[i], _depth + 1);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo} message GeneratedCodeInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GeneratedCodeInfo.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.annotation = [];
                    if (message.annotation && message.annotation.length) {
                        object.annotation = $Array(message.annotation.length);
                        for (var j = 0; j < message.annotation.length; ++j)
                            object.annotation[j] = $root.google.protobuf.GeneratedCodeInfo.Annotation.toObject(message.annotation[j], options, _depth + 1);
                    }
                    return object;
                };
    
                /**
                 * Converts this GeneratedCodeInfo to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GeneratedCodeInfo.prototype.toJSON = function() {
                    return GeneratedCodeInfo.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the type url for GeneratedCodeInfo
                 * @function getTypeUrl
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                GeneratedCodeInfo.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.GeneratedCodeInfo";
                };
    
                GeneratedCodeInfo.Annotation = (function() {
    
                    /**
                     * Properties of an Annotation.
                     * @typedef {Object} google.protobuf.GeneratedCodeInfo.Annotation.$Properties
                     * @property {Array.<number>|null} [path] Annotation path
                     * @property {string|null} [source_file] Annotation source_file
                     * @property {number|null} [begin] Annotation begin
                     * @property {number|null} [end] Annotation end
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
    
                    /**
                     * Properties of an Annotation.
                     * @memberof google.protobuf.GeneratedCodeInfo
                     * @interface IAnnotation
                     * @augments google.protobuf.GeneratedCodeInfo.Annotation.$Properties
                     * @deprecated Use google.protobuf.GeneratedCodeInfo.Annotation.$Properties instead.
                     */
    
                    /**
                     * Shape of an Annotation.
                     * @typedef {google.protobuf.GeneratedCodeInfo.Annotation.$Properties} google.protobuf.GeneratedCodeInfo.Annotation.$Shape
                     */
    
                    /**
                     * Constructs a new Annotation.
                     * @memberof google.protobuf.GeneratedCodeInfo
                     * @classdesc Represents an Annotation.
                     * @constructor
                     * @param {google.protobuf.GeneratedCodeInfo.Annotation.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    var Annotation = function (properties) {
                        this.path = [];
                        if (properties)
                            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };
    
                    /**
                     * Annotation path.
                     * @member {Array.<number>} path
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.path = $util.emptyArray;
    
                    /**
                     * Annotation source_file.
                     * @member {string} source_file
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.source_file = "";
    
                    /**
                     * Annotation begin.
                     * @member {number} begin
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.begin = 0;
    
                    /**
                     * Annotation end.
                     * @member {number} end
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.end = 0;
    
                    /**
                     * Creates a new Annotation instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.Annotation.$Properties=} [properties] Properties to set
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation instance
                     * @type {{
                     *   (properties: google.protobuf.GeneratedCodeInfo.Annotation.$Shape): google.protobuf.GeneratedCodeInfo.Annotation & google.protobuf.GeneratedCodeInfo.Annotation.$Shape;
                     *   (properties?: google.protobuf.GeneratedCodeInfo.Annotation.$Properties): google.protobuf.GeneratedCodeInfo.Annotation;
                     * }}
                     */
                    Annotation.create = function(properties) {
                        return new Annotation(properties);
                    };
    
                    /**
                     * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.Annotation.$Properties} message Annotation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Annotation.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.path != null && message.path.length)
                            writer.uint32(/* id 1, wireType 2 =*/10).int32s(message.path);
                        if (message.source_file != null && $Object.hasOwnProperty.call(message, "source_file"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.source_file);
                        if (message.begin != null && $Object.hasOwnProperty.call(message, "begin"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                        if (message.end != null && $Object.hasOwnProperty.call(message, "end"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (var i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.Annotation.$Properties} message Annotation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Annotation.encodeDelimited = function(message, writer) {
                        return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                    };
    
                    /**
                     * Decodes an Annotation message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation & google.protobuf.GeneratedCodeInfo.Annotation.$Shape} Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Annotation.decode = function (reader, length, _end, _depth, _target) {
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
                        message = _target || new $root.google.protobuf.GeneratedCodeInfo.Annotation();
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
                                    if (wireType === 2) {
                                        if (!(message.path && message.path.length))
                                            message.path = [];
                                        reader.int32s(message.path);
                                        continue;
                                    }
                                    if (wireType !== 0)
                                        break;
                                    if (!(message.path && message.path.length))
                                        message.path = [];
                                    message.path.push(reader.int32());
                                    continue;
                                }
                            case 2: {
                                    if (wireType !== 2)
                                        break;
                                    message.source_file = reader.string();
                                    continue;
                                }
                            case 3: {
                                    if (wireType !== 0)
                                        break;
                                    message.begin = reader.int32();
                                    continue;
                                }
                            case 4: {
                                    if (wireType !== 0)
                                        break;
                                    message.end = reader.int32();
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
                     * Decodes an Annotation message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation & google.protobuf.GeneratedCodeInfo.Annotation.$Shape} Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Annotation.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.size());
                    };
    
                    /**
                     * Verifies an Annotation message.
                     * @function verify
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Annotation.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.path != null && $Object.hasOwnProperty.call(message, "path")) {
                            if (!$Array.isArray(message.path))
                                return "path: array expected";
                            for (var i = 0; i < message.path.length; ++i)
                                if (!$util.isInteger(message.path[i]))
                                    return "path: integer[] expected";
                        }
                        if (message.source_file != null && $Object.hasOwnProperty.call(message, "source_file"))
                            if (!$util.isString(message.source_file))
                                return "source_file: string expected";
                        if (message.begin != null && $Object.hasOwnProperty.call(message, "begin"))
                            if (!$util.isInteger(message.begin))
                                return "begin: integer expected";
                        if (message.end != null && $Object.hasOwnProperty.call(message, "end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     */
                    Annotation.fromObject = function (object, _depth) {
                        if (object instanceof $root.google.protobuf.GeneratedCodeInfo.Annotation)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".google.protobuf.GeneratedCodeInfo.Annotation: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                        if (object.path) {
                            if (!$Array.isArray(object.path))
                                throw $TypeError(".google.protobuf.GeneratedCodeInfo.Annotation.path: array expected");
                            message.path = $Array(object.path.length);
                            for (var i = 0; i < object.path.length; ++i)
                                message.path[i] = object.path[i] | 0;
                        }
                        if (object.source_file != null)
                            message.source_file = $String(object.source_file);
                        if (object.begin != null)
                            message.begin = object.begin | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.Annotation} message Annotation
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Annotation.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.path = [];
                        if (options.defaults) {
                            object.source_file = "";
                            object.begin = 0;
                            object.end = 0;
                        }
                        if (message.path && message.path.length) {
                            object.path = $Array(message.path.length);
                            for (var j = 0; j < message.path.length; ++j)
                                object.path[j] = message.path[j];
                        }
                        if (message.source_file != null && $Object.hasOwnProperty.call(message, "source_file"))
                            object.source_file = message.source_file;
                        if (message.begin != null && $Object.hasOwnProperty.call(message, "begin"))
                            object.begin = message.begin;
                        if (message.end != null && $Object.hasOwnProperty.call(message, "end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this Annotation to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Annotation.prototype.toJSON = function() {
                        return Annotation.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the type url for Annotation
                     * @function getTypeUrl
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    Annotation.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/google.protobuf.GeneratedCodeInfo.Annotation";
                    };
    
                    return Annotation;
                })();
    
                return GeneratedCodeInfo;
            })();
    
            return protobuf;
        })();
    
        return google;
    })();

    return $root;
});
