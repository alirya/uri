import Value from "@dikac/t-value/value";
import ValueOf from "@dikac/t-value/value-of/value-of";
export default class Coded implements Value<string>, ValueOf<string> {
    #private;
    readonly encoder: (decoded: string) => string;
    readonly decoder: (encoded: string) => string;
    constructor(value: string, encoder?: (decoded: string) => string, decoder?: (encoded: string) => string);
    set value(string: string);
    get value(): string;
    valueOf(): string;
    toString(): string;
}
