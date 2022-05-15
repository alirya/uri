import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import Callback, {
    CallbackFunctionReturn as HostReturn,
} from '@alirya/validator/validatable/callback-function-parameters';
import HostBoolean from '../boolean/host';
import HostMessage from './string/host-parameters';
import ToString from "@alirya/string/to-string";
import AssertedToString from "@alirya/string/validatable/asserted-to-string";

export interface HostParameterArgument<MessageType> {
    string : string,
    message ?: Dynamic<string, MessageType>
}

export default function HostParameter(
    {
        string,
    } : HostParameterArgument<string>
) : HostReturn<string, string, string> & ToString;

export default function HostParameter<MessageType>(
    {
        string,
        message,
    } : HostParameterArgument<MessageType>

) : HostReturn<string, string, MessageType> & ToString;

export default function HostParameter<MessageType>(
    {
        string,
        message = HostMessage,
    } : HostParameterArgument<string|MessageType>

) : HostReturn<string, string, string|MessageType> & ToString  {

    return AssertedToString(Callback<string, string>(string, HostBoolean, message)) as HostReturn<string, string, string|MessageType> & ToString;
}

