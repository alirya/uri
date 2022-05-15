import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
import HostParameters from "./host-parameters";

export interface HostParameterArgument extends Value<string>, Validatable {
  subject ?: string
}

export default function HostParameter(
  {
    value,
    valid,
    subject  = 'value',
  } : HostParameterArgument
) : string {

  return HostParameters(value, valid, subject);

}
