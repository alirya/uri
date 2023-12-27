import {TemplateParameter} from '@axiona/string/function/template.js';
import {TruncateParameters} from '@axiona/string/truncate.js';
import Value from '@axiona/value/value.js';
import Validatable from '@axiona/validatable/validatable.js';

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
  subject  = 'value'
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
  subject ?: string;
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
