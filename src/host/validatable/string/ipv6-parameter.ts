import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
import Ipv6Parameters from "./ipv6-parameters";

export interface Ipv6ParameterArgument extends Value<string>, Validatable {
  subject ?: string
}

export default function Ipv6Parameter(
  {
    value,
    valid,
    subject  = 'value',
  } : Ipv6ParameterArgument
) : string {

  return Ipv6Parameters(value, valid, subject);

}
