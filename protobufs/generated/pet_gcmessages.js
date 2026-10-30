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
    var $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $RangeError = $util.global.RangeError, $TypeError = $util.global.TypeError, $parseInt = $util.global.parseInt, $String = $util.global.String, $Number = $util.global.Number, $BigInt = $util.global.BigInt;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    /**
     * EGCPetMsg enum.
     * @name EGCPetMsg
     * @enum {number}
     * @property {number} k_EMsgGCAckPetEvent=2538 k_EMsgGCAckPetEvent value
     */
    $root.EGCPetMsg = (function() {
        var valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[2538] = "k_EMsgGCAckPetEvent"] = 2538;
        return values;
    })();
    
    $root.CMsgAckPetEvent = (function() {
    
        /**
         * Properties of a CMsgAckPetEvent.
         * @typedef {Object} CMsgAckPetEvent.$Properties
         * @property {number|Long|null} [pet_item_id] CMsgAckPetEvent pet_item_id
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
    
        /**
         * Properties of a CMsgAckPetEvent.
         * @exports ICMsgAckPetEvent
         * @interface ICMsgAckPetEvent
         * @augments CMsgAckPetEvent.$Properties
         * @deprecated Use CMsgAckPetEvent.$Properties instead.
         */
    
        /**
         * Shape of a CMsgAckPetEvent.
         * @typedef {CMsgAckPetEvent.$Properties} CMsgAckPetEvent.$Shape
         */
    
        /**
         * Constructs a new CMsgAckPetEvent.
         * @exports CMsgAckPetEvent
         * @classdesc Represents a CMsgAckPetEvent.
         * @constructor
         * @param {CMsgAckPetEvent.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var CMsgAckPetEvent = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };
    
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
         * @param {CMsgAckPetEvent.$Properties=} [properties] Properties to set
         * @returns {CMsgAckPetEvent} CMsgAckPetEvent instance
         * @type {{
         *   (properties: CMsgAckPetEvent.$Shape): CMsgAckPetEvent & CMsgAckPetEvent.$Shape;
         *   (properties?: CMsgAckPetEvent.$Properties): CMsgAckPetEvent;
         * }}
         */
        CMsgAckPetEvent.create = function(properties) {
            return new CMsgAckPetEvent(properties);
        };
    
        /**
         * Encodes the specified CMsgAckPetEvent message. Does not implicitly {@link CMsgAckPetEvent.verify|verify} messages.
         * @function encode
         * @memberof CMsgAckPetEvent
         * @static
         * @param {CMsgAckPetEvent.$Properties} message CMsgAckPetEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgAckPetEvent.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.pet_item_id != null && $Object.hasOwnProperty.call(message, "pet_item_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.pet_item_id);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgAckPetEvent message, length delimited. Does not implicitly {@link CMsgAckPetEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgAckPetEvent
         * @static
         * @param {CMsgAckPetEvent.$Properties} message CMsgAckPetEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgAckPetEvent.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };
    
        /**
         * Decodes a CMsgAckPetEvent message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgAckPetEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgAckPetEvent & CMsgAckPetEvent.$Shape} CMsgAckPetEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgAckPetEvent.decode = function (reader, length, _end, _depth, _target) {
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
            message = _target || new $root.CMsgAckPetEvent();
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
                        message.pet_item_id = reader.uint64();
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
         * Decodes a CMsgAckPetEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgAckPetEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgAckPetEvent & CMsgAckPetEvent.$Shape} CMsgAckPetEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgAckPetEvent.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };
    
        /**
         * Verifies a CMsgAckPetEvent message.
         * @function verify
         * @memberof CMsgAckPetEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgAckPetEvent.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.pet_item_id != null && $Object.hasOwnProperty.call(message, "pet_item_id"))
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
        CMsgAckPetEvent.fromObject = function (object, _depth) {
            if (object instanceof $root.CMsgAckPetEvent)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".CMsgAckPetEvent: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.CMsgAckPetEvent();
            if (object.pet_item_id != null)
                if ($util.Long)
                    message.pet_item_id = $util.Long.fromValue(object.pet_item_id, true);
                else if (typeof object.pet_item_id === "string")
                    message.pet_item_id = $parseInt(object.pet_item_id, 10);
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
        CMsgAckPetEvent.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.pet_item_id = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                } else
                    object.pet_item_id = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
            if (message.pet_item_id != null && $Object.hasOwnProperty.call(message, "pet_item_id"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.pet_item_id = typeof message.pet_item_id === "number" ? $BigInt(message.pet_item_id) : $util.Long.fromBits(message.pet_item_id.low >>> 0, message.pet_item_id.high >>> 0, true).toBigInt();
                else if (typeof message.pet_item_id === "number")
                    object.pet_item_id = options.longs === $String ? $String(message.pet_item_id) : message.pet_item_id;
                else
                    object.pet_item_id = options.longs === $String ? $util.Long.prototype.toString.call(message.pet_item_id) : options.longs === $Number ? new $util.LongBits(message.pet_item_id.low >>> 0, message.pet_item_id.high >>> 0).toNumber(true) : message.pet_item_id;
            return object;
        };
    
        /**
         * Converts this CMsgAckPetEvent to JSON.
         * @function toJSON
         * @memberof CMsgAckPetEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgAckPetEvent.prototype.toJSON = function() {
            return CMsgAckPetEvent.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the type url for CMsgAckPetEvent
         * @function getTypeUrl
         * @memberof CMsgAckPetEvent
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        CMsgAckPetEvent.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/CMsgAckPetEvent";
        };
    
        return CMsgAckPetEvent;
    })();

    return $root;
});
