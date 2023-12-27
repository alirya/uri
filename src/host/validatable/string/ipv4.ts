import {TemplateParameter} from '@axiona/string/function/template.js';
import {TruncateParameters} from '@axiona/string/truncate.js';
import Value from '@axiona/value/value.js';
import Validatable from '@axiona/validatable/validatable.js';

const templateValid = TemplateParameter({
  string : '{subject} is valid ipv4.',
    callback : string=>string.trim()
});
const templateInvalid = TemplateParameter({
  string : '{subject} is not valid ipv4, actual "{actual}".',
    callback : string=>string.trim()
});

export function Ipv4Parameters(
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
      actual : TruncateParameters(value, 10)
    });
  }

}


export interface Ipv4Argument extends Value<string>, Validatable {
  subject ?: string;
}

export function Ipv4Parameter(
  {
    value,
    valid,
    subject  = 'value',
  } : Ipv4Argument
) : string {

  return Ipv4Parameters(value, valid, subject);

}


namespace Ipv4 {
    export const Parameters = Ipv4Parameters;
    export const Parameter = Ipv4Parameter;
    export type Argument = Ipv4Argument;
}
export default Ipv4;
