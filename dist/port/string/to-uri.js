import PrefixCharacter from "@dikac/t-string/prefix-character";
export default function ToUri(port) {
    return PrefixCharacter(port.toString(), ':');
}
//# sourceMappingURL=to-uri.js.map