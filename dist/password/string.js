var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validatable/password", "@dikac/t-validator/validatable/assert/valid", "./validatable/string/password"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const password_1 = __importDefault(require("./validatable/password"));
    const valid_1 = __importDefault(require("@dikac/t-validator/validatable/assert/valid"));
    const password_2 = __importDefault(require("./validatable/string/password"));
    function String(password, message = password_2.default) {
        let validatable = password_1.default(password, message);
        valid_1.default(validatable);
        return validatable;
    }
    exports.default = String;
});
//# sourceMappingURL=string.js.map