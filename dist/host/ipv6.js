var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validator/validatable/assert/valid", "./validatable/string/ipv6", "./validatable/ipv6"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const valid_1 = __importDefault(require("@dikac/t-validator/validatable/assert/valid"));
    const ipv6_1 = __importDefault(require("./validatable/string/ipv6"));
    const ipv6_2 = __importDefault(require("./validatable/ipv6"));
    function Ipv6(string, message = ipv6_1.default) {
        let scheme = ipv6_2.default(string, message);
        valid_1.default(scheme);
        return scheme;
    }
    exports.default = Ipv6;
});
//# sourceMappingURL=ipv6.js.map