import UserInfoMessage from './string/user-info.js';
import ReadonlyValidatable from './readonly.js';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import Value from '@alirya/value/value.js';
import MemoizeAccessor from '@alirya/object/function/memoize-accessor.js';
import ValidatableIntrface from '@alirya/validator/validatable/validatable.js';
import {UserParameters} from '../../user/validatable/user.js';
import {PasswordParameters} from '../../password/validatable/password.js';
import NotEmpty from '@alirya/string/boolean/not-empty.js';
import {Optional} from 'utility-types';

export class UserInfoClassParameters<MessageType> implements ReadonlyValidatable<MessageType> {

    readonly user ?:  Readonly<ValidatableIntrface<string, string>>;
    readonly password ?:  Readonly<ValidatableIntrface<string, string>>;
    #message: ValidatableParameters<string, MessageType>;

    constructor(
        readonly value : string,
        message : ValidatableParameters<string, MessageType>,
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



export interface UserInfoClassArgument<MessageType> extends Value<string> {
    message : ValidatableParameter<string, MessageType>;
}

export class UserInfoClassParameter<MessageType> extends UserInfoClassParameters<MessageType> {

    constructor(
        {
            value,
            message
        } : UserInfoClassArgument<MessageType>
    ) {

        super(value, (value, valid) => message({value, valid}));
    }
}


export function UserInfoParameters(value : string) : ReadonlyValidatable<string>;

export function UserInfoParameters<MessageType>(
    value : string,
    message : ValidatableParameters<string, MessageType>
) : ReadonlyValidatable<MessageType>;

export function UserInfoParameters<MessageType>(
    value : string,
    message : ValidatableParameters<string, MessageType|string> = UserInfoMessage.Parameters
) : ReadonlyValidatable<MessageType|string> {

    return new UserInfoClassParameters(value, message);
}


export interface UserInfoArgument<MessageType> extends Optional<UserInfoClassArgument<MessageType>, 'message'> {}

export function UserInfoParameter(
    {
        value,
    } : Required<UserInfoArgument<string>>
) : ReadonlyValidatable<string>;

export function UserInfoParameter<MessageType>(
    {
        value,
        message,
    } : Required<UserInfoArgument<MessageType>>
) : ReadonlyValidatable<MessageType>;

export function UserInfoParameter<MessageType>(
    {
        value,
        message = UserInfoMessage.Parameter,
    } : Required<UserInfoArgument<MessageType|string>>
) : ReadonlyValidatable<MessageType|string> {

    return UserInfoParameters(value, (value, valid) => message({valid, value}));
}


namespace UserInfoFunction {
    export const Parameters = UserInfoParameters;
    export const Parameter = UserInfoParameter;
}
export default UserInfoFunction;
