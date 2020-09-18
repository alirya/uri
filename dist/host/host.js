import HostValidatable from "./validatable/host";
import AssertValid from "@dikac/t-validator/validatable/assert/valid";
import HostMessage from "./validatable/string/host";
export default function Host(string, message = HostMessage) {
    let scheme = HostValidatable(string, message);
    AssertValid(scheme);
    return scheme;
}
//# sourceMappingURL=host.js.map