import Value from "@alirya/value/value";
import Dynamic from '@alirya/validator/message/function/validatable-parameter';
import StringMatch from '@alirya/string/validatable/match-parameters';
import FragmentMessage from './string/fragment-parameter';
import FragmentParameters from "./fragment-parameters";

export interface FragmentParameterArgument<MessageType> extends Value<string> {

    message ?: Dynamic<string, MessageType|string>
}

export default function FragmentParameter(
    {
        value,
    } : Omit<FragmentParameterArgument<string>, 'message'>
) : StringMatch<string, string>;

export default function FragmentParameter<MessageT>(
    {
        value,
        message,
    } : Required<FragmentParameterArgument<MessageT>>
) : StringMatch<string, MessageT>;

export default function FragmentParameter<MessageT>(
    {
        value,
        message = FragmentMessage,
    } : Required<FragmentParameterArgument<MessageT|string>>
)  : StringMatch<string, string|MessageT> {

    return FragmentParameters(value, (value, valid) => message({value, valid}));
}
