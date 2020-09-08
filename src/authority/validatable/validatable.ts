import UserInfoValidatable from "../../user-info/validatable/validatable";
import ValidatableInterface from "@dikac/t-validator/validatable/validatable";
import Authority from "../authority";
import ToString from "@dikac/t-string/to-string";

export default interface Validatable<
    MessageType = unknown,
    UserInfo extends UserInfoValidatable = UserInfoValidatable,
    Host extends Readonly<ValidatableInterface<string>> & ToString = Readonly<ValidatableInterface<string>> & ToString ,
    Port extends Readonly<ValidatableInterface<string|number>> & ToString = Readonly<ValidatableInterface<string|number>> & ToString ,
> extends
    Authority<UserInfo, Host, Port>, ValidatableInterface<string, MessageType>, ToString {

}
