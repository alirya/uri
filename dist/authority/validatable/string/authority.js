var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/message/sentence"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sentence_1 = __importDefault(require("@dikac/t-string/message/sentence"));
    function UserInfo(result) {
        let sentence = new sentence_1.default(result.valid);
        sentence.expect = 'authority';
        if (result.valid) {
            return sentence.message;
        }
        else {
            if (result.host) {
                return result.host.message;
            }
            if (result.port) {
                return result.port.message;
            }
            if (result.userInfo) {
                return result.userInfo.message;
            }
            return sentence.message;
        }
    }
    exports.default = UserInfo;
});
//# sourceMappingURL=authority.js.map