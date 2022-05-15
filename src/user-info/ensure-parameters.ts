import UserInfoClassParameters from './validatable/user-info-class-parameters';
import UserInfoMessage from './validatable/string/user-info-parameters';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import ReadonlyValidatable from "./validatable/readonly";
import Dynamic from "@alirya/validator/message/function/validatable-parameters";

export default function EnsureParameters(
    value : string,
) : ReadonlyValidatable<string>;

export default function EnsureParameters<MessageType>(
    value : string,
    message : Dynamic<string, MessageType>
) : ReadonlyValidatable<MessageType>;

export default function EnsureParameters<MessageType>(
    value : string,
    message : Dynamic<string, MessageType|string> = UserInfoMessage
) : ReadonlyValidatable<MessageType|string> {

    let userInfo = new UserInfoClassParameters<MessageType|string>(value, message);

    AssertValid(userInfo);

    return userInfo;
}

