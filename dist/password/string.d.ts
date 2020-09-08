import Validatable from "@dikac/t-validator/validatable/validatable";
import Value from "@dikac/t-value/value";
import StringMatch from "@dikac/t-string/validatable/match";
export default function String(password: string): StringMatch<string, string>;
export default function String<MessageT>(password: string, message: (result: Readonly<Value<string> & Validatable>) => MessageT): StringMatch<string, MessageT>;
