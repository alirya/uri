var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-number/validatable/greater", "@dikac/t-number/validatable/string/greater", "@dikac/t-number/validatable/lower", "@dikac/t-number/validatable/string/lower", "@dikac/t-string/boolean/string", "@dikac/t-string/validatable/numeric", "@dikac/t-string/validatable/string/numeric"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const greater_1 = __importDefault(require("@dikac/t-number/validatable/greater"));
    const greater_2 = __importDefault(require("@dikac/t-number/validatable/string/greater"));
    const lower_1 = __importDefault(require("@dikac/t-number/validatable/lower"));
    const lower_2 = __importDefault(require("@dikac/t-number/validatable/string/lower"));
    const string_1 = __importDefault(require("@dikac/t-string/boolean/string"));
    const numeric_1 = __importDefault(require("@dikac/t-string/validatable/numeric"));
    const numeric_2 = __importDefault(require("@dikac/t-string/validatable/string/numeric"));
    function Port(port, message) {
        if (string_1.default(port)) {
            let digit = new numeric_1.default(port, message ? message : numeric_2.default);
            if (digit.valid) {
                port = parseInt(port);
            }
            else {
                return digit;
            }
        }
        let greater = new greater_1.default(port, 0, true, message ? message : greater_2.default);
        if (!greater.valid) {
            return greater;
        }
        return new lower_1.default(port, 65535, true, message ? message : lower_2.default);
    }
    exports.default = Port;
});
//# sourceMappingURL=port.js.map