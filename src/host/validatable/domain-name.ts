import Callback, { CallbackFunctionType } from '@alirya/validator/validatable/callback-function-parameters';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import DomainNameBoolean from '../boolean/domain-name';
import DomainNameMessage from './string/domain-name';
import ToString from "@alirya/string/to-string";
import AssertedToString from "@alirya/string/validatable/asserted-to-string";

export default function DomainName(
    string : string,
) : CallbackFunctionType<string, string, string> & ToString ;

export default function DomainName<MessageType>(
    string : string,
    message: Dynamic<string, MessageType>
) : CallbackFunctionType<string, string, MessageType> & ToString ;

export default function DomainName<MessageType>(
    string : string,
    message : Dynamic<string, string|MessageType>= DomainNameMessage
) {
    return AssertedToString(Callback<string, string>(string, DomainNameBoolean, message));
}

