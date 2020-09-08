var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./to-uri"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const to_uri_1 = __importDefault(require("./to-uri"));
    function ToUriObject(port) {
        if (port.port) {
            return to_uri_1.default(port);
        }
        return '';
    }
    exports.default = ToUriObject;
});
//# sourceMappingURL=to-uri-object.js.map