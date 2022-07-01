import {SchemeParameters} from '../validatable/scheme';

export default function Scheme(string : string) : boolean {

    return SchemeParameters(string).valid;
}
