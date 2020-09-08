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
        constructor(scheme, authority, path, query, fragment) {
            this.scheme = scheme;
            this.authority = authority;
            this.path = path;
            this.query = query;
            this.fragment = fragment;
        }
    }
    exports.default = Standard;
});
//# sourceMappingURL=standard.js.map