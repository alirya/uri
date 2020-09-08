var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../user-info/string/to-uri"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const to_uri_1 = __importDefault(require("../../user-info/string/to-uri"));
    function Join(authority, userInfoToString = to_uri_1.default) {
        let result = '';
        if (authority.host !== undefined) {
            const host = authority.host.toString();
            if (host.length === 0) {
                return result;
            }
            else {
                result = host;
            }
        }
        else {
            return result;
        }
        if (authority.userInfo !== undefined) {
            const userInfo = userInfoToString(authority.userInfo);
            if (userInfo.length !== 0) {
                result = userInfo + '@' + result;
            }
        }
        if (authority.port !== undefined) {
            const port = authority.port.toString();
            if (port.length !== 0) {
                result = result + ':' + port;
            }
        }
        return result;
    }
    exports.default = Join;
});
//# sourceMappingURL=join.js.map