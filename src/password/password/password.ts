import ToString from '@axiona/string/to-string.js';

export default interface Password<PasswordType extends ToString = ToString> {
    password ?: PasswordType;
}
