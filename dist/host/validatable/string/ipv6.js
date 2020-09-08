var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/message/sentences-is", "@dikac/t-string/truncate"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sentences_is_1 = __importDefault(require("@dikac/t-string/message/sentences-is"));
    const truncate_1 = __importDefault(require("@dikac/t-string/truncate"));
    function Ipv6(result, subject = '') {
        let sentence = sentences_is_1.default(result.valid);
        sentence.subject.push(subject);
        sentence.subject.push(truncate_1.default(result.value, 20));
        sentence.object = ['valid ipv6'];
        return sentence.message;
    }
    exports.default = Ipv6;
});
//# sourceMappingURL=ipv6.js.map