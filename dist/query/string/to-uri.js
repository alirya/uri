import PrefixCharacter from '@alirya/string/prefix-character';
export default function ToUri(query) {
    return PrefixCharacter(query.toString(), '?');
}
//# sourceMappingURL=to-uri.js.map