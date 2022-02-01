import MemoizeAccessor from '@alirya/object/function/memoize-accessor';
import Dynamic from '@alirya/validator/message/function/validatable-parameter';
import ValidatableIntrface from '@alirya/validator/validatable/validatable';
import ReadonlyValidatable from './readonly';
import User from '../../user/validatable/user';
import Password from '../../password/validatable/password';
import NotEmpty from '@alirya/string/boolean/not-empty';

export default class UserInfo<MessageType> implements ReadonlyValidatable<MessageType> {

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

        this.user = User(user);

        if(password !== undefined) {

          this.password = Password(password);
        }
      }
    }

    @MemoizeAccessor()
    get message() : MessageType {

        return this.#message(this);
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
