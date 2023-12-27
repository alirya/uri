import ToString from '@axiona/string/to-string.js';

export default interface Scheme<SchemeTemplate extends ToString = ToString> {
    scheme ?: SchemeTemplate;
}
