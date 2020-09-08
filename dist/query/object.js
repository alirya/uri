var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/pick", "query-string", "@dikac/t-object/omit-undefined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const pick_1 = __importDefault(require("@dikac/t-object/pick"));
    const query_string_1 = require("query-string");
    const omit_undefined_1 = __importDefault(require("@dikac/t-object/omit-undefined"));
    class Object_ {
        constructor(value, option = {}) {
            this.value = value;
            /**
             * @see StringifyOptions.arrayFormat
             */
            this.arrayFormat = 'none';
            /**
             * @see StringifyOptions.arrayFormatSeparator
             */
            this.arrayFormatSeparator = ',';
            /**
             * @see StringifyOptions.encode
             */
            this.encode = true;
            /**
             * @see StringifyOptions.skipEmptyString
             */
            this.skipEmptyString = false;
            /**
             * @see StringifyOptions.skipNull
             */
            this.skipNull = false;
            /**
             * @see StringifyOptions.strict
             */
            this.strict = true;
            Object.assign(this, omit_undefined_1.default(pick_1.default(option, 'arrayFormat', 'arrayFormatSeparator', 'encode', 'skipEmptyString', 'skipNull', 'sort', 'strict')));
        }
        toString() {
            return query_string_1.stringify(this.value, this);
        }
    }
    exports.default = Object_;
});
//# sourceMappingURL=object.js.map