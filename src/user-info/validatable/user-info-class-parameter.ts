import Dynamic from '@alirya/validator/message/function/validatable-parameter';
import UserInfoClassParameters from "./user-info-class-parameters";
import Value from "@alirya/value/value";

export interface UserInfoClassParametersArgument<MessageType> extends Value<string> {
    message : Dynamic<string, MessageType>
}

export default class UserInfoClassParameter<MessageType> extends UserInfoClassParameters<MessageType> {

    constructor(
        {
            value,
            message
        } : UserInfoClassParametersArgument<MessageType>
    ) {

        super(value, (value, valid) => message({value, valid}))
    }
}
