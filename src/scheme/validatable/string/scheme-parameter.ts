import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
import SchemeParameters from "./scheme-parameters";

export default function SchemeParameter(
    {
        value,
        valid,
        subject = 'value',
    } : Value<string> & Validatable<boolean> & {
        subject ?: string,
    }
) : string {

  return SchemeParameters(value, valid, subject)

}
