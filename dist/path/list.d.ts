import Path from "./path";
export default class List extends Array<string> implements Path {
    delimiter: string;
    delimiters: string;
    static get [Symbol.species](): ArrayConstructor;
    constructor(segments?: Iterable<string>, delimiter?: string, delimiters?: string);
    get splitter(): string;
    split(): void;
    toString(): string;
}
//# sourceMappingURL=list.d.ts.map