import Query from "./validatable/query";
import AssertValid from "@dikac/t-validator/validatable/assert/valid";
import QueryMessage from "./validatable/string/query";
export default function String(query, message = QueryMessage) {
    let validatable = Query(query, message);
    AssertValid(validatable);
    return validatable;
}
//# sourceMappingURL=string.js.map