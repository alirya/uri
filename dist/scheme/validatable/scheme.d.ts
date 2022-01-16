import StringMatch from '@alirya/string/validatable/match';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
export default function Scheme(scheme: string): StringMatch<string, string>;
export default function Scheme<MessageT>(scheme: string, message: (result: Readonly<Value<string> & Validatable>) => MessageT): StringMatch<string, MessageT>;
//# sourceMappingURL=scheme.d.ts.map