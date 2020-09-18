import Standard from "./standard";
import Split from "./array/split";
export default class List extends Array {
    constructor(segments = [], delimiter = '/', delimiters = '/\\:') {
        super(...segments);
        this.delimiter = delimiter;
        this.delimiters = delimiters;
    }
    static get [Symbol.species]() {
        return Array;
    }
    get splitter() {
        return this.delimiters + this.delimiter;
    }
    split() {
        Split(this.toString(), this.splitter).forEach((value, index) => this[index] = value);
    }
    toString() {
        let standard = new Standard(this.join(this.delimiter[0]), this.delimiter[0], this.delimiters);
        return standard.toString();
    }
}
//# sourceMappingURL=list.js.map