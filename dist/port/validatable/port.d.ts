import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import ValueOf from "@dikac/t-value/value-of/value-of";
export default function Port(port: number | string, message?: (result: Readonly<Value<number | string> & Validatable>) => string): Readonly<Value<string | number> & Message<string> & Validatable> & ValueOf<number | string>;
