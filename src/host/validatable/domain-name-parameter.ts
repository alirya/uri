import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import Callback, {
    CallbackFunctionReturn as DomainNameReturn,
} from '@alirya/validator/validatable/callback-function-parameters';
import DomainNameBoolean from '../boolean/domain-name';
import DomainNameMessage from './string/domain-name-parameters';
import ToString from "@alirya/string/to-string";
import AssertedToString from "@alirya/string/validatable/asserted-to-string";

export interface DomainNameParameterArgument<MessageType> {
    string : string,
    message ?: Dynamic<string, MessageType>
}

export default function DomainNameParameter(
    {
        string,
    } : DomainNameParameterArgument<string>
) : DomainNameReturn<string, string, string> & ToString;

export default function DomainNameParameter<MessageType>(
    {
        string,
        message,
    } : DomainNameParameterArgument<MessageType>

) : DomainNameReturn<string, string, MessageType> & ToString;

export default function DomainNameParameter<MessageType>(
    {
        string,
        message = DomainNameMessage,
    } : DomainNameParameterArgument<string|MessageType>

) : DomainNameReturn<string, string, string|MessageType> & ToString  {

    return AssertedToString(Callback<string, string>(string, DomainNameBoolean, message)) as DomainNameReturn<string, string, string|MessageType> & ToString;
}

