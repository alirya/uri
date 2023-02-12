import {TemplateParameter} from '@alirya/string/function/template.js';
import {TruncateParameters} from '@alirya/string/truncate.js';
import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';

const templateValid = TemplateParameter({
  string : '{subject} is valid domain name.',
  callback : string=>string.trim()
});
const templateInvalid = TemplateParameter({
  string : '{subject} is not valid domain name, actual "{actual}".',
  callback : string=>string.trim()
});

export function DomainNameParameters(
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


export interface DomainNameArgument extends Value<string>, Validatable {
  subject ?: string;
}

export function DomainNameParameter(
  {
    value,
    valid,
    subject  = 'value',
  } : DomainNameArgument
) : string {

  return DomainNameParameters(value, valid, subject);

}


namespace DomainName {
    export const Parameters = DomainNameParameters;
    export const Parameter = DomainNameParameter;
    export type Argument = DomainNameArgument;
}
export default DomainName;
