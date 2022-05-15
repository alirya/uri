import Validatable from '@alirya/validator/validatable/validatable';
import AuthorityValidatable from '../../validatable/validatable';
import UserInfoValidatable from '../../../user-info/validatable/validatable';
import AuthorityParameters from "./authority-parameters";

type MessageParam = Record<'value'|'predicate'|'stop'|'part'|'end', string>;

export interface AuthorityParameterArgument extends Omit<Readonly<
    AuthorityValidatable<string,
        UserInfoValidatable<string>,
        Readonly<Validatable<string, string>>,
        Readonly<Validatable<string, string>>
        >
    >, 'message'>{}

export default function AuthorityParameter(
    {
      value,
      valid,
      userInfo,
      host,
      port
    } : AuthorityParameterArgument) : string {

  return AuthorityParameters(value, valid, userInfo, host, port)

}
