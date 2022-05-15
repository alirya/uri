import Dynamic from '@alirya/validator/message/function/validatable-parameter';
import { CallbackFunctionReturn as  Ipv4Return} from '@alirya/validator/validatable/callback-function-parameters';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import Ipv4Message from './validatable/string/ipv4-parameter';
import Ipv4Validatable from './validatable/ipv4-parameters';

export interface Ipv4ParameterArgument<MessageType> {
    string : string,
    message ?: Dynamic<string, MessageType>
}

export default function Ipv4Parameter(
    {
        string,
    } : Ipv4ParameterArgument<string>
) : Ipv4Return<string, string, string>;

export default function Ipv4Parameter<MessageType>(
    {
        string,
        message,
    } : Ipv4ParameterArgument<MessageType>

) : Ipv4Return<string, string, MessageType>;

export default function Ipv4Parameter<MessageType>(
    {
        string,
        message = Ipv4Message,
    } : Ipv4ParameterArgument<string|MessageType>

) : Ipv4Return<string, string, string|MessageType> {

    let scheme = Ipv4Validatable(string, (value, valid) => message({value, valid}));

    AssertValid(scheme);

    return scheme;
}
