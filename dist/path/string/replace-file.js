import Escape from '@alirya/string/pattern/escape';
export default function ReplaceFile(path, file, delimiter = ':/\\') {
    const escaped = Escape(delimiter);
    if (file !== undefined) {
        return path.replace(new RegExp(`[^${escaped}]+$`), file);
    }
    else {
        return path.replace(new RegExp(`[${escaped}]+[^${escaped}]+$`), '');
    }
}
//# sourceMappingURL=replace-file.js.map