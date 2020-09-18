import PrefixCharacter from "@dikac/t-string/prefix-character";
import JoinAuthority from "../authority/string/join";
export default function Join(uri, authority = JoinAuthority) {
    let result = '';
    let scheme = uri.scheme ? uri.scheme.toString() : '';
    if (scheme) {
        result += scheme + ':';
    }
    let auth = uri.authority ? authority(uri.authority) : '';
    if (auth) {
        result = result + '//' + auth;
    }
    let path = uri.path ? uri.path.toString() : '';
    if (path) {
        result += PrefixCharacter(path, uri.path.delimiter);
    }
    let query = uri.query ? uri.query.toString() : '';
    if (query) {
        result += PrefixCharacter(query, '?');
    }
    let fragment = uri.fragment ? uri.fragment.toString() : '';
    if (fragment) {
        result += PrefixCharacter(fragment, '#');
    }
    return result;
}
//# sourceMappingURL=join.js.map