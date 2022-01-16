import StringMatch from '@alirya/string/validatable/match';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
export default function Query(query: string): StringMatch<string, string>;
export default function Query<MessageT>(query: string, message: (result: Readonly<Value<string> & Validatable>) => MessageT): StringMatch<string, MessageT>;
//# sourceMappingURL=query.d.ts.map