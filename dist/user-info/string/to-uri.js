var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./to-uri-parameter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const to_uri_parameter_1 = __importDefault(require("./to-uri-parameter"));
    function Join(userInfo) {
        return to_uri_parameter_1.default(userInfo.user, userInfo.password);
    }
    exports.default = Join;
});
//# sourceMappingURL=to-uri.js.map