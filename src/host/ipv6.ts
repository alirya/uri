import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import { CallbackFunctionType } from '@alirya/validator/validatable/callback-function-parameters';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import Validatable from '@alirya/validator/validatable/validatable';
import Value from '@alirya/value/value';
import Ipv6Message from './validatable/string/ipv6';
import Ipv6Validatable from './validatable/ipv6';


export default function Ipv6(
    string : string,
) : CallbackFunctionType<string, string, string>;
export default function Ipv6<MessageType>(
    string : string,
    message: Dynamic<string, MessageType>
) : CallbackFunctionType<string, string, MessageType>;
export default function Ipv6<MessageType>(
    string : string,
    message : Dynamic<string, string|MessageType> = Ipv6Message
) {
    let scheme = Ipv6Validatable(string, message);

    AssertValid(scheme);

    return  scheme;
}
