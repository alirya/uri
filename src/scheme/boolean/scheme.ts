import SchemeValidatable from '../validatable/scheme-parameters';

export default function Scheme(string : string) : boolean {

    return SchemeValidatable(string).valid;
}
