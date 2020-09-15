var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./standard", "./string/join"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const standard_1 = __importDefault(require("./standard"));
    const join_1 = __importDefault(require("./string/join"));
    class Stringable extends standard_1.default {
        constructor(scheme, authority, path, query, fragment, converter = join_1.default) {
            super(scheme, authority, path, query, fragment);
            this.converter = converter;
        }
        toString() {
            return this.converter(this);
        }
    }
    exports.default = Stringable;
});
//# sourceMappingURL=stringable.js.map