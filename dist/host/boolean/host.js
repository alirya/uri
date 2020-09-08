var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./domain-name", "./ipv4", "./ipv6"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const domain_name_1 = __importDefault(require("./domain-name"));
    const ipv4_1 = __importDefault(require("./ipv4"));
    const ipv6_1 = __importDefault(require("./ipv6"));
    function Host(host) {
        return domain_name_1.default(host) || ipv4_1.default(host) || ipv6_1.default(host);
    }
    exports.default = Host;
});
//# sourceMappingURL=host.js.map