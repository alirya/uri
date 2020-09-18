import ReplaceExtension from "./replace-extension";
import Split from "../array/split";
export default function Name(path, delimiter) {
    let file = Split(path, delimiter).pop();
    if (file) {
        return ReplaceExtension(file, '');
    }
    return '';
}
//# sourceMappingURL=name.js.map