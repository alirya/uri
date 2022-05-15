import Value from "@alirya/value/value";
import Dynamic from '@alirya/validator/message/function/validatable-parameter';
import StringMatch from '@alirya/string/validatable/match-parameters';
import PasswordMessage from './string/password-parameter';
import PasswordParameters from "./password-parameters";

export interface PasswordParameterArgument<MessageType> extends Value<string> {

    message ?: Dynamic<string, MessageType|string>
}

export default function PasswordParameter(
    {
        value,
    } : Omit<PasswordParameterArgument<string>, 'message'>
) : StringMatch<string, string>;

export default function PasswordParameter<MessageT>(
    {
        value,
        message,
    } : Required<PasswordParameterArgument<MessageT>>
) : StringMatch<string, MessageT>;

export default function PasswordParameter<MessageT>(
    {
        value,
        message = PasswordMessage,
    } : Required<PasswordParameterArgument<MessageT|string>>
)  : StringMatch<string, string|MessageT> {

    return PasswordParameters(value, (value, valid) => message({value, valid}));
}
