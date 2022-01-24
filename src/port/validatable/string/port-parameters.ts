import TemplateParameter from '@alirya/string/dist/function/template-parameter';
import Truncate from '@alirya/string/dist/truncate-parameters';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validator/validatable/validatable';

const templateValid = TemplateParameter({
    string : '{subject} is valid port.'
});
const templateInvalid = TemplateParameter({
    string : '{subject} is not valid port, actual "{actual}".'
});


export default function PortParameters(
    value : string|number,
    valid : boolean,
    subject : string = ''
    //result : Readonly<Value<string|number> & Validatable>
) : string {

    if(valid) {

        return templateValid({
            subject
        });

    } else {

        return templateInvalid({
            subject,
            actual : 10
        });
    }

    // let sentence = SentencesIs(result.valid);
    // sentence.expect.push('valid port');
    // sentence.subject.push(Truncate(result.value.toString(), 6));
    // return sentence.message;
}
