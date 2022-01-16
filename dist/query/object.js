import Pick from '@alirya/object/pick';
import { stringify } from 'query-string';
import OmitUndefined from '@alirya/object/omit-undefined';
export default class Object_ {
    constructor(value, option = {}) {
        this.value = value;
        /**
         * @see StringifyOptions.arrayFormat
         */
        this.arrayFormat = 'none';
        /**
         * @see StringifyOptions.arrayFormatSeparator
         */
        this.arrayFormatSeparator = ',';
        /**
         * @see StringifyOptions.encode
         */
        this.encode = true;
        /**
         * @see StringifyOptions.skipEmptyString
         */
        this.skipEmptyString = false;
        /**
         * @see StringifyOptions.skipNull
         */
        this.skipNull = false;
        /**
         * @see StringifyOptions.strict
         */
        this.strict = true;
        Object.assign(this, OmitUndefined(Pick(option, 'arrayFormat', 'arrayFormatSeparator', 'encode', 'skipEmptyString', 'skipNull', 'sort', 'strict')));
    }
    toString() {
        return stringify(this.value, this);
    }
}
//# sourceMappingURL=object.js.map