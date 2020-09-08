var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validatable/user", "@dikac/t-validator/validatable/assert/valid", "./validatable/string/user"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const user_1 = __importDefault(require("./validatable/user"));
    const valid_1 = __importDefault(require("@dikac/t-validator/validatable/assert/valid"));
    const user_2 = __importDefault(require("./validatable/string/user"));
    function String(user, message = user_2.default) {
        let validatable = user_1.default(user, message);
        valid_1.default(validatable);
        return validatable;
    }
    exports.default = String;
});
//# sourceMappingURL=string.js.map