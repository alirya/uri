import TemplateParameter from '@alirya/string/function/template-parameter';
import Validatable from '@alirya/validator/validatable/validatable';

type MessageParamValid = Record<'value'|'predicate', string>;

const messageValid = TemplateParameter<MessageParamValid>({
  string :'{value} {predicate} user info.',
  callback :s=>s.trim()
});

type MessageParamInvalid = Record<'value'|'predicate'|'part', string>;

const messageInvalid = TemplateParameter<MessageParamInvalid>({
  string :'{value} {predicate} user info, {part}.',
  callback :s=>s.trim()
});

const part = TemplateParameter({
  string :'{part}:{message}',
  callback :s=>s.trim()
});

export default function UserInfoParameters(
    value : string,
    valid : boolean,
    user ?: Readonly<Validatable<string, string>>,
    password ?: Readonly<Validatable<string, string>>,
) : string {

  if(valid) {

    return messageValid({
      predicate : 'is valid',
      value
    });

  } else {

    const parameters : Partial<MessageParamInvalid>= {
      predicate : 'is not valid',
      value
    };

    const parts : string[] = [];

    const result = {user, password};

    for (const key of ['user', 'password']) {

      if(result[key]) {

        parts.push(part({
          part: key,
          message : result[key].message
        }));
      }
    }

    parameters.part = parts.join(', ');

    return messageInvalid(parameters);
  }

}
