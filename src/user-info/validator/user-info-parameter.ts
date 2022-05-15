import Dynamic from '@alirya/validator/message/function/validatable-parameter';
import UserInfoMessage from '../validatable/string/user-info-parameter';
import UserInfoParameters from "./user-info-parameters";
import SimpleValidator from "@alirya/validator/simple";
import ReadonlyValidatable from "../validatable/readonly";

export interface UserInfoParameter<MessageType> {
    message ?: Dynamic<string, MessageType|string>
}

export default function UserInfoParameter({}) : SimpleValidator<string, string, ReadonlyValidatable<string>>;

export default function UserInfoParameter<MessageType>(
    {
        message,
    } : Required<UserInfoParameter<MessageType>>
) : SimpleValidator<string, string, ReadonlyValidatable<MessageType>>;

export default function UserInfoParameter<MessageType>(
    {
        message = UserInfoMessage,
    } : Required<UserInfoParameter<MessageType|string>>
) : SimpleValidator<string, string, ReadonlyValidatable<MessageType|string>> {

    return UserInfoParameters((value, valid) => message({value, valid}));
}
