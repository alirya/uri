var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/pattern/escape"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const escape_1 = __importDefault(require("@dikac/t-string/pattern/escape"));
    function ReplaceExtension(path, extension, delimiter = ':/\\') {
        if (extension.length) {
            extension = '.' + extension;
        }
        let escaped = escape_1.default(delimiter);
        // determine if replaced or not, in case file without extension
        // replace operation will not work
        let replaced = false;
        path = path.replace(new RegExp(`\\.[^${escaped}.]+$`), (substring, args) => {
            replaced = true;
            //console.log([0, substring, args]);
            return extension;
        });
        if (replaced) {
            //console.log([1, path]);
            return path;
        }
        // bare file
        if (path.match(new RegExp(`[^${escaped}]+$`))) {
            //console.log([2, path]);
            return path + extension;
        }
        //console.log([3, path]);
        return path;
    }
    exports.default = ReplaceExtension;
});
//# sourceMappingURL=replace-extension.js.map