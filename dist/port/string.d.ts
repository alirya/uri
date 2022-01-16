import Value from '@alirya/value/value';
import Message from '@alirya/message/message';
import Validatable from '@alirya/validatable/validatable';
import ValueOf from '@alirya/value/value-of/value-of';
export default function String(value: string | number): Readonly<Value<string | number> & Message<string> & Validatable> & ValueOf<number | string>;
export default function String<MessageType>(value: string | number, message: (result: Readonly<Value<string | number> & Validatable>) => MessageType): Readonly<Value<string | number> & Message<MessageType> & Validatable> & ValueOf<number | string>;
//# sourceMappingURL=string.d.ts.map