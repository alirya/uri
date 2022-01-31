import TemplateParameter from '@alirya/string/function/template-parameter';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validator/validatable/validatable';
import Truncate from '@alirya/string/truncate-parameters';

const templateValid = TemplateParameter({
    string : '{subject} is valid password.'
});
const templateInvalid = TemplateParameter({
    string : '{subject} is not valid password, actual "{actual}".'
});

export default function Password(
  value : string,
    valid: boolean,
   // result : Readonly<Value<string> & Validatable>,
    subject : string = ''
) : string {

    if(valid) {

        return templateValid({
            subject
        });

    } else {

        return templateInvalid({
            subject,
            actual : Truncate(value, 10)
        });
    }
}
