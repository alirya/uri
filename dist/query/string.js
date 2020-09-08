var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validatable/query", "@dikac/t-validator/validatable/assert/valid", "./validatable/string/query"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const query_1 = __importDefault(require("./validatable/query"));
    const valid_1 = __importDefault(require("@dikac/t-validator/validatable/assert/valid"));
    const query_2 = __importDefault(require("./validatable/string/query"));
    function String(query, message = query_2.default) {
        let validatable = query_1.default(query, message);
        valid_1.default(validatable);
        return validatable;
    }
    exports.default = String;
});
//# sourceMappingURL=string.js.map