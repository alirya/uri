import SubDelimiter from '../../pattern/sub-delimiter';
import Unreserved from '../../pattern/unreserved';
import PercentEncoded from '../../pattern/percent-encoded';
import Unique from '@alirya/array/unique';
import Escape from '@alirya/string/pattern/escape';
const subDelimiter = SubDelimiter.source;
const unreserved = Unreserved.source;
const percentEncoded = PercentEncoded.source;
const colon = Escape(':');
const flag = Unique([...SubDelimiter.flags, ...Unreserved.flags, ...PercentEncoded.flags]).join('');
const Password = new RegExp(`(${subDelimiter}|${unreserved}|${percentEncoded}|${colon})`, flag);
export default Password;
//# sourceMappingURL=password.js.map