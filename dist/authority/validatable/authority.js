var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../port/validatable/port", "@dikac/t-string/remove-prefix-character", "../../host/validatable/host", "@dikac/t-string/boolean/not-empty", "../../user-info/validatable/user-info-function", "@dikac/t-object/value/value/set-getter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const port_1 = __importDefault(require("../../port/validatable/port"));
    const remove_prefix_character_1 = __importDefault(require("@dikac/t-string/remove-prefix-character"));
    const host_1 = __importDefault(require("../../host/validatable/host"));
    const not_empty_1 = __importDefault(require("@dikac/t-string/boolean/not-empty"));
    const user_info_function_1 = __importDefault(require("../../user-info/validatable/user-info-function"));
    const set_getter_1 = __importDefault(require("@dikac/t-object/value/value/set-getter"));
    class Authority {
        constructor(value, messageFactory) {
            this.value = value;
            this.messageFactory = messageFactory;
            if (not_empty_1.default(value)) {
                let host = undefined;
                let userInfo = undefined;
                let parts = value.split('@', 2);
                if (parts.length === 2) {
                    [userInfo, host] = parts;
                }
                else {
                    host = parts[0];
                }
                // try ipv 6
                let hostPort = host.match(/\:[0-9]*$/);
                if (hostPort) {
                    let port = hostPort[0];
                    this.port = port_1.default(remove_prefix_character_1.default(port, ':'));
                    let remain = host.slice(0, host.length - port.length);
                    this.host = host_1.default(remain);
                }
                else {
                    this.host = host_1.default(host);
                }
                if (userInfo !== undefined) {
                    this.userInfo = user_info_function_1.default(userInfo);
                }
            }
        }
        toString() {
            return this.value;
        }
        get message() {
            return set_getter_1.default(this, 'message', this.messageFactory(this));
        }
        get valid() {
            if (this.host) {
                if (!this.host.valid) {
                    return false;
                }
            }
            if (this.port) {
                if (!this.port.valid) {
                    return false;
                }
            }
            if (this.userInfo) {
                if (!this.userInfo.valid) {
                    return false;
                }
            }
            return true;
        }
    }
    exports.default = Authority;
});
//# sourceMappingURL=authority.js.map