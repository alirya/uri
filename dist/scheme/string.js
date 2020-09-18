import Scheme from "./validatable/scheme";
import AssertValid from "@dikac/t-validator/validatable/assert/valid";
import SchemeMessage from "./validatable/string/scheme";
export default function String(scheme, message = SchemeMessage) {
    let validatable = Scheme(scheme, message);
    AssertValid(validatable);
    return validatable;
}
//# sourceMappingURL=string.js.map