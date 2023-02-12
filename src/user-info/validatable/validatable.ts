import UserInfoInterface from '../user-info.js';
import ValidatableInterface from '@alirya/validator/validatable/validatable.js';

export default interface Validatable<
    MessageType = unknown,
    UserType extends Readonly<ValidatableInterface<string>> = Readonly<ValidatableInterface<string>>,
    PasswordType extends Readonly<ValidatableInterface<string>> = Readonly<ValidatableInterface<string>>,
> extends
    UserInfoInterface<UserType, PasswordType>, ValidatableInterface<string, MessageType> {

}
