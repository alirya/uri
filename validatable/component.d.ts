import Message from "../../message/message";
import Validatable from "../../validatable/validatable";
import Get from "../../value/get";
import ToString from "@dikac/t-string/to-string";
export default class Component<Value extends ToString> implements Message<string>, Validatable, ToString, Get<Value> {
    private value;
    private _message;
    private _valid;
    constructor(value: Value, valid: boolean, message: string);
    get(): Value;
    toString(): string;
    message(): string;
    valid(): boolean;
}
