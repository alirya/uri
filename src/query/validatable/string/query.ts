import TemplateParameter from '@alirya/string/function/template-parameter';
import Truncate from '@alirya/string/truncate-parameters';

const templateValid = TemplateParameter({
  string : '{subject} is valid query.'
});
const templateInvalid = TemplateParameter({
  string : '{subject} is not valid query, actual "{actual}".'
});

export default function Query(
  value : string,
  valid : boolean,
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
