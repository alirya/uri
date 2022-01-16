import RemovePrefixCharacter from '@alirya/string/remove-prefix-character';


export default function Trim(scheme : string) : string {

    return RemovePrefixCharacter(scheme, '?');
}
