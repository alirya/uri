import Value from "@dikac/t-value/value";
import { StringifyOptions } from "query-string";
export declare type RecordRecursive<V> = {
    [P in PropertyKey]: RecordRecursive<V> | any;
};
export default class Object_ implements Value<RecordRecursive<any>>, Required<Omit<StringifyOptions, 'sort'>>, Pick<StringifyOptions, 'sort'> {
    value: RecordRecursive<any>;
    /**
     * @see StringifyOptions.arrayFormat
     */
    arrayFormat: "bracket" | "index" | "comma" | "separator" | "none";
    /**
     * @see StringifyOptions.arrayFormatSeparator
     */
    arrayFormatSeparator: string;
    /**
     * @see StringifyOptions.encode
     */
    encode: boolean;
    /**
     * @see StringifyOptions.skipEmptyString
     */
    skipEmptyString: boolean;
    /**
     * @see StringifyOptions.skipNull
     */
    skipNull: boolean;
    /**
     * @see StringifyOptions.sort
     */
    sort?: ((itemLeft: string, itemRight: string) => number) | false;
    /**
     * @see StringifyOptions.strict
     */
    strict: boolean;
    constructor(value: RecordRecursive<any>, option?: StringifyOptions);
    toString(): string;
}
