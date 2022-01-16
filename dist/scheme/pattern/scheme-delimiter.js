import Scheme from './scheme';
import Escape from '@alirya/string/pattern/escape';
/**
 * @reference https://tools.ietf.org/html/rfc3986#appendix-B
 */
const SchemeDelimiter = new RegExp(Scheme.source + Escape(':'), Scheme.flags);
export default SchemeDelimiter;
//# sourceMappingURL=scheme-delimiter.js.map