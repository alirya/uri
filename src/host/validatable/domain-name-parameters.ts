import Callback, { CallbackFunctionReturn as DomainNameReturn } from '@alirya/validator/validatable/callback-function-parameters';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import DomainNameBoolean from '../boolean/domain-name';
import DomainNameMessage from './string/domain-name-parameters';
import ToString from "@alirya/string/to-string";
import AssertedToString from "@alirya/string/validatable/asserted-to-string";

export default function DomainNameParameters(
    string : string,
) : DomainNameReturn<string, string, string> & ToString ;

export default function DomainNameParameters<MessageType>(
    string : string,
    message: Dynamic<string, MessageType>
) : DomainNameReturn<string, string, MessageType> & ToString ;

export default function DomainNameParameters<MessageType>(
    string : string,
    message : Dynamic<string, string|MessageType>= DomainNameMessage
) {
    return AssertedToString(Callback<string, string>(string, DomainNameBoolean, message));
}

