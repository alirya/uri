import TrimPrefix from '@alirya/string/trim-prefix';
export default function ToUriRootless(path) {
    return TrimPrefix(path.toString(), path.delimiter);
}
//# sourceMappingURL=to-uri-rootless.js.map