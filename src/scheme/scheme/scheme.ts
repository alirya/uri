import ToString from '@alirya/string/to-string.js';

export default interface Scheme<SchemeTemplate extends ToString = ToString> {
    scheme ?: SchemeTemplate;
}
