var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/suffix-character"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const suffix_character_1 = __importDefault(require("@dikac/t-string/suffix-character"));
    function ToUri(scheme) {
        return suffix_character_1.default(scheme.toString(), ':');
    }
    exports.default = ToUri;
});
//# sourceMappingURL=to-uri.js.map