import {TemplateParameter} from '@alirya/string/function/template';
import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";

const templateValid = TemplateParameter({
    string : '{subject} is valid port.'
});
const templateInvalid = TemplateParameter({
    string : '{subject} is not valid port, actual "{actual}".'
});


export function PortParameters(
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


export function PortParameter(
    {
        value,
        valid,
        subject,
    } : Value<string> & Validatable<boolean> & {
        subject: string,
    }
) : string {

  return PortParameters(value, valid, subject)

}


namespace Port {
    export const Parameters = PortParameters;
    export const Parameter = PortParameter;
}
export default Port;
