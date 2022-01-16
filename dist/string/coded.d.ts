import Value from '@alirya/value/value';
import ValueOf from '@alirya/value/value-of/value-of';
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
//# sourceMappingURL=coded.d.ts.map