// import Value from '@alirya/value/value';
// import Validatable from '@alirya/validator/validatable/validatable';
// import SentencesIs from '@alirya/string/message/sentences-must';
// import Truncate from '@alirya/string/truncate-parameters';
//
// export default function Fragment(
//     result : Readonly<Value<string> & Validatable>
// ) : string {
//
//     let sentence = SentencesIs(result.valid, ['value']);
//     sentence.expect.push('valid fragment');
//
//     sentence.comma.push('expect');
//     sentence.actual.push('actual', `"${Truncate(result.value.toString(), 6)}"`);
//
//     return sentence.message;
// }


import TemplateParameter from '@alirya/string/dist/function/template-parameter';
import Truncate from '@alirya/string/truncate-parameters';

const templateValid = TemplateParameter({
  string : '{subject} is valid fragment.'
});
const templateInvalid = TemplateParameter({
  string : '{subject} is not valid fragment, actual "{actual}".'
});

export default function DomainName(
  value : string,
  valid : boolean,
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
