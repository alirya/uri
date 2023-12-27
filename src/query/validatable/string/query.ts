import {TemplateParameter} from '@axiona/string/function/template.js';
import {TruncateParameters} from '@axiona/string/truncate.js';
import Value from '@axiona/value/value.js';
import Validatable from '@axiona/validatable/validatable.js';

const templateValid = TemplateParameter({
  string : '{subject} is valid query.'
});
const templateInvalid = TemplateParameter({
  string : '{subject} is not valid query, actual "{actual}".'
});

export function QueryParameters(
  value : string,
  valid : boolean,
  subject  = ''
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


export function QueryParameter(
    {
        value,
        valid,
        subject,
    } : Value<string> & Validatable<boolean> & {
        subject: string,
    }
) : string {

  return QueryParameters(value, valid, subject);

}


namespace Query {
    export const Parameters = QueryParameters;
    export const Parameter = QueryParameter;
}
export default Query;
