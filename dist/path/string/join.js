import Escape from "@alirya/string/pattern/escape";
export default function Extension(start, end, delimiter = '/', delimiters = ':/\\') {
    let escaped = Escape(delimiters);
    {
        let match = start.match(new RegExp(`[${escaped}]+$`));
        if (match) {
            return start + end;
        }
    }
    {
        let match = end.match(new RegExp(`^[${escaped}]+`));
        if (match) {
            return start + end;
        }
    }
    return start + delimiter[0] + end;
}
//# sourceMappingURL=join.js.map