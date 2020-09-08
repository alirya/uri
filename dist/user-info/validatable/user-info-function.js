var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./string/user-info", "./user-info"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const user_info_1 = __importDefault(require("./string/user-info"));
    const user_info_2 = __importDefault(require("./user-info"));
    function UserInfoFunction(value, message = user_info_1.default) {
        return new user_info_2.default(value, message);
    }
    exports.default = UserInfoFunction;
});
//# sourceMappingURL=user-info-function.js.map