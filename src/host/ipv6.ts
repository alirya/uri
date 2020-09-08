import AssertValid from "@dikac/t-validator/validatable/assert/valid";
import Validatable from "@dikac/t-validator/validatable/validatable";
import Value from "@dikac/t-value/value";
import Callback from "@dikac/t-string/validatable/callback";
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
