import ToString from "@alirya/string/to-string";

export default interface UserInfo<
    User extends ToString = ToString,
    Password extends ToString = ToString,
> {
    user ?: User;
    password ?: Password;
}
