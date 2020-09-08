var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validatable/user-info", "./validatable/string/user-info", "@dikac/t-validator/validatable/assert/valid"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const user_info_1 = __importDefault(require("./validatable/user-info"));
    const user_info_2 = __importDefault(require("./validatable/string/user-info"));
    const valid_1 = __importDefault(require("@dikac/t-validator/validatable/assert/valid"));
    function String(value, message = user_info_2.default) {
        let userInfo = new user_info_1.default(value, message);
        valid_1.default(userInfo);
        return userInfo;
    }
    exports.default = String;
});
//# sourceMappingURL=string.js.map