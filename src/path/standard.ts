import Path from './path.js';
import Value from '@alirya/value/value.js';
import Escape from '@alirya/string/pattern/escape.js';

export interface StandardType extends Path, Value<string> {
    value : string;
    separator : string;
    separators : string;
    prefix : boolean;
}

export class StandardParameters implements Path, Value<string> {

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


export interface StandardArgument {
    value : string;
    separator ?: string;
    separators ?: string;
    prefix ?: boolean;
}

export class StandardParameter extends StandardParameters {

    constructor(
        {
            value,
            separator,
            separators,
            prefix,
        } : StandardArgument
    ) {
        super(value, separator, separators, prefix);
    }
}

namespace Standard {
    export const Parameters = StandardParameters;
    export const Parameter = StandardParameter;
}
export default Standard;
