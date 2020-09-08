var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./unreserved", "./percent-encoded", "./sub-delimiter", "@dikac/t-string/pattern/escape", "@dikac/t-array/unique"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const unreserved_1 = __importDefault(require("./unreserved"));
    const percent_encoded_1 = __importDefault(require("./percent-encoded"));
    const sub_delimiter_1 = __importDefault(require("./sub-delimiter"));
    const escape_1 = __importDefault(require("@dikac/t-string/pattern/escape"));
    const unique_1 = __importDefault(require("@dikac/t-array/unique"));
    const subDelimiter = sub_delimiter_1.default;
    const unreserved = unreserved_1.default;
    const extra = escape_1.default('@:');
    const flag = unique_1.default([...subDelimiter.flags, ...unreserved.flags]).join('');
    const Pattern = new RegExp(`([${extra}]|${percent_encoded_1.default.source}|${unreserved.source}|${subDelimiter.source})*`, flag);
    exports.default = Pattern;
});
//# sourceMappingURL=pchar.js.map