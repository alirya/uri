import Pattern from "../pattern/user";
import StringMatch from "@dikac/t-string/validatable/match";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import UserMessage from "./string/user";

export default function User(
    source : string,
) : StringMatch<string, string>;

export default function User<MessageT>(
    source : string,
    message: (result:Readonly<Value<string> & Validatable>)=>MessageT
) : StringMatch<string, MessageT>;

export default function User(
    source : string,
    message = UserMessage
)  {

    return new StringMatch(source, new RegExp(`^${Pattern.source}*$`, Pattern.flags), message);
}
