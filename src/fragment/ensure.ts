import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import {FragmentParameters} from './validatable/fragment.js';
import AssertValid from '@alirya/validator/validatable/assert/valid.js';
import {MatchType} from '@alirya/string/validatable/match.js';
import FragmentMessage from './validatable/string/fragment.js';
import Value from '@alirya/value/value.js';

export function EnsureParameters(
    fragment : string,
) : MatchType<string, string>;

export function EnsureParameters<MessageT>(
    fragment : string,
    message: ValidatableParameters<string, MessageT>
) : MatchType<string, MessageT>;

export function EnsureParameters<MessageT>(
    fragment : string,
    message: ValidatableParameters<string, MessageT|string> = FragmentMessage.Parameters
)  : MatchType<string, string|MessageT> {

    let validatable = FragmentParameters(fragment, message);

    AssertValid(validatable);

    return validatable;
}




export interface EnsureArgument<MessageType> extends Value<string> {

    message ?: ValidatableParameter<string, MessageType|string>;
}

export function EnsureParameter(
    {
        value
    } : Omit<EnsureArgument<string>, 'message'>
) : MatchType<string, string>;

export function EnsureParameter<MessageType>(
    {
        value,
        message,
    } : Required<EnsureArgument<MessageType>>
) : MatchType<string, MessageType>;

export function EnsureParameter<MessageType>(
    {
        value,
        message = FragmentMessage.Parameter,
    } : Required<EnsureArgument<MessageType|string>>

) : MatchType<string, MessageType|string> {

    return EnsureParameters(value, (value, valid) => message({value, valid}));
}



namespace Ensure {
    export const Parameters = EnsureParameters;
    export const Parameter = EnsureParameter;
    export type Argument<MessageType> = EnsureArgument<MessageType>;
}
export default Ensure;
