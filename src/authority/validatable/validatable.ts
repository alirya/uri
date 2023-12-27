import UserInfoValidatable from '../../user-info/validatable/validatable.js';
import ValidatableInterface from '@axiona/validator/validatable/validatable.js';
import Authority from '../authority.js';
import ToString from '@axiona/string/to-string.js';

export default interface Validatable<
    MessageType = unknown,
    UserInfo extends UserInfoValidatable = UserInfoValidatable,
    Host extends Readonly<ValidatableInterface<string>> & ToString = Readonly<ValidatableInterface<string>> & ToString ,
    Port extends Readonly<ValidatableInterface<string|number>> & ToString = Readonly<ValidatableInterface<string|number>> & ToString ,
> extends
    Authority<UserInfo, Host, Port>, ValidatableInterface<string, MessageType>, ToString {

}
