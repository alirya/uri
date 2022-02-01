import TemplateParameter from '@alirya/string/function/template-parameter';
import Truncate from '@alirya/string/truncate-parameters';

const templateValid = TemplateParameter({
  string : '{subject} is valid domain name.',
  callback : string=>string.trim()
});
const templateInvalid = TemplateParameter({
  string : '{subject} is not valid domain name, actual "{actual}".',
  callback : string=>string.trim()
});

export default function DomainName(
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
      actual : Truncate(value, 20)
    });
  }

}
