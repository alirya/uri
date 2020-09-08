var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../pattern/password", "@dikac/t-string/validatable/match", "./string/password"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const password_1 = __importDefault(require("../pattern/password"));
    const match_1 = __importDefault(require("@dikac/t-string/validatable/match"));
    const password_2 = __importDefault(require("./string/password"));
    function Password(source, message = password_2.default) {
        return new match_1.default(source, new RegExp(`^${password_1.default.source}*$`, password_1.default.flags), message);
    }
    exports.default = Password;
});
//# sourceMappingURL=password.js.map