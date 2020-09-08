import FragmentValidatable from "../validatable/fragment";

export default function Fragment(string : string) : boolean {

    return FragmentValidatable(string).valid;
}
