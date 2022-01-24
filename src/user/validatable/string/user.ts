// import Value from '@alirya/value/value';
// import Validatable from '@alirya/validator/validatable/validatable';
// import SentencesIs from '@alirya/string/message/sentences-must';
// import Truncate from '@alirya/string/truncate-parameters';
//
// export default function User(
//     result : Readonly<Value<string> & Validatable>,
//     subject : string = 'value'
// ) : string {
//
//     const messages : string[] = [];
//
//     messages.push(subject);
//
//     if(result.valid) {
//
//         messages.push('is');
//
//     } else {
//
//         messages.push('is not');
//     }
//
//     messages.push('valid user');
//
//     if(!result.valid) {
//
//     }
//
//     let sentence = SentencesIs(result.valid, ['value']);
//
//     sentence.subject.push(subject);
//     sentence.comma.push('expect');
//
//     sentence.actual.push('actual', `"${Truncate(result.value, 10)}"`);
//
//     sentence.expect = ['valid user'];
//
//     return sentence.message;
//
// }
//
//
// let person = 'Mike';
// let age = 28;
//
// function myTag(strings, personExp, ageExp) {
//     let str0 = strings[0]; // "That "
//     let str1 = strings[1]; // " is a "
//     let str2 = strings[2]; // "."
//
//     let ageStr;
//     if (ageExp > 99){
//         ageStr = 'centenarian';
//     } else {
//         ageStr = 'youngster';
//     }
//
//     // We can even return a string built using a template literal
//     return `${str0}${personExp}${str1}${ageStr}${str2}`;
// }
//
// let output = myTag`That ${ person } is a ${ age }.`;
//
// console.log(output);


import TemplateParameter from '@alirya/string/dist/function/template-parameter';
import Truncate from '@alirya/string/truncate-parameters';

const templateValid = TemplateParameter({
  string : '{subject} is valid user.'
});
const templateInvalid = TemplateParameter({
  string : '{subject} is not valid user, actual "{actual}".'
});

export default function User(
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
