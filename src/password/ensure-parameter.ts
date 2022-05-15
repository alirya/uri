import Value from "@alirya/value/value";
import Dynamic from '@alirya/validator/message/function/validatable-parameter';
import StringMatch from '@alirya/string/validatable/match-parameters';
import PasswordMessage from './validatable/string/password-parameter';
import EnsureParameters from "./ensure-parameters";

export interface EnsureParameterArgument<MessageType> extends Value<string> {

    message ?: Dynamic<string, MessageType|string>
}

export default function EnsureParameter(
    {
        value
    } : Omit<EnsureParameterArgument<string>, 'message'>
) : StringMatch<string, string>;

export default function EnsureParameter<MessageType>(
    {
        value,
        message,
    } : Required<EnsureParameterArgument<MessageType>>
) : StringMatch<string, MessageType>;

export default function EnsureParameter<MessageType>(
    {
        value,
        message = PasswordMessage,
    } : Required<EnsureParameterArgument<MessageType|string>>

) : StringMatch<string, MessageType|string> {

    return EnsureParameters(value, (value, valid) => message({value, valid}));
}

