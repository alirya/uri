import Password from "./validatable/password";
import AssertValid from "@dikac/t-validator/validatable/assert/valid";
import PasswordMessage from "./validatable/string/password";
export default function String(password, message = PasswordMessage) {
    let validatable = Password(password, message);
    AssertValid(validatable);
    return validatable;
}
//# sourceMappingURL=string.js.map