import Escape from "@alirya/string/pattern/escape";
export default function ReplaceExtension(path, extension, delimiter = ':/\\') {
    if (extension.length) {
        extension = '.' + extension;
    }
    let escaped = Escape(delimiter);
    // determine if replaced or not, in case file without extension
    // replace operation will not work
    let replaced = false;
    path = path.replace(new RegExp(`\\.[^${escaped}.]+$`), (substring, args) => {
        replaced = true;
        return extension;
    });
    if (replaced) {
        return path;
    }
    // bare file
    if (path.match(new RegExp(`[^${escaped}]+$`))) {
        return path + extension;
    }
    return path;
}
//# sourceMappingURL=replace-extension.js.map