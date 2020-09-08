import RemovePrefixCharacter from "@dikac/t-string/remove-prefix-character";


export default function Trim(scheme : string) : string {

    return RemovePrefixCharacter(scheme, '?');
}
