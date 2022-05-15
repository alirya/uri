import TemplateParameter from '@alirya/string/function/template-parameter';
import Validatable from '@alirya/validator/validatable/validatable';
import UserInfoValidatable from '../../../user-info/validatable/validatable';

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


export default function AuthorityParameters(
    value : string,
    valid : boolean,
    userInfo ?: UserInfoValidatable<string>,
    host?: Readonly<Validatable<string, string>>,
    port?: Readonly<Validatable<string, string>>,
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

    const result = {userInfo, host, port};

    for (const key of ['host', 'port', 'userInfo']) {

      if(result[key]) {

        parts.push(part({
          part: 'user',
          message : result[key].message
        }));
      }
    }

    parameters.part = parts.join('');

    return messageInvalid(parameters);
  }
}
