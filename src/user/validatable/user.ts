import {ValidatableParameters, ValidatableParameter} from '@axiona/validator/message/function/validatable.js';
import Pattern from '../pattern/user.js';
import {MatchParameters, MatchType} from '@axiona/string/validatable/match.js';
import Value from '@axiona/value/value.js';
import UserMessage from './string/user.js';
import Validatable from '@axiona/validator/value/validatable.js';
import PatternContainer from '@axiona/string/pattern/pattern/pattern.js';

export function UserParameters(
    source : string,
) : MatchType<string, string>;

export function UserParameters<MessageT>(
    source : string,
    message: ValidatableParameters<string, MessageT, [RegExp]>
) : MatchType<string, MessageT>;

export function UserParameters<MessageT>(
    source : string,
    message: ValidatableParameters<string, MessageT|string, [RegExp]> = (value, valid, pattern) => UserMessage.Parameters(value, valid)
)  : MatchType<string, string|MessageT> {

    return new MatchParameters(
        source,
        new RegExp(`^${Pattern.source}*$`, Pattern.flags),
        message
    );
}


export interface UserArgument<MessageType> extends Value<string> {

    message ?: ValidatableParameter<string, MessageType|string, Validatable<string> & PatternContainer>;
}

export function UserParameter(
    {
        value,
    } : Omit<UserArgument<string>, 'message'>
) : MatchType<string, string>;

export function UserParameter<MessageT>(
    {
        value,
        message,
    } : Required<UserArgument<MessageT>>
) : MatchType<string, MessageT>;

export function UserParameter<MessageT>(
    {
        value,
        message = UserMessage.Parameter,
    } : Required<UserArgument<MessageT|string>>
)  : MatchType<string, string|MessageT> {

    return UserParameters(value, (value, valid, pattern) => message({value, valid, pattern}));
}


namespace User {
    export const Parameters = UserParameters;
    export const Parameter = UserParameter;
    export type Argument<MessageType> = UserArgument<MessageType>;
}
export default User;
