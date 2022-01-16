import Path from "./path";
import Value from "@alirya/value/value";
export default class Standard implements Path, Value<string> {
    value: string;
    delimiter: string;
    delimiters: string;
    constructor(value: string, delimiter?: string, delimiters?: string);
    get splitter(): string;
    toString(): string;
}
//# sourceMappingURL=standard.d.ts.map