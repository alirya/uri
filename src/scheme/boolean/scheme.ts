import {SchemeParameters} from '../validatable/scheme.js';

export default function Scheme(string : string) : boolean {

    return SchemeParameters(string).valid;
}
