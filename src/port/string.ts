import Dynamic from '@alirya/validator/dist/message/function/validatable-parameters';
import PortMessage from './validatable/string/port-parameters';
import Value from '@alirya/value/value';
import Message from '@alirya/message/message';
import Validatable from '@alirya/validatable/validatable';
import ValueOf from '@alirya/value/value-of/value-of';
import Port from './validatable/port';

export default function String(
    value : string|number,
) : Readonly<Value<string|number> & Message<string> & Validatable> /*& ValueOf<number|string>*/;

export default function String<MessageType>(
    value : string|number,
    message : Dynamic<string|number, MessageType>
) : Readonly<Value<string|number> & Message<MessageType> & Validatable> /* & ValueOf<number|string>*/;

export default function String(
    value : string|number,
    message : Dynamic<string|number, string> = PortMessage
) : Readonly<Value<string|number> & Message<string> & Validatable> /* & ValueOf<number|string>*/ {

    return Port(value, message);
}
