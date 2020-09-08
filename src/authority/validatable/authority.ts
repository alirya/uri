import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Port from "../../port/validatable/port";
import RemovePrefixCharacter from "@dikac/t-string/remove-prefix-character";
import Host from "../../host/validatable/host";
import UserInfoInterface from "../../user-info/validatable/validatable";
import AuthorityInterface from "./validatable";
import Message from "@dikac/t-message/message";
import NotEmpty from "@dikac/t-string/boolean/not-empty";
import UserInfoFunction from "../../user-info/validatable/user-info-function";
import SetGetter from "@dikac/t-object/value/set-getter";

export default class Authority<MessageType = unknown> implements AuthorityInterface<
    MessageType,
    Readonly<UserInfoInterface>,
    Readonly<Value<string> & Validatable & Message<string>>,
    Readonly<Value<number|string> & Validatable & Message<string>>
> {

    public host ?: Readonly<Value<string> & Validatable & Message<string>>;
    public port ?: Readonly<Value<number|string> & Validatable & Message<string>>;
    public userInfo ?: Readonly<UserInfoInterface & Validatable & Message<string>>;

    constructor(
        readonly value : string,
        protected messageFactory : (result : Omit<AuthorityInterface<MessageType>, 'message'>) => MessageType
    ) {

        if(NotEmpty(value)) {

            let host : string|undefined = undefined;
            let userInfo : string|undefined = undefined;

            let parts = value.split('@', 2);

            if(parts.length === 2) {

                [userInfo, host] = parts;

            } else {

                host = parts[0];
            }

            // try ipv 6
            let hostPort = host.match(/\:[0-9]*$/);

            if(hostPort) {

                let port = hostPort[0];
                this.port = Port(RemovePrefixCharacter(port, ':'));

                let remain = host.slice(0, host.length - port.length);
                this.host = Host(remain)

            } else {

                this.host = Host(host)
            }

            if(userInfo !== undefined) {

                this.userInfo = UserInfoFunction(userInfo);
            }
        }
    }

    toString() : string {

        return this.value;
    }


    get message() : MessageType {

        return SetGetter(this, 'message', this.messageFactory(this))
    }

    get valid() {

        if(this.host) {

            if(!this.host.valid) {

                return false;
            }
        }

        if(this.port) {

            if(!this.port.valid) {

                return false;
            }
        }

        if(this.userInfo) {

            if(!this.userInfo.valid) {

                return false;
            }
        }

        return true;
    }
}
