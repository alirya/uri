var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../user/validatable/user", "../../password/validatable/password", "@dikac/t-string/boolean/not-empty", "@dikac/t-object/value/set-getter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const user_1 = __importDefault(require("../../user/validatable/user"));
    const password_1 = __importDefault(require("../../password/validatable/password"));
    const not_empty_1 = __importDefault(require("@dikac/t-string/boolean/not-empty"));
    const set_getter_1 = __importDefault(require("@dikac/t-object/value/set-getter"));
    class UserInfo {
        constructor(value, messageFactory) {
            this.value = value;
            this.messageFactory = messageFactory;
            if (not_empty_1.default(value)) {
                let [user, password] = value.split(':', 2);
                this.user = user_1.default(user);
                if (password !== undefined) {
                    this.password = password_1.default(password);
                }
            }
        }
        get message() {
            return set_getter_1.default(this, 'message', this.messageFactory(this));
        }
        get valid() {
            if (this.user) {
                if (!this.user.valid) {
                    return false;
                }
            }
            if (this.password) {
                if (!this.password.valid) {
                    return false;
                }
            }
            return true;
        }
    }
    exports.default = UserInfo;
});
//# sourceMappingURL=user-info.js.map