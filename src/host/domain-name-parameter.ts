import Dynamic from '@alirya/validator/message/function/validatable-parameter';
import { CallbackFunctionReturn as  DomainNameReturn} from '@alirya/validator/validatable/callback-function-parameters';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import DomainNameMessage from './validatable/string/domain-name-parameter';
import DomainNameValidatable from './validatable/domain-name-parameters';

export interface DomainNameParameterArgument<MessageType> {
    string : string,
    message ?: Dynamic<string, MessageType>
}

export default function DomainNameParameter(
    {
        string,
    } : DomainNameParameterArgument<string>
) : DomainNameReturn<string, string, string>;

export default function DomainNameParameter<MessageType>(
    {
        string,
        message,
    } : DomainNameParameterArgument<MessageType>

) : DomainNameReturn<string, string, MessageType>;

export default function DomainNameParameter<MessageType>(
    {
        string,
        message = DomainNameMessage,
    } : DomainNameParameterArgument<string|MessageType>

) : DomainNameReturn<string, string, string|MessageType> {

    let scheme = DomainNameValidatable(string, (value, valid) => message({value, valid}));

    AssertValid(scheme);

    return scheme;
}
