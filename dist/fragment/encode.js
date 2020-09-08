var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../pattern/sub-delimiter", "./string/trim"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sub_delimiter_1 = __importDefault(require("../pattern/sub-delimiter"));
    const trim_1 = __importDefault(require("./string/trim"));
    let allowed = new Map();
    // extra
    allowed.set('%3F', '?');
    allowed.set('%2F', '/');
    // pchar extra
    allowed.set('%40', '@');
    allowed.set('%3A', ':');
    // percent encoded
    allowed.set('%25', '%');
    // sub delimiter
    for (let char of trim_1.default(sub_delimiter_1.default.source)) {
        allowed.set(encodeURIComponent(char), char);
    }
    function Encode(string) {
        let encoded = encodeURIComponent(string);
        for (let [search, replace] of allowed) {
            encoded = encoded.replace(search, replace);
        }
        return encoded;
    }
    exports.default = Encode;
});
//# sourceMappingURL=encode.js.map