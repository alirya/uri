import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';
import UserInfoMessage from '../validatable/string/user-info';
import {UserInfoClassParameters} from '../validatable/user-info';
import SimpleValidator from '@alirya/validator/simple';
import ReadonlyValidatable from '../validatable/readonly';

export function UserInfoParameters() : SimpleValidator<string, string, ReadonlyValidatable<string>>;

export function UserInfoParameters<MessageType>(
    message : ValidatableParameters<string, MessageType>
) : SimpleValidator<string, string, ReadonlyValidatable<MessageType>>;

export function UserInfoParameters<MessageType>(
    message : ValidatableParameters<string, MessageType|string> = UserInfoMessage.Parameters
) : SimpleValidator<string, string, ReadonlyValidatable<MessageType|string>> {

    return function (value) {

        return new UserInfoClassParameters(value, message);

    } as SimpleValidator<string, string, ReadonlyValidatable<MessageType|string>>;
}


export interface UserInfoParameter<MessageType> {
    message ?: ValidatableParameter<string, MessageType|string>;
}

export function UserInfoParameter({}) : SimpleValidator<string, string, ReadonlyValidatable<string>>;

export function UserInfoParameter<MessageType>(
    {
        message,
    } : Required<UserInfoParameter<MessageType>>
) : SimpleValidator<string, string, ReadonlyValidatable<MessageType>>;

export function UserInfoParameter<MessageType>(
    {
        message = UserInfoMessage.Parameter,
    } : Required<UserInfoParameter<MessageType|string>>
) : SimpleValidator<string, string, ReadonlyValidatable<MessageType|string>> {

    return UserInfoParameters((value, valid) => message({value, valid}));
}


namespace UserInfo {
    export const Parameters = UserInfoParameters;
    export const Parameter = UserInfoParameter;
}
export default UserInfo;
