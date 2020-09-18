import Split from "../array/split";
export default function File(path, delimiter) {
    return Split(path, delimiter).pop() || '';
}
//# sourceMappingURL=file.js.map