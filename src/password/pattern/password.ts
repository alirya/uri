import SubDelimiter from '../../pattern/sub-delimiter.js';
import Unreserved from '../../pattern/unreserved.js';
import PercentEncoded from '../../pattern/percent-encoded.js';
import { UniqueParameters } from '@axiona/array/unique.js';
import Escape from '@axiona/string/pattern/escape.js';

const subDelimiter = SubDelimiter.source;
const unreserved = Unreserved.source;
const percentEncoded = PercentEncoded.source;
const colon = Escape(':');

const flag = UniqueParameters([...SubDelimiter.flags, ...Unreserved.flags, ...PercentEncoded.flags]).join('');

const Password  =  new RegExp(
    `(${subDelimiter}|${unreserved}|${percentEncoded}|${colon})`,
    flag
);
export default Password;
