import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import ValueOf from '@alirya/value/value-of/value-of';
export default function Port(port: number | string, message?: (result: Readonly<Value<number | string> & Validatable>) => string): Readonly<Value<string | number> & Message<string> & Validatable> & ValueOf<number | string>;
//# sourceMappingURL=port.d.ts.map