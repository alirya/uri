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
    class Standard {
        constructor(userInfo, host, port) {
            this.userInfo = userInfo;
            this.host = host;
            this.port = port;
        }
    }
    exports.default = Standard;
});
//# sourceMappingURL=standard.js.map