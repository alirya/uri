import Callback from "@alirya/string/validatable/callback";
import Ipv6Boolean from "../boolean/ipv6";
import Ipv6Message from "./string/ipv6";
export default function Ipv6(string, message = Ipv6Message) {
    return new Callback(string, Ipv6Boolean, message);
}
//# sourceMappingURL=ipv6.js.map