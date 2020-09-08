import Validatable from "@dikac/t-validator/validatable/validatable";
import Value from "@dikac/t-value/value";
import Callback from "@dikac/t-string/validatable/callback";
export default function DomainName(string: string): Callback<string, string>;
export default function DomainName<MessageType>(string: string, message: (result: Readonly<Value<string> & Validatable<boolean>>) => MessageType): Callback<string, MessageType>;
