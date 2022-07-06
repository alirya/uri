import SubDelimiter from '../../pattern/sub-delimiter.js';
import Unreserved from '../../pattern/unreserved.js';
import PercentEncoded from '../../pattern/percent-encoded.js';
import Unique from '@alirya/array/unique-parameters.js';
import Escape from '@alirya/string/pattern/escape.js';

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
