import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import Callback, {
    CallbackFunctionReturn as Ipv6Return,
} from '@alirya/validator/validatable/callback-function-parameters';
import Ipv6Boolean from '../boolean/ipv6';
import Ipv6Message from './string/ipv6-parameters';
import ToString from "@alirya/string/to-string";
import AssertedToString from "@alirya/string/validatable/asserted-to-string";

export interface Ipv6ParameterArgument<MessageType> {
    string : string,
    message ?: Dynamic<string, MessageType>
}

export default function Ipv6Parameter(
    {
        string,
    } : Ipv6ParameterArgument<string>
) : Ipv6Return<string, string, string> & ToString;

export default function Ipv6Parameter<MessageType>(
    {
        string,
        message,
    } : Ipv6ParameterArgument<MessageType>

) : Ipv6Return<string, string, MessageType> & ToString;

export default function Ipv6Parameter<MessageType>(
    {
        string,
        message = Ipv6Message,
    } : Ipv6ParameterArgument<string|MessageType>

) : Ipv6Return<string, string, string|MessageType> & ToString  {

    return AssertedToString(Callback<string, string>(string, Ipv6Boolean, message)) as Ipv6Return<string, string, string|MessageType> & ToString;
}

