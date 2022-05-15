import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
import Ipv4Parameters from "./ipv4-parameters";

export interface Ipv4ParameterArgument extends Value<string>, Validatable {
  subject ?: string
}

export default function Ipv4Parameter(
  {
    value,
    valid,
    subject  = 'value',
  } : Ipv4ParameterArgument
) : string {

  return Ipv4Parameters(value, valid, subject);

}
