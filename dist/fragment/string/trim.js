var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/remove-prefix-character"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const remove_prefix_character_1 = __importDefault(require("@dikac/t-string/remove-prefix-character"));
    function Trim(scheme) {
        return remove_prefix_character_1.default(scheme, '#');
    }
    exports.default = Trim;
});
//# sourceMappingURL=trim.js.map