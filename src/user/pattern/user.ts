import SubDelimiter from '../../pattern/sub-delimiter';
import Unreserved from '../../pattern/unreserved';
import PercentEncoded from '../../pattern/percent-encoded';
import Unique from '@alirya/array/unique-parameters';

const subDelimiter = SubDelimiter.source;
const unreserved = Unreserved.source;
const percentEncoded = PercentEncoded.source;


const flag = Unique([
    ...SubDelimiter.flags,
    ...Unreserved.flags,
    ...PercentEncoded.flags]
).join('');

const User : RegExp =  new RegExp(
    `(${subDelimiter}|${unreserved}|${percentEncoded})`,
    flag
);
export default User;
