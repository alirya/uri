import Callback from "@alirya/string/validatable/callback";
import DomainNameBoolean from "../boolean/domain-name";
import DomainNameMessage from "./string/domain-name";
import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";

export default function DomainName(
    string : string,
) : Callback<string, string>;
export default function DomainName<MessageType>(
    string : string,
    message: (result: Readonly<Value<string> & Validatable<boolean>>) => MessageType
) : Callback<string, MessageType>;
export default function DomainName<MessageType>(
    string : string,
    message  : (result: Readonly<Value<string> & Validatable<boolean>>) => string = DomainNameMessage
) {
    return new Callback<string, string>(string, DomainNameBoolean, message);
}

