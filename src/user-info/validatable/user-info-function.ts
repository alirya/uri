import Dynamic from '@alirya/validator/message/function/validatable-parameter';
import UserInfoMessage from './string/user-info';
import UserInfo from './user-info';

export default function UserInfoFunction(
    value : string,
) : UserInfo<string>;

export default function UserInfoFunction<MessageType>(
    value : string,
    message : Dynamic<string, MessageType>
) : UserInfo<MessageType>;

export default function UserInfoFunction<MessageType>(
    value : string,
    message : Dynamic<string, MessageType|string> = UserInfoMessage
) : UserInfo<MessageType|string> {

    return new UserInfo(value, message);
}
