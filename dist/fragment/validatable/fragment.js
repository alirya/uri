import StringMatch from "@dikac/t-string/validatable/match";
import FragmentPattern from "../pattern/fragment";
import FragmentMessage from "./string/fragment";
export default function Fragment(fragment, message = FragmentMessage) {
    return new StringMatch(fragment, new RegExp(`^${FragmentPattern.source}*$`, FragmentPattern.flags), message);
}
//# sourceMappingURL=fragment.js.map