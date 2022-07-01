import {TemplateParameter} from '@alirya/string/function/template';
import {TruncateParameters} from '@alirya/string/truncate';
import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";

const templateValid = TemplateParameter({
  string : '{subject} is valid ipv6.',
  callback : string=>string.trim()
});
const templateInvalid = TemplateParameter({
  string : '{subject} is not valid ipv6, actual "{actual}".',
  callback : string=>string.trim()
});

export function Ipv6Parameters(
  value : string,
  valid : boolean,
  subject : string = 'value'
) : string {

  if(valid) {

    return templateValid({
      subject
    });

  } else {

    return templateInvalid({
      subject,
      actual : TruncateParameters(value, 20)
    });
  }

}


export interface Ipv6Argument extends Value<string>, Validatable {
  subject ?: string
}

export function Ipv6Parameter(
  {
    value,
    valid,
    subject  = 'value',
  } : Ipv6Argument
) : string {

  return Ipv6Parameters(value, valid, subject);

}


namespace Ipv6 {
    export const Parameters = Ipv6Parameters;
    export const Parameter = Ipv6Parameter;
    export type Argument = Ipv6Argument;
}
export default Ipv6;
