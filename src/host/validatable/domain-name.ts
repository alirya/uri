import Callback from "@dikac/t-string/validatable/callback";
import DomainNameBoolean from "../boolean/domain-name";
import DomainNameMessage from "./string/domain-name";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";

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

