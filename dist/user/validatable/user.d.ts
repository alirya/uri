import StringMatch from "@alirya/string/validatable/match";
import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
export default function User(source: string): StringMatch<string, string>;
export default function User<MessageT>(source: string, message: (result: Readonly<Value<string> & Validatable>) => MessageT): StringMatch<string, MessageT>;
//# sourceMappingURL=user.d.ts.map