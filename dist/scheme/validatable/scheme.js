import StringMatch from "@dikac/t-string/validatable/match";
import SchemePattern from "../pattern/scheme";
import SchemeMessage from "./string/scheme";
export default function Scheme(scheme, message = SchemeMessage) {
    return new StringMatch(scheme, new RegExp(`^${SchemePattern.source}*$`, SchemePattern.flags), message);
}
//# sourceMappingURL=scheme.js.map