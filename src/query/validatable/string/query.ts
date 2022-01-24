// import Value from '@alirya/value/value';
// import Validatable from '@alirya/validator/validatable/validatable';
// import SentencesIs from '@alirya/string/message/sentences-must';
// import Truncate from '@alirya/string/truncate';
//
// export default function Query(
//     result : Readonly<Value<string> & Validatable>,
//     subject : string = ''
// ) : string {
//
//     let sentence = SentencesIs(result.valid);
//     sentence.subject.push(subject);
//     sentence.subject.push(Truncate(result.value, 10));
//     sentence.expect = ['valid query'];
//
//     return sentence.message;
//
// }

import TemplateParameter from '@alirya/string/dist/function/template-parameter';
// import Value from '@alirya/value/value';
// import Validatable from '@alirya/validator/validatable/validatable';
// import SentencesIs from '@alirya/string/message/sentences-must';
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

  // let sentence = SentencesIs(result.valid, ['value']);
  //
  // sentence.subject.push(subject);
  // sentence.comma.push('expect');
  //
  // sentence.actual.push('actual', `"${Truncate(result.value, 10)}"`);
  //
  // sentence.expect = ['valid query'];
  //
  // return sentence.message;

}
