import TemplateParameter from '@alirya/string/function/template-parameter';

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
}
