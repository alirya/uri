import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
import DomainNameParameters from "./domain-name-parameters";

export interface DomainNameParameterArgument extends Value<string>, Validatable {
  subject ?: string
}

export default function DomainNameParameter(
  {
    value,
    valid,
    subject  = 'value',
  } : DomainNameParameterArgument
) : string {

  return DomainNameParameters(value, valid, subject);

}
