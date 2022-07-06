import SubDelimiter from '../../pattern/sub-delimiter.js';
import Unreserved from '../../pattern/unreserved.js';
import PercentEncoded from '../../pattern/percent-encoded.js';

let subDelimiter = SubDelimiter.source;
let unreserved = Unreserved.source;
let percentEncoded = PercentEncoded.source;

/**
 * essentially same as query, except for #
 */

const UserInfo : RegExp =  new RegExp(
    `(${subDelimiter}|${unreserved}|${percentEncoded}|:)*`,
    'i'
);
export default UserInfo;
