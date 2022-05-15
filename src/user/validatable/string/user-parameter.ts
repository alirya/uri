import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
import UserParameters from "./user-parameters";

export default function UserParameter(
    {
        value,
        valid,
        subject = 'value',
    } : Value<string> & Validatable<boolean> & {
        subject ?: string
    }
) : string {

    return UserParameters(value, valid, subject)

}
