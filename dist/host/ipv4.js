import Ipv4Validatable from "./validatable/ipv4";
import AssertValid from "@alirya/validator/validatable/assert/valid";
import Ipv4Message from "./validatable/string/ipv4";
export default function Ipv4(string, message = Ipv4Message) {
    let scheme = Ipv4Validatable(string, message);
    AssertValid(scheme);
    return scheme;
}
//# sourceMappingURL=ipv4.js.map