import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
import QueryParameters from "./query-parameters";

export default function QueryParameter(
    {
        value,
        valid,
        subject,
    } : Value<string> & Validatable<boolean> & {
        subject: string,
    }
) : string {

  return QueryParameters(value, valid, subject)

}
