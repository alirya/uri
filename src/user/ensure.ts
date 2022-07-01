import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';
import {UserParameters} from './validatable/user';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import {MatchType} from '@alirya/string/validatable/match';
import UserMessage from './validatable/string/user';
import Value from '@alirya/value/value';

export function EnsureParameters(
    user : string,
) : MatchType<string, string>;

export function EnsureParameters<MessageT>(
    user : string,
    message: ValidatableParameters<string, MessageT>
) : MatchType<string, MessageT>;

export function EnsureParameters<MessageT>(
    user : string,
    message: ValidatableParameters<string, MessageT|string, [RegExp]> = (value, valid, pattern) => UserMessage.Parameters(value, valid)
)  : MatchType<string, MessageT|string> {

    let validatable = UserParameters(user, message);

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
        message = UserMessage.Parameter,
    } : Required<EnsureArgument<MessageType|string>>

) : MatchType<string, MessageType|string> {

    return EnsureParameters(value, (value, valid) => message({value, valid}));
}



namespace Ensure {
    export const Parameters = EnsureParameters;
    export const Parameter = EnsureParameter;
}
export default Ensure;
