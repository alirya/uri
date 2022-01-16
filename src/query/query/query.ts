import ToString from "@alirya/string/to-string";

export default interface Query<QueryType extends ToString = ToString> {
    query ?: QueryType;
}
