import {QueryParameters} from '../validatable/query';

export default function Query(string : string) : boolean {

    return QueryParameters(string).valid;
}
