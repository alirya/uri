import Callback from "@alirya/string/validatable/callback";
import HostBoolean from "../boolean/host";
import HostMessage from "./string/host";
import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";

export default function Host(
    string : string,
) : Callback<string, string>;
export default function Host<MessageType>(
    string : string,
    message: (result: Readonly<Value<string> & Validatable<boolean>>) => MessageType
) : Callback<string, MessageType>;
export default function Host<MessageType>(
    string : string,
    message  : (result: Readonly<Value<string> & Validatable<boolean>>) => string = HostMessage
) {
    return new Callback<string, string>(string, HostBoolean, message);
}

