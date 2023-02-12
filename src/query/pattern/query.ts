import SubDelimiter from '../../pattern/sub-delimiter.js';
import Unreserved from '../../pattern/unreserved.js';
import PercentEncoded from '../../pattern/percent-encoded.js';
import { UniqueParameters } from '@alirya/array/unique.js';
import Escape from '@alirya/string/pattern/escape.js';

const subDelimiter = SubDelimiter.source;
const unreserved = Unreserved.source;
const percentEncoded = PercentEncoded.source;

const extra = Escape('?/');

const flag = UniqueParameters([
    ...SubDelimiter.flags,
    ...Unreserved.flags,
    ...PercentEncoded.flags]
).join('');

const User  =  new RegExp(
    `(${subDelimiter}|${unreserved}|${percentEncoded}|[${extra}])`,
    flag
);
export default User;
