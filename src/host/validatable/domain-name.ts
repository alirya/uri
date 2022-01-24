import Callback, { CallbackFunctionType } from '@alirya/validator/validatable/callback-function-parameters';
import Dynamic from '@alirya/validator/dist/message/function/validatable-parameters';
import DomainNameBoolean from '../boolean/domain-name';
import DomainNameMessage from './string/domain-name';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';

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
    return Callback(string, DomainNameBoolean, message);
}

