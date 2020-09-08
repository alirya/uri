import SubDelimiter from "../../pattern/sub-delimiter";
import Unreserved from "../../pattern/unreserved";
import PercentEncoded from "../../pattern/percent-encoded";
import Unique from "@dikac/t-array/unique";
import Escape from "@dikac/t-string/pattern/escape";

const subDelimiter = SubDelimiter.source;
const unreserved = Unreserved.source;
const percentEncoded = PercentEncoded.source;
const colon = Escape(':');


const flag = Unique([...SubDelimiter.flags, ...Unreserved.flags, ...PercentEncoded.flags]).join('');

const Password : RegExp =  new RegExp(
    `(${subDelimiter}|${unreserved}|${percentEncoded}|${colon})`,
    flag
);
export default Password;
