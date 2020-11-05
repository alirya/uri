import Extension from "./extension";
import Split from "../array/split";
export default function ReplaceName(path, name, delimiter = ':/\\') {
    let parts = Split(path, delimiter);
    let file = parts.pop();
    if (file && name) {
        let extension = Extension(file);
        if (extension === '') {
            parts.push(name);
        }
        else {
            parts.push(name + '.' + extension);
        }
    }
    return parts.join(delimiter);
}
//# sourceMappingURL=replace-name.js.map