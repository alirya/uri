import Path from './path';
import Standard from './standard';
import Split from './array/split';

export default class List extends Array<string> implements Path {

    static get [Symbol.species](): ArrayConstructor {
        return Array;
    }

    constructor(
        segments : Iterable<string> = [],
        public delimiter : string = '/',
        public delimiters : string = '/\\:'
    ) {

        super(...segments);
    }

    get splitter() : string {

        return this.delimiters + this.delimiter;
    }

    split() {

        Split(this.toString(), this.splitter).forEach((value, index)=>this[index] = value);
    }

    toString(): string {

        let standard = new Standard(this.join(this.delimiter[0]), this.delimiter[0], this.delimiters);
        return standard.toString();
    }
}
