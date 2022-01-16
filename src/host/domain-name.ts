import DomainNameValidatable from './validatable/domain-name';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import Validatable from '@alirya/validator/validatable/validatable';
import Value from '@alirya/value/value';
import Callback from '@alirya/string/validatable/callback';
import DomainNameMessage from './validatable/string/domain-name';

export default function DomainName(
    string : string,
) : Callback<string, string>;
export default function DomainName<MessageType>(
    string : string,
    message: (result: Readonly<Value<string> & Validatable<boolean>>) => MessageType
) : Callback<string, MessageType>;
export default function DomainName<MessageType>(
    string : string,
    message  : (result: Readonly<Value<string> & Validatable<boolean>>) => string = DomainNameMessage
) {
    let scheme = DomainNameValidatable(string, message);

    AssertValid(scheme);

    return  scheme;
}


