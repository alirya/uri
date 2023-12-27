import {TemplateParameter} from '@axiona/string/function/template.js';
import {TruncateParameters} from '@axiona/string/truncate.js';
import Value from '@axiona/value/value.js';
import Validatable from '@axiona/validatable/validatable.js';

const templateValid = TemplateParameter({
    string : '{subject} is valid password.'
});
const templateInvalid = TemplateParameter({
    string : '{subject} is not valid password, actual "{actual}".'
});

export function PasswordParameters(
  value : string,
    valid: boolean,
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


export function PasswordParameter(
    {
      value,
      valid,
      subject,
    } : Value<string> & Validatable<boolean> & {
      subject?: string
    }
) : string {

  return PasswordParameters(value, valid, subject);

}


namespace Password {
    export const Parameters = PasswordParameters;
    export const Parameter = PasswordParameter;
}
export default Password;
