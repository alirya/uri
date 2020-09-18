import Callback from "@dikac/t-string/validatable/callback";
import Ipv4Boolean from "../boolean/ipv4";
import Ipv4Message from "./string/ipv4";
export default function Ipv4(string, message = Ipv4Message) {
    return new Callback(string, Ipv4Boolean, message);
}
//# sourceMappingURL=ipv4.js.map