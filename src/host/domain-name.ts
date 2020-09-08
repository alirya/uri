import DomainNameValidatable from "./validatable/domain-name";
import AssertValid from "@dikac/t-validator/validatable/assert/valid";
import Validatable from "@dikac/t-validator/validatable/validatable";
import Value from "@dikac/t-value/value";
import Callback from "@dikac/t-string/validatable/callback";
import DomainNameMessage from "./validatable/string/domain-name";

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
    let scheme = DomainNameValidatable(string, message);

    AssertValid(scheme);

    return  scheme;
}


