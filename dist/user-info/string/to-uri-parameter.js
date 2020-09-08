var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/safe-cast"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const safe_cast_1 = __importDefault(require("@dikac/t-string/safe-cast"));
    function ToUriParameter(user, password) {
        let result = safe_cast_1.default(user);
        let _password = safe_cast_1.default(password);
        if (_password.length !== 0) {
            result = result + ':' + _password;
        }
        return result;
    }
    exports.default = ToUriParameter;
});
//# sourceMappingURL=to-uri-parameter.js.map