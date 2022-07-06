import {QueryParameters} from '../validatable/query.js';

export default function Query(string : string) : boolean {

    return QueryParameters(string).valid;
}
