var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/fragment"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const fragment_1 = __importDefault(require("../validatable/fragment"));
    function Fragment(string) {
        return fragment_1.default(string).valid;
    }
    exports.default = Fragment;
});
//# sourceMappingURL=fragment.js.map