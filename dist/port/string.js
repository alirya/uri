var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validatable/string/port", "./validatable/port"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const port_1 = __importDefault(require("./validatable/string/port"));
    const port_2 = __importDefault(require("./validatable/port"));
    function String(value, message = port_1.default) {
        return port_2.default(value, message);
    }
    exports.default = String;
});
//# sourceMappingURL=string.js.map