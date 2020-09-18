import PrefixCharacter from "@dikac/t-string/prefix-character";
export default function ToUri(fragment) {
    return PrefixCharacter(fragment.toString(), '#');
}
//# sourceMappingURL=to-uri.js.map