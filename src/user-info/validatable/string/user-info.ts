import {TemplateParameter} from '@alirya/string/function/template';
import Validatable from '@alirya/validator/validatable/validatable';
import UserInfo from '../validatable';

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

export function UserInfoParameters(
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


export interface AuthorityArgument extends Omit<Readonly<
    UserInfo<string,
        Readonly<Validatable<string, string>>,
        Readonly<Validatable<string, string>>
        >
    >, 'message'> {}

export function UserInfoParameter(result : AuthorityArgument) : string {

  return UserInfoParameters(result.value, result.valid, result.user, result.password)


}


namespace UserInfo {
    export const Parameters = UserInfoParameters;
    export const Parameter = UserInfoParameter;
    export type Argument = AuthorityArgument;
}
export default UserInfo;
