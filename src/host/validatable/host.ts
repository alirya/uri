import Dynamic from '@alirya/validator/dist/message/function/validatable-parameters';
import Callback, { CallbackFunctionType } from '@alirya/validator/validatable/callback-function-parameters';
import HostBoolean from '../boolean/host';
import HostMessage from './string/host';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';

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
    return Callback<string, string>(string, HostBoolean, message);
}

