/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    /**
     * EGCPetMsg enum.
     * @exports EGCPetMsg
     * @enum {number}
     * @property {number} k_EMsgGCAckPetEvent=2538 k_EMsgGCAckPetEvent value
     */
    $root.EGCPetMsg = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[2538] = "k_EMsgGCAckPetEvent"] = 2538;
        return values;
    })();
    
    $root.CMsgAckPetEvent = (function() {
    
        /**
         * Properties of a CMsgAckPetEvent.
         * @exports ICMsgAckPetEvent
         * @interface ICMsgAckPetEvent
         * @property {number|Long|null} [pet_item_id] CMsgAckPetEvent pet_item_id
         */
    
        /**
         * Constructs a new CMsgAckPetEvent.
         * @exports CMsgAckPetEvent
         * @classdesc Represents a CMsgAckPetEvent.
         * @implements ICMsgAckPetEvent
         * @constructor
         * @param {ICMsgAckPetEvent=} [properties] Properties to set
         */
        function CMsgAckPetEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgAckPetEvent pet_item_id.
         * @member {number|Long} pet_item_id
         * @memberof CMsgAckPetEvent
         * @instance
         */
        CMsgAckPetEvent.prototype.pet_item_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CMsgAckPetEvent instance using the specified properties.
         * @function create
         * @memberof CMsgAckPetEvent
         * @static
         * @param {ICMsgAckPetEvent=} [properties] Properties to set
         * @returns {CMsgAckPetEvent} CMsgAckPetEvent instance
         */
        CMsgAckPetEvent.create = function create(properties) {
            return new CMsgAckPetEvent(properties);
        };
    
        /**
         * Encodes the specified CMsgAckPetEvent message. Does not implicitly {@link CMsgAckPetEvent.verify|verify} messages.
         * @function encode
         * @memberof CMsgAckPetEvent
         * @static
         * @param {ICMsgAckPetEvent} message CMsgAckPetEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgAckPetEvent.encode = function encode(message, writer, q) {
            if (!writer)
                writer = $Writer.create();
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.pet_item_id != null && Object.hasOwnProperty.call(message, "pet_item_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.pet_item_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgAckPetEvent message, length delimited. Does not implicitly {@link CMsgAckPetEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgAckPetEvent
         * @static
         * @param {ICMsgAckPetEvent} message CMsgAckPetEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgAckPetEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };
    
        /**
         * Decodes a CMsgAckPetEvent message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgAckPetEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgAckPetEvent} CMsgAckPetEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgAckPetEvent.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var end, message;
            if (length === undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = new $root.CMsgAckPetEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.pet_item_id = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            if (length !== undefined) {
                if (reader.pos !== end)
                    throw RangeError("index out of range");
                reader.len = length;
            }
            return message;
        };
    
        /**
         * Decodes a CMsgAckPetEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgAckPetEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgAckPetEvent} CMsgAckPetEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgAckPetEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgAckPetEvent message.
         * @function verify
         * @memberof CMsgAckPetEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgAckPetEvent.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.pet_item_id != null && Object.hasOwnProperty.call(message, "pet_item_id"))
                if (!$util.isInteger(message.pet_item_id) && !(message.pet_item_id && $util.isInteger(message.pet_item_id.low) && $util.isInteger(message.pet_item_id.high)))
                    return "pet_item_id: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CMsgAckPetEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgAckPetEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgAckPetEvent} CMsgAckPetEvent
         */
        CMsgAckPetEvent.fromObject = function fromObject(object, long) {
            if (object instanceof $root.CMsgAckPetEvent)
                return object;
            if (!$util.isObject(object))
                throw TypeError(".CMsgAckPetEvent: object expected");
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var message = new $root.CMsgAckPetEvent();
            if (object.pet_item_id != null)
                if ($util.Long)
                    message.pet_item_id = $util.Long.fromValue(object.pet_item_id, true);
                else if (typeof object.pet_item_id === "string")
                    message.pet_item_id = parseInt(object.pet_item_id, 10);
                else if (typeof object.pet_item_id === "number")
                    message.pet_item_id = object.pet_item_id;
                else if (typeof object.pet_item_id === "object")
                    message.pet_item_id = new $util.LongBits(object.pet_item_id.low >>> 0, object.pet_item_id.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgAckPetEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgAckPetEvent
         * @static
         * @param {CMsgAckPetEvent} message CMsgAckPetEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgAckPetEvent.toObject = function toObject(message, options, q) {
            if (!options)
                options = {};
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.pet_item_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.pet_item_id = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
            if (message.pet_item_id != null && Object.hasOwnProperty.call(message, "pet_item_id"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.pet_item_id = typeof message.pet_item_id === "number" ? BigInt(message.pet_item_id) : $util.Long.fromBits(message.pet_item_id.low >>> 0, message.pet_item_id.high >>> 0, true).toBigInt();
                else if (typeof message.pet_item_id === "number")
                    object.pet_item_id = options.longs === String ? String(message.pet_item_id) : message.pet_item_id;
                else
                    object.pet_item_id = options.longs === String ? $util.Long.prototype.toString.call(message.pet_item_id) : options.longs === Number ? new $util.LongBits(message.pet_item_id.low >>> 0, message.pet_item_id.high >>> 0).toNumber(true) : message.pet_item_id;
            return object;
        };
    
        /**
         * Converts this CMsgAckPetEvent to JSON.
         * @function toJSON
         * @memberof CMsgAckPetEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgAckPetEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgAckPetEvent
         * @function getTypeUrl
         * @memberof CMsgAckPetEvent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgAckPetEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgAckPetEvent";
        };
    
        return CMsgAckPetEvent;
    })();

    return $root;
});
