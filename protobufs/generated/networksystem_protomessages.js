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
    var $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $RangeError = $util.global.RangeError, $TypeError = $util.global.TypeError, $String = $util.global.String;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.NetMessageSplitscreenUserChanged = (function() {
    
        /**
         * Properties of a NetMessageSplitscreenUserChanged.
         * @typedef {Object} NetMessageSplitscreenUserChanged.$Properties
         * @property {number|null} [slot] NetMessageSplitscreenUserChanged slot
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
    
        /**
         * Properties of a NetMessageSplitscreenUserChanged.
         * @exports INetMessageSplitscreenUserChanged
         * @interface INetMessageSplitscreenUserChanged
         * @augments NetMessageSplitscreenUserChanged.$Properties
         * @deprecated Use NetMessageSplitscreenUserChanged.$Properties instead.
         */
    
        /**
         * Shape of a NetMessageSplitscreenUserChanged.
         * @typedef {NetMessageSplitscreenUserChanged.$Properties} NetMessageSplitscreenUserChanged.$Shape
         */
    
        /**
         * Constructs a new NetMessageSplitscreenUserChanged.
         * @exports NetMessageSplitscreenUserChanged
         * @classdesc Represents a NetMessageSplitscreenUserChanged.
         * @constructor
         * @param {NetMessageSplitscreenUserChanged.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var NetMessageSplitscreenUserChanged = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };
    
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
         * @param {NetMessageSplitscreenUserChanged.$Properties=} [properties] Properties to set
         * @returns {NetMessageSplitscreenUserChanged} NetMessageSplitscreenUserChanged instance
         * @type {{
         *   (properties: NetMessageSplitscreenUserChanged.$Shape): NetMessageSplitscreenUserChanged & NetMessageSplitscreenUserChanged.$Shape;
         *   (properties?: NetMessageSplitscreenUserChanged.$Properties): NetMessageSplitscreenUserChanged;
         * }}
         */
        NetMessageSplitscreenUserChanged.create = function(properties) {
            return new NetMessageSplitscreenUserChanged(properties);
        };
    
        /**
         * Encodes the specified NetMessageSplitscreenUserChanged message. Does not implicitly {@link NetMessageSplitscreenUserChanged.verify|verify} messages.
         * @function encode
         * @memberof NetMessageSplitscreenUserChanged
         * @static
         * @param {NetMessageSplitscreenUserChanged.$Properties} message NetMessageSplitscreenUserChanged message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetMessageSplitscreenUserChanged.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.slot != null && $Object.hasOwnProperty.call(message, "slot"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.slot);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };
    
        /**
         * Encodes the specified NetMessageSplitscreenUserChanged message, length delimited. Does not implicitly {@link NetMessageSplitscreenUserChanged.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NetMessageSplitscreenUserChanged
         * @static
         * @param {NetMessageSplitscreenUserChanged.$Properties} message NetMessageSplitscreenUserChanged message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetMessageSplitscreenUserChanged.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };
    
        /**
         * Decodes a NetMessageSplitscreenUserChanged message from the specified reader or buffer.
         * @function decode
         * @memberof NetMessageSplitscreenUserChanged
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NetMessageSplitscreenUserChanged & NetMessageSplitscreenUserChanged.$Shape} NetMessageSplitscreenUserChanged
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetMessageSplitscreenUserChanged.decode = function (reader, length, _end, _depth, _target) {
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
            message = _target || new $root.NetMessageSplitscreenUserChanged();
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
                        message.slot = reader.uint32();
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
         * Decodes a NetMessageSplitscreenUserChanged message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NetMessageSplitscreenUserChanged
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NetMessageSplitscreenUserChanged & NetMessageSplitscreenUserChanged.$Shape} NetMessageSplitscreenUserChanged
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetMessageSplitscreenUserChanged.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };
    
        /**
         * Verifies a NetMessageSplitscreenUserChanged message.
         * @function verify
         * @memberof NetMessageSplitscreenUserChanged
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NetMessageSplitscreenUserChanged.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.slot != null && $Object.hasOwnProperty.call(message, "slot"))
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
        NetMessageSplitscreenUserChanged.fromObject = function (object, _depth) {
            if (object instanceof $root.NetMessageSplitscreenUserChanged)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".NetMessageSplitscreenUserChanged: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
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
        NetMessageSplitscreenUserChanged.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.defaults)
                object.slot = 0;
            if (message.slot != null && $Object.hasOwnProperty.call(message, "slot"))
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
        NetMessageSplitscreenUserChanged.prototype.toJSON = function() {
            return NetMessageSplitscreenUserChanged.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the type url for NetMessageSplitscreenUserChanged
         * @function getTypeUrl
         * @memberof NetMessageSplitscreenUserChanged
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        NetMessageSplitscreenUserChanged.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/NetMessageSplitscreenUserChanged";
        };
    
        return NetMessageSplitscreenUserChanged;
    })();
    
    $root.NetMessageConnectionClosed = (function() {
    
        /**
         * Properties of a NetMessageConnectionClosed.
         * @typedef {Object} NetMessageConnectionClosed.$Properties
         * @property {number|null} [reason] NetMessageConnectionClosed reason
         * @property {string|null} [message] NetMessageConnectionClosed message
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
    
        /**
         * Properties of a NetMessageConnectionClosed.
         * @exports INetMessageConnectionClosed
         * @interface INetMessageConnectionClosed
         * @augments NetMessageConnectionClosed.$Properties
         * @deprecated Use NetMessageConnectionClosed.$Properties instead.
         */
    
        /**
         * Shape of a NetMessageConnectionClosed.
         * @typedef {NetMessageConnectionClosed.$Properties} NetMessageConnectionClosed.$Shape
         */
    
        /**
         * Constructs a new NetMessageConnectionClosed.
         * @exports NetMessageConnectionClosed
         * @classdesc Represents a NetMessageConnectionClosed.
         * @constructor
         * @param {NetMessageConnectionClosed.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var NetMessageConnectionClosed = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };
    
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
         * @param {NetMessageConnectionClosed.$Properties=} [properties] Properties to set
         * @returns {NetMessageConnectionClosed} NetMessageConnectionClosed instance
         * @type {{
         *   (properties: NetMessageConnectionClosed.$Shape): NetMessageConnectionClosed & NetMessageConnectionClosed.$Shape;
         *   (properties?: NetMessageConnectionClosed.$Properties): NetMessageConnectionClosed;
         * }}
         */
        NetMessageConnectionClosed.create = function(properties) {
            return new NetMessageConnectionClosed(properties);
        };
    
        /**
         * Encodes the specified NetMessageConnectionClosed message. Does not implicitly {@link NetMessageConnectionClosed.verify|verify} messages.
         * @function encode
         * @memberof NetMessageConnectionClosed
         * @static
         * @param {NetMessageConnectionClosed.$Properties} message NetMessageConnectionClosed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetMessageConnectionClosed.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.reason != null && $Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.reason);
            if (message.message != null && $Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };
    
        /**
         * Encodes the specified NetMessageConnectionClosed message, length delimited. Does not implicitly {@link NetMessageConnectionClosed.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NetMessageConnectionClosed
         * @static
         * @param {NetMessageConnectionClosed.$Properties} message NetMessageConnectionClosed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetMessageConnectionClosed.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };
    
        /**
         * Decodes a NetMessageConnectionClosed message from the specified reader or buffer.
         * @function decode
         * @memberof NetMessageConnectionClosed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NetMessageConnectionClosed & NetMessageConnectionClosed.$Shape} NetMessageConnectionClosed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetMessageConnectionClosed.decode = function (reader, length, _end, _depth, _target) {
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
            message = _target || new $root.NetMessageConnectionClosed();
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
                        message.reason = reader.uint32();
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.message = reader.string();
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
         * Decodes a NetMessageConnectionClosed message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NetMessageConnectionClosed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NetMessageConnectionClosed & NetMessageConnectionClosed.$Shape} NetMessageConnectionClosed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetMessageConnectionClosed.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };
    
        /**
         * Verifies a NetMessageConnectionClosed message.
         * @function verify
         * @memberof NetMessageConnectionClosed
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NetMessageConnectionClosed.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.reason != null && $Object.hasOwnProperty.call(message, "reason"))
                if (!$util.isInteger(message.reason))
                    return "reason: integer expected";
            if (message.message != null && $Object.hasOwnProperty.call(message, "message"))
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
        NetMessageConnectionClosed.fromObject = function (object, _depth) {
            if (object instanceof $root.NetMessageConnectionClosed)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".NetMessageConnectionClosed: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.NetMessageConnectionClosed();
            if (object.reason != null)
                message.reason = object.reason >>> 0;
            if (object.message != null)
                message.message = $String(object.message);
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
        NetMessageConnectionClosed.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.defaults) {
                object.reason = 0;
                object.message = "";
            }
            if (message.reason != null && $Object.hasOwnProperty.call(message, "reason"))
                object.reason = message.reason;
            if (message.message != null && $Object.hasOwnProperty.call(message, "message"))
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
        NetMessageConnectionClosed.prototype.toJSON = function() {
            return NetMessageConnectionClosed.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the type url for NetMessageConnectionClosed
         * @function getTypeUrl
         * @memberof NetMessageConnectionClosed
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        NetMessageConnectionClosed.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/NetMessageConnectionClosed";
        };
    
        return NetMessageConnectionClosed;
    })();
    
    $root.NetMessageConnectionCrashed = (function() {
    
        /**
         * Properties of a NetMessageConnectionCrashed.
         * @typedef {Object} NetMessageConnectionCrashed.$Properties
         * @property {number|null} [reason] NetMessageConnectionCrashed reason
         * @property {string|null} [message] NetMessageConnectionCrashed message
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
    
        /**
         * Properties of a NetMessageConnectionCrashed.
         * @exports INetMessageConnectionCrashed
         * @interface INetMessageConnectionCrashed
         * @augments NetMessageConnectionCrashed.$Properties
         * @deprecated Use NetMessageConnectionCrashed.$Properties instead.
         */
    
        /**
         * Shape of a NetMessageConnectionCrashed.
         * @typedef {NetMessageConnectionCrashed.$Properties} NetMessageConnectionCrashed.$Shape
         */
    
        /**
         * Constructs a new NetMessageConnectionCrashed.
         * @exports NetMessageConnectionCrashed
         * @classdesc Represents a NetMessageConnectionCrashed.
         * @constructor
         * @param {NetMessageConnectionCrashed.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var NetMessageConnectionCrashed = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };
    
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
         * @param {NetMessageConnectionCrashed.$Properties=} [properties] Properties to set
         * @returns {NetMessageConnectionCrashed} NetMessageConnectionCrashed instance
         * @type {{
         *   (properties: NetMessageConnectionCrashed.$Shape): NetMessageConnectionCrashed & NetMessageConnectionCrashed.$Shape;
         *   (properties?: NetMessageConnectionCrashed.$Properties): NetMessageConnectionCrashed;
         * }}
         */
        NetMessageConnectionCrashed.create = function(properties) {
            return new NetMessageConnectionCrashed(properties);
        };
    
        /**
         * Encodes the specified NetMessageConnectionCrashed message. Does not implicitly {@link NetMessageConnectionCrashed.verify|verify} messages.
         * @function encode
         * @memberof NetMessageConnectionCrashed
         * @static
         * @param {NetMessageConnectionCrashed.$Properties} message NetMessageConnectionCrashed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetMessageConnectionCrashed.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.reason != null && $Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.reason);
            if (message.message != null && $Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };
    
        /**
         * Encodes the specified NetMessageConnectionCrashed message, length delimited. Does not implicitly {@link NetMessageConnectionCrashed.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NetMessageConnectionCrashed
         * @static
         * @param {NetMessageConnectionCrashed.$Properties} message NetMessageConnectionCrashed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetMessageConnectionCrashed.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };
    
        /**
         * Decodes a NetMessageConnectionCrashed message from the specified reader or buffer.
         * @function decode
         * @memberof NetMessageConnectionCrashed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NetMessageConnectionCrashed & NetMessageConnectionCrashed.$Shape} NetMessageConnectionCrashed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetMessageConnectionCrashed.decode = function (reader, length, _end, _depth, _target) {
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
            message = _target || new $root.NetMessageConnectionCrashed();
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
                        message.reason = reader.uint32();
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.message = reader.string();
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
         * Decodes a NetMessageConnectionCrashed message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NetMessageConnectionCrashed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NetMessageConnectionCrashed & NetMessageConnectionCrashed.$Shape} NetMessageConnectionCrashed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetMessageConnectionCrashed.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };
    
        /**
         * Verifies a NetMessageConnectionCrashed message.
         * @function verify
         * @memberof NetMessageConnectionCrashed
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NetMessageConnectionCrashed.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.reason != null && $Object.hasOwnProperty.call(message, "reason"))
                if (!$util.isInteger(message.reason))
                    return "reason: integer expected";
            if (message.message != null && $Object.hasOwnProperty.call(message, "message"))
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
        NetMessageConnectionCrashed.fromObject = function (object, _depth) {
            if (object instanceof $root.NetMessageConnectionCrashed)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".NetMessageConnectionCrashed: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.NetMessageConnectionCrashed();
            if (object.reason != null)
                message.reason = object.reason >>> 0;
            if (object.message != null)
                message.message = $String(object.message);
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
        NetMessageConnectionCrashed.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.defaults) {
                object.reason = 0;
                object.message = "";
            }
            if (message.reason != null && $Object.hasOwnProperty.call(message, "reason"))
                object.reason = message.reason;
            if (message.message != null && $Object.hasOwnProperty.call(message, "message"))
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
        NetMessageConnectionCrashed.prototype.toJSON = function() {
            return NetMessageConnectionCrashed.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the type url for NetMessageConnectionCrashed
         * @function getTypeUrl
         * @memberof NetMessageConnectionCrashed
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        NetMessageConnectionCrashed.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/NetMessageConnectionCrashed";
        };
    
        return NetMessageConnectionCrashed;
    })();
    
    $root.NetMessagePacketStart = (function() {
    
        /**
         * Properties of a NetMessagePacketStart.
         * @typedef {Object} NetMessagePacketStart.$Properties
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
    
        /**
         * Properties of a NetMessagePacketStart.
         * @exports INetMessagePacketStart
         * @interface INetMessagePacketStart
         * @augments NetMessagePacketStart.$Properties
         * @deprecated Use NetMessagePacketStart.$Properties instead.
         */
    
        /**
         * Shape of a NetMessagePacketStart.
         * @typedef {NetMessagePacketStart.$Properties} NetMessagePacketStart.$Shape
         */
    
        /**
         * Constructs a new NetMessagePacketStart.
         * @exports NetMessagePacketStart
         * @classdesc Represents a NetMessagePacketStart.
         * @constructor
         * @param {NetMessagePacketStart.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var NetMessagePacketStart = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };
    
        /**
         * Creates a new NetMessagePacketStart instance using the specified properties.
         * @function create
         * @memberof NetMessagePacketStart
         * @static
         * @param {NetMessagePacketStart.$Properties=} [properties] Properties to set
         * @returns {NetMessagePacketStart} NetMessagePacketStart instance
         * @type {{
         *   (properties: NetMessagePacketStart.$Shape): NetMessagePacketStart & NetMessagePacketStart.$Shape;
         *   (properties?: NetMessagePacketStart.$Properties): NetMessagePacketStart;
         * }}
         */
        NetMessagePacketStart.create = function(properties) {
            return new NetMessagePacketStart(properties);
        };
    
        /**
         * Encodes the specified NetMessagePacketStart message. Does not implicitly {@link NetMessagePacketStart.verify|verify} messages.
         * @function encode
         * @memberof NetMessagePacketStart
         * @static
         * @param {NetMessagePacketStart.$Properties} message NetMessagePacketStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetMessagePacketStart.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };
    
        /**
         * Encodes the specified NetMessagePacketStart message, length delimited. Does not implicitly {@link NetMessagePacketStart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NetMessagePacketStart
         * @static
         * @param {NetMessagePacketStart.$Properties} message NetMessagePacketStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetMessagePacketStart.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };
    
        /**
         * Decodes a NetMessagePacketStart message from the specified reader or buffer.
         * @function decode
         * @memberof NetMessagePacketStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NetMessagePacketStart & NetMessagePacketStart.$Shape} NetMessagePacketStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetMessagePacketStart.decode = function (reader, length, _end, _depth, _target) {
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
            message = _target || new $root.NetMessagePacketStart();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                reader.skipType(tag & 7, _depth, tag);
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
         * Decodes a NetMessagePacketStart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NetMessagePacketStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NetMessagePacketStart & NetMessagePacketStart.$Shape} NetMessagePacketStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetMessagePacketStart.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };
    
        /**
         * Verifies a NetMessagePacketStart message.
         * @function verify
         * @memberof NetMessagePacketStart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NetMessagePacketStart.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
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
        NetMessagePacketStart.fromObject = function (object, _depth) {
            if (object instanceof $root.NetMessagePacketStart)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".NetMessagePacketStart: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
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
        NetMessagePacketStart.toObject = function () {
            return {};
        };
    
        /**
         * Converts this NetMessagePacketStart to JSON.
         * @function toJSON
         * @memberof NetMessagePacketStart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NetMessagePacketStart.prototype.toJSON = function() {
            return NetMessagePacketStart.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the type url for NetMessagePacketStart
         * @function getTypeUrl
         * @memberof NetMessagePacketStart
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        NetMessagePacketStart.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/NetMessagePacketStart";
        };
    
        return NetMessagePacketStart;
    })();
    
    $root.NetMessagePacketEnd = (function() {
    
        /**
         * Properties of a NetMessagePacketEnd.
         * @typedef {Object} NetMessagePacketEnd.$Properties
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
    
        /**
         * Properties of a NetMessagePacketEnd.
         * @exports INetMessagePacketEnd
         * @interface INetMessagePacketEnd
         * @augments NetMessagePacketEnd.$Properties
         * @deprecated Use NetMessagePacketEnd.$Properties instead.
         */
    
        /**
         * Shape of a NetMessagePacketEnd.
         * @typedef {NetMessagePacketEnd.$Properties} NetMessagePacketEnd.$Shape
         */
    
        /**
         * Constructs a new NetMessagePacketEnd.
         * @exports NetMessagePacketEnd
         * @classdesc Represents a NetMessagePacketEnd.
         * @constructor
         * @param {NetMessagePacketEnd.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var NetMessagePacketEnd = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };
    
        /**
         * Creates a new NetMessagePacketEnd instance using the specified properties.
         * @function create
         * @memberof NetMessagePacketEnd
         * @static
         * @param {NetMessagePacketEnd.$Properties=} [properties] Properties to set
         * @returns {NetMessagePacketEnd} NetMessagePacketEnd instance
         * @type {{
         *   (properties: NetMessagePacketEnd.$Shape): NetMessagePacketEnd & NetMessagePacketEnd.$Shape;
         *   (properties?: NetMessagePacketEnd.$Properties): NetMessagePacketEnd;
         * }}
         */
        NetMessagePacketEnd.create = function(properties) {
            return new NetMessagePacketEnd(properties);
        };
    
        /**
         * Encodes the specified NetMessagePacketEnd message. Does not implicitly {@link NetMessagePacketEnd.verify|verify} messages.
         * @function encode
         * @memberof NetMessagePacketEnd
         * @static
         * @param {NetMessagePacketEnd.$Properties} message NetMessagePacketEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetMessagePacketEnd.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };
    
        /**
         * Encodes the specified NetMessagePacketEnd message, length delimited. Does not implicitly {@link NetMessagePacketEnd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NetMessagePacketEnd
         * @static
         * @param {NetMessagePacketEnd.$Properties} message NetMessagePacketEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetMessagePacketEnd.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };
    
        /**
         * Decodes a NetMessagePacketEnd message from the specified reader or buffer.
         * @function decode
         * @memberof NetMessagePacketEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NetMessagePacketEnd & NetMessagePacketEnd.$Shape} NetMessagePacketEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetMessagePacketEnd.decode = function (reader, length, _end, _depth, _target) {
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
            message = _target || new $root.NetMessagePacketEnd();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                reader.skipType(tag & 7, _depth, tag);
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
         * Decodes a NetMessagePacketEnd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NetMessagePacketEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NetMessagePacketEnd & NetMessagePacketEnd.$Shape} NetMessagePacketEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetMessagePacketEnd.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };
    
        /**
         * Verifies a NetMessagePacketEnd message.
         * @function verify
         * @memberof NetMessagePacketEnd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NetMessagePacketEnd.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
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
        NetMessagePacketEnd.fromObject = function (object, _depth) {
            if (object instanceof $root.NetMessagePacketEnd)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".NetMessagePacketEnd: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
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
        NetMessagePacketEnd.toObject = function () {
            return {};
        };
    
        /**
         * Converts this NetMessagePacketEnd to JSON.
         * @function toJSON
         * @memberof NetMessagePacketEnd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NetMessagePacketEnd.prototype.toJSON = function() {
            return NetMessagePacketEnd.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the type url for NetMessagePacketEnd
         * @function getTypeUrl
         * @memberof NetMessagePacketEnd
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        NetMessagePacketEnd.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/NetMessagePacketEnd";
        };
    
        return NetMessagePacketEnd;
    })();

    return $root;
});
