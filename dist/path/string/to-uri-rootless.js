var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/trim-prefix"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const trim_prefix_1 = __importDefault(require("@dikac/t-string/trim-prefix"));
    function ToUriRootless(path) {
        return trim_prefix_1.default(path.toString(), path.delimiter);
    }
    exports.default = ToUriRootless;
});
//# sourceMappingURL=to-uri-rootless.js.map