import ToString from '@alirya/string/to-string';

export default interface Scheme<SchemeTemplate extends ToString = ToString> {
    scheme ?: SchemeTemplate;
}
