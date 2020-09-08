var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validatable/fragment", "@dikac/t-validator/validatable/assert/valid", "./validatable/string/fragment"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const fragment_1 = __importDefault(require("./validatable/fragment"));
    const valid_1 = __importDefault(require("@dikac/t-validator/validatable/assert/valid"));
    const fragment_2 = __importDefault(require("./validatable/string/fragment"));
    function String(fragment, message = fragment_2.default) {
        let validatable = fragment_1.default(fragment, message);
        valid_1.default(validatable);
        return validatable;
    }
    exports.default = String;
});
//# sourceMappingURL=string.js.map