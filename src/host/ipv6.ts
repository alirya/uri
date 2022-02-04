import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import { CallbackFunctionReturn as  Ipv6Return} from '@alirya/validator/validatable/callback-function-parameters';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import Ipv6Message from './validatable/string/ipv6';
import Ipv6Validatable from './validatable/ipv6';


export default function Ipv6(
    string : string,
) : Ipv6Return<string, string, string>;
export default function Ipv6<MessageType>(
    string : string,
    message: Dynamic<string, MessageType>
) : Ipv6Return<string, string, MessageType>;
export default function Ipv6<MessageType>(
    string : string,
    message : Dynamic<string, string|MessageType> = Ipv6Message
) {
    let scheme = Ipv6Validatable(string, message);

    AssertValid(scheme);

    return  scheme;
}
