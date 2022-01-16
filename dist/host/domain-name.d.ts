import Validatable from '@alirya/validator/validatable/validatable';
import Value from '@alirya/value/value';
import Callback from '@alirya/string/validatable/callback';
export default function DomainName(string: string): Callback<string, string>;
export default function DomainName<MessageType>(string: string, message: (result: Readonly<Value<string> & Validatable<boolean>>) => MessageType): Callback<string, MessageType>;
//# sourceMappingURL=domain-name.d.ts.map