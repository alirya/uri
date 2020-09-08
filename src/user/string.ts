import User from "./validatable/user";
import AssertValid from "@dikac/t-validator/validatable/assert/valid";
import Validatable from "@dikac/t-validator/validatable/validatable";
import Value from "@dikac/t-value/value";
import StringMatch from "@dikac/t-string/validatable/match";
import UserMessage from "./validatable/string/user";

export default function String(
    user : string,
) : StringMatch<string, string>;

export default function String<MessageT>(
    user : string,
    message: (result:Readonly<Value<string> & Validatable>)=>MessageT
) : StringMatch<string, MessageT>;

export default function String(
    user : string,
    message = UserMessage
)  : StringMatch<string, string> {

    let validatable = User(user, message);

    AssertValid(validatable);

    return  validatable;
}


