import {TemplateParameter} from '@alirya/string/function/template';
import {TruncateParameters} from '@alirya/string/truncate';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';

const templateValid = TemplateParameter({
    string : '{subject} is valid password.'
});
const templateInvalid = TemplateParameter({
    string : '{subject} is not valid password, actual "{actual}".'
});

export function PasswordParameters(
  value : string,
    valid: boolean,
    subject : string = ''
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
