var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/prefix-character"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const prefix_character_1 = __importDefault(require("@dikac/t-string/prefix-character"));
    function ToUri(query) {
        return prefix_character_1.default(query.toString(), '?');
    }
    exports.default = ToUri;
});
//# sourceMappingURL=to-uri.js.map