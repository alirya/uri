import Callback from '@alirya/string/validatable/callback';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
export default function Ipv6(string: string): Callback<string, string>;
export default function Ipv6<MessageType>(string: string, message: (result: Readonly<Value<string> & Validatable<boolean>>) => MessageType): Callback<string, MessageType>;
//# sourceMappingURL=ipv6.d.ts.map