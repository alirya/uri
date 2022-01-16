import Validatable from "@alirya/validator/validatable/validatable";
import Value from "@alirya/value/value";
import StringMatch from "@alirya/string/validatable/match-parameters";
export default function String(user: string): StringMatch<string, string>;
export default function String<MessageT>(user: string, message: (result: Readonly<Value<string> & Validatable>) => MessageT): StringMatch<string, MessageT>;
//# sourceMappingURL=string.d.ts.map