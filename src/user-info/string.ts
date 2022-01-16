import UserInfo from './validatable/user-info';
import UserInfoMessage from './validatable/string/user-info';
import AssertValid from '@alirya/validator/validatable/assert/valid';

export default function String(
    value : string,
) : UserInfo<string>;

export default function String<MessageType>(
    value : string,
    message : (result : Omit<UserInfo<MessageType>, 'message'>) => MessageType
) : UserInfo<MessageType>;

export default function String(
    value : string,
    message : (result : Omit<UserInfo<string>, 'message'>) => string = UserInfoMessage
) : UserInfo<string> {

    let userInfo = new UserInfo<string>(value, message);

    AssertValid(userInfo);

    return userInfo;
}

