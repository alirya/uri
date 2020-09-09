var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../standard", "../string/extension", "../string/replace-extension", "../string/name", "../string/file", "../string/replace-name", "../string/replace-file", "@dikac/t-string/safe-cast", "../string/join", "@dikac/t-string/remove-suffix-character"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const standard_1 = __importDefault(require("../standard"));
    const extension_1 = __importDefault(require("../string/extension"));
    const replace_extension_1 = __importDefault(require("../string/replace-extension"));
    const name_1 = __importDefault(require("../string/name"));
    const file_1 = __importDefault(require("../string/file"));
    const replace_name_1 = __importDefault(require("../string/replace-name"));
    const replace_file_1 = __importDefault(require("../string/replace-file"));
    const safe_cast_1 = __importDefault(require("@dikac/t-string/safe-cast"));
    const join_1 = __importDefault(require("../string/join"));
    const remove_suffix_character_1 = __importDefault(require("@dikac/t-string/remove-suffix-character"));
    class Standard extends standard_1.default {
        get extension() {
            return extension_1.default(this.value);
        }
        get dir() {
            return remove_suffix_character_1.default(this.toString().slice(0, this.file.length * -1), this.delimiter[0]);
        }
        set dir(dir) {
            this.value = join_1.default(dir, this.file, this.delimiter[0], this.splitter);
        }
        set extension(extension) {
            this.value = replace_extension_1.default(this.value, extension);
        }
        get file() {
            return file_1.default(this.value, this.splitter);
        }
        set file(extension) {
            this.value = safe_cast_1.default(replace_file_1.default(this.value, extension, this.splitter));
        }
        get name() {
            return name_1.default(this.value, this.splitter);
        }
        set name(name) {
            this.value = safe_cast_1.default(replace_name_1.default(this.value, name, this.splitter));
        }
    }
    exports.default = Standard;
});
//# sourceMappingURL=standard.js.map