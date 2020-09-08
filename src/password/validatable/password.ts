import Pattern from "../pattern/password";
import StringMatch from "@dikac/t-string/validatable/match";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import QueryMessage from "./string/password";

export default function Password(
    source : string,
) : StringMatch<string, string>;

export default function Password<MessageT>(
    source : string,
    message: (result:Readonly<Value<string> & Validatable>)=>MessageT
) : StringMatch<string, MessageT>;

export default function Password(
    source : string,
    message = QueryMessage
)  {

    return new StringMatch(source, new RegExp(`^${Pattern.source}*$`, Pattern.flags), message);
}
