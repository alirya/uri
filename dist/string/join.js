var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/prefix-character", "../authority/string/join"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const prefix_character_1 = __importDefault(require("@dikac/t-string/prefix-character"));
    const join_1 = __importDefault(require("../authority/string/join"));
    function Join(uri, authority = join_1.default) {
        let result = '';
        let scheme = uri.scheme ? uri.scheme.toString() : '';
        if (scheme) {
            result += scheme + ':';
        }
        let auth = uri.authority ? authority(uri.authority) : '';
        if (auth) {
            result = result + '//' + auth;
        }
        let path = uri.path ? uri.path.toString() : '';
        if (path) {
            result += prefix_character_1.default(path, uri.path.delimiter);
        }
        let query = uri.query ? uri.query.toString() : '';
        if (query) {
            result += prefix_character_1.default(query, '?');
        }
        let fragment = uri.fragment ? uri.fragment.toString() : '';
        if (fragment) {
            result += prefix_character_1.default(fragment, '#');
        }
        return result;
    }
    exports.default = Join;
});
//# sourceMappingURL=join.js.map