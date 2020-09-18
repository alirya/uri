import Unreserved from "./unreserved";
import Percent from "./percent-encoded";
import SubDelimiter from "./sub-delimiter";
import Escape from "@dikac/t-string/pattern/escape";
import Unique from "@dikac/t-array/unique";
const subDelimiter = SubDelimiter;
const unreserved = Unreserved;
const extra = Escape('@:');
const flag = Unique([...subDelimiter.flags, ...unreserved.flags]).join('');
const Pattern = new RegExp(`([${extra}]|${Percent.source}|${unreserved.source}|${subDelimiter.source})*`, flag);
export default Pattern;
//# sourceMappingURL=pchar.js.map