import Dynamic from '@alirya/validator/message/function/validatable-parameter';
import { CallbackFunctionReturn as  HostReturn} from '@alirya/validator/validatable/callback-function-parameters';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import HostMessage from './validatable/string/host-parameter';
import HostValidatable from './validatable/host-parameters';

export interface HostParameterArgument<MessageType> {
    string : string,
    message ?: Dynamic<string, MessageType>
}

export default function HostParameter(
    {
        string,
    } : HostParameterArgument<string>
) : HostReturn<string, string, string>;

export default function HostParameter<MessageType>(
    {
        string,
        message,
    } : HostParameterArgument<MessageType>

) : HostReturn<string, string, MessageType>;

export default function HostParameter<MessageType>(
    {
        string,
        message = HostMessage,
    } : HostParameterArgument<string|MessageType>

) : HostReturn<string, string, string|MessageType> {

    let scheme = HostValidatable(string, (value, valid) => message({value, valid}));

    AssertValid(scheme);

    return scheme;
}
