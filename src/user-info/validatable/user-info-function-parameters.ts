import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import UserInfoMessage from './string/user-info-parameters';
import UserInfoClassParameters from './user-info-class-parameters';
import ReadonlyValidatable from "../validatable/readonly";

export default function UserInfoFunctionParameters(value : string) : ReadonlyValidatable<string>;

export default function UserInfoFunctionParameters<MessageType>(
    value : string,
    message : Dynamic<string, MessageType>
) : ReadonlyValidatable<MessageType>;

export default function UserInfoFunctionParameters<MessageType>(
    value : string,
    message : Dynamic<string, MessageType|string> = UserInfoMessage
) : ReadonlyValidatable<MessageType|string> {

    return new UserInfoClassParameters(value, message);
}
