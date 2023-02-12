import {UserInfoClassParameters} from './validatable/user-info.js';
import UserInfoMessage from './validatable/string/user-info.js';
import AssertValid from '@alirya/validator/validatable/assert/valid.js';
import ReadonlyValidatable from './validatable/readonly.js';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable.js';
import {UserInfoParameter} from './validatable/string/user-info.js';
import {
    UserInfoClassArgument as EnsureArgument
} from './validatable/user-info.js';

export function EnsureParameters(
    value : string,
) : ReadonlyValidatable<string>;

export function EnsureParameters<MessageType>(
    value : string,
    message : ValidatableParameters<string, MessageType>
) : ReadonlyValidatable<MessageType>;

export function EnsureParameters<MessageType>(
    value : string,
    message : ValidatableParameters<string, MessageType|string> = UserInfoMessage.Parameters
) : ReadonlyValidatable<MessageType|string> {

    const userInfo = new UserInfoClassParameters<MessageType|string>(value, message);

    AssertValid(userInfo);

    return userInfo;
}



export {EnsureArgument};

export function EnsureParameter(
    {
        value
    } : Omit<EnsureArgument<string>, 'message'>
) : ReadonlyValidatable<string>;

export function EnsureParameter<MessageType>(
    {
        value,
        message,
    } : Required<EnsureArgument<MessageType>>
) : ReadonlyValidatable<MessageType>;

export function EnsureParameter<MessageType>(
    {
        value,
        message = UserInfoParameter,
    } : Required<EnsureArgument<MessageType|string>>

) : ReadonlyValidatable<MessageType|string> {

    return EnsureParameters(value, (value, valid) => message({value, valid}));
}



namespace Ensure {
    export const Parameters = EnsureParameters;
    export const Parameter = EnsureParameter;
}
export default Ensure;
