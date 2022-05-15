import TemplateParameter from '@alirya/string/function/template-parameter';
import Truncate from '@alirya/string/truncate-parameters';

const templateValid = TemplateParameter({
    string : '{subject} is valid scheme.'
});
const templateInvalid = TemplateParameter({
    string : '{subject} is not valid scheme, actual "{actual}".'
});

export default function SchemeParameters(
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
            actual : Truncate(value, 10)
        });
    }
}
