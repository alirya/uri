import { v6 } from "is-ip";
import Unclose from "@dikac/t-string/unclose";
export default function Ipv6(string) {
    if (string[0] === '[' && string[string.length - 1] === ']') {
        string = Unclose(string, '[', ']');
    }
    return v6(string);
}
//# sourceMappingURL=ipv6.js.map