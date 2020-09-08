import Fragment from "./validatable/fragment";
import AssertValid from "@dikac/t-validator/validatable/assert/valid";
import Validatable from "@dikac/t-validator/validatable/validatable";
import Value from "@dikac/t-value/value";
import StringMatch from "@dikac/t-string/validatable/match";
import FragmentMessage from "./validatable/string/fragment";

export default function String(
    fragment : string,
) : StringMatch<string, string>;

export default function String<MessageT>(
    fragment : string,
    message: (result:Readonly<Value<string> & Validatable>)=>MessageT
) : StringMatch<string, MessageT>;

export default function String(
    fragment : string,
    message = FragmentMessage
)  : StringMatch<string, string> {

    let validatable = Fragment(fragment, message);

    AssertValid(validatable);

    return  validatable;
}


