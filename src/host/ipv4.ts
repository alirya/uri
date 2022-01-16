import Ipv4Validatable from "./validatable/ipv4";
import AssertValid from "@alirya/validator/validatable/assert/valid";
import Validatable from "@alirya/validator/validatable/validatable";
import Value from "@alirya/value/value";
import Callback from "@alirya/string/validatable/callback";
import Ipv4Message from "./validatable/string/ipv4";

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
    let scheme = Ipv4Validatable(string, message);

    AssertValid(scheme);

    return  scheme;
}


