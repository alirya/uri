import ToString from '@alirya/string/to-string.js';

export default interface Query<QueryType extends ToString = ToString> {
    query ?: QueryType;
}
