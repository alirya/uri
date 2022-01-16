import User from "./validatable/user";
import AssertValid from "@alirya/validator/validatable/assert/valid";
import Validatable from "@alirya/validator/validatable/validatable";
import Value from "@alirya/value/value";
import StringMatch from "@alirya/string/validatable/match-parameters";
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


