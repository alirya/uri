import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
import PortParameters from "./port-parameters";

export default function PortParameter(
    {
        value,
        valid,
        subject,
    } : Value<string> & Validatable<boolean> & {
        subject: string,
    }
) : string {

  return PortParameters(value, valid, subject)

}
