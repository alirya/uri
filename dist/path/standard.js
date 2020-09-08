var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/pattern/escape"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const escape_1 = __importDefault(require("@dikac/t-string/pattern/escape"));
    class Standard {
        constructor(value, delimiter = '/', delimiters = '/\\:') {
            this.value = value;
            this.delimiter = delimiter;
            this.delimiters = delimiters;
        }
        get splitter() {
            return this.delimiters + this.delimiter;
        }
        toString() {
            const escaped = escape_1.default(this.splitter);
            const pattern = new RegExp(`[${escaped}]+`, 'g');
            return this.value.replace(pattern, this.delimiter[0]);
        }
    }
    exports.default = Standard;
});
//# sourceMappingURL=standard.js.map