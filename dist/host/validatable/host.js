var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/validatable/callback", "../boolean/host", "./string/host"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const callback_1 = __importDefault(require("@dikac/t-string/validatable/callback"));
    const host_1 = __importDefault(require("../boolean/host"));
    const host_2 = __importDefault(require("./string/host"));
    function Host(string, message = host_2.default) {
        return new callback_1.default(string, host_1.default, message);
    }
    exports.default = Host;
});
//# sourceMappingURL=host.js.map