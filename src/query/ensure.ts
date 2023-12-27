import {QueryParameters} from './validatable/query.js';
import AssertValid from '@axiona/validator/validatable/assert/valid.js';
import {MatchParameters} from '@axiona/string/validatable/match.js';
import Value from '@axiona/value/value.js';
import {ValidatableParameters, ValidatableParameter} from '@axiona/validator/message/function/validatable.js';
import QueryMessage from './validatable/string/query.js';

export function EnsureParameters(
    query : string,
) : MatchParameters<string, string>;

export function EnsureParameters<MessageT>(
    query : string,
    message: ValidatableParameters<string, MessageT>
) : MatchParameters<string, MessageT>;

export function EnsureParameters<MessageT>(
    query : string,
    message: ValidatableParameters<string, MessageT|string> = QueryMessage.Parameters
)  : MatchParameters<string, MessageT|string> {

    const validatable = QueryParameters(query, message);

    AssertValid(validatable);

    return  validatable;
}




export interface QueryArgument<MessageType> extends Value<string> {

    message ?: ValidatableParameter<string, MessageType|string>;
}

export function EnsureParameter(
    {
        value,
    } : Omit<QueryArgument<string>, 'message'>
) : MatchParameters<string, string>;

export function EnsureParameter<MessageT>(
    {
        value,
        message,
    } : Required<QueryArgument<MessageT>>
) : MatchParameters<string, MessageT>;

export function EnsureParameter<MessageT>(
    {
        value,
        message = QueryMessage.Parameter,
    } : Required<QueryArgument<MessageT|string>>
)  : MatchParameters<string, string|MessageT> {

    return QueryParameters(value, (value, valid) => message({value, valid}));
}


namespace Ensure {
    export const Parameters = EnsureParameters;
    export const Parameter = EnsureParameter;
    export type Argument<MessageType> = QueryArgument<MessageType>;
}
export default Ensure;
