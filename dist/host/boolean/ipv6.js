var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "is-ip", "@dikac/t-string/unclose"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const is_ip_1 = require("is-ip");
    const unclose_1 = __importDefault(require("@dikac/t-string/unclose"));
    function Ipv6(string) {
        if (string[0] === '[' && string[string.length - 1] === ']') {
            string = unclose_1.default(string, '[', ']');
        }
        return is_ip_1.v6(string);
    }
    exports.default = Ipv6;
});
//# sourceMappingURL=ipv6.js.map