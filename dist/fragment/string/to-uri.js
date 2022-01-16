import PrefixCharacter from "@alirya/string/prefix-character";
export default function ToUri(fragment) {
    return PrefixCharacter(fragment.toString(), '#');
}
//# sourceMappingURL=to-uri.js.map