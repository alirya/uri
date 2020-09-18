import Extension from "./extension";
import Split from "../array/split";
export default function ReplaceName(path, name, delimiter = ':/\\') {
    let parts = Split(path, delimiter);
    let file = parts.pop();
    if (file && name) {
        parts.push(name + '.' + Extension(file));
    }
    return parts.join(delimiter);
}
//# sourceMappingURL=replace-name.js.map