import Dynamic from '@alirya/validator/message/function/validatable-parameter';
import { CallbackFunctionReturn as  Ipv6Return} from '@alirya/validator/validatable/callback-function-parameters';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import Ipv6Message from './validatable/string/ipv6-parameter';
import Ipv6Validatable from './validatable/ipv6-parameters';

export interface Ipv6ParameterArgument<MessageType> {
    string : string,
    message ?: Dynamic<string, MessageType>
}

export default function Ipv6Parameter(
    {
        string,
    } : Ipv6ParameterArgument<string>
) : Ipv6Return<string, string, string>;

export default function Ipv6Parameter<MessageType>(
    {
        string,
        message,
    } : Ipv6ParameterArgument<MessageType>

) : Ipv6Return<string, string, MessageType>;

export default function Ipv6Parameter<MessageType>(
    {
        string,
        message = Ipv6Message,
    } : Ipv6ParameterArgument<string|MessageType>

) : Ipv6Return<string, string, string|MessageType> {

    let scheme = Ipv6Validatable(string, (value, valid) => message({value, valid}));

    AssertValid(scheme);

    return scheme;
}
