import ToString from '@axiona/string/to-string.js';

export default interface Query<QueryType extends ToString = ToString> {
    query ?: QueryType;
}
