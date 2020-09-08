import Query from "./validatable/query";
import AssertValid from "@dikac/t-validator/validatable/assert/valid";
import Validatable from "@dikac/t-validator/validatable/validatable";
import Value from "@dikac/t-value/value";
import StringMatch from "@dikac/t-string/validatable/match";
import QueryMessage from "./validatable/string/query";

export default function String(
    query : string,
) : StringMatch<string, string>;

export default function String<MessageT>(
    query : string,
    message: (result:Readonly<Value<string> & Validatable>)=>MessageT
) : StringMatch<string, MessageT>;

export default function String(
    query : string,
    message = QueryMessage
)  : StringMatch<string, string> {

    let validatable = Query(query, message);

    AssertValid(validatable);

    return  validatable;
}


