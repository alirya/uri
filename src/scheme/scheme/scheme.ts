import ToString from "@dikac/t-string/to-string";

export default interface Scheme<SchemeTemplate extends ToString = ToString> {
    scheme ?: SchemeTemplate;
}
