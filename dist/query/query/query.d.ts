import ToString from "@dikac/t-string/to-string";
export default interface Query<QueryType extends ToString = ToString> {
    query?: QueryType;
}
