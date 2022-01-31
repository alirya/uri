import TemplateParameter from '@alirya/string/function/template-parameter';
// import Value from '@alirya/value/value';
// import Validatable from '@alirya/validator/validatable/validatable';
// import SentencesIs from '@alirya/string/message/sentences-must';
import Truncate from '@alirya/string/truncate-parameters';

const templateValid = TemplateParameter({
    string : '{subject} is valid scheme.'
});
const templateInvalid = TemplateParameter({
    string : '{subject} is not valid scheme, actual "{actual}".'
});

export default function Scheme(
  value : string,
  valid : boolean,
    // result : Readonly<Value<string> & Validatable>,
  pattern: RegExp,
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

    // let sentence = SentencesIs(result.valid, ['value']);
    //
    // sentence.subject.push(subject);
    // sentence.comma.push('expect');
    //
    // sentence.actual.push('actual', `"${Truncate(result.value, 10)}"`);
    //
    // sentence.expect = ['valid scheme'];
    //
    // return sentence.message;

}
