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
    class Component {
        constructor(value, valid, message) {
            this._message = 'port is valid';
            this._valid = false;
            this.value = value;
            this._valid = valid;
            this._message = message;
        }
        get() {
            if (!this.valid()) {
                throw new Error(this.message());
            }
            return this.value;
        }
        toString() {
            return this.get().toString();
        }
        message() {
            return this._message;
        }
        valid() {
            return this._valid;
        }
    }
    exports.default = Component;
});
//# sourceMappingURL=component.js.map