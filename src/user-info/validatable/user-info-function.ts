import UserInfoMessage from './string/user-info';
import UserInfo from './user-info';

export default function UserInfoFunction(
    value : string,
) : UserInfo<string>;

export default function UserInfoFunction<MessageType>(
    value : string,
    message : (result : Omit<UserInfo<MessageType>, 'message'>) => MessageType
) : UserInfo<MessageType>;

export default function UserInfoFunction(
    value : string,
    message : (result : Omit<UserInfo<string>, 'message'>) => string = UserInfoMessage
) : UserInfo<string> {

    return new UserInfo<string>(value, message);
}
