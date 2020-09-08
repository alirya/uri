import Callback from "@dikac/t-string/validatable/callback";
import Ipv4Boolean from "../boolean/ipv4";
import Ipv4Message from "./string/ipv4";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";

export default function Ipv4(
    string : string,
) : Callback<string, string>;
export default function Ipv4<MessageType>(
    string : string,
    message: (result: Readonly<Value<string> & Validatable<boolean>>) => MessageType
) : Callback<string, MessageType>;
export default function Ipv4<MessageType>(
    string : string,
    message  : (result: Readonly<Value<string> & Validatable<boolean>>) => string = Ipv4Message
) {
    return new Callback<string, string>(string, Ipv4Boolean, message);
}

