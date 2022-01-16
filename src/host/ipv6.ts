import AssertValid from "@alirya/validator/validatable/assert/valid";
import Validatable from "@alirya/validator/validatable/validatable";
import Value from "@alirya/value/value";
import Callback from "@alirya/string/validatable/callback";
import Ipv6Message from "./validatable/string/ipv6";
import Ipv6Validatable from "./validatable/ipv6";


export default function Ipv6(
    string : string,
) : Callback<string, string>;
export default function Ipv6<MessageType>(
    string : string,
    message: (result: Readonly<Value<string> & Validatable<boolean>>) => MessageType
) : Callback<string, MessageType>;
export default function Ipv6<MessageType>(
    string : string,
    message  : (result: Readonly<Value<string> & Validatable<boolean>>) => string = Ipv6Message
) {
    let scheme = Ipv6Validatable(string, message);

    AssertValid(scheme);

    return  scheme;
}
