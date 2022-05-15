import Path from './path';
import Value from '@alirya/value/value';
import Escape from '@alirya/string/pattern/escape';

export default class StandardParameters implements Path, Value<string> {

    constructor(
        public value : string,
        public separator : string = '/',
        public separators : string = '/\\:',
        public prefix : boolean = false,
    ) {
    }

    get splitter() : string {

        return this.separators + this.separator;
    }

    toString(): string {

        const escaped = Escape(this.splitter);

        const pattern = new RegExp(`[${escaped}]+`, 'g');

        const path =  this.value.replace(pattern, this.separator[0]);

        if(this.prefix) {

            if(path[0] !== this.separator[0]) {

                return this.separator[0] + path;
            }
        }

        return path;
    }
}
