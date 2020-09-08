import UserValidatable from "../validatable/user";

export default function User(string : string) : boolean {

    return UserValidatable(string).valid;
}
