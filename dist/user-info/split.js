(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Split(userInfo) {
        let parts = userInfo.split(':', 2);
        return {
            user: parts[0],
            password: parts[1] === undefined ? '' : parts[1]
        };
    }
    exports.default = Split;
});
//# sourceMappingURL=split.js.map