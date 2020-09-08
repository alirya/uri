var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./scheme", "@dikac/t-string/pattern/escape"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const scheme_1 = __importDefault(require("./scheme"));
    const escape_1 = __importDefault(require("@dikac/t-string/pattern/escape"));
    /**
     * @reference https://tools.ietf.org/html/rfc3986#appendix-B
     */
    const SchemeDelimiter = new RegExp(scheme_1.default.source + escape_1.default(':'), scheme_1.default.flags);
    exports.default = SchemeDelimiter;
});
//# sourceMappingURL=scheme-delimiter.js.map