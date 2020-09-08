var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validatable/domain-name", "@dikac/t-validator/validatable/assert/valid", "./validatable/string/domain-name"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const domain_name_1 = __importDefault(require("./validatable/domain-name"));
    const valid_1 = __importDefault(require("@dikac/t-validator/validatable/assert/valid"));
    const domain_name_2 = __importDefault(require("./validatable/string/domain-name"));
    function DomainName(string, message = domain_name_2.default) {
        let scheme = domain_name_1.default(string, message);
        valid_1.default(scheme);
        return scheme;
    }
    exports.default = DomainName;
});
//# sourceMappingURL=domain-name.js.map