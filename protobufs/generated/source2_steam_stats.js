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
     * ESource2PlayStatsFieldType enum.
     * @exports ESource2PlayStatsFieldType
     * @enum {number}
     * @property {number} Source2PlayStats_Invalid=0 Source2PlayStats_Invalid value
     * @property {number} Source2PlayStats_UInt64=1 Source2PlayStats_UInt64 value
     * @property {number} Source2PlayStats_UInt32=2 Source2PlayStats_UInt32 value
     * @property {number} Source2PlayStats_UInt16=3 Source2PlayStats_UInt16 value
     * @property {number} Source2PlayStats_UInt8=4 Source2PlayStats_UInt8 value
     * @property {number} Source2PlayStats_Int64=5 Source2PlayStats_Int64 value
     * @property {number} Source2PlayStats_Int32=6 Source2PlayStats_Int32 value
     * @property {number} Source2PlayStats_Int16=7 Source2PlayStats_Int16 value
     * @property {number} Source2PlayStats_Int8=8 Source2PlayStats_Int8 value
     * @property {number} Source2PlayStats_Float64=9 Source2PlayStats_Float64 value
     * @property {number} Source2PlayStats_Float32=10 Source2PlayStats_Float32 value
     * @property {number} Source2PlayStats_Bool=11 Source2PlayStats_Bool value
     * @property {number} Source2PlayStats_String=12 Source2PlayStats_String value
     * @property {number} Source2PlayStats_LowCardinalityString=13 Source2PlayStats_LowCardinalityString value
     * @property {number} Source2PlayStats_UTCDateTime=14 Source2PlayStats_UTCDateTime value
     * @property {number} Source2PlayStats_SteamIDTrustBucket=15 Source2PlayStats_SteamIDTrustBucket value
     * @property {number} Source2PlayStats_SteamIDTrustBucketMin=16 Source2PlayStats_SteamIDTrustBucketMin value
     */
    $root.ESource2PlayStatsFieldType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Source2PlayStats_Invalid"] = 0;
        values[valuesById[1] = "Source2PlayStats_UInt64"] = 1;
        values[valuesById[2] = "Source2PlayStats_UInt32"] = 2;
        values[valuesById[3] = "Source2PlayStats_UInt16"] = 3;
        values[valuesById[4] = "Source2PlayStats_UInt8"] = 4;
        values[valuesById[5] = "Source2PlayStats_Int64"] = 5;
        values[valuesById[6] = "Source2PlayStats_Int32"] = 6;
        values[valuesById[7] = "Source2PlayStats_Int16"] = 7;
        values[valuesById[8] = "Source2PlayStats_Int8"] = 8;
        values[valuesById[9] = "Source2PlayStats_Float64"] = 9;
        values[valuesById[10] = "Source2PlayStats_Float32"] = 10;
        values[valuesById[11] = "Source2PlayStats_Bool"] = 11;
        values[valuesById[12] = "Source2PlayStats_String"] = 12;
        values[valuesById[13] = "Source2PlayStats_LowCardinalityString"] = 13;
        values[valuesById[14] = "Source2PlayStats_UTCDateTime"] = 14;
        values[valuesById[15] = "Source2PlayStats_SteamIDTrustBucket"] = 15;
        values[valuesById[16] = "Source2PlayStats_SteamIDTrustBucketMin"] = 16;
        return values;
    })();
    
    $root.CMsgSource2SystemSpecs = (function() {
    
        /**
         * Properties of a CMsgSource2SystemSpecs.
         * @exports ICMsgSource2SystemSpecs
         * @interface ICMsgSource2SystemSpecs
         * @property {string|null} [cpu_id] CMsgSource2SystemSpecs cpu_id
         * @property {string|null} [cpu_brand] CMsgSource2SystemSpecs cpu_brand
         * @property {number|null} [cpu_model] CMsgSource2SystemSpecs cpu_model
         * @property {number|null} [cpu_num_physical] CMsgSource2SystemSpecs cpu_num_physical
         * @property {number|null} [ram_physical_total_mb] CMsgSource2SystemSpecs ram_physical_total_mb
         * @property {string|null} [gpu_rendersystem_dll_name] CMsgSource2SystemSpecs gpu_rendersystem_dll_name
         * @property {number|null} [gpu_vendor_id] CMsgSource2SystemSpecs gpu_vendor_id
         * @property {string|null} [gpu_driver_name] CMsgSource2SystemSpecs gpu_driver_name
         * @property {number|null} [gpu_driver_version_high] CMsgSource2SystemSpecs gpu_driver_version_high
         * @property {number|null} [gpu_driver_version_low] CMsgSource2SystemSpecs gpu_driver_version_low
         * @property {number|null} [gpu_dx_support_level] CMsgSource2SystemSpecs gpu_dx_support_level
         * @property {number|null} [gpu_texture_memory_size_mb] CMsgSource2SystemSpecs gpu_texture_memory_size_mb
         * @property {number|null} [backbuffer_width] CMsgSource2SystemSpecs backbuffer_width
         * @property {number|null} [backbuffer_height] CMsgSource2SystemSpecs backbuffer_height
         */
    
        /**
         * Constructs a new CMsgSource2SystemSpecs.
         * @exports CMsgSource2SystemSpecs
         * @classdesc Represents a CMsgSource2SystemSpecs.
         * @implements ICMsgSource2SystemSpecs
         * @constructor
         * @param {ICMsgSource2SystemSpecs=} [properties] Properties to set
         */
        function CMsgSource2SystemSpecs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSource2SystemSpecs cpu_id.
         * @member {string} cpu_id
         * @memberof CMsgSource2SystemSpecs
         * @instance
         */
        CMsgSource2SystemSpecs.prototype.cpu_id = "";
    
        /**
         * CMsgSource2SystemSpecs cpu_brand.
         * @member {string} cpu_brand
         * @memberof CMsgSource2SystemSpecs
         * @instance
         */
        CMsgSource2SystemSpecs.prototype.cpu_brand = "";
    
        /**
         * CMsgSource2SystemSpecs cpu_model.
         * @member {number} cpu_model
         * @memberof CMsgSource2SystemSpecs
         * @instance
         */
        CMsgSource2SystemSpecs.prototype.cpu_model = 0;
    
        /**
         * CMsgSource2SystemSpecs cpu_num_physical.
         * @member {number} cpu_num_physical
         * @memberof CMsgSource2SystemSpecs
         * @instance
         */
        CMsgSource2SystemSpecs.prototype.cpu_num_physical = 0;
    
        /**
         * CMsgSource2SystemSpecs ram_physical_total_mb.
         * @member {number} ram_physical_total_mb
         * @memberof CMsgSource2SystemSpecs
         * @instance
         */
        CMsgSource2SystemSpecs.prototype.ram_physical_total_mb = 0;
    
        /**
         * CMsgSource2SystemSpecs gpu_rendersystem_dll_name.
         * @member {string} gpu_rendersystem_dll_name
         * @memberof CMsgSource2SystemSpecs
         * @instance
         */
        CMsgSource2SystemSpecs.prototype.gpu_rendersystem_dll_name = "";
    
        /**
         * CMsgSource2SystemSpecs gpu_vendor_id.
         * @member {number} gpu_vendor_id
         * @memberof CMsgSource2SystemSpecs
         * @instance
         */
        CMsgSource2SystemSpecs.prototype.gpu_vendor_id = 0;
    
        /**
         * CMsgSource2SystemSpecs gpu_driver_name.
         * @member {string} gpu_driver_name
         * @memberof CMsgSource2SystemSpecs
         * @instance
         */
        CMsgSource2SystemSpecs.prototype.gpu_driver_name = "";
    
        /**
         * CMsgSource2SystemSpecs gpu_driver_version_high.
         * @member {number} gpu_driver_version_high
         * @memberof CMsgSource2SystemSpecs
         * @instance
         */
        CMsgSource2SystemSpecs.prototype.gpu_driver_version_high = 0;
    
        /**
         * CMsgSource2SystemSpecs gpu_driver_version_low.
         * @member {number} gpu_driver_version_low
         * @memberof CMsgSource2SystemSpecs
         * @instance
         */
        CMsgSource2SystemSpecs.prototype.gpu_driver_version_low = 0;
    
        /**
         * CMsgSource2SystemSpecs gpu_dx_support_level.
         * @member {number} gpu_dx_support_level
         * @memberof CMsgSource2SystemSpecs
         * @instance
         */
        CMsgSource2SystemSpecs.prototype.gpu_dx_support_level = 0;
    
        /**
         * CMsgSource2SystemSpecs gpu_texture_memory_size_mb.
         * @member {number} gpu_texture_memory_size_mb
         * @memberof CMsgSource2SystemSpecs
         * @instance
         */
        CMsgSource2SystemSpecs.prototype.gpu_texture_memory_size_mb = 0;
    
        /**
         * CMsgSource2SystemSpecs backbuffer_width.
         * @member {number} backbuffer_width
         * @memberof CMsgSource2SystemSpecs
         * @instance
         */
        CMsgSource2SystemSpecs.prototype.backbuffer_width = 0;
    
        /**
         * CMsgSource2SystemSpecs backbuffer_height.
         * @member {number} backbuffer_height
         * @memberof CMsgSource2SystemSpecs
         * @instance
         */
        CMsgSource2SystemSpecs.prototype.backbuffer_height = 0;
    
        /**
         * Creates a new CMsgSource2SystemSpecs instance using the specified properties.
         * @function create
         * @memberof CMsgSource2SystemSpecs
         * @static
         * @param {ICMsgSource2SystemSpecs=} [properties] Properties to set
         * @returns {CMsgSource2SystemSpecs} CMsgSource2SystemSpecs instance
         */
        CMsgSource2SystemSpecs.create = function create(properties) {
            return new CMsgSource2SystemSpecs(properties);
        };
    
        /**
         * Encodes the specified CMsgSource2SystemSpecs message. Does not implicitly {@link CMsgSource2SystemSpecs.verify|verify} messages.
         * @function encode
         * @memberof CMsgSource2SystemSpecs
         * @static
         * @param {ICMsgSource2SystemSpecs} message CMsgSource2SystemSpecs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSource2SystemSpecs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cpu_id != null && Object.hasOwnProperty.call(message, "cpu_id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cpu_id);
            if (message.cpu_brand != null && Object.hasOwnProperty.call(message, "cpu_brand"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.cpu_brand);
            if (message.cpu_model != null && Object.hasOwnProperty.call(message, "cpu_model"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.cpu_model);
            if (message.cpu_num_physical != null && Object.hasOwnProperty.call(message, "cpu_num_physical"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.cpu_num_physical);
            if (message.ram_physical_total_mb != null && Object.hasOwnProperty.call(message, "ram_physical_total_mb"))
                writer.uint32(/* id 21, wireType 0 =*/168).uint32(message.ram_physical_total_mb);
            if (message.gpu_rendersystem_dll_name != null && Object.hasOwnProperty.call(message, "gpu_rendersystem_dll_name"))
                writer.uint32(/* id 41, wireType 2 =*/330).string(message.gpu_rendersystem_dll_name);
            if (message.gpu_vendor_id != null && Object.hasOwnProperty.call(message, "gpu_vendor_id"))
                writer.uint32(/* id 42, wireType 0 =*/336).uint32(message.gpu_vendor_id);
            if (message.gpu_driver_name != null && Object.hasOwnProperty.call(message, "gpu_driver_name"))
                writer.uint32(/* id 43, wireType 2 =*/346).string(message.gpu_driver_name);
            if (message.gpu_driver_version_high != null && Object.hasOwnProperty.call(message, "gpu_driver_version_high"))
                writer.uint32(/* id 44, wireType 0 =*/352).uint32(message.gpu_driver_version_high);
            if (message.gpu_driver_version_low != null && Object.hasOwnProperty.call(message, "gpu_driver_version_low"))
                writer.uint32(/* id 45, wireType 0 =*/360).uint32(message.gpu_driver_version_low);
            if (message.gpu_dx_support_level != null && Object.hasOwnProperty.call(message, "gpu_dx_support_level"))
                writer.uint32(/* id 46, wireType 0 =*/368).uint32(message.gpu_dx_support_level);
            if (message.gpu_texture_memory_size_mb != null && Object.hasOwnProperty.call(message, "gpu_texture_memory_size_mb"))
                writer.uint32(/* id 47, wireType 0 =*/376).uint32(message.gpu_texture_memory_size_mb);
            if (message.backbuffer_width != null && Object.hasOwnProperty.call(message, "backbuffer_width"))
                writer.uint32(/* id 51, wireType 0 =*/408).uint32(message.backbuffer_width);
            if (message.backbuffer_height != null && Object.hasOwnProperty.call(message, "backbuffer_height"))
                writer.uint32(/* id 52, wireType 0 =*/416).uint32(message.backbuffer_height);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSource2SystemSpecs message, length delimited. Does not implicitly {@link CMsgSource2SystemSpecs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSource2SystemSpecs
         * @static
         * @param {ICMsgSource2SystemSpecs} message CMsgSource2SystemSpecs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSource2SystemSpecs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSource2SystemSpecs message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSource2SystemSpecs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSource2SystemSpecs} CMsgSource2SystemSpecs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSource2SystemSpecs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSource2SystemSpecs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.cpu_id = reader.string();
                        break;
                    }
                case 2: {
                        message.cpu_brand = reader.string();
                        break;
                    }
                case 3: {
                        message.cpu_model = reader.uint32();
                        break;
                    }
                case 4: {
                        message.cpu_num_physical = reader.uint32();
                        break;
                    }
                case 21: {
                        message.ram_physical_total_mb = reader.uint32();
                        break;
                    }
                case 41: {
                        message.gpu_rendersystem_dll_name = reader.string();
                        break;
                    }
                case 42: {
                        message.gpu_vendor_id = reader.uint32();
                        break;
                    }
                case 43: {
                        message.gpu_driver_name = reader.string();
                        break;
                    }
                case 44: {
                        message.gpu_driver_version_high = reader.uint32();
                        break;
                    }
                case 45: {
                        message.gpu_driver_version_low = reader.uint32();
                        break;
                    }
                case 46: {
                        message.gpu_dx_support_level = reader.uint32();
                        break;
                    }
                case 47: {
                        message.gpu_texture_memory_size_mb = reader.uint32();
                        break;
                    }
                case 51: {
                        message.backbuffer_width = reader.uint32();
                        break;
                    }
                case 52: {
                        message.backbuffer_height = reader.uint32();
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
         * Decodes a CMsgSource2SystemSpecs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSource2SystemSpecs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSource2SystemSpecs} CMsgSource2SystemSpecs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSource2SystemSpecs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSource2SystemSpecs message.
         * @function verify
         * @memberof CMsgSource2SystemSpecs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSource2SystemSpecs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cpu_id != null && message.hasOwnProperty("cpu_id"))
                if (!$util.isString(message.cpu_id))
                    return "cpu_id: string expected";
            if (message.cpu_brand != null && message.hasOwnProperty("cpu_brand"))
                if (!$util.isString(message.cpu_brand))
                    return "cpu_brand: string expected";
            if (message.cpu_model != null && message.hasOwnProperty("cpu_model"))
                if (!$util.isInteger(message.cpu_model))
                    return "cpu_model: integer expected";
            if (message.cpu_num_physical != null && message.hasOwnProperty("cpu_num_physical"))
                if (!$util.isInteger(message.cpu_num_physical))
                    return "cpu_num_physical: integer expected";
            if (message.ram_physical_total_mb != null && message.hasOwnProperty("ram_physical_total_mb"))
                if (!$util.isInteger(message.ram_physical_total_mb))
                    return "ram_physical_total_mb: integer expected";
            if (message.gpu_rendersystem_dll_name != null && message.hasOwnProperty("gpu_rendersystem_dll_name"))
                if (!$util.isString(message.gpu_rendersystem_dll_name))
                    return "gpu_rendersystem_dll_name: string expected";
            if (message.gpu_vendor_id != null && message.hasOwnProperty("gpu_vendor_id"))
                if (!$util.isInteger(message.gpu_vendor_id))
                    return "gpu_vendor_id: integer expected";
            if (message.gpu_driver_name != null && message.hasOwnProperty("gpu_driver_name"))
                if (!$util.isString(message.gpu_driver_name))
                    return "gpu_driver_name: string expected";
            if (message.gpu_driver_version_high != null && message.hasOwnProperty("gpu_driver_version_high"))
                if (!$util.isInteger(message.gpu_driver_version_high))
                    return "gpu_driver_version_high: integer expected";
            if (message.gpu_driver_version_low != null && message.hasOwnProperty("gpu_driver_version_low"))
                if (!$util.isInteger(message.gpu_driver_version_low))
                    return "gpu_driver_version_low: integer expected";
            if (message.gpu_dx_support_level != null && message.hasOwnProperty("gpu_dx_support_level"))
                if (!$util.isInteger(message.gpu_dx_support_level))
                    return "gpu_dx_support_level: integer expected";
            if (message.gpu_texture_memory_size_mb != null && message.hasOwnProperty("gpu_texture_memory_size_mb"))
                if (!$util.isInteger(message.gpu_texture_memory_size_mb))
                    return "gpu_texture_memory_size_mb: integer expected";
            if (message.backbuffer_width != null && message.hasOwnProperty("backbuffer_width"))
                if (!$util.isInteger(message.backbuffer_width))
                    return "backbuffer_width: integer expected";
            if (message.backbuffer_height != null && message.hasOwnProperty("backbuffer_height"))
                if (!$util.isInteger(message.backbuffer_height))
                    return "backbuffer_height: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSource2SystemSpecs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSource2SystemSpecs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSource2SystemSpecs} CMsgSource2SystemSpecs
         */
        CMsgSource2SystemSpecs.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSource2SystemSpecs)
                return object;
            var message = new $root.CMsgSource2SystemSpecs();
            if (object.cpu_id != null)
                message.cpu_id = String(object.cpu_id);
            if (object.cpu_brand != null)
                message.cpu_brand = String(object.cpu_brand);
            if (object.cpu_model != null)
                message.cpu_model = object.cpu_model >>> 0;
            if (object.cpu_num_physical != null)
                message.cpu_num_physical = object.cpu_num_physical >>> 0;
            if (object.ram_physical_total_mb != null)
                message.ram_physical_total_mb = object.ram_physical_total_mb >>> 0;
            if (object.gpu_rendersystem_dll_name != null)
                message.gpu_rendersystem_dll_name = String(object.gpu_rendersystem_dll_name);
            if (object.gpu_vendor_id != null)
                message.gpu_vendor_id = object.gpu_vendor_id >>> 0;
            if (object.gpu_driver_name != null)
                message.gpu_driver_name = String(object.gpu_driver_name);
            if (object.gpu_driver_version_high != null)
                message.gpu_driver_version_high = object.gpu_driver_version_high >>> 0;
            if (object.gpu_driver_version_low != null)
                message.gpu_driver_version_low = object.gpu_driver_version_low >>> 0;
            if (object.gpu_dx_support_level != null)
                message.gpu_dx_support_level = object.gpu_dx_support_level >>> 0;
            if (object.gpu_texture_memory_size_mb != null)
                message.gpu_texture_memory_size_mb = object.gpu_texture_memory_size_mb >>> 0;
            if (object.backbuffer_width != null)
                message.backbuffer_width = object.backbuffer_width >>> 0;
            if (object.backbuffer_height != null)
                message.backbuffer_height = object.backbuffer_height >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSource2SystemSpecs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSource2SystemSpecs
         * @static
         * @param {CMsgSource2SystemSpecs} message CMsgSource2SystemSpecs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSource2SystemSpecs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cpu_id = "";
                object.cpu_brand = "";
                object.cpu_model = 0;
                object.cpu_num_physical = 0;
                object.ram_physical_total_mb = 0;
                object.gpu_rendersystem_dll_name = "";
                object.gpu_vendor_id = 0;
                object.gpu_driver_name = "";
                object.gpu_driver_version_high = 0;
                object.gpu_driver_version_low = 0;
                object.gpu_dx_support_level = 0;
                object.gpu_texture_memory_size_mb = 0;
                object.backbuffer_width = 0;
                object.backbuffer_height = 0;
            }
            if (message.cpu_id != null && message.hasOwnProperty("cpu_id"))
                object.cpu_id = message.cpu_id;
            if (message.cpu_brand != null && message.hasOwnProperty("cpu_brand"))
                object.cpu_brand = message.cpu_brand;
            if (message.cpu_model != null && message.hasOwnProperty("cpu_model"))
                object.cpu_model = message.cpu_model;
            if (message.cpu_num_physical != null && message.hasOwnProperty("cpu_num_physical"))
                object.cpu_num_physical = message.cpu_num_physical;
            if (message.ram_physical_total_mb != null && message.hasOwnProperty("ram_physical_total_mb"))
                object.ram_physical_total_mb = message.ram_physical_total_mb;
            if (message.gpu_rendersystem_dll_name != null && message.hasOwnProperty("gpu_rendersystem_dll_name"))
                object.gpu_rendersystem_dll_name = message.gpu_rendersystem_dll_name;
            if (message.gpu_vendor_id != null && message.hasOwnProperty("gpu_vendor_id"))
                object.gpu_vendor_id = message.gpu_vendor_id;
            if (message.gpu_driver_name != null && message.hasOwnProperty("gpu_driver_name"))
                object.gpu_driver_name = message.gpu_driver_name;
            if (message.gpu_driver_version_high != null && message.hasOwnProperty("gpu_driver_version_high"))
                object.gpu_driver_version_high = message.gpu_driver_version_high;
            if (message.gpu_driver_version_low != null && message.hasOwnProperty("gpu_driver_version_low"))
                object.gpu_driver_version_low = message.gpu_driver_version_low;
            if (message.gpu_dx_support_level != null && message.hasOwnProperty("gpu_dx_support_level"))
                object.gpu_dx_support_level = message.gpu_dx_support_level;
            if (message.gpu_texture_memory_size_mb != null && message.hasOwnProperty("gpu_texture_memory_size_mb"))
                object.gpu_texture_memory_size_mb = message.gpu_texture_memory_size_mb;
            if (message.backbuffer_width != null && message.hasOwnProperty("backbuffer_width"))
                object.backbuffer_width = message.backbuffer_width;
            if (message.backbuffer_height != null && message.hasOwnProperty("backbuffer_height"))
                object.backbuffer_height = message.backbuffer_height;
            return object;
        };
    
        /**
         * Converts this CMsgSource2SystemSpecs to JSON.
         * @function toJSON
         * @memberof CMsgSource2SystemSpecs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSource2SystemSpecs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgSource2SystemSpecs
         * @function getTypeUrl
         * @memberof CMsgSource2SystemSpecs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgSource2SystemSpecs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgSource2SystemSpecs";
        };
    
        return CMsgSource2SystemSpecs;
    })();
    
    $root.CMsgSource2VProfLiteReportItem = (function() {
    
        /**
         * Properties of a CMsgSource2VProfLiteReportItem.
         * @exports ICMsgSource2VProfLiteReportItem
         * @interface ICMsgSource2VProfLiteReportItem
         * @property {string|null} [name] CMsgSource2VProfLiteReportItem name
         * @property {number|null} [active_samples] CMsgSource2VProfLiteReportItem active_samples
         * @property {number|null} [active_samples_1secmax] CMsgSource2VProfLiteReportItem active_samples_1secmax
         * @property {number|null} [usec_max] CMsgSource2VProfLiteReportItem usec_max
         * @property {number|null} [usec_avg_active] CMsgSource2VProfLiteReportItem usec_avg_active
         * @property {number|null} [usec_p50_active] CMsgSource2VProfLiteReportItem usec_p50_active
         * @property {number|null} [usec_p99_active] CMsgSource2VProfLiteReportItem usec_p99_active
         * @property {number|null} [usec_avg_all] CMsgSource2VProfLiteReportItem usec_avg_all
         * @property {number|null} [usec_p50_all] CMsgSource2VProfLiteReportItem usec_p50_all
         * @property {number|null} [usec_p99_all] CMsgSource2VProfLiteReportItem usec_p99_all
         * @property {number|null} [usec_1secmax_avg_active] CMsgSource2VProfLiteReportItem usec_1secmax_avg_active
         * @property {number|null} [usec_1secmax_p50_active] CMsgSource2VProfLiteReportItem usec_1secmax_p50_active
         * @property {number|null} [usec_1secmax_p95_active] CMsgSource2VProfLiteReportItem usec_1secmax_p95_active
         * @property {number|null} [usec_1secmax_p99_active] CMsgSource2VProfLiteReportItem usec_1secmax_p99_active
         * @property {number|null} [usec_1secmax_avg_all] CMsgSource2VProfLiteReportItem usec_1secmax_avg_all
         * @property {number|null} [usec_1secmax_p50_all] CMsgSource2VProfLiteReportItem usec_1secmax_p50_all
         * @property {number|null} [usec_1secmax_p95_all] CMsgSource2VProfLiteReportItem usec_1secmax_p95_all
         * @property {number|null} [usec_1secmax_p99_all] CMsgSource2VProfLiteReportItem usec_1secmax_p99_all
         */
    
        /**
         * Constructs a new CMsgSource2VProfLiteReportItem.
         * @exports CMsgSource2VProfLiteReportItem
         * @classdesc Represents a CMsgSource2VProfLiteReportItem.
         * @implements ICMsgSource2VProfLiteReportItem
         * @constructor
         * @param {ICMsgSource2VProfLiteReportItem=} [properties] Properties to set
         */
        function CMsgSource2VProfLiteReportItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSource2VProfLiteReportItem name.
         * @member {string} name
         * @memberof CMsgSource2VProfLiteReportItem
         * @instance
         */
        CMsgSource2VProfLiteReportItem.prototype.name = "";
    
        /**
         * CMsgSource2VProfLiteReportItem active_samples.
         * @member {number} active_samples
         * @memberof CMsgSource2VProfLiteReportItem
         * @instance
         */
        CMsgSource2VProfLiteReportItem.prototype.active_samples = 0;
    
        /**
         * CMsgSource2VProfLiteReportItem active_samples_1secmax.
         * @member {number} active_samples_1secmax
         * @memberof CMsgSource2VProfLiteReportItem
         * @instance
         */
        CMsgSource2VProfLiteReportItem.prototype.active_samples_1secmax = 0;
    
        /**
         * CMsgSource2VProfLiteReportItem usec_max.
         * @member {number} usec_max
         * @memberof CMsgSource2VProfLiteReportItem
         * @instance
         */
        CMsgSource2VProfLiteReportItem.prototype.usec_max = 0;
    
        /**
         * CMsgSource2VProfLiteReportItem usec_avg_active.
         * @member {number} usec_avg_active
         * @memberof CMsgSource2VProfLiteReportItem
         * @instance
         */
        CMsgSource2VProfLiteReportItem.prototype.usec_avg_active = 0;
    
        /**
         * CMsgSource2VProfLiteReportItem usec_p50_active.
         * @member {number} usec_p50_active
         * @memberof CMsgSource2VProfLiteReportItem
         * @instance
         */
        CMsgSource2VProfLiteReportItem.prototype.usec_p50_active = 0;
    
        /**
         * CMsgSource2VProfLiteReportItem usec_p99_active.
         * @member {number} usec_p99_active
         * @memberof CMsgSource2VProfLiteReportItem
         * @instance
         */
        CMsgSource2VProfLiteReportItem.prototype.usec_p99_active = 0;
    
        /**
         * CMsgSource2VProfLiteReportItem usec_avg_all.
         * @member {number} usec_avg_all
         * @memberof CMsgSource2VProfLiteReportItem
         * @instance
         */
        CMsgSource2VProfLiteReportItem.prototype.usec_avg_all = 0;
    
        /**
         * CMsgSource2VProfLiteReportItem usec_p50_all.
         * @member {number} usec_p50_all
         * @memberof CMsgSource2VProfLiteReportItem
         * @instance
         */
        CMsgSource2VProfLiteReportItem.prototype.usec_p50_all = 0;
    
        /**
         * CMsgSource2VProfLiteReportItem usec_p99_all.
         * @member {number} usec_p99_all
         * @memberof CMsgSource2VProfLiteReportItem
         * @instance
         */
        CMsgSource2VProfLiteReportItem.prototype.usec_p99_all = 0;
    
        /**
         * CMsgSource2VProfLiteReportItem usec_1secmax_avg_active.
         * @member {number} usec_1secmax_avg_active
         * @memberof CMsgSource2VProfLiteReportItem
         * @instance
         */
        CMsgSource2VProfLiteReportItem.prototype.usec_1secmax_avg_active = 0;
    
        /**
         * CMsgSource2VProfLiteReportItem usec_1secmax_p50_active.
         * @member {number} usec_1secmax_p50_active
         * @memberof CMsgSource2VProfLiteReportItem
         * @instance
         */
        CMsgSource2VProfLiteReportItem.prototype.usec_1secmax_p50_active = 0;
    
        /**
         * CMsgSource2VProfLiteReportItem usec_1secmax_p95_active.
         * @member {number} usec_1secmax_p95_active
         * @memberof CMsgSource2VProfLiteReportItem
         * @instance
         */
        CMsgSource2VProfLiteReportItem.prototype.usec_1secmax_p95_active = 0;
    
        /**
         * CMsgSource2VProfLiteReportItem usec_1secmax_p99_active.
         * @member {number} usec_1secmax_p99_active
         * @memberof CMsgSource2VProfLiteReportItem
         * @instance
         */
        CMsgSource2VProfLiteReportItem.prototype.usec_1secmax_p99_active = 0;
    
        /**
         * CMsgSource2VProfLiteReportItem usec_1secmax_avg_all.
         * @member {number} usec_1secmax_avg_all
         * @memberof CMsgSource2VProfLiteReportItem
         * @instance
         */
        CMsgSource2VProfLiteReportItem.prototype.usec_1secmax_avg_all = 0;
    
        /**
         * CMsgSource2VProfLiteReportItem usec_1secmax_p50_all.
         * @member {number} usec_1secmax_p50_all
         * @memberof CMsgSource2VProfLiteReportItem
         * @instance
         */
        CMsgSource2VProfLiteReportItem.prototype.usec_1secmax_p50_all = 0;
    
        /**
         * CMsgSource2VProfLiteReportItem usec_1secmax_p95_all.
         * @member {number} usec_1secmax_p95_all
         * @memberof CMsgSource2VProfLiteReportItem
         * @instance
         */
        CMsgSource2VProfLiteReportItem.prototype.usec_1secmax_p95_all = 0;
    
        /**
         * CMsgSource2VProfLiteReportItem usec_1secmax_p99_all.
         * @member {number} usec_1secmax_p99_all
         * @memberof CMsgSource2VProfLiteReportItem
         * @instance
         */
        CMsgSource2VProfLiteReportItem.prototype.usec_1secmax_p99_all = 0;
    
        /**
         * Creates a new CMsgSource2VProfLiteReportItem instance using the specified properties.
         * @function create
         * @memberof CMsgSource2VProfLiteReportItem
         * @static
         * @param {ICMsgSource2VProfLiteReportItem=} [properties] Properties to set
         * @returns {CMsgSource2VProfLiteReportItem} CMsgSource2VProfLiteReportItem instance
         */
        CMsgSource2VProfLiteReportItem.create = function create(properties) {
            return new CMsgSource2VProfLiteReportItem(properties);
        };
    
        /**
         * Encodes the specified CMsgSource2VProfLiteReportItem message. Does not implicitly {@link CMsgSource2VProfLiteReportItem.verify|verify} messages.
         * @function encode
         * @memberof CMsgSource2VProfLiteReportItem
         * @static
         * @param {ICMsgSource2VProfLiteReportItem} message CMsgSource2VProfLiteReportItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSource2VProfLiteReportItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.active_samples != null && Object.hasOwnProperty.call(message, "active_samples"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.active_samples);
            if (message.usec_max != null && Object.hasOwnProperty.call(message, "usec_max"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.usec_max);
            if (message.active_samples_1secmax != null && Object.hasOwnProperty.call(message, "active_samples_1secmax"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.active_samples_1secmax);
            if (message.usec_avg_active != null && Object.hasOwnProperty.call(message, "usec_avg_active"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.usec_avg_active);
            if (message.usec_p50_active != null && Object.hasOwnProperty.call(message, "usec_p50_active"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.usec_p50_active);
            if (message.usec_p99_active != null && Object.hasOwnProperty.call(message, "usec_p99_active"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.usec_p99_active);
            if (message.usec_avg_all != null && Object.hasOwnProperty.call(message, "usec_avg_all"))
                writer.uint32(/* id 21, wireType 0 =*/168).uint32(message.usec_avg_all);
            if (message.usec_p50_all != null && Object.hasOwnProperty.call(message, "usec_p50_all"))
                writer.uint32(/* id 22, wireType 0 =*/176).uint32(message.usec_p50_all);
            if (message.usec_p99_all != null && Object.hasOwnProperty.call(message, "usec_p99_all"))
                writer.uint32(/* id 23, wireType 0 =*/184).uint32(message.usec_p99_all);
            if (message.usec_1secmax_avg_active != null && Object.hasOwnProperty.call(message, "usec_1secmax_avg_active"))
                writer.uint32(/* id 31, wireType 0 =*/248).uint32(message.usec_1secmax_avg_active);
            if (message.usec_1secmax_p50_active != null && Object.hasOwnProperty.call(message, "usec_1secmax_p50_active"))
                writer.uint32(/* id 32, wireType 0 =*/256).uint32(message.usec_1secmax_p50_active);
            if (message.usec_1secmax_p95_active != null && Object.hasOwnProperty.call(message, "usec_1secmax_p95_active"))
                writer.uint32(/* id 33, wireType 0 =*/264).uint32(message.usec_1secmax_p95_active);
            if (message.usec_1secmax_p99_active != null && Object.hasOwnProperty.call(message, "usec_1secmax_p99_active"))
                writer.uint32(/* id 34, wireType 0 =*/272).uint32(message.usec_1secmax_p99_active);
            if (message.usec_1secmax_avg_all != null && Object.hasOwnProperty.call(message, "usec_1secmax_avg_all"))
                writer.uint32(/* id 41, wireType 0 =*/328).uint32(message.usec_1secmax_avg_all);
            if (message.usec_1secmax_p50_all != null && Object.hasOwnProperty.call(message, "usec_1secmax_p50_all"))
                writer.uint32(/* id 42, wireType 0 =*/336).uint32(message.usec_1secmax_p50_all);
            if (message.usec_1secmax_p95_all != null && Object.hasOwnProperty.call(message, "usec_1secmax_p95_all"))
                writer.uint32(/* id 43, wireType 0 =*/344).uint32(message.usec_1secmax_p95_all);
            if (message.usec_1secmax_p99_all != null && Object.hasOwnProperty.call(message, "usec_1secmax_p99_all"))
                writer.uint32(/* id 44, wireType 0 =*/352).uint32(message.usec_1secmax_p99_all);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSource2VProfLiteReportItem message, length delimited. Does not implicitly {@link CMsgSource2VProfLiteReportItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSource2VProfLiteReportItem
         * @static
         * @param {ICMsgSource2VProfLiteReportItem} message CMsgSource2VProfLiteReportItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSource2VProfLiteReportItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSource2VProfLiteReportItem message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSource2VProfLiteReportItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSource2VProfLiteReportItem} CMsgSource2VProfLiteReportItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSource2VProfLiteReportItem.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSource2VProfLiteReportItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.active_samples = reader.uint32();
                        break;
                    }
                case 4: {
                        message.active_samples_1secmax = reader.uint32();
                        break;
                    }
                case 3: {
                        message.usec_max = reader.uint32();
                        break;
                    }
                case 11: {
                        message.usec_avg_active = reader.uint32();
                        break;
                    }
                case 12: {
                        message.usec_p50_active = reader.uint32();
                        break;
                    }
                case 13: {
                        message.usec_p99_active = reader.uint32();
                        break;
                    }
                case 21: {
                        message.usec_avg_all = reader.uint32();
                        break;
                    }
                case 22: {
                        message.usec_p50_all = reader.uint32();
                        break;
                    }
                case 23: {
                        message.usec_p99_all = reader.uint32();
                        break;
                    }
                case 31: {
                        message.usec_1secmax_avg_active = reader.uint32();
                        break;
                    }
                case 32: {
                        message.usec_1secmax_p50_active = reader.uint32();
                        break;
                    }
                case 33: {
                        message.usec_1secmax_p95_active = reader.uint32();
                        break;
                    }
                case 34: {
                        message.usec_1secmax_p99_active = reader.uint32();
                        break;
                    }
                case 41: {
                        message.usec_1secmax_avg_all = reader.uint32();
                        break;
                    }
                case 42: {
                        message.usec_1secmax_p50_all = reader.uint32();
                        break;
                    }
                case 43: {
                        message.usec_1secmax_p95_all = reader.uint32();
                        break;
                    }
                case 44: {
                        message.usec_1secmax_p99_all = reader.uint32();
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
         * Decodes a CMsgSource2VProfLiteReportItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSource2VProfLiteReportItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSource2VProfLiteReportItem} CMsgSource2VProfLiteReportItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSource2VProfLiteReportItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSource2VProfLiteReportItem message.
         * @function verify
         * @memberof CMsgSource2VProfLiteReportItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSource2VProfLiteReportItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.active_samples != null && message.hasOwnProperty("active_samples"))
                if (!$util.isInteger(message.active_samples))
                    return "active_samples: integer expected";
            if (message.active_samples_1secmax != null && message.hasOwnProperty("active_samples_1secmax"))
                if (!$util.isInteger(message.active_samples_1secmax))
                    return "active_samples_1secmax: integer expected";
            if (message.usec_max != null && message.hasOwnProperty("usec_max"))
                if (!$util.isInteger(message.usec_max))
                    return "usec_max: integer expected";
            if (message.usec_avg_active != null && message.hasOwnProperty("usec_avg_active"))
                if (!$util.isInteger(message.usec_avg_active))
                    return "usec_avg_active: integer expected";
            if (message.usec_p50_active != null && message.hasOwnProperty("usec_p50_active"))
                if (!$util.isInteger(message.usec_p50_active))
                    return "usec_p50_active: integer expected";
            if (message.usec_p99_active != null && message.hasOwnProperty("usec_p99_active"))
                if (!$util.isInteger(message.usec_p99_active))
                    return "usec_p99_active: integer expected";
            if (message.usec_avg_all != null && message.hasOwnProperty("usec_avg_all"))
                if (!$util.isInteger(message.usec_avg_all))
                    return "usec_avg_all: integer expected";
            if (message.usec_p50_all != null && message.hasOwnProperty("usec_p50_all"))
                if (!$util.isInteger(message.usec_p50_all))
                    return "usec_p50_all: integer expected";
            if (message.usec_p99_all != null && message.hasOwnProperty("usec_p99_all"))
                if (!$util.isInteger(message.usec_p99_all))
                    return "usec_p99_all: integer expected";
            if (message.usec_1secmax_avg_active != null && message.hasOwnProperty("usec_1secmax_avg_active"))
                if (!$util.isInteger(message.usec_1secmax_avg_active))
                    return "usec_1secmax_avg_active: integer expected";
            if (message.usec_1secmax_p50_active != null && message.hasOwnProperty("usec_1secmax_p50_active"))
                if (!$util.isInteger(message.usec_1secmax_p50_active))
                    return "usec_1secmax_p50_active: integer expected";
            if (message.usec_1secmax_p95_active != null && message.hasOwnProperty("usec_1secmax_p95_active"))
                if (!$util.isInteger(message.usec_1secmax_p95_active))
                    return "usec_1secmax_p95_active: integer expected";
            if (message.usec_1secmax_p99_active != null && message.hasOwnProperty("usec_1secmax_p99_active"))
                if (!$util.isInteger(message.usec_1secmax_p99_active))
                    return "usec_1secmax_p99_active: integer expected";
            if (message.usec_1secmax_avg_all != null && message.hasOwnProperty("usec_1secmax_avg_all"))
                if (!$util.isInteger(message.usec_1secmax_avg_all))
                    return "usec_1secmax_avg_all: integer expected";
            if (message.usec_1secmax_p50_all != null && message.hasOwnProperty("usec_1secmax_p50_all"))
                if (!$util.isInteger(message.usec_1secmax_p50_all))
                    return "usec_1secmax_p50_all: integer expected";
            if (message.usec_1secmax_p95_all != null && message.hasOwnProperty("usec_1secmax_p95_all"))
                if (!$util.isInteger(message.usec_1secmax_p95_all))
                    return "usec_1secmax_p95_all: integer expected";
            if (message.usec_1secmax_p99_all != null && message.hasOwnProperty("usec_1secmax_p99_all"))
                if (!$util.isInteger(message.usec_1secmax_p99_all))
                    return "usec_1secmax_p99_all: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSource2VProfLiteReportItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSource2VProfLiteReportItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSource2VProfLiteReportItem} CMsgSource2VProfLiteReportItem
         */
        CMsgSource2VProfLiteReportItem.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSource2VProfLiteReportItem)
                return object;
            var message = new $root.CMsgSource2VProfLiteReportItem();
            if (object.name != null)
                message.name = String(object.name);
            if (object.active_samples != null)
                message.active_samples = object.active_samples >>> 0;
            if (object.active_samples_1secmax != null)
                message.active_samples_1secmax = object.active_samples_1secmax >>> 0;
            if (object.usec_max != null)
                message.usec_max = object.usec_max >>> 0;
            if (object.usec_avg_active != null)
                message.usec_avg_active = object.usec_avg_active >>> 0;
            if (object.usec_p50_active != null)
                message.usec_p50_active = object.usec_p50_active >>> 0;
            if (object.usec_p99_active != null)
                message.usec_p99_active = object.usec_p99_active >>> 0;
            if (object.usec_avg_all != null)
                message.usec_avg_all = object.usec_avg_all >>> 0;
            if (object.usec_p50_all != null)
                message.usec_p50_all = object.usec_p50_all >>> 0;
            if (object.usec_p99_all != null)
                message.usec_p99_all = object.usec_p99_all >>> 0;
            if (object.usec_1secmax_avg_active != null)
                message.usec_1secmax_avg_active = object.usec_1secmax_avg_active >>> 0;
            if (object.usec_1secmax_p50_active != null)
                message.usec_1secmax_p50_active = object.usec_1secmax_p50_active >>> 0;
            if (object.usec_1secmax_p95_active != null)
                message.usec_1secmax_p95_active = object.usec_1secmax_p95_active >>> 0;
            if (object.usec_1secmax_p99_active != null)
                message.usec_1secmax_p99_active = object.usec_1secmax_p99_active >>> 0;
            if (object.usec_1secmax_avg_all != null)
                message.usec_1secmax_avg_all = object.usec_1secmax_avg_all >>> 0;
            if (object.usec_1secmax_p50_all != null)
                message.usec_1secmax_p50_all = object.usec_1secmax_p50_all >>> 0;
            if (object.usec_1secmax_p95_all != null)
                message.usec_1secmax_p95_all = object.usec_1secmax_p95_all >>> 0;
            if (object.usec_1secmax_p99_all != null)
                message.usec_1secmax_p99_all = object.usec_1secmax_p99_all >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSource2VProfLiteReportItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSource2VProfLiteReportItem
         * @static
         * @param {CMsgSource2VProfLiteReportItem} message CMsgSource2VProfLiteReportItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSource2VProfLiteReportItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.active_samples = 0;
                object.usec_max = 0;
                object.active_samples_1secmax = 0;
                object.usec_avg_active = 0;
                object.usec_p50_active = 0;
                object.usec_p99_active = 0;
                object.usec_avg_all = 0;
                object.usec_p50_all = 0;
                object.usec_p99_all = 0;
                object.usec_1secmax_avg_active = 0;
                object.usec_1secmax_p50_active = 0;
                object.usec_1secmax_p95_active = 0;
                object.usec_1secmax_p99_active = 0;
                object.usec_1secmax_avg_all = 0;
                object.usec_1secmax_p50_all = 0;
                object.usec_1secmax_p95_all = 0;
                object.usec_1secmax_p99_all = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.active_samples != null && message.hasOwnProperty("active_samples"))
                object.active_samples = message.active_samples;
            if (message.usec_max != null && message.hasOwnProperty("usec_max"))
                object.usec_max = message.usec_max;
            if (message.active_samples_1secmax != null && message.hasOwnProperty("active_samples_1secmax"))
                object.active_samples_1secmax = message.active_samples_1secmax;
            if (message.usec_avg_active != null && message.hasOwnProperty("usec_avg_active"))
                object.usec_avg_active = message.usec_avg_active;
            if (message.usec_p50_active != null && message.hasOwnProperty("usec_p50_active"))
                object.usec_p50_active = message.usec_p50_active;
            if (message.usec_p99_active != null && message.hasOwnProperty("usec_p99_active"))
                object.usec_p99_active = message.usec_p99_active;
            if (message.usec_avg_all != null && message.hasOwnProperty("usec_avg_all"))
                object.usec_avg_all = message.usec_avg_all;
            if (message.usec_p50_all != null && message.hasOwnProperty("usec_p50_all"))
                object.usec_p50_all = message.usec_p50_all;
            if (message.usec_p99_all != null && message.hasOwnProperty("usec_p99_all"))
                object.usec_p99_all = message.usec_p99_all;
            if (message.usec_1secmax_avg_active != null && message.hasOwnProperty("usec_1secmax_avg_active"))
                object.usec_1secmax_avg_active = message.usec_1secmax_avg_active;
            if (message.usec_1secmax_p50_active != null && message.hasOwnProperty("usec_1secmax_p50_active"))
                object.usec_1secmax_p50_active = message.usec_1secmax_p50_active;
            if (message.usec_1secmax_p95_active != null && message.hasOwnProperty("usec_1secmax_p95_active"))
                object.usec_1secmax_p95_active = message.usec_1secmax_p95_active;
            if (message.usec_1secmax_p99_active != null && message.hasOwnProperty("usec_1secmax_p99_active"))
                object.usec_1secmax_p99_active = message.usec_1secmax_p99_active;
            if (message.usec_1secmax_avg_all != null && message.hasOwnProperty("usec_1secmax_avg_all"))
                object.usec_1secmax_avg_all = message.usec_1secmax_avg_all;
            if (message.usec_1secmax_p50_all != null && message.hasOwnProperty("usec_1secmax_p50_all"))
                object.usec_1secmax_p50_all = message.usec_1secmax_p50_all;
            if (message.usec_1secmax_p95_all != null && message.hasOwnProperty("usec_1secmax_p95_all"))
                object.usec_1secmax_p95_all = message.usec_1secmax_p95_all;
            if (message.usec_1secmax_p99_all != null && message.hasOwnProperty("usec_1secmax_p99_all"))
                object.usec_1secmax_p99_all = message.usec_1secmax_p99_all;
            return object;
        };
    
        /**
         * Converts this CMsgSource2VProfLiteReportItem to JSON.
         * @function toJSON
         * @memberof CMsgSource2VProfLiteReportItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSource2VProfLiteReportItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgSource2VProfLiteReportItem
         * @function getTypeUrl
         * @memberof CMsgSource2VProfLiteReportItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgSource2VProfLiteReportItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgSource2VProfLiteReportItem";
        };
    
        return CMsgSource2VProfLiteReportItem;
    })();
    
    $root.CMsgSource2VProfLiteReport = (function() {
    
        /**
         * Properties of a CMsgSource2VProfLiteReport.
         * @exports ICMsgSource2VProfLiteReport
         * @interface ICMsgSource2VProfLiteReport
         * @property {ICMsgSource2VProfLiteReportItem|null} [total] CMsgSource2VProfLiteReport total
         * @property {Array.<ICMsgSource2VProfLiteReportItem>|null} [items] CMsgSource2VProfLiteReport items
         * @property {number|null} [discarded_frames] CMsgSource2VProfLiteReport discarded_frames
         */
    
        /**
         * Constructs a new CMsgSource2VProfLiteReport.
         * @exports CMsgSource2VProfLiteReport
         * @classdesc Represents a CMsgSource2VProfLiteReport.
         * @implements ICMsgSource2VProfLiteReport
         * @constructor
         * @param {ICMsgSource2VProfLiteReport=} [properties] Properties to set
         */
        function CMsgSource2VProfLiteReport(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSource2VProfLiteReport total.
         * @member {ICMsgSource2VProfLiteReportItem|null|undefined} total
         * @memberof CMsgSource2VProfLiteReport
         * @instance
         */
        CMsgSource2VProfLiteReport.prototype.total = null;
    
        /**
         * CMsgSource2VProfLiteReport items.
         * @member {Array.<ICMsgSource2VProfLiteReportItem>} items
         * @memberof CMsgSource2VProfLiteReport
         * @instance
         */
        CMsgSource2VProfLiteReport.prototype.items = $util.emptyArray;
    
        /**
         * CMsgSource2VProfLiteReport discarded_frames.
         * @member {number} discarded_frames
         * @memberof CMsgSource2VProfLiteReport
         * @instance
         */
        CMsgSource2VProfLiteReport.prototype.discarded_frames = 0;
    
        /**
         * Creates a new CMsgSource2VProfLiteReport instance using the specified properties.
         * @function create
         * @memberof CMsgSource2VProfLiteReport
         * @static
         * @param {ICMsgSource2VProfLiteReport=} [properties] Properties to set
         * @returns {CMsgSource2VProfLiteReport} CMsgSource2VProfLiteReport instance
         */
        CMsgSource2VProfLiteReport.create = function create(properties) {
            return new CMsgSource2VProfLiteReport(properties);
        };
    
        /**
         * Encodes the specified CMsgSource2VProfLiteReport message. Does not implicitly {@link CMsgSource2VProfLiteReport.verify|verify} messages.
         * @function encode
         * @memberof CMsgSource2VProfLiteReport
         * @static
         * @param {ICMsgSource2VProfLiteReport} message CMsgSource2VProfLiteReport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSource2VProfLiteReport.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                $root.CMsgSource2VProfLiteReportItem.encode(message.total, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.CMsgSource2VProfLiteReportItem.encode(message.items[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.discarded_frames != null && Object.hasOwnProperty.call(message, "discarded_frames"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.discarded_frames);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSource2VProfLiteReport message, length delimited. Does not implicitly {@link CMsgSource2VProfLiteReport.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSource2VProfLiteReport
         * @static
         * @param {ICMsgSource2VProfLiteReport} message CMsgSource2VProfLiteReport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSource2VProfLiteReport.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSource2VProfLiteReport message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSource2VProfLiteReport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSource2VProfLiteReport} CMsgSource2VProfLiteReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSource2VProfLiteReport.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSource2VProfLiteReport();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.total = $root.CMsgSource2VProfLiteReportItem.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.CMsgSource2VProfLiteReportItem.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.discarded_frames = reader.uint32();
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
         * Decodes a CMsgSource2VProfLiteReport message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSource2VProfLiteReport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSource2VProfLiteReport} CMsgSource2VProfLiteReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSource2VProfLiteReport.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSource2VProfLiteReport message.
         * @function verify
         * @memberof CMsgSource2VProfLiteReport
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSource2VProfLiteReport.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.total != null && message.hasOwnProperty("total")) {
                var error = $root.CMsgSource2VProfLiteReportItem.verify(message.total);
                if (error)
                    return "total." + error;
            }
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.CMsgSource2VProfLiteReportItem.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            if (message.discarded_frames != null && message.hasOwnProperty("discarded_frames"))
                if (!$util.isInteger(message.discarded_frames))
                    return "discarded_frames: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSource2VProfLiteReport message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSource2VProfLiteReport
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSource2VProfLiteReport} CMsgSource2VProfLiteReport
         */
        CMsgSource2VProfLiteReport.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSource2VProfLiteReport)
                return object;
            var message = new $root.CMsgSource2VProfLiteReport();
            if (object.total != null) {
                if (typeof object.total !== "object")
                    throw TypeError(".CMsgSource2VProfLiteReport.total: object expected");
                message.total = $root.CMsgSource2VProfLiteReportItem.fromObject(object.total);
            }
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".CMsgSource2VProfLiteReport.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".CMsgSource2VProfLiteReport.items: object expected");
                    message.items[i] = $root.CMsgSource2VProfLiteReportItem.fromObject(object.items[i]);
                }
            }
            if (object.discarded_frames != null)
                message.discarded_frames = object.discarded_frames >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSource2VProfLiteReport message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSource2VProfLiteReport
         * @static
         * @param {CMsgSource2VProfLiteReport} message CMsgSource2VProfLiteReport
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSource2VProfLiteReport.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (options.defaults) {
                object.total = null;
                object.discarded_frames = 0;
            }
            if (message.total != null && message.hasOwnProperty("total"))
                object.total = $root.CMsgSource2VProfLiteReportItem.toObject(message.total, options);
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.CMsgSource2VProfLiteReportItem.toObject(message.items[j], options);
            }
            if (message.discarded_frames != null && message.hasOwnProperty("discarded_frames"))
                object.discarded_frames = message.discarded_frames;
            return object;
        };
    
        /**
         * Converts this CMsgSource2VProfLiteReport to JSON.
         * @function toJSON
         * @memberof CMsgSource2VProfLiteReport
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSource2VProfLiteReport.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgSource2VProfLiteReport
         * @function getTypeUrl
         * @memberof CMsgSource2VProfLiteReport
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgSource2VProfLiteReport.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgSource2VProfLiteReport";
        };
    
        return CMsgSource2VProfLiteReport;
    })();
    
    $root.CMsgSource2NetworkFlowQuality = (function() {
    
        /**
         * Properties of a CMsgSource2NetworkFlowQuality.
         * @exports ICMsgSource2NetworkFlowQuality
         * @interface ICMsgSource2NetworkFlowQuality
         * @property {number|null} [duration] CMsgSource2NetworkFlowQuality duration
         * @property {number|Long|null} [bytes_total] CMsgSource2NetworkFlowQuality bytes_total
         * @property {number|Long|null} [bytes_total_reliable] CMsgSource2NetworkFlowQuality bytes_total_reliable
         * @property {number|Long|null} [bytes_total_voice] CMsgSource2NetworkFlowQuality bytes_total_voice
         * @property {number|null} [bytes_sec_p95] CMsgSource2NetworkFlowQuality bytes_sec_p95
         * @property {number|null} [bytes_sec_p99] CMsgSource2NetworkFlowQuality bytes_sec_p99
         * @property {number|null} [enginemsgs_total] CMsgSource2NetworkFlowQuality enginemsgs_total
         * @property {number|null} [enginemsgs_sec_p95] CMsgSource2NetworkFlowQuality enginemsgs_sec_p95
         * @property {number|null} [enginemsgs_sec_p99] CMsgSource2NetworkFlowQuality enginemsgs_sec_p99
         * @property {number|null} [netframes_total] CMsgSource2NetworkFlowQuality netframes_total
         * @property {number|null} [netframes_dropped] CMsgSource2NetworkFlowQuality netframes_dropped
         * @property {number|null} [netframes_outoforder] CMsgSource2NetworkFlowQuality netframes_outoforder
         * @property {number|null} [netframes_size_exceeds_mtu] CMsgSource2NetworkFlowQuality netframes_size_exceeds_mtu
         * @property {number|null} [netframes_size_p95] CMsgSource2NetworkFlowQuality netframes_size_p95
         * @property {number|null} [netframes_size_p99] CMsgSource2NetworkFlowQuality netframes_size_p99
         * @property {number|null} [ticks_total] CMsgSource2NetworkFlowQuality ticks_total
         * @property {number|null} [ticks_good] CMsgSource2NetworkFlowQuality ticks_good
         * @property {number|null} [ticks_good_almost_late] CMsgSource2NetworkFlowQuality ticks_good_almost_late
         * @property {number|null} [ticks_fixed_dropped] CMsgSource2NetworkFlowQuality ticks_fixed_dropped
         * @property {number|null} [ticks_fixed_late] CMsgSource2NetworkFlowQuality ticks_fixed_late
         * @property {number|null} [ticks_bad_dropped] CMsgSource2NetworkFlowQuality ticks_bad_dropped
         * @property {number|null} [ticks_bad_late] CMsgSource2NetworkFlowQuality ticks_bad_late
         * @property {number|null} [ticks_bad_other] CMsgSource2NetworkFlowQuality ticks_bad_other
         * @property {number|null} [tick_missrate_samples_total] CMsgSource2NetworkFlowQuality tick_missrate_samples_total
         * @property {number|null} [tick_missrate_samples_perfect] CMsgSource2NetworkFlowQuality tick_missrate_samples_perfect
         * @property {number|null} [tick_missrate_samples_perfectnet] CMsgSource2NetworkFlowQuality tick_missrate_samples_perfectnet
         * @property {number|null} [tick_missratenet_p75_x10] CMsgSource2NetworkFlowQuality tick_missratenet_p75_x10
         * @property {number|null} [tick_missratenet_p95_x10] CMsgSource2NetworkFlowQuality tick_missratenet_p95_x10
         * @property {number|null} [tick_missratenet_p99_x10] CMsgSource2NetworkFlowQuality tick_missratenet_p99_x10
         * @property {number|null} [recvmargin_p1] CMsgSource2NetworkFlowQuality recvmargin_p1
         * @property {number|null} [recvmargin_p5] CMsgSource2NetworkFlowQuality recvmargin_p5
         * @property {number|null} [recvmargin_p25] CMsgSource2NetworkFlowQuality recvmargin_p25
         * @property {number|null} [recvmargin_p50] CMsgSource2NetworkFlowQuality recvmargin_p50
         * @property {number|null} [recvmargin_p75] CMsgSource2NetworkFlowQuality recvmargin_p75
         * @property {number|null} [recvmargin_p95] CMsgSource2NetworkFlowQuality recvmargin_p95
         * @property {number|null} [netframe_jitter_p50] CMsgSource2NetworkFlowQuality netframe_jitter_p50
         * @property {number|null} [netframe_jitter_p99] CMsgSource2NetworkFlowQuality netframe_jitter_p99
         * @property {number|null} [interval_peakjitter_p50] CMsgSource2NetworkFlowQuality interval_peakjitter_p50
         * @property {number|null} [interval_peakjitter_p95] CMsgSource2NetworkFlowQuality interval_peakjitter_p95
         * @property {number|null} [packet_misdelivery_rate_p50_x4] CMsgSource2NetworkFlowQuality packet_misdelivery_rate_p50_x4
         * @property {number|null} [packet_misdelivery_rate_p95_x4] CMsgSource2NetworkFlowQuality packet_misdelivery_rate_p95_x4
         * @property {number|null} [net_ping_p5] CMsgSource2NetworkFlowQuality net_ping_p5
         * @property {number|null} [net_ping_p50] CMsgSource2NetworkFlowQuality net_ping_p50
         * @property {number|null} [net_ping_p95] CMsgSource2NetworkFlowQuality net_ping_p95
         */
    
        /**
         * Constructs a new CMsgSource2NetworkFlowQuality.
         * @exports CMsgSource2NetworkFlowQuality
         * @classdesc Represents a CMsgSource2NetworkFlowQuality.
         * @implements ICMsgSource2NetworkFlowQuality
         * @constructor
         * @param {ICMsgSource2NetworkFlowQuality=} [properties] Properties to set
         */
        function CMsgSource2NetworkFlowQuality(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSource2NetworkFlowQuality duration.
         * @member {number} duration
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.duration = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality bytes_total.
         * @member {number|Long} bytes_total
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.bytes_total = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSource2NetworkFlowQuality bytes_total_reliable.
         * @member {number|Long} bytes_total_reliable
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.bytes_total_reliable = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSource2NetworkFlowQuality bytes_total_voice.
         * @member {number|Long} bytes_total_voice
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.bytes_total_voice = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSource2NetworkFlowQuality bytes_sec_p95.
         * @member {number} bytes_sec_p95
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.bytes_sec_p95 = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality bytes_sec_p99.
         * @member {number} bytes_sec_p99
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.bytes_sec_p99 = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality enginemsgs_total.
         * @member {number} enginemsgs_total
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.enginemsgs_total = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality enginemsgs_sec_p95.
         * @member {number} enginemsgs_sec_p95
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.enginemsgs_sec_p95 = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality enginemsgs_sec_p99.
         * @member {number} enginemsgs_sec_p99
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.enginemsgs_sec_p99 = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality netframes_total.
         * @member {number} netframes_total
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.netframes_total = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality netframes_dropped.
         * @member {number} netframes_dropped
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.netframes_dropped = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality netframes_outoforder.
         * @member {number} netframes_outoforder
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.netframes_outoforder = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality netframes_size_exceeds_mtu.
         * @member {number} netframes_size_exceeds_mtu
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.netframes_size_exceeds_mtu = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality netframes_size_p95.
         * @member {number} netframes_size_p95
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.netframes_size_p95 = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality netframes_size_p99.
         * @member {number} netframes_size_p99
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.netframes_size_p99 = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality ticks_total.
         * @member {number} ticks_total
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.ticks_total = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality ticks_good.
         * @member {number} ticks_good
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.ticks_good = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality ticks_good_almost_late.
         * @member {number} ticks_good_almost_late
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.ticks_good_almost_late = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality ticks_fixed_dropped.
         * @member {number} ticks_fixed_dropped
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.ticks_fixed_dropped = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality ticks_fixed_late.
         * @member {number} ticks_fixed_late
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.ticks_fixed_late = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality ticks_bad_dropped.
         * @member {number} ticks_bad_dropped
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.ticks_bad_dropped = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality ticks_bad_late.
         * @member {number} ticks_bad_late
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.ticks_bad_late = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality ticks_bad_other.
         * @member {number} ticks_bad_other
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.ticks_bad_other = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality tick_missrate_samples_total.
         * @member {number} tick_missrate_samples_total
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.tick_missrate_samples_total = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality tick_missrate_samples_perfect.
         * @member {number} tick_missrate_samples_perfect
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.tick_missrate_samples_perfect = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality tick_missrate_samples_perfectnet.
         * @member {number} tick_missrate_samples_perfectnet
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.tick_missrate_samples_perfectnet = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality tick_missratenet_p75_x10.
         * @member {number} tick_missratenet_p75_x10
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.tick_missratenet_p75_x10 = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality tick_missratenet_p95_x10.
         * @member {number} tick_missratenet_p95_x10
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.tick_missratenet_p95_x10 = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality tick_missratenet_p99_x10.
         * @member {number} tick_missratenet_p99_x10
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.tick_missratenet_p99_x10 = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality recvmargin_p1.
         * @member {number} recvmargin_p1
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.recvmargin_p1 = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality recvmargin_p5.
         * @member {number} recvmargin_p5
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.recvmargin_p5 = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality recvmargin_p25.
         * @member {number} recvmargin_p25
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.recvmargin_p25 = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality recvmargin_p50.
         * @member {number} recvmargin_p50
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.recvmargin_p50 = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality recvmargin_p75.
         * @member {number} recvmargin_p75
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.recvmargin_p75 = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality recvmargin_p95.
         * @member {number} recvmargin_p95
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.recvmargin_p95 = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality netframe_jitter_p50.
         * @member {number} netframe_jitter_p50
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.netframe_jitter_p50 = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality netframe_jitter_p99.
         * @member {number} netframe_jitter_p99
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.netframe_jitter_p99 = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality interval_peakjitter_p50.
         * @member {number} interval_peakjitter_p50
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.interval_peakjitter_p50 = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality interval_peakjitter_p95.
         * @member {number} interval_peakjitter_p95
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.interval_peakjitter_p95 = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality packet_misdelivery_rate_p50_x4.
         * @member {number} packet_misdelivery_rate_p50_x4
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.packet_misdelivery_rate_p50_x4 = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality packet_misdelivery_rate_p95_x4.
         * @member {number} packet_misdelivery_rate_p95_x4
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.packet_misdelivery_rate_p95_x4 = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality net_ping_p5.
         * @member {number} net_ping_p5
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.net_ping_p5 = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality net_ping_p50.
         * @member {number} net_ping_p50
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.net_ping_p50 = 0;
    
        /**
         * CMsgSource2NetworkFlowQuality net_ping_p95.
         * @member {number} net_ping_p95
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         */
        CMsgSource2NetworkFlowQuality.prototype.net_ping_p95 = 0;
    
        /**
         * Creates a new CMsgSource2NetworkFlowQuality instance using the specified properties.
         * @function create
         * @memberof CMsgSource2NetworkFlowQuality
         * @static
         * @param {ICMsgSource2NetworkFlowQuality=} [properties] Properties to set
         * @returns {CMsgSource2NetworkFlowQuality} CMsgSource2NetworkFlowQuality instance
         */
        CMsgSource2NetworkFlowQuality.create = function create(properties) {
            return new CMsgSource2NetworkFlowQuality(properties);
        };
    
        /**
         * Encodes the specified CMsgSource2NetworkFlowQuality message. Does not implicitly {@link CMsgSource2NetworkFlowQuality.verify|verify} messages.
         * @function encode
         * @memberof CMsgSource2NetworkFlowQuality
         * @static
         * @param {ICMsgSource2NetworkFlowQuality} message CMsgSource2NetworkFlowQuality message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSource2NetworkFlowQuality.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.duration);
            if (message.bytes_total != null && Object.hasOwnProperty.call(message, "bytes_total"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.bytes_total);
            if (message.bytes_total_reliable != null && Object.hasOwnProperty.call(message, "bytes_total_reliable"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.bytes_total_reliable);
            if (message.bytes_total_voice != null && Object.hasOwnProperty.call(message, "bytes_total_voice"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.bytes_total_voice);
            if (message.bytes_sec_p95 != null && Object.hasOwnProperty.call(message, "bytes_sec_p95"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.bytes_sec_p95);
            if (message.bytes_sec_p99 != null && Object.hasOwnProperty.call(message, "bytes_sec_p99"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.bytes_sec_p99);
            if (message.enginemsgs_total != null && Object.hasOwnProperty.call(message, "enginemsgs_total"))
                writer.uint32(/* id 20, wireType 0 =*/160).uint32(message.enginemsgs_total);
            if (message.enginemsgs_sec_p95 != null && Object.hasOwnProperty.call(message, "enginemsgs_sec_p95"))
                writer.uint32(/* id 21, wireType 0 =*/168).uint32(message.enginemsgs_sec_p95);
            if (message.enginemsgs_sec_p99 != null && Object.hasOwnProperty.call(message, "enginemsgs_sec_p99"))
                writer.uint32(/* id 22, wireType 0 =*/176).uint32(message.enginemsgs_sec_p99);
            if (message.netframes_total != null && Object.hasOwnProperty.call(message, "netframes_total"))
                writer.uint32(/* id 30, wireType 0 =*/240).uint32(message.netframes_total);
            if (message.netframes_dropped != null && Object.hasOwnProperty.call(message, "netframes_dropped"))
                writer.uint32(/* id 31, wireType 0 =*/248).uint32(message.netframes_dropped);
            if (message.netframes_outoforder != null && Object.hasOwnProperty.call(message, "netframes_outoforder"))
                writer.uint32(/* id 32, wireType 0 =*/256).uint32(message.netframes_outoforder);
            if (message.netframes_size_exceeds_mtu != null && Object.hasOwnProperty.call(message, "netframes_size_exceeds_mtu"))
                writer.uint32(/* id 34, wireType 0 =*/272).uint32(message.netframes_size_exceeds_mtu);
            if (message.netframes_size_p95 != null && Object.hasOwnProperty.call(message, "netframes_size_p95"))
                writer.uint32(/* id 35, wireType 0 =*/280).uint32(message.netframes_size_p95);
            if (message.netframes_size_p99 != null && Object.hasOwnProperty.call(message, "netframes_size_p99"))
                writer.uint32(/* id 36, wireType 0 =*/288).uint32(message.netframes_size_p99);
            if (message.ticks_total != null && Object.hasOwnProperty.call(message, "ticks_total"))
                writer.uint32(/* id 40, wireType 0 =*/320).uint32(message.ticks_total);
            if (message.ticks_good != null && Object.hasOwnProperty.call(message, "ticks_good"))
                writer.uint32(/* id 41, wireType 0 =*/328).uint32(message.ticks_good);
            if (message.ticks_good_almost_late != null && Object.hasOwnProperty.call(message, "ticks_good_almost_late"))
                writer.uint32(/* id 42, wireType 0 =*/336).uint32(message.ticks_good_almost_late);
            if (message.ticks_fixed_dropped != null && Object.hasOwnProperty.call(message, "ticks_fixed_dropped"))
                writer.uint32(/* id 43, wireType 0 =*/344).uint32(message.ticks_fixed_dropped);
            if (message.ticks_fixed_late != null && Object.hasOwnProperty.call(message, "ticks_fixed_late"))
                writer.uint32(/* id 44, wireType 0 =*/352).uint32(message.ticks_fixed_late);
            if (message.ticks_bad_dropped != null && Object.hasOwnProperty.call(message, "ticks_bad_dropped"))
                writer.uint32(/* id 45, wireType 0 =*/360).uint32(message.ticks_bad_dropped);
            if (message.ticks_bad_late != null && Object.hasOwnProperty.call(message, "ticks_bad_late"))
                writer.uint32(/* id 46, wireType 0 =*/368).uint32(message.ticks_bad_late);
            if (message.ticks_bad_other != null && Object.hasOwnProperty.call(message, "ticks_bad_other"))
                writer.uint32(/* id 47, wireType 0 =*/376).uint32(message.ticks_bad_other);
            if (message.tick_missrate_samples_total != null && Object.hasOwnProperty.call(message, "tick_missrate_samples_total"))
                writer.uint32(/* id 50, wireType 0 =*/400).uint32(message.tick_missrate_samples_total);
            if (message.tick_missrate_samples_perfect != null && Object.hasOwnProperty.call(message, "tick_missrate_samples_perfect"))
                writer.uint32(/* id 51, wireType 0 =*/408).uint32(message.tick_missrate_samples_perfect);
            if (message.tick_missrate_samples_perfectnet != null && Object.hasOwnProperty.call(message, "tick_missrate_samples_perfectnet"))
                writer.uint32(/* id 52, wireType 0 =*/416).uint32(message.tick_missrate_samples_perfectnet);
            if (message.tick_missratenet_p75_x10 != null && Object.hasOwnProperty.call(message, "tick_missratenet_p75_x10"))
                writer.uint32(/* id 53, wireType 0 =*/424).uint32(message.tick_missratenet_p75_x10);
            if (message.tick_missratenet_p95_x10 != null && Object.hasOwnProperty.call(message, "tick_missratenet_p95_x10"))
                writer.uint32(/* id 54, wireType 0 =*/432).uint32(message.tick_missratenet_p95_x10);
            if (message.tick_missratenet_p99_x10 != null && Object.hasOwnProperty.call(message, "tick_missratenet_p99_x10"))
                writer.uint32(/* id 55, wireType 0 =*/440).uint32(message.tick_missratenet_p99_x10);
            if (message.recvmargin_p1 != null && Object.hasOwnProperty.call(message, "recvmargin_p1"))
                writer.uint32(/* id 61, wireType 0 =*/488).sint32(message.recvmargin_p1);
            if (message.recvmargin_p5 != null && Object.hasOwnProperty.call(message, "recvmargin_p5"))
                writer.uint32(/* id 62, wireType 0 =*/496).sint32(message.recvmargin_p5);
            if (message.recvmargin_p25 != null && Object.hasOwnProperty.call(message, "recvmargin_p25"))
                writer.uint32(/* id 63, wireType 0 =*/504).sint32(message.recvmargin_p25);
            if (message.recvmargin_p50 != null && Object.hasOwnProperty.call(message, "recvmargin_p50"))
                writer.uint32(/* id 64, wireType 0 =*/512).sint32(message.recvmargin_p50);
            if (message.recvmargin_p75 != null && Object.hasOwnProperty.call(message, "recvmargin_p75"))
                writer.uint32(/* id 65, wireType 0 =*/520).sint32(message.recvmargin_p75);
            if (message.recvmargin_p95 != null && Object.hasOwnProperty.call(message, "recvmargin_p95"))
                writer.uint32(/* id 66, wireType 0 =*/528).sint32(message.recvmargin_p95);
            if (message.netframe_jitter_p50 != null && Object.hasOwnProperty.call(message, "netframe_jitter_p50"))
                writer.uint32(/* id 70, wireType 0 =*/560).uint32(message.netframe_jitter_p50);
            if (message.netframe_jitter_p99 != null && Object.hasOwnProperty.call(message, "netframe_jitter_p99"))
                writer.uint32(/* id 71, wireType 0 =*/568).uint32(message.netframe_jitter_p99);
            if (message.interval_peakjitter_p50 != null && Object.hasOwnProperty.call(message, "interval_peakjitter_p50"))
                writer.uint32(/* id 72, wireType 0 =*/576).uint32(message.interval_peakjitter_p50);
            if (message.interval_peakjitter_p95 != null && Object.hasOwnProperty.call(message, "interval_peakjitter_p95"))
                writer.uint32(/* id 73, wireType 0 =*/584).uint32(message.interval_peakjitter_p95);
            if (message.packet_misdelivery_rate_p50_x4 != null && Object.hasOwnProperty.call(message, "packet_misdelivery_rate_p50_x4"))
                writer.uint32(/* id 74, wireType 0 =*/592).uint32(message.packet_misdelivery_rate_p50_x4);
            if (message.packet_misdelivery_rate_p95_x4 != null && Object.hasOwnProperty.call(message, "packet_misdelivery_rate_p95_x4"))
                writer.uint32(/* id 75, wireType 0 =*/600).uint32(message.packet_misdelivery_rate_p95_x4);
            if (message.net_ping_p5 != null && Object.hasOwnProperty.call(message, "net_ping_p5"))
                writer.uint32(/* id 80, wireType 0 =*/640).uint32(message.net_ping_p5);
            if (message.net_ping_p50 != null && Object.hasOwnProperty.call(message, "net_ping_p50"))
                writer.uint32(/* id 81, wireType 0 =*/648).uint32(message.net_ping_p50);
            if (message.net_ping_p95 != null && Object.hasOwnProperty.call(message, "net_ping_p95"))
                writer.uint32(/* id 82, wireType 0 =*/656).uint32(message.net_ping_p95);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSource2NetworkFlowQuality message, length delimited. Does not implicitly {@link CMsgSource2NetworkFlowQuality.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSource2NetworkFlowQuality
         * @static
         * @param {ICMsgSource2NetworkFlowQuality} message CMsgSource2NetworkFlowQuality message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSource2NetworkFlowQuality.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSource2NetworkFlowQuality message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSource2NetworkFlowQuality
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSource2NetworkFlowQuality} CMsgSource2NetworkFlowQuality
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSource2NetworkFlowQuality.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSource2NetworkFlowQuality();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.duration = reader.uint32();
                        break;
                    }
                case 5: {
                        message.bytes_total = reader.uint64();
                        break;
                    }
                case 6: {
                        message.bytes_total_reliable = reader.uint64();
                        break;
                    }
                case 7: {
                        message.bytes_total_voice = reader.uint64();
                        break;
                    }
                case 10: {
                        message.bytes_sec_p95 = reader.uint32();
                        break;
                    }
                case 11: {
                        message.bytes_sec_p99 = reader.uint32();
                        break;
                    }
                case 20: {
                        message.enginemsgs_total = reader.uint32();
                        break;
                    }
                case 21: {
                        message.enginemsgs_sec_p95 = reader.uint32();
                        break;
                    }
                case 22: {
                        message.enginemsgs_sec_p99 = reader.uint32();
                        break;
                    }
                case 30: {
                        message.netframes_total = reader.uint32();
                        break;
                    }
                case 31: {
                        message.netframes_dropped = reader.uint32();
                        break;
                    }
                case 32: {
                        message.netframes_outoforder = reader.uint32();
                        break;
                    }
                case 34: {
                        message.netframes_size_exceeds_mtu = reader.uint32();
                        break;
                    }
                case 35: {
                        message.netframes_size_p95 = reader.uint32();
                        break;
                    }
                case 36: {
                        message.netframes_size_p99 = reader.uint32();
                        break;
                    }
                case 40: {
                        message.ticks_total = reader.uint32();
                        break;
                    }
                case 41: {
                        message.ticks_good = reader.uint32();
                        break;
                    }
                case 42: {
                        message.ticks_good_almost_late = reader.uint32();
                        break;
                    }
                case 43: {
                        message.ticks_fixed_dropped = reader.uint32();
                        break;
                    }
                case 44: {
                        message.ticks_fixed_late = reader.uint32();
                        break;
                    }
                case 45: {
                        message.ticks_bad_dropped = reader.uint32();
                        break;
                    }
                case 46: {
                        message.ticks_bad_late = reader.uint32();
                        break;
                    }
                case 47: {
                        message.ticks_bad_other = reader.uint32();
                        break;
                    }
                case 50: {
                        message.tick_missrate_samples_total = reader.uint32();
                        break;
                    }
                case 51: {
                        message.tick_missrate_samples_perfect = reader.uint32();
                        break;
                    }
                case 52: {
                        message.tick_missrate_samples_perfectnet = reader.uint32();
                        break;
                    }
                case 53: {
                        message.tick_missratenet_p75_x10 = reader.uint32();
                        break;
                    }
                case 54: {
                        message.tick_missratenet_p95_x10 = reader.uint32();
                        break;
                    }
                case 55: {
                        message.tick_missratenet_p99_x10 = reader.uint32();
                        break;
                    }
                case 61: {
                        message.recvmargin_p1 = reader.sint32();
                        break;
                    }
                case 62: {
                        message.recvmargin_p5 = reader.sint32();
                        break;
                    }
                case 63: {
                        message.recvmargin_p25 = reader.sint32();
                        break;
                    }
                case 64: {
                        message.recvmargin_p50 = reader.sint32();
                        break;
                    }
                case 65: {
                        message.recvmargin_p75 = reader.sint32();
                        break;
                    }
                case 66: {
                        message.recvmargin_p95 = reader.sint32();
                        break;
                    }
                case 70: {
                        message.netframe_jitter_p50 = reader.uint32();
                        break;
                    }
                case 71: {
                        message.netframe_jitter_p99 = reader.uint32();
                        break;
                    }
                case 72: {
                        message.interval_peakjitter_p50 = reader.uint32();
                        break;
                    }
                case 73: {
                        message.interval_peakjitter_p95 = reader.uint32();
                        break;
                    }
                case 74: {
                        message.packet_misdelivery_rate_p50_x4 = reader.uint32();
                        break;
                    }
                case 75: {
                        message.packet_misdelivery_rate_p95_x4 = reader.uint32();
                        break;
                    }
                case 80: {
                        message.net_ping_p5 = reader.uint32();
                        break;
                    }
                case 81: {
                        message.net_ping_p50 = reader.uint32();
                        break;
                    }
                case 82: {
                        message.net_ping_p95 = reader.uint32();
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
         * Decodes a CMsgSource2NetworkFlowQuality message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSource2NetworkFlowQuality
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSource2NetworkFlowQuality} CMsgSource2NetworkFlowQuality
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSource2NetworkFlowQuality.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSource2NetworkFlowQuality message.
         * @function verify
         * @memberof CMsgSource2NetworkFlowQuality
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSource2NetworkFlowQuality.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (!$util.isInteger(message.duration))
                    return "duration: integer expected";
            if (message.bytes_total != null && message.hasOwnProperty("bytes_total"))
                if (!$util.isInteger(message.bytes_total) && !(message.bytes_total && $util.isInteger(message.bytes_total.low) && $util.isInteger(message.bytes_total.high)))
                    return "bytes_total: integer|Long expected";
            if (message.bytes_total_reliable != null && message.hasOwnProperty("bytes_total_reliable"))
                if (!$util.isInteger(message.bytes_total_reliable) && !(message.bytes_total_reliable && $util.isInteger(message.bytes_total_reliable.low) && $util.isInteger(message.bytes_total_reliable.high)))
                    return "bytes_total_reliable: integer|Long expected";
            if (message.bytes_total_voice != null && message.hasOwnProperty("bytes_total_voice"))
                if (!$util.isInteger(message.bytes_total_voice) && !(message.bytes_total_voice && $util.isInteger(message.bytes_total_voice.low) && $util.isInteger(message.bytes_total_voice.high)))
                    return "bytes_total_voice: integer|Long expected";
            if (message.bytes_sec_p95 != null && message.hasOwnProperty("bytes_sec_p95"))
                if (!$util.isInteger(message.bytes_sec_p95))
                    return "bytes_sec_p95: integer expected";
            if (message.bytes_sec_p99 != null && message.hasOwnProperty("bytes_sec_p99"))
                if (!$util.isInteger(message.bytes_sec_p99))
                    return "bytes_sec_p99: integer expected";
            if (message.enginemsgs_total != null && message.hasOwnProperty("enginemsgs_total"))
                if (!$util.isInteger(message.enginemsgs_total))
                    return "enginemsgs_total: integer expected";
            if (message.enginemsgs_sec_p95 != null && message.hasOwnProperty("enginemsgs_sec_p95"))
                if (!$util.isInteger(message.enginemsgs_sec_p95))
                    return "enginemsgs_sec_p95: integer expected";
            if (message.enginemsgs_sec_p99 != null && message.hasOwnProperty("enginemsgs_sec_p99"))
                if (!$util.isInteger(message.enginemsgs_sec_p99))
                    return "enginemsgs_sec_p99: integer expected";
            if (message.netframes_total != null && message.hasOwnProperty("netframes_total"))
                if (!$util.isInteger(message.netframes_total))
                    return "netframes_total: integer expected";
            if (message.netframes_dropped != null && message.hasOwnProperty("netframes_dropped"))
                if (!$util.isInteger(message.netframes_dropped))
                    return "netframes_dropped: integer expected";
            if (message.netframes_outoforder != null && message.hasOwnProperty("netframes_outoforder"))
                if (!$util.isInteger(message.netframes_outoforder))
                    return "netframes_outoforder: integer expected";
            if (message.netframes_size_exceeds_mtu != null && message.hasOwnProperty("netframes_size_exceeds_mtu"))
                if (!$util.isInteger(message.netframes_size_exceeds_mtu))
                    return "netframes_size_exceeds_mtu: integer expected";
            if (message.netframes_size_p95 != null && message.hasOwnProperty("netframes_size_p95"))
                if (!$util.isInteger(message.netframes_size_p95))
                    return "netframes_size_p95: integer expected";
            if (message.netframes_size_p99 != null && message.hasOwnProperty("netframes_size_p99"))
                if (!$util.isInteger(message.netframes_size_p99))
                    return "netframes_size_p99: integer expected";
            if (message.ticks_total != null && message.hasOwnProperty("ticks_total"))
                if (!$util.isInteger(message.ticks_total))
                    return "ticks_total: integer expected";
            if (message.ticks_good != null && message.hasOwnProperty("ticks_good"))
                if (!$util.isInteger(message.ticks_good))
                    return "ticks_good: integer expected";
            if (message.ticks_good_almost_late != null && message.hasOwnProperty("ticks_good_almost_late"))
                if (!$util.isInteger(message.ticks_good_almost_late))
                    return "ticks_good_almost_late: integer expected";
            if (message.ticks_fixed_dropped != null && message.hasOwnProperty("ticks_fixed_dropped"))
                if (!$util.isInteger(message.ticks_fixed_dropped))
                    return "ticks_fixed_dropped: integer expected";
            if (message.ticks_fixed_late != null && message.hasOwnProperty("ticks_fixed_late"))
                if (!$util.isInteger(message.ticks_fixed_late))
                    return "ticks_fixed_late: integer expected";
            if (message.ticks_bad_dropped != null && message.hasOwnProperty("ticks_bad_dropped"))
                if (!$util.isInteger(message.ticks_bad_dropped))
                    return "ticks_bad_dropped: integer expected";
            if (message.ticks_bad_late != null && message.hasOwnProperty("ticks_bad_late"))
                if (!$util.isInteger(message.ticks_bad_late))
                    return "ticks_bad_late: integer expected";
            if (message.ticks_bad_other != null && message.hasOwnProperty("ticks_bad_other"))
                if (!$util.isInteger(message.ticks_bad_other))
                    return "ticks_bad_other: integer expected";
            if (message.tick_missrate_samples_total != null && message.hasOwnProperty("tick_missrate_samples_total"))
                if (!$util.isInteger(message.tick_missrate_samples_total))
                    return "tick_missrate_samples_total: integer expected";
            if (message.tick_missrate_samples_perfect != null && message.hasOwnProperty("tick_missrate_samples_perfect"))
                if (!$util.isInteger(message.tick_missrate_samples_perfect))
                    return "tick_missrate_samples_perfect: integer expected";
            if (message.tick_missrate_samples_perfectnet != null && message.hasOwnProperty("tick_missrate_samples_perfectnet"))
                if (!$util.isInteger(message.tick_missrate_samples_perfectnet))
                    return "tick_missrate_samples_perfectnet: integer expected";
            if (message.tick_missratenet_p75_x10 != null && message.hasOwnProperty("tick_missratenet_p75_x10"))
                if (!$util.isInteger(message.tick_missratenet_p75_x10))
                    return "tick_missratenet_p75_x10: integer expected";
            if (message.tick_missratenet_p95_x10 != null && message.hasOwnProperty("tick_missratenet_p95_x10"))
                if (!$util.isInteger(message.tick_missratenet_p95_x10))
                    return "tick_missratenet_p95_x10: integer expected";
            if (message.tick_missratenet_p99_x10 != null && message.hasOwnProperty("tick_missratenet_p99_x10"))
                if (!$util.isInteger(message.tick_missratenet_p99_x10))
                    return "tick_missratenet_p99_x10: integer expected";
            if (message.recvmargin_p1 != null && message.hasOwnProperty("recvmargin_p1"))
                if (!$util.isInteger(message.recvmargin_p1))
                    return "recvmargin_p1: integer expected";
            if (message.recvmargin_p5 != null && message.hasOwnProperty("recvmargin_p5"))
                if (!$util.isInteger(message.recvmargin_p5))
                    return "recvmargin_p5: integer expected";
            if (message.recvmargin_p25 != null && message.hasOwnProperty("recvmargin_p25"))
                if (!$util.isInteger(message.recvmargin_p25))
                    return "recvmargin_p25: integer expected";
            if (message.recvmargin_p50 != null && message.hasOwnProperty("recvmargin_p50"))
                if (!$util.isInteger(message.recvmargin_p50))
                    return "recvmargin_p50: integer expected";
            if (message.recvmargin_p75 != null && message.hasOwnProperty("recvmargin_p75"))
                if (!$util.isInteger(message.recvmargin_p75))
                    return "recvmargin_p75: integer expected";
            if (message.recvmargin_p95 != null && message.hasOwnProperty("recvmargin_p95"))
                if (!$util.isInteger(message.recvmargin_p95))
                    return "recvmargin_p95: integer expected";
            if (message.netframe_jitter_p50 != null && message.hasOwnProperty("netframe_jitter_p50"))
                if (!$util.isInteger(message.netframe_jitter_p50))
                    return "netframe_jitter_p50: integer expected";
            if (message.netframe_jitter_p99 != null && message.hasOwnProperty("netframe_jitter_p99"))
                if (!$util.isInteger(message.netframe_jitter_p99))
                    return "netframe_jitter_p99: integer expected";
            if (message.interval_peakjitter_p50 != null && message.hasOwnProperty("interval_peakjitter_p50"))
                if (!$util.isInteger(message.interval_peakjitter_p50))
                    return "interval_peakjitter_p50: integer expected";
            if (message.interval_peakjitter_p95 != null && message.hasOwnProperty("interval_peakjitter_p95"))
                if (!$util.isInteger(message.interval_peakjitter_p95))
                    return "interval_peakjitter_p95: integer expected";
            if (message.packet_misdelivery_rate_p50_x4 != null && message.hasOwnProperty("packet_misdelivery_rate_p50_x4"))
                if (!$util.isInteger(message.packet_misdelivery_rate_p50_x4))
                    return "packet_misdelivery_rate_p50_x4: integer expected";
            if (message.packet_misdelivery_rate_p95_x4 != null && message.hasOwnProperty("packet_misdelivery_rate_p95_x4"))
                if (!$util.isInteger(message.packet_misdelivery_rate_p95_x4))
                    return "packet_misdelivery_rate_p95_x4: integer expected";
            if (message.net_ping_p5 != null && message.hasOwnProperty("net_ping_p5"))
                if (!$util.isInteger(message.net_ping_p5))
                    return "net_ping_p5: integer expected";
            if (message.net_ping_p50 != null && message.hasOwnProperty("net_ping_p50"))
                if (!$util.isInteger(message.net_ping_p50))
                    return "net_ping_p50: integer expected";
            if (message.net_ping_p95 != null && message.hasOwnProperty("net_ping_p95"))
                if (!$util.isInteger(message.net_ping_p95))
                    return "net_ping_p95: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSource2NetworkFlowQuality message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSource2NetworkFlowQuality
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSource2NetworkFlowQuality} CMsgSource2NetworkFlowQuality
         */
        CMsgSource2NetworkFlowQuality.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSource2NetworkFlowQuality)
                return object;
            var message = new $root.CMsgSource2NetworkFlowQuality();
            if (object.duration != null)
                message.duration = object.duration >>> 0;
            if (object.bytes_total != null)
                if ($util.Long)
                    (message.bytes_total = $util.Long.fromValue(object.bytes_total)).unsigned = true;
                else if (typeof object.bytes_total === "string")
                    message.bytes_total = parseInt(object.bytes_total, 10);
                else if (typeof object.bytes_total === "number")
                    message.bytes_total = object.bytes_total;
                else if (typeof object.bytes_total === "object")
                    message.bytes_total = new $util.LongBits(object.bytes_total.low >>> 0, object.bytes_total.high >>> 0).toNumber(true);
            if (object.bytes_total_reliable != null)
                if ($util.Long)
                    (message.bytes_total_reliable = $util.Long.fromValue(object.bytes_total_reliable)).unsigned = true;
                else if (typeof object.bytes_total_reliable === "string")
                    message.bytes_total_reliable = parseInt(object.bytes_total_reliable, 10);
                else if (typeof object.bytes_total_reliable === "number")
                    message.bytes_total_reliable = object.bytes_total_reliable;
                else if (typeof object.bytes_total_reliable === "object")
                    message.bytes_total_reliable = new $util.LongBits(object.bytes_total_reliable.low >>> 0, object.bytes_total_reliable.high >>> 0).toNumber(true);
            if (object.bytes_total_voice != null)
                if ($util.Long)
                    (message.bytes_total_voice = $util.Long.fromValue(object.bytes_total_voice)).unsigned = true;
                else if (typeof object.bytes_total_voice === "string")
                    message.bytes_total_voice = parseInt(object.bytes_total_voice, 10);
                else if (typeof object.bytes_total_voice === "number")
                    message.bytes_total_voice = object.bytes_total_voice;
                else if (typeof object.bytes_total_voice === "object")
                    message.bytes_total_voice = new $util.LongBits(object.bytes_total_voice.low >>> 0, object.bytes_total_voice.high >>> 0).toNumber(true);
            if (object.bytes_sec_p95 != null)
                message.bytes_sec_p95 = object.bytes_sec_p95 >>> 0;
            if (object.bytes_sec_p99 != null)
                message.bytes_sec_p99 = object.bytes_sec_p99 >>> 0;
            if (object.enginemsgs_total != null)
                message.enginemsgs_total = object.enginemsgs_total >>> 0;
            if (object.enginemsgs_sec_p95 != null)
                message.enginemsgs_sec_p95 = object.enginemsgs_sec_p95 >>> 0;
            if (object.enginemsgs_sec_p99 != null)
                message.enginemsgs_sec_p99 = object.enginemsgs_sec_p99 >>> 0;
            if (object.netframes_total != null)
                message.netframes_total = object.netframes_total >>> 0;
            if (object.netframes_dropped != null)
                message.netframes_dropped = object.netframes_dropped >>> 0;
            if (object.netframes_outoforder != null)
                message.netframes_outoforder = object.netframes_outoforder >>> 0;
            if (object.netframes_size_exceeds_mtu != null)
                message.netframes_size_exceeds_mtu = object.netframes_size_exceeds_mtu >>> 0;
            if (object.netframes_size_p95 != null)
                message.netframes_size_p95 = object.netframes_size_p95 >>> 0;
            if (object.netframes_size_p99 != null)
                message.netframes_size_p99 = object.netframes_size_p99 >>> 0;
            if (object.ticks_total != null)
                message.ticks_total = object.ticks_total >>> 0;
            if (object.ticks_good != null)
                message.ticks_good = object.ticks_good >>> 0;
            if (object.ticks_good_almost_late != null)
                message.ticks_good_almost_late = object.ticks_good_almost_late >>> 0;
            if (object.ticks_fixed_dropped != null)
                message.ticks_fixed_dropped = object.ticks_fixed_dropped >>> 0;
            if (object.ticks_fixed_late != null)
                message.ticks_fixed_late = object.ticks_fixed_late >>> 0;
            if (object.ticks_bad_dropped != null)
                message.ticks_bad_dropped = object.ticks_bad_dropped >>> 0;
            if (object.ticks_bad_late != null)
                message.ticks_bad_late = object.ticks_bad_late >>> 0;
            if (object.ticks_bad_other != null)
                message.ticks_bad_other = object.ticks_bad_other >>> 0;
            if (object.tick_missrate_samples_total != null)
                message.tick_missrate_samples_total = object.tick_missrate_samples_total >>> 0;
            if (object.tick_missrate_samples_perfect != null)
                message.tick_missrate_samples_perfect = object.tick_missrate_samples_perfect >>> 0;
            if (object.tick_missrate_samples_perfectnet != null)
                message.tick_missrate_samples_perfectnet = object.tick_missrate_samples_perfectnet >>> 0;
            if (object.tick_missratenet_p75_x10 != null)
                message.tick_missratenet_p75_x10 = object.tick_missratenet_p75_x10 >>> 0;
            if (object.tick_missratenet_p95_x10 != null)
                message.tick_missratenet_p95_x10 = object.tick_missratenet_p95_x10 >>> 0;
            if (object.tick_missratenet_p99_x10 != null)
                message.tick_missratenet_p99_x10 = object.tick_missratenet_p99_x10 >>> 0;
            if (object.recvmargin_p1 != null)
                message.recvmargin_p1 = object.recvmargin_p1 | 0;
            if (object.recvmargin_p5 != null)
                message.recvmargin_p5 = object.recvmargin_p5 | 0;
            if (object.recvmargin_p25 != null)
                message.recvmargin_p25 = object.recvmargin_p25 | 0;
            if (object.recvmargin_p50 != null)
                message.recvmargin_p50 = object.recvmargin_p50 | 0;
            if (object.recvmargin_p75 != null)
                message.recvmargin_p75 = object.recvmargin_p75 | 0;
            if (object.recvmargin_p95 != null)
                message.recvmargin_p95 = object.recvmargin_p95 | 0;
            if (object.netframe_jitter_p50 != null)
                message.netframe_jitter_p50 = object.netframe_jitter_p50 >>> 0;
            if (object.netframe_jitter_p99 != null)
                message.netframe_jitter_p99 = object.netframe_jitter_p99 >>> 0;
            if (object.interval_peakjitter_p50 != null)
                message.interval_peakjitter_p50 = object.interval_peakjitter_p50 >>> 0;
            if (object.interval_peakjitter_p95 != null)
                message.interval_peakjitter_p95 = object.interval_peakjitter_p95 >>> 0;
            if (object.packet_misdelivery_rate_p50_x4 != null)
                message.packet_misdelivery_rate_p50_x4 = object.packet_misdelivery_rate_p50_x4 >>> 0;
            if (object.packet_misdelivery_rate_p95_x4 != null)
                message.packet_misdelivery_rate_p95_x4 = object.packet_misdelivery_rate_p95_x4 >>> 0;
            if (object.net_ping_p5 != null)
                message.net_ping_p5 = object.net_ping_p5 >>> 0;
            if (object.net_ping_p50 != null)
                message.net_ping_p50 = object.net_ping_p50 >>> 0;
            if (object.net_ping_p95 != null)
                message.net_ping_p95 = object.net_ping_p95 >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSource2NetworkFlowQuality message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSource2NetworkFlowQuality
         * @static
         * @param {CMsgSource2NetworkFlowQuality} message CMsgSource2NetworkFlowQuality
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSource2NetworkFlowQuality.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.duration = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.bytes_total = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bytes_total = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.bytes_total_reliable = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bytes_total_reliable = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.bytes_total_voice = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bytes_total_voice = options.longs === String ? "0" : 0;
                object.bytes_sec_p95 = 0;
                object.bytes_sec_p99 = 0;
                object.enginemsgs_total = 0;
                object.enginemsgs_sec_p95 = 0;
                object.enginemsgs_sec_p99 = 0;
                object.netframes_total = 0;
                object.netframes_dropped = 0;
                object.netframes_outoforder = 0;
                object.netframes_size_exceeds_mtu = 0;
                object.netframes_size_p95 = 0;
                object.netframes_size_p99 = 0;
                object.ticks_total = 0;
                object.ticks_good = 0;
                object.ticks_good_almost_late = 0;
                object.ticks_fixed_dropped = 0;
                object.ticks_fixed_late = 0;
                object.ticks_bad_dropped = 0;
                object.ticks_bad_late = 0;
                object.ticks_bad_other = 0;
                object.tick_missrate_samples_total = 0;
                object.tick_missrate_samples_perfect = 0;
                object.tick_missrate_samples_perfectnet = 0;
                object.tick_missratenet_p75_x10 = 0;
                object.tick_missratenet_p95_x10 = 0;
                object.tick_missratenet_p99_x10 = 0;
                object.recvmargin_p1 = 0;
                object.recvmargin_p5 = 0;
                object.recvmargin_p25 = 0;
                object.recvmargin_p50 = 0;
                object.recvmargin_p75 = 0;
                object.recvmargin_p95 = 0;
                object.netframe_jitter_p50 = 0;
                object.netframe_jitter_p99 = 0;
                object.interval_peakjitter_p50 = 0;
                object.interval_peakjitter_p95 = 0;
                object.packet_misdelivery_rate_p50_x4 = 0;
                object.packet_misdelivery_rate_p95_x4 = 0;
                object.net_ping_p5 = 0;
                object.net_ping_p50 = 0;
                object.net_ping_p95 = 0;
            }
            if (message.duration != null && message.hasOwnProperty("duration"))
                object.duration = message.duration;
            if (message.bytes_total != null && message.hasOwnProperty("bytes_total"))
                if (typeof message.bytes_total === "number")
                    object.bytes_total = options.longs === String ? String(message.bytes_total) : message.bytes_total;
                else
                    object.bytes_total = options.longs === String ? $util.Long.prototype.toString.call(message.bytes_total) : options.longs === Number ? new $util.LongBits(message.bytes_total.low >>> 0, message.bytes_total.high >>> 0).toNumber(true) : message.bytes_total;
            if (message.bytes_total_reliable != null && message.hasOwnProperty("bytes_total_reliable"))
                if (typeof message.bytes_total_reliable === "number")
                    object.bytes_total_reliable = options.longs === String ? String(message.bytes_total_reliable) : message.bytes_total_reliable;
                else
                    object.bytes_total_reliable = options.longs === String ? $util.Long.prototype.toString.call(message.bytes_total_reliable) : options.longs === Number ? new $util.LongBits(message.bytes_total_reliable.low >>> 0, message.bytes_total_reliable.high >>> 0).toNumber(true) : message.bytes_total_reliable;
            if (message.bytes_total_voice != null && message.hasOwnProperty("bytes_total_voice"))
                if (typeof message.bytes_total_voice === "number")
                    object.bytes_total_voice = options.longs === String ? String(message.bytes_total_voice) : message.bytes_total_voice;
                else
                    object.bytes_total_voice = options.longs === String ? $util.Long.prototype.toString.call(message.bytes_total_voice) : options.longs === Number ? new $util.LongBits(message.bytes_total_voice.low >>> 0, message.bytes_total_voice.high >>> 0).toNumber(true) : message.bytes_total_voice;
            if (message.bytes_sec_p95 != null && message.hasOwnProperty("bytes_sec_p95"))
                object.bytes_sec_p95 = message.bytes_sec_p95;
            if (message.bytes_sec_p99 != null && message.hasOwnProperty("bytes_sec_p99"))
                object.bytes_sec_p99 = message.bytes_sec_p99;
            if (message.enginemsgs_total != null && message.hasOwnProperty("enginemsgs_total"))
                object.enginemsgs_total = message.enginemsgs_total;
            if (message.enginemsgs_sec_p95 != null && message.hasOwnProperty("enginemsgs_sec_p95"))
                object.enginemsgs_sec_p95 = message.enginemsgs_sec_p95;
            if (message.enginemsgs_sec_p99 != null && message.hasOwnProperty("enginemsgs_sec_p99"))
                object.enginemsgs_sec_p99 = message.enginemsgs_sec_p99;
            if (message.netframes_total != null && message.hasOwnProperty("netframes_total"))
                object.netframes_total = message.netframes_total;
            if (message.netframes_dropped != null && message.hasOwnProperty("netframes_dropped"))
                object.netframes_dropped = message.netframes_dropped;
            if (message.netframes_outoforder != null && message.hasOwnProperty("netframes_outoforder"))
                object.netframes_outoforder = message.netframes_outoforder;
            if (message.netframes_size_exceeds_mtu != null && message.hasOwnProperty("netframes_size_exceeds_mtu"))
                object.netframes_size_exceeds_mtu = message.netframes_size_exceeds_mtu;
            if (message.netframes_size_p95 != null && message.hasOwnProperty("netframes_size_p95"))
                object.netframes_size_p95 = message.netframes_size_p95;
            if (message.netframes_size_p99 != null && message.hasOwnProperty("netframes_size_p99"))
                object.netframes_size_p99 = message.netframes_size_p99;
            if (message.ticks_total != null && message.hasOwnProperty("ticks_total"))
                object.ticks_total = message.ticks_total;
            if (message.ticks_good != null && message.hasOwnProperty("ticks_good"))
                object.ticks_good = message.ticks_good;
            if (message.ticks_good_almost_late != null && message.hasOwnProperty("ticks_good_almost_late"))
                object.ticks_good_almost_late = message.ticks_good_almost_late;
            if (message.ticks_fixed_dropped != null && message.hasOwnProperty("ticks_fixed_dropped"))
                object.ticks_fixed_dropped = message.ticks_fixed_dropped;
            if (message.ticks_fixed_late != null && message.hasOwnProperty("ticks_fixed_late"))
                object.ticks_fixed_late = message.ticks_fixed_late;
            if (message.ticks_bad_dropped != null && message.hasOwnProperty("ticks_bad_dropped"))
                object.ticks_bad_dropped = message.ticks_bad_dropped;
            if (message.ticks_bad_late != null && message.hasOwnProperty("ticks_bad_late"))
                object.ticks_bad_late = message.ticks_bad_late;
            if (message.ticks_bad_other != null && message.hasOwnProperty("ticks_bad_other"))
                object.ticks_bad_other = message.ticks_bad_other;
            if (message.tick_missrate_samples_total != null && message.hasOwnProperty("tick_missrate_samples_total"))
                object.tick_missrate_samples_total = message.tick_missrate_samples_total;
            if (message.tick_missrate_samples_perfect != null && message.hasOwnProperty("tick_missrate_samples_perfect"))
                object.tick_missrate_samples_perfect = message.tick_missrate_samples_perfect;
            if (message.tick_missrate_samples_perfectnet != null && message.hasOwnProperty("tick_missrate_samples_perfectnet"))
                object.tick_missrate_samples_perfectnet = message.tick_missrate_samples_perfectnet;
            if (message.tick_missratenet_p75_x10 != null && message.hasOwnProperty("tick_missratenet_p75_x10"))
                object.tick_missratenet_p75_x10 = message.tick_missratenet_p75_x10;
            if (message.tick_missratenet_p95_x10 != null && message.hasOwnProperty("tick_missratenet_p95_x10"))
                object.tick_missratenet_p95_x10 = message.tick_missratenet_p95_x10;
            if (message.tick_missratenet_p99_x10 != null && message.hasOwnProperty("tick_missratenet_p99_x10"))
                object.tick_missratenet_p99_x10 = message.tick_missratenet_p99_x10;
            if (message.recvmargin_p1 != null && message.hasOwnProperty("recvmargin_p1"))
                object.recvmargin_p1 = message.recvmargin_p1;
            if (message.recvmargin_p5 != null && message.hasOwnProperty("recvmargin_p5"))
                object.recvmargin_p5 = message.recvmargin_p5;
            if (message.recvmargin_p25 != null && message.hasOwnProperty("recvmargin_p25"))
                object.recvmargin_p25 = message.recvmargin_p25;
            if (message.recvmargin_p50 != null && message.hasOwnProperty("recvmargin_p50"))
                object.recvmargin_p50 = message.recvmargin_p50;
            if (message.recvmargin_p75 != null && message.hasOwnProperty("recvmargin_p75"))
                object.recvmargin_p75 = message.recvmargin_p75;
            if (message.recvmargin_p95 != null && message.hasOwnProperty("recvmargin_p95"))
                object.recvmargin_p95 = message.recvmargin_p95;
            if (message.netframe_jitter_p50 != null && message.hasOwnProperty("netframe_jitter_p50"))
                object.netframe_jitter_p50 = message.netframe_jitter_p50;
            if (message.netframe_jitter_p99 != null && message.hasOwnProperty("netframe_jitter_p99"))
                object.netframe_jitter_p99 = message.netframe_jitter_p99;
            if (message.interval_peakjitter_p50 != null && message.hasOwnProperty("interval_peakjitter_p50"))
                object.interval_peakjitter_p50 = message.interval_peakjitter_p50;
            if (message.interval_peakjitter_p95 != null && message.hasOwnProperty("interval_peakjitter_p95"))
                object.interval_peakjitter_p95 = message.interval_peakjitter_p95;
            if (message.packet_misdelivery_rate_p50_x4 != null && message.hasOwnProperty("packet_misdelivery_rate_p50_x4"))
                object.packet_misdelivery_rate_p50_x4 = message.packet_misdelivery_rate_p50_x4;
            if (message.packet_misdelivery_rate_p95_x4 != null && message.hasOwnProperty("packet_misdelivery_rate_p95_x4"))
                object.packet_misdelivery_rate_p95_x4 = message.packet_misdelivery_rate_p95_x4;
            if (message.net_ping_p5 != null && message.hasOwnProperty("net_ping_p5"))
                object.net_ping_p5 = message.net_ping_p5;
            if (message.net_ping_p50 != null && message.hasOwnProperty("net_ping_p50"))
                object.net_ping_p50 = message.net_ping_p50;
            if (message.net_ping_p95 != null && message.hasOwnProperty("net_ping_p95"))
                object.net_ping_p95 = message.net_ping_p95;
            return object;
        };
    
        /**
         * Converts this CMsgSource2NetworkFlowQuality to JSON.
         * @function toJSON
         * @memberof CMsgSource2NetworkFlowQuality
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSource2NetworkFlowQuality.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgSource2NetworkFlowQuality
         * @function getTypeUrl
         * @memberof CMsgSource2NetworkFlowQuality
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgSource2NetworkFlowQuality.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgSource2NetworkFlowQuality";
        };
    
        return CMsgSource2NetworkFlowQuality;
    })();
    
    $root.CMsgSource2PerfIntervalSample = (function() {
    
        /**
         * Properties of a CMsgSource2PerfIntervalSample.
         * @exports ICMsgSource2PerfIntervalSample
         * @interface ICMsgSource2PerfIntervalSample
         * @property {number|null} [frame_time_max_ms] CMsgSource2PerfIntervalSample frame_time_max_ms
         * @property {number|null} [frame_time_avg_ms] CMsgSource2PerfIntervalSample frame_time_avg_ms
         * @property {number|null} [frame_time_min_ms] CMsgSource2PerfIntervalSample frame_time_min_ms
         * @property {number|null} [frame_count] CMsgSource2PerfIntervalSample frame_count
         * @property {number|null} [frame_time_total_ms] CMsgSource2PerfIntervalSample frame_time_total_ms
         * @property {Array.<CMsgSource2PerfIntervalSample.ITag>|null} [tags] CMsgSource2PerfIntervalSample tags
         */
    
        /**
         * Constructs a new CMsgSource2PerfIntervalSample.
         * @exports CMsgSource2PerfIntervalSample
         * @classdesc Represents a CMsgSource2PerfIntervalSample.
         * @implements ICMsgSource2PerfIntervalSample
         * @constructor
         * @param {ICMsgSource2PerfIntervalSample=} [properties] Properties to set
         */
        function CMsgSource2PerfIntervalSample(properties) {
            this.tags = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSource2PerfIntervalSample frame_time_max_ms.
         * @member {number} frame_time_max_ms
         * @memberof CMsgSource2PerfIntervalSample
         * @instance
         */
        CMsgSource2PerfIntervalSample.prototype.frame_time_max_ms = 0;
    
        /**
         * CMsgSource2PerfIntervalSample frame_time_avg_ms.
         * @member {number} frame_time_avg_ms
         * @memberof CMsgSource2PerfIntervalSample
         * @instance
         */
        CMsgSource2PerfIntervalSample.prototype.frame_time_avg_ms = 0;
    
        /**
         * CMsgSource2PerfIntervalSample frame_time_min_ms.
         * @member {number} frame_time_min_ms
         * @memberof CMsgSource2PerfIntervalSample
         * @instance
         */
        CMsgSource2PerfIntervalSample.prototype.frame_time_min_ms = 0;
    
        /**
         * CMsgSource2PerfIntervalSample frame_count.
         * @member {number} frame_count
         * @memberof CMsgSource2PerfIntervalSample
         * @instance
         */
        CMsgSource2PerfIntervalSample.prototype.frame_count = 0;
    
        /**
         * CMsgSource2PerfIntervalSample frame_time_total_ms.
         * @member {number} frame_time_total_ms
         * @memberof CMsgSource2PerfIntervalSample
         * @instance
         */
        CMsgSource2PerfIntervalSample.prototype.frame_time_total_ms = 0;
    
        /**
         * CMsgSource2PerfIntervalSample tags.
         * @member {Array.<CMsgSource2PerfIntervalSample.ITag>} tags
         * @memberof CMsgSource2PerfIntervalSample
         * @instance
         */
        CMsgSource2PerfIntervalSample.prototype.tags = $util.emptyArray;
    
        /**
         * Creates a new CMsgSource2PerfIntervalSample instance using the specified properties.
         * @function create
         * @memberof CMsgSource2PerfIntervalSample
         * @static
         * @param {ICMsgSource2PerfIntervalSample=} [properties] Properties to set
         * @returns {CMsgSource2PerfIntervalSample} CMsgSource2PerfIntervalSample instance
         */
        CMsgSource2PerfIntervalSample.create = function create(properties) {
            return new CMsgSource2PerfIntervalSample(properties);
        };
    
        /**
         * Encodes the specified CMsgSource2PerfIntervalSample message. Does not implicitly {@link CMsgSource2PerfIntervalSample.verify|verify} messages.
         * @function encode
         * @memberof CMsgSource2PerfIntervalSample
         * @static
         * @param {ICMsgSource2PerfIntervalSample} message CMsgSource2PerfIntervalSample message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSource2PerfIntervalSample.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.frame_time_max_ms != null && Object.hasOwnProperty.call(message, "frame_time_max_ms"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.frame_time_max_ms);
            if (message.frame_time_avg_ms != null && Object.hasOwnProperty.call(message, "frame_time_avg_ms"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.frame_time_avg_ms);
            if (message.frame_time_min_ms != null && Object.hasOwnProperty.call(message, "frame_time_min_ms"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.frame_time_min_ms);
            if (message.frame_count != null && Object.hasOwnProperty.call(message, "frame_count"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.frame_count);
            if (message.frame_time_total_ms != null && Object.hasOwnProperty.call(message, "frame_time_total_ms"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.frame_time_total_ms);
            if (message.tags != null && message.tags.length)
                for (var i = 0; i < message.tags.length; ++i)
                    $root.CMsgSource2PerfIntervalSample.Tag.encode(message.tags[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSource2PerfIntervalSample message, length delimited. Does not implicitly {@link CMsgSource2PerfIntervalSample.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSource2PerfIntervalSample
         * @static
         * @param {ICMsgSource2PerfIntervalSample} message CMsgSource2PerfIntervalSample message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSource2PerfIntervalSample.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSource2PerfIntervalSample message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSource2PerfIntervalSample
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSource2PerfIntervalSample} CMsgSource2PerfIntervalSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSource2PerfIntervalSample.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSource2PerfIntervalSample();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.frame_time_max_ms = reader.float();
                        break;
                    }
                case 2: {
                        message.frame_time_avg_ms = reader.float();
                        break;
                    }
                case 3: {
                        message.frame_time_min_ms = reader.float();
                        break;
                    }
                case 4: {
                        message.frame_count = reader.int32();
                        break;
                    }
                case 5: {
                        message.frame_time_total_ms = reader.float();
                        break;
                    }
                case 6: {
                        if (!(message.tags && message.tags.length))
                            message.tags = [];
                        message.tags.push($root.CMsgSource2PerfIntervalSample.Tag.decode(reader, reader.uint32()));
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
         * Decodes a CMsgSource2PerfIntervalSample message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSource2PerfIntervalSample
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSource2PerfIntervalSample} CMsgSource2PerfIntervalSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSource2PerfIntervalSample.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSource2PerfIntervalSample message.
         * @function verify
         * @memberof CMsgSource2PerfIntervalSample
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSource2PerfIntervalSample.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.frame_time_max_ms != null && message.hasOwnProperty("frame_time_max_ms"))
                if (typeof message.frame_time_max_ms !== "number")
                    return "frame_time_max_ms: number expected";
            if (message.frame_time_avg_ms != null && message.hasOwnProperty("frame_time_avg_ms"))
                if (typeof message.frame_time_avg_ms !== "number")
                    return "frame_time_avg_ms: number expected";
            if (message.frame_time_min_ms != null && message.hasOwnProperty("frame_time_min_ms"))
                if (typeof message.frame_time_min_ms !== "number")
                    return "frame_time_min_ms: number expected";
            if (message.frame_count != null && message.hasOwnProperty("frame_count"))
                if (!$util.isInteger(message.frame_count))
                    return "frame_count: integer expected";
            if (message.frame_time_total_ms != null && message.hasOwnProperty("frame_time_total_ms"))
                if (typeof message.frame_time_total_ms !== "number")
                    return "frame_time_total_ms: number expected";
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (var i = 0; i < message.tags.length; ++i) {
                    var error = $root.CMsgSource2PerfIntervalSample.Tag.verify(message.tags[i]);
                    if (error)
                        return "tags." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgSource2PerfIntervalSample message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSource2PerfIntervalSample
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSource2PerfIntervalSample} CMsgSource2PerfIntervalSample
         */
        CMsgSource2PerfIntervalSample.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSource2PerfIntervalSample)
                return object;
            var message = new $root.CMsgSource2PerfIntervalSample();
            if (object.frame_time_max_ms != null)
                message.frame_time_max_ms = Number(object.frame_time_max_ms);
            if (object.frame_time_avg_ms != null)
                message.frame_time_avg_ms = Number(object.frame_time_avg_ms);
            if (object.frame_time_min_ms != null)
                message.frame_time_min_ms = Number(object.frame_time_min_ms);
            if (object.frame_count != null)
                message.frame_count = object.frame_count | 0;
            if (object.frame_time_total_ms != null)
                message.frame_time_total_ms = Number(object.frame_time_total_ms);
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".CMsgSource2PerfIntervalSample.tags: array expected");
                message.tags = [];
                for (var i = 0; i < object.tags.length; ++i) {
                    if (typeof object.tags[i] !== "object")
                        throw TypeError(".CMsgSource2PerfIntervalSample.tags: object expected");
                    message.tags[i] = $root.CMsgSource2PerfIntervalSample.Tag.fromObject(object.tags[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSource2PerfIntervalSample message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSource2PerfIntervalSample
         * @static
         * @param {CMsgSource2PerfIntervalSample} message CMsgSource2PerfIntervalSample
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSource2PerfIntervalSample.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tags = [];
            if (options.defaults) {
                object.frame_time_max_ms = 0;
                object.frame_time_avg_ms = 0;
                object.frame_time_min_ms = 0;
                object.frame_count = 0;
                object.frame_time_total_ms = 0;
            }
            if (message.frame_time_max_ms != null && message.hasOwnProperty("frame_time_max_ms"))
                object.frame_time_max_ms = options.json && !isFinite(message.frame_time_max_ms) ? String(message.frame_time_max_ms) : message.frame_time_max_ms;
            if (message.frame_time_avg_ms != null && message.hasOwnProperty("frame_time_avg_ms"))
                object.frame_time_avg_ms = options.json && !isFinite(message.frame_time_avg_ms) ? String(message.frame_time_avg_ms) : message.frame_time_avg_ms;
            if (message.frame_time_min_ms != null && message.hasOwnProperty("frame_time_min_ms"))
                object.frame_time_min_ms = options.json && !isFinite(message.frame_time_min_ms) ? String(message.frame_time_min_ms) : message.frame_time_min_ms;
            if (message.frame_count != null && message.hasOwnProperty("frame_count"))
                object.frame_count = message.frame_count;
            if (message.frame_time_total_ms != null && message.hasOwnProperty("frame_time_total_ms"))
                object.frame_time_total_ms = options.json && !isFinite(message.frame_time_total_ms) ? String(message.frame_time_total_ms) : message.frame_time_total_ms;
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (var j = 0; j < message.tags.length; ++j)
                    object.tags[j] = $root.CMsgSource2PerfIntervalSample.Tag.toObject(message.tags[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgSource2PerfIntervalSample to JSON.
         * @function toJSON
         * @memberof CMsgSource2PerfIntervalSample
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSource2PerfIntervalSample.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgSource2PerfIntervalSample
         * @function getTypeUrl
         * @memberof CMsgSource2PerfIntervalSample
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgSource2PerfIntervalSample.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgSource2PerfIntervalSample";
        };
    
        CMsgSource2PerfIntervalSample.Tag = (function() {
    
            /**
             * Properties of a Tag.
             * @memberof CMsgSource2PerfIntervalSample
             * @interface ITag
             * @property {string|null} [tag] Tag tag
             * @property {number|null} [max_value] Tag max_value
             */
    
            /**
             * Constructs a new Tag.
             * @memberof CMsgSource2PerfIntervalSample
             * @classdesc Represents a Tag.
             * @implements ITag
             * @constructor
             * @param {CMsgSource2PerfIntervalSample.ITag=} [properties] Properties to set
             */
            function Tag(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Tag tag.
             * @member {string} tag
             * @memberof CMsgSource2PerfIntervalSample.Tag
             * @instance
             */
            Tag.prototype.tag = "";
    
            /**
             * Tag max_value.
             * @member {number} max_value
             * @memberof CMsgSource2PerfIntervalSample.Tag
             * @instance
             */
            Tag.prototype.max_value = 0;
    
            /**
             * Creates a new Tag instance using the specified properties.
             * @function create
             * @memberof CMsgSource2PerfIntervalSample.Tag
             * @static
             * @param {CMsgSource2PerfIntervalSample.ITag=} [properties] Properties to set
             * @returns {CMsgSource2PerfIntervalSample.Tag} Tag instance
             */
            Tag.create = function create(properties) {
                return new Tag(properties);
            };
    
            /**
             * Encodes the specified Tag message. Does not implicitly {@link CMsgSource2PerfIntervalSample.Tag.verify|verify} messages.
             * @function encode
             * @memberof CMsgSource2PerfIntervalSample.Tag
             * @static
             * @param {CMsgSource2PerfIntervalSample.ITag} message Tag message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Tag.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tag != null && Object.hasOwnProperty.call(message, "tag"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.tag);
                if (message.max_value != null && Object.hasOwnProperty.call(message, "max_value"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.max_value);
                return writer;
            };
    
            /**
             * Encodes the specified Tag message, length delimited. Does not implicitly {@link CMsgSource2PerfIntervalSample.Tag.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgSource2PerfIntervalSample.Tag
             * @static
             * @param {CMsgSource2PerfIntervalSample.ITag} message Tag message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Tag.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Tag message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgSource2PerfIntervalSample.Tag
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgSource2PerfIntervalSample.Tag} Tag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Tag.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSource2PerfIntervalSample.Tag();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.tag = reader.string();
                            break;
                        }
                    case 2: {
                            message.max_value = reader.uint32();
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
             * Decodes a Tag message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgSource2PerfIntervalSample.Tag
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgSource2PerfIntervalSample.Tag} Tag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Tag.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Tag message.
             * @function verify
             * @memberof CMsgSource2PerfIntervalSample.Tag
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Tag.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tag != null && message.hasOwnProperty("tag"))
                    if (!$util.isString(message.tag))
                        return "tag: string expected";
                if (message.max_value != null && message.hasOwnProperty("max_value"))
                    if (!$util.isInteger(message.max_value))
                        return "max_value: integer expected";
                return null;
            };
    
            /**
             * Creates a Tag message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgSource2PerfIntervalSample.Tag
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgSource2PerfIntervalSample.Tag} Tag
             */
            Tag.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgSource2PerfIntervalSample.Tag)
                    return object;
                var message = new $root.CMsgSource2PerfIntervalSample.Tag();
                if (object.tag != null)
                    message.tag = String(object.tag);
                if (object.max_value != null)
                    message.max_value = object.max_value >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Tag message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgSource2PerfIntervalSample.Tag
             * @static
             * @param {CMsgSource2PerfIntervalSample.Tag} message Tag
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Tag.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.tag = "";
                    object.max_value = 0;
                }
                if (message.tag != null && message.hasOwnProperty("tag"))
                    object.tag = message.tag;
                if (message.max_value != null && message.hasOwnProperty("max_value"))
                    object.max_value = message.max_value;
                return object;
            };
    
            /**
             * Converts this Tag to JSON.
             * @function toJSON
             * @memberof CMsgSource2PerfIntervalSample.Tag
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Tag.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for Tag
             * @function getTypeUrl
             * @memberof CMsgSource2PerfIntervalSample.Tag
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Tag.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CMsgSource2PerfIntervalSample.Tag";
            };
    
            return Tag;
        })();
    
        return CMsgSource2PerfIntervalSample;
    })();
    
    $root.CSource2Metrics_MatchPerfSummary_Notification = (function() {
    
        /**
         * Properties of a CSource2Metrics_MatchPerfSummary_Notification.
         * @exports ICSource2Metrics_MatchPerfSummary_Notification
         * @interface ICSource2Metrics_MatchPerfSummary_Notification
         * @property {number|null} [appid] CSource2Metrics_MatchPerfSummary_Notification appid
         * @property {string|null} [game_mode] CSource2Metrics_MatchPerfSummary_Notification game_mode
         * @property {number|null} [server_build_id] CSource2Metrics_MatchPerfSummary_Notification server_build_id
         * @property {number|null} [server_popid] CSource2Metrics_MatchPerfSummary_Notification server_popid
         * @property {ICMsgSource2VProfLiteReport|null} [server_profile] CSource2Metrics_MatchPerfSummary_Notification server_profile
         * @property {Array.<CSource2Metrics_MatchPerfSummary_Notification.IClient>|null} [clients] CSource2Metrics_MatchPerfSummary_Notification clients
         * @property {string|null} [map] CSource2Metrics_MatchPerfSummary_Notification map
         */
    
        /**
         * Constructs a new CSource2Metrics_MatchPerfSummary_Notification.
         * @exports CSource2Metrics_MatchPerfSummary_Notification
         * @classdesc Represents a CSource2Metrics_MatchPerfSummary_Notification.
         * @implements ICSource2Metrics_MatchPerfSummary_Notification
         * @constructor
         * @param {ICSource2Metrics_MatchPerfSummary_Notification=} [properties] Properties to set
         */
        function CSource2Metrics_MatchPerfSummary_Notification(properties) {
            this.clients = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CSource2Metrics_MatchPerfSummary_Notification appid.
         * @member {number} appid
         * @memberof CSource2Metrics_MatchPerfSummary_Notification
         * @instance
         */
        CSource2Metrics_MatchPerfSummary_Notification.prototype.appid = 0;
    
        /**
         * CSource2Metrics_MatchPerfSummary_Notification game_mode.
         * @member {string} game_mode
         * @memberof CSource2Metrics_MatchPerfSummary_Notification
         * @instance
         */
        CSource2Metrics_MatchPerfSummary_Notification.prototype.game_mode = "";
    
        /**
         * CSource2Metrics_MatchPerfSummary_Notification server_build_id.
         * @member {number} server_build_id
         * @memberof CSource2Metrics_MatchPerfSummary_Notification
         * @instance
         */
        CSource2Metrics_MatchPerfSummary_Notification.prototype.server_build_id = 0;
    
        /**
         * CSource2Metrics_MatchPerfSummary_Notification server_popid.
         * @member {number} server_popid
         * @memberof CSource2Metrics_MatchPerfSummary_Notification
         * @instance
         */
        CSource2Metrics_MatchPerfSummary_Notification.prototype.server_popid = 0;
    
        /**
         * CSource2Metrics_MatchPerfSummary_Notification server_profile.
         * @member {ICMsgSource2VProfLiteReport|null|undefined} server_profile
         * @memberof CSource2Metrics_MatchPerfSummary_Notification
         * @instance
         */
        CSource2Metrics_MatchPerfSummary_Notification.prototype.server_profile = null;
    
        /**
         * CSource2Metrics_MatchPerfSummary_Notification clients.
         * @member {Array.<CSource2Metrics_MatchPerfSummary_Notification.IClient>} clients
         * @memberof CSource2Metrics_MatchPerfSummary_Notification
         * @instance
         */
        CSource2Metrics_MatchPerfSummary_Notification.prototype.clients = $util.emptyArray;
    
        /**
         * CSource2Metrics_MatchPerfSummary_Notification map.
         * @member {string} map
         * @memberof CSource2Metrics_MatchPerfSummary_Notification
         * @instance
         */
        CSource2Metrics_MatchPerfSummary_Notification.prototype.map = "";
    
        /**
         * Creates a new CSource2Metrics_MatchPerfSummary_Notification instance using the specified properties.
         * @function create
         * @memberof CSource2Metrics_MatchPerfSummary_Notification
         * @static
         * @param {ICSource2Metrics_MatchPerfSummary_Notification=} [properties] Properties to set
         * @returns {CSource2Metrics_MatchPerfSummary_Notification} CSource2Metrics_MatchPerfSummary_Notification instance
         */
        CSource2Metrics_MatchPerfSummary_Notification.create = function create(properties) {
            return new CSource2Metrics_MatchPerfSummary_Notification(properties);
        };
    
        /**
         * Encodes the specified CSource2Metrics_MatchPerfSummary_Notification message. Does not implicitly {@link CSource2Metrics_MatchPerfSummary_Notification.verify|verify} messages.
         * @function encode
         * @memberof CSource2Metrics_MatchPerfSummary_Notification
         * @static
         * @param {ICSource2Metrics_MatchPerfSummary_Notification} message CSource2Metrics_MatchPerfSummary_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSource2Metrics_MatchPerfSummary_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.game_mode != null && Object.hasOwnProperty.call(message, "game_mode"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.game_mode);
            if (message.server_build_id != null && Object.hasOwnProperty.call(message, "server_build_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.server_build_id);
            if (message.server_popid != null && Object.hasOwnProperty.call(message, "server_popid"))
                writer.uint32(/* id 4, wireType 5 =*/37).fixed32(message.server_popid);
            if (message.server_profile != null && Object.hasOwnProperty.call(message, "server_profile"))
                $root.CMsgSource2VProfLiteReport.encode(message.server_profile, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.clients != null && message.clients.length)
                for (var i = 0; i < message.clients.length; ++i)
                    $root.CSource2Metrics_MatchPerfSummary_Notification.Client.encode(message.clients[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.map != null && Object.hasOwnProperty.call(message, "map"))
                writer.uint32(/* id 20, wireType 2 =*/162).string(message.map);
            return writer;
        };
    
        /**
         * Encodes the specified CSource2Metrics_MatchPerfSummary_Notification message, length delimited. Does not implicitly {@link CSource2Metrics_MatchPerfSummary_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSource2Metrics_MatchPerfSummary_Notification
         * @static
         * @param {ICSource2Metrics_MatchPerfSummary_Notification} message CSource2Metrics_MatchPerfSummary_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSource2Metrics_MatchPerfSummary_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSource2Metrics_MatchPerfSummary_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CSource2Metrics_MatchPerfSummary_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSource2Metrics_MatchPerfSummary_Notification} CSource2Metrics_MatchPerfSummary_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSource2Metrics_MatchPerfSummary_Notification.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSource2Metrics_MatchPerfSummary_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.appid = reader.uint32();
                        break;
                    }
                case 2: {
                        message.game_mode = reader.string();
                        break;
                    }
                case 3: {
                        message.server_build_id = reader.uint32();
                        break;
                    }
                case 4: {
                        message.server_popid = reader.fixed32();
                        break;
                    }
                case 10: {
                        message.server_profile = $root.CMsgSource2VProfLiteReport.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        if (!(message.clients && message.clients.length))
                            message.clients = [];
                        message.clients.push($root.CSource2Metrics_MatchPerfSummary_Notification.Client.decode(reader, reader.uint32()));
                        break;
                    }
                case 20: {
                        message.map = reader.string();
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
         * Decodes a CSource2Metrics_MatchPerfSummary_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSource2Metrics_MatchPerfSummary_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSource2Metrics_MatchPerfSummary_Notification} CSource2Metrics_MatchPerfSummary_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSource2Metrics_MatchPerfSummary_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSource2Metrics_MatchPerfSummary_Notification message.
         * @function verify
         * @memberof CSource2Metrics_MatchPerfSummary_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSource2Metrics_MatchPerfSummary_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.game_mode != null && message.hasOwnProperty("game_mode"))
                if (!$util.isString(message.game_mode))
                    return "game_mode: string expected";
            if (message.server_build_id != null && message.hasOwnProperty("server_build_id"))
                if (!$util.isInteger(message.server_build_id))
                    return "server_build_id: integer expected";
            if (message.server_popid != null && message.hasOwnProperty("server_popid"))
                if (!$util.isInteger(message.server_popid))
                    return "server_popid: integer expected";
            if (message.server_profile != null && message.hasOwnProperty("server_profile")) {
                var error = $root.CMsgSource2VProfLiteReport.verify(message.server_profile);
                if (error)
                    return "server_profile." + error;
            }
            if (message.clients != null && message.hasOwnProperty("clients")) {
                if (!Array.isArray(message.clients))
                    return "clients: array expected";
                for (var i = 0; i < message.clients.length; ++i) {
                    var error = $root.CSource2Metrics_MatchPerfSummary_Notification.Client.verify(message.clients[i]);
                    if (error)
                        return "clients." + error;
                }
            }
            if (message.map != null && message.hasOwnProperty("map"))
                if (!$util.isString(message.map))
                    return "map: string expected";
            return null;
        };
    
        /**
         * Creates a CSource2Metrics_MatchPerfSummary_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSource2Metrics_MatchPerfSummary_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSource2Metrics_MatchPerfSummary_Notification} CSource2Metrics_MatchPerfSummary_Notification
         */
        CSource2Metrics_MatchPerfSummary_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CSource2Metrics_MatchPerfSummary_Notification)
                return object;
            var message = new $root.CSource2Metrics_MatchPerfSummary_Notification();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.game_mode != null)
                message.game_mode = String(object.game_mode);
            if (object.server_build_id != null)
                message.server_build_id = object.server_build_id >>> 0;
            if (object.server_popid != null)
                message.server_popid = object.server_popid >>> 0;
            if (object.server_profile != null) {
                if (typeof object.server_profile !== "object")
                    throw TypeError(".CSource2Metrics_MatchPerfSummary_Notification.server_profile: object expected");
                message.server_profile = $root.CMsgSource2VProfLiteReport.fromObject(object.server_profile);
            }
            if (object.clients) {
                if (!Array.isArray(object.clients))
                    throw TypeError(".CSource2Metrics_MatchPerfSummary_Notification.clients: array expected");
                message.clients = [];
                for (var i = 0; i < object.clients.length; ++i) {
                    if (typeof object.clients[i] !== "object")
                        throw TypeError(".CSource2Metrics_MatchPerfSummary_Notification.clients: object expected");
                    message.clients[i] = $root.CSource2Metrics_MatchPerfSummary_Notification.Client.fromObject(object.clients[i]);
                }
            }
            if (object.map != null)
                message.map = String(object.map);
            return message;
        };
    
        /**
         * Creates a plain object from a CSource2Metrics_MatchPerfSummary_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSource2Metrics_MatchPerfSummary_Notification
         * @static
         * @param {CSource2Metrics_MatchPerfSummary_Notification} message CSource2Metrics_MatchPerfSummary_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSource2Metrics_MatchPerfSummary_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.clients = [];
            if (options.defaults) {
                object.appid = 0;
                object.game_mode = "";
                object.server_build_id = 0;
                object.server_popid = 0;
                object.server_profile = null;
                object.map = "";
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.game_mode != null && message.hasOwnProperty("game_mode"))
                object.game_mode = message.game_mode;
            if (message.server_build_id != null && message.hasOwnProperty("server_build_id"))
                object.server_build_id = message.server_build_id;
            if (message.server_popid != null && message.hasOwnProperty("server_popid"))
                object.server_popid = message.server_popid;
            if (message.server_profile != null && message.hasOwnProperty("server_profile"))
                object.server_profile = $root.CMsgSource2VProfLiteReport.toObject(message.server_profile, options);
            if (message.clients && message.clients.length) {
                object.clients = [];
                for (var j = 0; j < message.clients.length; ++j)
                    object.clients[j] = $root.CSource2Metrics_MatchPerfSummary_Notification.Client.toObject(message.clients[j], options);
            }
            if (message.map != null && message.hasOwnProperty("map"))
                object.map = message.map;
            return object;
        };
    
        /**
         * Converts this CSource2Metrics_MatchPerfSummary_Notification to JSON.
         * @function toJSON
         * @memberof CSource2Metrics_MatchPerfSummary_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSource2Metrics_MatchPerfSummary_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CSource2Metrics_MatchPerfSummary_Notification
         * @function getTypeUrl
         * @memberof CSource2Metrics_MatchPerfSummary_Notification
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CSource2Metrics_MatchPerfSummary_Notification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CSource2Metrics_MatchPerfSummary_Notification";
        };
    
        CSource2Metrics_MatchPerfSummary_Notification.Client = (function() {
    
            /**
             * Properties of a Client.
             * @memberof CSource2Metrics_MatchPerfSummary_Notification
             * @interface IClient
             * @property {ICMsgSource2SystemSpecs|null} [system_specs] Client system_specs
             * @property {ICMsgSource2VProfLiteReport|null} [profile] Client profile
             * @property {number|null} [build_id] Client build_id
             * @property {ICMsgSource2NetworkFlowQuality|null} [downstream_flow] Client downstream_flow
             * @property {ICMsgSource2NetworkFlowQuality|null} [upstream_flow] Client upstream_flow
             * @property {number|Long|null} [steamid] Client steamid
             * @property {Array.<ICMsgSource2PerfIntervalSample>|null} [perf_samples] Client perf_samples
             */
    
            /**
             * Constructs a new Client.
             * @memberof CSource2Metrics_MatchPerfSummary_Notification
             * @classdesc Represents a Client.
             * @implements IClient
             * @constructor
             * @param {CSource2Metrics_MatchPerfSummary_Notification.IClient=} [properties] Properties to set
             */
            function Client(properties) {
                this.perf_samples = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Client system_specs.
             * @member {ICMsgSource2SystemSpecs|null|undefined} system_specs
             * @memberof CSource2Metrics_MatchPerfSummary_Notification.Client
             * @instance
             */
            Client.prototype.system_specs = null;
    
            /**
             * Client profile.
             * @member {ICMsgSource2VProfLiteReport|null|undefined} profile
             * @memberof CSource2Metrics_MatchPerfSummary_Notification.Client
             * @instance
             */
            Client.prototype.profile = null;
    
            /**
             * Client build_id.
             * @member {number} build_id
             * @memberof CSource2Metrics_MatchPerfSummary_Notification.Client
             * @instance
             */
            Client.prototype.build_id = 0;
    
            /**
             * Client downstream_flow.
             * @member {ICMsgSource2NetworkFlowQuality|null|undefined} downstream_flow
             * @memberof CSource2Metrics_MatchPerfSummary_Notification.Client
             * @instance
             */
            Client.prototype.downstream_flow = null;
    
            /**
             * Client upstream_flow.
             * @member {ICMsgSource2NetworkFlowQuality|null|undefined} upstream_flow
             * @memberof CSource2Metrics_MatchPerfSummary_Notification.Client
             * @instance
             */
            Client.prototype.upstream_flow = null;
    
            /**
             * Client steamid.
             * @member {number|Long} steamid
             * @memberof CSource2Metrics_MatchPerfSummary_Notification.Client
             * @instance
             */
            Client.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Client perf_samples.
             * @member {Array.<ICMsgSource2PerfIntervalSample>} perf_samples
             * @memberof CSource2Metrics_MatchPerfSummary_Notification.Client
             * @instance
             */
            Client.prototype.perf_samples = $util.emptyArray;
    
            /**
             * Creates a new Client instance using the specified properties.
             * @function create
             * @memberof CSource2Metrics_MatchPerfSummary_Notification.Client
             * @static
             * @param {CSource2Metrics_MatchPerfSummary_Notification.IClient=} [properties] Properties to set
             * @returns {CSource2Metrics_MatchPerfSummary_Notification.Client} Client instance
             */
            Client.create = function create(properties) {
                return new Client(properties);
            };
    
            /**
             * Encodes the specified Client message. Does not implicitly {@link CSource2Metrics_MatchPerfSummary_Notification.Client.verify|verify} messages.
             * @function encode
             * @memberof CSource2Metrics_MatchPerfSummary_Notification.Client
             * @static
             * @param {CSource2Metrics_MatchPerfSummary_Notification.IClient} message Client message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Client.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.system_specs != null && Object.hasOwnProperty.call(message, "system_specs"))
                    $root.CMsgSource2SystemSpecs.encode(message.system_specs, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.profile != null && Object.hasOwnProperty.call(message, "profile"))
                    $root.CMsgSource2VProfLiteReport.encode(message.profile, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.build_id != null && Object.hasOwnProperty.call(message, "build_id"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.build_id);
                if (message.downstream_flow != null && Object.hasOwnProperty.call(message, "downstream_flow"))
                    $root.CMsgSource2NetworkFlowQuality.encode(message.downstream_flow, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.upstream_flow != null && Object.hasOwnProperty.call(message, "upstream_flow"))
                    $root.CMsgSource2NetworkFlowQuality.encode(message.upstream_flow, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                    writer.uint32(/* id 10, wireType 1 =*/81).fixed64(message.steamid);
                if (message.perf_samples != null && message.perf_samples.length)
                    for (var i = 0; i < message.perf_samples.length; ++i)
                        $root.CMsgSource2PerfIntervalSample.encode(message.perf_samples[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Client message, length delimited. Does not implicitly {@link CSource2Metrics_MatchPerfSummary_Notification.Client.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CSource2Metrics_MatchPerfSummary_Notification.Client
             * @static
             * @param {CSource2Metrics_MatchPerfSummary_Notification.IClient} message Client message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Client.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Client message from the specified reader or buffer.
             * @function decode
             * @memberof CSource2Metrics_MatchPerfSummary_Notification.Client
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CSource2Metrics_MatchPerfSummary_Notification.Client} Client
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Client.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSource2Metrics_MatchPerfSummary_Notification.Client();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.system_specs = $root.CMsgSource2SystemSpecs.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.profile = $root.CMsgSource2VProfLiteReport.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.build_id = reader.uint32();
                            break;
                        }
                    case 4: {
                            message.downstream_flow = $root.CMsgSource2NetworkFlowQuality.decode(reader, reader.uint32());
                            break;
                        }
                    case 5: {
                            message.upstream_flow = $root.CMsgSource2NetworkFlowQuality.decode(reader, reader.uint32());
                            break;
                        }
                    case 10: {
                            message.steamid = reader.fixed64();
                            break;
                        }
                    case 11: {
                            if (!(message.perf_samples && message.perf_samples.length))
                                message.perf_samples = [];
                            message.perf_samples.push($root.CMsgSource2PerfIntervalSample.decode(reader, reader.uint32()));
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
             * Decodes a Client message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CSource2Metrics_MatchPerfSummary_Notification.Client
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CSource2Metrics_MatchPerfSummary_Notification.Client} Client
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Client.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Client message.
             * @function verify
             * @memberof CSource2Metrics_MatchPerfSummary_Notification.Client
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Client.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.system_specs != null && message.hasOwnProperty("system_specs")) {
                    var error = $root.CMsgSource2SystemSpecs.verify(message.system_specs);
                    if (error)
                        return "system_specs." + error;
                }
                if (message.profile != null && message.hasOwnProperty("profile")) {
                    var error = $root.CMsgSource2VProfLiteReport.verify(message.profile);
                    if (error)
                        return "profile." + error;
                }
                if (message.build_id != null && message.hasOwnProperty("build_id"))
                    if (!$util.isInteger(message.build_id))
                        return "build_id: integer expected";
                if (message.downstream_flow != null && message.hasOwnProperty("downstream_flow")) {
                    var error = $root.CMsgSource2NetworkFlowQuality.verify(message.downstream_flow);
                    if (error)
                        return "downstream_flow." + error;
                }
                if (message.upstream_flow != null && message.hasOwnProperty("upstream_flow")) {
                    var error = $root.CMsgSource2NetworkFlowQuality.verify(message.upstream_flow);
                    if (error)
                        return "upstream_flow." + error;
                }
                if (message.steamid != null && message.hasOwnProperty("steamid"))
                    if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                        return "steamid: integer|Long expected";
                if (message.perf_samples != null && message.hasOwnProperty("perf_samples")) {
                    if (!Array.isArray(message.perf_samples))
                        return "perf_samples: array expected";
                    for (var i = 0; i < message.perf_samples.length; ++i) {
                        var error = $root.CMsgSource2PerfIntervalSample.verify(message.perf_samples[i]);
                        if (error)
                            return "perf_samples." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a Client message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CSource2Metrics_MatchPerfSummary_Notification.Client
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CSource2Metrics_MatchPerfSummary_Notification.Client} Client
             */
            Client.fromObject = function fromObject(object) {
                if (object instanceof $root.CSource2Metrics_MatchPerfSummary_Notification.Client)
                    return object;
                var message = new $root.CSource2Metrics_MatchPerfSummary_Notification.Client();
                if (object.system_specs != null) {
                    if (typeof object.system_specs !== "object")
                        throw TypeError(".CSource2Metrics_MatchPerfSummary_Notification.Client.system_specs: object expected");
                    message.system_specs = $root.CMsgSource2SystemSpecs.fromObject(object.system_specs);
                }
                if (object.profile != null) {
                    if (typeof object.profile !== "object")
                        throw TypeError(".CSource2Metrics_MatchPerfSummary_Notification.Client.profile: object expected");
                    message.profile = $root.CMsgSource2VProfLiteReport.fromObject(object.profile);
                }
                if (object.build_id != null)
                    message.build_id = object.build_id >>> 0;
                if (object.downstream_flow != null) {
                    if (typeof object.downstream_flow !== "object")
                        throw TypeError(".CSource2Metrics_MatchPerfSummary_Notification.Client.downstream_flow: object expected");
                    message.downstream_flow = $root.CMsgSource2NetworkFlowQuality.fromObject(object.downstream_flow);
                }
                if (object.upstream_flow != null) {
                    if (typeof object.upstream_flow !== "object")
                        throw TypeError(".CSource2Metrics_MatchPerfSummary_Notification.Client.upstream_flow: object expected");
                    message.upstream_flow = $root.CMsgSource2NetworkFlowQuality.fromObject(object.upstream_flow);
                }
                if (object.steamid != null)
                    if ($util.Long)
                        (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                    else if (typeof object.steamid === "string")
                        message.steamid = parseInt(object.steamid, 10);
                    else if (typeof object.steamid === "number")
                        message.steamid = object.steamid;
                    else if (typeof object.steamid === "object")
                        message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
                if (object.perf_samples) {
                    if (!Array.isArray(object.perf_samples))
                        throw TypeError(".CSource2Metrics_MatchPerfSummary_Notification.Client.perf_samples: array expected");
                    message.perf_samples = [];
                    for (var i = 0; i < object.perf_samples.length; ++i) {
                        if (typeof object.perf_samples[i] !== "object")
                            throw TypeError(".CSource2Metrics_MatchPerfSummary_Notification.Client.perf_samples: object expected");
                        message.perf_samples[i] = $root.CMsgSource2PerfIntervalSample.fromObject(object.perf_samples[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Client message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CSource2Metrics_MatchPerfSummary_Notification.Client
             * @static
             * @param {CSource2Metrics_MatchPerfSummary_Notification.Client} message Client
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Client.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.perf_samples = [];
                if (options.defaults) {
                    object.system_specs = null;
                    object.profile = null;
                    object.build_id = 0;
                    object.downstream_flow = null;
                    object.upstream_flow = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.steamid = options.longs === String ? "0" : 0;
                }
                if (message.system_specs != null && message.hasOwnProperty("system_specs"))
                    object.system_specs = $root.CMsgSource2SystemSpecs.toObject(message.system_specs, options);
                if (message.profile != null && message.hasOwnProperty("profile"))
                    object.profile = $root.CMsgSource2VProfLiteReport.toObject(message.profile, options);
                if (message.build_id != null && message.hasOwnProperty("build_id"))
                    object.build_id = message.build_id;
                if (message.downstream_flow != null && message.hasOwnProperty("downstream_flow"))
                    object.downstream_flow = $root.CMsgSource2NetworkFlowQuality.toObject(message.downstream_flow, options);
                if (message.upstream_flow != null && message.hasOwnProperty("upstream_flow"))
                    object.upstream_flow = $root.CMsgSource2NetworkFlowQuality.toObject(message.upstream_flow, options);
                if (message.steamid != null && message.hasOwnProperty("steamid"))
                    if (typeof message.steamid === "number")
                        object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                    else
                        object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
                if (message.perf_samples && message.perf_samples.length) {
                    object.perf_samples = [];
                    for (var j = 0; j < message.perf_samples.length; ++j)
                        object.perf_samples[j] = $root.CMsgSource2PerfIntervalSample.toObject(message.perf_samples[j], options);
                }
                return object;
            };
    
            /**
             * Converts this Client to JSON.
             * @function toJSON
             * @memberof CSource2Metrics_MatchPerfSummary_Notification.Client
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Client.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for Client
             * @function getTypeUrl
             * @memberof CSource2Metrics_MatchPerfSummary_Notification.Client
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Client.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CSource2Metrics_MatchPerfSummary_Notification.Client";
            };
    
            return Client;
        })();
    
        return CSource2Metrics_MatchPerfSummary_Notification;
    })();
    
    $root.CMsgSource2PlayStatsPackedRecordList = (function() {
    
        /**
         * Properties of a CMsgSource2PlayStatsPackedRecordList.
         * @exports ICMsgSource2PlayStatsPackedRecordList
         * @interface ICMsgSource2PlayStatsPackedRecordList
         * @property {string|null} [record_name] CMsgSource2PlayStatsPackedRecordList record_name
         * @property {Array.<CMsgSource2PlayStatsPackedRecordList.IFieldDef>|null} [field_defs] CMsgSource2PlayStatsPackedRecordList field_defs
         * @property {number|null} [record_count] CMsgSource2PlayStatsPackedRecordList record_count
         * @property {Array.<number|Long>|null} [uint64_vals] CMsgSource2PlayStatsPackedRecordList uint64_vals
         * @property {Array.<number>|null} [uint32_vals] CMsgSource2PlayStatsPackedRecordList uint32_vals
         * @property {Array.<number>|null} [uint16_vals] CMsgSource2PlayStatsPackedRecordList uint16_vals
         * @property {Array.<number>|null} [uint8_vals] CMsgSource2PlayStatsPackedRecordList uint8_vals
         * @property {Array.<number|Long>|null} [int64_vals] CMsgSource2PlayStatsPackedRecordList int64_vals
         * @property {Array.<number>|null} [int32_vals] CMsgSource2PlayStatsPackedRecordList int32_vals
         * @property {Array.<number>|null} [int16_vals] CMsgSource2PlayStatsPackedRecordList int16_vals
         * @property {Array.<number>|null} [int8_vals] CMsgSource2PlayStatsPackedRecordList int8_vals
         * @property {Array.<number>|null} [float64_vals] CMsgSource2PlayStatsPackedRecordList float64_vals
         * @property {Array.<number>|null} [float32_vals] CMsgSource2PlayStatsPackedRecordList float32_vals
         * @property {Array.<boolean>|null} [bool_vals] CMsgSource2PlayStatsPackedRecordList bool_vals
         * @property {Array.<string>|null} [string_vals] CMsgSource2PlayStatsPackedRecordList string_vals
         * @property {Array.<string>|null} [low_cardinality_string_vals] CMsgSource2PlayStatsPackedRecordList low_cardinality_string_vals
         * @property {Array.<number>|null} [utcdatetime_vals] CMsgSource2PlayStatsPackedRecordList utcdatetime_vals
         * @property {Array.<number|Long>|null} [steamidtrustbucket_vals] CMsgSource2PlayStatsPackedRecordList steamidtrustbucket_vals
         * @property {Array.<CMsgSource2PlayStatsPackedRecordList.ISteamIDList>|null} [trustbucket_vals] CMsgSource2PlayStatsPackedRecordList trustbucket_vals
         */
    
        /**
         * Constructs a new CMsgSource2PlayStatsPackedRecordList.
         * @exports CMsgSource2PlayStatsPackedRecordList
         * @classdesc Represents a CMsgSource2PlayStatsPackedRecordList.
         * @implements ICMsgSource2PlayStatsPackedRecordList
         * @constructor
         * @param {ICMsgSource2PlayStatsPackedRecordList=} [properties] Properties to set
         */
        function CMsgSource2PlayStatsPackedRecordList(properties) {
            this.field_defs = [];
            this.uint64_vals = [];
            this.uint32_vals = [];
            this.uint16_vals = [];
            this.uint8_vals = [];
            this.int64_vals = [];
            this.int32_vals = [];
            this.int16_vals = [];
            this.int8_vals = [];
            this.float64_vals = [];
            this.float32_vals = [];
            this.bool_vals = [];
            this.string_vals = [];
            this.low_cardinality_string_vals = [];
            this.utcdatetime_vals = [];
            this.steamidtrustbucket_vals = [];
            this.trustbucket_vals = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSource2PlayStatsPackedRecordList record_name.
         * @member {string} record_name
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @instance
         */
        CMsgSource2PlayStatsPackedRecordList.prototype.record_name = "";
    
        /**
         * CMsgSource2PlayStatsPackedRecordList field_defs.
         * @member {Array.<CMsgSource2PlayStatsPackedRecordList.IFieldDef>} field_defs
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @instance
         */
        CMsgSource2PlayStatsPackedRecordList.prototype.field_defs = $util.emptyArray;
    
        /**
         * CMsgSource2PlayStatsPackedRecordList record_count.
         * @member {number} record_count
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @instance
         */
        CMsgSource2PlayStatsPackedRecordList.prototype.record_count = 0;
    
        /**
         * CMsgSource2PlayStatsPackedRecordList uint64_vals.
         * @member {Array.<number|Long>} uint64_vals
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @instance
         */
        CMsgSource2PlayStatsPackedRecordList.prototype.uint64_vals = $util.emptyArray;
    
        /**
         * CMsgSource2PlayStatsPackedRecordList uint32_vals.
         * @member {Array.<number>} uint32_vals
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @instance
         */
        CMsgSource2PlayStatsPackedRecordList.prototype.uint32_vals = $util.emptyArray;
    
        /**
         * CMsgSource2PlayStatsPackedRecordList uint16_vals.
         * @member {Array.<number>} uint16_vals
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @instance
         */
        CMsgSource2PlayStatsPackedRecordList.prototype.uint16_vals = $util.emptyArray;
    
        /**
         * CMsgSource2PlayStatsPackedRecordList uint8_vals.
         * @member {Array.<number>} uint8_vals
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @instance
         */
        CMsgSource2PlayStatsPackedRecordList.prototype.uint8_vals = $util.emptyArray;
    
        /**
         * CMsgSource2PlayStatsPackedRecordList int64_vals.
         * @member {Array.<number|Long>} int64_vals
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @instance
         */
        CMsgSource2PlayStatsPackedRecordList.prototype.int64_vals = $util.emptyArray;
    
        /**
         * CMsgSource2PlayStatsPackedRecordList int32_vals.
         * @member {Array.<number>} int32_vals
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @instance
         */
        CMsgSource2PlayStatsPackedRecordList.prototype.int32_vals = $util.emptyArray;
    
        /**
         * CMsgSource2PlayStatsPackedRecordList int16_vals.
         * @member {Array.<number>} int16_vals
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @instance
         */
        CMsgSource2PlayStatsPackedRecordList.prototype.int16_vals = $util.emptyArray;
    
        /**
         * CMsgSource2PlayStatsPackedRecordList int8_vals.
         * @member {Array.<number>} int8_vals
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @instance
         */
        CMsgSource2PlayStatsPackedRecordList.prototype.int8_vals = $util.emptyArray;
    
        /**
         * CMsgSource2PlayStatsPackedRecordList float64_vals.
         * @member {Array.<number>} float64_vals
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @instance
         */
        CMsgSource2PlayStatsPackedRecordList.prototype.float64_vals = $util.emptyArray;
    
        /**
         * CMsgSource2PlayStatsPackedRecordList float32_vals.
         * @member {Array.<number>} float32_vals
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @instance
         */
        CMsgSource2PlayStatsPackedRecordList.prototype.float32_vals = $util.emptyArray;
    
        /**
         * CMsgSource2PlayStatsPackedRecordList bool_vals.
         * @member {Array.<boolean>} bool_vals
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @instance
         */
        CMsgSource2PlayStatsPackedRecordList.prototype.bool_vals = $util.emptyArray;
    
        /**
         * CMsgSource2PlayStatsPackedRecordList string_vals.
         * @member {Array.<string>} string_vals
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @instance
         */
        CMsgSource2PlayStatsPackedRecordList.prototype.string_vals = $util.emptyArray;
    
        /**
         * CMsgSource2PlayStatsPackedRecordList low_cardinality_string_vals.
         * @member {Array.<string>} low_cardinality_string_vals
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @instance
         */
        CMsgSource2PlayStatsPackedRecordList.prototype.low_cardinality_string_vals = $util.emptyArray;
    
        /**
         * CMsgSource2PlayStatsPackedRecordList utcdatetime_vals.
         * @member {Array.<number>} utcdatetime_vals
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @instance
         */
        CMsgSource2PlayStatsPackedRecordList.prototype.utcdatetime_vals = $util.emptyArray;
    
        /**
         * CMsgSource2PlayStatsPackedRecordList steamidtrustbucket_vals.
         * @member {Array.<number|Long>} steamidtrustbucket_vals
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @instance
         */
        CMsgSource2PlayStatsPackedRecordList.prototype.steamidtrustbucket_vals = $util.emptyArray;
    
        /**
         * CMsgSource2PlayStatsPackedRecordList trustbucket_vals.
         * @member {Array.<CMsgSource2PlayStatsPackedRecordList.ISteamIDList>} trustbucket_vals
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @instance
         */
        CMsgSource2PlayStatsPackedRecordList.prototype.trustbucket_vals = $util.emptyArray;
    
        /**
         * Creates a new CMsgSource2PlayStatsPackedRecordList instance using the specified properties.
         * @function create
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @static
         * @param {ICMsgSource2PlayStatsPackedRecordList=} [properties] Properties to set
         * @returns {CMsgSource2PlayStatsPackedRecordList} CMsgSource2PlayStatsPackedRecordList instance
         */
        CMsgSource2PlayStatsPackedRecordList.create = function create(properties) {
            return new CMsgSource2PlayStatsPackedRecordList(properties);
        };
    
        /**
         * Encodes the specified CMsgSource2PlayStatsPackedRecordList message. Does not implicitly {@link CMsgSource2PlayStatsPackedRecordList.verify|verify} messages.
         * @function encode
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @static
         * @param {ICMsgSource2PlayStatsPackedRecordList} message CMsgSource2PlayStatsPackedRecordList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSource2PlayStatsPackedRecordList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.record_name != null && Object.hasOwnProperty.call(message, "record_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.record_name);
            if (message.field_defs != null && message.field_defs.length)
                for (var i = 0; i < message.field_defs.length; ++i)
                    $root.CMsgSource2PlayStatsPackedRecordList.FieldDef.encode(message.field_defs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.record_count != null && Object.hasOwnProperty.call(message, "record_count"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.record_count);
            if (message.uint64_vals != null && message.uint64_vals.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.uint64_vals.length; ++i)
                    writer.uint64(message.uint64_vals[i]);
                writer.ldelim();
            }
            if (message.uint32_vals != null && message.uint32_vals.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (var i = 0; i < message.uint32_vals.length; ++i)
                    writer.uint32(message.uint32_vals[i]);
                writer.ldelim();
            }
            if (message.uint16_vals != null && message.uint16_vals.length) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork();
                for (var i = 0; i < message.uint16_vals.length; ++i)
                    writer.uint32(message.uint16_vals[i]);
                writer.ldelim();
            }
            if (message.uint8_vals != null && message.uint8_vals.length) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork();
                for (var i = 0; i < message.uint8_vals.length; ++i)
                    writer.uint32(message.uint8_vals[i]);
                writer.ldelim();
            }
            if (message.int64_vals != null && message.int64_vals.length) {
                writer.uint32(/* id 8, wireType 2 =*/66).fork();
                for (var i = 0; i < message.int64_vals.length; ++i)
                    writer.int64(message.int64_vals[i]);
                writer.ldelim();
            }
            if (message.int32_vals != null && message.int32_vals.length) {
                writer.uint32(/* id 9, wireType 2 =*/74).fork();
                for (var i = 0; i < message.int32_vals.length; ++i)
                    writer.int32(message.int32_vals[i]);
                writer.ldelim();
            }
            if (message.int16_vals != null && message.int16_vals.length) {
                writer.uint32(/* id 10, wireType 2 =*/82).fork();
                for (var i = 0; i < message.int16_vals.length; ++i)
                    writer.int32(message.int16_vals[i]);
                writer.ldelim();
            }
            if (message.int8_vals != null && message.int8_vals.length) {
                writer.uint32(/* id 11, wireType 2 =*/90).fork();
                for (var i = 0; i < message.int8_vals.length; ++i)
                    writer.int32(message.int8_vals[i]);
                writer.ldelim();
            }
            if (message.float64_vals != null && message.float64_vals.length) {
                writer.uint32(/* id 12, wireType 2 =*/98).fork();
                for (var i = 0; i < message.float64_vals.length; ++i)
                    writer.double(message.float64_vals[i]);
                writer.ldelim();
            }
            if (message.float32_vals != null && message.float32_vals.length) {
                writer.uint32(/* id 13, wireType 2 =*/106).fork();
                for (var i = 0; i < message.float32_vals.length; ++i)
                    writer.float(message.float32_vals[i]);
                writer.ldelim();
            }
            if (message.bool_vals != null && message.bool_vals.length) {
                writer.uint32(/* id 14, wireType 2 =*/114).fork();
                for (var i = 0; i < message.bool_vals.length; ++i)
                    writer.bool(message.bool_vals[i]);
                writer.ldelim();
            }
            if (message.string_vals != null && message.string_vals.length)
                for (var i = 0; i < message.string_vals.length; ++i)
                    writer.uint32(/* id 15, wireType 2 =*/122).string(message.string_vals[i]);
            if (message.low_cardinality_string_vals != null && message.low_cardinality_string_vals.length)
                for (var i = 0; i < message.low_cardinality_string_vals.length; ++i)
                    writer.uint32(/* id 16, wireType 2 =*/130).string(message.low_cardinality_string_vals[i]);
            if (message.utcdatetime_vals != null && message.utcdatetime_vals.length) {
                writer.uint32(/* id 17, wireType 2 =*/138).fork();
                for (var i = 0; i < message.utcdatetime_vals.length; ++i)
                    writer.fixed32(message.utcdatetime_vals[i]);
                writer.ldelim();
            }
            if (message.steamidtrustbucket_vals != null && message.steamidtrustbucket_vals.length) {
                writer.uint32(/* id 18, wireType 2 =*/146).fork();
                for (var i = 0; i < message.steamidtrustbucket_vals.length; ++i)
                    writer.fixed64(message.steamidtrustbucket_vals[i]);
                writer.ldelim();
            }
            if (message.trustbucket_vals != null && message.trustbucket_vals.length)
                for (var i = 0; i < message.trustbucket_vals.length; ++i)
                    $root.CMsgSource2PlayStatsPackedRecordList.SteamIDList.encode(message.trustbucket_vals[i], writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSource2PlayStatsPackedRecordList message, length delimited. Does not implicitly {@link CMsgSource2PlayStatsPackedRecordList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @static
         * @param {ICMsgSource2PlayStatsPackedRecordList} message CMsgSource2PlayStatsPackedRecordList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSource2PlayStatsPackedRecordList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSource2PlayStatsPackedRecordList message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSource2PlayStatsPackedRecordList} CMsgSource2PlayStatsPackedRecordList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSource2PlayStatsPackedRecordList.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSource2PlayStatsPackedRecordList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.record_name = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.field_defs && message.field_defs.length))
                            message.field_defs = [];
                        message.field_defs.push($root.CMsgSource2PlayStatsPackedRecordList.FieldDef.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.record_count = reader.uint32();
                        break;
                    }
                case 4: {
                        if (!(message.uint64_vals && message.uint64_vals.length))
                            message.uint64_vals = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.uint64_vals.push(reader.uint64());
                        } else
                            message.uint64_vals.push(reader.uint64());
                        break;
                    }
                case 5: {
                        if (!(message.uint32_vals && message.uint32_vals.length))
                            message.uint32_vals = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.uint32_vals.push(reader.uint32());
                        } else
                            message.uint32_vals.push(reader.uint32());
                        break;
                    }
                case 6: {
                        if (!(message.uint16_vals && message.uint16_vals.length))
                            message.uint16_vals = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.uint16_vals.push(reader.uint32());
                        } else
                            message.uint16_vals.push(reader.uint32());
                        break;
                    }
                case 7: {
                        if (!(message.uint8_vals && message.uint8_vals.length))
                            message.uint8_vals = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.uint8_vals.push(reader.uint32());
                        } else
                            message.uint8_vals.push(reader.uint32());
                        break;
                    }
                case 8: {
                        if (!(message.int64_vals && message.int64_vals.length))
                            message.int64_vals = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.int64_vals.push(reader.int64());
                        } else
                            message.int64_vals.push(reader.int64());
                        break;
                    }
                case 9: {
                        if (!(message.int32_vals && message.int32_vals.length))
                            message.int32_vals = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.int32_vals.push(reader.int32());
                        } else
                            message.int32_vals.push(reader.int32());
                        break;
                    }
                case 10: {
                        if (!(message.int16_vals && message.int16_vals.length))
                            message.int16_vals = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.int16_vals.push(reader.int32());
                        } else
                            message.int16_vals.push(reader.int32());
                        break;
                    }
                case 11: {
                        if (!(message.int8_vals && message.int8_vals.length))
                            message.int8_vals = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.int8_vals.push(reader.int32());
                        } else
                            message.int8_vals.push(reader.int32());
                        break;
                    }
                case 12: {
                        if (!(message.float64_vals && message.float64_vals.length))
                            message.float64_vals = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.float64_vals.push(reader.double());
                        } else
                            message.float64_vals.push(reader.double());
                        break;
                    }
                case 13: {
                        if (!(message.float32_vals && message.float32_vals.length))
                            message.float32_vals = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.float32_vals.push(reader.float());
                        } else
                            message.float32_vals.push(reader.float());
                        break;
                    }
                case 14: {
                        if (!(message.bool_vals && message.bool_vals.length))
                            message.bool_vals = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.bool_vals.push(reader.bool());
                        } else
                            message.bool_vals.push(reader.bool());
                        break;
                    }
                case 15: {
                        if (!(message.string_vals && message.string_vals.length))
                            message.string_vals = [];
                        message.string_vals.push(reader.string());
                        break;
                    }
                case 16: {
                        if (!(message.low_cardinality_string_vals && message.low_cardinality_string_vals.length))
                            message.low_cardinality_string_vals = [];
                        message.low_cardinality_string_vals.push(reader.string());
                        break;
                    }
                case 17: {
                        if (!(message.utcdatetime_vals && message.utcdatetime_vals.length))
                            message.utcdatetime_vals = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.utcdatetime_vals.push(reader.fixed32());
                        } else
                            message.utcdatetime_vals.push(reader.fixed32());
                        break;
                    }
                case 18: {
                        if (!(message.steamidtrustbucket_vals && message.steamidtrustbucket_vals.length))
                            message.steamidtrustbucket_vals = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.steamidtrustbucket_vals.push(reader.fixed64());
                        } else
                            message.steamidtrustbucket_vals.push(reader.fixed64());
                        break;
                    }
                case 19: {
                        if (!(message.trustbucket_vals && message.trustbucket_vals.length))
                            message.trustbucket_vals = [];
                        message.trustbucket_vals.push($root.CMsgSource2PlayStatsPackedRecordList.SteamIDList.decode(reader, reader.uint32()));
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
         * Decodes a CMsgSource2PlayStatsPackedRecordList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSource2PlayStatsPackedRecordList} CMsgSource2PlayStatsPackedRecordList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSource2PlayStatsPackedRecordList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSource2PlayStatsPackedRecordList message.
         * @function verify
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSource2PlayStatsPackedRecordList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.record_name != null && message.hasOwnProperty("record_name"))
                if (!$util.isString(message.record_name))
                    return "record_name: string expected";
            if (message.field_defs != null && message.hasOwnProperty("field_defs")) {
                if (!Array.isArray(message.field_defs))
                    return "field_defs: array expected";
                for (var i = 0; i < message.field_defs.length; ++i) {
                    var error = $root.CMsgSource2PlayStatsPackedRecordList.FieldDef.verify(message.field_defs[i]);
                    if (error)
                        return "field_defs." + error;
                }
            }
            if (message.record_count != null && message.hasOwnProperty("record_count"))
                if (!$util.isInteger(message.record_count))
                    return "record_count: integer expected";
            if (message.uint64_vals != null && message.hasOwnProperty("uint64_vals")) {
                if (!Array.isArray(message.uint64_vals))
                    return "uint64_vals: array expected";
                for (var i = 0; i < message.uint64_vals.length; ++i)
                    if (!$util.isInteger(message.uint64_vals[i]) && !(message.uint64_vals[i] && $util.isInteger(message.uint64_vals[i].low) && $util.isInteger(message.uint64_vals[i].high)))
                        return "uint64_vals: integer|Long[] expected";
            }
            if (message.uint32_vals != null && message.hasOwnProperty("uint32_vals")) {
                if (!Array.isArray(message.uint32_vals))
                    return "uint32_vals: array expected";
                for (var i = 0; i < message.uint32_vals.length; ++i)
                    if (!$util.isInteger(message.uint32_vals[i]))
                        return "uint32_vals: integer[] expected";
            }
            if (message.uint16_vals != null && message.hasOwnProperty("uint16_vals")) {
                if (!Array.isArray(message.uint16_vals))
                    return "uint16_vals: array expected";
                for (var i = 0; i < message.uint16_vals.length; ++i)
                    if (!$util.isInteger(message.uint16_vals[i]))
                        return "uint16_vals: integer[] expected";
            }
            if (message.uint8_vals != null && message.hasOwnProperty("uint8_vals")) {
                if (!Array.isArray(message.uint8_vals))
                    return "uint8_vals: array expected";
                for (var i = 0; i < message.uint8_vals.length; ++i)
                    if (!$util.isInteger(message.uint8_vals[i]))
                        return "uint8_vals: integer[] expected";
            }
            if (message.int64_vals != null && message.hasOwnProperty("int64_vals")) {
                if (!Array.isArray(message.int64_vals))
                    return "int64_vals: array expected";
                for (var i = 0; i < message.int64_vals.length; ++i)
                    if (!$util.isInteger(message.int64_vals[i]) && !(message.int64_vals[i] && $util.isInteger(message.int64_vals[i].low) && $util.isInteger(message.int64_vals[i].high)))
                        return "int64_vals: integer|Long[] expected";
            }
            if (message.int32_vals != null && message.hasOwnProperty("int32_vals")) {
                if (!Array.isArray(message.int32_vals))
                    return "int32_vals: array expected";
                for (var i = 0; i < message.int32_vals.length; ++i)
                    if (!$util.isInteger(message.int32_vals[i]))
                        return "int32_vals: integer[] expected";
            }
            if (message.int16_vals != null && message.hasOwnProperty("int16_vals")) {
                if (!Array.isArray(message.int16_vals))
                    return "int16_vals: array expected";
                for (var i = 0; i < message.int16_vals.length; ++i)
                    if (!$util.isInteger(message.int16_vals[i]))
                        return "int16_vals: integer[] expected";
            }
            if (message.int8_vals != null && message.hasOwnProperty("int8_vals")) {
                if (!Array.isArray(message.int8_vals))
                    return "int8_vals: array expected";
                for (var i = 0; i < message.int8_vals.length; ++i)
                    if (!$util.isInteger(message.int8_vals[i]))
                        return "int8_vals: integer[] expected";
            }
            if (message.float64_vals != null && message.hasOwnProperty("float64_vals")) {
                if (!Array.isArray(message.float64_vals))
                    return "float64_vals: array expected";
                for (var i = 0; i < message.float64_vals.length; ++i)
                    if (typeof message.float64_vals[i] !== "number")
                        return "float64_vals: number[] expected";
            }
            if (message.float32_vals != null && message.hasOwnProperty("float32_vals")) {
                if (!Array.isArray(message.float32_vals))
                    return "float32_vals: array expected";
                for (var i = 0; i < message.float32_vals.length; ++i)
                    if (typeof message.float32_vals[i] !== "number")
                        return "float32_vals: number[] expected";
            }
            if (message.bool_vals != null && message.hasOwnProperty("bool_vals")) {
                if (!Array.isArray(message.bool_vals))
                    return "bool_vals: array expected";
                for (var i = 0; i < message.bool_vals.length; ++i)
                    if (typeof message.bool_vals[i] !== "boolean")
                        return "bool_vals: boolean[] expected";
            }
            if (message.string_vals != null && message.hasOwnProperty("string_vals")) {
                if (!Array.isArray(message.string_vals))
                    return "string_vals: array expected";
                for (var i = 0; i < message.string_vals.length; ++i)
                    if (!$util.isString(message.string_vals[i]))
                        return "string_vals: string[] expected";
            }
            if (message.low_cardinality_string_vals != null && message.hasOwnProperty("low_cardinality_string_vals")) {
                if (!Array.isArray(message.low_cardinality_string_vals))
                    return "low_cardinality_string_vals: array expected";
                for (var i = 0; i < message.low_cardinality_string_vals.length; ++i)
                    if (!$util.isString(message.low_cardinality_string_vals[i]))
                        return "low_cardinality_string_vals: string[] expected";
            }
            if (message.utcdatetime_vals != null && message.hasOwnProperty("utcdatetime_vals")) {
                if (!Array.isArray(message.utcdatetime_vals))
                    return "utcdatetime_vals: array expected";
                for (var i = 0; i < message.utcdatetime_vals.length; ++i)
                    if (!$util.isInteger(message.utcdatetime_vals[i]))
                        return "utcdatetime_vals: integer[] expected";
            }
            if (message.steamidtrustbucket_vals != null && message.hasOwnProperty("steamidtrustbucket_vals")) {
                if (!Array.isArray(message.steamidtrustbucket_vals))
                    return "steamidtrustbucket_vals: array expected";
                for (var i = 0; i < message.steamidtrustbucket_vals.length; ++i)
                    if (!$util.isInteger(message.steamidtrustbucket_vals[i]) && !(message.steamidtrustbucket_vals[i] && $util.isInteger(message.steamidtrustbucket_vals[i].low) && $util.isInteger(message.steamidtrustbucket_vals[i].high)))
                        return "steamidtrustbucket_vals: integer|Long[] expected";
            }
            if (message.trustbucket_vals != null && message.hasOwnProperty("trustbucket_vals")) {
                if (!Array.isArray(message.trustbucket_vals))
                    return "trustbucket_vals: array expected";
                for (var i = 0; i < message.trustbucket_vals.length; ++i) {
                    var error = $root.CMsgSource2PlayStatsPackedRecordList.SteamIDList.verify(message.trustbucket_vals[i]);
                    if (error)
                        return "trustbucket_vals." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgSource2PlayStatsPackedRecordList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSource2PlayStatsPackedRecordList} CMsgSource2PlayStatsPackedRecordList
         */
        CMsgSource2PlayStatsPackedRecordList.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSource2PlayStatsPackedRecordList)
                return object;
            var message = new $root.CMsgSource2PlayStatsPackedRecordList();
            if (object.record_name != null)
                message.record_name = String(object.record_name);
            if (object.field_defs) {
                if (!Array.isArray(object.field_defs))
                    throw TypeError(".CMsgSource2PlayStatsPackedRecordList.field_defs: array expected");
                message.field_defs = [];
                for (var i = 0; i < object.field_defs.length; ++i) {
                    if (typeof object.field_defs[i] !== "object")
                        throw TypeError(".CMsgSource2PlayStatsPackedRecordList.field_defs: object expected");
                    message.field_defs[i] = $root.CMsgSource2PlayStatsPackedRecordList.FieldDef.fromObject(object.field_defs[i]);
                }
            }
            if (object.record_count != null)
                message.record_count = object.record_count >>> 0;
            if (object.uint64_vals) {
                if (!Array.isArray(object.uint64_vals))
                    throw TypeError(".CMsgSource2PlayStatsPackedRecordList.uint64_vals: array expected");
                message.uint64_vals = [];
                for (var i = 0; i < object.uint64_vals.length; ++i)
                    if ($util.Long)
                        (message.uint64_vals[i] = $util.Long.fromValue(object.uint64_vals[i])).unsigned = true;
                    else if (typeof object.uint64_vals[i] === "string")
                        message.uint64_vals[i] = parseInt(object.uint64_vals[i], 10);
                    else if (typeof object.uint64_vals[i] === "number")
                        message.uint64_vals[i] = object.uint64_vals[i];
                    else if (typeof object.uint64_vals[i] === "object")
                        message.uint64_vals[i] = new $util.LongBits(object.uint64_vals[i].low >>> 0, object.uint64_vals[i].high >>> 0).toNumber(true);
            }
            if (object.uint32_vals) {
                if (!Array.isArray(object.uint32_vals))
                    throw TypeError(".CMsgSource2PlayStatsPackedRecordList.uint32_vals: array expected");
                message.uint32_vals = [];
                for (var i = 0; i < object.uint32_vals.length; ++i)
                    message.uint32_vals[i] = object.uint32_vals[i] >>> 0;
            }
            if (object.uint16_vals) {
                if (!Array.isArray(object.uint16_vals))
                    throw TypeError(".CMsgSource2PlayStatsPackedRecordList.uint16_vals: array expected");
                message.uint16_vals = [];
                for (var i = 0; i < object.uint16_vals.length; ++i)
                    message.uint16_vals[i] = object.uint16_vals[i] >>> 0;
            }
            if (object.uint8_vals) {
                if (!Array.isArray(object.uint8_vals))
                    throw TypeError(".CMsgSource2PlayStatsPackedRecordList.uint8_vals: array expected");
                message.uint8_vals = [];
                for (var i = 0; i < object.uint8_vals.length; ++i)
                    message.uint8_vals[i] = object.uint8_vals[i] >>> 0;
            }
            if (object.int64_vals) {
                if (!Array.isArray(object.int64_vals))
                    throw TypeError(".CMsgSource2PlayStatsPackedRecordList.int64_vals: array expected");
                message.int64_vals = [];
                for (var i = 0; i < object.int64_vals.length; ++i)
                    if ($util.Long)
                        (message.int64_vals[i] = $util.Long.fromValue(object.int64_vals[i])).unsigned = false;
                    else if (typeof object.int64_vals[i] === "string")
                        message.int64_vals[i] = parseInt(object.int64_vals[i], 10);
                    else if (typeof object.int64_vals[i] === "number")
                        message.int64_vals[i] = object.int64_vals[i];
                    else if (typeof object.int64_vals[i] === "object")
                        message.int64_vals[i] = new $util.LongBits(object.int64_vals[i].low >>> 0, object.int64_vals[i].high >>> 0).toNumber();
            }
            if (object.int32_vals) {
                if (!Array.isArray(object.int32_vals))
                    throw TypeError(".CMsgSource2PlayStatsPackedRecordList.int32_vals: array expected");
                message.int32_vals = [];
                for (var i = 0; i < object.int32_vals.length; ++i)
                    message.int32_vals[i] = object.int32_vals[i] | 0;
            }
            if (object.int16_vals) {
                if (!Array.isArray(object.int16_vals))
                    throw TypeError(".CMsgSource2PlayStatsPackedRecordList.int16_vals: array expected");
                message.int16_vals = [];
                for (var i = 0; i < object.int16_vals.length; ++i)
                    message.int16_vals[i] = object.int16_vals[i] | 0;
            }
            if (object.int8_vals) {
                if (!Array.isArray(object.int8_vals))
                    throw TypeError(".CMsgSource2PlayStatsPackedRecordList.int8_vals: array expected");
                message.int8_vals = [];
                for (var i = 0; i < object.int8_vals.length; ++i)
                    message.int8_vals[i] = object.int8_vals[i] | 0;
            }
            if (object.float64_vals) {
                if (!Array.isArray(object.float64_vals))
                    throw TypeError(".CMsgSource2PlayStatsPackedRecordList.float64_vals: array expected");
                message.float64_vals = [];
                for (var i = 0; i < object.float64_vals.length; ++i)
                    message.float64_vals[i] = Number(object.float64_vals[i]);
            }
            if (object.float32_vals) {
                if (!Array.isArray(object.float32_vals))
                    throw TypeError(".CMsgSource2PlayStatsPackedRecordList.float32_vals: array expected");
                message.float32_vals = [];
                for (var i = 0; i < object.float32_vals.length; ++i)
                    message.float32_vals[i] = Number(object.float32_vals[i]);
            }
            if (object.bool_vals) {
                if (!Array.isArray(object.bool_vals))
                    throw TypeError(".CMsgSource2PlayStatsPackedRecordList.bool_vals: array expected");
                message.bool_vals = [];
                for (var i = 0; i < object.bool_vals.length; ++i)
                    message.bool_vals[i] = Boolean(object.bool_vals[i]);
            }
            if (object.string_vals) {
                if (!Array.isArray(object.string_vals))
                    throw TypeError(".CMsgSource2PlayStatsPackedRecordList.string_vals: array expected");
                message.string_vals = [];
                for (var i = 0; i < object.string_vals.length; ++i)
                    message.string_vals[i] = String(object.string_vals[i]);
            }
            if (object.low_cardinality_string_vals) {
                if (!Array.isArray(object.low_cardinality_string_vals))
                    throw TypeError(".CMsgSource2PlayStatsPackedRecordList.low_cardinality_string_vals: array expected");
                message.low_cardinality_string_vals = [];
                for (var i = 0; i < object.low_cardinality_string_vals.length; ++i)
                    message.low_cardinality_string_vals[i] = String(object.low_cardinality_string_vals[i]);
            }
            if (object.utcdatetime_vals) {
                if (!Array.isArray(object.utcdatetime_vals))
                    throw TypeError(".CMsgSource2PlayStatsPackedRecordList.utcdatetime_vals: array expected");
                message.utcdatetime_vals = [];
                for (var i = 0; i < object.utcdatetime_vals.length; ++i)
                    message.utcdatetime_vals[i] = object.utcdatetime_vals[i] >>> 0;
            }
            if (object.steamidtrustbucket_vals) {
                if (!Array.isArray(object.steamidtrustbucket_vals))
                    throw TypeError(".CMsgSource2PlayStatsPackedRecordList.steamidtrustbucket_vals: array expected");
                message.steamidtrustbucket_vals = [];
                for (var i = 0; i < object.steamidtrustbucket_vals.length; ++i)
                    if ($util.Long)
                        (message.steamidtrustbucket_vals[i] = $util.Long.fromValue(object.steamidtrustbucket_vals[i])).unsigned = false;
                    else if (typeof object.steamidtrustbucket_vals[i] === "string")
                        message.steamidtrustbucket_vals[i] = parseInt(object.steamidtrustbucket_vals[i], 10);
                    else if (typeof object.steamidtrustbucket_vals[i] === "number")
                        message.steamidtrustbucket_vals[i] = object.steamidtrustbucket_vals[i];
                    else if (typeof object.steamidtrustbucket_vals[i] === "object")
                        message.steamidtrustbucket_vals[i] = new $util.LongBits(object.steamidtrustbucket_vals[i].low >>> 0, object.steamidtrustbucket_vals[i].high >>> 0).toNumber();
            }
            if (object.trustbucket_vals) {
                if (!Array.isArray(object.trustbucket_vals))
                    throw TypeError(".CMsgSource2PlayStatsPackedRecordList.trustbucket_vals: array expected");
                message.trustbucket_vals = [];
                for (var i = 0; i < object.trustbucket_vals.length; ++i) {
                    if (typeof object.trustbucket_vals[i] !== "object")
                        throw TypeError(".CMsgSource2PlayStatsPackedRecordList.trustbucket_vals: object expected");
                    message.trustbucket_vals[i] = $root.CMsgSource2PlayStatsPackedRecordList.SteamIDList.fromObject(object.trustbucket_vals[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSource2PlayStatsPackedRecordList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @static
         * @param {CMsgSource2PlayStatsPackedRecordList} message CMsgSource2PlayStatsPackedRecordList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSource2PlayStatsPackedRecordList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.field_defs = [];
                object.uint64_vals = [];
                object.uint32_vals = [];
                object.uint16_vals = [];
                object.uint8_vals = [];
                object.int64_vals = [];
                object.int32_vals = [];
                object.int16_vals = [];
                object.int8_vals = [];
                object.float64_vals = [];
                object.float32_vals = [];
                object.bool_vals = [];
                object.string_vals = [];
                object.low_cardinality_string_vals = [];
                object.utcdatetime_vals = [];
                object.steamidtrustbucket_vals = [];
                object.trustbucket_vals = [];
            }
            if (options.defaults) {
                object.record_name = "";
                object.record_count = 0;
            }
            if (message.record_name != null && message.hasOwnProperty("record_name"))
                object.record_name = message.record_name;
            if (message.field_defs && message.field_defs.length) {
                object.field_defs = [];
                for (var j = 0; j < message.field_defs.length; ++j)
                    object.field_defs[j] = $root.CMsgSource2PlayStatsPackedRecordList.FieldDef.toObject(message.field_defs[j], options);
            }
            if (message.record_count != null && message.hasOwnProperty("record_count"))
                object.record_count = message.record_count;
            if (message.uint64_vals && message.uint64_vals.length) {
                object.uint64_vals = [];
                for (var j = 0; j < message.uint64_vals.length; ++j)
                    if (typeof message.uint64_vals[j] === "number")
                        object.uint64_vals[j] = options.longs === String ? String(message.uint64_vals[j]) : message.uint64_vals[j];
                    else
                        object.uint64_vals[j] = options.longs === String ? $util.Long.prototype.toString.call(message.uint64_vals[j]) : options.longs === Number ? new $util.LongBits(message.uint64_vals[j].low >>> 0, message.uint64_vals[j].high >>> 0).toNumber(true) : message.uint64_vals[j];
            }
            if (message.uint32_vals && message.uint32_vals.length) {
                object.uint32_vals = [];
                for (var j = 0; j < message.uint32_vals.length; ++j)
                    object.uint32_vals[j] = message.uint32_vals[j];
            }
            if (message.uint16_vals && message.uint16_vals.length) {
                object.uint16_vals = [];
                for (var j = 0; j < message.uint16_vals.length; ++j)
                    object.uint16_vals[j] = message.uint16_vals[j];
            }
            if (message.uint8_vals && message.uint8_vals.length) {
                object.uint8_vals = [];
                for (var j = 0; j < message.uint8_vals.length; ++j)
                    object.uint8_vals[j] = message.uint8_vals[j];
            }
            if (message.int64_vals && message.int64_vals.length) {
                object.int64_vals = [];
                for (var j = 0; j < message.int64_vals.length; ++j)
                    if (typeof message.int64_vals[j] === "number")
                        object.int64_vals[j] = options.longs === String ? String(message.int64_vals[j]) : message.int64_vals[j];
                    else
                        object.int64_vals[j] = options.longs === String ? $util.Long.prototype.toString.call(message.int64_vals[j]) : options.longs === Number ? new $util.LongBits(message.int64_vals[j].low >>> 0, message.int64_vals[j].high >>> 0).toNumber() : message.int64_vals[j];
            }
            if (message.int32_vals && message.int32_vals.length) {
                object.int32_vals = [];
                for (var j = 0; j < message.int32_vals.length; ++j)
                    object.int32_vals[j] = message.int32_vals[j];
            }
            if (message.int16_vals && message.int16_vals.length) {
                object.int16_vals = [];
                for (var j = 0; j < message.int16_vals.length; ++j)
                    object.int16_vals[j] = message.int16_vals[j];
            }
            if (message.int8_vals && message.int8_vals.length) {
                object.int8_vals = [];
                for (var j = 0; j < message.int8_vals.length; ++j)
                    object.int8_vals[j] = message.int8_vals[j];
            }
            if (message.float64_vals && message.float64_vals.length) {
                object.float64_vals = [];
                for (var j = 0; j < message.float64_vals.length; ++j)
                    object.float64_vals[j] = options.json && !isFinite(message.float64_vals[j]) ? String(message.float64_vals[j]) : message.float64_vals[j];
            }
            if (message.float32_vals && message.float32_vals.length) {
                object.float32_vals = [];
                for (var j = 0; j < message.float32_vals.length; ++j)
                    object.float32_vals[j] = options.json && !isFinite(message.float32_vals[j]) ? String(message.float32_vals[j]) : message.float32_vals[j];
            }
            if (message.bool_vals && message.bool_vals.length) {
                object.bool_vals = [];
                for (var j = 0; j < message.bool_vals.length; ++j)
                    object.bool_vals[j] = message.bool_vals[j];
            }
            if (message.string_vals && message.string_vals.length) {
                object.string_vals = [];
                for (var j = 0; j < message.string_vals.length; ++j)
                    object.string_vals[j] = message.string_vals[j];
            }
            if (message.low_cardinality_string_vals && message.low_cardinality_string_vals.length) {
                object.low_cardinality_string_vals = [];
                for (var j = 0; j < message.low_cardinality_string_vals.length; ++j)
                    object.low_cardinality_string_vals[j] = message.low_cardinality_string_vals[j];
            }
            if (message.utcdatetime_vals && message.utcdatetime_vals.length) {
                object.utcdatetime_vals = [];
                for (var j = 0; j < message.utcdatetime_vals.length; ++j)
                    object.utcdatetime_vals[j] = message.utcdatetime_vals[j];
            }
            if (message.steamidtrustbucket_vals && message.steamidtrustbucket_vals.length) {
                object.steamidtrustbucket_vals = [];
                for (var j = 0; j < message.steamidtrustbucket_vals.length; ++j)
                    if (typeof message.steamidtrustbucket_vals[j] === "number")
                        object.steamidtrustbucket_vals[j] = options.longs === String ? String(message.steamidtrustbucket_vals[j]) : message.steamidtrustbucket_vals[j];
                    else
                        object.steamidtrustbucket_vals[j] = options.longs === String ? $util.Long.prototype.toString.call(message.steamidtrustbucket_vals[j]) : options.longs === Number ? new $util.LongBits(message.steamidtrustbucket_vals[j].low >>> 0, message.steamidtrustbucket_vals[j].high >>> 0).toNumber() : message.steamidtrustbucket_vals[j];
            }
            if (message.trustbucket_vals && message.trustbucket_vals.length) {
                object.trustbucket_vals = [];
                for (var j = 0; j < message.trustbucket_vals.length; ++j)
                    object.trustbucket_vals[j] = $root.CMsgSource2PlayStatsPackedRecordList.SteamIDList.toObject(message.trustbucket_vals[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgSource2PlayStatsPackedRecordList to JSON.
         * @function toJSON
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSource2PlayStatsPackedRecordList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CMsgSource2PlayStatsPackedRecordList
         * @function getTypeUrl
         * @memberof CMsgSource2PlayStatsPackedRecordList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CMsgSource2PlayStatsPackedRecordList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CMsgSource2PlayStatsPackedRecordList";
        };
    
        CMsgSource2PlayStatsPackedRecordList.FieldDef = (function() {
    
            /**
             * Properties of a FieldDef.
             * @memberof CMsgSource2PlayStatsPackedRecordList
             * @interface IFieldDef
             * @property {string|null} [field_name] FieldDef field_name
             * @property {ESource2PlayStatsFieldType|null} [field_type] FieldDef field_type
             */
    
            /**
             * Constructs a new FieldDef.
             * @memberof CMsgSource2PlayStatsPackedRecordList
             * @classdesc Represents a FieldDef.
             * @implements IFieldDef
             * @constructor
             * @param {CMsgSource2PlayStatsPackedRecordList.IFieldDef=} [properties] Properties to set
             */
            function FieldDef(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * FieldDef field_name.
             * @member {string} field_name
             * @memberof CMsgSource2PlayStatsPackedRecordList.FieldDef
             * @instance
             */
            FieldDef.prototype.field_name = "";
    
            /**
             * FieldDef field_type.
             * @member {ESource2PlayStatsFieldType} field_type
             * @memberof CMsgSource2PlayStatsPackedRecordList.FieldDef
             * @instance
             */
            FieldDef.prototype.field_type = 0;
    
            /**
             * Creates a new FieldDef instance using the specified properties.
             * @function create
             * @memberof CMsgSource2PlayStatsPackedRecordList.FieldDef
             * @static
             * @param {CMsgSource2PlayStatsPackedRecordList.IFieldDef=} [properties] Properties to set
             * @returns {CMsgSource2PlayStatsPackedRecordList.FieldDef} FieldDef instance
             */
            FieldDef.create = function create(properties) {
                return new FieldDef(properties);
            };
    
            /**
             * Encodes the specified FieldDef message. Does not implicitly {@link CMsgSource2PlayStatsPackedRecordList.FieldDef.verify|verify} messages.
             * @function encode
             * @memberof CMsgSource2PlayStatsPackedRecordList.FieldDef
             * @static
             * @param {CMsgSource2PlayStatsPackedRecordList.IFieldDef} message FieldDef message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDef.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.field_name != null && Object.hasOwnProperty.call(message, "field_name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.field_name);
                if (message.field_type != null && Object.hasOwnProperty.call(message, "field_type"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.field_type);
                return writer;
            };
    
            /**
             * Encodes the specified FieldDef message, length delimited. Does not implicitly {@link CMsgSource2PlayStatsPackedRecordList.FieldDef.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgSource2PlayStatsPackedRecordList.FieldDef
             * @static
             * @param {CMsgSource2PlayStatsPackedRecordList.IFieldDef} message FieldDef message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDef.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a FieldDef message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgSource2PlayStatsPackedRecordList.FieldDef
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgSource2PlayStatsPackedRecordList.FieldDef} FieldDef
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDef.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSource2PlayStatsPackedRecordList.FieldDef();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.field_name = reader.string();
                            break;
                        }
                    case 2: {
                            message.field_type = reader.int32();
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
             * Decodes a FieldDef message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgSource2PlayStatsPackedRecordList.FieldDef
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgSource2PlayStatsPackedRecordList.FieldDef} FieldDef
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDef.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a FieldDef message.
             * @function verify
             * @memberof CMsgSource2PlayStatsPackedRecordList.FieldDef
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FieldDef.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.field_name != null && message.hasOwnProperty("field_name"))
                    if (!$util.isString(message.field_name))
                        return "field_name: string expected";
                if (message.field_type != null && message.hasOwnProperty("field_type"))
                    switch (message.field_type) {
                    default:
                        return "field_type: enum value expected";
                    case 0:
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
                        break;
                    }
                return null;
            };
    
            /**
             * Creates a FieldDef message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgSource2PlayStatsPackedRecordList.FieldDef
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgSource2PlayStatsPackedRecordList.FieldDef} FieldDef
             */
            FieldDef.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgSource2PlayStatsPackedRecordList.FieldDef)
                    return object;
                var message = new $root.CMsgSource2PlayStatsPackedRecordList.FieldDef();
                if (object.field_name != null)
                    message.field_name = String(object.field_name);
                switch (object.field_type) {
                default:
                    if (typeof object.field_type === "number") {
                        message.field_type = object.field_type;
                        break;
                    }
                    break;
                case "Source2PlayStats_Invalid":
                case 0:
                    message.field_type = 0;
                    break;
                case "Source2PlayStats_UInt64":
                case 1:
                    message.field_type = 1;
                    break;
                case "Source2PlayStats_UInt32":
                case 2:
                    message.field_type = 2;
                    break;
                case "Source2PlayStats_UInt16":
                case 3:
                    message.field_type = 3;
                    break;
                case "Source2PlayStats_UInt8":
                case 4:
                    message.field_type = 4;
                    break;
                case "Source2PlayStats_Int64":
                case 5:
                    message.field_type = 5;
                    break;
                case "Source2PlayStats_Int32":
                case 6:
                    message.field_type = 6;
                    break;
                case "Source2PlayStats_Int16":
                case 7:
                    message.field_type = 7;
                    break;
                case "Source2PlayStats_Int8":
                case 8:
                    message.field_type = 8;
                    break;
                case "Source2PlayStats_Float64":
                case 9:
                    message.field_type = 9;
                    break;
                case "Source2PlayStats_Float32":
                case 10:
                    message.field_type = 10;
                    break;
                case "Source2PlayStats_Bool":
                case 11:
                    message.field_type = 11;
                    break;
                case "Source2PlayStats_String":
                case 12:
                    message.field_type = 12;
                    break;
                case "Source2PlayStats_LowCardinalityString":
                case 13:
                    message.field_type = 13;
                    break;
                case "Source2PlayStats_UTCDateTime":
                case 14:
                    message.field_type = 14;
                    break;
                case "Source2PlayStats_SteamIDTrustBucket":
                case 15:
                    message.field_type = 15;
                    break;
                case "Source2PlayStats_SteamIDTrustBucketMin":
                case 16:
                    message.field_type = 16;
                    break;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a FieldDef message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgSource2PlayStatsPackedRecordList.FieldDef
             * @static
             * @param {CMsgSource2PlayStatsPackedRecordList.FieldDef} message FieldDef
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldDef.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.field_name = "";
                    object.field_type = options.enums === String ? "Source2PlayStats_Invalid" : 0;
                }
                if (message.field_name != null && message.hasOwnProperty("field_name"))
                    object.field_name = message.field_name;
                if (message.field_type != null && message.hasOwnProperty("field_type"))
                    object.field_type = options.enums === String ? $root.ESource2PlayStatsFieldType[message.field_type] === undefined ? message.field_type : $root.ESource2PlayStatsFieldType[message.field_type] : message.field_type;
                return object;
            };
    
            /**
             * Converts this FieldDef to JSON.
             * @function toJSON
             * @memberof CMsgSource2PlayStatsPackedRecordList.FieldDef
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FieldDef.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for FieldDef
             * @function getTypeUrl
             * @memberof CMsgSource2PlayStatsPackedRecordList.FieldDef
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FieldDef.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CMsgSource2PlayStatsPackedRecordList.FieldDef";
            };
    
            return FieldDef;
        })();
    
        CMsgSource2PlayStatsPackedRecordList.SteamIDList = (function() {
    
            /**
             * Properties of a SteamIDList.
             * @memberof CMsgSource2PlayStatsPackedRecordList
             * @interface ISteamIDList
             * @property {Array.<number|Long>|null} [steamid] SteamIDList steamid
             */
    
            /**
             * Constructs a new SteamIDList.
             * @memberof CMsgSource2PlayStatsPackedRecordList
             * @classdesc Represents a SteamIDList.
             * @implements ISteamIDList
             * @constructor
             * @param {CMsgSource2PlayStatsPackedRecordList.ISteamIDList=} [properties] Properties to set
             */
            function SteamIDList(properties) {
                this.steamid = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SteamIDList steamid.
             * @member {Array.<number|Long>} steamid
             * @memberof CMsgSource2PlayStatsPackedRecordList.SteamIDList
             * @instance
             */
            SteamIDList.prototype.steamid = $util.emptyArray;
    
            /**
             * Creates a new SteamIDList instance using the specified properties.
             * @function create
             * @memberof CMsgSource2PlayStatsPackedRecordList.SteamIDList
             * @static
             * @param {CMsgSource2PlayStatsPackedRecordList.ISteamIDList=} [properties] Properties to set
             * @returns {CMsgSource2PlayStatsPackedRecordList.SteamIDList} SteamIDList instance
             */
            SteamIDList.create = function create(properties) {
                return new SteamIDList(properties);
            };
    
            /**
             * Encodes the specified SteamIDList message. Does not implicitly {@link CMsgSource2PlayStatsPackedRecordList.SteamIDList.verify|verify} messages.
             * @function encode
             * @memberof CMsgSource2PlayStatsPackedRecordList.SteamIDList
             * @static
             * @param {CMsgSource2PlayStatsPackedRecordList.ISteamIDList} message SteamIDList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SteamIDList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.steamid != null && message.steamid.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.steamid.length; ++i)
                        writer.fixed64(message.steamid[i]);
                    writer.ldelim();
                }
                return writer;
            };
    
            /**
             * Encodes the specified SteamIDList message, length delimited. Does not implicitly {@link CMsgSource2PlayStatsPackedRecordList.SteamIDList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgSource2PlayStatsPackedRecordList.SteamIDList
             * @static
             * @param {CMsgSource2PlayStatsPackedRecordList.ISteamIDList} message SteamIDList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SteamIDList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SteamIDList message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgSource2PlayStatsPackedRecordList.SteamIDList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgSource2PlayStatsPackedRecordList.SteamIDList} SteamIDList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SteamIDList.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSource2PlayStatsPackedRecordList.SteamIDList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.steamid && message.steamid.length))
                                message.steamid = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.steamid.push(reader.fixed64());
                            } else
                                message.steamid.push(reader.fixed64());
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
             * Decodes a SteamIDList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgSource2PlayStatsPackedRecordList.SteamIDList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgSource2PlayStatsPackedRecordList.SteamIDList} SteamIDList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SteamIDList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SteamIDList message.
             * @function verify
             * @memberof CMsgSource2PlayStatsPackedRecordList.SteamIDList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SteamIDList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.steamid != null && message.hasOwnProperty("steamid")) {
                    if (!Array.isArray(message.steamid))
                        return "steamid: array expected";
                    for (var i = 0; i < message.steamid.length; ++i)
                        if (!$util.isInteger(message.steamid[i]) && !(message.steamid[i] && $util.isInteger(message.steamid[i].low) && $util.isInteger(message.steamid[i].high)))
                            return "steamid: integer|Long[] expected";
                }
                return null;
            };
    
            /**
             * Creates a SteamIDList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgSource2PlayStatsPackedRecordList.SteamIDList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgSource2PlayStatsPackedRecordList.SteamIDList} SteamIDList
             */
            SteamIDList.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgSource2PlayStatsPackedRecordList.SteamIDList)
                    return object;
                var message = new $root.CMsgSource2PlayStatsPackedRecordList.SteamIDList();
                if (object.steamid) {
                    if (!Array.isArray(object.steamid))
                        throw TypeError(".CMsgSource2PlayStatsPackedRecordList.SteamIDList.steamid: array expected");
                    message.steamid = [];
                    for (var i = 0; i < object.steamid.length; ++i)
                        if ($util.Long)
                            (message.steamid[i] = $util.Long.fromValue(object.steamid[i])).unsigned = false;
                        else if (typeof object.steamid[i] === "string")
                            message.steamid[i] = parseInt(object.steamid[i], 10);
                        else if (typeof object.steamid[i] === "number")
                            message.steamid[i] = object.steamid[i];
                        else if (typeof object.steamid[i] === "object")
                            message.steamid[i] = new $util.LongBits(object.steamid[i].low >>> 0, object.steamid[i].high >>> 0).toNumber();
                }
                return message;
            };
    
            /**
             * Creates a plain object from a SteamIDList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgSource2PlayStatsPackedRecordList.SteamIDList
             * @static
             * @param {CMsgSource2PlayStatsPackedRecordList.SteamIDList} message SteamIDList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SteamIDList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.steamid = [];
                if (message.steamid && message.steamid.length) {
                    object.steamid = [];
                    for (var j = 0; j < message.steamid.length; ++j)
                        if (typeof message.steamid[j] === "number")
                            object.steamid[j] = options.longs === String ? String(message.steamid[j]) : message.steamid[j];
                        else
                            object.steamid[j] = options.longs === String ? $util.Long.prototype.toString.call(message.steamid[j]) : options.longs === Number ? new $util.LongBits(message.steamid[j].low >>> 0, message.steamid[j].high >>> 0).toNumber() : message.steamid[j];
                }
                return object;
            };
    
            /**
             * Converts this SteamIDList to JSON.
             * @function toJSON
             * @memberof CMsgSource2PlayStatsPackedRecordList.SteamIDList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SteamIDList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for SteamIDList
             * @function getTypeUrl
             * @memberof CMsgSource2PlayStatsPackedRecordList.SteamIDList
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SteamIDList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CMsgSource2PlayStatsPackedRecordList.SteamIDList";
            };
    
            return SteamIDList;
        })();
    
        return CMsgSource2PlayStatsPackedRecordList;
    })();
    
    $root.CSource2Metrics_RecordPlayStats_Notification = (function() {
    
        /**
         * Properties of a CSource2Metrics_RecordPlayStats_Notification.
         * @exports ICSource2Metrics_RecordPlayStats_Notification
         * @interface ICSource2Metrics_RecordPlayStats_Notification
         * @property {Array.<ICMsgSource2PlayStatsPackedRecordList>|null} [record_types] CSource2Metrics_RecordPlayStats_Notification record_types
         * @property {number|null} [appid] CSource2Metrics_RecordPlayStats_Notification appid
         */
    
        /**
         * Constructs a new CSource2Metrics_RecordPlayStats_Notification.
         * @exports CSource2Metrics_RecordPlayStats_Notification
         * @classdesc Represents a CSource2Metrics_RecordPlayStats_Notification.
         * @implements ICSource2Metrics_RecordPlayStats_Notification
         * @constructor
         * @param {ICSource2Metrics_RecordPlayStats_Notification=} [properties] Properties to set
         */
        function CSource2Metrics_RecordPlayStats_Notification(properties) {
            this.record_types = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CSource2Metrics_RecordPlayStats_Notification record_types.
         * @member {Array.<ICMsgSource2PlayStatsPackedRecordList>} record_types
         * @memberof CSource2Metrics_RecordPlayStats_Notification
         * @instance
         */
        CSource2Metrics_RecordPlayStats_Notification.prototype.record_types = $util.emptyArray;
    
        /**
         * CSource2Metrics_RecordPlayStats_Notification appid.
         * @member {number} appid
         * @memberof CSource2Metrics_RecordPlayStats_Notification
         * @instance
         */
        CSource2Metrics_RecordPlayStats_Notification.prototype.appid = 0;
    
        /**
         * Creates a new CSource2Metrics_RecordPlayStats_Notification instance using the specified properties.
         * @function create
         * @memberof CSource2Metrics_RecordPlayStats_Notification
         * @static
         * @param {ICSource2Metrics_RecordPlayStats_Notification=} [properties] Properties to set
         * @returns {CSource2Metrics_RecordPlayStats_Notification} CSource2Metrics_RecordPlayStats_Notification instance
         */
        CSource2Metrics_RecordPlayStats_Notification.create = function create(properties) {
            return new CSource2Metrics_RecordPlayStats_Notification(properties);
        };
    
        /**
         * Encodes the specified CSource2Metrics_RecordPlayStats_Notification message. Does not implicitly {@link CSource2Metrics_RecordPlayStats_Notification.verify|verify} messages.
         * @function encode
         * @memberof CSource2Metrics_RecordPlayStats_Notification
         * @static
         * @param {ICSource2Metrics_RecordPlayStats_Notification} message CSource2Metrics_RecordPlayStats_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSource2Metrics_RecordPlayStats_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.record_types != null && message.record_types.length)
                for (var i = 0; i < message.record_types.length; ++i)
                    $root.CMsgSource2PlayStatsPackedRecordList.encode(message.record_types[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.appid);
            return writer;
        };
    
        /**
         * Encodes the specified CSource2Metrics_RecordPlayStats_Notification message, length delimited. Does not implicitly {@link CSource2Metrics_RecordPlayStats_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSource2Metrics_RecordPlayStats_Notification
         * @static
         * @param {ICSource2Metrics_RecordPlayStats_Notification} message CSource2Metrics_RecordPlayStats_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSource2Metrics_RecordPlayStats_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSource2Metrics_RecordPlayStats_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CSource2Metrics_RecordPlayStats_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSource2Metrics_RecordPlayStats_Notification} CSource2Metrics_RecordPlayStats_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSource2Metrics_RecordPlayStats_Notification.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSource2Metrics_RecordPlayStats_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.record_types && message.record_types.length))
                            message.record_types = [];
                        message.record_types.push($root.CMsgSource2PlayStatsPackedRecordList.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.appid = reader.uint32();
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
         * Decodes a CSource2Metrics_RecordPlayStats_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSource2Metrics_RecordPlayStats_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSource2Metrics_RecordPlayStats_Notification} CSource2Metrics_RecordPlayStats_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSource2Metrics_RecordPlayStats_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSource2Metrics_RecordPlayStats_Notification message.
         * @function verify
         * @memberof CSource2Metrics_RecordPlayStats_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSource2Metrics_RecordPlayStats_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.record_types != null && message.hasOwnProperty("record_types")) {
                if (!Array.isArray(message.record_types))
                    return "record_types: array expected";
                for (var i = 0; i < message.record_types.length; ++i) {
                    var error = $root.CMsgSource2PlayStatsPackedRecordList.verify(message.record_types[i]);
                    if (error)
                        return "record_types." + error;
                }
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            return null;
        };
    
        /**
         * Creates a CSource2Metrics_RecordPlayStats_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSource2Metrics_RecordPlayStats_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSource2Metrics_RecordPlayStats_Notification} CSource2Metrics_RecordPlayStats_Notification
         */
        CSource2Metrics_RecordPlayStats_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CSource2Metrics_RecordPlayStats_Notification)
                return object;
            var message = new $root.CSource2Metrics_RecordPlayStats_Notification();
            if (object.record_types) {
                if (!Array.isArray(object.record_types))
                    throw TypeError(".CSource2Metrics_RecordPlayStats_Notification.record_types: array expected");
                message.record_types = [];
                for (var i = 0; i < object.record_types.length; ++i) {
                    if (typeof object.record_types[i] !== "object")
                        throw TypeError(".CSource2Metrics_RecordPlayStats_Notification.record_types: object expected");
                    message.record_types[i] = $root.CMsgSource2PlayStatsPackedRecordList.fromObject(object.record_types[i]);
                }
            }
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CSource2Metrics_RecordPlayStats_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSource2Metrics_RecordPlayStats_Notification
         * @static
         * @param {CSource2Metrics_RecordPlayStats_Notification} message CSource2Metrics_RecordPlayStats_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSource2Metrics_RecordPlayStats_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.record_types = [];
            if (options.defaults)
                object.appid = 0;
            if (message.record_types && message.record_types.length) {
                object.record_types = [];
                for (var j = 0; j < message.record_types.length; ++j)
                    object.record_types[j] = $root.CMsgSource2PlayStatsPackedRecordList.toObject(message.record_types[j], options);
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            return object;
        };
    
        /**
         * Converts this CSource2Metrics_RecordPlayStats_Notification to JSON.
         * @function toJSON
         * @memberof CSource2Metrics_RecordPlayStats_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSource2Metrics_RecordPlayStats_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CSource2Metrics_RecordPlayStats_Notification
         * @function getTypeUrl
         * @memberof CSource2Metrics_RecordPlayStats_Notification
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CSource2Metrics_RecordPlayStats_Notification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CSource2Metrics_RecordPlayStats_Notification";
        };
    
        return CSource2Metrics_RecordPlayStats_Notification;
    })();
    
    $root.CSource2Metrics_FetchMapData_Request = (function() {
    
        /**
         * Properties of a CSource2Metrics_FetchMapData_Request.
         * @exports ICSource2Metrics_FetchMapData_Request
         * @interface ICSource2Metrics_FetchMapData_Request
         * @property {number|null} [appid] CSource2Metrics_FetchMapData_Request appid
         * @property {string|null} [map_name] CSource2Metrics_FetchMapData_Request map_name
         * @property {number|null} [game_type] CSource2Metrics_FetchMapData_Request game_type
         * @property {number|null} [game_mode] CSource2Metrics_FetchMapData_Request game_mode
         * @property {string|null} [param] CSource2Metrics_FetchMapData_Request param
         * @property {number|null} [time_span] CSource2Metrics_FetchMapData_Request time_span
         */
    
        /**
         * Constructs a new CSource2Metrics_FetchMapData_Request.
         * @exports CSource2Metrics_FetchMapData_Request
         * @classdesc Represents a CSource2Metrics_FetchMapData_Request.
         * @implements ICSource2Metrics_FetchMapData_Request
         * @constructor
         * @param {ICSource2Metrics_FetchMapData_Request=} [properties] Properties to set
         */
        function CSource2Metrics_FetchMapData_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CSource2Metrics_FetchMapData_Request appid.
         * @member {number} appid
         * @memberof CSource2Metrics_FetchMapData_Request
         * @instance
         */
        CSource2Metrics_FetchMapData_Request.prototype.appid = 0;
    
        /**
         * CSource2Metrics_FetchMapData_Request map_name.
         * @member {string} map_name
         * @memberof CSource2Metrics_FetchMapData_Request
         * @instance
         */
        CSource2Metrics_FetchMapData_Request.prototype.map_name = "";
    
        /**
         * CSource2Metrics_FetchMapData_Request game_type.
         * @member {number} game_type
         * @memberof CSource2Metrics_FetchMapData_Request
         * @instance
         */
        CSource2Metrics_FetchMapData_Request.prototype.game_type = 0;
    
        /**
         * CSource2Metrics_FetchMapData_Request game_mode.
         * @member {number} game_mode
         * @memberof CSource2Metrics_FetchMapData_Request
         * @instance
         */
        CSource2Metrics_FetchMapData_Request.prototype.game_mode = 0;
    
        /**
         * CSource2Metrics_FetchMapData_Request param.
         * @member {string} param
         * @memberof CSource2Metrics_FetchMapData_Request
         * @instance
         */
        CSource2Metrics_FetchMapData_Request.prototype.param = "";
    
        /**
         * CSource2Metrics_FetchMapData_Request time_span.
         * @member {number} time_span
         * @memberof CSource2Metrics_FetchMapData_Request
         * @instance
         */
        CSource2Metrics_FetchMapData_Request.prototype.time_span = 0;
    
        /**
         * Creates a new CSource2Metrics_FetchMapData_Request instance using the specified properties.
         * @function create
         * @memberof CSource2Metrics_FetchMapData_Request
         * @static
         * @param {ICSource2Metrics_FetchMapData_Request=} [properties] Properties to set
         * @returns {CSource2Metrics_FetchMapData_Request} CSource2Metrics_FetchMapData_Request instance
         */
        CSource2Metrics_FetchMapData_Request.create = function create(properties) {
            return new CSource2Metrics_FetchMapData_Request(properties);
        };
    
        /**
         * Encodes the specified CSource2Metrics_FetchMapData_Request message. Does not implicitly {@link CSource2Metrics_FetchMapData_Request.verify|verify} messages.
         * @function encode
         * @memberof CSource2Metrics_FetchMapData_Request
         * @static
         * @param {ICSource2Metrics_FetchMapData_Request} message CSource2Metrics_FetchMapData_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSource2Metrics_FetchMapData_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.map_name != null && Object.hasOwnProperty.call(message, "map_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.map_name);
            if (message.game_type != null && Object.hasOwnProperty.call(message, "game_type"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.game_type);
            if (message.game_mode != null && Object.hasOwnProperty.call(message, "game_mode"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.game_mode);
            if (message.param != null && Object.hasOwnProperty.call(message, "param"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.param);
            if (message.time_span != null && Object.hasOwnProperty.call(message, "time_span"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.time_span);
            return writer;
        };
    
        /**
         * Encodes the specified CSource2Metrics_FetchMapData_Request message, length delimited. Does not implicitly {@link CSource2Metrics_FetchMapData_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSource2Metrics_FetchMapData_Request
         * @static
         * @param {ICSource2Metrics_FetchMapData_Request} message CSource2Metrics_FetchMapData_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSource2Metrics_FetchMapData_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSource2Metrics_FetchMapData_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CSource2Metrics_FetchMapData_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSource2Metrics_FetchMapData_Request} CSource2Metrics_FetchMapData_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSource2Metrics_FetchMapData_Request.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSource2Metrics_FetchMapData_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.appid = reader.uint32();
                        break;
                    }
                case 2: {
                        message.map_name = reader.string();
                        break;
                    }
                case 3: {
                        message.game_type = reader.uint32();
                        break;
                    }
                case 4: {
                        message.game_mode = reader.uint32();
                        break;
                    }
                case 5: {
                        message.param = reader.string();
                        break;
                    }
                case 6: {
                        message.time_span = reader.uint32();
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
         * Decodes a CSource2Metrics_FetchMapData_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSource2Metrics_FetchMapData_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSource2Metrics_FetchMapData_Request} CSource2Metrics_FetchMapData_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSource2Metrics_FetchMapData_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSource2Metrics_FetchMapData_Request message.
         * @function verify
         * @memberof CSource2Metrics_FetchMapData_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSource2Metrics_FetchMapData_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.map_name != null && message.hasOwnProperty("map_name"))
                if (!$util.isString(message.map_name))
                    return "map_name: string expected";
            if (message.game_type != null && message.hasOwnProperty("game_type"))
                if (!$util.isInteger(message.game_type))
                    return "game_type: integer expected";
            if (message.game_mode != null && message.hasOwnProperty("game_mode"))
                if (!$util.isInteger(message.game_mode))
                    return "game_mode: integer expected";
            if (message.param != null && message.hasOwnProperty("param"))
                if (!$util.isString(message.param))
                    return "param: string expected";
            if (message.time_span != null && message.hasOwnProperty("time_span"))
                if (!$util.isInteger(message.time_span))
                    return "time_span: integer expected";
            return null;
        };
    
        /**
         * Creates a CSource2Metrics_FetchMapData_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSource2Metrics_FetchMapData_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSource2Metrics_FetchMapData_Request} CSource2Metrics_FetchMapData_Request
         */
        CSource2Metrics_FetchMapData_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CSource2Metrics_FetchMapData_Request)
                return object;
            var message = new $root.CSource2Metrics_FetchMapData_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.map_name != null)
                message.map_name = String(object.map_name);
            if (object.game_type != null)
                message.game_type = object.game_type >>> 0;
            if (object.game_mode != null)
                message.game_mode = object.game_mode >>> 0;
            if (object.param != null)
                message.param = String(object.param);
            if (object.time_span != null)
                message.time_span = object.time_span >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CSource2Metrics_FetchMapData_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSource2Metrics_FetchMapData_Request
         * @static
         * @param {CSource2Metrics_FetchMapData_Request} message CSource2Metrics_FetchMapData_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSource2Metrics_FetchMapData_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                object.map_name = "";
                object.game_type = 0;
                object.game_mode = 0;
                object.param = "";
                object.time_span = 0;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.map_name != null && message.hasOwnProperty("map_name"))
                object.map_name = message.map_name;
            if (message.game_type != null && message.hasOwnProperty("game_type"))
                object.game_type = message.game_type;
            if (message.game_mode != null && message.hasOwnProperty("game_mode"))
                object.game_mode = message.game_mode;
            if (message.param != null && message.hasOwnProperty("param"))
                object.param = message.param;
            if (message.time_span != null && message.hasOwnProperty("time_span"))
                object.time_span = message.time_span;
            return object;
        };
    
        /**
         * Converts this CSource2Metrics_FetchMapData_Request to JSON.
         * @function toJSON
         * @memberof CSource2Metrics_FetchMapData_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSource2Metrics_FetchMapData_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CSource2Metrics_FetchMapData_Request
         * @function getTypeUrl
         * @memberof CSource2Metrics_FetchMapData_Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CSource2Metrics_FetchMapData_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CSource2Metrics_FetchMapData_Request";
        };
    
        return CSource2Metrics_FetchMapData_Request;
    })();
    
    $root.CSource2Metrics_FetchMapData_Response = (function() {
    
        /**
         * Properties of a CSource2Metrics_FetchMapData_Response.
         * @exports ICSource2Metrics_FetchMapData_Response
         * @interface ICSource2Metrics_FetchMapData_Response
         * @property {Array.<CSource2Metrics_FetchMapData_Response.IMapData>|null} [results] CSource2Metrics_FetchMapData_Response results
         */
    
        /**
         * Constructs a new CSource2Metrics_FetchMapData_Response.
         * @exports CSource2Metrics_FetchMapData_Response
         * @classdesc Represents a CSource2Metrics_FetchMapData_Response.
         * @implements ICSource2Metrics_FetchMapData_Response
         * @constructor
         * @param {ICSource2Metrics_FetchMapData_Response=} [properties] Properties to set
         */
        function CSource2Metrics_FetchMapData_Response(properties) {
            this.results = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CSource2Metrics_FetchMapData_Response results.
         * @member {Array.<CSource2Metrics_FetchMapData_Response.IMapData>} results
         * @memberof CSource2Metrics_FetchMapData_Response
         * @instance
         */
        CSource2Metrics_FetchMapData_Response.prototype.results = $util.emptyArray;
    
        /**
         * Creates a new CSource2Metrics_FetchMapData_Response instance using the specified properties.
         * @function create
         * @memberof CSource2Metrics_FetchMapData_Response
         * @static
         * @param {ICSource2Metrics_FetchMapData_Response=} [properties] Properties to set
         * @returns {CSource2Metrics_FetchMapData_Response} CSource2Metrics_FetchMapData_Response instance
         */
        CSource2Metrics_FetchMapData_Response.create = function create(properties) {
            return new CSource2Metrics_FetchMapData_Response(properties);
        };
    
        /**
         * Encodes the specified CSource2Metrics_FetchMapData_Response message. Does not implicitly {@link CSource2Metrics_FetchMapData_Response.verify|verify} messages.
         * @function encode
         * @memberof CSource2Metrics_FetchMapData_Response
         * @static
         * @param {ICSource2Metrics_FetchMapData_Response} message CSource2Metrics_FetchMapData_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSource2Metrics_FetchMapData_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.results != null && message.results.length)
                for (var i = 0; i < message.results.length; ++i)
                    $root.CSource2Metrics_FetchMapData_Response.MapData.encode(message.results[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CSource2Metrics_FetchMapData_Response message, length delimited. Does not implicitly {@link CSource2Metrics_FetchMapData_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSource2Metrics_FetchMapData_Response
         * @static
         * @param {ICSource2Metrics_FetchMapData_Response} message CSource2Metrics_FetchMapData_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSource2Metrics_FetchMapData_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSource2Metrics_FetchMapData_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CSource2Metrics_FetchMapData_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSource2Metrics_FetchMapData_Response} CSource2Metrics_FetchMapData_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSource2Metrics_FetchMapData_Response.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSource2Metrics_FetchMapData_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.results && message.results.length))
                            message.results = [];
                        message.results.push($root.CSource2Metrics_FetchMapData_Response.MapData.decode(reader, reader.uint32()));
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
         * Decodes a CSource2Metrics_FetchMapData_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSource2Metrics_FetchMapData_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSource2Metrics_FetchMapData_Response} CSource2Metrics_FetchMapData_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSource2Metrics_FetchMapData_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSource2Metrics_FetchMapData_Response message.
         * @function verify
         * @memberof CSource2Metrics_FetchMapData_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSource2Metrics_FetchMapData_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.results != null && message.hasOwnProperty("results")) {
                if (!Array.isArray(message.results))
                    return "results: array expected";
                for (var i = 0; i < message.results.length; ++i) {
                    var error = $root.CSource2Metrics_FetchMapData_Response.MapData.verify(message.results[i]);
                    if (error)
                        return "results." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CSource2Metrics_FetchMapData_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSource2Metrics_FetchMapData_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSource2Metrics_FetchMapData_Response} CSource2Metrics_FetchMapData_Response
         */
        CSource2Metrics_FetchMapData_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CSource2Metrics_FetchMapData_Response)
                return object;
            var message = new $root.CSource2Metrics_FetchMapData_Response();
            if (object.results) {
                if (!Array.isArray(object.results))
                    throw TypeError(".CSource2Metrics_FetchMapData_Response.results: array expected");
                message.results = [];
                for (var i = 0; i < object.results.length; ++i) {
                    if (typeof object.results[i] !== "object")
                        throw TypeError(".CSource2Metrics_FetchMapData_Response.results: object expected");
                    message.results[i] = $root.CSource2Metrics_FetchMapData_Response.MapData.fromObject(object.results[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CSource2Metrics_FetchMapData_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSource2Metrics_FetchMapData_Response
         * @static
         * @param {CSource2Metrics_FetchMapData_Response} message CSource2Metrics_FetchMapData_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSource2Metrics_FetchMapData_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.results = [];
            if (message.results && message.results.length) {
                object.results = [];
                for (var j = 0; j < message.results.length; ++j)
                    object.results[j] = $root.CSource2Metrics_FetchMapData_Response.MapData.toObject(message.results[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CSource2Metrics_FetchMapData_Response to JSON.
         * @function toJSON
         * @memberof CSource2Metrics_FetchMapData_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSource2Metrics_FetchMapData_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CSource2Metrics_FetchMapData_Response
         * @function getTypeUrl
         * @memberof CSource2Metrics_FetchMapData_Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CSource2Metrics_FetchMapData_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CSource2Metrics_FetchMapData_Response";
        };
    
        CSource2Metrics_FetchMapData_Response.MapData = (function() {
    
            /**
             * Properties of a MapData.
             * @memberof CSource2Metrics_FetchMapData_Response
             * @interface IMapData
             * @property {string|null} [name] MapData name
             * @property {string|null} [type] MapData type
             * @property {string|null} [data] MapData data
             */
    
            /**
             * Constructs a new MapData.
             * @memberof CSource2Metrics_FetchMapData_Response
             * @classdesc Represents a MapData.
             * @implements IMapData
             * @constructor
             * @param {CSource2Metrics_FetchMapData_Response.IMapData=} [properties] Properties to set
             */
            function MapData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MapData name.
             * @member {string} name
             * @memberof CSource2Metrics_FetchMapData_Response.MapData
             * @instance
             */
            MapData.prototype.name = "";
    
            /**
             * MapData type.
             * @member {string} type
             * @memberof CSource2Metrics_FetchMapData_Response.MapData
             * @instance
             */
            MapData.prototype.type = "";
    
            /**
             * MapData data.
             * @member {string} data
             * @memberof CSource2Metrics_FetchMapData_Response.MapData
             * @instance
             */
            MapData.prototype.data = "";
    
            /**
             * Creates a new MapData instance using the specified properties.
             * @function create
             * @memberof CSource2Metrics_FetchMapData_Response.MapData
             * @static
             * @param {CSource2Metrics_FetchMapData_Response.IMapData=} [properties] Properties to set
             * @returns {CSource2Metrics_FetchMapData_Response.MapData} MapData instance
             */
            MapData.create = function create(properties) {
                return new MapData(properties);
            };
    
            /**
             * Encodes the specified MapData message. Does not implicitly {@link CSource2Metrics_FetchMapData_Response.MapData.verify|verify} messages.
             * @function encode
             * @memberof CSource2Metrics_FetchMapData_Response.MapData
             * @static
             * @param {CSource2Metrics_FetchMapData_Response.IMapData} message MapData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
                if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.data);
                return writer;
            };
    
            /**
             * Encodes the specified MapData message, length delimited. Does not implicitly {@link CSource2Metrics_FetchMapData_Response.MapData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CSource2Metrics_FetchMapData_Response.MapData
             * @static
             * @param {CSource2Metrics_FetchMapData_Response.IMapData} message MapData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MapData message from the specified reader or buffer.
             * @function decode
             * @memberof CSource2Metrics_FetchMapData_Response.MapData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CSource2Metrics_FetchMapData_Response.MapData} MapData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapData.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSource2Metrics_FetchMapData_Response.MapData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.type = reader.string();
                            break;
                        }
                    case 3: {
                            message.data = reader.string();
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
             * Decodes a MapData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CSource2Metrics_FetchMapData_Response.MapData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CSource2Metrics_FetchMapData_Response.MapData} MapData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MapData message.
             * @function verify
             * @memberof CSource2Metrics_FetchMapData_Response.MapData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MapData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    if (!$util.isString(message.type))
                        return "type: string expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!$util.isString(message.data))
                        return "data: string expected";
                return null;
            };
    
            /**
             * Creates a MapData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CSource2Metrics_FetchMapData_Response.MapData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CSource2Metrics_FetchMapData_Response.MapData} MapData
             */
            MapData.fromObject = function fromObject(object) {
                if (object instanceof $root.CSource2Metrics_FetchMapData_Response.MapData)
                    return object;
                var message = new $root.CSource2Metrics_FetchMapData_Response.MapData();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.type != null)
                    message.type = String(object.type);
                if (object.data != null)
                    message.data = String(object.data);
                return message;
            };
    
            /**
             * Creates a plain object from a MapData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CSource2Metrics_FetchMapData_Response.MapData
             * @static
             * @param {CSource2Metrics_FetchMapData_Response.MapData} message MapData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MapData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.type = "";
                    object.data = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = message.type;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = message.data;
                return object;
            };
    
            /**
             * Converts this MapData to JSON.
             * @function toJSON
             * @memberof CSource2Metrics_FetchMapData_Response.MapData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MapData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for MapData
             * @function getTypeUrl
             * @memberof CSource2Metrics_FetchMapData_Response.MapData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MapData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CSource2Metrics_FetchMapData_Response.MapData";
            };
    
            return MapData;
        })();
    
        return CSource2Metrics_FetchMapData_Response;
    })();

    return $root;
});
