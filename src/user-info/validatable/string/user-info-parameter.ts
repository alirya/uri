import Validatable from '@alirya/validator/validatable/validatable';
import UserInfo from '../validatable';
import UserInfoParameters from "./user-info-parameters";

export interface AuthorityParameterArgument extends Omit<Readonly<
    UserInfo<string,
        Readonly<Validatable<string, string>>,
        Readonly<Validatable<string, string>>
        >
    >, 'message'> {}

export default function UserInfoParameter(result : AuthorityParameterArgument) : string {

  return UserInfoParameters(result.value, result.valid, result.user, result.password)


}
