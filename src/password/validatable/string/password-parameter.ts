import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
import PasswordParameters from "./password-parameters";

export default function PasswordParameter(
    {
      value,
      valid,
      subject,
    } : Value<string> & Validatable<boolean> & {
      subject?: string
    }
) : string {

  return PasswordParameters(value, valid, subject)

}
