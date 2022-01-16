import PathList from "../list";
import Extension from "../string/extension";
import ReplaceExtension from "../string/replace-extension";
import GetFile from "../string/file";
import SafeCast from "@alirya/string/safe-cast";
import ReplaceFile from "../string/replace-file";
import Name from "../string/name";
import ReplaceName from "../string/replace-name";
import Standard from "./standard";
import RemoveSuffixCharacter from "@alirya/string/remove-suffix-character";
export default class List extends PathList {
    constructor(segments = [], delimiter = '/', delimiters = '/\\:') {
        super(segments, delimiter, delimiters);
    }
    get extension() {
        let last = this[this.length - 1];
        if (last) {
            return Extension(last);
        }
        return '';
    }
    set directory(dir) {
        const datas = [dir, this.file];
        this.splice(0);
        this.push(...datas);
        this.split();
    }
    get directory() {
        let standard = new Standard(this.join(this.delimiter[0]), this.delimiter, this.delimiters);
        return RemoveSuffixCharacter(standard.directory, this.delimiter[0]);
    }
    set extension(extension) {
        const index = this.length - 1;
        const last = this[index];
        if (last) {
            this[index] = ReplaceExtension(last, extension);
        }
    }
    get file() {
        const last = this[this.length - 1];
        if (last) {
            return GetFile(last, this.splitter);
        }
        return '';
    }
    set file(extension) {
        const index = this.length - 1;
        const last = this[index];
        if (last) {
            this[this.length - 1] = SafeCast(ReplaceFile(last, extension, this.splitter));
        }
    }
    get name() {
        const last = this[this.length - 1];
        if (last) {
            return Name(last, this.splitter);
        }
        return '';
    }
    set name(name) {
        const index = this.length - 1;
        const last = this[index];
        if (last) {
            this[index] = SafeCast(ReplaceName(last, name, this.splitter));
        }
    }
}
//# sourceMappingURL=list.js.map