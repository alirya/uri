import Dynamic from '@alirya/validator/dist/message/function/validatable-parameters';
import { CallbackFunctionType } from '@alirya/validator/dist/validatable/callback-function-parameters';
import DomainNameValidatable from './validatable/domain-name';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import Validatable from '@alirya/validator/validatable/validatable';
import Value from '@alirya/value/value';
import DomainNameMessage from './validatable/string/domain-name';

export default function DomainName(
    string : string,
) : CallbackFunctionType<string, string, string>;
export default function DomainName<MessageType>(
    string : string,
    message: Dynamic<string, MessageType>
) : CallbackFunctionType<string, string, MessageType>;
export default function DomainName<MessageType>(
    string : string,
    message : Dynamic<string, string|MessageType>= DomainNameMessage
) {
    let scheme = DomainNameValidatable(string, message);

    AssertValid(scheme);

    return  scheme;
}


