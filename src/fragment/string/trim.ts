import RemovePrefixCharacter from '@alirya/string/remove-prefix-parameters';

export default function Trim(scheme : string) : string {

    return RemovePrefixCharacter(scheme, '#');
}
