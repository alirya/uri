var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../pattern/sub-delimiter", "../../pattern/unreserved", "../../pattern/percent-encoded"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sub_delimiter_1 = __importDefault(require("../../pattern/sub-delimiter"));
    const unreserved_1 = __importDefault(require("../../pattern/unreserved"));
    const percent_encoded_1 = __importDefault(require("../../pattern/percent-encoded"));
    let subDelimiter = sub_delimiter_1.default.source;
    let unreserved = unreserved_1.default.source;
    let percentEncoded = percent_encoded_1.default.source;
    /**
     * essentially same as query, except for #
     */
    const UserInfo = new RegExp(`(${subDelimiter}|${unreserved}|${percentEncoded}|:)*`, 'i');
    exports.default = UserInfo;
});
//# sourceMappingURL=user-info.js.map