import ToString from "@dikac/t-string/to-string";

export default interface Password<PasswordType extends ToString = ToString> {
    password ?: PasswordType;
}
