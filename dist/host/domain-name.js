import DomainNameValidatable from "./validatable/domain-name";
import AssertValid from "@alirya/validator/validatable/assert/valid";
import DomainNameMessage from "./validatable/string/domain-name";
export default function DomainName(string, message = DomainNameMessage) {
    let scheme = DomainNameValidatable(string, message);
    AssertValid(scheme);
    return scheme;
}
//# sourceMappingURL=domain-name.js.map