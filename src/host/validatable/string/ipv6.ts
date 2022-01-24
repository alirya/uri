// import Value from '@alirya/value/value';
// import Validatable from '@alirya/validator/validatable/validatable';
// import SentencesIs from '@alirya/string/message/sentences-must';
// import Truncate from '@alirya/string/truncate';
//
// export default function Ipv6(
//     result : Readonly<Value<string> & Validatable>,
//     subject : string = ''
// ) : string {
//
//     let sentence = SentencesIs(result.valid, [subject]);
//
//     sentence.subject.push(subject);
//     sentence.comma.push('expect');
//
//     sentence.actual.push('actual', `"${Truncate(result.value, 20)}"`);
//
//     sentence.expect = ['valid ipv6'];
//     return sentence.message;
//
// }


import TemplateParameter from '@alirya/string/dist/function/template-parameter';
import Truncate from '@alirya/string/truncate-parameters';

const templateValid = TemplateParameter({
  string : '{subject} is valid ipv6.'
});
const templateInvalid = TemplateParameter({
  string : '{subject} is not valid ipv6, actual "{actual}".'
});

export default function ipv6(
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
      actual : Truncate(value, 20)
    });
  }

}
