import SubDelimiter from '../../pattern/sub-delimiter.js';
import Unreserved from '../../pattern/unreserved.js';
import PercentEncoded from '../../pattern/percent-encoded.js';
import { UniqueParameters } from '@axiona/array/unique.js';

const subDelimiter = SubDelimiter.source;
const unreserved = Unreserved.source;
const percentEncoded = PercentEncoded.source;


const flag = UniqueParameters([
    ...SubDelimiter.flags,
    ...Unreserved.flags,
    ...PercentEncoded.flags
]).join('');

const User  =  new RegExp(
    `(${subDelimiter}|${unreserved}|${percentEncoded})`,
    flag
);
export default User;
