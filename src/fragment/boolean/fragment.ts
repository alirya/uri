import {FragmentParameters} from '../validatable/fragment';

export default function Fragment(string : string) : boolean {

    return FragmentParameters(string).valid;
}
