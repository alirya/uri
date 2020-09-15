import ValidatableIntrface from "@dikac/t-validator/validatable/validatable";
import Validatable from "./validatable";
import User from "../../user/validatable/user";
import Password from "../../password/validatable/password";
import NotEmpty from "@dikac/t-string/boolean/not-empty";
import SetGetter from "@dikac/t-object/value/value/set-getter";


export default class UserInfo<MessageType> implements Validatable<MessageType, Readonly<ValidatableIntrface<string, string>>, Readonly<ValidatableIntrface<string, string>>> {

    readonly user ?:  Readonly<ValidatableIntrface<string, string>>;
    readonly password ?:  Readonly<ValidatableIntrface<string, string>>;

    constructor(
        readonly value : string,
        protected messageFactory : (result : Omit<Validatable<MessageType>, 'message'>) => MessageType
    ) {

        if(NotEmpty(value)) {

            let [user, password] = value.split(':', 2);

            this.user = User(user);

            if(password !== undefined) {

                this.password = Password(password);
            }
        }
    }

    get message() : MessageType {

        return SetGetter(this, 'message', this.messageFactory(this))
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
