import {MatchParameters} from '@alirya/string/validatable/match';
import {ValidatableParameter, ValidatableParameters} from '@alirya/validator/message/function/validatable';
import QueryPattern from '../pattern/query';
import QueryMessage from './string/query';
import Value from '@alirya/value/value';

export function QueryParameters(
    query : string,
) : MatchParameters<string, string>;

export function QueryParameters<MessageT>(
    query : string,
    message: ValidatableParameters<string, MessageT>
) : MatchParameters<string, MessageT>;

export function QueryParameters<MessageT>(
    query : string,
    message: ValidatableParameters<string, MessageT|string> = QueryMessage.Parameters
)  {

    return new MatchParameters(query, new RegExp(`^${QueryPattern}*$`, QueryPattern.flags), message);
}


export interface QueryArgument<MessageType> extends Value<string> {

    message ?: ValidatableParameter<string, MessageType|string>;
}

export function QueryParameter(
    {
        value,
    } : Omit<QueryArgument<string>, 'message'>
) : MatchParameters<string, string>;

export function QueryParameter<MessageT>(
    {
        value,
        message,
    } : Required<QueryArgument<MessageT>>
) : MatchParameters<string, MessageT>;

export function QueryParameter<MessageT>(
    {
        value,
        message = QueryMessage.Parameter,
    } : Required<QueryArgument<MessageT|string>>
)  : MatchParameters<string, string|MessageT> {

    return QueryParameters(value, (value, valid) => message({value, valid}));
}


namespace Query {
    export const Parameters = QueryParameters;
    export const Parameter = QueryParameter;
}
export default Query;
