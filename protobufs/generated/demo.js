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
     * EDemoCommands enum.
     * @exports EDemoCommands
     * @enum {number}
     * @property {number} DEM_Error=-1 DEM_Error value
     * @property {number} DEM_Stop=0 DEM_Stop value
     * @property {number} DEM_FileHeader=1 DEM_FileHeader value
     * @property {number} DEM_FileInfo=2 DEM_FileInfo value
     * @property {number} DEM_SyncTick=3 DEM_SyncTick value
     * @property {number} DEM_SendTables=4 DEM_SendTables value
     * @property {number} DEM_ClassInfo=5 DEM_ClassInfo value
     * @property {number} DEM_StringTables=6 DEM_StringTables value
     * @property {number} DEM_Packet=7 DEM_Packet value
     * @property {number} DEM_SignonPacket=8 DEM_SignonPacket value
     * @property {number} DEM_ConsoleCmd=9 DEM_ConsoleCmd value
     * @property {number} DEM_CustomData=10 DEM_CustomData value
     * @property {number} DEM_CustomDataCallbacks=11 DEM_CustomDataCallbacks value
     * @property {number} DEM_UserCmd=12 DEM_UserCmd value
     * @property {number} DEM_FullPacket=13 DEM_FullPacket value
     * @property {number} DEM_SaveGame=14 DEM_SaveGame value
     * @property {number} DEM_SpawnGroups=15 DEM_SpawnGroups value
     * @property {number} DEM_AnimationData=16 DEM_AnimationData value
     * @property {number} DEM_AnimationHeader=17 DEM_AnimationHeader value
     * @property {number} DEM_Recovery=18 DEM_Recovery value
     * @property {number} DEM_Max=19 DEM_Max value
     * @property {number} DEM_IsCompressed=64 DEM_IsCompressed value
     */
    $root.EDemoCommands = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[-1] = "DEM_Error"] = -1;
        values[valuesById[0] = "DEM_Stop"] = 0;
        values[valuesById[1] = "DEM_FileHeader"] = 1;
        values[valuesById[2] = "DEM_FileInfo"] = 2;
        values[valuesById[3] = "DEM_SyncTick"] = 3;
        values[valuesById[4] = "DEM_SendTables"] = 4;
        values[valuesById[5] = "DEM_ClassInfo"] = 5;
        values[valuesById[6] = "DEM_StringTables"] = 6;
        values[valuesById[7] = "DEM_Packet"] = 7;
        values[valuesById[8] = "DEM_SignonPacket"] = 8;
        values[valuesById[9] = "DEM_ConsoleCmd"] = 9;
        values[valuesById[10] = "DEM_CustomData"] = 10;
        values[valuesById[11] = "DEM_CustomDataCallbacks"] = 11;
        values[valuesById[12] = "DEM_UserCmd"] = 12;
        values[valuesById[13] = "DEM_FullPacket"] = 13;
        values[valuesById[14] = "DEM_SaveGame"] = 14;
        values[valuesById[15] = "DEM_SpawnGroups"] = 15;
        values[valuesById[16] = "DEM_AnimationData"] = 16;
        values[valuesById[17] = "DEM_AnimationHeader"] = 17;
        values[valuesById[18] = "DEM_Recovery"] = 18;
        values[valuesById[19] = "DEM_Max"] = 19;
        values[valuesById[64] = "DEM_IsCompressed"] = 64;
        return values;
    })();
    
    $root.CDemoFileHeader = (function() {
    
        /**
         * Properties of a CDemoFileHeader.
         * @exports ICDemoFileHeader
         * @interface ICDemoFileHeader
         * @property {string} demo_file_stamp CDemoFileHeader demo_file_stamp
         * @property {number|null} [patch_version] CDemoFileHeader patch_version
         * @property {string|null} [server_name] CDemoFileHeader server_name
         * @property {string|null} [client_name] CDemoFileHeader client_name
         * @property {string|null} [map_name] CDemoFileHeader map_name
         * @property {string|null} [game_directory] CDemoFileHeader game_directory
         * @property {number|null} [fullpackets_version] CDemoFileHeader fullpackets_version
         * @property {boolean|null} [allow_clientside_entities] CDemoFileHeader allow_clientside_entities
         * @property {boolean|null} [allow_clientside_particles] CDemoFileHeader allow_clientside_particles
         * @property {string|null} [addons] CDemoFileHeader addons
         * @property {string|null} [demo_version_name] CDemoFileHeader demo_version_name
         * @property {string|null} [demo_version_guid] CDemoFileHeader demo_version_guid
         * @property {number|null} [build_num] CDemoFileHeader build_num
         * @property {string|null} [game] CDemoFileHeader game
         * @property {number|null} [server_start_tick] CDemoFileHeader server_start_tick
         */
    
        /**
         * Constructs a new CDemoFileHeader.
         * @exports CDemoFileHeader
         * @classdesc Represents a CDemoFileHeader.
         * @implements ICDemoFileHeader
         * @constructor
         * @param {ICDemoFileHeader=} [properties] Properties to set
         */
        function CDemoFileHeader(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoFileHeader demo_file_stamp.
         * @member {string} demo_file_stamp
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.demo_file_stamp = "";
    
        /**
         * CDemoFileHeader patch_version.
         * @member {number} patch_version
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.patch_version = 0;
    
        /**
         * CDemoFileHeader server_name.
         * @member {string} server_name
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.server_name = "";
    
        /**
         * CDemoFileHeader client_name.
         * @member {string} client_name
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.client_name = "";
    
        /**
         * CDemoFileHeader map_name.
         * @member {string} map_name
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.map_name = "";
    
        /**
         * CDemoFileHeader game_directory.
         * @member {string} game_directory
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.game_directory = "";
    
        /**
         * CDemoFileHeader fullpackets_version.
         * @member {number} fullpackets_version
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.fullpackets_version = 0;
    
        /**
         * CDemoFileHeader allow_clientside_entities.
         * @member {boolean} allow_clientside_entities
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.allow_clientside_entities = false;
    
        /**
         * CDemoFileHeader allow_clientside_particles.
         * @member {boolean} allow_clientside_particles
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.allow_clientside_particles = false;
    
        /**
         * CDemoFileHeader addons.
         * @member {string} addons
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.addons = "";
    
        /**
         * CDemoFileHeader demo_version_name.
         * @member {string} demo_version_name
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.demo_version_name = "";
    
        /**
         * CDemoFileHeader demo_version_guid.
         * @member {string} demo_version_guid
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.demo_version_guid = "";
    
        /**
         * CDemoFileHeader build_num.
         * @member {number} build_num
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.build_num = 0;
    
        /**
         * CDemoFileHeader game.
         * @member {string} game
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.game = "";
    
        /**
         * CDemoFileHeader server_start_tick.
         * @member {number} server_start_tick
         * @memberof CDemoFileHeader
         * @instance
         */
        CDemoFileHeader.prototype.server_start_tick = 0;
    
        /**
         * Creates a new CDemoFileHeader instance using the specified properties.
         * @function create
         * @memberof CDemoFileHeader
         * @static
         * @param {ICDemoFileHeader=} [properties] Properties to set
         * @returns {CDemoFileHeader} CDemoFileHeader instance
         */
        CDemoFileHeader.create = function create(properties) {
            return new CDemoFileHeader(properties);
        };
    
        /**
         * Encodes the specified CDemoFileHeader message. Does not implicitly {@link CDemoFileHeader.verify|verify} messages.
         * @function encode
         * @memberof CDemoFileHeader
         * @static
         * @param {ICDemoFileHeader} message CDemoFileHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoFileHeader.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.demo_file_stamp);
            if (message.patch_version != null && Object.hasOwnProperty.call(message, "patch_version"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.patch_version);
            if (message.server_name != null && Object.hasOwnProperty.call(message, "server_name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.server_name);
            if (message.client_name != null && Object.hasOwnProperty.call(message, "client_name"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.client_name);
            if (message.map_name != null && Object.hasOwnProperty.call(message, "map_name"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.map_name);
            if (message.game_directory != null && Object.hasOwnProperty.call(message, "game_directory"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.game_directory);
            if (message.fullpackets_version != null && Object.hasOwnProperty.call(message, "fullpackets_version"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.fullpackets_version);
            if (message.allow_clientside_entities != null && Object.hasOwnProperty.call(message, "allow_clientside_entities"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.allow_clientside_entities);
            if (message.allow_clientside_particles != null && Object.hasOwnProperty.call(message, "allow_clientside_particles"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.allow_clientside_particles);
            if (message.addons != null && Object.hasOwnProperty.call(message, "addons"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.addons);
            if (message.demo_version_name != null && Object.hasOwnProperty.call(message, "demo_version_name"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.demo_version_name);
            if (message.demo_version_guid != null && Object.hasOwnProperty.call(message, "demo_version_guid"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.demo_version_guid);
            if (message.build_num != null && Object.hasOwnProperty.call(message, "build_num"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.build_num);
            if (message.game != null && Object.hasOwnProperty.call(message, "game"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.game);
            if (message.server_start_tick != null && Object.hasOwnProperty.call(message, "server_start_tick"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.server_start_tick);
            return writer;
        };
    
        /**
         * Encodes the specified CDemoFileHeader message, length delimited. Does not implicitly {@link CDemoFileHeader.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoFileHeader
         * @static
         * @param {ICDemoFileHeader} message CDemoFileHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoFileHeader.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoFileHeader message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoFileHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoFileHeader} CDemoFileHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoFileHeader.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoFileHeader();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.demo_file_stamp = reader.string();
                        break;
                    }
                case 2: {
                        message.patch_version = reader.int32();
                        break;
                    }
                case 3: {
                        message.server_name = reader.string();
                        break;
                    }
                case 4: {
                        message.client_name = reader.string();
                        break;
                    }
                case 5: {
                        message.map_name = reader.string();
                        break;
                    }
                case 6: {
                        message.game_directory = reader.string();
                        break;
                    }
                case 7: {
                        message.fullpackets_version = reader.int32();
                        break;
                    }
                case 8: {
                        message.allow_clientside_entities = reader.bool();
                        break;
                    }
                case 9: {
                        message.allow_clientside_particles = reader.bool();
                        break;
                    }
                case 10: {
                        message.addons = reader.string();
                        break;
                    }
                case 11: {
                        message.demo_version_name = reader.string();
                        break;
                    }
                case 12: {
                        message.demo_version_guid = reader.string();
                        break;
                    }
                case 13: {
                        message.build_num = reader.int32();
                        break;
                    }
                case 14: {
                        message.game = reader.string();
                        break;
                    }
                case 15: {
                        message.server_start_tick = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("demo_file_stamp"))
                throw $util.ProtocolError("missing required 'demo_file_stamp'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CDemoFileHeader message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoFileHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoFileHeader} CDemoFileHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoFileHeader.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoFileHeader message.
         * @function verify
         * @memberof CDemoFileHeader
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoFileHeader.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.demo_file_stamp))
                return "demo_file_stamp: string expected";
            if (message.patch_version != null && message.hasOwnProperty("patch_version"))
                if (!$util.isInteger(message.patch_version))
                    return "patch_version: integer expected";
            if (message.server_name != null && message.hasOwnProperty("server_name"))
                if (!$util.isString(message.server_name))
                    return "server_name: string expected";
            if (message.client_name != null && message.hasOwnProperty("client_name"))
                if (!$util.isString(message.client_name))
                    return "client_name: string expected";
            if (message.map_name != null && message.hasOwnProperty("map_name"))
                if (!$util.isString(message.map_name))
                    return "map_name: string expected";
            if (message.game_directory != null && message.hasOwnProperty("game_directory"))
                if (!$util.isString(message.game_directory))
                    return "game_directory: string expected";
            if (message.fullpackets_version != null && message.hasOwnProperty("fullpackets_version"))
                if (!$util.isInteger(message.fullpackets_version))
                    return "fullpackets_version: integer expected";
            if (message.allow_clientside_entities != null && message.hasOwnProperty("allow_clientside_entities"))
                if (typeof message.allow_clientside_entities !== "boolean")
                    return "allow_clientside_entities: boolean expected";
            if (message.allow_clientside_particles != null && message.hasOwnProperty("allow_clientside_particles"))
                if (typeof message.allow_clientside_particles !== "boolean")
                    return "allow_clientside_particles: boolean expected";
            if (message.addons != null && message.hasOwnProperty("addons"))
                if (!$util.isString(message.addons))
                    return "addons: string expected";
            if (message.demo_version_name != null && message.hasOwnProperty("demo_version_name"))
                if (!$util.isString(message.demo_version_name))
                    return "demo_version_name: string expected";
            if (message.demo_version_guid != null && message.hasOwnProperty("demo_version_guid"))
                if (!$util.isString(message.demo_version_guid))
                    return "demo_version_guid: string expected";
            if (message.build_num != null && message.hasOwnProperty("build_num"))
                if (!$util.isInteger(message.build_num))
                    return "build_num: integer expected";
            if (message.game != null && message.hasOwnProperty("game"))
                if (!$util.isString(message.game))
                    return "game: string expected";
            if (message.server_start_tick != null && message.hasOwnProperty("server_start_tick"))
                if (!$util.isInteger(message.server_start_tick))
                    return "server_start_tick: integer expected";
            return null;
        };
    
        /**
         * Creates a CDemoFileHeader message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoFileHeader
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoFileHeader} CDemoFileHeader
         */
        CDemoFileHeader.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoFileHeader)
                return object;
            var message = new $root.CDemoFileHeader();
            if (object.demo_file_stamp != null)
                message.demo_file_stamp = String(object.demo_file_stamp);
            if (object.patch_version != null)
                message.patch_version = object.patch_version | 0;
            if (object.server_name != null)
                message.server_name = String(object.server_name);
            if (object.client_name != null)
                message.client_name = String(object.client_name);
            if (object.map_name != null)
                message.map_name = String(object.map_name);
            if (object.game_directory != null)
                message.game_directory = String(object.game_directory);
            if (object.fullpackets_version != null)
                message.fullpackets_version = object.fullpackets_version | 0;
            if (object.allow_clientside_entities != null)
                message.allow_clientside_entities = Boolean(object.allow_clientside_entities);
            if (object.allow_clientside_particles != null)
                message.allow_clientside_particles = Boolean(object.allow_clientside_particles);
            if (object.addons != null)
                message.addons = String(object.addons);
            if (object.demo_version_name != null)
                message.demo_version_name = String(object.demo_version_name);
            if (object.demo_version_guid != null)
                message.demo_version_guid = String(object.demo_version_guid);
            if (object.build_num != null)
                message.build_num = object.build_num | 0;
            if (object.game != null)
                message.game = String(object.game);
            if (object.server_start_tick != null)
                message.server_start_tick = object.server_start_tick | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoFileHeader message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoFileHeader
         * @static
         * @param {CDemoFileHeader} message CDemoFileHeader
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoFileHeader.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.demo_file_stamp = "";
                object.patch_version = 0;
                object.server_name = "";
                object.client_name = "";
                object.map_name = "";
                object.game_directory = "";
                object.fullpackets_version = 0;
                object.allow_clientside_entities = false;
                object.allow_clientside_particles = false;
                object.addons = "";
                object.demo_version_name = "";
                object.demo_version_guid = "";
                object.build_num = 0;
                object.game = "";
                object.server_start_tick = 0;
            }
            if (message.demo_file_stamp != null && message.hasOwnProperty("demo_file_stamp"))
                object.demo_file_stamp = message.demo_file_stamp;
            if (message.patch_version != null && message.hasOwnProperty("patch_version"))
                object.patch_version = message.patch_version;
            if (message.server_name != null && message.hasOwnProperty("server_name"))
                object.server_name = message.server_name;
            if (message.client_name != null && message.hasOwnProperty("client_name"))
                object.client_name = message.client_name;
            if (message.map_name != null && message.hasOwnProperty("map_name"))
                object.map_name = message.map_name;
            if (message.game_directory != null && message.hasOwnProperty("game_directory"))
                object.game_directory = message.game_directory;
            if (message.fullpackets_version != null && message.hasOwnProperty("fullpackets_version"))
                object.fullpackets_version = message.fullpackets_version;
            if (message.allow_clientside_entities != null && message.hasOwnProperty("allow_clientside_entities"))
                object.allow_clientside_entities = message.allow_clientside_entities;
            if (message.allow_clientside_particles != null && message.hasOwnProperty("allow_clientside_particles"))
                object.allow_clientside_particles = message.allow_clientside_particles;
            if (message.addons != null && message.hasOwnProperty("addons"))
                object.addons = message.addons;
            if (message.demo_version_name != null && message.hasOwnProperty("demo_version_name"))
                object.demo_version_name = message.demo_version_name;
            if (message.demo_version_guid != null && message.hasOwnProperty("demo_version_guid"))
                object.demo_version_guid = message.demo_version_guid;
            if (message.build_num != null && message.hasOwnProperty("build_num"))
                object.build_num = message.build_num;
            if (message.game != null && message.hasOwnProperty("game"))
                object.game = message.game;
            if (message.server_start_tick != null && message.hasOwnProperty("server_start_tick"))
                object.server_start_tick = message.server_start_tick;
            return object;
        };
    
        /**
         * Converts this CDemoFileHeader to JSON.
         * @function toJSON
         * @memberof CDemoFileHeader
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoFileHeader.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoFileHeader
         * @function getTypeUrl
         * @memberof CDemoFileHeader
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoFileHeader.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoFileHeader";
        };
    
        return CDemoFileHeader;
    })();
    
    $root.CGameInfo = (function() {
    
        /**
         * Properties of a CGameInfo.
         * @exports ICGameInfo
         * @interface ICGameInfo
         * @property {CGameInfo.ICDotaGameInfo|null} [dota] CGameInfo dota
         * @property {CGameInfo.ICCSGameInfo|null} [cs] CGameInfo cs
         */
    
        /**
         * Constructs a new CGameInfo.
         * @exports CGameInfo
         * @classdesc Represents a CGameInfo.
         * @implements ICGameInfo
         * @constructor
         * @param {ICGameInfo=} [properties] Properties to set
         */
        function CGameInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CGameInfo dota.
         * @member {CGameInfo.ICDotaGameInfo|null|undefined} dota
         * @memberof CGameInfo
         * @instance
         */
        CGameInfo.prototype.dota = null;
    
        /**
         * CGameInfo cs.
         * @member {CGameInfo.ICCSGameInfo|null|undefined} cs
         * @memberof CGameInfo
         * @instance
         */
        CGameInfo.prototype.cs = null;
    
        /**
         * Creates a new CGameInfo instance using the specified properties.
         * @function create
         * @memberof CGameInfo
         * @static
         * @param {ICGameInfo=} [properties] Properties to set
         * @returns {CGameInfo} CGameInfo instance
         */
        CGameInfo.create = function create(properties) {
            return new CGameInfo(properties);
        };
    
        /**
         * Encodes the specified CGameInfo message. Does not implicitly {@link CGameInfo.verify|verify} messages.
         * @function encode
         * @memberof CGameInfo
         * @static
         * @param {ICGameInfo} message CGameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dota != null && Object.hasOwnProperty.call(message, "dota"))
                $root.CGameInfo.CDotaGameInfo.encode(message.dota, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.cs != null && Object.hasOwnProperty.call(message, "cs"))
                $root.CGameInfo.CCSGameInfo.encode(message.cs, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CGameInfo message, length delimited. Does not implicitly {@link CGameInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CGameInfo
         * @static
         * @param {ICGameInfo} message CGameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CGameInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CGameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CGameInfo} CGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 4: {
                        message.dota = $root.CGameInfo.CDotaGameInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.cs = $root.CGameInfo.CCSGameInfo.decode(reader, reader.uint32());
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
         * Decodes a CGameInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CGameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CGameInfo} CGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CGameInfo message.
         * @function verify
         * @memberof CGameInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGameInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.dota != null && message.hasOwnProperty("dota")) {
                var error = $root.CGameInfo.CDotaGameInfo.verify(message.dota);
                if (error)
                    return "dota." + error;
            }
            if (message.cs != null && message.hasOwnProperty("cs")) {
                var error = $root.CGameInfo.CCSGameInfo.verify(message.cs);
                if (error)
                    return "cs." + error;
            }
            return null;
        };
    
        /**
         * Creates a CGameInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CGameInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CGameInfo} CGameInfo
         */
        CGameInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CGameInfo)
                return object;
            var message = new $root.CGameInfo();
            if (object.dota != null) {
                if (typeof object.dota !== "object")
                    throw TypeError(".CGameInfo.dota: object expected");
                message.dota = $root.CGameInfo.CDotaGameInfo.fromObject(object.dota);
            }
            if (object.cs != null) {
                if (typeof object.cs !== "object")
                    throw TypeError(".CGameInfo.cs: object expected");
                message.cs = $root.CGameInfo.CCSGameInfo.fromObject(object.cs);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CGameInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CGameInfo
         * @static
         * @param {CGameInfo} message CGameInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGameInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.dota = null;
                object.cs = null;
            }
            if (message.dota != null && message.hasOwnProperty("dota"))
                object.dota = $root.CGameInfo.CDotaGameInfo.toObject(message.dota, options);
            if (message.cs != null && message.hasOwnProperty("cs"))
                object.cs = $root.CGameInfo.CCSGameInfo.toObject(message.cs, options);
            return object;
        };
    
        /**
         * Converts this CGameInfo to JSON.
         * @function toJSON
         * @memberof CGameInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGameInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CGameInfo
         * @function getTypeUrl
         * @memberof CGameInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CGameInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CGameInfo";
        };
    
        CGameInfo.CDotaGameInfo = (function() {
    
            /**
             * Properties of a CDotaGameInfo.
             * @memberof CGameInfo
             * @interface ICDotaGameInfo
             * @property {number|Long|null} [match_id] CDotaGameInfo match_id
             * @property {number|null} [game_mode] CDotaGameInfo game_mode
             * @property {number|null} [game_winner] CDotaGameInfo game_winner
             * @property {Array.<CGameInfo.CDotaGameInfo.ICPlayerInfo>|null} [player_info] CDotaGameInfo player_info
             * @property {number|null} [leagueid] CDotaGameInfo leagueid
             * @property {Array.<CGameInfo.CDotaGameInfo.ICHeroSelectEvent>|null} [picks_bans] CDotaGameInfo picks_bans
             * @property {number|null} [radiant_team_id] CDotaGameInfo radiant_team_id
             * @property {number|null} [dire_team_id] CDotaGameInfo dire_team_id
             * @property {string|null} [radiant_team_tag] CDotaGameInfo radiant_team_tag
             * @property {string|null} [dire_team_tag] CDotaGameInfo dire_team_tag
             * @property {number|null} [end_time] CDotaGameInfo end_time
             */
    
            /**
             * Constructs a new CDotaGameInfo.
             * @memberof CGameInfo
             * @classdesc Represents a CDotaGameInfo.
             * @implements ICDotaGameInfo
             * @constructor
             * @param {CGameInfo.ICDotaGameInfo=} [properties] Properties to set
             */
            function CDotaGameInfo(properties) {
                this.player_info = [];
                this.picks_bans = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CDotaGameInfo match_id.
             * @member {number|Long} match_id
             * @memberof CGameInfo.CDotaGameInfo
             * @instance
             */
            CDotaGameInfo.prototype.match_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * CDotaGameInfo game_mode.
             * @member {number} game_mode
             * @memberof CGameInfo.CDotaGameInfo
             * @instance
             */
            CDotaGameInfo.prototype.game_mode = 0;
    
            /**
             * CDotaGameInfo game_winner.
             * @member {number} game_winner
             * @memberof CGameInfo.CDotaGameInfo
             * @instance
             */
            CDotaGameInfo.prototype.game_winner = 0;
    
            /**
             * CDotaGameInfo player_info.
             * @member {Array.<CGameInfo.CDotaGameInfo.ICPlayerInfo>} player_info
             * @memberof CGameInfo.CDotaGameInfo
             * @instance
             */
            CDotaGameInfo.prototype.player_info = $util.emptyArray;
    
            /**
             * CDotaGameInfo leagueid.
             * @member {number} leagueid
             * @memberof CGameInfo.CDotaGameInfo
             * @instance
             */
            CDotaGameInfo.prototype.leagueid = 0;
    
            /**
             * CDotaGameInfo picks_bans.
             * @member {Array.<CGameInfo.CDotaGameInfo.ICHeroSelectEvent>} picks_bans
             * @memberof CGameInfo.CDotaGameInfo
             * @instance
             */
            CDotaGameInfo.prototype.picks_bans = $util.emptyArray;
    
            /**
             * CDotaGameInfo radiant_team_id.
             * @member {number} radiant_team_id
             * @memberof CGameInfo.CDotaGameInfo
             * @instance
             */
            CDotaGameInfo.prototype.radiant_team_id = 0;
    
            /**
             * CDotaGameInfo dire_team_id.
             * @member {number} dire_team_id
             * @memberof CGameInfo.CDotaGameInfo
             * @instance
             */
            CDotaGameInfo.prototype.dire_team_id = 0;
    
            /**
             * CDotaGameInfo radiant_team_tag.
             * @member {string} radiant_team_tag
             * @memberof CGameInfo.CDotaGameInfo
             * @instance
             */
            CDotaGameInfo.prototype.radiant_team_tag = "";
    
            /**
             * CDotaGameInfo dire_team_tag.
             * @member {string} dire_team_tag
             * @memberof CGameInfo.CDotaGameInfo
             * @instance
             */
            CDotaGameInfo.prototype.dire_team_tag = "";
    
            /**
             * CDotaGameInfo end_time.
             * @member {number} end_time
             * @memberof CGameInfo.CDotaGameInfo
             * @instance
             */
            CDotaGameInfo.prototype.end_time = 0;
    
            /**
             * Creates a new CDotaGameInfo instance using the specified properties.
             * @function create
             * @memberof CGameInfo.CDotaGameInfo
             * @static
             * @param {CGameInfo.ICDotaGameInfo=} [properties] Properties to set
             * @returns {CGameInfo.CDotaGameInfo} CDotaGameInfo instance
             */
            CDotaGameInfo.create = function create(properties) {
                return new CDotaGameInfo(properties);
            };
    
            /**
             * Encodes the specified CDotaGameInfo message. Does not implicitly {@link CGameInfo.CDotaGameInfo.verify|verify} messages.
             * @function encode
             * @memberof CGameInfo.CDotaGameInfo
             * @static
             * @param {CGameInfo.ICDotaGameInfo} message CDotaGameInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CDotaGameInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.match_id != null && Object.hasOwnProperty.call(message, "match_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.match_id);
                if (message.game_mode != null && Object.hasOwnProperty.call(message, "game_mode"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.game_mode);
                if (message.game_winner != null && Object.hasOwnProperty.call(message, "game_winner"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.game_winner);
                if (message.player_info != null && message.player_info.length)
                    for (var i = 0; i < message.player_info.length; ++i)
                        $root.CGameInfo.CDotaGameInfo.CPlayerInfo.encode(message.player_info[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.leagueid != null && Object.hasOwnProperty.call(message, "leagueid"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.leagueid);
                if (message.picks_bans != null && message.picks_bans.length)
                    for (var i = 0; i < message.picks_bans.length; ++i)
                        $root.CGameInfo.CDotaGameInfo.CHeroSelectEvent.encode(message.picks_bans[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.radiant_team_id != null && Object.hasOwnProperty.call(message, "radiant_team_id"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.radiant_team_id);
                if (message.dire_team_id != null && Object.hasOwnProperty.call(message, "dire_team_id"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.dire_team_id);
                if (message.radiant_team_tag != null && Object.hasOwnProperty.call(message, "radiant_team_tag"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.radiant_team_tag);
                if (message.dire_team_tag != null && Object.hasOwnProperty.call(message, "dire_team_tag"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.dire_team_tag);
                if (message.end_time != null && Object.hasOwnProperty.call(message, "end_time"))
                    writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.end_time);
                return writer;
            };
    
            /**
             * Encodes the specified CDotaGameInfo message, length delimited. Does not implicitly {@link CGameInfo.CDotaGameInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CGameInfo.CDotaGameInfo
             * @static
             * @param {CGameInfo.ICDotaGameInfo} message CDotaGameInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CDotaGameInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CDotaGameInfo message from the specified reader or buffer.
             * @function decode
             * @memberof CGameInfo.CDotaGameInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CGameInfo.CDotaGameInfo} CDotaGameInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CDotaGameInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameInfo.CDotaGameInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.match_id = reader.uint64();
                            break;
                        }
                    case 2: {
                            message.game_mode = reader.int32();
                            break;
                        }
                    case 3: {
                            message.game_winner = reader.int32();
                            break;
                        }
                    case 4: {
                            if (!(message.player_info && message.player_info.length))
                                message.player_info = [];
                            message.player_info.push($root.CGameInfo.CDotaGameInfo.CPlayerInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    case 5: {
                            message.leagueid = reader.uint32();
                            break;
                        }
                    case 6: {
                            if (!(message.picks_bans && message.picks_bans.length))
                                message.picks_bans = [];
                            message.picks_bans.push($root.CGameInfo.CDotaGameInfo.CHeroSelectEvent.decode(reader, reader.uint32()));
                            break;
                        }
                    case 7: {
                            message.radiant_team_id = reader.uint32();
                            break;
                        }
                    case 8: {
                            message.dire_team_id = reader.uint32();
                            break;
                        }
                    case 9: {
                            message.radiant_team_tag = reader.string();
                            break;
                        }
                    case 10: {
                            message.dire_team_tag = reader.string();
                            break;
                        }
                    case 11: {
                            message.end_time = reader.uint32();
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
             * Decodes a CDotaGameInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CGameInfo.CDotaGameInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CGameInfo.CDotaGameInfo} CDotaGameInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CDotaGameInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CDotaGameInfo message.
             * @function verify
             * @memberof CGameInfo.CDotaGameInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CDotaGameInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.match_id != null && message.hasOwnProperty("match_id"))
                    if (!$util.isInteger(message.match_id) && !(message.match_id && $util.isInteger(message.match_id.low) && $util.isInteger(message.match_id.high)))
                        return "match_id: integer|Long expected";
                if (message.game_mode != null && message.hasOwnProperty("game_mode"))
                    if (!$util.isInteger(message.game_mode))
                        return "game_mode: integer expected";
                if (message.game_winner != null && message.hasOwnProperty("game_winner"))
                    if (!$util.isInteger(message.game_winner))
                        return "game_winner: integer expected";
                if (message.player_info != null && message.hasOwnProperty("player_info")) {
                    if (!Array.isArray(message.player_info))
                        return "player_info: array expected";
                    for (var i = 0; i < message.player_info.length; ++i) {
                        var error = $root.CGameInfo.CDotaGameInfo.CPlayerInfo.verify(message.player_info[i]);
                        if (error)
                            return "player_info." + error;
                    }
                }
                if (message.leagueid != null && message.hasOwnProperty("leagueid"))
                    if (!$util.isInteger(message.leagueid))
                        return "leagueid: integer expected";
                if (message.picks_bans != null && message.hasOwnProperty("picks_bans")) {
                    if (!Array.isArray(message.picks_bans))
                        return "picks_bans: array expected";
                    for (var i = 0; i < message.picks_bans.length; ++i) {
                        var error = $root.CGameInfo.CDotaGameInfo.CHeroSelectEvent.verify(message.picks_bans[i]);
                        if (error)
                            return "picks_bans." + error;
                    }
                }
                if (message.radiant_team_id != null && message.hasOwnProperty("radiant_team_id"))
                    if (!$util.isInteger(message.radiant_team_id))
                        return "radiant_team_id: integer expected";
                if (message.dire_team_id != null && message.hasOwnProperty("dire_team_id"))
                    if (!$util.isInteger(message.dire_team_id))
                        return "dire_team_id: integer expected";
                if (message.radiant_team_tag != null && message.hasOwnProperty("radiant_team_tag"))
                    if (!$util.isString(message.radiant_team_tag))
                        return "radiant_team_tag: string expected";
                if (message.dire_team_tag != null && message.hasOwnProperty("dire_team_tag"))
                    if (!$util.isString(message.dire_team_tag))
                        return "dire_team_tag: string expected";
                if (message.end_time != null && message.hasOwnProperty("end_time"))
                    if (!$util.isInteger(message.end_time))
                        return "end_time: integer expected";
                return null;
            };
    
            /**
             * Creates a CDotaGameInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CGameInfo.CDotaGameInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CGameInfo.CDotaGameInfo} CDotaGameInfo
             */
            CDotaGameInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.CGameInfo.CDotaGameInfo)
                    return object;
                var message = new $root.CGameInfo.CDotaGameInfo();
                if (object.match_id != null)
                    if ($util.Long)
                        (message.match_id = $util.Long.fromValue(object.match_id)).unsigned = true;
                    else if (typeof object.match_id === "string")
                        message.match_id = parseInt(object.match_id, 10);
                    else if (typeof object.match_id === "number")
                        message.match_id = object.match_id;
                    else if (typeof object.match_id === "object")
                        message.match_id = new $util.LongBits(object.match_id.low >>> 0, object.match_id.high >>> 0).toNumber(true);
                if (object.game_mode != null)
                    message.game_mode = object.game_mode | 0;
                if (object.game_winner != null)
                    message.game_winner = object.game_winner | 0;
                if (object.player_info) {
                    if (!Array.isArray(object.player_info))
                        throw TypeError(".CGameInfo.CDotaGameInfo.player_info: array expected");
                    message.player_info = [];
                    for (var i = 0; i < object.player_info.length; ++i) {
                        if (typeof object.player_info[i] !== "object")
                            throw TypeError(".CGameInfo.CDotaGameInfo.player_info: object expected");
                        message.player_info[i] = $root.CGameInfo.CDotaGameInfo.CPlayerInfo.fromObject(object.player_info[i]);
                    }
                }
                if (object.leagueid != null)
                    message.leagueid = object.leagueid >>> 0;
                if (object.picks_bans) {
                    if (!Array.isArray(object.picks_bans))
                        throw TypeError(".CGameInfo.CDotaGameInfo.picks_bans: array expected");
                    message.picks_bans = [];
                    for (var i = 0; i < object.picks_bans.length; ++i) {
                        if (typeof object.picks_bans[i] !== "object")
                            throw TypeError(".CGameInfo.CDotaGameInfo.picks_bans: object expected");
                        message.picks_bans[i] = $root.CGameInfo.CDotaGameInfo.CHeroSelectEvent.fromObject(object.picks_bans[i]);
                    }
                }
                if (object.radiant_team_id != null)
                    message.radiant_team_id = object.radiant_team_id >>> 0;
                if (object.dire_team_id != null)
                    message.dire_team_id = object.dire_team_id >>> 0;
                if (object.radiant_team_tag != null)
                    message.radiant_team_tag = String(object.radiant_team_tag);
                if (object.dire_team_tag != null)
                    message.dire_team_tag = String(object.dire_team_tag);
                if (object.end_time != null)
                    message.end_time = object.end_time >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a CDotaGameInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CGameInfo.CDotaGameInfo
             * @static
             * @param {CGameInfo.CDotaGameInfo} message CDotaGameInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CDotaGameInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.player_info = [];
                    object.picks_bans = [];
                }
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.match_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.match_id = options.longs === String ? "0" : 0;
                    object.game_mode = 0;
                    object.game_winner = 0;
                    object.leagueid = 0;
                    object.radiant_team_id = 0;
                    object.dire_team_id = 0;
                    object.radiant_team_tag = "";
                    object.dire_team_tag = "";
                    object.end_time = 0;
                }
                if (message.match_id != null && message.hasOwnProperty("match_id"))
                    if (typeof message.match_id === "number")
                        object.match_id = options.longs === String ? String(message.match_id) : message.match_id;
                    else
                        object.match_id = options.longs === String ? $util.Long.prototype.toString.call(message.match_id) : options.longs === Number ? new $util.LongBits(message.match_id.low >>> 0, message.match_id.high >>> 0).toNumber(true) : message.match_id;
                if (message.game_mode != null && message.hasOwnProperty("game_mode"))
                    object.game_mode = message.game_mode;
                if (message.game_winner != null && message.hasOwnProperty("game_winner"))
                    object.game_winner = message.game_winner;
                if (message.player_info && message.player_info.length) {
                    object.player_info = [];
                    for (var j = 0; j < message.player_info.length; ++j)
                        object.player_info[j] = $root.CGameInfo.CDotaGameInfo.CPlayerInfo.toObject(message.player_info[j], options);
                }
                if (message.leagueid != null && message.hasOwnProperty("leagueid"))
                    object.leagueid = message.leagueid;
                if (message.picks_bans && message.picks_bans.length) {
                    object.picks_bans = [];
                    for (var j = 0; j < message.picks_bans.length; ++j)
                        object.picks_bans[j] = $root.CGameInfo.CDotaGameInfo.CHeroSelectEvent.toObject(message.picks_bans[j], options);
                }
                if (message.radiant_team_id != null && message.hasOwnProperty("radiant_team_id"))
                    object.radiant_team_id = message.radiant_team_id;
                if (message.dire_team_id != null && message.hasOwnProperty("dire_team_id"))
                    object.dire_team_id = message.dire_team_id;
                if (message.radiant_team_tag != null && message.hasOwnProperty("radiant_team_tag"))
                    object.radiant_team_tag = message.radiant_team_tag;
                if (message.dire_team_tag != null && message.hasOwnProperty("dire_team_tag"))
                    object.dire_team_tag = message.dire_team_tag;
                if (message.end_time != null && message.hasOwnProperty("end_time"))
                    object.end_time = message.end_time;
                return object;
            };
    
            /**
             * Converts this CDotaGameInfo to JSON.
             * @function toJSON
             * @memberof CGameInfo.CDotaGameInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CDotaGameInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for CDotaGameInfo
             * @function getTypeUrl
             * @memberof CGameInfo.CDotaGameInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CDotaGameInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CGameInfo.CDotaGameInfo";
            };
    
            CDotaGameInfo.CPlayerInfo = (function() {
    
                /**
                 * Properties of a CPlayerInfo.
                 * @memberof CGameInfo.CDotaGameInfo
                 * @interface ICPlayerInfo
                 * @property {string|null} [hero_name] CPlayerInfo hero_name
                 * @property {string|null} [player_name] CPlayerInfo player_name
                 * @property {boolean|null} [is_fake_client] CPlayerInfo is_fake_client
                 * @property {number|Long|null} [steamid] CPlayerInfo steamid
                 * @property {number|null} [game_team] CPlayerInfo game_team
                 */
    
                /**
                 * Constructs a new CPlayerInfo.
                 * @memberof CGameInfo.CDotaGameInfo
                 * @classdesc Represents a CPlayerInfo.
                 * @implements ICPlayerInfo
                 * @constructor
                 * @param {CGameInfo.CDotaGameInfo.ICPlayerInfo=} [properties] Properties to set
                 */
                function CPlayerInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * CPlayerInfo hero_name.
                 * @member {string} hero_name
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @instance
                 */
                CPlayerInfo.prototype.hero_name = "";
    
                /**
                 * CPlayerInfo player_name.
                 * @member {string} player_name
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @instance
                 */
                CPlayerInfo.prototype.player_name = "";
    
                /**
                 * CPlayerInfo is_fake_client.
                 * @member {boolean} is_fake_client
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @instance
                 */
                CPlayerInfo.prototype.is_fake_client = false;
    
                /**
                 * CPlayerInfo steamid.
                 * @member {number|Long} steamid
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @instance
                 */
                CPlayerInfo.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * CPlayerInfo game_team.
                 * @member {number} game_team
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @instance
                 */
                CPlayerInfo.prototype.game_team = 0;
    
                /**
                 * Creates a new CPlayerInfo instance using the specified properties.
                 * @function create
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @static
                 * @param {CGameInfo.CDotaGameInfo.ICPlayerInfo=} [properties] Properties to set
                 * @returns {CGameInfo.CDotaGameInfo.CPlayerInfo} CPlayerInfo instance
                 */
                CPlayerInfo.create = function create(properties) {
                    return new CPlayerInfo(properties);
                };
    
                /**
                 * Encodes the specified CPlayerInfo message. Does not implicitly {@link CGameInfo.CDotaGameInfo.CPlayerInfo.verify|verify} messages.
                 * @function encode
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @static
                 * @param {CGameInfo.CDotaGameInfo.ICPlayerInfo} message CPlayerInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CPlayerInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.hero_name != null && Object.hasOwnProperty.call(message, "hero_name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.hero_name);
                    if (message.player_name != null && Object.hasOwnProperty.call(message, "player_name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.player_name);
                    if (message.is_fake_client != null && Object.hasOwnProperty.call(message, "is_fake_client"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.is_fake_client);
                    if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.steamid);
                    if (message.game_team != null && Object.hasOwnProperty.call(message, "game_team"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.game_team);
                    return writer;
                };
    
                /**
                 * Encodes the specified CPlayerInfo message, length delimited. Does not implicitly {@link CGameInfo.CDotaGameInfo.CPlayerInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @static
                 * @param {CGameInfo.CDotaGameInfo.ICPlayerInfo} message CPlayerInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CPlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a CPlayerInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {CGameInfo.CDotaGameInfo.CPlayerInfo} CPlayerInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CPlayerInfo.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameInfo.CDotaGameInfo.CPlayerInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.hero_name = reader.string();
                                break;
                            }
                        case 2: {
                                message.player_name = reader.string();
                                break;
                            }
                        case 3: {
                                message.is_fake_client = reader.bool();
                                break;
                            }
                        case 4: {
                                message.steamid = reader.uint64();
                                break;
                            }
                        case 5: {
                                message.game_team = reader.int32();
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
                 * Decodes a CPlayerInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {CGameInfo.CDotaGameInfo.CPlayerInfo} CPlayerInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CPlayerInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a CPlayerInfo message.
                 * @function verify
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CPlayerInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.hero_name != null && message.hasOwnProperty("hero_name"))
                        if (!$util.isString(message.hero_name))
                            return "hero_name: string expected";
                    if (message.player_name != null && message.hasOwnProperty("player_name"))
                        if (!$util.isString(message.player_name))
                            return "player_name: string expected";
                    if (message.is_fake_client != null && message.hasOwnProperty("is_fake_client"))
                        if (typeof message.is_fake_client !== "boolean")
                            return "is_fake_client: boolean expected";
                    if (message.steamid != null && message.hasOwnProperty("steamid"))
                        if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                            return "steamid: integer|Long expected";
                    if (message.game_team != null && message.hasOwnProperty("game_team"))
                        if (!$util.isInteger(message.game_team))
                            return "game_team: integer expected";
                    return null;
                };
    
                /**
                 * Creates a CPlayerInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {CGameInfo.CDotaGameInfo.CPlayerInfo} CPlayerInfo
                 */
                CPlayerInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.CGameInfo.CDotaGameInfo.CPlayerInfo)
                        return object;
                    var message = new $root.CGameInfo.CDotaGameInfo.CPlayerInfo();
                    if (object.hero_name != null)
                        message.hero_name = String(object.hero_name);
                    if (object.player_name != null)
                        message.player_name = String(object.player_name);
                    if (object.is_fake_client != null)
                        message.is_fake_client = Boolean(object.is_fake_client);
                    if (object.steamid != null)
                        if ($util.Long)
                            (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = true;
                        else if (typeof object.steamid === "string")
                            message.steamid = parseInt(object.steamid, 10);
                        else if (typeof object.steamid === "number")
                            message.steamid = object.steamid;
                        else if (typeof object.steamid === "object")
                            message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber(true);
                    if (object.game_team != null)
                        message.game_team = object.game_team | 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a CPlayerInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @static
                 * @param {CGameInfo.CDotaGameInfo.CPlayerInfo} message CPlayerInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CPlayerInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.hero_name = "";
                        object.player_name = "";
                        object.is_fake_client = false;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.steamid = options.longs === String ? "0" : 0;
                        object.game_team = 0;
                    }
                    if (message.hero_name != null && message.hasOwnProperty("hero_name"))
                        object.hero_name = message.hero_name;
                    if (message.player_name != null && message.hasOwnProperty("player_name"))
                        object.player_name = message.player_name;
                    if (message.is_fake_client != null && message.hasOwnProperty("is_fake_client"))
                        object.is_fake_client = message.is_fake_client;
                    if (message.steamid != null && message.hasOwnProperty("steamid"))
                        if (typeof message.steamid === "number")
                            object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                        else
                            object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber(true) : message.steamid;
                    if (message.game_team != null && message.hasOwnProperty("game_team"))
                        object.game_team = message.game_team;
                    return object;
                };
    
                /**
                 * Converts this CPlayerInfo to JSON.
                 * @function toJSON
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CPlayerInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for CPlayerInfo
                 * @function getTypeUrl
                 * @memberof CGameInfo.CDotaGameInfo.CPlayerInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CPlayerInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/CGameInfo.CDotaGameInfo.CPlayerInfo";
                };
    
                return CPlayerInfo;
            })();
    
            CDotaGameInfo.CHeroSelectEvent = (function() {
    
                /**
                 * Properties of a CHeroSelectEvent.
                 * @memberof CGameInfo.CDotaGameInfo
                 * @interface ICHeroSelectEvent
                 * @property {boolean|null} [is_pick] CHeroSelectEvent is_pick
                 * @property {number|null} [team] CHeroSelectEvent team
                 * @property {number|null} [hero_id] CHeroSelectEvent hero_id
                 */
    
                /**
                 * Constructs a new CHeroSelectEvent.
                 * @memberof CGameInfo.CDotaGameInfo
                 * @classdesc Represents a CHeroSelectEvent.
                 * @implements ICHeroSelectEvent
                 * @constructor
                 * @param {CGameInfo.CDotaGameInfo.ICHeroSelectEvent=} [properties] Properties to set
                 */
                function CHeroSelectEvent(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * CHeroSelectEvent is_pick.
                 * @member {boolean} is_pick
                 * @memberof CGameInfo.CDotaGameInfo.CHeroSelectEvent
                 * @instance
                 */
                CHeroSelectEvent.prototype.is_pick = false;
    
                /**
                 * CHeroSelectEvent team.
                 * @member {number} team
                 * @memberof CGameInfo.CDotaGameInfo.CHeroSelectEvent
                 * @instance
                 */
                CHeroSelectEvent.prototype.team = 0;
    
                /**
                 * CHeroSelectEvent hero_id.
                 * @member {number} hero_id
                 * @memberof CGameInfo.CDotaGameInfo.CHeroSelectEvent
                 * @instance
                 */
                CHeroSelectEvent.prototype.hero_id = 0;
    
                /**
                 * Creates a new CHeroSelectEvent instance using the specified properties.
                 * @function create
                 * @memberof CGameInfo.CDotaGameInfo.CHeroSelectEvent
                 * @static
                 * @param {CGameInfo.CDotaGameInfo.ICHeroSelectEvent=} [properties] Properties to set
                 * @returns {CGameInfo.CDotaGameInfo.CHeroSelectEvent} CHeroSelectEvent instance
                 */
                CHeroSelectEvent.create = function create(properties) {
                    return new CHeroSelectEvent(properties);
                };
    
                /**
                 * Encodes the specified CHeroSelectEvent message. Does not implicitly {@link CGameInfo.CDotaGameInfo.CHeroSelectEvent.verify|verify} messages.
                 * @function encode
                 * @memberof CGameInfo.CDotaGameInfo.CHeroSelectEvent
                 * @static
                 * @param {CGameInfo.CDotaGameInfo.ICHeroSelectEvent} message CHeroSelectEvent message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CHeroSelectEvent.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.is_pick != null && Object.hasOwnProperty.call(message, "is_pick"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.is_pick);
                    if (message.team != null && Object.hasOwnProperty.call(message, "team"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.team);
                    if (message.hero_id != null && Object.hasOwnProperty.call(message, "hero_id"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.hero_id);
                    return writer;
                };
    
                /**
                 * Encodes the specified CHeroSelectEvent message, length delimited. Does not implicitly {@link CGameInfo.CDotaGameInfo.CHeroSelectEvent.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof CGameInfo.CDotaGameInfo.CHeroSelectEvent
                 * @static
                 * @param {CGameInfo.CDotaGameInfo.ICHeroSelectEvent} message CHeroSelectEvent message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CHeroSelectEvent.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a CHeroSelectEvent message from the specified reader or buffer.
                 * @function decode
                 * @memberof CGameInfo.CDotaGameInfo.CHeroSelectEvent
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {CGameInfo.CDotaGameInfo.CHeroSelectEvent} CHeroSelectEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CHeroSelectEvent.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameInfo.CDotaGameInfo.CHeroSelectEvent();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.is_pick = reader.bool();
                                break;
                            }
                        case 2: {
                                message.team = reader.uint32();
                                break;
                            }
                        case 3: {
                                message.hero_id = reader.int32();
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
                 * Decodes a CHeroSelectEvent message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof CGameInfo.CDotaGameInfo.CHeroSelectEvent
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {CGameInfo.CDotaGameInfo.CHeroSelectEvent} CHeroSelectEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CHeroSelectEvent.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a CHeroSelectEvent message.
                 * @function verify
                 * @memberof CGameInfo.CDotaGameInfo.CHeroSelectEvent
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CHeroSelectEvent.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.is_pick != null && message.hasOwnProperty("is_pick"))
                        if (typeof message.is_pick !== "boolean")
                            return "is_pick: boolean expected";
                    if (message.team != null && message.hasOwnProperty("team"))
                        if (!$util.isInteger(message.team))
                            return "team: integer expected";
                    if (message.hero_id != null && message.hasOwnProperty("hero_id"))
                        if (!$util.isInteger(message.hero_id))
                            return "hero_id: integer expected";
                    return null;
                };
    
                /**
                 * Creates a CHeroSelectEvent message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof CGameInfo.CDotaGameInfo.CHeroSelectEvent
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {CGameInfo.CDotaGameInfo.CHeroSelectEvent} CHeroSelectEvent
                 */
                CHeroSelectEvent.fromObject = function fromObject(object) {
                    if (object instanceof $root.CGameInfo.CDotaGameInfo.CHeroSelectEvent)
                        return object;
                    var message = new $root.CGameInfo.CDotaGameInfo.CHeroSelectEvent();
                    if (object.is_pick != null)
                        message.is_pick = Boolean(object.is_pick);
                    if (object.team != null)
                        message.team = object.team >>> 0;
                    if (object.hero_id != null)
                        message.hero_id = object.hero_id | 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a CHeroSelectEvent message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof CGameInfo.CDotaGameInfo.CHeroSelectEvent
                 * @static
                 * @param {CGameInfo.CDotaGameInfo.CHeroSelectEvent} message CHeroSelectEvent
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CHeroSelectEvent.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.is_pick = false;
                        object.team = 0;
                        object.hero_id = 0;
                    }
                    if (message.is_pick != null && message.hasOwnProperty("is_pick"))
                        object.is_pick = message.is_pick;
                    if (message.team != null && message.hasOwnProperty("team"))
                        object.team = message.team;
                    if (message.hero_id != null && message.hasOwnProperty("hero_id"))
                        object.hero_id = message.hero_id;
                    return object;
                };
    
                /**
                 * Converts this CHeroSelectEvent to JSON.
                 * @function toJSON
                 * @memberof CGameInfo.CDotaGameInfo.CHeroSelectEvent
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CHeroSelectEvent.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for CHeroSelectEvent
                 * @function getTypeUrl
                 * @memberof CGameInfo.CDotaGameInfo.CHeroSelectEvent
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CHeroSelectEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/CGameInfo.CDotaGameInfo.CHeroSelectEvent";
                };
    
                return CHeroSelectEvent;
            })();
    
            return CDotaGameInfo;
        })();
    
        CGameInfo.CCSGameInfo = (function() {
    
            /**
             * Properties of a CCSGameInfo.
             * @memberof CGameInfo
             * @interface ICCSGameInfo
             * @property {Array.<number>|null} [round_start_ticks] CCSGameInfo round_start_ticks
             */
    
            /**
             * Constructs a new CCSGameInfo.
             * @memberof CGameInfo
             * @classdesc Represents a CCSGameInfo.
             * @implements ICCSGameInfo
             * @constructor
             * @param {CGameInfo.ICCSGameInfo=} [properties] Properties to set
             */
            function CCSGameInfo(properties) {
                this.round_start_ticks = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CCSGameInfo round_start_ticks.
             * @member {Array.<number>} round_start_ticks
             * @memberof CGameInfo.CCSGameInfo
             * @instance
             */
            CCSGameInfo.prototype.round_start_ticks = $util.emptyArray;
    
            /**
             * Creates a new CCSGameInfo instance using the specified properties.
             * @function create
             * @memberof CGameInfo.CCSGameInfo
             * @static
             * @param {CGameInfo.ICCSGameInfo=} [properties] Properties to set
             * @returns {CGameInfo.CCSGameInfo} CCSGameInfo instance
             */
            CCSGameInfo.create = function create(properties) {
                return new CCSGameInfo(properties);
            };
    
            /**
             * Encodes the specified CCSGameInfo message. Does not implicitly {@link CGameInfo.CCSGameInfo.verify|verify} messages.
             * @function encode
             * @memberof CGameInfo.CCSGameInfo
             * @static
             * @param {CGameInfo.ICCSGameInfo} message CCSGameInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CCSGameInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.round_start_ticks != null && message.round_start_ticks.length)
                    for (var i = 0; i < message.round_start_ticks.length; ++i)
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.round_start_ticks[i]);
                return writer;
            };
    
            /**
             * Encodes the specified CCSGameInfo message, length delimited. Does not implicitly {@link CGameInfo.CCSGameInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CGameInfo.CCSGameInfo
             * @static
             * @param {CGameInfo.ICCSGameInfo} message CCSGameInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CCSGameInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CCSGameInfo message from the specified reader or buffer.
             * @function decode
             * @memberof CGameInfo.CCSGameInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CGameInfo.CCSGameInfo} CCSGameInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CCSGameInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameInfo.CCSGameInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.round_start_ticks && message.round_start_ticks.length))
                                message.round_start_ticks = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.round_start_ticks.push(reader.int32());
                            } else
                                message.round_start_ticks.push(reader.int32());
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
             * Decodes a CCSGameInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CGameInfo.CCSGameInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CGameInfo.CCSGameInfo} CCSGameInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CCSGameInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CCSGameInfo message.
             * @function verify
             * @memberof CGameInfo.CCSGameInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CCSGameInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.round_start_ticks != null && message.hasOwnProperty("round_start_ticks")) {
                    if (!Array.isArray(message.round_start_ticks))
                        return "round_start_ticks: array expected";
                    for (var i = 0; i < message.round_start_ticks.length; ++i)
                        if (!$util.isInteger(message.round_start_ticks[i]))
                            return "round_start_ticks: integer[] expected";
                }
                return null;
            };
    
            /**
             * Creates a CCSGameInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CGameInfo.CCSGameInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CGameInfo.CCSGameInfo} CCSGameInfo
             */
            CCSGameInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.CGameInfo.CCSGameInfo)
                    return object;
                var message = new $root.CGameInfo.CCSGameInfo();
                if (object.round_start_ticks) {
                    if (!Array.isArray(object.round_start_ticks))
                        throw TypeError(".CGameInfo.CCSGameInfo.round_start_ticks: array expected");
                    message.round_start_ticks = [];
                    for (var i = 0; i < object.round_start_ticks.length; ++i)
                        message.round_start_ticks[i] = object.round_start_ticks[i] | 0;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a CCSGameInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CGameInfo.CCSGameInfo
             * @static
             * @param {CGameInfo.CCSGameInfo} message CCSGameInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CCSGameInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.round_start_ticks = [];
                if (message.round_start_ticks && message.round_start_ticks.length) {
                    object.round_start_ticks = [];
                    for (var j = 0; j < message.round_start_ticks.length; ++j)
                        object.round_start_ticks[j] = message.round_start_ticks[j];
                }
                return object;
            };
    
            /**
             * Converts this CCSGameInfo to JSON.
             * @function toJSON
             * @memberof CGameInfo.CCSGameInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CCSGameInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for CCSGameInfo
             * @function getTypeUrl
             * @memberof CGameInfo.CCSGameInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CCSGameInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CGameInfo.CCSGameInfo";
            };
    
            return CCSGameInfo;
        })();
    
        return CGameInfo;
    })();
    
    $root.CDemoFileInfo = (function() {
    
        /**
         * Properties of a CDemoFileInfo.
         * @exports ICDemoFileInfo
         * @interface ICDemoFileInfo
         * @property {number|null} [playback_time] CDemoFileInfo playback_time
         * @property {number|null} [playback_ticks] CDemoFileInfo playback_ticks
         * @property {number|null} [playback_frames] CDemoFileInfo playback_frames
         * @property {ICGameInfo|null} [game_info] CDemoFileInfo game_info
         */
    
        /**
         * Constructs a new CDemoFileInfo.
         * @exports CDemoFileInfo
         * @classdesc Represents a CDemoFileInfo.
         * @implements ICDemoFileInfo
         * @constructor
         * @param {ICDemoFileInfo=} [properties] Properties to set
         */
        function CDemoFileInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoFileInfo playback_time.
         * @member {number} playback_time
         * @memberof CDemoFileInfo
         * @instance
         */
        CDemoFileInfo.prototype.playback_time = 0;
    
        /**
         * CDemoFileInfo playback_ticks.
         * @member {number} playback_ticks
         * @memberof CDemoFileInfo
         * @instance
         */
        CDemoFileInfo.prototype.playback_ticks = 0;
    
        /**
         * CDemoFileInfo playback_frames.
         * @member {number} playback_frames
         * @memberof CDemoFileInfo
         * @instance
         */
        CDemoFileInfo.prototype.playback_frames = 0;
    
        /**
         * CDemoFileInfo game_info.
         * @member {ICGameInfo|null|undefined} game_info
         * @memberof CDemoFileInfo
         * @instance
         */
        CDemoFileInfo.prototype.game_info = null;
    
        /**
         * Creates a new CDemoFileInfo instance using the specified properties.
         * @function create
         * @memberof CDemoFileInfo
         * @static
         * @param {ICDemoFileInfo=} [properties] Properties to set
         * @returns {CDemoFileInfo} CDemoFileInfo instance
         */
        CDemoFileInfo.create = function create(properties) {
            return new CDemoFileInfo(properties);
        };
    
        /**
         * Encodes the specified CDemoFileInfo message. Does not implicitly {@link CDemoFileInfo.verify|verify} messages.
         * @function encode
         * @memberof CDemoFileInfo
         * @static
         * @param {ICDemoFileInfo} message CDemoFileInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoFileInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playback_time != null && Object.hasOwnProperty.call(message, "playback_time"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.playback_time);
            if (message.playback_ticks != null && Object.hasOwnProperty.call(message, "playback_ticks"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.playback_ticks);
            if (message.playback_frames != null && Object.hasOwnProperty.call(message, "playback_frames"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.playback_frames);
            if (message.game_info != null && Object.hasOwnProperty.call(message, "game_info"))
                $root.CGameInfo.encode(message.game_info, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CDemoFileInfo message, length delimited. Does not implicitly {@link CDemoFileInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoFileInfo
         * @static
         * @param {ICDemoFileInfo} message CDemoFileInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoFileInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoFileInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoFileInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoFileInfo} CDemoFileInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoFileInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoFileInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playback_time = reader.float();
                        break;
                    }
                case 2: {
                        message.playback_ticks = reader.int32();
                        break;
                    }
                case 3: {
                        message.playback_frames = reader.int32();
                        break;
                    }
                case 4: {
                        message.game_info = $root.CGameInfo.decode(reader, reader.uint32());
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
         * Decodes a CDemoFileInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoFileInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoFileInfo} CDemoFileInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoFileInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoFileInfo message.
         * @function verify
         * @memberof CDemoFileInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoFileInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playback_time != null && message.hasOwnProperty("playback_time"))
                if (typeof message.playback_time !== "number")
                    return "playback_time: number expected";
            if (message.playback_ticks != null && message.hasOwnProperty("playback_ticks"))
                if (!$util.isInteger(message.playback_ticks))
                    return "playback_ticks: integer expected";
            if (message.playback_frames != null && message.hasOwnProperty("playback_frames"))
                if (!$util.isInteger(message.playback_frames))
                    return "playback_frames: integer expected";
            if (message.game_info != null && message.hasOwnProperty("game_info")) {
                var error = $root.CGameInfo.verify(message.game_info);
                if (error)
                    return "game_info." + error;
            }
            return null;
        };
    
        /**
         * Creates a CDemoFileInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoFileInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoFileInfo} CDemoFileInfo
         */
        CDemoFileInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoFileInfo)
                return object;
            var message = new $root.CDemoFileInfo();
            if (object.playback_time != null)
                message.playback_time = Number(object.playback_time);
            if (object.playback_ticks != null)
                message.playback_ticks = object.playback_ticks | 0;
            if (object.playback_frames != null)
                message.playback_frames = object.playback_frames | 0;
            if (object.game_info != null) {
                if (typeof object.game_info !== "object")
                    throw TypeError(".CDemoFileInfo.game_info: object expected");
                message.game_info = $root.CGameInfo.fromObject(object.game_info);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoFileInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoFileInfo
         * @static
         * @param {CDemoFileInfo} message CDemoFileInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoFileInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.playback_time = 0;
                object.playback_ticks = 0;
                object.playback_frames = 0;
                object.game_info = null;
            }
            if (message.playback_time != null && message.hasOwnProperty("playback_time"))
                object.playback_time = options.json && !isFinite(message.playback_time) ? String(message.playback_time) : message.playback_time;
            if (message.playback_ticks != null && message.hasOwnProperty("playback_ticks"))
                object.playback_ticks = message.playback_ticks;
            if (message.playback_frames != null && message.hasOwnProperty("playback_frames"))
                object.playback_frames = message.playback_frames;
            if (message.game_info != null && message.hasOwnProperty("game_info"))
                object.game_info = $root.CGameInfo.toObject(message.game_info, options);
            return object;
        };
    
        /**
         * Converts this CDemoFileInfo to JSON.
         * @function toJSON
         * @memberof CDemoFileInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoFileInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoFileInfo
         * @function getTypeUrl
         * @memberof CDemoFileInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoFileInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoFileInfo";
        };
    
        return CDemoFileInfo;
    })();
    
    $root.CDemoPacket = (function() {
    
        /**
         * Properties of a CDemoPacket.
         * @exports ICDemoPacket
         * @interface ICDemoPacket
         * @property {Uint8Array|null} [data] CDemoPacket data
         */
    
        /**
         * Constructs a new CDemoPacket.
         * @exports CDemoPacket
         * @classdesc Represents a CDemoPacket.
         * @implements ICDemoPacket
         * @constructor
         * @param {ICDemoPacket=} [properties] Properties to set
         */
        function CDemoPacket(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoPacket data.
         * @member {Uint8Array} data
         * @memberof CDemoPacket
         * @instance
         */
        CDemoPacket.prototype.data = $util.newBuffer([]);
    
        /**
         * Creates a new CDemoPacket instance using the specified properties.
         * @function create
         * @memberof CDemoPacket
         * @static
         * @param {ICDemoPacket=} [properties] Properties to set
         * @returns {CDemoPacket} CDemoPacket instance
         */
        CDemoPacket.create = function create(properties) {
            return new CDemoPacket(properties);
        };
    
        /**
         * Encodes the specified CDemoPacket message. Does not implicitly {@link CDemoPacket.verify|verify} messages.
         * @function encode
         * @memberof CDemoPacket
         * @static
         * @param {ICDemoPacket} message CDemoPacket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoPacket.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
            return writer;
        };
    
        /**
         * Encodes the specified CDemoPacket message, length delimited. Does not implicitly {@link CDemoPacket.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoPacket
         * @static
         * @param {ICDemoPacket} message CDemoPacket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoPacket.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoPacket message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoPacket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoPacket} CDemoPacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoPacket.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoPacket();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 3: {
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
         * Decodes a CDemoPacket message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoPacket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoPacket} CDemoPacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoPacket.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoPacket message.
         * @function verify
         * @memberof CDemoPacket
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoPacket.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };
    
        /**
         * Creates a CDemoPacket message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoPacket
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoPacket} CDemoPacket
         */
        CDemoPacket.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoPacket)
                return object;
            var message = new $root.CDemoPacket();
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoPacket message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoPacket
         * @static
         * @param {CDemoPacket} message CDemoPacket
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoPacket.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };
    
        /**
         * Converts this CDemoPacket to JSON.
         * @function toJSON
         * @memberof CDemoPacket
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoPacket.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoPacket
         * @function getTypeUrl
         * @memberof CDemoPacket
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoPacket.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoPacket";
        };
    
        return CDemoPacket;
    })();
    
    $root.CDemoFullPacket = (function() {
    
        /**
         * Properties of a CDemoFullPacket.
         * @exports ICDemoFullPacket
         * @interface ICDemoFullPacket
         * @property {ICDemoStringTables|null} [string_table] CDemoFullPacket string_table
         * @property {ICDemoPacket|null} [packet] CDemoFullPacket packet
         */
    
        /**
         * Constructs a new CDemoFullPacket.
         * @exports CDemoFullPacket
         * @classdesc Represents a CDemoFullPacket.
         * @implements ICDemoFullPacket
         * @constructor
         * @param {ICDemoFullPacket=} [properties] Properties to set
         */
        function CDemoFullPacket(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoFullPacket string_table.
         * @member {ICDemoStringTables|null|undefined} string_table
         * @memberof CDemoFullPacket
         * @instance
         */
        CDemoFullPacket.prototype.string_table = null;
    
        /**
         * CDemoFullPacket packet.
         * @member {ICDemoPacket|null|undefined} packet
         * @memberof CDemoFullPacket
         * @instance
         */
        CDemoFullPacket.prototype.packet = null;
    
        /**
         * Creates a new CDemoFullPacket instance using the specified properties.
         * @function create
         * @memberof CDemoFullPacket
         * @static
         * @param {ICDemoFullPacket=} [properties] Properties to set
         * @returns {CDemoFullPacket} CDemoFullPacket instance
         */
        CDemoFullPacket.create = function create(properties) {
            return new CDemoFullPacket(properties);
        };
    
        /**
         * Encodes the specified CDemoFullPacket message. Does not implicitly {@link CDemoFullPacket.verify|verify} messages.
         * @function encode
         * @memberof CDemoFullPacket
         * @static
         * @param {ICDemoFullPacket} message CDemoFullPacket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoFullPacket.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.string_table != null && Object.hasOwnProperty.call(message, "string_table"))
                $root.CDemoStringTables.encode(message.string_table, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.packet != null && Object.hasOwnProperty.call(message, "packet"))
                $root.CDemoPacket.encode(message.packet, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CDemoFullPacket message, length delimited. Does not implicitly {@link CDemoFullPacket.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoFullPacket
         * @static
         * @param {ICDemoFullPacket} message CDemoFullPacket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoFullPacket.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoFullPacket message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoFullPacket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoFullPacket} CDemoFullPacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoFullPacket.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoFullPacket();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.string_table = $root.CDemoStringTables.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.packet = $root.CDemoPacket.decode(reader, reader.uint32());
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
         * Decodes a CDemoFullPacket message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoFullPacket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoFullPacket} CDemoFullPacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoFullPacket.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoFullPacket message.
         * @function verify
         * @memberof CDemoFullPacket
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoFullPacket.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.string_table != null && message.hasOwnProperty("string_table")) {
                var error = $root.CDemoStringTables.verify(message.string_table);
                if (error)
                    return "string_table." + error;
            }
            if (message.packet != null && message.hasOwnProperty("packet")) {
                var error = $root.CDemoPacket.verify(message.packet);
                if (error)
                    return "packet." + error;
            }
            return null;
        };
    
        /**
         * Creates a CDemoFullPacket message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoFullPacket
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoFullPacket} CDemoFullPacket
         */
        CDemoFullPacket.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoFullPacket)
                return object;
            var message = new $root.CDemoFullPacket();
            if (object.string_table != null) {
                if (typeof object.string_table !== "object")
                    throw TypeError(".CDemoFullPacket.string_table: object expected");
                message.string_table = $root.CDemoStringTables.fromObject(object.string_table);
            }
            if (object.packet != null) {
                if (typeof object.packet !== "object")
                    throw TypeError(".CDemoFullPacket.packet: object expected");
                message.packet = $root.CDemoPacket.fromObject(object.packet);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoFullPacket message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoFullPacket
         * @static
         * @param {CDemoFullPacket} message CDemoFullPacket
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoFullPacket.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.string_table = null;
                object.packet = null;
            }
            if (message.string_table != null && message.hasOwnProperty("string_table"))
                object.string_table = $root.CDemoStringTables.toObject(message.string_table, options);
            if (message.packet != null && message.hasOwnProperty("packet"))
                object.packet = $root.CDemoPacket.toObject(message.packet, options);
            return object;
        };
    
        /**
         * Converts this CDemoFullPacket to JSON.
         * @function toJSON
         * @memberof CDemoFullPacket
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoFullPacket.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoFullPacket
         * @function getTypeUrl
         * @memberof CDemoFullPacket
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoFullPacket.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoFullPacket";
        };
    
        return CDemoFullPacket;
    })();
    
    $root.CDemoSaveGame = (function() {
    
        /**
         * Properties of a CDemoSaveGame.
         * @exports ICDemoSaveGame
         * @interface ICDemoSaveGame
         * @property {Uint8Array|null} [data] CDemoSaveGame data
         * @property {number|Long|null} [steam_id] CDemoSaveGame steam_id
         * @property {number|Long|null} [signature] CDemoSaveGame signature
         * @property {number|null} [version] CDemoSaveGame version
         */
    
        /**
         * Constructs a new CDemoSaveGame.
         * @exports CDemoSaveGame
         * @classdesc Represents a CDemoSaveGame.
         * @implements ICDemoSaveGame
         * @constructor
         * @param {ICDemoSaveGame=} [properties] Properties to set
         */
        function CDemoSaveGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoSaveGame data.
         * @member {Uint8Array} data
         * @memberof CDemoSaveGame
         * @instance
         */
        CDemoSaveGame.prototype.data = $util.newBuffer([]);
    
        /**
         * CDemoSaveGame steam_id.
         * @member {number|Long} steam_id
         * @memberof CDemoSaveGame
         * @instance
         */
        CDemoSaveGame.prototype.steam_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CDemoSaveGame signature.
         * @member {number|Long} signature
         * @memberof CDemoSaveGame
         * @instance
         */
        CDemoSaveGame.prototype.signature = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CDemoSaveGame version.
         * @member {number} version
         * @memberof CDemoSaveGame
         * @instance
         */
        CDemoSaveGame.prototype.version = 0;
    
        /**
         * Creates a new CDemoSaveGame instance using the specified properties.
         * @function create
         * @memberof CDemoSaveGame
         * @static
         * @param {ICDemoSaveGame=} [properties] Properties to set
         * @returns {CDemoSaveGame} CDemoSaveGame instance
         */
        CDemoSaveGame.create = function create(properties) {
            return new CDemoSaveGame(properties);
        };
    
        /**
         * Encodes the specified CDemoSaveGame message. Does not implicitly {@link CDemoSaveGame.verify|verify} messages.
         * @function encode
         * @memberof CDemoSaveGame
         * @static
         * @param {ICDemoSaveGame} message CDemoSaveGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoSaveGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
            if (message.steam_id != null && Object.hasOwnProperty.call(message, "steam_id"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.steam_id);
            if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.signature);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.version);
            return writer;
        };
    
        /**
         * Encodes the specified CDemoSaveGame message, length delimited. Does not implicitly {@link CDemoSaveGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoSaveGame
         * @static
         * @param {ICDemoSaveGame} message CDemoSaveGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoSaveGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoSaveGame message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoSaveGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoSaveGame} CDemoSaveGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoSaveGame.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoSaveGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.data = reader.bytes();
                        break;
                    }
                case 2: {
                        message.steam_id = reader.fixed64();
                        break;
                    }
                case 3: {
                        message.signature = reader.fixed64();
                        break;
                    }
                case 4: {
                        message.version = reader.int32();
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
         * Decodes a CDemoSaveGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoSaveGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoSaveGame} CDemoSaveGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoSaveGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoSaveGame message.
         * @function verify
         * @memberof CDemoSaveGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoSaveGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.steam_id != null && message.hasOwnProperty("steam_id"))
                if (!$util.isInteger(message.steam_id) && !(message.steam_id && $util.isInteger(message.steam_id.low) && $util.isInteger(message.steam_id.high)))
                    return "steam_id: integer|Long expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!$util.isInteger(message.signature) && !(message.signature && $util.isInteger(message.signature.low) && $util.isInteger(message.signature.high)))
                    return "signature: integer|Long expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            return null;
        };
    
        /**
         * Creates a CDemoSaveGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoSaveGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoSaveGame} CDemoSaveGame
         */
        CDemoSaveGame.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoSaveGame)
                return object;
            var message = new $root.CDemoSaveGame();
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            if (object.steam_id != null)
                if ($util.Long)
                    (message.steam_id = $util.Long.fromValue(object.steam_id)).unsigned = false;
                else if (typeof object.steam_id === "string")
                    message.steam_id = parseInt(object.steam_id, 10);
                else if (typeof object.steam_id === "number")
                    message.steam_id = object.steam_id;
                else if (typeof object.steam_id === "object")
                    message.steam_id = new $util.LongBits(object.steam_id.low >>> 0, object.steam_id.high >>> 0).toNumber();
            if (object.signature != null)
                if ($util.Long)
                    (message.signature = $util.Long.fromValue(object.signature)).unsigned = false;
                else if (typeof object.signature === "string")
                    message.signature = parseInt(object.signature, 10);
                else if (typeof object.signature === "number")
                    message.signature = object.signature;
                else if (typeof object.signature === "object")
                    message.signature = new $util.LongBits(object.signature.low >>> 0, object.signature.high >>> 0).toNumber();
            if (object.version != null)
                message.version = object.version | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoSaveGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoSaveGame
         * @static
         * @param {CDemoSaveGame} message CDemoSaveGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoSaveGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steam_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steam_id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.signature = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.signature = options.longs === String ? "0" : 0;
                object.version = 0;
            }
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.steam_id != null && message.hasOwnProperty("steam_id"))
                if (typeof message.steam_id === "number")
                    object.steam_id = options.longs === String ? String(message.steam_id) : message.steam_id;
                else
                    object.steam_id = options.longs === String ? $util.Long.prototype.toString.call(message.steam_id) : options.longs === Number ? new $util.LongBits(message.steam_id.low >>> 0, message.steam_id.high >>> 0).toNumber() : message.steam_id;
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (typeof message.signature === "number")
                    object.signature = options.longs === String ? String(message.signature) : message.signature;
                else
                    object.signature = options.longs === String ? $util.Long.prototype.toString.call(message.signature) : options.longs === Number ? new $util.LongBits(message.signature.low >>> 0, message.signature.high >>> 0).toNumber() : message.signature;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            return object;
        };
    
        /**
         * Converts this CDemoSaveGame to JSON.
         * @function toJSON
         * @memberof CDemoSaveGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoSaveGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoSaveGame
         * @function getTypeUrl
         * @memberof CDemoSaveGame
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoSaveGame.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoSaveGame";
        };
    
        return CDemoSaveGame;
    })();
    
    $root.CDemoSyncTick = (function() {
    
        /**
         * Properties of a CDemoSyncTick.
         * @exports ICDemoSyncTick
         * @interface ICDemoSyncTick
         */
    
        /**
         * Constructs a new CDemoSyncTick.
         * @exports CDemoSyncTick
         * @classdesc Represents a CDemoSyncTick.
         * @implements ICDemoSyncTick
         * @constructor
         * @param {ICDemoSyncTick=} [properties] Properties to set
         */
        function CDemoSyncTick(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CDemoSyncTick instance using the specified properties.
         * @function create
         * @memberof CDemoSyncTick
         * @static
         * @param {ICDemoSyncTick=} [properties] Properties to set
         * @returns {CDemoSyncTick} CDemoSyncTick instance
         */
        CDemoSyncTick.create = function create(properties) {
            return new CDemoSyncTick(properties);
        };
    
        /**
         * Encodes the specified CDemoSyncTick message. Does not implicitly {@link CDemoSyncTick.verify|verify} messages.
         * @function encode
         * @memberof CDemoSyncTick
         * @static
         * @param {ICDemoSyncTick} message CDemoSyncTick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoSyncTick.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CDemoSyncTick message, length delimited. Does not implicitly {@link CDemoSyncTick.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoSyncTick
         * @static
         * @param {ICDemoSyncTick} message CDemoSyncTick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoSyncTick.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoSyncTick message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoSyncTick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoSyncTick} CDemoSyncTick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoSyncTick.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoSyncTick();
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
         * Decodes a CDemoSyncTick message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoSyncTick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoSyncTick} CDemoSyncTick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoSyncTick.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoSyncTick message.
         * @function verify
         * @memberof CDemoSyncTick
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoSyncTick.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CDemoSyncTick message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoSyncTick
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoSyncTick} CDemoSyncTick
         */
        CDemoSyncTick.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoSyncTick)
                return object;
            return new $root.CDemoSyncTick();
        };
    
        /**
         * Creates a plain object from a CDemoSyncTick message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoSyncTick
         * @static
         * @param {CDemoSyncTick} message CDemoSyncTick
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoSyncTick.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CDemoSyncTick to JSON.
         * @function toJSON
         * @memberof CDemoSyncTick
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoSyncTick.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoSyncTick
         * @function getTypeUrl
         * @memberof CDemoSyncTick
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoSyncTick.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoSyncTick";
        };
    
        return CDemoSyncTick;
    })();
    
    $root.CDemoConsoleCmd = (function() {
    
        /**
         * Properties of a CDemoConsoleCmd.
         * @exports ICDemoConsoleCmd
         * @interface ICDemoConsoleCmd
         * @property {string|null} [cmdstring] CDemoConsoleCmd cmdstring
         */
    
        /**
         * Constructs a new CDemoConsoleCmd.
         * @exports CDemoConsoleCmd
         * @classdesc Represents a CDemoConsoleCmd.
         * @implements ICDemoConsoleCmd
         * @constructor
         * @param {ICDemoConsoleCmd=} [properties] Properties to set
         */
        function CDemoConsoleCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoConsoleCmd cmdstring.
         * @member {string} cmdstring
         * @memberof CDemoConsoleCmd
         * @instance
         */
        CDemoConsoleCmd.prototype.cmdstring = "";
    
        /**
         * Creates a new CDemoConsoleCmd instance using the specified properties.
         * @function create
         * @memberof CDemoConsoleCmd
         * @static
         * @param {ICDemoConsoleCmd=} [properties] Properties to set
         * @returns {CDemoConsoleCmd} CDemoConsoleCmd instance
         */
        CDemoConsoleCmd.create = function create(properties) {
            return new CDemoConsoleCmd(properties);
        };
    
        /**
         * Encodes the specified CDemoConsoleCmd message. Does not implicitly {@link CDemoConsoleCmd.verify|verify} messages.
         * @function encode
         * @memberof CDemoConsoleCmd
         * @static
         * @param {ICDemoConsoleCmd} message CDemoConsoleCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoConsoleCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmdstring != null && Object.hasOwnProperty.call(message, "cmdstring"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cmdstring);
            return writer;
        };
    
        /**
         * Encodes the specified CDemoConsoleCmd message, length delimited. Does not implicitly {@link CDemoConsoleCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoConsoleCmd
         * @static
         * @param {ICDemoConsoleCmd} message CDemoConsoleCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoConsoleCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoConsoleCmd message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoConsoleCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoConsoleCmd} CDemoConsoleCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoConsoleCmd.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoConsoleCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.cmdstring = reader.string();
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
         * Decodes a CDemoConsoleCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoConsoleCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoConsoleCmd} CDemoConsoleCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoConsoleCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoConsoleCmd message.
         * @function verify
         * @memberof CDemoConsoleCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoConsoleCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cmdstring != null && message.hasOwnProperty("cmdstring"))
                if (!$util.isString(message.cmdstring))
                    return "cmdstring: string expected";
            return null;
        };
    
        /**
         * Creates a CDemoConsoleCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoConsoleCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoConsoleCmd} CDemoConsoleCmd
         */
        CDemoConsoleCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoConsoleCmd)
                return object;
            var message = new $root.CDemoConsoleCmd();
            if (object.cmdstring != null)
                message.cmdstring = String(object.cmdstring);
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoConsoleCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoConsoleCmd
         * @static
         * @param {CDemoConsoleCmd} message CDemoConsoleCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoConsoleCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.cmdstring = "";
            if (message.cmdstring != null && message.hasOwnProperty("cmdstring"))
                object.cmdstring = message.cmdstring;
            return object;
        };
    
        /**
         * Converts this CDemoConsoleCmd to JSON.
         * @function toJSON
         * @memberof CDemoConsoleCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoConsoleCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoConsoleCmd
         * @function getTypeUrl
         * @memberof CDemoConsoleCmd
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoConsoleCmd.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoConsoleCmd";
        };
    
        return CDemoConsoleCmd;
    })();
    
    $root.CDemoSendTables = (function() {
    
        /**
         * Properties of a CDemoSendTables.
         * @exports ICDemoSendTables
         * @interface ICDemoSendTables
         * @property {Uint8Array|null} [data] CDemoSendTables data
         */
    
        /**
         * Constructs a new CDemoSendTables.
         * @exports CDemoSendTables
         * @classdesc Represents a CDemoSendTables.
         * @implements ICDemoSendTables
         * @constructor
         * @param {ICDemoSendTables=} [properties] Properties to set
         */
        function CDemoSendTables(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoSendTables data.
         * @member {Uint8Array} data
         * @memberof CDemoSendTables
         * @instance
         */
        CDemoSendTables.prototype.data = $util.newBuffer([]);
    
        /**
         * Creates a new CDemoSendTables instance using the specified properties.
         * @function create
         * @memberof CDemoSendTables
         * @static
         * @param {ICDemoSendTables=} [properties] Properties to set
         * @returns {CDemoSendTables} CDemoSendTables instance
         */
        CDemoSendTables.create = function create(properties) {
            return new CDemoSendTables(properties);
        };
    
        /**
         * Encodes the specified CDemoSendTables message. Does not implicitly {@link CDemoSendTables.verify|verify} messages.
         * @function encode
         * @memberof CDemoSendTables
         * @static
         * @param {ICDemoSendTables} message CDemoSendTables message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoSendTables.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
            return writer;
        };
    
        /**
         * Encodes the specified CDemoSendTables message, length delimited. Does not implicitly {@link CDemoSendTables.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoSendTables
         * @static
         * @param {ICDemoSendTables} message CDemoSendTables message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoSendTables.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoSendTables message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoSendTables
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoSendTables} CDemoSendTables
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoSendTables.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoSendTables();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
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
         * Decodes a CDemoSendTables message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoSendTables
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoSendTables} CDemoSendTables
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoSendTables.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoSendTables message.
         * @function verify
         * @memberof CDemoSendTables
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoSendTables.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };
    
        /**
         * Creates a CDemoSendTables message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoSendTables
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoSendTables} CDemoSendTables
         */
        CDemoSendTables.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoSendTables)
                return object;
            var message = new $root.CDemoSendTables();
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoSendTables message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoSendTables
         * @static
         * @param {CDemoSendTables} message CDemoSendTables
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoSendTables.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };
    
        /**
         * Converts this CDemoSendTables to JSON.
         * @function toJSON
         * @memberof CDemoSendTables
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoSendTables.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoSendTables
         * @function getTypeUrl
         * @memberof CDemoSendTables
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoSendTables.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoSendTables";
        };
    
        return CDemoSendTables;
    })();
    
    $root.CDemoClassInfo = (function() {
    
        /**
         * Properties of a CDemoClassInfo.
         * @exports ICDemoClassInfo
         * @interface ICDemoClassInfo
         * @property {Array.<CDemoClassInfo.Iclass_t>|null} [classes] CDemoClassInfo classes
         */
    
        /**
         * Constructs a new CDemoClassInfo.
         * @exports CDemoClassInfo
         * @classdesc Represents a CDemoClassInfo.
         * @implements ICDemoClassInfo
         * @constructor
         * @param {ICDemoClassInfo=} [properties] Properties to set
         */
        function CDemoClassInfo(properties) {
            this.classes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoClassInfo classes.
         * @member {Array.<CDemoClassInfo.Iclass_t>} classes
         * @memberof CDemoClassInfo
         * @instance
         */
        CDemoClassInfo.prototype.classes = $util.emptyArray;
    
        /**
         * Creates a new CDemoClassInfo instance using the specified properties.
         * @function create
         * @memberof CDemoClassInfo
         * @static
         * @param {ICDemoClassInfo=} [properties] Properties to set
         * @returns {CDemoClassInfo} CDemoClassInfo instance
         */
        CDemoClassInfo.create = function create(properties) {
            return new CDemoClassInfo(properties);
        };
    
        /**
         * Encodes the specified CDemoClassInfo message. Does not implicitly {@link CDemoClassInfo.verify|verify} messages.
         * @function encode
         * @memberof CDemoClassInfo
         * @static
         * @param {ICDemoClassInfo} message CDemoClassInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoClassInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.classes != null && message.classes.length)
                for (var i = 0; i < message.classes.length; ++i)
                    $root.CDemoClassInfo.class_t.encode(message.classes[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CDemoClassInfo message, length delimited. Does not implicitly {@link CDemoClassInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoClassInfo
         * @static
         * @param {ICDemoClassInfo} message CDemoClassInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoClassInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoClassInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoClassInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoClassInfo} CDemoClassInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoClassInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoClassInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.classes && message.classes.length))
                            message.classes = [];
                        message.classes.push($root.CDemoClassInfo.class_t.decode(reader, reader.uint32()));
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
         * Decodes a CDemoClassInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoClassInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoClassInfo} CDemoClassInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoClassInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoClassInfo message.
         * @function verify
         * @memberof CDemoClassInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoClassInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.classes != null && message.hasOwnProperty("classes")) {
                if (!Array.isArray(message.classes))
                    return "classes: array expected";
                for (var i = 0; i < message.classes.length; ++i) {
                    var error = $root.CDemoClassInfo.class_t.verify(message.classes[i]);
                    if (error)
                        return "classes." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CDemoClassInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoClassInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoClassInfo} CDemoClassInfo
         */
        CDemoClassInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoClassInfo)
                return object;
            var message = new $root.CDemoClassInfo();
            if (object.classes) {
                if (!Array.isArray(object.classes))
                    throw TypeError(".CDemoClassInfo.classes: array expected");
                message.classes = [];
                for (var i = 0; i < object.classes.length; ++i) {
                    if (typeof object.classes[i] !== "object")
                        throw TypeError(".CDemoClassInfo.classes: object expected");
                    message.classes[i] = $root.CDemoClassInfo.class_t.fromObject(object.classes[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoClassInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoClassInfo
         * @static
         * @param {CDemoClassInfo} message CDemoClassInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoClassInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.classes = [];
            if (message.classes && message.classes.length) {
                object.classes = [];
                for (var j = 0; j < message.classes.length; ++j)
                    object.classes[j] = $root.CDemoClassInfo.class_t.toObject(message.classes[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CDemoClassInfo to JSON.
         * @function toJSON
         * @memberof CDemoClassInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoClassInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoClassInfo
         * @function getTypeUrl
         * @memberof CDemoClassInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoClassInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoClassInfo";
        };
    
        CDemoClassInfo.class_t = (function() {
    
            /**
             * Properties of a class_t.
             * @memberof CDemoClassInfo
             * @interface Iclass_t
             * @property {number|null} [class_id] class_t class_id
             * @property {string|null} [network_name] class_t network_name
             * @property {string|null} [table_name] class_t table_name
             */
    
            /**
             * Constructs a new class_t.
             * @memberof CDemoClassInfo
             * @classdesc Represents a class_t.
             * @implements Iclass_t
             * @constructor
             * @param {CDemoClassInfo.Iclass_t=} [properties] Properties to set
             */
            function class_t(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * class_t class_id.
             * @member {number} class_id
             * @memberof CDemoClassInfo.class_t
             * @instance
             */
            class_t.prototype.class_id = 0;
    
            /**
             * class_t network_name.
             * @member {string} network_name
             * @memberof CDemoClassInfo.class_t
             * @instance
             */
            class_t.prototype.network_name = "";
    
            /**
             * class_t table_name.
             * @member {string} table_name
             * @memberof CDemoClassInfo.class_t
             * @instance
             */
            class_t.prototype.table_name = "";
    
            /**
             * Creates a new class_t instance using the specified properties.
             * @function create
             * @memberof CDemoClassInfo.class_t
             * @static
             * @param {CDemoClassInfo.Iclass_t=} [properties] Properties to set
             * @returns {CDemoClassInfo.class_t} class_t instance
             */
            class_t.create = function create(properties) {
                return new class_t(properties);
            };
    
            /**
             * Encodes the specified class_t message. Does not implicitly {@link CDemoClassInfo.class_t.verify|verify} messages.
             * @function encode
             * @memberof CDemoClassInfo.class_t
             * @static
             * @param {CDemoClassInfo.Iclass_t} message class_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            class_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.class_id != null && Object.hasOwnProperty.call(message, "class_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.class_id);
                if (message.network_name != null && Object.hasOwnProperty.call(message, "network_name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.network_name);
                if (message.table_name != null && Object.hasOwnProperty.call(message, "table_name"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.table_name);
                return writer;
            };
    
            /**
             * Encodes the specified class_t message, length delimited. Does not implicitly {@link CDemoClassInfo.class_t.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CDemoClassInfo.class_t
             * @static
             * @param {CDemoClassInfo.Iclass_t} message class_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            class_t.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a class_t message from the specified reader or buffer.
             * @function decode
             * @memberof CDemoClassInfo.class_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CDemoClassInfo.class_t} class_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            class_t.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoClassInfo.class_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.class_id = reader.int32();
                            break;
                        }
                    case 2: {
                            message.network_name = reader.string();
                            break;
                        }
                    case 3: {
                            message.table_name = reader.string();
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
             * Decodes a class_t message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CDemoClassInfo.class_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CDemoClassInfo.class_t} class_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            class_t.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a class_t message.
             * @function verify
             * @memberof CDemoClassInfo.class_t
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            class_t.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.class_id != null && message.hasOwnProperty("class_id"))
                    if (!$util.isInteger(message.class_id))
                        return "class_id: integer expected";
                if (message.network_name != null && message.hasOwnProperty("network_name"))
                    if (!$util.isString(message.network_name))
                        return "network_name: string expected";
                if (message.table_name != null && message.hasOwnProperty("table_name"))
                    if (!$util.isString(message.table_name))
                        return "table_name: string expected";
                return null;
            };
    
            /**
             * Creates a class_t message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CDemoClassInfo.class_t
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CDemoClassInfo.class_t} class_t
             */
            class_t.fromObject = function fromObject(object) {
                if (object instanceof $root.CDemoClassInfo.class_t)
                    return object;
                var message = new $root.CDemoClassInfo.class_t();
                if (object.class_id != null)
                    message.class_id = object.class_id | 0;
                if (object.network_name != null)
                    message.network_name = String(object.network_name);
                if (object.table_name != null)
                    message.table_name = String(object.table_name);
                return message;
            };
    
            /**
             * Creates a plain object from a class_t message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CDemoClassInfo.class_t
             * @static
             * @param {CDemoClassInfo.class_t} message class_t
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            class_t.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.class_id = 0;
                    object.network_name = "";
                    object.table_name = "";
                }
                if (message.class_id != null && message.hasOwnProperty("class_id"))
                    object.class_id = message.class_id;
                if (message.network_name != null && message.hasOwnProperty("network_name"))
                    object.network_name = message.network_name;
                if (message.table_name != null && message.hasOwnProperty("table_name"))
                    object.table_name = message.table_name;
                return object;
            };
    
            /**
             * Converts this class_t to JSON.
             * @function toJSON
             * @memberof CDemoClassInfo.class_t
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            class_t.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for class_t
             * @function getTypeUrl
             * @memberof CDemoClassInfo.class_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            class_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CDemoClassInfo.class_t";
            };
    
            return class_t;
        })();
    
        return CDemoClassInfo;
    })();
    
    $root.CDemoCustomData = (function() {
    
        /**
         * Properties of a CDemoCustomData.
         * @exports ICDemoCustomData
         * @interface ICDemoCustomData
         * @property {number|null} [callback_index] CDemoCustomData callback_index
         * @property {Uint8Array|null} [data] CDemoCustomData data
         */
    
        /**
         * Constructs a new CDemoCustomData.
         * @exports CDemoCustomData
         * @classdesc Represents a CDemoCustomData.
         * @implements ICDemoCustomData
         * @constructor
         * @param {ICDemoCustomData=} [properties] Properties to set
         */
        function CDemoCustomData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoCustomData callback_index.
         * @member {number} callback_index
         * @memberof CDemoCustomData
         * @instance
         */
        CDemoCustomData.prototype.callback_index = 0;
    
        /**
         * CDemoCustomData data.
         * @member {Uint8Array} data
         * @memberof CDemoCustomData
         * @instance
         */
        CDemoCustomData.prototype.data = $util.newBuffer([]);
    
        /**
         * Creates a new CDemoCustomData instance using the specified properties.
         * @function create
         * @memberof CDemoCustomData
         * @static
         * @param {ICDemoCustomData=} [properties] Properties to set
         * @returns {CDemoCustomData} CDemoCustomData instance
         */
        CDemoCustomData.create = function create(properties) {
            return new CDemoCustomData(properties);
        };
    
        /**
         * Encodes the specified CDemoCustomData message. Does not implicitly {@link CDemoCustomData.verify|verify} messages.
         * @function encode
         * @memberof CDemoCustomData
         * @static
         * @param {ICDemoCustomData} message CDemoCustomData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoCustomData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.callback_index != null && Object.hasOwnProperty.call(message, "callback_index"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.callback_index);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            return writer;
        };
    
        /**
         * Encodes the specified CDemoCustomData message, length delimited. Does not implicitly {@link CDemoCustomData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoCustomData
         * @static
         * @param {ICDemoCustomData} message CDemoCustomData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoCustomData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoCustomData message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoCustomData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoCustomData} CDemoCustomData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoCustomData.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoCustomData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.callback_index = reader.int32();
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
         * Decodes a CDemoCustomData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoCustomData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoCustomData} CDemoCustomData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoCustomData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoCustomData message.
         * @function verify
         * @memberof CDemoCustomData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoCustomData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.callback_index != null && message.hasOwnProperty("callback_index"))
                if (!$util.isInteger(message.callback_index))
                    return "callback_index: integer expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };
    
        /**
         * Creates a CDemoCustomData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoCustomData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoCustomData} CDemoCustomData
         */
        CDemoCustomData.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoCustomData)
                return object;
            var message = new $root.CDemoCustomData();
            if (object.callback_index != null)
                message.callback_index = object.callback_index | 0;
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoCustomData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoCustomData
         * @static
         * @param {CDemoCustomData} message CDemoCustomData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoCustomData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.callback_index = 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.callback_index != null && message.hasOwnProperty("callback_index"))
                object.callback_index = message.callback_index;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };
    
        /**
         * Converts this CDemoCustomData to JSON.
         * @function toJSON
         * @memberof CDemoCustomData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoCustomData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoCustomData
         * @function getTypeUrl
         * @memberof CDemoCustomData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoCustomData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoCustomData";
        };
    
        return CDemoCustomData;
    })();
    
    $root.CDemoCustomDataCallbacks = (function() {
    
        /**
         * Properties of a CDemoCustomDataCallbacks.
         * @exports ICDemoCustomDataCallbacks
         * @interface ICDemoCustomDataCallbacks
         * @property {Array.<string>|null} [save_id] CDemoCustomDataCallbacks save_id
         */
    
        /**
         * Constructs a new CDemoCustomDataCallbacks.
         * @exports CDemoCustomDataCallbacks
         * @classdesc Represents a CDemoCustomDataCallbacks.
         * @implements ICDemoCustomDataCallbacks
         * @constructor
         * @param {ICDemoCustomDataCallbacks=} [properties] Properties to set
         */
        function CDemoCustomDataCallbacks(properties) {
            this.save_id = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoCustomDataCallbacks save_id.
         * @member {Array.<string>} save_id
         * @memberof CDemoCustomDataCallbacks
         * @instance
         */
        CDemoCustomDataCallbacks.prototype.save_id = $util.emptyArray;
    
        /**
         * Creates a new CDemoCustomDataCallbacks instance using the specified properties.
         * @function create
         * @memberof CDemoCustomDataCallbacks
         * @static
         * @param {ICDemoCustomDataCallbacks=} [properties] Properties to set
         * @returns {CDemoCustomDataCallbacks} CDemoCustomDataCallbacks instance
         */
        CDemoCustomDataCallbacks.create = function create(properties) {
            return new CDemoCustomDataCallbacks(properties);
        };
    
        /**
         * Encodes the specified CDemoCustomDataCallbacks message. Does not implicitly {@link CDemoCustomDataCallbacks.verify|verify} messages.
         * @function encode
         * @memberof CDemoCustomDataCallbacks
         * @static
         * @param {ICDemoCustomDataCallbacks} message CDemoCustomDataCallbacks message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoCustomDataCallbacks.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.save_id != null && message.save_id.length)
                for (var i = 0; i < message.save_id.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.save_id[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CDemoCustomDataCallbacks message, length delimited. Does not implicitly {@link CDemoCustomDataCallbacks.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoCustomDataCallbacks
         * @static
         * @param {ICDemoCustomDataCallbacks} message CDemoCustomDataCallbacks message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoCustomDataCallbacks.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoCustomDataCallbacks message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoCustomDataCallbacks
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoCustomDataCallbacks} CDemoCustomDataCallbacks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoCustomDataCallbacks.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoCustomDataCallbacks();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.save_id && message.save_id.length))
                            message.save_id = [];
                        message.save_id.push(reader.string());
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
         * Decodes a CDemoCustomDataCallbacks message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoCustomDataCallbacks
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoCustomDataCallbacks} CDemoCustomDataCallbacks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoCustomDataCallbacks.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoCustomDataCallbacks message.
         * @function verify
         * @memberof CDemoCustomDataCallbacks
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoCustomDataCallbacks.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.save_id != null && message.hasOwnProperty("save_id")) {
                if (!Array.isArray(message.save_id))
                    return "save_id: array expected";
                for (var i = 0; i < message.save_id.length; ++i)
                    if (!$util.isString(message.save_id[i]))
                        return "save_id: string[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CDemoCustomDataCallbacks message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoCustomDataCallbacks
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoCustomDataCallbacks} CDemoCustomDataCallbacks
         */
        CDemoCustomDataCallbacks.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoCustomDataCallbacks)
                return object;
            var message = new $root.CDemoCustomDataCallbacks();
            if (object.save_id) {
                if (!Array.isArray(object.save_id))
                    throw TypeError(".CDemoCustomDataCallbacks.save_id: array expected");
                message.save_id = [];
                for (var i = 0; i < object.save_id.length; ++i)
                    message.save_id[i] = String(object.save_id[i]);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoCustomDataCallbacks message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoCustomDataCallbacks
         * @static
         * @param {CDemoCustomDataCallbacks} message CDemoCustomDataCallbacks
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoCustomDataCallbacks.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.save_id = [];
            if (message.save_id && message.save_id.length) {
                object.save_id = [];
                for (var j = 0; j < message.save_id.length; ++j)
                    object.save_id[j] = message.save_id[j];
            }
            return object;
        };
    
        /**
         * Converts this CDemoCustomDataCallbacks to JSON.
         * @function toJSON
         * @memberof CDemoCustomDataCallbacks
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoCustomDataCallbacks.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoCustomDataCallbacks
         * @function getTypeUrl
         * @memberof CDemoCustomDataCallbacks
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoCustomDataCallbacks.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoCustomDataCallbacks";
        };
    
        return CDemoCustomDataCallbacks;
    })();
    
    $root.CDemoAnimationHeader = (function() {
    
        /**
         * Properties of a CDemoAnimationHeader.
         * @exports ICDemoAnimationHeader
         * @interface ICDemoAnimationHeader
         * @property {number|null} [entity_id] CDemoAnimationHeader entity_id
         * @property {number|null} [tick] CDemoAnimationHeader tick
         * @property {Uint8Array|null} [data] CDemoAnimationHeader data
         */
    
        /**
         * Constructs a new CDemoAnimationHeader.
         * @exports CDemoAnimationHeader
         * @classdesc Represents a CDemoAnimationHeader.
         * @implements ICDemoAnimationHeader
         * @constructor
         * @param {ICDemoAnimationHeader=} [properties] Properties to set
         */
        function CDemoAnimationHeader(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoAnimationHeader entity_id.
         * @member {number} entity_id
         * @memberof CDemoAnimationHeader
         * @instance
         */
        CDemoAnimationHeader.prototype.entity_id = 0;
    
        /**
         * CDemoAnimationHeader tick.
         * @member {number} tick
         * @memberof CDemoAnimationHeader
         * @instance
         */
        CDemoAnimationHeader.prototype.tick = 0;
    
        /**
         * CDemoAnimationHeader data.
         * @member {Uint8Array} data
         * @memberof CDemoAnimationHeader
         * @instance
         */
        CDemoAnimationHeader.prototype.data = $util.newBuffer([]);
    
        /**
         * Creates a new CDemoAnimationHeader instance using the specified properties.
         * @function create
         * @memberof CDemoAnimationHeader
         * @static
         * @param {ICDemoAnimationHeader=} [properties] Properties to set
         * @returns {CDemoAnimationHeader} CDemoAnimationHeader instance
         */
        CDemoAnimationHeader.create = function create(properties) {
            return new CDemoAnimationHeader(properties);
        };
    
        /**
         * Encodes the specified CDemoAnimationHeader message. Does not implicitly {@link CDemoAnimationHeader.verify|verify} messages.
         * @function encode
         * @memberof CDemoAnimationHeader
         * @static
         * @param {ICDemoAnimationHeader} message CDemoAnimationHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoAnimationHeader.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.entity_id != null && Object.hasOwnProperty.call(message, "entity_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.entity_id);
            if (message.tick != null && Object.hasOwnProperty.call(message, "tick"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.tick);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
            return writer;
        };
    
        /**
         * Encodes the specified CDemoAnimationHeader message, length delimited. Does not implicitly {@link CDemoAnimationHeader.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoAnimationHeader
         * @static
         * @param {ICDemoAnimationHeader} message CDemoAnimationHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoAnimationHeader.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoAnimationHeader message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoAnimationHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoAnimationHeader} CDemoAnimationHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoAnimationHeader.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoAnimationHeader();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.entity_id = reader.sint32();
                        break;
                    }
                case 2: {
                        message.tick = reader.int32();
                        break;
                    }
                case 3: {
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
         * Decodes a CDemoAnimationHeader message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoAnimationHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoAnimationHeader} CDemoAnimationHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoAnimationHeader.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoAnimationHeader message.
         * @function verify
         * @memberof CDemoAnimationHeader
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoAnimationHeader.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.entity_id != null && message.hasOwnProperty("entity_id"))
                if (!$util.isInteger(message.entity_id))
                    return "entity_id: integer expected";
            if (message.tick != null && message.hasOwnProperty("tick"))
                if (!$util.isInteger(message.tick))
                    return "tick: integer expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };
    
        /**
         * Creates a CDemoAnimationHeader message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoAnimationHeader
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoAnimationHeader} CDemoAnimationHeader
         */
        CDemoAnimationHeader.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoAnimationHeader)
                return object;
            var message = new $root.CDemoAnimationHeader();
            if (object.entity_id != null)
                message.entity_id = object.entity_id | 0;
            if (object.tick != null)
                message.tick = object.tick | 0;
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoAnimationHeader message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoAnimationHeader
         * @static
         * @param {CDemoAnimationHeader} message CDemoAnimationHeader
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoAnimationHeader.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.entity_id = 0;
                object.tick = 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.entity_id != null && message.hasOwnProperty("entity_id"))
                object.entity_id = message.entity_id;
            if (message.tick != null && message.hasOwnProperty("tick"))
                object.tick = message.tick;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };
    
        /**
         * Converts this CDemoAnimationHeader to JSON.
         * @function toJSON
         * @memberof CDemoAnimationHeader
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoAnimationHeader.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoAnimationHeader
         * @function getTypeUrl
         * @memberof CDemoAnimationHeader
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoAnimationHeader.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoAnimationHeader";
        };
    
        return CDemoAnimationHeader;
    })();
    
    $root.CDemoAnimationData = (function() {
    
        /**
         * Properties of a CDemoAnimationData.
         * @exports ICDemoAnimationData
         * @interface ICDemoAnimationData
         * @property {number|null} [entity_id] CDemoAnimationData entity_id
         * @property {number|null} [start_tick] CDemoAnimationData start_tick
         * @property {number|null} [end_tick] CDemoAnimationData end_tick
         * @property {Uint8Array|null} [data] CDemoAnimationData data
         * @property {number|Long|null} [data_checksum] CDemoAnimationData data_checksum
         */
    
        /**
         * Constructs a new CDemoAnimationData.
         * @exports CDemoAnimationData
         * @classdesc Represents a CDemoAnimationData.
         * @implements ICDemoAnimationData
         * @constructor
         * @param {ICDemoAnimationData=} [properties] Properties to set
         */
        function CDemoAnimationData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoAnimationData entity_id.
         * @member {number} entity_id
         * @memberof CDemoAnimationData
         * @instance
         */
        CDemoAnimationData.prototype.entity_id = 0;
    
        /**
         * CDemoAnimationData start_tick.
         * @member {number} start_tick
         * @memberof CDemoAnimationData
         * @instance
         */
        CDemoAnimationData.prototype.start_tick = 0;
    
        /**
         * CDemoAnimationData end_tick.
         * @member {number} end_tick
         * @memberof CDemoAnimationData
         * @instance
         */
        CDemoAnimationData.prototype.end_tick = 0;
    
        /**
         * CDemoAnimationData data.
         * @member {Uint8Array} data
         * @memberof CDemoAnimationData
         * @instance
         */
        CDemoAnimationData.prototype.data = $util.newBuffer([]);
    
        /**
         * CDemoAnimationData data_checksum.
         * @member {number|Long} data_checksum
         * @memberof CDemoAnimationData
         * @instance
         */
        CDemoAnimationData.prototype.data_checksum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CDemoAnimationData instance using the specified properties.
         * @function create
         * @memberof CDemoAnimationData
         * @static
         * @param {ICDemoAnimationData=} [properties] Properties to set
         * @returns {CDemoAnimationData} CDemoAnimationData instance
         */
        CDemoAnimationData.create = function create(properties) {
            return new CDemoAnimationData(properties);
        };
    
        /**
         * Encodes the specified CDemoAnimationData message. Does not implicitly {@link CDemoAnimationData.verify|verify} messages.
         * @function encode
         * @memberof CDemoAnimationData
         * @static
         * @param {ICDemoAnimationData} message CDemoAnimationData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoAnimationData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.entity_id != null && Object.hasOwnProperty.call(message, "entity_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.entity_id);
            if (message.start_tick != null && Object.hasOwnProperty.call(message, "start_tick"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.start_tick);
            if (message.end_tick != null && Object.hasOwnProperty.call(message, "end_tick"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.end_tick);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.data);
            if (message.data_checksum != null && Object.hasOwnProperty.call(message, "data_checksum"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.data_checksum);
            return writer;
        };
    
        /**
         * Encodes the specified CDemoAnimationData message, length delimited. Does not implicitly {@link CDemoAnimationData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoAnimationData
         * @static
         * @param {ICDemoAnimationData} message CDemoAnimationData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoAnimationData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoAnimationData message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoAnimationData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoAnimationData} CDemoAnimationData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoAnimationData.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoAnimationData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.entity_id = reader.sint32();
                        break;
                    }
                case 2: {
                        message.start_tick = reader.int32();
                        break;
                    }
                case 3: {
                        message.end_tick = reader.int32();
                        break;
                    }
                case 4: {
                        message.data = reader.bytes();
                        break;
                    }
                case 5: {
                        message.data_checksum = reader.int64();
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
         * Decodes a CDemoAnimationData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoAnimationData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoAnimationData} CDemoAnimationData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoAnimationData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoAnimationData message.
         * @function verify
         * @memberof CDemoAnimationData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoAnimationData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.entity_id != null && message.hasOwnProperty("entity_id"))
                if (!$util.isInteger(message.entity_id))
                    return "entity_id: integer expected";
            if (message.start_tick != null && message.hasOwnProperty("start_tick"))
                if (!$util.isInteger(message.start_tick))
                    return "start_tick: integer expected";
            if (message.end_tick != null && message.hasOwnProperty("end_tick"))
                if (!$util.isInteger(message.end_tick))
                    return "end_tick: integer expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.data_checksum != null && message.hasOwnProperty("data_checksum"))
                if (!$util.isInteger(message.data_checksum) && !(message.data_checksum && $util.isInteger(message.data_checksum.low) && $util.isInteger(message.data_checksum.high)))
                    return "data_checksum: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CDemoAnimationData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoAnimationData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoAnimationData} CDemoAnimationData
         */
        CDemoAnimationData.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoAnimationData)
                return object;
            var message = new $root.CDemoAnimationData();
            if (object.entity_id != null)
                message.entity_id = object.entity_id | 0;
            if (object.start_tick != null)
                message.start_tick = object.start_tick | 0;
            if (object.end_tick != null)
                message.end_tick = object.end_tick | 0;
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            if (object.data_checksum != null)
                if ($util.Long)
                    (message.data_checksum = $util.Long.fromValue(object.data_checksum)).unsigned = false;
                else if (typeof object.data_checksum === "string")
                    message.data_checksum = parseInt(object.data_checksum, 10);
                else if (typeof object.data_checksum === "number")
                    message.data_checksum = object.data_checksum;
                else if (typeof object.data_checksum === "object")
                    message.data_checksum = new $util.LongBits(object.data_checksum.low >>> 0, object.data_checksum.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoAnimationData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoAnimationData
         * @static
         * @param {CDemoAnimationData} message CDemoAnimationData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoAnimationData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.entity_id = 0;
                object.start_tick = 0;
                object.end_tick = 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.data_checksum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.data_checksum = options.longs === String ? "0" : 0;
            }
            if (message.entity_id != null && message.hasOwnProperty("entity_id"))
                object.entity_id = message.entity_id;
            if (message.start_tick != null && message.hasOwnProperty("start_tick"))
                object.start_tick = message.start_tick;
            if (message.end_tick != null && message.hasOwnProperty("end_tick"))
                object.end_tick = message.end_tick;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.data_checksum != null && message.hasOwnProperty("data_checksum"))
                if (typeof message.data_checksum === "number")
                    object.data_checksum = options.longs === String ? String(message.data_checksum) : message.data_checksum;
                else
                    object.data_checksum = options.longs === String ? $util.Long.prototype.toString.call(message.data_checksum) : options.longs === Number ? new $util.LongBits(message.data_checksum.low >>> 0, message.data_checksum.high >>> 0).toNumber() : message.data_checksum;
            return object;
        };
    
        /**
         * Converts this CDemoAnimationData to JSON.
         * @function toJSON
         * @memberof CDemoAnimationData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoAnimationData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoAnimationData
         * @function getTypeUrl
         * @memberof CDemoAnimationData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoAnimationData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoAnimationData";
        };
    
        return CDemoAnimationData;
    })();
    
    $root.CDemoStringTables = (function() {
    
        /**
         * Properties of a CDemoStringTables.
         * @exports ICDemoStringTables
         * @interface ICDemoStringTables
         * @property {Array.<CDemoStringTables.Itable_t>|null} [tables] CDemoStringTables tables
         */
    
        /**
         * Constructs a new CDemoStringTables.
         * @exports CDemoStringTables
         * @classdesc Represents a CDemoStringTables.
         * @implements ICDemoStringTables
         * @constructor
         * @param {ICDemoStringTables=} [properties] Properties to set
         */
        function CDemoStringTables(properties) {
            this.tables = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoStringTables tables.
         * @member {Array.<CDemoStringTables.Itable_t>} tables
         * @memberof CDemoStringTables
         * @instance
         */
        CDemoStringTables.prototype.tables = $util.emptyArray;
    
        /**
         * Creates a new CDemoStringTables instance using the specified properties.
         * @function create
         * @memberof CDemoStringTables
         * @static
         * @param {ICDemoStringTables=} [properties] Properties to set
         * @returns {CDemoStringTables} CDemoStringTables instance
         */
        CDemoStringTables.create = function create(properties) {
            return new CDemoStringTables(properties);
        };
    
        /**
         * Encodes the specified CDemoStringTables message. Does not implicitly {@link CDemoStringTables.verify|verify} messages.
         * @function encode
         * @memberof CDemoStringTables
         * @static
         * @param {ICDemoStringTables} message CDemoStringTables message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoStringTables.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tables != null && message.tables.length)
                for (var i = 0; i < message.tables.length; ++i)
                    $root.CDemoStringTables.table_t.encode(message.tables[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CDemoStringTables message, length delimited. Does not implicitly {@link CDemoStringTables.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoStringTables
         * @static
         * @param {ICDemoStringTables} message CDemoStringTables message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoStringTables.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoStringTables message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoStringTables
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoStringTables} CDemoStringTables
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoStringTables.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoStringTables();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.tables && message.tables.length))
                            message.tables = [];
                        message.tables.push($root.CDemoStringTables.table_t.decode(reader, reader.uint32()));
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
         * Decodes a CDemoStringTables message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoStringTables
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoStringTables} CDemoStringTables
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoStringTables.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoStringTables message.
         * @function verify
         * @memberof CDemoStringTables
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoStringTables.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tables != null && message.hasOwnProperty("tables")) {
                if (!Array.isArray(message.tables))
                    return "tables: array expected";
                for (var i = 0; i < message.tables.length; ++i) {
                    var error = $root.CDemoStringTables.table_t.verify(message.tables[i]);
                    if (error)
                        return "tables." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CDemoStringTables message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoStringTables
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoStringTables} CDemoStringTables
         */
        CDemoStringTables.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoStringTables)
                return object;
            var message = new $root.CDemoStringTables();
            if (object.tables) {
                if (!Array.isArray(object.tables))
                    throw TypeError(".CDemoStringTables.tables: array expected");
                message.tables = [];
                for (var i = 0; i < object.tables.length; ++i) {
                    if (typeof object.tables[i] !== "object")
                        throw TypeError(".CDemoStringTables.tables: object expected");
                    message.tables[i] = $root.CDemoStringTables.table_t.fromObject(object.tables[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoStringTables message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoStringTables
         * @static
         * @param {CDemoStringTables} message CDemoStringTables
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoStringTables.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tables = [];
            if (message.tables && message.tables.length) {
                object.tables = [];
                for (var j = 0; j < message.tables.length; ++j)
                    object.tables[j] = $root.CDemoStringTables.table_t.toObject(message.tables[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CDemoStringTables to JSON.
         * @function toJSON
         * @memberof CDemoStringTables
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoStringTables.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoStringTables
         * @function getTypeUrl
         * @memberof CDemoStringTables
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoStringTables.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoStringTables";
        };
    
        CDemoStringTables.items_t = (function() {
    
            /**
             * Properties of an items_t.
             * @memberof CDemoStringTables
             * @interface Iitems_t
             * @property {string|null} [str] items_t str
             * @property {Uint8Array|null} [data] items_t data
             */
    
            /**
             * Constructs a new items_t.
             * @memberof CDemoStringTables
             * @classdesc Represents an items_t.
             * @implements Iitems_t
             * @constructor
             * @param {CDemoStringTables.Iitems_t=} [properties] Properties to set
             */
            function items_t(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * items_t str.
             * @member {string} str
             * @memberof CDemoStringTables.items_t
             * @instance
             */
            items_t.prototype.str = "";
    
            /**
             * items_t data.
             * @member {Uint8Array} data
             * @memberof CDemoStringTables.items_t
             * @instance
             */
            items_t.prototype.data = $util.newBuffer([]);
    
            /**
             * Creates a new items_t instance using the specified properties.
             * @function create
             * @memberof CDemoStringTables.items_t
             * @static
             * @param {CDemoStringTables.Iitems_t=} [properties] Properties to set
             * @returns {CDemoStringTables.items_t} items_t instance
             */
            items_t.create = function create(properties) {
                return new items_t(properties);
            };
    
            /**
             * Encodes the specified items_t message. Does not implicitly {@link CDemoStringTables.items_t.verify|verify} messages.
             * @function encode
             * @memberof CDemoStringTables.items_t
             * @static
             * @param {CDemoStringTables.Iitems_t} message items_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            items_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.str != null && Object.hasOwnProperty.call(message, "str"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.str);
                if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
                return writer;
            };
    
            /**
             * Encodes the specified items_t message, length delimited. Does not implicitly {@link CDemoStringTables.items_t.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CDemoStringTables.items_t
             * @static
             * @param {CDemoStringTables.Iitems_t} message items_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            items_t.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an items_t message from the specified reader or buffer.
             * @function decode
             * @memberof CDemoStringTables.items_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CDemoStringTables.items_t} items_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            items_t.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoStringTables.items_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.str = reader.string();
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
             * Decodes an items_t message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CDemoStringTables.items_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CDemoStringTables.items_t} items_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            items_t.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an items_t message.
             * @function verify
             * @memberof CDemoStringTables.items_t
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            items_t.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.str != null && message.hasOwnProperty("str"))
                    if (!$util.isString(message.str))
                        return "str: string expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };
    
            /**
             * Creates an items_t message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CDemoStringTables.items_t
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CDemoStringTables.items_t} items_t
             */
            items_t.fromObject = function fromObject(object) {
                if (object instanceof $root.CDemoStringTables.items_t)
                    return object;
                var message = new $root.CDemoStringTables.items_t();
                if (object.str != null)
                    message.str = String(object.str);
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length >= 0)
                        message.data = object.data;
                return message;
            };
    
            /**
             * Creates a plain object from an items_t message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CDemoStringTables.items_t
             * @static
             * @param {CDemoStringTables.items_t} message items_t
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            items_t.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.str = "";
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                }
                if (message.str != null && message.hasOwnProperty("str"))
                    object.str = message.str;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                return object;
            };
    
            /**
             * Converts this items_t to JSON.
             * @function toJSON
             * @memberof CDemoStringTables.items_t
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            items_t.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for items_t
             * @function getTypeUrl
             * @memberof CDemoStringTables.items_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            items_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CDemoStringTables.items_t";
            };
    
            return items_t;
        })();
    
        CDemoStringTables.table_t = (function() {
    
            /**
             * Properties of a table_t.
             * @memberof CDemoStringTables
             * @interface Itable_t
             * @property {string|null} [table_name] table_t table_name
             * @property {Array.<CDemoStringTables.Iitems_t>|null} [items] table_t items
             * @property {Array.<CDemoStringTables.Iitems_t>|null} [items_clientside] table_t items_clientside
             * @property {number|null} [table_flags] table_t table_flags
             */
    
            /**
             * Constructs a new table_t.
             * @memberof CDemoStringTables
             * @classdesc Represents a table_t.
             * @implements Itable_t
             * @constructor
             * @param {CDemoStringTables.Itable_t=} [properties] Properties to set
             */
            function table_t(properties) {
                this.items = [];
                this.items_clientside = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * table_t table_name.
             * @member {string} table_name
             * @memberof CDemoStringTables.table_t
             * @instance
             */
            table_t.prototype.table_name = "";
    
            /**
             * table_t items.
             * @member {Array.<CDemoStringTables.Iitems_t>} items
             * @memberof CDemoStringTables.table_t
             * @instance
             */
            table_t.prototype.items = $util.emptyArray;
    
            /**
             * table_t items_clientside.
             * @member {Array.<CDemoStringTables.Iitems_t>} items_clientside
             * @memberof CDemoStringTables.table_t
             * @instance
             */
            table_t.prototype.items_clientside = $util.emptyArray;
    
            /**
             * table_t table_flags.
             * @member {number} table_flags
             * @memberof CDemoStringTables.table_t
             * @instance
             */
            table_t.prototype.table_flags = 0;
    
            /**
             * Creates a new table_t instance using the specified properties.
             * @function create
             * @memberof CDemoStringTables.table_t
             * @static
             * @param {CDemoStringTables.Itable_t=} [properties] Properties to set
             * @returns {CDemoStringTables.table_t} table_t instance
             */
            table_t.create = function create(properties) {
                return new table_t(properties);
            };
    
            /**
             * Encodes the specified table_t message. Does not implicitly {@link CDemoStringTables.table_t.verify|verify} messages.
             * @function encode
             * @memberof CDemoStringTables.table_t
             * @static
             * @param {CDemoStringTables.Itable_t} message table_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            table_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.table_name != null && Object.hasOwnProperty.call(message, "table_name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.table_name);
                if (message.items != null && message.items.length)
                    for (var i = 0; i < message.items.length; ++i)
                        $root.CDemoStringTables.items_t.encode(message.items[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.items_clientside != null && message.items_clientside.length)
                    for (var i = 0; i < message.items_clientside.length; ++i)
                        $root.CDemoStringTables.items_t.encode(message.items_clientside[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.table_flags != null && Object.hasOwnProperty.call(message, "table_flags"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.table_flags);
                return writer;
            };
    
            /**
             * Encodes the specified table_t message, length delimited. Does not implicitly {@link CDemoStringTables.table_t.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CDemoStringTables.table_t
             * @static
             * @param {CDemoStringTables.Itable_t} message table_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            table_t.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a table_t message from the specified reader or buffer.
             * @function decode
             * @memberof CDemoStringTables.table_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CDemoStringTables.table_t} table_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            table_t.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoStringTables.table_t();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.table_name = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.items && message.items.length))
                                message.items = [];
                            message.items.push($root.CDemoStringTables.items_t.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            if (!(message.items_clientside && message.items_clientside.length))
                                message.items_clientside = [];
                            message.items_clientside.push($root.CDemoStringTables.items_t.decode(reader, reader.uint32()));
                            break;
                        }
                    case 4: {
                            message.table_flags = reader.int32();
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
             * Decodes a table_t message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CDemoStringTables.table_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CDemoStringTables.table_t} table_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            table_t.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a table_t message.
             * @function verify
             * @memberof CDemoStringTables.table_t
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            table_t.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.table_name != null && message.hasOwnProperty("table_name"))
                    if (!$util.isString(message.table_name))
                        return "table_name: string expected";
                if (message.items != null && message.hasOwnProperty("items")) {
                    if (!Array.isArray(message.items))
                        return "items: array expected";
                    for (var i = 0; i < message.items.length; ++i) {
                        var error = $root.CDemoStringTables.items_t.verify(message.items[i]);
                        if (error)
                            return "items." + error;
                    }
                }
                if (message.items_clientside != null && message.hasOwnProperty("items_clientside")) {
                    if (!Array.isArray(message.items_clientside))
                        return "items_clientside: array expected";
                    for (var i = 0; i < message.items_clientside.length; ++i) {
                        var error = $root.CDemoStringTables.items_t.verify(message.items_clientside[i]);
                        if (error)
                            return "items_clientside." + error;
                    }
                }
                if (message.table_flags != null && message.hasOwnProperty("table_flags"))
                    if (!$util.isInteger(message.table_flags))
                        return "table_flags: integer expected";
                return null;
            };
    
            /**
             * Creates a table_t message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CDemoStringTables.table_t
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CDemoStringTables.table_t} table_t
             */
            table_t.fromObject = function fromObject(object) {
                if (object instanceof $root.CDemoStringTables.table_t)
                    return object;
                var message = new $root.CDemoStringTables.table_t();
                if (object.table_name != null)
                    message.table_name = String(object.table_name);
                if (object.items) {
                    if (!Array.isArray(object.items))
                        throw TypeError(".CDemoStringTables.table_t.items: array expected");
                    message.items = [];
                    for (var i = 0; i < object.items.length; ++i) {
                        if (typeof object.items[i] !== "object")
                            throw TypeError(".CDemoStringTables.table_t.items: object expected");
                        message.items[i] = $root.CDemoStringTables.items_t.fromObject(object.items[i]);
                    }
                }
                if (object.items_clientside) {
                    if (!Array.isArray(object.items_clientside))
                        throw TypeError(".CDemoStringTables.table_t.items_clientside: array expected");
                    message.items_clientside = [];
                    for (var i = 0; i < object.items_clientside.length; ++i) {
                        if (typeof object.items_clientside[i] !== "object")
                            throw TypeError(".CDemoStringTables.table_t.items_clientside: object expected");
                        message.items_clientside[i] = $root.CDemoStringTables.items_t.fromObject(object.items_clientside[i]);
                    }
                }
                if (object.table_flags != null)
                    message.table_flags = object.table_flags | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a table_t message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CDemoStringTables.table_t
             * @static
             * @param {CDemoStringTables.table_t} message table_t
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            table_t.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.items = [];
                    object.items_clientside = [];
                }
                if (options.defaults) {
                    object.table_name = "";
                    object.table_flags = 0;
                }
                if (message.table_name != null && message.hasOwnProperty("table_name"))
                    object.table_name = message.table_name;
                if (message.items && message.items.length) {
                    object.items = [];
                    for (var j = 0; j < message.items.length; ++j)
                        object.items[j] = $root.CDemoStringTables.items_t.toObject(message.items[j], options);
                }
                if (message.items_clientside && message.items_clientside.length) {
                    object.items_clientside = [];
                    for (var j = 0; j < message.items_clientside.length; ++j)
                        object.items_clientside[j] = $root.CDemoStringTables.items_t.toObject(message.items_clientside[j], options);
                }
                if (message.table_flags != null && message.hasOwnProperty("table_flags"))
                    object.table_flags = message.table_flags;
                return object;
            };
    
            /**
             * Converts this table_t to JSON.
             * @function toJSON
             * @memberof CDemoStringTables.table_t
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            table_t.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for table_t
             * @function getTypeUrl
             * @memberof CDemoStringTables.table_t
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            table_t.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CDemoStringTables.table_t";
            };
    
            return table_t;
        })();
    
        return CDemoStringTables;
    })();
    
    $root.CDemoStop = (function() {
    
        /**
         * Properties of a CDemoStop.
         * @exports ICDemoStop
         * @interface ICDemoStop
         */
    
        /**
         * Constructs a new CDemoStop.
         * @exports CDemoStop
         * @classdesc Represents a CDemoStop.
         * @implements ICDemoStop
         * @constructor
         * @param {ICDemoStop=} [properties] Properties to set
         */
        function CDemoStop(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CDemoStop instance using the specified properties.
         * @function create
         * @memberof CDemoStop
         * @static
         * @param {ICDemoStop=} [properties] Properties to set
         * @returns {CDemoStop} CDemoStop instance
         */
        CDemoStop.create = function create(properties) {
            return new CDemoStop(properties);
        };
    
        /**
         * Encodes the specified CDemoStop message. Does not implicitly {@link CDemoStop.verify|verify} messages.
         * @function encode
         * @memberof CDemoStop
         * @static
         * @param {ICDemoStop} message CDemoStop message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoStop.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CDemoStop message, length delimited. Does not implicitly {@link CDemoStop.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoStop
         * @static
         * @param {ICDemoStop} message CDemoStop message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoStop.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoStop message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoStop
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoStop} CDemoStop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoStop.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoStop();
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
         * Decodes a CDemoStop message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoStop
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoStop} CDemoStop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoStop.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoStop message.
         * @function verify
         * @memberof CDemoStop
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoStop.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CDemoStop message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoStop
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoStop} CDemoStop
         */
        CDemoStop.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoStop)
                return object;
            return new $root.CDemoStop();
        };
    
        /**
         * Creates a plain object from a CDemoStop message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoStop
         * @static
         * @param {CDemoStop} message CDemoStop
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoStop.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CDemoStop to JSON.
         * @function toJSON
         * @memberof CDemoStop
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoStop.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoStop
         * @function getTypeUrl
         * @memberof CDemoStop
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoStop.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoStop";
        };
    
        return CDemoStop;
    })();
    
    $root.CDemoUserCmd = (function() {
    
        /**
         * Properties of a CDemoUserCmd.
         * @exports ICDemoUserCmd
         * @interface ICDemoUserCmd
         * @property {number|null} [cmd_number] CDemoUserCmd cmd_number
         * @property {Uint8Array|null} [data] CDemoUserCmd data
         */
    
        /**
         * Constructs a new CDemoUserCmd.
         * @exports CDemoUserCmd
         * @classdesc Represents a CDemoUserCmd.
         * @implements ICDemoUserCmd
         * @constructor
         * @param {ICDemoUserCmd=} [properties] Properties to set
         */
        function CDemoUserCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoUserCmd cmd_number.
         * @member {number} cmd_number
         * @memberof CDemoUserCmd
         * @instance
         */
        CDemoUserCmd.prototype.cmd_number = 0;
    
        /**
         * CDemoUserCmd data.
         * @member {Uint8Array} data
         * @memberof CDemoUserCmd
         * @instance
         */
        CDemoUserCmd.prototype.data = $util.newBuffer([]);
    
        /**
         * Creates a new CDemoUserCmd instance using the specified properties.
         * @function create
         * @memberof CDemoUserCmd
         * @static
         * @param {ICDemoUserCmd=} [properties] Properties to set
         * @returns {CDemoUserCmd} CDemoUserCmd instance
         */
        CDemoUserCmd.create = function create(properties) {
            return new CDemoUserCmd(properties);
        };
    
        /**
         * Encodes the specified CDemoUserCmd message. Does not implicitly {@link CDemoUserCmd.verify|verify} messages.
         * @function encode
         * @memberof CDemoUserCmd
         * @static
         * @param {ICDemoUserCmd} message CDemoUserCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoUserCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd_number != null && Object.hasOwnProperty.call(message, "cmd_number"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd_number);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            return writer;
        };
    
        /**
         * Encodes the specified CDemoUserCmd message, length delimited. Does not implicitly {@link CDemoUserCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoUserCmd
         * @static
         * @param {ICDemoUserCmd} message CDemoUserCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoUserCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoUserCmd message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoUserCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoUserCmd} CDemoUserCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoUserCmd.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoUserCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.cmd_number = reader.int32();
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
         * Decodes a CDemoUserCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoUserCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoUserCmd} CDemoUserCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoUserCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoUserCmd message.
         * @function verify
         * @memberof CDemoUserCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoUserCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cmd_number != null && message.hasOwnProperty("cmd_number"))
                if (!$util.isInteger(message.cmd_number))
                    return "cmd_number: integer expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };
    
        /**
         * Creates a CDemoUserCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoUserCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoUserCmd} CDemoUserCmd
         */
        CDemoUserCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoUserCmd)
                return object;
            var message = new $root.CDemoUserCmd();
            if (object.cmd_number != null)
                message.cmd_number = object.cmd_number | 0;
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoUserCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoUserCmd
         * @static
         * @param {CDemoUserCmd} message CDemoUserCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoUserCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cmd_number = 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.cmd_number != null && message.hasOwnProperty("cmd_number"))
                object.cmd_number = message.cmd_number;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };
    
        /**
         * Converts this CDemoUserCmd to JSON.
         * @function toJSON
         * @memberof CDemoUserCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoUserCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoUserCmd
         * @function getTypeUrl
         * @memberof CDemoUserCmd
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoUserCmd.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoUserCmd";
        };
    
        return CDemoUserCmd;
    })();
    
    $root.CDemoSpawnGroups = (function() {
    
        /**
         * Properties of a CDemoSpawnGroups.
         * @exports ICDemoSpawnGroups
         * @interface ICDemoSpawnGroups
         * @property {Array.<Uint8Array>|null} [msgs] CDemoSpawnGroups msgs
         */
    
        /**
         * Constructs a new CDemoSpawnGroups.
         * @exports CDemoSpawnGroups
         * @classdesc Represents a CDemoSpawnGroups.
         * @implements ICDemoSpawnGroups
         * @constructor
         * @param {ICDemoSpawnGroups=} [properties] Properties to set
         */
        function CDemoSpawnGroups(properties) {
            this.msgs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoSpawnGroups msgs.
         * @member {Array.<Uint8Array>} msgs
         * @memberof CDemoSpawnGroups
         * @instance
         */
        CDemoSpawnGroups.prototype.msgs = $util.emptyArray;
    
        /**
         * Creates a new CDemoSpawnGroups instance using the specified properties.
         * @function create
         * @memberof CDemoSpawnGroups
         * @static
         * @param {ICDemoSpawnGroups=} [properties] Properties to set
         * @returns {CDemoSpawnGroups} CDemoSpawnGroups instance
         */
        CDemoSpawnGroups.create = function create(properties) {
            return new CDemoSpawnGroups(properties);
        };
    
        /**
         * Encodes the specified CDemoSpawnGroups message. Does not implicitly {@link CDemoSpawnGroups.verify|verify} messages.
         * @function encode
         * @memberof CDemoSpawnGroups
         * @static
         * @param {ICDemoSpawnGroups} message CDemoSpawnGroups message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoSpawnGroups.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgs != null && message.msgs.length)
                for (var i = 0; i < message.msgs.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.msgs[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CDemoSpawnGroups message, length delimited. Does not implicitly {@link CDemoSpawnGroups.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoSpawnGroups
         * @static
         * @param {ICDemoSpawnGroups} message CDemoSpawnGroups message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoSpawnGroups.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoSpawnGroups message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoSpawnGroups
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoSpawnGroups} CDemoSpawnGroups
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoSpawnGroups.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoSpawnGroups();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 3: {
                        if (!(message.msgs && message.msgs.length))
                            message.msgs = [];
                        message.msgs.push(reader.bytes());
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
         * Decodes a CDemoSpawnGroups message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoSpawnGroups
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoSpawnGroups} CDemoSpawnGroups
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoSpawnGroups.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoSpawnGroups message.
         * @function verify
         * @memberof CDemoSpawnGroups
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoSpawnGroups.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msgs != null && message.hasOwnProperty("msgs")) {
                if (!Array.isArray(message.msgs))
                    return "msgs: array expected";
                for (var i = 0; i < message.msgs.length; ++i)
                    if (!(message.msgs[i] && typeof message.msgs[i].length === "number" || $util.isString(message.msgs[i])))
                        return "msgs: buffer[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CDemoSpawnGroups message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoSpawnGroups
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoSpawnGroups} CDemoSpawnGroups
         */
        CDemoSpawnGroups.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoSpawnGroups)
                return object;
            var message = new $root.CDemoSpawnGroups();
            if (object.msgs) {
                if (!Array.isArray(object.msgs))
                    throw TypeError(".CDemoSpawnGroups.msgs: array expected");
                message.msgs = [];
                for (var i = 0; i < object.msgs.length; ++i)
                    if (typeof object.msgs[i] === "string")
                        $util.base64.decode(object.msgs[i], message.msgs[i] = $util.newBuffer($util.base64.length(object.msgs[i])), 0);
                    else if (object.msgs[i].length >= 0)
                        message.msgs[i] = object.msgs[i];
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoSpawnGroups message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoSpawnGroups
         * @static
         * @param {CDemoSpawnGroups} message CDemoSpawnGroups
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoSpawnGroups.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.msgs = [];
            if (message.msgs && message.msgs.length) {
                object.msgs = [];
                for (var j = 0; j < message.msgs.length; ++j)
                    object.msgs[j] = options.bytes === String ? $util.base64.encode(message.msgs[j], 0, message.msgs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.msgs[j]) : message.msgs[j];
            }
            return object;
        };
    
        /**
         * Converts this CDemoSpawnGroups to JSON.
         * @function toJSON
         * @memberof CDemoSpawnGroups
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoSpawnGroups.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoSpawnGroups
         * @function getTypeUrl
         * @memberof CDemoSpawnGroups
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoSpawnGroups.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoSpawnGroups";
        };
    
        return CDemoSpawnGroups;
    })();
    
    $root.CDemoRecovery = (function() {
    
        /**
         * Properties of a CDemoRecovery.
         * @exports ICDemoRecovery
         * @interface ICDemoRecovery
         * @property {CDemoRecovery.IDemoInitialSpawnGroupEntry|null} [initial_spawn_group] CDemoRecovery initial_spawn_group
         * @property {Uint8Array|null} [spawn_group_message] CDemoRecovery spawn_group_message
         */
    
        /**
         * Constructs a new CDemoRecovery.
         * @exports CDemoRecovery
         * @classdesc Represents a CDemoRecovery.
         * @implements ICDemoRecovery
         * @constructor
         * @param {ICDemoRecovery=} [properties] Properties to set
         */
        function CDemoRecovery(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDemoRecovery initial_spawn_group.
         * @member {CDemoRecovery.IDemoInitialSpawnGroupEntry|null|undefined} initial_spawn_group
         * @memberof CDemoRecovery
         * @instance
         */
        CDemoRecovery.prototype.initial_spawn_group = null;
    
        /**
         * CDemoRecovery spawn_group_message.
         * @member {Uint8Array} spawn_group_message
         * @memberof CDemoRecovery
         * @instance
         */
        CDemoRecovery.prototype.spawn_group_message = $util.newBuffer([]);
    
        /**
         * Creates a new CDemoRecovery instance using the specified properties.
         * @function create
         * @memberof CDemoRecovery
         * @static
         * @param {ICDemoRecovery=} [properties] Properties to set
         * @returns {CDemoRecovery} CDemoRecovery instance
         */
        CDemoRecovery.create = function create(properties) {
            return new CDemoRecovery(properties);
        };
    
        /**
         * Encodes the specified CDemoRecovery message. Does not implicitly {@link CDemoRecovery.verify|verify} messages.
         * @function encode
         * @memberof CDemoRecovery
         * @static
         * @param {ICDemoRecovery} message CDemoRecovery message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoRecovery.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.initial_spawn_group != null && Object.hasOwnProperty.call(message, "initial_spawn_group"))
                $root.CDemoRecovery.DemoInitialSpawnGroupEntry.encode(message.initial_spawn_group, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.spawn_group_message != null && Object.hasOwnProperty.call(message, "spawn_group_message"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.spawn_group_message);
            return writer;
        };
    
        /**
         * Encodes the specified CDemoRecovery message, length delimited. Does not implicitly {@link CDemoRecovery.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDemoRecovery
         * @static
         * @param {ICDemoRecovery} message CDemoRecovery message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDemoRecovery.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDemoRecovery message from the specified reader or buffer.
         * @function decode
         * @memberof CDemoRecovery
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDemoRecovery} CDemoRecovery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoRecovery.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoRecovery();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.initial_spawn_group = $root.CDemoRecovery.DemoInitialSpawnGroupEntry.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.spawn_group_message = reader.bytes();
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
         * Decodes a CDemoRecovery message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDemoRecovery
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDemoRecovery} CDemoRecovery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDemoRecovery.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDemoRecovery message.
         * @function verify
         * @memberof CDemoRecovery
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDemoRecovery.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.initial_spawn_group != null && message.hasOwnProperty("initial_spawn_group")) {
                var error = $root.CDemoRecovery.DemoInitialSpawnGroupEntry.verify(message.initial_spawn_group);
                if (error)
                    return "initial_spawn_group." + error;
            }
            if (message.spawn_group_message != null && message.hasOwnProperty("spawn_group_message"))
                if (!(message.spawn_group_message && typeof message.spawn_group_message.length === "number" || $util.isString(message.spawn_group_message)))
                    return "spawn_group_message: buffer expected";
            return null;
        };
    
        /**
         * Creates a CDemoRecovery message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDemoRecovery
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDemoRecovery} CDemoRecovery
         */
        CDemoRecovery.fromObject = function fromObject(object) {
            if (object instanceof $root.CDemoRecovery)
                return object;
            var message = new $root.CDemoRecovery();
            if (object.initial_spawn_group != null) {
                if (typeof object.initial_spawn_group !== "object")
                    throw TypeError(".CDemoRecovery.initial_spawn_group: object expected");
                message.initial_spawn_group = $root.CDemoRecovery.DemoInitialSpawnGroupEntry.fromObject(object.initial_spawn_group);
            }
            if (object.spawn_group_message != null)
                if (typeof object.spawn_group_message === "string")
                    $util.base64.decode(object.spawn_group_message, message.spawn_group_message = $util.newBuffer($util.base64.length(object.spawn_group_message)), 0);
                else if (object.spawn_group_message.length >= 0)
                    message.spawn_group_message = object.spawn_group_message;
            return message;
        };
    
        /**
         * Creates a plain object from a CDemoRecovery message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDemoRecovery
         * @static
         * @param {CDemoRecovery} message CDemoRecovery
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDemoRecovery.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.initial_spawn_group = null;
                if (options.bytes === String)
                    object.spawn_group_message = "";
                else {
                    object.spawn_group_message = [];
                    if (options.bytes !== Array)
                        object.spawn_group_message = $util.newBuffer(object.spawn_group_message);
                }
            }
            if (message.initial_spawn_group != null && message.hasOwnProperty("initial_spawn_group"))
                object.initial_spawn_group = $root.CDemoRecovery.DemoInitialSpawnGroupEntry.toObject(message.initial_spawn_group, options);
            if (message.spawn_group_message != null && message.hasOwnProperty("spawn_group_message"))
                object.spawn_group_message = options.bytes === String ? $util.base64.encode(message.spawn_group_message, 0, message.spawn_group_message.length) : options.bytes === Array ? Array.prototype.slice.call(message.spawn_group_message) : message.spawn_group_message;
            return object;
        };
    
        /**
         * Converts this CDemoRecovery to JSON.
         * @function toJSON
         * @memberof CDemoRecovery
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDemoRecovery.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for CDemoRecovery
         * @function getTypeUrl
         * @memberof CDemoRecovery
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CDemoRecovery.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/CDemoRecovery";
        };
    
        CDemoRecovery.DemoInitialSpawnGroupEntry = (function() {
    
            /**
             * Properties of a DemoInitialSpawnGroupEntry.
             * @memberof CDemoRecovery
             * @interface IDemoInitialSpawnGroupEntry
             * @property {number|null} [spawngrouphandle] DemoInitialSpawnGroupEntry spawngrouphandle
             * @property {boolean|null} [was_created] DemoInitialSpawnGroupEntry was_created
             */
    
            /**
             * Constructs a new DemoInitialSpawnGroupEntry.
             * @memberof CDemoRecovery
             * @classdesc Represents a DemoInitialSpawnGroupEntry.
             * @implements IDemoInitialSpawnGroupEntry
             * @constructor
             * @param {CDemoRecovery.IDemoInitialSpawnGroupEntry=} [properties] Properties to set
             */
            function DemoInitialSpawnGroupEntry(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DemoInitialSpawnGroupEntry spawngrouphandle.
             * @member {number} spawngrouphandle
             * @memberof CDemoRecovery.DemoInitialSpawnGroupEntry
             * @instance
             */
            DemoInitialSpawnGroupEntry.prototype.spawngrouphandle = 0;
    
            /**
             * DemoInitialSpawnGroupEntry was_created.
             * @member {boolean} was_created
             * @memberof CDemoRecovery.DemoInitialSpawnGroupEntry
             * @instance
             */
            DemoInitialSpawnGroupEntry.prototype.was_created = false;
    
            /**
             * Creates a new DemoInitialSpawnGroupEntry instance using the specified properties.
             * @function create
             * @memberof CDemoRecovery.DemoInitialSpawnGroupEntry
             * @static
             * @param {CDemoRecovery.IDemoInitialSpawnGroupEntry=} [properties] Properties to set
             * @returns {CDemoRecovery.DemoInitialSpawnGroupEntry} DemoInitialSpawnGroupEntry instance
             */
            DemoInitialSpawnGroupEntry.create = function create(properties) {
                return new DemoInitialSpawnGroupEntry(properties);
            };
    
            /**
             * Encodes the specified DemoInitialSpawnGroupEntry message. Does not implicitly {@link CDemoRecovery.DemoInitialSpawnGroupEntry.verify|verify} messages.
             * @function encode
             * @memberof CDemoRecovery.DemoInitialSpawnGroupEntry
             * @static
             * @param {CDemoRecovery.IDemoInitialSpawnGroupEntry} message DemoInitialSpawnGroupEntry message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DemoInitialSpawnGroupEntry.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.spawngrouphandle != null && Object.hasOwnProperty.call(message, "spawngrouphandle"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.spawngrouphandle);
                if (message.was_created != null && Object.hasOwnProperty.call(message, "was_created"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.was_created);
                return writer;
            };
    
            /**
             * Encodes the specified DemoInitialSpawnGroupEntry message, length delimited. Does not implicitly {@link CDemoRecovery.DemoInitialSpawnGroupEntry.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CDemoRecovery.DemoInitialSpawnGroupEntry
             * @static
             * @param {CDemoRecovery.IDemoInitialSpawnGroupEntry} message DemoInitialSpawnGroupEntry message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DemoInitialSpawnGroupEntry.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DemoInitialSpawnGroupEntry message from the specified reader or buffer.
             * @function decode
             * @memberof CDemoRecovery.DemoInitialSpawnGroupEntry
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CDemoRecovery.DemoInitialSpawnGroupEntry} DemoInitialSpawnGroupEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DemoInitialSpawnGroupEntry.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDemoRecovery.DemoInitialSpawnGroupEntry();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.spawngrouphandle = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.was_created = reader.bool();
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
             * Decodes a DemoInitialSpawnGroupEntry message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CDemoRecovery.DemoInitialSpawnGroupEntry
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CDemoRecovery.DemoInitialSpawnGroupEntry} DemoInitialSpawnGroupEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DemoInitialSpawnGroupEntry.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DemoInitialSpawnGroupEntry message.
             * @function verify
             * @memberof CDemoRecovery.DemoInitialSpawnGroupEntry
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DemoInitialSpawnGroupEntry.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.spawngrouphandle != null && message.hasOwnProperty("spawngrouphandle"))
                    if (!$util.isInteger(message.spawngrouphandle))
                        return "spawngrouphandle: integer expected";
                if (message.was_created != null && message.hasOwnProperty("was_created"))
                    if (typeof message.was_created !== "boolean")
                        return "was_created: boolean expected";
                return null;
            };
    
            /**
             * Creates a DemoInitialSpawnGroupEntry message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CDemoRecovery.DemoInitialSpawnGroupEntry
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CDemoRecovery.DemoInitialSpawnGroupEntry} DemoInitialSpawnGroupEntry
             */
            DemoInitialSpawnGroupEntry.fromObject = function fromObject(object) {
                if (object instanceof $root.CDemoRecovery.DemoInitialSpawnGroupEntry)
                    return object;
                var message = new $root.CDemoRecovery.DemoInitialSpawnGroupEntry();
                if (object.spawngrouphandle != null)
                    message.spawngrouphandle = object.spawngrouphandle >>> 0;
                if (object.was_created != null)
                    message.was_created = Boolean(object.was_created);
                return message;
            };
    
            /**
             * Creates a plain object from a DemoInitialSpawnGroupEntry message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CDemoRecovery.DemoInitialSpawnGroupEntry
             * @static
             * @param {CDemoRecovery.DemoInitialSpawnGroupEntry} message DemoInitialSpawnGroupEntry
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DemoInitialSpawnGroupEntry.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.spawngrouphandle = 0;
                    object.was_created = false;
                }
                if (message.spawngrouphandle != null && message.hasOwnProperty("spawngrouphandle"))
                    object.spawngrouphandle = message.spawngrouphandle;
                if (message.was_created != null && message.hasOwnProperty("was_created"))
                    object.was_created = message.was_created;
                return object;
            };
    
            /**
             * Converts this DemoInitialSpawnGroupEntry to JSON.
             * @function toJSON
             * @memberof CDemoRecovery.DemoInitialSpawnGroupEntry
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DemoInitialSpawnGroupEntry.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for DemoInitialSpawnGroupEntry
             * @function getTypeUrl
             * @memberof CDemoRecovery.DemoInitialSpawnGroupEntry
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DemoInitialSpawnGroupEntry.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CDemoRecovery.DemoInitialSpawnGroupEntry";
            };
    
            return DemoInitialSpawnGroupEntry;
        })();
    
        return CDemoRecovery;
    })();

    return $root;
});
