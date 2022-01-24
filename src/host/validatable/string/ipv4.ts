// import Value from '@alirya/value/value';
// import Validatable from '@alirya/validator/validatable/validatable';
// import SentencesIs from '@alirya/string/message/sentences-must';
// import Truncate from '@alirya/string/truncate';
//
// export default function Ipv4(
//     result : Readonly<Value<string> & Validatable>,
//     subject : string = ''
// ) : string {
//
//     let sentence = SentencesIs(result.valid, [subject]);
//
//     sentence.subject.push(subject);
//     sentence.comma.push('expect');
//
//     sentence.actual.push('actual', `"${Truncate(result.value, 10)}"`);
//
//     sentence.expect = ['valid ipv4'];
//
//     return sentence.message;
//
// }


import TemplateParameter from '@alirya/string/dist/function/template-parameter';
import Truncate from '@alirya/string/truncate-parameters';

const templateValid = TemplateParameter({
  string : '{subject} is valid ipv4.'
});
const templateInvalid = TemplateParameter({
  string : '{subject} is not valid ipv4, actual "{actual}".'
});

export default function Ipv4(
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
