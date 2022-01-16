import SchemeValidatable from '../validatable/scheme';

export default function Scheme(string : string) : boolean {

    return SchemeValidatable(string).valid;
}
