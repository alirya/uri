var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/scheme"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const scheme_1 = __importDefault(require("../validatable/scheme"));
    function Scheme(string) {
        return scheme_1.default(string).valid;
    }
    exports.default = Scheme;
});
//# sourceMappingURL=scheme.js.map