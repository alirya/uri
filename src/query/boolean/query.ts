import QueryValidatable from '../validatable/query-parameters';

export default function Query(string : string) : boolean {

    return QueryValidatable(string).valid;
}
