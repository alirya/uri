import Callback from "@dikac/t-string/validatable/callback";
import Ipv6Boolean from "../boolean/ipv6";
import Ipv6Message from "./string/ipv6";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";

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
    return new Callback<string, string>(string, Ipv6Boolean, message);
}

