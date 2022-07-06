import Scheme from './scheme.js';
import Escape from '@alirya/string/pattern/escape.js';
/**
 * @reference https://tools.ietf.org/html/rfc3986#appendix-B
 */

const SchemeDelimiter : RegExp = new RegExp(Scheme.source + Escape(':'), Scheme.flags);
export default SchemeDelimiter;
