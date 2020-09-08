import RemoveSuffixCharacter from "@dikac/t-string/remove-suffix-character";


export default function Trim(scheme : string) : string {

    return RemoveSuffixCharacter(scheme, ':');
}
