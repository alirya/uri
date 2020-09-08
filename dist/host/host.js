var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validatable/host", "@dikac/t-validator/validatable/assert/valid", "./validatable/string/host"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const host_1 = __importDefault(require("./validatable/host"));
    const valid_1 = __importDefault(require("@dikac/t-validator/validatable/assert/valid"));
    const host_2 = __importDefault(require("./validatable/string/host"));
    function Host(string, message = host_2.default) {
        let scheme = host_1.default(string, message);
        valid_1.default(scheme);
        return scheme;
    }
    exports.default = Host;
});
//# sourceMappingURL=host.js.map