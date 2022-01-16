import PathStandard from "../standard";
import Extension from "../string/extension";
import ReplaceExtension from "../string/replace-extension";
import Name from "../string/name";
import GetFile from "../string/file";
import ReplaceName from "../string/replace-name";
import ReplaceFile from "../string/replace-file";
import SafeCast from "@alirya/string/safe-cast";
import Join from "../string/join";
import RemoveSuffixCharacter from "@alirya/string/remove-suffix-character";
export default class Standard extends PathStandard {
    get extension() {
        return Extension(this.value);
    }
    get directory() {
        return RemoveSuffixCharacter(this.toString().slice(0, this.file.length * -1), this.delimiter[0]);
    }
    set directory(dir) {
        this.value = Join(dir, this.file, this.delimiter[0], this.splitter);
    }
    set extension(extension) {
        this.value = ReplaceExtension(this.value, extension);
    }
    get file() {
        return GetFile(this.value, this.splitter);
    }
    set file(extension) {
        this.value = SafeCast(ReplaceFile(this.value, extension, this.splitter));
    }
    get name() {
        return Name(this.value, this.splitter);
    }
    set name(name) {
        this.value = SafeCast(ReplaceName(this.value, name, this.splitter));
    }
}
//# sourceMappingURL=standard.js.map