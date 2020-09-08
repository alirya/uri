var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./standard", "./array/split"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const standard_1 = __importDefault(require("./standard"));
    const split_1 = __importDefault(require("./array/split"));
    class List extends Array {
        constructor(segments = [], delimiter = '/', delimiters = '/\\:') {
            super(...segments);
            this.delimiter = delimiter;
            this.delimiters = delimiters;
        }
        static get [Symbol.species]() {
            return Array;
        }
        get splitter() {
            return this.delimiters + this.delimiter;
        }
        split() {
            split_1.default(this.toString(), this.splitter).forEach((value, index) => this[index] = value);
        }
        toString() {
            let standard = new standard_1.default(this.join(this.delimiter[0]), this.delimiter[0], this.delimiters);
            return standard.toString();
        }
    }
    exports.default = List;
});
//# sourceMappingURL=list.js.map