import Value from "@alirya/value/value";
import Dynamic from '@alirya/validator/message/function/validatable-parameter';
import Validatable from '@alirya/validator/value/validatable';
import StringMatch from '@alirya/string/validatable/match-parameters';
import SchemeMessage from './string/scheme-parameter';
import SchemeParameters from "./scheme-parameters";
import Pattern from "@alirya/string/pattern/pattern/pattern";

export interface SchemeParameterArgument<MessageType> extends Value<string> {

    message ?: Dynamic<string, MessageType|string, Validatable<string> & Pattern>
}

export default function SchemeParameter(
    {
        value,
    } : Omit<SchemeParameterArgument<string>, 'message'>
) : StringMatch<string, string>;

export default function SchemeParameter<MessageT>(
    {
        value,
        message,
    } : Required<SchemeParameterArgument<MessageT>>
) : StringMatch<string, MessageT>;

export default function SchemeParameter<MessageT>(
    {
        value,
        message = SchemeMessage,
    } : Required<SchemeParameterArgument<MessageT|string>>
)  : StringMatch<string, string|MessageT> {

    return SchemeParameters(
        value,
        (value, valid, pattern) => message({value, valid, pattern})
    );
}
