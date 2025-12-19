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
     * EBaseClientMessages enum.
     * @exports EBaseClientMessages
     * @enum {number}
     * @property {number} CM_CustomGameEvent=280 CM_CustomGameEvent value
     * @property {number} CM_CustomGameEventBounce=281 CM_CustomGameEventBounce value
     * @property {number} CM_ClientUIEvent=282 CM_ClientUIEvent value
     * @property {number} CM_DevPaletteVisibilityChanged=283 CM_DevPaletteVisibilityChanged value
     * @property {number} CM_WorldUIControllerHasPanelChanged=284 CM_WorldUIControllerHasPanelChanged value
     * @property {number} CM_RotateAnchor=285 CM_RotateAnchor value
     * @property {number} CM_ListenForResponseFound=286 CM_ListenForResponseFound value
     * @property {number} CM_MAX_BASE=300 CM_MAX_BASE value
     */
    $root.EBaseClientMessages = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[280] = "CM_CustomGameEvent"] = 280;
        values[valuesById[281] = "CM_CustomGameEventBounce"] = 281;
        values[valuesById[282] = "CM_ClientUIEvent"] = 282;
        values[valuesById[283] = "CM_DevPaletteVisibilityChanged"] = 283;
        values[valuesById[284] = "CM_WorldUIControllerHasPanelChanged"] = 284;
        values[valuesById[285] = "CM_RotateAnchor"] = 285;
        values[valuesById[286] = "CM_ListenForResponseFound"] = 286;
        values[valuesById[300] = "CM_MAX_BASE"] = 300;
        return values;
    })();
    
    /**
     * EClientUIEvent enum.
     * @exports EClientUIEvent
     * @enum {number}
     * @property {number} EClientUIEvent_Invalid=0 EClientUIEvent_Invalid value
     * @property {number} EClientUIEvent_DialogFinished=1 EClientUIEvent_DialogFinished value
     * @property {number} EClientUIEvent_FireOutput=2 EClientUIEvent_FireOutput value
     */
    $root.EClientUIEvent = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EClientUIEvent_Invalid"] = 0;
        values[valuesById[1] = "EClientUIEvent_DialogFinished"] = 1;
        values[valuesById[2] = "EClientUIEvent_FireOutput"] = 2;
        return values;
    })();
    
    $root.CClientMsg_CustomGameEvent = (function() {
    
        /**
         * Properties of a CClientMsg_CustomGameEvent.
         * @exports ICClientMsg_CustomGameEvent
         * @interface ICClientMsg_CustomGameEvent
         * @property {string|null} [event_name] CClientMsg_CustomGameEvent event_name
         * @property {Uint8Array|null} [data] CClientMsg_CustomGameEvent data
         */
    
        /**
         * Constructs a new CClientMsg_CustomGameEvent.
         * @exports CClientMsg_CustomGameEvent
         * @classdesc Represents a CClientMsg_CustomGameEvent.
         * @implements ICClientMsg_CustomGameEvent
         * @constructor
         * @param {ICClientMsg_CustomGameEvent=} [properties] Properties to set
         */
        function CClientMsg_CustomGameEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientMsg_CustomGameEvent event_name.
         * @member {string} event_name
         * @memberof CClientMsg_CustomGameEvent
         * @instance
         */
        CClientMsg_CustomGameEvent.prototype.event_name = "";
    
        /**
         * CClientMsg_CustomGameEvent data.
         * @member {Uint8Array} data
         * @memberof CClientMsg_CustomGameEvent
         * @instance
         */
        CClientMsg_CustomGameEvent.prototype.data = $util.newBuffer([]);
    
        /**
         * Creates a new CClientMsg_CustomGameEvent instance using the specified properties.
         * @function create
         * @memberof CClientMsg_CustomGameEvent
         * @static
         * @param {ICClientMsg_CustomGameEvent=} [properties] Properties to set
         * @returns {CClientMsg_CustomGameEvent} CClientMsg_CustomGameEvent instance
         */
        CClientMsg_CustomGameEvent.create = function create(properties) {
            return new CClientMsg_CustomGameEvent(properties);
        };
    
        /**
         * Encodes the specified CClientMsg_CustomGameEvent message. Does not implicitly {@link CClientMsg_CustomGameEvent.verify|verify} messages.
         * @function encode
         * @memberof CClientMsg_CustomGameEvent
         * @static
         * @param {ICClientMsg_CustomGameEvent} message CClientMsg_CustomGameEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMsg_CustomGameEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.event_name != null && Object.hasOwnProperty.call(message, "event_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.event_name);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            return writer;
        };
    
        /**
         * Encodes the specified CClientMsg_CustomGameEvent message, length delimited. Does not implicitly {@link CClientMsg_CustomGameEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientMsg_CustomGameEvent
         * @static
         * @param {ICClientMsg_CustomGameEvent} message CClientMsg_CustomGameEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMsg_CustomGameEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientMsg_CustomGameEvent message from the specified reader or buffer.
         * @function decode
         * @memberof CClientMsg_CustomGameEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientMsg_CustomGameEvent} CClientMsg_CustomGameEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMsg_CustomGameEvent.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientMsg_CustomGameEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.event_name = reader.string();
                        break;
                    }
                case 2: {
                        message.data = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientMsg_CustomGameEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientMsg_CustomGameEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientMsg_CustomGameEvent} CClientMsg_CustomGameEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMsg_CustomGameEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientMsg_CustomGameEvent message.
         * @function verify
         * @memberof CClientMsg_CustomGameEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientMsg_CustomGameEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.event_name != null && message.hasOwnProperty("event_name"))
                if (!$util.isString(message.event_name))
                    return "event_name: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };
    
        /**
         * Creates a CClientMsg_CustomGameEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientMsg_CustomGameEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientMsg_CustomGameEvent} CClientMsg_CustomGameEvent
         */
        CClientMsg_CustomGameEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientMsg_CustomGameEvent)
                return object;
            var message = new $root.CClientMsg_CustomGameEvent();
            if (object.event_name != null)
                message.event_name = String(object.event_name);
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };
    
        /**
         * Creates a plain object from a CClientMsg_CustomGameEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientMsg_CustomGameEvent
         * @static
         * @param {CClientMsg_CustomGameEvent} message CClientMsg_CustomGameEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientMsg_CustomGameEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.event_name = "";
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.event_name != null && message.hasOwnProperty("event_name"))
                object.event_name = message.event_name;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };
    
        /**
         * Converts this CClientMsg_CustomGameEvent to JSON.
         * @function toJSON
         * @memberof CClientMsg_CustomGameEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientMsg_CustomGameEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CClientMsg_CustomGameEvent
         * @function getTypeUrl
         * @memberof CClientMsg_CustomGameEvent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CClientMsg_CustomGameEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CClientMsg_CustomGameEvent";
        };
    
        return CClientMsg_CustomGameEvent;
    })();
    
    $root.CClientMsg_CustomGameEventBounce = (function() {
    
        /**
         * Properties of a CClientMsg_CustomGameEventBounce.
         * @exports ICClientMsg_CustomGameEventBounce
         * @interface ICClientMsg_CustomGameEventBounce
         * @property {string|null} [event_name] CClientMsg_CustomGameEventBounce event_name
         * @property {Uint8Array|null} [data] CClientMsg_CustomGameEventBounce data
         * @property {number|null} [player_slot] CClientMsg_CustomGameEventBounce player_slot
         */
    
        /**
         * Constructs a new CClientMsg_CustomGameEventBounce.
         * @exports CClientMsg_CustomGameEventBounce
         * @classdesc Represents a CClientMsg_CustomGameEventBounce.
         * @implements ICClientMsg_CustomGameEventBounce
         * @constructor
         * @param {ICClientMsg_CustomGameEventBounce=} [properties] Properties to set
         */
        function CClientMsg_CustomGameEventBounce(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientMsg_CustomGameEventBounce event_name.
         * @member {string} event_name
         * @memberof CClientMsg_CustomGameEventBounce
         * @instance
         */
        CClientMsg_CustomGameEventBounce.prototype.event_name = "";
    
        /**
         * CClientMsg_CustomGameEventBounce data.
         * @member {Uint8Array} data
         * @memberof CClientMsg_CustomGameEventBounce
         * @instance
         */
        CClientMsg_CustomGameEventBounce.prototype.data = $util.newBuffer([]);
    
        /**
         * CClientMsg_CustomGameEventBounce player_slot.
         * @member {number} player_slot
         * @memberof CClientMsg_CustomGameEventBounce
         * @instance
         */
        CClientMsg_CustomGameEventBounce.prototype.player_slot = -1;
    
        /**
         * Creates a new CClientMsg_CustomGameEventBounce instance using the specified properties.
         * @function create
         * @memberof CClientMsg_CustomGameEventBounce
         * @static
         * @param {ICClientMsg_CustomGameEventBounce=} [properties] Properties to set
         * @returns {CClientMsg_CustomGameEventBounce} CClientMsg_CustomGameEventBounce instance
         */
        CClientMsg_CustomGameEventBounce.create = function create(properties) {
            return new CClientMsg_CustomGameEventBounce(properties);
        };
    
        /**
         * Encodes the specified CClientMsg_CustomGameEventBounce message. Does not implicitly {@link CClientMsg_CustomGameEventBounce.verify|verify} messages.
         * @function encode
         * @memberof CClientMsg_CustomGameEventBounce
         * @static
         * @param {ICClientMsg_CustomGameEventBounce} message CClientMsg_CustomGameEventBounce message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMsg_CustomGameEventBounce.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.event_name != null && Object.hasOwnProperty.call(message, "event_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.event_name);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            if (message.player_slot != null && Object.hasOwnProperty.call(message, "player_slot"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.player_slot);
            return writer;
        };
    
        /**
         * Encodes the specified CClientMsg_CustomGameEventBounce message, length delimited. Does not implicitly {@link CClientMsg_CustomGameEventBounce.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientMsg_CustomGameEventBounce
         * @static
         * @param {ICClientMsg_CustomGameEventBounce} message CClientMsg_CustomGameEventBounce message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMsg_CustomGameEventBounce.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientMsg_CustomGameEventBounce message from the specified reader or buffer.
         * @function decode
         * @memberof CClientMsg_CustomGameEventBounce
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientMsg_CustomGameEventBounce} CClientMsg_CustomGameEventBounce
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMsg_CustomGameEventBounce.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientMsg_CustomGameEventBounce();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.event_name = reader.string();
                        break;
                    }
                case 2: {
                        message.data = reader.bytes();
                        break;
                    }
                case 3: {
                        message.player_slot = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientMsg_CustomGameEventBounce message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientMsg_CustomGameEventBounce
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientMsg_CustomGameEventBounce} CClientMsg_CustomGameEventBounce
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMsg_CustomGameEventBounce.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientMsg_CustomGameEventBounce message.
         * @function verify
         * @memberof CClientMsg_CustomGameEventBounce
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientMsg_CustomGameEventBounce.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.event_name != null && message.hasOwnProperty("event_name"))
                if (!$util.isString(message.event_name))
                    return "event_name: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.player_slot != null && message.hasOwnProperty("player_slot"))
                if (!$util.isInteger(message.player_slot))
                    return "player_slot: integer expected";
            return null;
        };
    
        /**
         * Creates a CClientMsg_CustomGameEventBounce message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientMsg_CustomGameEventBounce
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientMsg_CustomGameEventBounce} CClientMsg_CustomGameEventBounce
         */
        CClientMsg_CustomGameEventBounce.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientMsg_CustomGameEventBounce)
                return object;
            var message = new $root.CClientMsg_CustomGameEventBounce();
            if (object.event_name != null)
                message.event_name = String(object.event_name);
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            if (object.player_slot != null)
                message.player_slot = object.player_slot | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CClientMsg_CustomGameEventBounce message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientMsg_CustomGameEventBounce
         * @static
         * @param {CClientMsg_CustomGameEventBounce} message CClientMsg_CustomGameEventBounce
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientMsg_CustomGameEventBounce.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.event_name = "";
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.player_slot = -1;
            }
            if (message.event_name != null && message.hasOwnProperty("event_name"))
                object.event_name = message.event_name;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.player_slot != null && message.hasOwnProperty("player_slot"))
                object.player_slot = message.player_slot;
            return object;
        };
    
        /**
         * Converts this CClientMsg_CustomGameEventBounce to JSON.
         * @function toJSON
         * @memberof CClientMsg_CustomGameEventBounce
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientMsg_CustomGameEventBounce.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CClientMsg_CustomGameEventBounce
         * @function getTypeUrl
         * @memberof CClientMsg_CustomGameEventBounce
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CClientMsg_CustomGameEventBounce.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CClientMsg_CustomGameEventBounce";
        };
    
        return CClientMsg_CustomGameEventBounce;
    })();
    
    $root.CClientMsg_ClientUIEvent = (function() {
    
        /**
         * Properties of a CClientMsg_ClientUIEvent.
         * @exports ICClientMsg_ClientUIEvent
         * @interface ICClientMsg_ClientUIEvent
         * @property {EClientUIEvent|null} [event] CClientMsg_ClientUIEvent event
         * @property {number|null} [ent_ehandle] CClientMsg_ClientUIEvent ent_ehandle
         * @property {number|null} [client_ehandle] CClientMsg_ClientUIEvent client_ehandle
         * @property {string|null} [data1] CClientMsg_ClientUIEvent data1
         * @property {string|null} [data2] CClientMsg_ClientUIEvent data2
         */
    
        /**
         * Constructs a new CClientMsg_ClientUIEvent.
         * @exports CClientMsg_ClientUIEvent
         * @classdesc Represents a CClientMsg_ClientUIEvent.
         * @implements ICClientMsg_ClientUIEvent
         * @constructor
         * @param {ICClientMsg_ClientUIEvent=} [properties] Properties to set
         */
        function CClientMsg_ClientUIEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientMsg_ClientUIEvent event.
         * @member {EClientUIEvent} event
         * @memberof CClientMsg_ClientUIEvent
         * @instance
         */
        CClientMsg_ClientUIEvent.prototype.event = 0;
    
        /**
         * CClientMsg_ClientUIEvent ent_ehandle.
         * @member {number} ent_ehandle
         * @memberof CClientMsg_ClientUIEvent
         * @instance
         */
        CClientMsg_ClientUIEvent.prototype.ent_ehandle = 0;
    
        /**
         * CClientMsg_ClientUIEvent client_ehandle.
         * @member {number} client_ehandle
         * @memberof CClientMsg_ClientUIEvent
         * @instance
         */
        CClientMsg_ClientUIEvent.prototype.client_ehandle = 0;
    
        /**
         * CClientMsg_ClientUIEvent data1.
         * @member {string} data1
         * @memberof CClientMsg_ClientUIEvent
         * @instance
         */
        CClientMsg_ClientUIEvent.prototype.data1 = "";
    
        /**
         * CClientMsg_ClientUIEvent data2.
         * @member {string} data2
         * @memberof CClientMsg_ClientUIEvent
         * @instance
         */
        CClientMsg_ClientUIEvent.prototype.data2 = "";
    
        /**
         * Creates a new CClientMsg_ClientUIEvent instance using the specified properties.
         * @function create
         * @memberof CClientMsg_ClientUIEvent
         * @static
         * @param {ICClientMsg_ClientUIEvent=} [properties] Properties to set
         * @returns {CClientMsg_ClientUIEvent} CClientMsg_ClientUIEvent instance
         */
        CClientMsg_ClientUIEvent.create = function create(properties) {
            return new CClientMsg_ClientUIEvent(properties);
        };
    
        /**
         * Encodes the specified CClientMsg_ClientUIEvent message. Does not implicitly {@link CClientMsg_ClientUIEvent.verify|verify} messages.
         * @function encode
         * @memberof CClientMsg_ClientUIEvent
         * @static
         * @param {ICClientMsg_ClientUIEvent} message CClientMsg_ClientUIEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMsg_ClientUIEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.event != null && Object.hasOwnProperty.call(message, "event"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.event);
            if (message.ent_ehandle != null && Object.hasOwnProperty.call(message, "ent_ehandle"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.ent_ehandle);
            if (message.client_ehandle != null && Object.hasOwnProperty.call(message, "client_ehandle"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.client_ehandle);
            if (message.data1 != null && Object.hasOwnProperty.call(message, "data1"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.data1);
            if (message.data2 != null && Object.hasOwnProperty.call(message, "data2"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.data2);
            return writer;
        };
    
        /**
         * Encodes the specified CClientMsg_ClientUIEvent message, length delimited. Does not implicitly {@link CClientMsg_ClientUIEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientMsg_ClientUIEvent
         * @static
         * @param {ICClientMsg_ClientUIEvent} message CClientMsg_ClientUIEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMsg_ClientUIEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientMsg_ClientUIEvent message from the specified reader or buffer.
         * @function decode
         * @memberof CClientMsg_ClientUIEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientMsg_ClientUIEvent} CClientMsg_ClientUIEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMsg_ClientUIEvent.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientMsg_ClientUIEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.event = reader.int32();
                        break;
                    }
                case 2: {
                        message.ent_ehandle = reader.uint32();
                        break;
                    }
                case 3: {
                        message.client_ehandle = reader.uint32();
                        break;
                    }
                case 4: {
                        message.data1 = reader.string();
                        break;
                    }
                case 5: {
                        message.data2 = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientMsg_ClientUIEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientMsg_ClientUIEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientMsg_ClientUIEvent} CClientMsg_ClientUIEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMsg_ClientUIEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientMsg_ClientUIEvent message.
         * @function verify
         * @memberof CClientMsg_ClientUIEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientMsg_ClientUIEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.event != null && message.hasOwnProperty("event"))
                switch (message.event) {
                default:
                    return "event: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.ent_ehandle != null && message.hasOwnProperty("ent_ehandle"))
                if (!$util.isInteger(message.ent_ehandle))
                    return "ent_ehandle: integer expected";
            if (message.client_ehandle != null && message.hasOwnProperty("client_ehandle"))
                if (!$util.isInteger(message.client_ehandle))
                    return "client_ehandle: integer expected";
            if (message.data1 != null && message.hasOwnProperty("data1"))
                if (!$util.isString(message.data1))
                    return "data1: string expected";
            if (message.data2 != null && message.hasOwnProperty("data2"))
                if (!$util.isString(message.data2))
                    return "data2: string expected";
            return null;
        };
    
        /**
         * Creates a CClientMsg_ClientUIEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientMsg_ClientUIEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientMsg_ClientUIEvent} CClientMsg_ClientUIEvent
         */
        CClientMsg_ClientUIEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientMsg_ClientUIEvent)
                return object;
            var message = new $root.CClientMsg_ClientUIEvent();
            switch (object.event) {
            default:
                if (typeof object.event === "number") {
                    message.event = object.event;
                    break;
                }
                break;
            case "EClientUIEvent_Invalid":
            case 0:
                message.event = 0;
                break;
            case "EClientUIEvent_DialogFinished":
            case 1:
                message.event = 1;
                break;
            case "EClientUIEvent_FireOutput":
            case 2:
                message.event = 2;
                break;
            }
            if (object.ent_ehandle != null)
                message.ent_ehandle = object.ent_ehandle >>> 0;
            if (object.client_ehandle != null)
                message.client_ehandle = object.client_ehandle >>> 0;
            if (object.data1 != null)
                message.data1 = String(object.data1);
            if (object.data2 != null)
                message.data2 = String(object.data2);
            return message;
        };
    
        /**
         * Creates a plain object from a CClientMsg_ClientUIEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientMsg_ClientUIEvent
         * @static
         * @param {CClientMsg_ClientUIEvent} message CClientMsg_ClientUIEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientMsg_ClientUIEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.event = options.enums === String ? "EClientUIEvent_Invalid" : 0;
                object.ent_ehandle = 0;
                object.client_ehandle = 0;
                object.data1 = "";
                object.data2 = "";
            }
            if (message.event != null && message.hasOwnProperty("event"))
                object.event = options.enums === String ? $root.EClientUIEvent[message.event] === undefined ? message.event : $root.EClientUIEvent[message.event] : message.event;
            if (message.ent_ehandle != null && message.hasOwnProperty("ent_ehandle"))
                object.ent_ehandle = message.ent_ehandle;
            if (message.client_ehandle != null && message.hasOwnProperty("client_ehandle"))
                object.client_ehandle = message.client_ehandle;
            if (message.data1 != null && message.hasOwnProperty("data1"))
                object.data1 = message.data1;
            if (message.data2 != null && message.hasOwnProperty("data2"))
                object.data2 = message.data2;
            return object;
        };
    
        /**
         * Converts this CClientMsg_ClientUIEvent to JSON.
         * @function toJSON
         * @memberof CClientMsg_ClientUIEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientMsg_ClientUIEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CClientMsg_ClientUIEvent
         * @function getTypeUrl
         * @memberof CClientMsg_ClientUIEvent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CClientMsg_ClientUIEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CClientMsg_ClientUIEvent";
        };
    
        return CClientMsg_ClientUIEvent;
    })();
    
    $root.CClientMsg_DevPaletteVisibilityChangedEvent = (function() {
    
        /**
         * Properties of a CClientMsg_DevPaletteVisibilityChangedEvent.
         * @exports ICClientMsg_DevPaletteVisibilityChangedEvent
         * @interface ICClientMsg_DevPaletteVisibilityChangedEvent
         * @property {boolean|null} [visible] CClientMsg_DevPaletteVisibilityChangedEvent visible
         */
    
        /**
         * Constructs a new CClientMsg_DevPaletteVisibilityChangedEvent.
         * @exports CClientMsg_DevPaletteVisibilityChangedEvent
         * @classdesc Represents a CClientMsg_DevPaletteVisibilityChangedEvent.
         * @implements ICClientMsg_DevPaletteVisibilityChangedEvent
         * @constructor
         * @param {ICClientMsg_DevPaletteVisibilityChangedEvent=} [properties] Properties to set
         */
        function CClientMsg_DevPaletteVisibilityChangedEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientMsg_DevPaletteVisibilityChangedEvent visible.
         * @member {boolean} visible
         * @memberof CClientMsg_DevPaletteVisibilityChangedEvent
         * @instance
         */
        CClientMsg_DevPaletteVisibilityChangedEvent.prototype.visible = false;
    
        /**
         * Creates a new CClientMsg_DevPaletteVisibilityChangedEvent instance using the specified properties.
         * @function create
         * @memberof CClientMsg_DevPaletteVisibilityChangedEvent
         * @static
         * @param {ICClientMsg_DevPaletteVisibilityChangedEvent=} [properties] Properties to set
         * @returns {CClientMsg_DevPaletteVisibilityChangedEvent} CClientMsg_DevPaletteVisibilityChangedEvent instance
         */
        CClientMsg_DevPaletteVisibilityChangedEvent.create = function create(properties) {
            return new CClientMsg_DevPaletteVisibilityChangedEvent(properties);
        };
    
        /**
         * Encodes the specified CClientMsg_DevPaletteVisibilityChangedEvent message. Does not implicitly {@link CClientMsg_DevPaletteVisibilityChangedEvent.verify|verify} messages.
         * @function encode
         * @memberof CClientMsg_DevPaletteVisibilityChangedEvent
         * @static
         * @param {ICClientMsg_DevPaletteVisibilityChangedEvent} message CClientMsg_DevPaletteVisibilityChangedEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMsg_DevPaletteVisibilityChangedEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.visible != null && Object.hasOwnProperty.call(message, "visible"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.visible);
            return writer;
        };
    
        /**
         * Encodes the specified CClientMsg_DevPaletteVisibilityChangedEvent message, length delimited. Does not implicitly {@link CClientMsg_DevPaletteVisibilityChangedEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientMsg_DevPaletteVisibilityChangedEvent
         * @static
         * @param {ICClientMsg_DevPaletteVisibilityChangedEvent} message CClientMsg_DevPaletteVisibilityChangedEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMsg_DevPaletteVisibilityChangedEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientMsg_DevPaletteVisibilityChangedEvent message from the specified reader or buffer.
         * @function decode
         * @memberof CClientMsg_DevPaletteVisibilityChangedEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientMsg_DevPaletteVisibilityChangedEvent} CClientMsg_DevPaletteVisibilityChangedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMsg_DevPaletteVisibilityChangedEvent.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientMsg_DevPaletteVisibilityChangedEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.visible = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientMsg_DevPaletteVisibilityChangedEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientMsg_DevPaletteVisibilityChangedEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientMsg_DevPaletteVisibilityChangedEvent} CClientMsg_DevPaletteVisibilityChangedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMsg_DevPaletteVisibilityChangedEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientMsg_DevPaletteVisibilityChangedEvent message.
         * @function verify
         * @memberof CClientMsg_DevPaletteVisibilityChangedEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientMsg_DevPaletteVisibilityChangedEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.visible != null && message.hasOwnProperty("visible"))
                if (typeof message.visible !== "boolean")
                    return "visible: boolean expected";
            return null;
        };
    
        /**
         * Creates a CClientMsg_DevPaletteVisibilityChangedEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientMsg_DevPaletteVisibilityChangedEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientMsg_DevPaletteVisibilityChangedEvent} CClientMsg_DevPaletteVisibilityChangedEvent
         */
        CClientMsg_DevPaletteVisibilityChangedEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientMsg_DevPaletteVisibilityChangedEvent)
                return object;
            var message = new $root.CClientMsg_DevPaletteVisibilityChangedEvent();
            if (object.visible != null)
                message.visible = Boolean(object.visible);
            return message;
        };
    
        /**
         * Creates a plain object from a CClientMsg_DevPaletteVisibilityChangedEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientMsg_DevPaletteVisibilityChangedEvent
         * @static
         * @param {CClientMsg_DevPaletteVisibilityChangedEvent} message CClientMsg_DevPaletteVisibilityChangedEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientMsg_DevPaletteVisibilityChangedEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.visible = false;
            if (message.visible != null && message.hasOwnProperty("visible"))
                object.visible = message.visible;
            return object;
        };
    
        /**
         * Converts this CClientMsg_DevPaletteVisibilityChangedEvent to JSON.
         * @function toJSON
         * @memberof CClientMsg_DevPaletteVisibilityChangedEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientMsg_DevPaletteVisibilityChangedEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CClientMsg_DevPaletteVisibilityChangedEvent
         * @function getTypeUrl
         * @memberof CClientMsg_DevPaletteVisibilityChangedEvent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CClientMsg_DevPaletteVisibilityChangedEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CClientMsg_DevPaletteVisibilityChangedEvent";
        };
    
        return CClientMsg_DevPaletteVisibilityChangedEvent;
    })();
    
    $root.CClientMsg_WorldUIControllerHasPanelChangedEvent = (function() {
    
        /**
         * Properties of a CClientMsg_WorldUIControllerHasPanelChangedEvent.
         * @exports ICClientMsg_WorldUIControllerHasPanelChangedEvent
         * @interface ICClientMsg_WorldUIControllerHasPanelChangedEvent
         * @property {boolean|null} [has_panel] CClientMsg_WorldUIControllerHasPanelChangedEvent has_panel
         * @property {number|null} [client_ehandle] CClientMsg_WorldUIControllerHasPanelChangedEvent client_ehandle
         * @property {number|null} [literal_hand_type] CClientMsg_WorldUIControllerHasPanelChangedEvent literal_hand_type
         */
    
        /**
         * Constructs a new CClientMsg_WorldUIControllerHasPanelChangedEvent.
         * @exports CClientMsg_WorldUIControllerHasPanelChangedEvent
         * @classdesc Represents a CClientMsg_WorldUIControllerHasPanelChangedEvent.
         * @implements ICClientMsg_WorldUIControllerHasPanelChangedEvent
         * @constructor
         * @param {ICClientMsg_WorldUIControllerHasPanelChangedEvent=} [properties] Properties to set
         */
        function CClientMsg_WorldUIControllerHasPanelChangedEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientMsg_WorldUIControllerHasPanelChangedEvent has_panel.
         * @member {boolean} has_panel
         * @memberof CClientMsg_WorldUIControllerHasPanelChangedEvent
         * @instance
         */
        CClientMsg_WorldUIControllerHasPanelChangedEvent.prototype.has_panel = false;
    
        /**
         * CClientMsg_WorldUIControllerHasPanelChangedEvent client_ehandle.
         * @member {number} client_ehandle
         * @memberof CClientMsg_WorldUIControllerHasPanelChangedEvent
         * @instance
         */
        CClientMsg_WorldUIControllerHasPanelChangedEvent.prototype.client_ehandle = 0;
    
        /**
         * CClientMsg_WorldUIControllerHasPanelChangedEvent literal_hand_type.
         * @member {number} literal_hand_type
         * @memberof CClientMsg_WorldUIControllerHasPanelChangedEvent
         * @instance
         */
        CClientMsg_WorldUIControllerHasPanelChangedEvent.prototype.literal_hand_type = 0;
    
        /**
         * Creates a new CClientMsg_WorldUIControllerHasPanelChangedEvent instance using the specified properties.
         * @function create
         * @memberof CClientMsg_WorldUIControllerHasPanelChangedEvent
         * @static
         * @param {ICClientMsg_WorldUIControllerHasPanelChangedEvent=} [properties] Properties to set
         * @returns {CClientMsg_WorldUIControllerHasPanelChangedEvent} CClientMsg_WorldUIControllerHasPanelChangedEvent instance
         */
        CClientMsg_WorldUIControllerHasPanelChangedEvent.create = function create(properties) {
            return new CClientMsg_WorldUIControllerHasPanelChangedEvent(properties);
        };
    
        /**
         * Encodes the specified CClientMsg_WorldUIControllerHasPanelChangedEvent message. Does not implicitly {@link CClientMsg_WorldUIControllerHasPanelChangedEvent.verify|verify} messages.
         * @function encode
         * @memberof CClientMsg_WorldUIControllerHasPanelChangedEvent
         * @static
         * @param {ICClientMsg_WorldUIControllerHasPanelChangedEvent} message CClientMsg_WorldUIControllerHasPanelChangedEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMsg_WorldUIControllerHasPanelChangedEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.has_panel != null && Object.hasOwnProperty.call(message, "has_panel"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.has_panel);
            if (message.client_ehandle != null && Object.hasOwnProperty.call(message, "client_ehandle"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.client_ehandle);
            if (message.literal_hand_type != null && Object.hasOwnProperty.call(message, "literal_hand_type"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.literal_hand_type);
            return writer;
        };
    
        /**
         * Encodes the specified CClientMsg_WorldUIControllerHasPanelChangedEvent message, length delimited. Does not implicitly {@link CClientMsg_WorldUIControllerHasPanelChangedEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientMsg_WorldUIControllerHasPanelChangedEvent
         * @static
         * @param {ICClientMsg_WorldUIControllerHasPanelChangedEvent} message CClientMsg_WorldUIControllerHasPanelChangedEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMsg_WorldUIControllerHasPanelChangedEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientMsg_WorldUIControllerHasPanelChangedEvent message from the specified reader or buffer.
         * @function decode
         * @memberof CClientMsg_WorldUIControllerHasPanelChangedEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientMsg_WorldUIControllerHasPanelChangedEvent} CClientMsg_WorldUIControllerHasPanelChangedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMsg_WorldUIControllerHasPanelChangedEvent.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientMsg_WorldUIControllerHasPanelChangedEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.has_panel = reader.bool();
                        break;
                    }
                case 2: {
                        message.client_ehandle = reader.uint32();
                        break;
                    }
                case 3: {
                        message.literal_hand_type = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientMsg_WorldUIControllerHasPanelChangedEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientMsg_WorldUIControllerHasPanelChangedEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientMsg_WorldUIControllerHasPanelChangedEvent} CClientMsg_WorldUIControllerHasPanelChangedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMsg_WorldUIControllerHasPanelChangedEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientMsg_WorldUIControllerHasPanelChangedEvent message.
         * @function verify
         * @memberof CClientMsg_WorldUIControllerHasPanelChangedEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientMsg_WorldUIControllerHasPanelChangedEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.has_panel != null && message.hasOwnProperty("has_panel"))
                if (typeof message.has_panel !== "boolean")
                    return "has_panel: boolean expected";
            if (message.client_ehandle != null && message.hasOwnProperty("client_ehandle"))
                if (!$util.isInteger(message.client_ehandle))
                    return "client_ehandle: integer expected";
            if (message.literal_hand_type != null && message.hasOwnProperty("literal_hand_type"))
                if (!$util.isInteger(message.literal_hand_type))
                    return "literal_hand_type: integer expected";
            return null;
        };
    
        /**
         * Creates a CClientMsg_WorldUIControllerHasPanelChangedEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientMsg_WorldUIControllerHasPanelChangedEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientMsg_WorldUIControllerHasPanelChangedEvent} CClientMsg_WorldUIControllerHasPanelChangedEvent
         */
        CClientMsg_WorldUIControllerHasPanelChangedEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientMsg_WorldUIControllerHasPanelChangedEvent)
                return object;
            var message = new $root.CClientMsg_WorldUIControllerHasPanelChangedEvent();
            if (object.has_panel != null)
                message.has_panel = Boolean(object.has_panel);
            if (object.client_ehandle != null)
                message.client_ehandle = object.client_ehandle >>> 0;
            if (object.literal_hand_type != null)
                message.literal_hand_type = object.literal_hand_type >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CClientMsg_WorldUIControllerHasPanelChangedEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientMsg_WorldUIControllerHasPanelChangedEvent
         * @static
         * @param {CClientMsg_WorldUIControllerHasPanelChangedEvent} message CClientMsg_WorldUIControllerHasPanelChangedEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientMsg_WorldUIControllerHasPanelChangedEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.has_panel = false;
                object.client_ehandle = 0;
                object.literal_hand_type = 0;
            }
            if (message.has_panel != null && message.hasOwnProperty("has_panel"))
                object.has_panel = message.has_panel;
            if (message.client_ehandle != null && message.hasOwnProperty("client_ehandle"))
                object.client_ehandle = message.client_ehandle;
            if (message.literal_hand_type != null && message.hasOwnProperty("literal_hand_type"))
                object.literal_hand_type = message.literal_hand_type;
            return object;
        };
    
        /**
         * Converts this CClientMsg_WorldUIControllerHasPanelChangedEvent to JSON.
         * @function toJSON
         * @memberof CClientMsg_WorldUIControllerHasPanelChangedEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientMsg_WorldUIControllerHasPanelChangedEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CClientMsg_WorldUIControllerHasPanelChangedEvent
         * @function getTypeUrl
         * @memberof CClientMsg_WorldUIControllerHasPanelChangedEvent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CClientMsg_WorldUIControllerHasPanelChangedEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CClientMsg_WorldUIControllerHasPanelChangedEvent";
        };
    
        return CClientMsg_WorldUIControllerHasPanelChangedEvent;
    })();
    
    $root.CClientMsg_RotateAnchor = (function() {
    
        /**
         * Properties of a CClientMsg_RotateAnchor.
         * @exports ICClientMsg_RotateAnchor
         * @interface ICClientMsg_RotateAnchor
         * @property {number|null} [angle] CClientMsg_RotateAnchor angle
         */
    
        /**
         * Constructs a new CClientMsg_RotateAnchor.
         * @exports CClientMsg_RotateAnchor
         * @classdesc Represents a CClientMsg_RotateAnchor.
         * @implements ICClientMsg_RotateAnchor
         * @constructor
         * @param {ICClientMsg_RotateAnchor=} [properties] Properties to set
         */
        function CClientMsg_RotateAnchor(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientMsg_RotateAnchor angle.
         * @member {number} angle
         * @memberof CClientMsg_RotateAnchor
         * @instance
         */
        CClientMsg_RotateAnchor.prototype.angle = 0;
    
        /**
         * Creates a new CClientMsg_RotateAnchor instance using the specified properties.
         * @function create
         * @memberof CClientMsg_RotateAnchor
         * @static
         * @param {ICClientMsg_RotateAnchor=} [properties] Properties to set
         * @returns {CClientMsg_RotateAnchor} CClientMsg_RotateAnchor instance
         */
        CClientMsg_RotateAnchor.create = function create(properties) {
            return new CClientMsg_RotateAnchor(properties);
        };
    
        /**
         * Encodes the specified CClientMsg_RotateAnchor message. Does not implicitly {@link CClientMsg_RotateAnchor.verify|verify} messages.
         * @function encode
         * @memberof CClientMsg_RotateAnchor
         * @static
         * @param {ICClientMsg_RotateAnchor} message CClientMsg_RotateAnchor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMsg_RotateAnchor.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.angle != null && Object.hasOwnProperty.call(message, "angle"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.angle);
            return writer;
        };
    
        /**
         * Encodes the specified CClientMsg_RotateAnchor message, length delimited. Does not implicitly {@link CClientMsg_RotateAnchor.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientMsg_RotateAnchor
         * @static
         * @param {ICClientMsg_RotateAnchor} message CClientMsg_RotateAnchor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMsg_RotateAnchor.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientMsg_RotateAnchor message from the specified reader or buffer.
         * @function decode
         * @memberof CClientMsg_RotateAnchor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientMsg_RotateAnchor} CClientMsg_RotateAnchor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMsg_RotateAnchor.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientMsg_RotateAnchor();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.angle = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientMsg_RotateAnchor message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientMsg_RotateAnchor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientMsg_RotateAnchor} CClientMsg_RotateAnchor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMsg_RotateAnchor.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientMsg_RotateAnchor message.
         * @function verify
         * @memberof CClientMsg_RotateAnchor
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientMsg_RotateAnchor.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.angle != null && message.hasOwnProperty("angle"))
                if (typeof message.angle !== "number")
                    return "angle: number expected";
            return null;
        };
    
        /**
         * Creates a CClientMsg_RotateAnchor message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientMsg_RotateAnchor
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientMsg_RotateAnchor} CClientMsg_RotateAnchor
         */
        CClientMsg_RotateAnchor.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientMsg_RotateAnchor)
                return object;
            var message = new $root.CClientMsg_RotateAnchor();
            if (object.angle != null)
                message.angle = Number(object.angle);
            return message;
        };
    
        /**
         * Creates a plain object from a CClientMsg_RotateAnchor message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientMsg_RotateAnchor
         * @static
         * @param {CClientMsg_RotateAnchor} message CClientMsg_RotateAnchor
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientMsg_RotateAnchor.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.angle = 0;
            if (message.angle != null && message.hasOwnProperty("angle"))
                object.angle = options.json && !isFinite(message.angle) ? String(message.angle) : message.angle;
            return object;
        };
    
        /**
         * Converts this CClientMsg_RotateAnchor to JSON.
         * @function toJSON
         * @memberof CClientMsg_RotateAnchor
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientMsg_RotateAnchor.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CClientMsg_RotateAnchor
         * @function getTypeUrl
         * @memberof CClientMsg_RotateAnchor
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CClientMsg_RotateAnchor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CClientMsg_RotateAnchor";
        };
    
        return CClientMsg_RotateAnchor;
    })();
    
    $root.CClientMsg_ListenForResponseFound = (function() {
    
        /**
         * Properties of a CClientMsg_ListenForResponseFound.
         * @exports ICClientMsg_ListenForResponseFound
         * @interface ICClientMsg_ListenForResponseFound
         * @property {number|null} [player_slot] CClientMsg_ListenForResponseFound player_slot
         */
    
        /**
         * Constructs a new CClientMsg_ListenForResponseFound.
         * @exports CClientMsg_ListenForResponseFound
         * @classdesc Represents a CClientMsg_ListenForResponseFound.
         * @implements ICClientMsg_ListenForResponseFound
         * @constructor
         * @param {ICClientMsg_ListenForResponseFound=} [properties] Properties to set
         */
        function CClientMsg_ListenForResponseFound(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientMsg_ListenForResponseFound player_slot.
         * @member {number} player_slot
         * @memberof CClientMsg_ListenForResponseFound
         * @instance
         */
        CClientMsg_ListenForResponseFound.prototype.player_slot = -1;
    
        /**
         * Creates a new CClientMsg_ListenForResponseFound instance using the specified properties.
         * @function create
         * @memberof CClientMsg_ListenForResponseFound
         * @static
         * @param {ICClientMsg_ListenForResponseFound=} [properties] Properties to set
         * @returns {CClientMsg_ListenForResponseFound} CClientMsg_ListenForResponseFound instance
         */
        CClientMsg_ListenForResponseFound.create = function create(properties) {
            return new CClientMsg_ListenForResponseFound(properties);
        };
    
        /**
         * Encodes the specified CClientMsg_ListenForResponseFound message. Does not implicitly {@link CClientMsg_ListenForResponseFound.verify|verify} messages.
         * @function encode
         * @memberof CClientMsg_ListenForResponseFound
         * @static
         * @param {ICClientMsg_ListenForResponseFound} message CClientMsg_ListenForResponseFound message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMsg_ListenForResponseFound.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player_slot != null && Object.hasOwnProperty.call(message, "player_slot"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.player_slot);
            return writer;
        };
    
        /**
         * Encodes the specified CClientMsg_ListenForResponseFound message, length delimited. Does not implicitly {@link CClientMsg_ListenForResponseFound.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientMsg_ListenForResponseFound
         * @static
         * @param {ICClientMsg_ListenForResponseFound} message CClientMsg_ListenForResponseFound message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMsg_ListenForResponseFound.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientMsg_ListenForResponseFound message from the specified reader or buffer.
         * @function decode
         * @memberof CClientMsg_ListenForResponseFound
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientMsg_ListenForResponseFound} CClientMsg_ListenForResponseFound
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMsg_ListenForResponseFound.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientMsg_ListenForResponseFound();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.player_slot = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientMsg_ListenForResponseFound message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientMsg_ListenForResponseFound
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientMsg_ListenForResponseFound} CClientMsg_ListenForResponseFound
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMsg_ListenForResponseFound.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientMsg_ListenForResponseFound message.
         * @function verify
         * @memberof CClientMsg_ListenForResponseFound
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientMsg_ListenForResponseFound.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.player_slot != null && message.hasOwnProperty("player_slot"))
                if (!$util.isInteger(message.player_slot))
                    return "player_slot: integer expected";
            return null;
        };
    
        /**
         * Creates a CClientMsg_ListenForResponseFound message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientMsg_ListenForResponseFound
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientMsg_ListenForResponseFound} CClientMsg_ListenForResponseFound
         */
        CClientMsg_ListenForResponseFound.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientMsg_ListenForResponseFound)
                return object;
            var message = new $root.CClientMsg_ListenForResponseFound();
            if (object.player_slot != null)
                message.player_slot = object.player_slot | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CClientMsg_ListenForResponseFound message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientMsg_ListenForResponseFound
         * @static
         * @param {CClientMsg_ListenForResponseFound} message CClientMsg_ListenForResponseFound
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientMsg_ListenForResponseFound.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.player_slot = -1;
            if (message.player_slot != null && message.hasOwnProperty("player_slot"))
                object.player_slot = message.player_slot;
            return object;
        };
    
        /**
         * Converts this CClientMsg_ListenForResponseFound to JSON.
         * @function toJSON
         * @memberof CClientMsg_ListenForResponseFound
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientMsg_ListenForResponseFound.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CClientMsg_ListenForResponseFound
         * @function getTypeUrl
         * @memberof CClientMsg_ListenForResponseFound
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CClientMsg_ListenForResponseFound.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CClientMsg_ListenForResponseFound";
        };
    
        return CClientMsg_ListenForResponseFound;
    })();

    return $root;
});
