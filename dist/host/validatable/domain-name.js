import Callback from "@alirya/string/validatable/callback";
import DomainNameBoolean from "../boolean/domain-name";
import DomainNameMessage from "./string/domain-name";
export default function DomainName(string, message = DomainNameMessage) {
    return new Callback(string, DomainNameBoolean, message);
}
//# sourceMappingURL=domain-name.js.map