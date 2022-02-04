import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import { CallbackFunctionReturn as Ipv4Return } from '@alirya/validator/validatable/callback-function-parameters';
import Ipv4Validatable from './validatable/ipv4';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import Ipv4Message from './validatable/string/ipv4';

export default function Ipv4(
    string : string,
) : Ipv4Return<string, string, string>;
export default function Ipv4<MessageType>(
    string : string,
    message: Dynamic<string, MessageType>
) : Ipv4Return<string, string, MessageType>;
export default function Ipv4<MessageType>(
    string : string,
    message : Dynamic<string, string|MessageType> = Ipv4Message
) {
    let scheme = Ipv4Validatable(string, message);

    AssertValid(scheme);

    return  scheme;
}


