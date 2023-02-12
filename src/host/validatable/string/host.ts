import {TemplateParameter} from '@alirya/string/function/template.js';
import {TruncateParameters} from '@alirya/string/truncate.js';
import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';

const templateValid = TemplateParameter({
  string : '{subject} is valid host.',
  callback : string=>string.trim()
});
const templateInvalid = TemplateParameter({
  string : '{subject} is not valid host, actual "{actual}".',
  callback : string=>string.trim()
});

export function HostParameters(
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


export interface HostArgument extends Value<string>, Validatable {
  subject ?: string;
}

export function HostParameter(
  {
    value,
    valid,
    subject  = 'value',
  } : HostArgument
) : string {

  return HostParameters(value, valid, subject);

}


namespace Host {
    export const Parameters = HostParameters;
    export const Parameter = HostParameter;
    export type Argument = HostArgument;
}
export default Host;
