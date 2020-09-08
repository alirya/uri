var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validatable/scheme", "@dikac/t-validator/validatable/assert/valid", "./validatable/string/scheme"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const scheme_1 = __importDefault(require("./validatable/scheme"));
    const valid_1 = __importDefault(require("@dikac/t-validator/validatable/assert/valid"));
    const scheme_2 = __importDefault(require("./validatable/string/scheme"));
    function String(scheme, message = scheme_2.default) {
        let validatable = scheme_1.default(scheme, message);
        valid_1.default(validatable);
        return validatable;
    }
    exports.default = String;
});
//# sourceMappingURL=string.js.map