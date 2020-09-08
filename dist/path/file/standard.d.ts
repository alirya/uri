import File from "./file";
import PathStandard from "../standard";
export default class Standard extends PathStandard implements File {
    get extension(): string;
    set extension(extension: string);
    get file(): string;
    set file(extension: string);
    get name(): string;
    set name(name: string);
}
