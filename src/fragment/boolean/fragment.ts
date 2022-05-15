import FragmentValidatable from '../validatable/fragment-parameters';

export default function Fragment(string : string) : boolean {

    return FragmentValidatable(string).valid;
}
