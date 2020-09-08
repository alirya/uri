import HostValidatable from "./validatable/host";
import AssertValid from "@dikac/t-validator/validatable/assert/valid";
import Validatable from "@dikac/t-validator/validatable/validatable";
import Value from "@dikac/t-value/value";
import Callback from "@dikac/t-string/validatable/callback";
import HostMessage from "./validatable/string/host";

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
    let scheme = HostValidatable(string, message);

    AssertValid(scheme);

    return  scheme;
}


