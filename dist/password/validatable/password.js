import Pattern from "../pattern/password";
import StringMatch from "@alirya/string/validatable/match";
import QueryMessage from "./string/password";
export default function Password(source, message = QueryMessage) {
    return new StringMatch(source, new RegExp(`^${Pattern.source}*$`, Pattern.flags), message);
}
//# sourceMappingURL=password.js.map