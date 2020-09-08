import Password from "./validatable/password";
import AssertValid from "@dikac/t-validator/validatable/assert/valid";
import Validatable from "@dikac/t-validator/validatable/validatable";
import Value from "@dikac/t-value/value";
import StringMatch from "@dikac/t-string/validatable/match";
import PasswordMessage from "./validatable/string/password";

export default function String(
    password : string,
) : StringMatch<string, string>;

export default function String<MessageT>(
    password : string,
    message: (result:Readonly<Value<string> & Validatable>)=>MessageT
) : StringMatch<string, MessageT>;

export default function String(
    password : string,
    message = PasswordMessage
)  : StringMatch<string, string> {

    let validatable = Password(password, message);

    AssertValid(validatable);

    return  validatable;
}


