var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/message/sentences-must", "@dikac/t-string/truncate"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sentences_must_1 = __importDefault(require("@dikac/t-string/message/sentences-must"));
    const truncate_1 = __importDefault(require("@dikac/t-string/truncate"));
    function User(result, subject = '') {
        let sentence = sentences_must_1.default(result.valid, ['value']);
        sentence.subject.push(subject);
        sentence.comma.push('expect');
        sentence.actual.push('actual', `"${truncate_1.default(result.value, 10)}"`);
        sentence.expect = ['valid user'];
        return sentence.message;
    }
    exports.default = User;
});
//# sourceMappingURL=user.js.map