(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function ExtensionPrefix(extension) {
        return extension.length !== 0 ? '.' + extension : '';
    }
    exports.default = ExtensionPrefix;
});
//# sourceMappingURL=extension-prefix.js.map