import StringMatch from "@dikac/t-string/validatable/match";
import QueryPattern from "../pattern/query";
import QueryMessage from "./string/query";
export default function Query(query, message = QueryMessage) {
    return new StringMatch(query, new RegExp(`^${QueryPattern}*$`, QueryPattern.flags), message);
}
//# sourceMappingURL=query.js.map