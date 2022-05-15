import Value from "@alirya/value/value";
import Dynamic from '@alirya/validator/message/function/validatable-parameter';
import StringMatch from '@alirya/string/validatable/match-parameters';
import QueryMessage from './validatable/string/query-parameter';
import QueryParameters from "./ensure-parameters";

export interface QueryParameterArgument<MessageType> extends Value<string> {

    message ?: Dynamic<string, MessageType|string>
}

export default function QueryParameter(
    {
        value,
    } : Omit<QueryParameterArgument<string>, 'message'>
) : StringMatch<string, string>;

export default function QueryParameter<MessageT>(
    {
        value,
        message,
    } : Required<QueryParameterArgument<MessageT>>
) : StringMatch<string, MessageT>;

export default function QueryParameter<MessageT>(
    {
        value,
        message = QueryMessage,
    } : Required<QueryParameterArgument<MessageT|string>>
)  : StringMatch<string, string|MessageT> {

    return QueryParameters(value, (value, valid) => message({value, valid}));
}
