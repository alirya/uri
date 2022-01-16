import Escape from "@alirya/string/pattern/escape";
export default function Split(string, delimiter) {
    const escaped = Escape(delimiter);
    return string.split(new RegExp(`[${escaped}]+`, 'g'));
}
//# sourceMappingURL=split.js.map