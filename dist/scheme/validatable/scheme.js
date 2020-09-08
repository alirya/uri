var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/validatable/match", "../pattern/scheme", "./string/scheme"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const match_1 = __importDefault(require("@dikac/t-string/validatable/match"));
    const scheme_1 = __importDefault(require("../pattern/scheme"));
    const scheme_2 = __importDefault(require("./string/scheme"));
    function Scheme(scheme, message = scheme_2.default) {
        return new match_1.default(scheme, new RegExp(`^${scheme_1.default.source}*$`, scheme_1.default.flags), message);
    }
    exports.default = Scheme;
});
//# sourceMappingURL=scheme.js.map