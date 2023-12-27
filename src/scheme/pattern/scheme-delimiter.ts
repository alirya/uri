import Scheme from './scheme.js';
import Escape from '@axiona/string/pattern/escape.js';
/**
 * @reference https://tools.ietf.org/html/rfc3986#appendix-B
 */

const SchemeDelimiter  = new RegExp(Scheme.source + Escape(':'), Scheme.flags);
export default SchemeDelimiter;
