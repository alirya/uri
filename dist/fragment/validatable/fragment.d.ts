import StringMatch from "@alirya/string/validatable/match";
import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
export default function Fragment(fragment: string): StringMatch<string, string>;
export default function Fragment<MessageT>(fragment: string, message: (result: Readonly<Value<string> & Validatable>) => MessageT): StringMatch<string, MessageT>;
//# sourceMappingURL=fragment.d.ts.map