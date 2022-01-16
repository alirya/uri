import Validatable from '@alirya/validator/validatable/validatable';
import Value from '@alirya/value/value';
import StringMatch from '@alirya/string/validatable/match';
export default function String(query: string): StringMatch<string, string>;
export default function String<MessageT>(query: string, message: (result: Readonly<Value<string> & Validatable>) => MessageT): StringMatch<string, MessageT>;
//# sourceMappingURL=string.d.ts.map