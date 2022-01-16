import SubDelimiter from "../../pattern/sub-delimiter";
import Unreserved from "../../pattern/unreserved";
import PercentEncoded from "../../pattern/percent-encoded";
import Unique from "@alirya/array/unique";
import Escape from "@alirya/string/pattern/escape";
const subDelimiter = SubDelimiter.source;
const unreserved = Unreserved.source;
const percentEncoded = PercentEncoded.source;
const extra = Escape('?/');
const flag = Unique([
    ...SubDelimiter.flags,
    ...Unreserved.flags,
    ...PercentEncoded.flags
]).join('');
const Fragment = new RegExp(`(${subDelimiter}|${unreserved}|${percentEncoded}|[${extra}])`, flag);
export default Fragment;
//# sourceMappingURL=fragment.js.map