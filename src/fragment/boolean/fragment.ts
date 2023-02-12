import {FragmentParameters} from '../validatable/fragment.js';

export default function Fragment(string : string) : boolean {

    return FragmentParameters(string).valid;
}
