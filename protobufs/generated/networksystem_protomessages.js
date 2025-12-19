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
    
    $root.NetMessageSplitscreenUserChanged = (function() {
    
        /**
         * Properties of a NetMessageSplitscreenUserChanged.
         * @exports INetMessageSplitscreenUserChanged
         * @interface INetMessageSplitscreenUserChanged
         * @property {number|null} [slot] NetMessageSplitscreenUserChanged slot
         */
    
        /**
         * Constructs a new NetMessageSplitscreenUserChanged.
         * @exports NetMessageSplitscreenUserChanged
         * @classdesc Represents a NetMessageSplitscreenUserChanged.
         * @implements INetMessageSplitscreenUserChanged
         * @constructor
         * @param {INetMessageSplitscreenUserChanged=} [properties] Properties to set
         */
        function NetMessageSplitscreenUserChanged(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * NetMessageSplitscreenUserChanged slot.
         * @member {number} slot
         * @memberof NetMessageSplitscreenUserChanged
         * @instance
         */
        NetMessageSplitscreenUserChanged.prototype.slot = 0;
    
        /**
         * Creates a new NetMessageSplitscreenUserChanged instance using the specified properties.
         * @function create
         * @memberof NetMessageSplitscreenUserChanged
         * @static
         * @param {INetMessageSplitscreenUserChanged=} [properties] Properties to set
         * @returns {NetMessageSplitscreenUserChanged} NetMessageSplitscreenUserChanged instance
         */
        NetMessageSplitscreenUserChanged.create = function create(properties) {
            return new NetMessageSplitscreenUserChanged(properties);
        };
    
        /**
         * Encodes the specified NetMessageSplitscreenUserChanged message. Does not implicitly {@link NetMessageSplitscreenUserChanged.verify|verify} messages.
         * @function encode
         * @memberof NetMessageSplitscreenUserChanged
         * @static
         * @param {INetMessageSplitscreenUserChanged} message NetMessageSplitscreenUserChanged message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetMessageSplitscreenUserChanged.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.slot != null && Object.hasOwnProperty.call(message, "slot"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.slot);
            return writer;
        };
    
        /**
         * Encodes the specified NetMessageSplitscreenUserChanged message, length delimited. Does not implicitly {@link NetMessageSplitscreenUserChanged.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NetMessageSplitscreenUserChanged
         * @static
         * @param {INetMessageSplitscreenUserChanged} message NetMessageSplitscreenUserChanged message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetMessageSplitscreenUserChanged.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a NetMessageSplitscreenUserChanged message from the specified reader or buffer.
         * @function decode
         * @memberof NetMessageSplitscreenUserChanged
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NetMessageSplitscreenUserChanged} NetMessageSplitscreenUserChanged
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetMessageSplitscreenUserChanged.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NetMessageSplitscreenUserChanged();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.slot = reader.uint32();
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
         * Decodes a NetMessageSplitscreenUserChanged message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NetMessageSplitscreenUserChanged
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NetMessageSplitscreenUserChanged} NetMessageSplitscreenUserChanged
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetMessageSplitscreenUserChanged.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a NetMessageSplitscreenUserChanged message.
         * @function verify
         * @memberof NetMessageSplitscreenUserChanged
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NetMessageSplitscreenUserChanged.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.slot != null && message.hasOwnProperty("slot"))
                if (!$util.isInteger(message.slot))
                    return "slot: integer expected";
            return null;
        };
    
        /**
         * Creates a NetMessageSplitscreenUserChanged message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NetMessageSplitscreenUserChanged
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NetMessageSplitscreenUserChanged} NetMessageSplitscreenUserChanged
         */
        NetMessageSplitscreenUserChanged.fromObject = function fromObject(object) {
            if (object instanceof $root.NetMessageSplitscreenUserChanged)
                return object;
            var message = new $root.NetMessageSplitscreenUserChanged();
            if (object.slot != null)
                message.slot = object.slot >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a NetMessageSplitscreenUserChanged message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NetMessageSplitscreenUserChanged
         * @static
         * @param {NetMessageSplitscreenUserChanged} message NetMessageSplitscreenUserChanged
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NetMessageSplitscreenUserChanged.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.slot = 0;
            if (message.slot != null && message.hasOwnProperty("slot"))
                object.slot = message.slot;
            return object;
        };
    
        /**
         * Converts this NetMessageSplitscreenUserChanged to JSON.
         * @function toJSON
         * @memberof NetMessageSplitscreenUserChanged
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NetMessageSplitscreenUserChanged.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for NetMessageSplitscreenUserChanged
         * @function getTypeUrl
         * @memberof NetMessageSplitscreenUserChanged
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NetMessageSplitscreenUserChanged.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NetMessageSplitscreenUserChanged";
        };
    
        return NetMessageSplitscreenUserChanged;
    })();
    
    $root.NetMessageConnectionClosed = (function() {
    
        /**
         * Properties of a NetMessageConnectionClosed.
         * @exports INetMessageConnectionClosed
         * @interface INetMessageConnectionClosed
         * @property {number|null} [reason] NetMessageConnectionClosed reason
         * @property {string|null} [message] NetMessageConnectionClosed message
         */
    
        /**
         * Constructs a new NetMessageConnectionClosed.
         * @exports NetMessageConnectionClosed
         * @classdesc Represents a NetMessageConnectionClosed.
         * @implements INetMessageConnectionClosed
         * @constructor
         * @param {INetMessageConnectionClosed=} [properties] Properties to set
         */
        function NetMessageConnectionClosed(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * NetMessageConnectionClosed reason.
         * @member {number} reason
         * @memberof NetMessageConnectionClosed
         * @instance
         */
        NetMessageConnectionClosed.prototype.reason = 0;
    
        /**
         * NetMessageConnectionClosed message.
         * @member {string} message
         * @memberof NetMessageConnectionClosed
         * @instance
         */
        NetMessageConnectionClosed.prototype.message = "";
    
        /**
         * Creates a new NetMessageConnectionClosed instance using the specified properties.
         * @function create
         * @memberof NetMessageConnectionClosed
         * @static
         * @param {INetMessageConnectionClosed=} [properties] Properties to set
         * @returns {NetMessageConnectionClosed} NetMessageConnectionClosed instance
         */
        NetMessageConnectionClosed.create = function create(properties) {
            return new NetMessageConnectionClosed(properties);
        };
    
        /**
         * Encodes the specified NetMessageConnectionClosed message. Does not implicitly {@link NetMessageConnectionClosed.verify|verify} messages.
         * @function encode
         * @memberof NetMessageConnectionClosed
         * @static
         * @param {INetMessageConnectionClosed} message NetMessageConnectionClosed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetMessageConnectionClosed.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.reason);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified NetMessageConnectionClosed message, length delimited. Does not implicitly {@link NetMessageConnectionClosed.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NetMessageConnectionClosed
         * @static
         * @param {INetMessageConnectionClosed} message NetMessageConnectionClosed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetMessageConnectionClosed.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a NetMessageConnectionClosed message from the specified reader or buffer.
         * @function decode
         * @memberof NetMessageConnectionClosed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NetMessageConnectionClosed} NetMessageConnectionClosed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetMessageConnectionClosed.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NetMessageConnectionClosed();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.reason = reader.uint32();
                        break;
                    }
                case 2: {
                        message.message = reader.string();
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
         * Decodes a NetMessageConnectionClosed message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NetMessageConnectionClosed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NetMessageConnectionClosed} NetMessageConnectionClosed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetMessageConnectionClosed.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a NetMessageConnectionClosed message.
         * @function verify
         * @memberof NetMessageConnectionClosed
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NetMessageConnectionClosed.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isInteger(message.reason))
                    return "reason: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };
    
        /**
         * Creates a NetMessageConnectionClosed message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NetMessageConnectionClosed
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NetMessageConnectionClosed} NetMessageConnectionClosed
         */
        NetMessageConnectionClosed.fromObject = function fromObject(object) {
            if (object instanceof $root.NetMessageConnectionClosed)
                return object;
            var message = new $root.NetMessageConnectionClosed();
            if (object.reason != null)
                message.reason = object.reason >>> 0;
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };
    
        /**
         * Creates a plain object from a NetMessageConnectionClosed message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NetMessageConnectionClosed
         * @static
         * @param {NetMessageConnectionClosed} message NetMessageConnectionClosed
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NetMessageConnectionClosed.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.reason = 0;
                object.message = "";
            }
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };
    
        /**
         * Converts this NetMessageConnectionClosed to JSON.
         * @function toJSON
         * @memberof NetMessageConnectionClosed
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NetMessageConnectionClosed.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for NetMessageConnectionClosed
         * @function getTypeUrl
         * @memberof NetMessageConnectionClosed
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NetMessageConnectionClosed.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NetMessageConnectionClosed";
        };
    
        return NetMessageConnectionClosed;
    })();
    
    $root.NetMessageConnectionCrashed = (function() {
    
        /**
         * Properties of a NetMessageConnectionCrashed.
         * @exports INetMessageConnectionCrashed
         * @interface INetMessageConnectionCrashed
         * @property {number|null} [reason] NetMessageConnectionCrashed reason
         * @property {string|null} [message] NetMessageConnectionCrashed message
         */
    
        /**
         * Constructs a new NetMessageConnectionCrashed.
         * @exports NetMessageConnectionCrashed
         * @classdesc Represents a NetMessageConnectionCrashed.
         * @implements INetMessageConnectionCrashed
         * @constructor
         * @param {INetMessageConnectionCrashed=} [properties] Properties to set
         */
        function NetMessageConnectionCrashed(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * NetMessageConnectionCrashed reason.
         * @member {number} reason
         * @memberof NetMessageConnectionCrashed
         * @instance
         */
        NetMessageConnectionCrashed.prototype.reason = 0;
    
        /**
         * NetMessageConnectionCrashed message.
         * @member {string} message
         * @memberof NetMessageConnectionCrashed
         * @instance
         */
        NetMessageConnectionCrashed.prototype.message = "";
    
        /**
         * Creates a new NetMessageConnectionCrashed instance using the specified properties.
         * @function create
         * @memberof NetMessageConnectionCrashed
         * @static
         * @param {INetMessageConnectionCrashed=} [properties] Properties to set
         * @returns {NetMessageConnectionCrashed} NetMessageConnectionCrashed instance
         */
        NetMessageConnectionCrashed.create = function create(properties) {
            return new NetMessageConnectionCrashed(properties);
        };
    
        /**
         * Encodes the specified NetMessageConnectionCrashed message. Does not implicitly {@link NetMessageConnectionCrashed.verify|verify} messages.
         * @function encode
         * @memberof NetMessageConnectionCrashed
         * @static
         * @param {INetMessageConnectionCrashed} message NetMessageConnectionCrashed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetMessageConnectionCrashed.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.reason);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified NetMessageConnectionCrashed message, length delimited. Does not implicitly {@link NetMessageConnectionCrashed.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NetMessageConnectionCrashed
         * @static
         * @param {INetMessageConnectionCrashed} message NetMessageConnectionCrashed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetMessageConnectionCrashed.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a NetMessageConnectionCrashed message from the specified reader or buffer.
         * @function decode
         * @memberof NetMessageConnectionCrashed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NetMessageConnectionCrashed} NetMessageConnectionCrashed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetMessageConnectionCrashed.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NetMessageConnectionCrashed();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.reason = reader.uint32();
                        break;
                    }
                case 2: {
                        message.message = reader.string();
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
         * Decodes a NetMessageConnectionCrashed message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NetMessageConnectionCrashed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NetMessageConnectionCrashed} NetMessageConnectionCrashed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetMessageConnectionCrashed.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a NetMessageConnectionCrashed message.
         * @function verify
         * @memberof NetMessageConnectionCrashed
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NetMessageConnectionCrashed.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isInteger(message.reason))
                    return "reason: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };
    
        /**
         * Creates a NetMessageConnectionCrashed message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NetMessageConnectionCrashed
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NetMessageConnectionCrashed} NetMessageConnectionCrashed
         */
        NetMessageConnectionCrashed.fromObject = function fromObject(object) {
            if (object instanceof $root.NetMessageConnectionCrashed)
                return object;
            var message = new $root.NetMessageConnectionCrashed();
            if (object.reason != null)
                message.reason = object.reason >>> 0;
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };
    
        /**
         * Creates a plain object from a NetMessageConnectionCrashed message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NetMessageConnectionCrashed
         * @static
         * @param {NetMessageConnectionCrashed} message NetMessageConnectionCrashed
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NetMessageConnectionCrashed.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.reason = 0;
                object.message = "";
            }
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };
    
        /**
         * Converts this NetMessageConnectionCrashed to JSON.
         * @function toJSON
         * @memberof NetMessageConnectionCrashed
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NetMessageConnectionCrashed.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for NetMessageConnectionCrashed
         * @function getTypeUrl
         * @memberof NetMessageConnectionCrashed
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NetMessageConnectionCrashed.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NetMessageConnectionCrashed";
        };
    
        return NetMessageConnectionCrashed;
    })();
    
    $root.NetMessagePacketStart = (function() {
    
        /**
         * Properties of a NetMessagePacketStart.
         * @exports INetMessagePacketStart
         * @interface INetMessagePacketStart
         */
    
        /**
         * Constructs a new NetMessagePacketStart.
         * @exports NetMessagePacketStart
         * @classdesc Represents a NetMessagePacketStart.
         * @implements INetMessagePacketStart
         * @constructor
         * @param {INetMessagePacketStart=} [properties] Properties to set
         */
        function NetMessagePacketStart(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new NetMessagePacketStart instance using the specified properties.
         * @function create
         * @memberof NetMessagePacketStart
         * @static
         * @param {INetMessagePacketStart=} [properties] Properties to set
         * @returns {NetMessagePacketStart} NetMessagePacketStart instance
         */
        NetMessagePacketStart.create = function create(properties) {
            return new NetMessagePacketStart(properties);
        };
    
        /**
         * Encodes the specified NetMessagePacketStart message. Does not implicitly {@link NetMessagePacketStart.verify|verify} messages.
         * @function encode
         * @memberof NetMessagePacketStart
         * @static
         * @param {INetMessagePacketStart} message NetMessagePacketStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetMessagePacketStart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified NetMessagePacketStart message, length delimited. Does not implicitly {@link NetMessagePacketStart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NetMessagePacketStart
         * @static
         * @param {INetMessagePacketStart} message NetMessagePacketStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetMessagePacketStart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a NetMessagePacketStart message from the specified reader or buffer.
         * @function decode
         * @memberof NetMessagePacketStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NetMessagePacketStart} NetMessagePacketStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetMessagePacketStart.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NetMessagePacketStart();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a NetMessagePacketStart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NetMessagePacketStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NetMessagePacketStart} NetMessagePacketStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetMessagePacketStart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a NetMessagePacketStart message.
         * @function verify
         * @memberof NetMessagePacketStart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NetMessagePacketStart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a NetMessagePacketStart message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NetMessagePacketStart
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NetMessagePacketStart} NetMessagePacketStart
         */
        NetMessagePacketStart.fromObject = function fromObject(object) {
            if (object instanceof $root.NetMessagePacketStart)
                return object;
            return new $root.NetMessagePacketStart();
        };
    
        /**
         * Creates a plain object from a NetMessagePacketStart message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NetMessagePacketStart
         * @static
         * @param {NetMessagePacketStart} message NetMessagePacketStart
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NetMessagePacketStart.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this NetMessagePacketStart to JSON.
         * @function toJSON
         * @memberof NetMessagePacketStart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NetMessagePacketStart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for NetMessagePacketStart
         * @function getTypeUrl
         * @memberof NetMessagePacketStart
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NetMessagePacketStart.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NetMessagePacketStart";
        };
    
        return NetMessagePacketStart;
    })();
    
    $root.NetMessagePacketEnd = (function() {
    
        /**
         * Properties of a NetMessagePacketEnd.
         * @exports INetMessagePacketEnd
         * @interface INetMessagePacketEnd
         */
    
        /**
         * Constructs a new NetMessagePacketEnd.
         * @exports NetMessagePacketEnd
         * @classdesc Represents a NetMessagePacketEnd.
         * @implements INetMessagePacketEnd
         * @constructor
         * @param {INetMessagePacketEnd=} [properties] Properties to set
         */
        function NetMessagePacketEnd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new NetMessagePacketEnd instance using the specified properties.
         * @function create
         * @memberof NetMessagePacketEnd
         * @static
         * @param {INetMessagePacketEnd=} [properties] Properties to set
         * @returns {NetMessagePacketEnd} NetMessagePacketEnd instance
         */
        NetMessagePacketEnd.create = function create(properties) {
            return new NetMessagePacketEnd(properties);
        };
    
        /**
         * Encodes the specified NetMessagePacketEnd message. Does not implicitly {@link NetMessagePacketEnd.verify|verify} messages.
         * @function encode
         * @memberof NetMessagePacketEnd
         * @static
         * @param {INetMessagePacketEnd} message NetMessagePacketEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetMessagePacketEnd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified NetMessagePacketEnd message, length delimited. Does not implicitly {@link NetMessagePacketEnd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NetMessagePacketEnd
         * @static
         * @param {INetMessagePacketEnd} message NetMessagePacketEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetMessagePacketEnd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a NetMessagePacketEnd message from the specified reader or buffer.
         * @function decode
         * @memberof NetMessagePacketEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NetMessagePacketEnd} NetMessagePacketEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetMessagePacketEnd.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NetMessagePacketEnd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a NetMessagePacketEnd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NetMessagePacketEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NetMessagePacketEnd} NetMessagePacketEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetMessagePacketEnd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a NetMessagePacketEnd message.
         * @function verify
         * @memberof NetMessagePacketEnd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NetMessagePacketEnd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a NetMessagePacketEnd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NetMessagePacketEnd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NetMessagePacketEnd} NetMessagePacketEnd
         */
        NetMessagePacketEnd.fromObject = function fromObject(object) {
            if (object instanceof $root.NetMessagePacketEnd)
                return object;
            return new $root.NetMessagePacketEnd();
        };
    
        /**
         * Creates a plain object from a NetMessagePacketEnd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NetMessagePacketEnd
         * @static
         * @param {NetMessagePacketEnd} message NetMessagePacketEnd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NetMessagePacketEnd.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this NetMessagePacketEnd to JSON.
         * @function toJSON
         * @memberof NetMessagePacketEnd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NetMessagePacketEnd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for NetMessagePacketEnd
         * @function getTypeUrl
         * @memberof NetMessagePacketEnd
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NetMessagePacketEnd.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NetMessagePacketEnd";
        };
    
        return NetMessagePacketEnd;
    })();

    return $root;
});
