import {TemplateParameter} from '@alirya/string/function/template';
import Validatable from '@alirya/validator/validatable/validatable';
import UserInfoValidatable from '../../../user-info/validatable/validatable';
import AuthorityValidatable from '../../validatable/validatable';


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


export function AuthorityParameters(
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

type MessageParam = Record<'value'|'predicate'|'stop'|'part'|'end', string>;

export interface AuthorityArgument extends Omit<Readonly<
    AuthorityValidatable<string,
        UserInfoValidatable<string>,
        Readonly<Validatable<string, string>>,
        Readonly<Validatable<string, string>>
        >
    >, 'message'>{}

export function AuthorityParameter(
    {
      value,
      valid,
      userInfo,
      host,
      port
    } : AuthorityArgument) : string {

  return AuthorityParameters(value, valid, userInfo, host, port);

}


namespace Authority {
    export const Parameters = AuthorityParameters;
    export const Parameter = AuthorityParameter;
}
export default Authority;
