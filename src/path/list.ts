import Path from './path';
import Standard from './standard';
import Split from './array/split';

export default class List extends Array<string> implements Path {

    static get [Symbol.species](): ArrayConstructor {
        return Array;
    }

    constructor(
        segments : Iterable<string> = [],
        public separator : string = '/',
        public separators : string = '/\\:'
    ) {

        super(...segments);
    }

    get splitter() : string {

        return this.separators + this.separator;
    }

    split() {

        Split(this.toString(), this.splitter).forEach((value, index)=>this[index] = value);
    }

    toString(): string {

        let standard = new Standard(this.join(this.separator[0]), this.separator[0], this.separators);
        return standard.toString();
    }
}
