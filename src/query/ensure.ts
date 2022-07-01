import {QueryParameters} from './validatable/query';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import {MatchParameters} from '@alirya/string/validatable/match';
import Value from '@alirya/value/value';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';
import QueryMessage from './validatable/string/query';

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

    let validatable = QueryParameters(query, message);

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
