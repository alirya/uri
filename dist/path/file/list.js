var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../list", "../string/extension", "../string/replace-extension", "../string/file", "@dikac/t-string/safe-cast", "../string/replace-file", "../string/name", "../string/replace-name", "./standard", "@dikac/t-string/remove-suffix-character"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const list_1 = __importDefault(require("../list"));
    const extension_1 = __importDefault(require("../string/extension"));
    const replace_extension_1 = __importDefault(require("../string/replace-extension"));
    const file_1 = __importDefault(require("../string/file"));
    const safe_cast_1 = __importDefault(require("@dikac/t-string/safe-cast"));
    const replace_file_1 = __importDefault(require("../string/replace-file"));
    const name_1 = __importDefault(require("../string/name"));
    const replace_name_1 = __importDefault(require("../string/replace-name"));
    const standard_1 = __importDefault(require("./standard"));
    const remove_suffix_character_1 = __importDefault(require("@dikac/t-string/remove-suffix-character"));
    class List extends list_1.default {
        constructor(segments = [], delimiter = '/', delimiters = '/\\:') {
            super(segments, delimiter, delimiters);
        }
        get extension() {
            let last = this[this.length - 1];
            if (last) {
                return extension_1.default(last);
            }
            return '';
        }
        set dir(dir) {
            const datas = [dir, this.file];
            this.splice(0);
            this.push(...datas);
            this.split();
        }
        get dir() {
            let standard = new standard_1.default(this.join(this.delimiter[0]), this.delimiter, this.delimiters);
            return remove_suffix_character_1.default(standard.dir, this.delimiter[0]);
        }
        set extension(extension) {
            let last = this[this.length - 1];
            if (last) {
                this[this.length - 1] = replace_extension_1.default(last, extension);
            }
        }
        get file() {
            let last = this[this.length - 1];
            if (last) {
                return file_1.default(last, this.splitter);
            }
            return '';
        }
        set file(extension) {
            let last = this[this.length - 1];
            if (last) {
                this[this.length - 1] = safe_cast_1.default(replace_file_1.default(last, extension, this.splitter));
            }
        }
        get name() {
            let last = this[this.length - 1];
            if (last) {
                return name_1.default(last, this.splitter);
            }
            return '';
        }
        set name(name) {
            let last = this[this.length - 1];
            if (last) {
                this[this.length - 1] = safe_cast_1.default(replace_name_1.default(last, name, this.splitter));
            }
        }
    }
    exports.default = List;
});
//# sourceMappingURL=list.js.map