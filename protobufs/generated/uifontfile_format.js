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
    var $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $RangeError = $util.global.RangeError, $TypeError = $util.global.TypeError, $String = $util.global.String, $Array = $util.global.Array;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.CUIFontFilePB = (function() {
    
        /**
         * Properties of a CUIFontFilePB.
         * @typedef {Object} CUIFontFilePB.$Properties
         * @property {string|null} [font_file_name] CUIFontFilePB font_file_name
         * @property {Uint8Array|null} [opentype_font_data] CUIFontFilePB opentype_font_data
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
    
        /**
         * Properties of a CUIFontFilePB.
         * @exports ICUIFontFilePB
         * @interface ICUIFontFilePB
         * @augments CUIFontFilePB.$Properties
         * @deprecated Use CUIFontFilePB.$Properties instead.
         */
    
        /**
         * Shape of a CUIFontFilePB.
         * @typedef {CUIFontFilePB.$Properties} CUIFontFilePB.$Shape
         */
    
        /**
         * Constructs a new CUIFontFilePB.
         * @exports CUIFontFilePB
         * @classdesc Represents a CUIFontFilePB.
         * @constructor
         * @param {CUIFontFilePB.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var CUIFontFilePB = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };
    
        /**
         * CUIFontFilePB font_file_name.
         * @member {string} font_file_name
         * @memberof CUIFontFilePB
         * @instance
         */
        CUIFontFilePB.prototype.font_file_name = "";
    
        /**
         * CUIFontFilePB opentype_font_data.
         * @member {Uint8Array} opentype_font_data
         * @memberof CUIFontFilePB
         * @instance
         */
        CUIFontFilePB.prototype.opentype_font_data = $util.newBuffer([]);
    
        /**
         * Creates a new CUIFontFilePB instance using the specified properties.
         * @function create
         * @memberof CUIFontFilePB
         * @static
         * @param {CUIFontFilePB.$Properties=} [properties] Properties to set
         * @returns {CUIFontFilePB} CUIFontFilePB instance
         * @type {{
         *   (properties: CUIFontFilePB.$Shape): CUIFontFilePB & CUIFontFilePB.$Shape;
         *   (properties?: CUIFontFilePB.$Properties): CUIFontFilePB;
         * }}
         */
        CUIFontFilePB.create = function(properties) {
            return new CUIFontFilePB(properties);
        };
    
        /**
         * Encodes the specified CUIFontFilePB message. Does not implicitly {@link CUIFontFilePB.verify|verify} messages.
         * @function encode
         * @memberof CUIFontFilePB
         * @static
         * @param {CUIFontFilePB.$Properties} message CUIFontFilePB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUIFontFilePB.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.font_file_name != null && $Object.hasOwnProperty.call(message, "font_file_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.font_file_name);
            if (message.opentype_font_data != null && $Object.hasOwnProperty.call(message, "opentype_font_data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.opentype_font_data);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CUIFontFilePB message, length delimited. Does not implicitly {@link CUIFontFilePB.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CUIFontFilePB
         * @static
         * @param {CUIFontFilePB.$Properties} message CUIFontFilePB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUIFontFilePB.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };
    
        /**
         * Decodes a CUIFontFilePB message from the specified reader or buffer.
         * @function decode
         * @memberof CUIFontFilePB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CUIFontFilePB & CUIFontFilePB.$Shape} CUIFontFilePB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUIFontFilePB.decode = function (reader, length, _end, _depth, _target) {
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
            message = _target || new $root.CUIFontFilePB();
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
                        message.font_file_name = reader.string();
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.opentype_font_data = reader.bytes();
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
         * Decodes a CUIFontFilePB message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CUIFontFilePB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CUIFontFilePB & CUIFontFilePB.$Shape} CUIFontFilePB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUIFontFilePB.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };
    
        /**
         * Verifies a CUIFontFilePB message.
         * @function verify
         * @memberof CUIFontFilePB
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CUIFontFilePB.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.font_file_name != null && $Object.hasOwnProperty.call(message, "font_file_name"))
                if (!$util.isString(message.font_file_name))
                    return "font_file_name: string expected";
            if (message.opentype_font_data != null && $Object.hasOwnProperty.call(message, "opentype_font_data"))
                if (!(message.opentype_font_data && typeof message.opentype_font_data.length === "number" || $util.isString(message.opentype_font_data)))
                    return "opentype_font_data: buffer expected";
            return null;
        };
    
        /**
         * Creates a CUIFontFilePB message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CUIFontFilePB
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CUIFontFilePB} CUIFontFilePB
         */
        CUIFontFilePB.fromObject = function (object, _depth) {
            if (object instanceof $root.CUIFontFilePB)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".CUIFontFilePB: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.CUIFontFilePB();
            if (object.font_file_name != null)
                message.font_file_name = $String(object.font_file_name);
            if (object.opentype_font_data != null)
                if (typeof object.opentype_font_data === "string")
                    $util.base64.decode(object.opentype_font_data, message.opentype_font_data = $util.newBuffer($util.base64.length(object.opentype_font_data)), 0);
                else if (object.opentype_font_data.length >= 0)
                    message.opentype_font_data = object.opentype_font_data;
            return message;
        };
    
        /**
         * Creates a plain object from a CUIFontFilePB message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CUIFontFilePB
         * @static
         * @param {CUIFontFilePB} message CUIFontFilePB
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CUIFontFilePB.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.defaults) {
                object.font_file_name = "";
                if (options.bytes === $String)
                    object.opentype_font_data = "";
                else {
                    object.opentype_font_data = [];
                    if (options.bytes !== $Array)
                        object.opentype_font_data = $util.newBuffer(object.opentype_font_data);
                }
            }
            if (message.font_file_name != null && $Object.hasOwnProperty.call(message, "font_file_name"))
                object.font_file_name = message.font_file_name;
            if (message.opentype_font_data != null && $Object.hasOwnProperty.call(message, "opentype_font_data"))
                object.opentype_font_data = options.bytes === $String ? $util.base64.encode(message.opentype_font_data, 0, message.opentype_font_data.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.opentype_font_data) : message.opentype_font_data;
            return object;
        };
    
        /**
         * Converts this CUIFontFilePB to JSON.
         * @function toJSON
         * @memberof CUIFontFilePB
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CUIFontFilePB.prototype.toJSON = function() {
            return CUIFontFilePB.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the type url for CUIFontFilePB
         * @function getTypeUrl
         * @memberof CUIFontFilePB
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        CUIFontFilePB.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/CUIFontFilePB";
        };
    
        return CUIFontFilePB;
    })();
    
    $root.CUIFontFilePackagePB = (function() {
    
        /**
         * Properties of a CUIFontFilePackagePB.
         * @typedef {Object} CUIFontFilePackagePB.$Properties
         * @property {number|null} [package_version] CUIFontFilePackagePB package_version
         * @property {Array.<CUIFontFilePackagePB.CUIEncryptedFontFilePB.$Properties>|null} [encrypted_font_files] CUIFontFilePackagePB encrypted_font_files
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
    
        /**
         * Properties of a CUIFontFilePackagePB.
         * @exports ICUIFontFilePackagePB
         * @interface ICUIFontFilePackagePB
         * @augments CUIFontFilePackagePB.$Properties
         * @deprecated Use CUIFontFilePackagePB.$Properties instead.
         */
    
        /**
         * Shape of a CUIFontFilePackagePB.
         * @typedef {CUIFontFilePackagePB.$Properties} CUIFontFilePackagePB.$Shape
         */
    
        /**
         * Constructs a new CUIFontFilePackagePB.
         * @exports CUIFontFilePackagePB
         * @classdesc Represents a CUIFontFilePackagePB.
         * @constructor
         * @param {CUIFontFilePackagePB.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var CUIFontFilePackagePB = function (properties) {
            this.encrypted_font_files = [];
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };
    
        /**
         * CUIFontFilePackagePB package_version.
         * @member {number} package_version
         * @memberof CUIFontFilePackagePB
         * @instance
         */
        CUIFontFilePackagePB.prototype.package_version = 0;
    
        /**
         * CUIFontFilePackagePB encrypted_font_files.
         * @member {Array.<CUIFontFilePackagePB.CUIEncryptedFontFilePB.$Properties>} encrypted_font_files
         * @memberof CUIFontFilePackagePB
         * @instance
         */
        CUIFontFilePackagePB.prototype.encrypted_font_files = $util.emptyArray;
    
        /**
         * Creates a new CUIFontFilePackagePB instance using the specified properties.
         * @function create
         * @memberof CUIFontFilePackagePB
         * @static
         * @param {CUIFontFilePackagePB.$Properties=} [properties] Properties to set
         * @returns {CUIFontFilePackagePB} CUIFontFilePackagePB instance
         * @type {{
         *   (properties: CUIFontFilePackagePB.$Shape): CUIFontFilePackagePB & CUIFontFilePackagePB.$Shape;
         *   (properties?: CUIFontFilePackagePB.$Properties): CUIFontFilePackagePB;
         * }}
         */
        CUIFontFilePackagePB.create = function(properties) {
            return new CUIFontFilePackagePB(properties);
        };
    
        /**
         * Encodes the specified CUIFontFilePackagePB message. Does not implicitly {@link CUIFontFilePackagePB.verify|verify} messages.
         * @function encode
         * @memberof CUIFontFilePackagePB
         * @static
         * @param {CUIFontFilePackagePB.$Properties} message CUIFontFilePackagePB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUIFontFilePackagePB.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.package_version != null && $Object.hasOwnProperty.call(message, "package_version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.package_version);
            if (message.encrypted_font_files != null && message.encrypted_font_files.length)
                for (var i = 0; i < message.encrypted_font_files.length; ++i)
                    $root.CUIFontFilePackagePB.CUIEncryptedFontFilePB.encode(message.encrypted_font_files[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CUIFontFilePackagePB message, length delimited. Does not implicitly {@link CUIFontFilePackagePB.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CUIFontFilePackagePB
         * @static
         * @param {CUIFontFilePackagePB.$Properties} message CUIFontFilePackagePB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUIFontFilePackagePB.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };
    
        /**
         * Decodes a CUIFontFilePackagePB message from the specified reader or buffer.
         * @function decode
         * @memberof CUIFontFilePackagePB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CUIFontFilePackagePB & CUIFontFilePackagePB.$Shape} CUIFontFilePackagePB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUIFontFilePackagePB.decode = function (reader, length, _end, _depth, _target) {
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
            message = _target || new $root.CUIFontFilePackagePB();
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
                        message.package_version = reader.uint32();
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if (!(message.encrypted_font_files && message.encrypted_font_files.length))
                            message.encrypted_font_files = [];
                        message.encrypted_font_files.push($root.CUIFontFilePackagePB.CUIEncryptedFontFilePB.decode(reader, reader.size(), $undefined, _depth + 1));
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
         * Decodes a CUIFontFilePackagePB message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CUIFontFilePackagePB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CUIFontFilePackagePB & CUIFontFilePackagePB.$Shape} CUIFontFilePackagePB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUIFontFilePackagePB.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };
    
        /**
         * Verifies a CUIFontFilePackagePB message.
         * @function verify
         * @memberof CUIFontFilePackagePB
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CUIFontFilePackagePB.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.package_version != null && $Object.hasOwnProperty.call(message, "package_version"))
                if (!$util.isInteger(message.package_version))
                    return "package_version: integer expected";
            if (message.encrypted_font_files != null && $Object.hasOwnProperty.call(message, "encrypted_font_files")) {
                if (!$Array.isArray(message.encrypted_font_files))
                    return "encrypted_font_files: array expected";
                for (var i = 0; i < message.encrypted_font_files.length; ++i) {
                    var error = $root.CUIFontFilePackagePB.CUIEncryptedFontFilePB.verify(message.encrypted_font_files[i], _depth + 1);
                    if (error)
                        return "encrypted_font_files." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CUIFontFilePackagePB message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CUIFontFilePackagePB
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CUIFontFilePackagePB} CUIFontFilePackagePB
         */
        CUIFontFilePackagePB.fromObject = function (object, _depth) {
            if (object instanceof $root.CUIFontFilePackagePB)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".CUIFontFilePackagePB: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.CUIFontFilePackagePB();
            if (object.package_version != null)
                message.package_version = object.package_version >>> 0;
            if (object.encrypted_font_files) {
                if (!$Array.isArray(object.encrypted_font_files))
                    throw $TypeError(".CUIFontFilePackagePB.encrypted_font_files: array expected");
                message.encrypted_font_files = $Array(object.encrypted_font_files.length);
                for (var i = 0; i < object.encrypted_font_files.length; ++i) {
                    if (!$util.isObject(object.encrypted_font_files[i]))
                        throw $TypeError(".CUIFontFilePackagePB.encrypted_font_files: object expected");
                    message.encrypted_font_files[i] = $root.CUIFontFilePackagePB.CUIEncryptedFontFilePB.fromObject(object.encrypted_font_files[i], _depth + 1);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CUIFontFilePackagePB message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CUIFontFilePackagePB
         * @static
         * @param {CUIFontFilePackagePB} message CUIFontFilePackagePB
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CUIFontFilePackagePB.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.arrays || options.defaults)
                object.encrypted_font_files = [];
            if (options.defaults)
                object.package_version = 0;
            if (message.package_version != null && $Object.hasOwnProperty.call(message, "package_version"))
                object.package_version = message.package_version;
            if (message.encrypted_font_files && message.encrypted_font_files.length) {
                object.encrypted_font_files = $Array(message.encrypted_font_files.length);
                for (var j = 0; j < message.encrypted_font_files.length; ++j)
                    object.encrypted_font_files[j] = $root.CUIFontFilePackagePB.CUIEncryptedFontFilePB.toObject(message.encrypted_font_files[j], options, _depth + 1);
            }
            return object;
        };
    
        /**
         * Converts this CUIFontFilePackagePB to JSON.
         * @function toJSON
         * @memberof CUIFontFilePackagePB
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CUIFontFilePackagePB.prototype.toJSON = function() {
            return CUIFontFilePackagePB.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the type url for CUIFontFilePackagePB
         * @function getTypeUrl
         * @memberof CUIFontFilePackagePB
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        CUIFontFilePackagePB.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/CUIFontFilePackagePB";
        };
    
        CUIFontFilePackagePB.CUIEncryptedFontFilePB = (function() {
    
            /**
             * Properties of a CUIEncryptedFontFilePB.
             * @typedef {Object} CUIFontFilePackagePB.CUIEncryptedFontFilePB.$Properties
             * @property {Uint8Array|null} [encrypted_contents] CUIEncryptedFontFilePB encrypted_contents
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
    
            /**
             * Properties of a CUIEncryptedFontFilePB.
             * @memberof CUIFontFilePackagePB
             * @interface ICUIEncryptedFontFilePB
             * @augments CUIFontFilePackagePB.CUIEncryptedFontFilePB.$Properties
             * @deprecated Use CUIFontFilePackagePB.CUIEncryptedFontFilePB.$Properties instead.
             */
    
            /**
             * Shape of a CUIEncryptedFontFilePB.
             * @typedef {CUIFontFilePackagePB.CUIEncryptedFontFilePB.$Properties} CUIFontFilePackagePB.CUIEncryptedFontFilePB.$Shape
             */
    
            /**
             * Constructs a new CUIEncryptedFontFilePB.
             * @memberof CUIFontFilePackagePB
             * @classdesc Represents a CUIEncryptedFontFilePB.
             * @constructor
             * @param {CUIFontFilePackagePB.CUIEncryptedFontFilePB.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var CUIEncryptedFontFilePB = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };
    
            /**
             * CUIEncryptedFontFilePB encrypted_contents.
             * @member {Uint8Array} encrypted_contents
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @instance
             */
            CUIEncryptedFontFilePB.prototype.encrypted_contents = $util.newBuffer([]);
    
            /**
             * Creates a new CUIEncryptedFontFilePB instance using the specified properties.
             * @function create
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @static
             * @param {CUIFontFilePackagePB.CUIEncryptedFontFilePB.$Properties=} [properties] Properties to set
             * @returns {CUIFontFilePackagePB.CUIEncryptedFontFilePB} CUIEncryptedFontFilePB instance
             * @type {{
             *   (properties: CUIFontFilePackagePB.CUIEncryptedFontFilePB.$Shape): CUIFontFilePackagePB.CUIEncryptedFontFilePB & CUIFontFilePackagePB.CUIEncryptedFontFilePB.$Shape;
             *   (properties?: CUIFontFilePackagePB.CUIEncryptedFontFilePB.$Properties): CUIFontFilePackagePB.CUIEncryptedFontFilePB;
             * }}
             */
            CUIEncryptedFontFilePB.create = function(properties) {
                return new CUIEncryptedFontFilePB(properties);
            };
    
            /**
             * Encodes the specified CUIEncryptedFontFilePB message. Does not implicitly {@link CUIFontFilePackagePB.CUIEncryptedFontFilePB.verify|verify} messages.
             * @function encode
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @static
             * @param {CUIFontFilePackagePB.CUIEncryptedFontFilePB.$Properties} message CUIEncryptedFontFilePB message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CUIEncryptedFontFilePB.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.encrypted_contents != null && $Object.hasOwnProperty.call(message, "encrypted_contents"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.encrypted_contents);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };
    
            /**
             * Encodes the specified CUIEncryptedFontFilePB message, length delimited. Does not implicitly {@link CUIFontFilePackagePB.CUIEncryptedFontFilePB.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @static
             * @param {CUIFontFilePackagePB.CUIEncryptedFontFilePB.$Properties} message CUIEncryptedFontFilePB message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CUIEncryptedFontFilePB.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };
    
            /**
             * Decodes a CUIEncryptedFontFilePB message from the specified reader or buffer.
             * @function decode
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CUIFontFilePackagePB.CUIEncryptedFontFilePB & CUIFontFilePackagePB.CUIEncryptedFontFilePB.$Shape} CUIEncryptedFontFilePB
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CUIEncryptedFontFilePB.decode = function (reader, length, _end, _depth, _target) {
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
                message = _target || new $root.CUIFontFilePackagePB.CUIEncryptedFontFilePB();
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
                            message.encrypted_contents = reader.bytes();
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
             * Decodes a CUIEncryptedFontFilePB message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CUIFontFilePackagePB.CUIEncryptedFontFilePB & CUIFontFilePackagePB.CUIEncryptedFontFilePB.$Shape} CUIEncryptedFontFilePB
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CUIEncryptedFontFilePB.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.size());
            };
    
            /**
             * Verifies a CUIEncryptedFontFilePB message.
             * @function verify
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CUIEncryptedFontFilePB.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.encrypted_contents != null && $Object.hasOwnProperty.call(message, "encrypted_contents"))
                    if (!(message.encrypted_contents && typeof message.encrypted_contents.length === "number" || $util.isString(message.encrypted_contents)))
                        return "encrypted_contents: buffer expected";
                return null;
            };
    
            /**
             * Creates a CUIEncryptedFontFilePB message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CUIFontFilePackagePB.CUIEncryptedFontFilePB} CUIEncryptedFontFilePB
             */
            CUIEncryptedFontFilePB.fromObject = function (object, _depth) {
                if (object instanceof $root.CUIFontFilePackagePB.CUIEncryptedFontFilePB)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".CUIFontFilePackagePB.CUIEncryptedFontFilePB: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.CUIFontFilePackagePB.CUIEncryptedFontFilePB();
                if (object.encrypted_contents != null)
                    if (typeof object.encrypted_contents === "string")
                        $util.base64.decode(object.encrypted_contents, message.encrypted_contents = $util.newBuffer($util.base64.length(object.encrypted_contents)), 0);
                    else if (object.encrypted_contents.length >= 0)
                        message.encrypted_contents = object.encrypted_contents;
                return message;
            };
    
            /**
             * Creates a plain object from a CUIEncryptedFontFilePB message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @static
             * @param {CUIFontFilePackagePB.CUIEncryptedFontFilePB} message CUIEncryptedFontFilePB
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CUIEncryptedFontFilePB.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.defaults)
                    if (options.bytes === $String)
                        object.encrypted_contents = "";
                    else {
                        object.encrypted_contents = [];
                        if (options.bytes !== $Array)
                            object.encrypted_contents = $util.newBuffer(object.encrypted_contents);
                    }
                if (message.encrypted_contents != null && $Object.hasOwnProperty.call(message, "encrypted_contents"))
                    object.encrypted_contents = options.bytes === $String ? $util.base64.encode(message.encrypted_contents, 0, message.encrypted_contents.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.encrypted_contents) : message.encrypted_contents;
                return object;
            };
    
            /**
             * Converts this CUIEncryptedFontFilePB to JSON.
             * @function toJSON
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CUIEncryptedFontFilePB.prototype.toJSON = function() {
                return CUIEncryptedFontFilePB.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the type url for CUIEncryptedFontFilePB
             * @function getTypeUrl
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            CUIEncryptedFontFilePB.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/CUIFontFilePackagePB.CUIEncryptedFontFilePB";
            };
    
            return CUIEncryptedFontFilePB;
        })();
    
        return CUIFontFilePackagePB;
    })();

    return $root;
});
