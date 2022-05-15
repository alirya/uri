import UserValidatable from '../validatable/user-parameters';

export default function User(string : string) : boolean {

    return UserValidatable(string).valid;
}
