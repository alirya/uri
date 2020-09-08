var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validatable/ipv4", "@dikac/t-validator/validatable/assert/valid", "./validatable/string/ipv4"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ipv4_1 = __importDefault(require("./validatable/ipv4"));
    const valid_1 = __importDefault(require("@dikac/t-validator/validatable/assert/valid"));
    const ipv4_2 = __importDefault(require("./validatable/string/ipv4"));
    function Ipv4(string, message = ipv4_2.default) {
        let scheme = ipv4_1.default(string, message);
        valid_1.default(scheme);
        return scheme;
    }
    exports.default = Ipv4;
});
//# sourceMappingURL=ipv4.js.map