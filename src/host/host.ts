import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import { CallbackFunctionType } from '@alirya/validator/validatable/callback-function-parameters';
import HostValidatable from './validatable/host';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import Validatable from '@alirya/validator/validatable/validatable';
import Value from '@alirya/value/value';
import HostMessage from './validatable/string/host';

export default function Host(
    string : string,
) : CallbackFunctionType<string, string, string>;
export default function Host<MessageType>(
    string : string,
    message: Dynamic<string, MessageType>
) : CallbackFunctionType<string, string, MessageType>;
export default function Host<MessageType>(
    string : string,
    message : Dynamic<string, string|MessageType>= HostMessage
) {
    let scheme = HostValidatable(string, message);

    AssertValid(scheme);

    return  scheme;
}


