var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./replace-extension", "../array/split"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const replace_extension_1 = __importDefault(require("./replace-extension"));
    const split_1 = __importDefault(require("../array/split"));
    function Name(path, delimiter) {
        let file = split_1.default(path, delimiter).pop();
        if (file) {
            return replace_extension_1.default(file, '');
        }
        return '';
    }
    exports.default = Name;
});
//# sourceMappingURL=name.js.map