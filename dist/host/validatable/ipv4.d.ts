import Callback from '@alirya/string/validatable/callback';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
export default function Ipv4(string: string): Callback<string, string>;
export default function Ipv4<MessageType>(string: string, message: (result: Readonly<Value<string> & Validatable<boolean>>) => MessageType): Callback<string, MessageType>;
//# sourceMappingURL=ipv4.d.ts.map