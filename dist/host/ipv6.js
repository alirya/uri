import AssertValid from "@alirya/validator/validatable/assert/valid";
import Ipv6Message from "./validatable/string/ipv6";
import Ipv6Validatable from "./validatable/ipv6";
export default function Ipv6(string, message = Ipv6Message) {
    let scheme = Ipv6Validatable(string, message);
    AssertValid(scheme);
    return scheme;
}
//# sourceMappingURL=ipv6.js.map