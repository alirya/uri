import StringMatch from "@dikac/t-string/validatable/match";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
export default function Scheme(scheme: string): StringMatch<string, string>;
export default function Scheme<MessageT>(scheme: string, message: (result: Readonly<Value<string> & Validatable>) => MessageT): StringMatch<string, MessageT>;
