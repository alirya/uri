import HostValidatable from './validatable/host';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import Validatable from '@alirya/validator/validatable/validatable';
import Value from '@alirya/value/value';
import Callback from '@alirya/string/validatable/callback';
import HostMessage from './validatable/string/host';

export default function Host(
    string : string,
) : Callback<string, string>;
export default function Host<MessageType>(
    string : string,
    message: (result: Readonly<Value<string> & Validatable<boolean>>) => MessageType
) : Callback<string, MessageType>;
export default function Host<MessageType>(
    string : string,
    message  : (result: Readonly<Value<string> & Validatable<boolean>>) => string = HostMessage
) {
    let scheme = HostValidatable(string, message);

    AssertValid(scheme);

    return  scheme;
}


