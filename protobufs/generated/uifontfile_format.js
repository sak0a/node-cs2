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
    
    $root.CUIFontFilePB = (function() {
    
        /**
         * Properties of a CUIFontFilePB.
         * @exports ICUIFontFilePB
         * @interface ICUIFontFilePB
         * @property {string|null} [font_file_name] CUIFontFilePB font_file_name
         * @property {Uint8Array|null} [opentype_font_data] CUIFontFilePB opentype_font_data
         */
    
        /**
         * Constructs a new CUIFontFilePB.
         * @exports CUIFontFilePB
         * @classdesc Represents a CUIFontFilePB.
         * @implements ICUIFontFilePB
         * @constructor
         * @param {ICUIFontFilePB=} [properties] Properties to set
         */
        function CUIFontFilePB(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
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
         * @param {ICUIFontFilePB=} [properties] Properties to set
         * @returns {CUIFontFilePB} CUIFontFilePB instance
         */
        CUIFontFilePB.create = function create(properties) {
            return new CUIFontFilePB(properties);
        };
    
        /**
         * Encodes the specified CUIFontFilePB message. Does not implicitly {@link CUIFontFilePB.verify|verify} messages.
         * @function encode
         * @memberof CUIFontFilePB
         * @static
         * @param {ICUIFontFilePB} message CUIFontFilePB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUIFontFilePB.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.font_file_name != null && Object.hasOwnProperty.call(message, "font_file_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.font_file_name);
            if (message.opentype_font_data != null && Object.hasOwnProperty.call(message, "opentype_font_data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.opentype_font_data);
            return writer;
        };
    
        /**
         * Encodes the specified CUIFontFilePB message, length delimited. Does not implicitly {@link CUIFontFilePB.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CUIFontFilePB
         * @static
         * @param {ICUIFontFilePB} message CUIFontFilePB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUIFontFilePB.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CUIFontFilePB message from the specified reader or buffer.
         * @function decode
         * @memberof CUIFontFilePB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CUIFontFilePB} CUIFontFilePB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUIFontFilePB.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CUIFontFilePB();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.font_file_name = reader.string();
                        break;
                    }
                case 2: {
                        message.opentype_font_data = reader.bytes();
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
         * Decodes a CUIFontFilePB message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CUIFontFilePB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CUIFontFilePB} CUIFontFilePB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUIFontFilePB.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CUIFontFilePB message.
         * @function verify
         * @memberof CUIFontFilePB
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CUIFontFilePB.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.font_file_name != null && message.hasOwnProperty("font_file_name"))
                if (!$util.isString(message.font_file_name))
                    return "font_file_name: string expected";
            if (message.opentype_font_data != null && message.hasOwnProperty("opentype_font_data"))
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
        CUIFontFilePB.fromObject = function fromObject(object) {
            if (object instanceof $root.CUIFontFilePB)
                return object;
            var message = new $root.CUIFontFilePB();
            if (object.font_file_name != null)
                message.font_file_name = String(object.font_file_name);
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
        CUIFontFilePB.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.font_file_name = "";
                if (options.bytes === String)
                    object.opentype_font_data = "";
                else {
                    object.opentype_font_data = [];
                    if (options.bytes !== Array)
                        object.opentype_font_data = $util.newBuffer(object.opentype_font_data);
                }
            }
            if (message.font_file_name != null && message.hasOwnProperty("font_file_name"))
                object.font_file_name = message.font_file_name;
            if (message.opentype_font_data != null && message.hasOwnProperty("opentype_font_data"))
                object.opentype_font_data = options.bytes === String ? $util.base64.encode(message.opentype_font_data, 0, message.opentype_font_data.length) : options.bytes === Array ? Array.prototype.slice.call(message.opentype_font_data) : message.opentype_font_data;
            return object;
        };
    
        /**
         * Converts this CUIFontFilePB to JSON.
         * @function toJSON
         * @memberof CUIFontFilePB
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CUIFontFilePB.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CUIFontFilePB
         * @function getTypeUrl
         * @memberof CUIFontFilePB
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CUIFontFilePB.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CUIFontFilePB";
        };
    
        return CUIFontFilePB;
    })();
    
    $root.CUIFontFilePackagePB = (function() {
    
        /**
         * Properties of a CUIFontFilePackagePB.
         * @exports ICUIFontFilePackagePB
         * @interface ICUIFontFilePackagePB
         * @property {number} package_version CUIFontFilePackagePB package_version
         * @property {Array.<CUIFontFilePackagePB.ICUIEncryptedFontFilePB>|null} [encrypted_font_files] CUIFontFilePackagePB encrypted_font_files
         */
    
        /**
         * Constructs a new CUIFontFilePackagePB.
         * @exports CUIFontFilePackagePB
         * @classdesc Represents a CUIFontFilePackagePB.
         * @implements ICUIFontFilePackagePB
         * @constructor
         * @param {ICUIFontFilePackagePB=} [properties] Properties to set
         */
        function CUIFontFilePackagePB(properties) {
            this.encrypted_font_files = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CUIFontFilePackagePB package_version.
         * @member {number} package_version
         * @memberof CUIFontFilePackagePB
         * @instance
         */
        CUIFontFilePackagePB.prototype.package_version = 0;
    
        /**
         * CUIFontFilePackagePB encrypted_font_files.
         * @member {Array.<CUIFontFilePackagePB.ICUIEncryptedFontFilePB>} encrypted_font_files
         * @memberof CUIFontFilePackagePB
         * @instance
         */
        CUIFontFilePackagePB.prototype.encrypted_font_files = $util.emptyArray;
    
        /**
         * Creates a new CUIFontFilePackagePB instance using the specified properties.
         * @function create
         * @memberof CUIFontFilePackagePB
         * @static
         * @param {ICUIFontFilePackagePB=} [properties] Properties to set
         * @returns {CUIFontFilePackagePB} CUIFontFilePackagePB instance
         */
        CUIFontFilePackagePB.create = function create(properties) {
            return new CUIFontFilePackagePB(properties);
        };
    
        /**
         * Encodes the specified CUIFontFilePackagePB message. Does not implicitly {@link CUIFontFilePackagePB.verify|verify} messages.
         * @function encode
         * @memberof CUIFontFilePackagePB
         * @static
         * @param {ICUIFontFilePackagePB} message CUIFontFilePackagePB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUIFontFilePackagePB.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.package_version);
            if (message.encrypted_font_files != null && message.encrypted_font_files.length)
                for (var i = 0; i < message.encrypted_font_files.length; ++i)
                    $root.CUIFontFilePackagePB.CUIEncryptedFontFilePB.encode(message.encrypted_font_files[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CUIFontFilePackagePB message, length delimited. Does not implicitly {@link CUIFontFilePackagePB.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CUIFontFilePackagePB
         * @static
         * @param {ICUIFontFilePackagePB} message CUIFontFilePackagePB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUIFontFilePackagePB.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CUIFontFilePackagePB message from the specified reader or buffer.
         * @function decode
         * @memberof CUIFontFilePackagePB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CUIFontFilePackagePB} CUIFontFilePackagePB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUIFontFilePackagePB.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CUIFontFilePackagePB();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.package_version = reader.uint32();
                        break;
                    }
                case 2: {
                        if (!(message.encrypted_font_files && message.encrypted_font_files.length))
                            message.encrypted_font_files = [];
                        message.encrypted_font_files.push($root.CUIFontFilePackagePB.CUIEncryptedFontFilePB.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("package_version"))
                throw $util.ProtocolError("missing required 'package_version'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CUIFontFilePackagePB message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CUIFontFilePackagePB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CUIFontFilePackagePB} CUIFontFilePackagePB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUIFontFilePackagePB.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CUIFontFilePackagePB message.
         * @function verify
         * @memberof CUIFontFilePackagePB
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CUIFontFilePackagePB.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.package_version))
                return "package_version: integer expected";
            if (message.encrypted_font_files != null && message.hasOwnProperty("encrypted_font_files")) {
                if (!Array.isArray(message.encrypted_font_files))
                    return "encrypted_font_files: array expected";
                for (var i = 0; i < message.encrypted_font_files.length; ++i) {
                    var error = $root.CUIFontFilePackagePB.CUIEncryptedFontFilePB.verify(message.encrypted_font_files[i]);
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
        CUIFontFilePackagePB.fromObject = function fromObject(object) {
            if (object instanceof $root.CUIFontFilePackagePB)
                return object;
            var message = new $root.CUIFontFilePackagePB();
            if (object.package_version != null)
                message.package_version = object.package_version >>> 0;
            if (object.encrypted_font_files) {
                if (!Array.isArray(object.encrypted_font_files))
                    throw TypeError(".CUIFontFilePackagePB.encrypted_font_files: array expected");
                message.encrypted_font_files = [];
                for (var i = 0; i < object.encrypted_font_files.length; ++i) {
                    if (typeof object.encrypted_font_files[i] !== "object")
                        throw TypeError(".CUIFontFilePackagePB.encrypted_font_files: object expected");
                    message.encrypted_font_files[i] = $root.CUIFontFilePackagePB.CUIEncryptedFontFilePB.fromObject(object.encrypted_font_files[i]);
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
        CUIFontFilePackagePB.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.encrypted_font_files = [];
            if (options.defaults)
                object.package_version = 0;
            if (message.package_version != null && message.hasOwnProperty("package_version"))
                object.package_version = message.package_version;
            if (message.encrypted_font_files && message.encrypted_font_files.length) {
                object.encrypted_font_files = [];
                for (var j = 0; j < message.encrypted_font_files.length; ++j)
                    object.encrypted_font_files[j] = $root.CUIFontFilePackagePB.CUIEncryptedFontFilePB.toObject(message.encrypted_font_files[j], options);
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
        CUIFontFilePackagePB.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CUIFontFilePackagePB
         * @function getTypeUrl
         * @memberof CUIFontFilePackagePB
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CUIFontFilePackagePB.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CUIFontFilePackagePB";
        };
    
        CUIFontFilePackagePB.CUIEncryptedFontFilePB = (function() {
    
            /**
             * Properties of a CUIEncryptedFontFilePB.
             * @memberof CUIFontFilePackagePB
             * @interface ICUIEncryptedFontFilePB
             * @property {Uint8Array|null} [encrypted_contents] CUIEncryptedFontFilePB encrypted_contents
             */
    
            /**
             * Constructs a new CUIEncryptedFontFilePB.
             * @memberof CUIFontFilePackagePB
             * @classdesc Represents a CUIEncryptedFontFilePB.
             * @implements ICUIEncryptedFontFilePB
             * @constructor
             * @param {CUIFontFilePackagePB.ICUIEncryptedFontFilePB=} [properties] Properties to set
             */
            function CUIEncryptedFontFilePB(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
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
             * @param {CUIFontFilePackagePB.ICUIEncryptedFontFilePB=} [properties] Properties to set
             * @returns {CUIFontFilePackagePB.CUIEncryptedFontFilePB} CUIEncryptedFontFilePB instance
             */
            CUIEncryptedFontFilePB.create = function create(properties) {
                return new CUIEncryptedFontFilePB(properties);
            };
    
            /**
             * Encodes the specified CUIEncryptedFontFilePB message. Does not implicitly {@link CUIFontFilePackagePB.CUIEncryptedFontFilePB.verify|verify} messages.
             * @function encode
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @static
             * @param {CUIFontFilePackagePB.ICUIEncryptedFontFilePB} message CUIEncryptedFontFilePB message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CUIEncryptedFontFilePB.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.encrypted_contents != null && Object.hasOwnProperty.call(message, "encrypted_contents"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.encrypted_contents);
                return writer;
            };
    
            /**
             * Encodes the specified CUIEncryptedFontFilePB message, length delimited. Does not implicitly {@link CUIFontFilePackagePB.CUIEncryptedFontFilePB.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @static
             * @param {CUIFontFilePackagePB.ICUIEncryptedFontFilePB} message CUIEncryptedFontFilePB message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CUIEncryptedFontFilePB.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CUIEncryptedFontFilePB message from the specified reader or buffer.
             * @function decode
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CUIFontFilePackagePB.CUIEncryptedFontFilePB} CUIEncryptedFontFilePB
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CUIEncryptedFontFilePB.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CUIFontFilePackagePB.CUIEncryptedFontFilePB();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.encrypted_contents = reader.bytes();
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
             * Decodes a CUIEncryptedFontFilePB message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CUIFontFilePackagePB.CUIEncryptedFontFilePB} CUIEncryptedFontFilePB
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CUIEncryptedFontFilePB.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CUIEncryptedFontFilePB message.
             * @function verify
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CUIEncryptedFontFilePB.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.encrypted_contents != null && message.hasOwnProperty("encrypted_contents"))
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
            CUIEncryptedFontFilePB.fromObject = function fromObject(object) {
                if (object instanceof $root.CUIFontFilePackagePB.CUIEncryptedFontFilePB)
                    return object;
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
            CUIEncryptedFontFilePB.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.encrypted_contents = "";
                    else {
                        object.encrypted_contents = [];
                        if (options.bytes !== Array)
                            object.encrypted_contents = $util.newBuffer(object.encrypted_contents);
                    }
                if (message.encrypted_contents != null && message.hasOwnProperty("encrypted_contents"))
                    object.encrypted_contents = options.bytes === String ? $util.base64.encode(message.encrypted_contents, 0, message.encrypted_contents.length) : options.bytes === Array ? Array.prototype.slice.call(message.encrypted_contents) : message.encrypted_contents;
                return object;
            };
    
            /**
             * Converts this CUIEncryptedFontFilePB to JSON.
             * @function toJSON
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CUIEncryptedFontFilePB.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for CUIEncryptedFontFilePB
             * @function getTypeUrl
             * @memberof CUIFontFilePackagePB.CUIEncryptedFontFilePB
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CUIEncryptedFontFilePB.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CUIFontFilePackagePB.CUIEncryptedFontFilePB";
            };
    
            return CUIEncryptedFontFilePB;
        })();
    
        return CUIFontFilePackagePB;
    })();

    return $root;
});
