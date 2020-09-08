import ValidatableIntrface from "@dikac/t-validator/validatable/validatable";
import Validatable from "./validatable";
export default class UserInfo<MessageType> implements Validatable<MessageType, Readonly<ValidatableIntrface<string, string>>, Readonly<ValidatableIntrface<string, string>>> {
    readonly value: string;
    protected messageFactory: (result: Omit<Validatable<MessageType>, 'message'>) => MessageType;
    readonly user?: Readonly<ValidatableIntrface<string, string>>;
    readonly password?: Readonly<ValidatableIntrface<string, string>>;
    constructor(value: string, messageFactory: (result: Omit<Validatable<MessageType>, 'message'>) => MessageType);
    get message(): MessageType;
    get valid(): boolean;
}
