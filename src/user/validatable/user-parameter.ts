import Value from "@alirya/value/value";
import Dynamic from '@alirya/validator/message/function/validatable-parameter';
import StringMatch from '@alirya/string/validatable/match-parameters';
import UserMessage from './string/user-parameter';
import UserParameters from "./user-parameters";
import Validatable from "../../../../validator/dist/value/validatable";
import Pattern from "../../../../string/dist/pattern/pattern/pattern";

export interface UserParameterArgument<MessageType> extends Value<string> {

    message ?: Dynamic<string, MessageType|string, Validatable<string> & Pattern>
}

export default function UserParameter(
    {
        value,
    } : Omit<UserParameterArgument<string>, 'message'>
) : StringMatch<string, string>;

export default function UserParameter<MessageT>(
    {
        value,
        message,
    } : Required<UserParameterArgument<MessageT>>
) : StringMatch<string, MessageT>;

export default function UserParameter<MessageT>(
    {
        value,
        message = UserMessage,
    } : Required<UserParameterArgument<MessageT|string>>
)  : StringMatch<string, string|MessageT> {

    return UserParameters(value, (value, valid, pattern) => message({value, valid, pattern}));
}
