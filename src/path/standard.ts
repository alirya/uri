import Path from './path.js';
import Value from '@alirya/value/value.js';
import Escape from '@alirya/string/pattern/escape.js';
import Normalize, {NormalizeParameters} from './string/normalize.js';

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

    toString(): string {

        const path =  NormalizeParameters(this.value, this.separator, this.separators);

        const separator = this.separator[0];

        if(this.prefix) {

            if(path[0] !== separator) {

                return separator + path;
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
