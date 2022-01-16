import QueryValidatable from '../validatable/query';

export default function Query(string : string) : boolean {

    return QueryValidatable(string).valid;
}
