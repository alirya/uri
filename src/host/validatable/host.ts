import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import Callback, { CallbackFunctionReturn as HostReturn } from '@alirya/validator/validatable/callback-function-parameters';
import HostBoolean from '../boolean/host';
import HostMessage from './string/host';
import ToString from "@alirya/string/to-string";
import AssertedToString from "@alirya/string/validatable/asserted-to-string";

export default function Host(
    string : string,
) : HostReturn<string, string, string> & ToString;
export default function Host<MessageType>(
    string : string,
    message: Dynamic<string, MessageType>
) : HostReturn<string, string, MessageType> & ToString;
export default function Host<MessageType>(
    string : string,
    message : Dynamic<string, string|MessageType>= HostMessage
) {
    return AssertedToString(Callback<string, string>(string, HostBoolean, message));
}

