import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import { CallbackFunctionReturn as DomainNameReturn } from '@alirya/validator/validatable/callback-function-parameters';
import DomainNameValidatable from './validatable/domain-name';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import DomainNameMessage from './validatable/string/domain-name';

export default function DomainName(
    string : string,
) : DomainNameReturn<string, string, string>;
export default function DomainName<MessageType>(
    string : string,
    message: Dynamic<string, MessageType>
) : DomainNameReturn<string, string, MessageType>;
export default function DomainName<MessageType>(
    string : string,
    message : Dynamic<string, string|MessageType>= DomainNameMessage
) {
    let scheme = DomainNameValidatable(string, message);

    AssertValid(scheme);

    return  scheme;
}


