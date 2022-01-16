import Value from '@alirya/value/value';
import Pick from '@alirya/object/pick';
import {StringifyOptions, stringify} from 'query-string';
import OmitUndefined from '@alirya/object/omit-undefined';

export type RecordRecursive<V> =  {
    [P in PropertyKey]: RecordRecursive<V>|any;
};

export default class Object_ implements Value<RecordRecursive<any>>, Required<Omit<StringifyOptions, 'sort'>>, Pick<StringifyOptions, 'sort'> {

    /**
     * @see StringifyOptions.arrayFormat
     */
    public arrayFormat: 'bracket' | 'index' | 'comma' | 'separator' | 'none' = 'none';
    /**
     * @see StringifyOptions.arrayFormatSeparator
     */
    public arrayFormatSeparator: string = ',';
    /**
     * @see StringifyOptions.encode
     */
    public encode: boolean = true;
    /**
     * @see StringifyOptions.skipEmptyString
     */
    public skipEmptyString: boolean = false;
    /**
     * @see StringifyOptions.skipNull
     */
    public skipNull: boolean = false;
    /**
     * @see StringifyOptions.sort
     */
    public sort ?: ((itemLeft: string, itemRight: string) => number) | false;
    /**
     * @see StringifyOptions.strict
     */
    public strict: boolean = true;

    constructor(
        public value : RecordRecursive<any>,
        option : StringifyOptions = {}
    ) {

        Object.assign(this, OmitUndefined(Pick(option, 'arrayFormat','arrayFormatSeparator','encode','skipEmptyString','skipNull','sort','strict')));
    }

    toString(): string {

        return stringify(this.value, this);
    }

}


