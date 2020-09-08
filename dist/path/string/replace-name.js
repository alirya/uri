var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./extension", "../array/split"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const extension_1 = __importDefault(require("./extension"));
    const split_1 = __importDefault(require("../array/split"));
    function ReplaceName(path, name, delimiter = ':/\\') {
        let parts = split_1.default(path, delimiter);
        let file = parts.pop();
        if (file && name) {
            parts.push(name + '.' + extension_1.default(file));
        }
        return parts.join(delimiter);
    }
    exports.default = ReplaceName;
});
//# sourceMappingURL=replace-name.js.map