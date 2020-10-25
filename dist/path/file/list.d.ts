import PathList from "../list";
import File from "./file";
export default class List extends PathList implements File {
    constructor(segments?: Iterable<string>, delimiter?: string, delimiters?: string);
    get extension(): string;
    set directory(dir: string);
    get directory(): string;
    set extension(extension: string);
    get file(): string;
    set file(extension: string);
    get name(): string;
    set name(name: string);
}
