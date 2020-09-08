var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/validatable/match", "../pattern/fragment", "./string/fragment"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const match_1 = __importDefault(require("@dikac/t-string/validatable/match"));
    const fragment_1 = __importDefault(require("../pattern/fragment"));
    const fragment_2 = __importDefault(require("./string/fragment"));
    function Fragment(fragment, message = fragment_2.default) {
        return new match_1.default(fragment, new RegExp(`^${fragment_1.default.source}*$`, fragment_1.default.flags), message);
    }
    exports.default = Fragment;
});
//# sourceMappingURL=fragment.js.map