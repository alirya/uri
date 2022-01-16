import Query from "./validatable/query";
import AssertValid from "@alirya/validator/validatable/assert/valid";
import Validatable from "@alirya/validator/validatable/validatable";
import Value from "@alirya/value/value";
import StringMatch from "@alirya/string/validatable/match";
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


