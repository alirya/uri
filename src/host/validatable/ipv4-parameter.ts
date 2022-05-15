import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import Callback, {
    CallbackFunctionReturn as Ipv4Return,
} from '@alirya/validator/validatable/callback-function-parameters';
import Ipv4Boolean from '../boolean/ipv4';
import Ipv4Message from './string/ipv4-parameters';
import ToString from "@alirya/string/to-string";
import AssertedToString from "@alirya/string/validatable/asserted-to-string";

export interface Ipv4ParameterArgument<MessageType> {
    string : string,
    message ?: Dynamic<string, MessageType>
}

export default function Ipv4Parameter(
    {
        string,
    } : Ipv4ParameterArgument<string>
) : Ipv4Return<string, string, string> & ToString;

export default function Ipv4Parameter<MessageType>(
    {
        string,
        message,
    } : Ipv4ParameterArgument<MessageType>

) : Ipv4Return<string, string, MessageType> & ToString;

export default function Ipv4Parameter<MessageType>(
    {
        string,
        message = Ipv4Message,
    } : Ipv4ParameterArgument<string|MessageType>

) : Ipv4Return<string, string, string|MessageType> & ToString  {

    return AssertedToString(Callback<string, string>(string, Ipv4Boolean, message)) as Ipv4Return<string, string, string|MessageType> & ToString;
}

