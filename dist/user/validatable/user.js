var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../pattern/user", "@dikac/t-string/validatable/match", "./string/user"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const user_1 = __importDefault(require("../pattern/user"));
    const match_1 = __importDefault(require("@dikac/t-string/validatable/match"));
    const user_2 = __importDefault(require("./string/user"));
    function User(source, message = user_2.default) {
        return new match_1.default(source, new RegExp(`^${user_1.default.source}*$`, user_1.default.flags), message);
    }
    exports.default = User;
});
//# sourceMappingURL=user.js.map