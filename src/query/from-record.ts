import Value from '@alirya/value/value.js';
import {PickParameters} from '@alirya/object/pick.js';
import OmitUndefined from '@alirya/object/omit-undefined.js';
import {defaultEncoder, IStringifyOptions, stringify} from 'qs.js';

export type RecordRecursive<V> =  {
    [P in PropertyKey]: RecordRecursive<V>|any;
};

export interface FromRecordArgument extends
    Omit<Exclude<Required<IStringifyOptions>, undefined>, 'encoder'|'filter'|'sort'|'serializeDate'>,
    globalThis.Pick<IStringifyOptions, 'encoder'|'filter'|'sort'|'serializeDate'>
{ }

export default class FromRecord implements Value<RecordRecursive<any>>, FromRecordArgument {

    encode: boolean = true;
    allowDots: boolean = false;
    charset: 'utf-8' | 'iso-8859-1' =  'utf-8';
    charsetSentinel: boolean  = false;
    comma: boolean = false;
    delimiter: string = '&';
    encoder : ((str: any, defaultEncoder: defaultEncoder, charset: string, type: 'key' | 'value') => string) | undefined = undefined;
    strictNullHandling: boolean = false;
    format: 'RFC1738' | 'RFC3986' = 'RFC3986';
    /**
     * specify the format of the output array
     *
     * - indices a[0]=b&a[1]=c
     * - brackets a[]=b&a[]=c
     * - repeat a=b&a=c
     * - comma a=b,c
     */
    arrayFormat: 'indices' | 'brackets' | 'repeat' | 'comma' = 'indices';
    encodeValuesOnly: boolean = false;
    addQueryPrefix: boolean = false;
    indices: boolean = false;
    skipNulls: boolean = false;
    filter: Array<string | number> | ((prefix: string, value: any) => any) | undefined = undefined;
    sort: ((a: any, b: any) => number) | undefined = undefined;
    serializeDate: ((d: Date) => string) | undefined = undefined;

    constructor(
        public value : RecordRecursive<any>,
        option : Partial<FromRecordArgument> = {}
    ) {

        Object.assign(this, OmitUndefined(PickParameters(option, ...Object.keys(this) as (keyof FromRecordArgument)[])));
    }

    toString(): string {

        return stringify(this.value, this);
    }

}


