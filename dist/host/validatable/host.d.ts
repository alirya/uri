import Callback from '@alirya/string/validatable/callback';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
export default function Host(string: string): Callback<string, string>;
export default function Host<MessageType>(string: string, message: (result: Readonly<Value<string> & Validatable<boolean>>) => MessageType): Callback<string, MessageType>;
//# sourceMappingURL=host.d.ts.map