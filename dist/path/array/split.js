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
    function Split(string, delimiter) {
        const escaped = escape_1.default(delimiter);
        return string.split(new RegExp(`[${escaped}]+`, 'g'));
    }
    exports.default = Split;
});
//# sourceMappingURL=split.js.map