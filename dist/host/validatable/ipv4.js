var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/validatable/callback", "../boolean/ipv4", "./string/ipv4"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const callback_1 = __importDefault(require("@dikac/t-string/validatable/callback"));
    const ipv4_1 = __importDefault(require("../boolean/ipv4"));
    const ipv4_2 = __importDefault(require("./string/ipv4"));
    function Ipv4(string, message = ipv4_2.default) {
        return new callback_1.default(string, ipv4_1.default, message);
    }
    exports.default = Ipv4;
});
//# sourceMappingURL=ipv4.js.map