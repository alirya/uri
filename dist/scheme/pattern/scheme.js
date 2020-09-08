/**
 * @reference https://tools.ietf.org/html/rfc3986#appendix-B
 */
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
    const Scheme = /[a-zA-Z][a-zA-Z0-9+.\\-]/;
    exports.default = Scheme;
});
//# sourceMappingURL=scheme.js.map