import UserInfoInterface from "../user-info";
import ValidatableInterface from "@dikac/t-validator/validatable/validatable";
export default interface Validatable<MessageType = unknown, UserType extends Readonly<ValidatableInterface<string>> = Readonly<ValidatableInterface<string>>, PasswordType extends Readonly<ValidatableInterface<string>> = Readonly<ValidatableInterface<string>>> extends UserInfoInterface<UserType, PasswordType>, ValidatableInterface<string, MessageType> {
}
