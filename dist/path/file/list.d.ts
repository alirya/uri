import Path from "../path";
import PathList from "../list";
export default class List extends PathList implements Path {
    constructor(segments?: Iterable<string>, delimiter?: string, delimiters?: string);
    get extension(): string;
    set extension(extension: string);
    get file(): string;
    set file(extension: string);
    get name(): string;
    set name(name: string);
}
