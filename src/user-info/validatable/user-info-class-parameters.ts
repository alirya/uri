import MemoizeAccessor from '@alirya/object/function/memoize-accessor';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import ValidatableIntrface from '@alirya/validator/validatable/validatable';
import ReadonlyValidatable from './readonly';
import UserParameters from '../../user/validatable/user-parameters';
import PasswordParameters from '../../password/validatable/password-parameters';
import NotEmpty from '@alirya/string/boolean/not-empty';


export default class UserInfoClassParameters<MessageType> implements ReadonlyValidatable<MessageType> {

    readonly user ?:  Readonly<ValidatableIntrface<string, string>>;
    readonly password ?:  Readonly<ValidatableIntrface<string, string>>;
    #message: Dynamic<string, MessageType>;

    constructor(
        readonly value : string,
        message : Dynamic<string, MessageType>,
    ) {

      this.#message = message;

      if(NotEmpty(value)) {

        let [user, password] = value.split(':', 2);

        this.user = UserParameters(user);

        if(password !== undefined) {

          this.password = PasswordParameters(password);
        }
      }
    }

    @MemoizeAccessor()
    get message() : MessageType {

        return this.#message(this.value, this.valid);
    }

    get valid () : boolean {

        if(this.user) {

            if(!this.user.valid) {

                return false;
            }
        }

        if(this.password) {

            if(!this.password.valid) {

                return false;
            }
        }

        return true;
    }
}
