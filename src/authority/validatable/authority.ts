import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';
import {PortParameters} from '../../port/validatable/port.js';
import {RemovePrefixParameters} from '@alirya/string/remove-prefix.js';
import {HostParameters} from '../../host/validatable/host.js';
import UserInfoInterface from '../../user-info/validatable/validatable.js';
import AuthorityInterface from './validatable.js';
import Message from '@alirya/message/message.js';
import NotEmpty from '@alirya/string/boolean/not-empty.js';
import {UserInfoParameters} from '../../user-info/validatable/user-info.js';
import {SetGetterParameters} from '@alirya/object/value/value/set-getter.js';

export class AuthorityParameters<MessageType = unknown> implements AuthorityInterface<
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

            const parts = value.split('@', 2);

            if(parts.length === 2) {

                [userInfo, host] = parts;

            } else {

                host = parts[0];
            }

            // try ipv 6
            const hostPort = host.match(/\:[0-9]*$/);

            if(hostPort) {

                const port = hostPort[0];
                this.port = PortParameters(RemovePrefixParameters(port, ':'));

                const remain = host.slice(0, host.length - port.length);
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

        return SetGetterParameters(this, 'message', this.messageFactory(this));
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



export class AuthorityParameter<MessageType = unknown> extends AuthorityParameters<MessageType> {

    constructor(
        {
            value,
            message,
        } : {
            value : string,
            message : (result : Omit<AuthorityInterface<MessageType>, 'message'>) => MessageType
        }
    ) {

        super(value, message);
    }

}


namespace Authority {
    export const Parameters = AuthorityParameters;
    export const Parameter = AuthorityParameter;
}
export default Authority;
