var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../pattern/sub-delimiter", "../../pattern/unreserved", "../../pattern/percent-encoded", "@dikac/t-array/unique", "@dikac/t-string/pattern/escape"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sub_delimiter_1 = __importDefault(require("../../pattern/sub-delimiter"));
    const unreserved_1 = __importDefault(require("../../pattern/unreserved"));
    const percent_encoded_1 = __importDefault(require("../../pattern/percent-encoded"));
    const unique_1 = __importDefault(require("@dikac/t-array/unique"));
    const escape_1 = __importDefault(require("@dikac/t-string/pattern/escape"));
    const subDelimiter = sub_delimiter_1.default.source;
    const unreserved = unreserved_1.default.source;
    const percentEncoded = percent_encoded_1.default.source;
    const extra = escape_1.default('?/');
    const flag = unique_1.default([
        ...sub_delimiter_1.default.flags,
        ...unreserved_1.default.flags,
        ...percent_encoded_1.default.flags
    ]).join('');
    const User = new RegExp(`(${subDelimiter}|${unreserved}|${percentEncoded}|[${extra}])`, flag);
    exports.default = User;
});
//# sourceMappingURL=query.js.map