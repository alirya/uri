import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import UserInfoMessage from '../validatable/string/user-info-parameters';
import UserInfoClassParameters from '../validatable/user-info-class-parameters';
import SimpleValidator from "@alirya/validator/simple";
import ReadonlyValidatable from "../validatable/readonly";

export default function UserInfoParameters() : SimpleValidator<string, string, ReadonlyValidatable<string>>;

export default function UserInfoParameters<MessageType>(
    message : Dynamic<string, MessageType>
) : SimpleValidator<string, string, ReadonlyValidatable<MessageType>>;

export default function UserInfoParameters<MessageType>(
    message : Dynamic<string, MessageType|string> = UserInfoMessage
) : SimpleValidator<string, string, ReadonlyValidatable<MessageType|string>> {

    return function (value) {

        return new UserInfoClassParameters(value, message);

    } as SimpleValidator<string, string, ReadonlyValidatable<MessageType|string>>;
}
