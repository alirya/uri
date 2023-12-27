import ToString from '@axiona/string/to-string.js';

export default interface UserInfo<
    User extends ToString = ToString,
    Password extends ToString = ToString,
> {
    user ?: User;
    password ?: Password;
}
