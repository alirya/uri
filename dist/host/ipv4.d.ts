import Validatable from "@alirya/validator/validatable/validatable";
import Value from "@alirya/value/value";
import Callback from "@alirya/string/validatable/callback";
export default function Ipv4(string: string): Callback<string, string>;
export default function Ipv4<MessageType>(string: string, message: (result: Readonly<Value<string> & Validatable<boolean>>) => MessageType): Callback<string, MessageType>;
//# sourceMappingURL=ipv4.d.ts.map