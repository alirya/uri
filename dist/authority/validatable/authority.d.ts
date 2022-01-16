import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
import UserInfoInterface from "../../user-info/validatable/validatable";
import AuthorityInterface from "./validatable";
import Message from "@alirya/message/message";
export default class Authority<MessageType = unknown> implements AuthorityInterface<MessageType, Readonly<UserInfoInterface>, Readonly<Value<string> & Validatable & Message<string>>, Readonly<Value<number | string> & Validatable & Message<string>>> {
    readonly value: string;
    protected messageFactory: (result: Omit<AuthorityInterface<MessageType>, 'message'>) => MessageType;
    host?: Readonly<Value<string> & Validatable & Message<string>>;
    port?: Readonly<Value<number | string> & Validatable & Message<string>>;
    userInfo?: Readonly<UserInfoInterface & Validatable & Message<string>>;
    constructor(value: string, messageFactory: (result: Omit<AuthorityInterface<MessageType>, 'message'>) => MessageType);
    toString(): string;
    get message(): MessageType;
    get valid(): boolean;
}
//# sourceMappingURL=authority.d.ts.map