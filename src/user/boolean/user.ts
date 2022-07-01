import {UserParameters} from '../validatable/user';

export default function User(string : string) : boolean {

    return UserParameters(string).valid;
}
