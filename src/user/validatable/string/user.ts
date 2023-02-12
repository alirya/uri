import {TemplateParameter} from '@alirya/string/function/template.js';
import {TruncateParameters} from '@alirya/string/truncate.js';
import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';

const templateValid = TemplateParameter({
  string : '{subject} is valid user.'
});
const templateInvalid = TemplateParameter({
  string : '{subject} is not valid user, actual "{actual}".'
});

export function UserParameters(
    value : string,
    valid : boolean,
    subject  = 'value'
) : string {

  if(valid) {

    return templateValid({
      subject
    });

  } else {

    return templateInvalid({
      subject,
      actual : TruncateParameters(value, 10)
    });
  }

}

export type UserArgument = Value<string> & Validatable<boolean> & {
    subject ?: string
};

export function UserParameter(
    {
        value,
        valid,
        subject = 'value',
    } : UserArgument
) : string {

    return UserParameters(value, valid, subject);

}


namespace User {
    export const Parameters = UserParameters;
    export const Parameter = UserParameter;
    export type Argument = UserArgument;
}
export default User;
