import Escape from "@dikac/t-string/pattern/escape";
export default class Standard {
    constructor(value, delimiter = '/', delimiters = '/\\:') {
        this.value = value;
        this.delimiter = delimiter;
        this.delimiters = delimiters;
    }
    get splitter() {
        return this.delimiters + this.delimiter;
    }
    toString() {
        const escaped = Escape(this.splitter);
        const pattern = new RegExp(`[${escaped}]+`, 'g');
        return this.value.replace(pattern, this.delimiter[0]);
    }
}
//# sourceMappingURL=standard.js.map