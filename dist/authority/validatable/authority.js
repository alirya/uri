import Port from "../../port/validatable/port";
import RemovePrefixCharacter from "@alirya/string/remove-prefix-character";
import Host from "../../host/validatable/host";
import NotEmpty from "@alirya/string/boolean/not-empty";
import UserInfoFunction from "../../user-info/validatable/user-info-function";
import SetGetter from "@alirya/object/value/value/set-getter";
export default class Authority {
    constructor(value, messageFactory) {
        this.value = value;
        this.messageFactory = messageFactory;
        if (NotEmpty(value)) {
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
                this.port = Port(RemovePrefixCharacter(port, ':'));
                let remain = host.slice(0, host.length - port.length);
                this.host = Host(remain);
            }
            else {
                this.host = Host(host);
            }
            if (userInfo !== undefined) {
                this.userInfo = UserInfoFunction(userInfo);
            }
        }
    }
    toString() {
        return this.value;
    }
    get message() {
        return SetGetter(this, 'message', this.messageFactory(this));
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
//# sourceMappingURL=authority.js.map