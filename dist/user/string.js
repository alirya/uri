import User from "./validatable/user";
import AssertValid from "@dikac/t-validator/validatable/assert/valid";
import UserMessage from "./validatable/string/user";
export default function String(user, message = UserMessage) {
    let validatable = User(user, message);
    AssertValid(validatable);
    return validatable;
}
//# sourceMappingURL=string.js.map