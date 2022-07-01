import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';
import Pattern from '../pattern/password';
import {MatchParameters} from '@alirya/string/validatable/match';
import Value from "@alirya/value/value";
import PasswordMessage from './string/password';

export function PasswordParameters(
    source : string,
) : MatchParameters<string, string>;

export function PasswordParameters<MessageT>(
    source : string,
    message: ValidatableParameters<string, MessageT>
) : MatchParameters<string, MessageT>;

export function PasswordParameters<MessageT>(
    source : string,
    message: ValidatableParameters<string, MessageT|string> = PasswordMessage.Parameters
)  {

    return new MatchParameters(source, new RegExp(`^${Pattern.source}*$`, Pattern.flags), message);
}


export interface PasswordArgument<MessageType> extends Value<string> {

    message ?: ValidatableParameter<string, MessageType|string>
}

export function PasswordParameter(
    {
        value,
    } : Omit<PasswordArgument<string>, 'message'>
) : MatchParameters<string, string>;

export function PasswordParameter<MessageT>(
    {
        value,
        message,
    } : Required<PasswordArgument<MessageT>>
) : MatchParameters<string, MessageT>;

export function PasswordParameter<MessageT>(
    {
        value,
        message = PasswordMessage.Parameter,
    } : Required<PasswordArgument<MessageT|string>>
)  : MatchParameters<string, string|MessageT> {

    return PasswordParameters(value, (value, valid) => message({value, valid}));
}


namespace Password {
    export const Parameters = PasswordParameters;
    export const Parameter = PasswordParameter;
    export type Argument<MessageType> = PasswordArgument<MessageType>;
}
export default Password;
