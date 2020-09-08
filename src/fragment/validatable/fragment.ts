import StringMatch from "@dikac/t-string/validatable/match";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import FragmentPattern from "../pattern/fragment";
import FragmentMessage from "./string/fragment";

export default function Fragment(
    fragment : string,
) : StringMatch<string, string>;

export default function Fragment<MessageT>(
    fragment : string,
    message: (result:Readonly<Value<string> & Validatable>)=>MessageT
) : StringMatch<string, MessageT>;

export default function Fragment(
    fragment : string,
    message = FragmentMessage
)  {

    return new StringMatch(fragment, new RegExp(`^${FragmentPattern.source}*$`, FragmentPattern.flags), message);
}
