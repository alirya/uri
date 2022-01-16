import Validatable from '@alirya/validator/validatable/validatable';
import Value from '@alirya/value/value';
import Callback from '@alirya/string/validatable/callback';
export default function Host(string: string): Callback<string, string>;
export default function Host<MessageType>(string: string, message: (result: Readonly<Value<string> & Validatable<boolean>>) => MessageType): Callback<string, MessageType>;
//# sourceMappingURL=host.d.ts.map