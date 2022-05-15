import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
import FragmentParameters from "./fragment-parameters";

export default function FragmentParameter(
    {
        value,
        valid,
        subject,
        pattern
    } : Value<string> & Validatable<boolean> & {
        pattern: RegExp,
        subject?: string
    }
) : string {

  return FragmentParameters(value, valid, pattern, subject)

}
