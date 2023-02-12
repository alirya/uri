import SubDelimiter from '../../pattern/sub-delimiter.js';
import Unreserved from '../../pattern/unreserved.js';
import PercentEncoded from '../../pattern/percent-encoded.js';

const subDelimiter = SubDelimiter.source;
const unreserved = Unreserved.source;
const percentEncoded = PercentEncoded.source;

/**
 * essentially same as query, except for #
 */

const UserInfo  =  new RegExp(
    `(${subDelimiter}|${unreserved}|${percentEncoded}|:)*`,
    'i'
);
export default UserInfo;
