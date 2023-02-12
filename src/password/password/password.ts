import ToString from '@alirya/string/to-string.js';

export default interface Password<PasswordType extends ToString = ToString> {
    password ?: PasswordType;
}
