import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import PortParameters from '../../port/validatable/port-parameters';
import RemovePrefixCharacter from '@alirya/string/remove-prefix-parameters';
import HostParameters from '../../host/validatable/host-parameters';
import UserInfoInterface from '../../user-info/validatable/validatable';
import AuthorityInterface from './validatable';
import Message from '@alirya/message/message';
import NotEmpty from '@alirya/string/boolean/not-empty';
import UserInfoParameters from '../../user-info/validatable/user-info-function-parameters';
import SetGetter from '@alirya/object/value/value/set-getter-parameters';

export default class AuthorityParameters<MessageType = unknown> implements AuthorityInterface<
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
                this.port = PortParameters(RemovePrefixCharacter(port, ':'));

                let remain = host.slice(0, host.length - port.length);
                this.host = HostParameters(remain);

            } else {

                this.host = HostParameters(host);
            }

            if(userInfo !== undefined) {

                this.userInfo = UserInfoParameters(userInfo);
            }
        }
    }

    toString() : string {

        return this.value;
    }


    get message() : MessageType {

        return SetGetter(this, 'message', this.messageFactory(this));
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
