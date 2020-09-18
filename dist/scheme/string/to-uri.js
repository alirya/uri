import SuffixCharacter from "@dikac/t-string/suffix-character";
export default function ToUri(scheme) {
    return SuffixCharacter(scheme.toString(), ':');
}
//# sourceMappingURL=to-uri.js.map