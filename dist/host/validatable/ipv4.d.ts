import Callback from "@dikac/t-string/validatable/callback";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
export default function Ipv4(string: string): Callback<string, string>;
export default function Ipv4<MessageType>(string: string, message: (result: Readonly<Value<string> & Validatable<boolean>>) => MessageType): Callback<string, MessageType>;
