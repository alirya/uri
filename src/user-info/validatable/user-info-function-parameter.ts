import Dynamic from '@alirya/validator/message/function/validatable-parameter';
import UserInfoMessage from './string/user-info-parameter';
import Value from "@alirya/value/value";
import UserInfoFunctionParameters from "./user-info-function-parameters";
import ReadonlyValidatable from "../validatable/readonly";

export interface UserInfoFunctionParameter<MessageType> extends Value<string> {
    message ?: Dynamic<string, MessageType|string>
}

export default function UserInfoParameter(
    {
        value,
    } : Required<UserInfoFunctionParameter<string>>
) : ReadonlyValidatable<string>;

export default function UserInfoParameter<MessageType>(
    {
        value,
        message,
    } : Required<UserInfoFunctionParameter<MessageType>>
) : ReadonlyValidatable<MessageType>;

export default function UserInfoParameter<MessageType>(
    {
        value,
        message = UserInfoMessage,
    } : Required<UserInfoFunctionParameter<MessageType|string>>
) : ReadonlyValidatable<MessageType|string> {

    return UserInfoFunctionParameters(value, (value, valid) => message({valid, value}));
}
