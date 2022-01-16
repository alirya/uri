import Path from "../path";
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
import File from "./file";

export default class List extends PathList implements File {

    constructor(
        segments : Iterable<string> = [],
        delimiter : string = '/',
        delimiters : string = '/\\:'
    ) {
        super(segments, delimiter, delimiters);
    }

    get extension () : string {

        let last = this[this.length - 1]

        if(last) {

            return Extension(last);
        }

        return '';
    }

    set directory(dir : string)  {

        const datas = [dir, this.file];

        this.splice(0);
        this.push(...datas);
        this.split();
    }

    get directory() : string {

        let standard = new Standard(this.join(this.delimiter[0]), this.delimiter, this.delimiters);
        return RemoveSuffixCharacter(standard.directory, this.delimiter[0]);
    }


    set extension(extension : string)  {

        const index = this.length - 1;
        const last = this[index];

        if(last) {

            this[index] = ReplaceExtension(last, extension);
        }
    }

    get file () : string  {

        const last = this[this.length - 1]

        if(last) {

            return GetFile(last, this.splitter);
        }

        return '';
    }

    set file(extension : string)  {

        const index = this.length - 1;
        const last = this[index]

        if(last) {

            this[this.length - 1] = SafeCast(ReplaceFile(last, extension, this.splitter));
        }
    }


    get name () : string {

        const last = this[this.length - 1]

        if(last) {

            return Name(last, this.splitter);
        }

        return '';
    }

    set name(name : string)  {

        const index = this.length - 1;
        const last = this[index]

        if(last) {

            this[index] = SafeCast(ReplaceName(last, name, this.splitter));
        }
    }
}
