import {UserParameters} from '../validatable/user.js';

export default function User(string : string) : boolean {

    return UserParameters(string).valid;
}
