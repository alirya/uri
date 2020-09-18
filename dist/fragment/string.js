import Fragment from "./validatable/fragment";
import AssertValid from "@dikac/t-validator/validatable/assert/valid";
import FragmentMessage from "./validatable/string/fragment";
export default function String(fragment, message = FragmentMessage) {
    let validatable = Fragment(fragment, message);
    AssertValid(validatable);
    return validatable;
}
//# sourceMappingURL=string.js.map