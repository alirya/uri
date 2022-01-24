import UserInfoInterface from '../user-info';
import ValidatableInterface from '@alirya/validator/validatable/validatable';
import { O } from 'ts-toolbelt';
import Validatable from './validatable';

export default interface Readonly<
  MessageType = unknown,
  UserType extends globalThis.Readonly<ValidatableInterface<string>> = globalThis.Readonly<ValidatableInterface<string>>,
  PasswordType extends globalThis.Readonly<ValidatableInterface<string>> = globalThis.Readonly<ValidatableInterface<string>>,
  > extends O.Readonly<Validatable<MessageType, UserType, PasswordType>, 'deep'> {

}

// export default interface Readonly<
//     MessageType = unknown,
//     UserType extends Readonly<ValidatableInterface<string>> = Readonly<ValidatableInterface<string>>,
//     PasswordType extends Readonly<ValidatableInterface<string>> = Readonly<ValidatableInterface<string>>,
// > extends
//     UserInfoInterface<UserType, PasswordType>, ValidatableInterface<string, MessageType> {
//
// }
// //
// // export type Readonlyz<
// //   MessageType = unknown,
// //   UserType extends Readonly<ValidatableInterface<string>> = Readonly<ValidatableInterface<string>>,
// //   PasswordType extends Readonly<ValidatableInterface<string>> = Readonly<ValidatableInterface<string>>
// //   > = UserInfoInterface<UserType, PasswordType> & ValidatableInterface<string, MessageType>;
