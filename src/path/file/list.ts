import Path from "../path";
import PathList from "../list";
import Extension from "../string/extension";
import ReplaceExtension from "../string/replace-extension";
import GetFile from "../string/file";
import SafeCast from "@dikac/t-string/safe-cast";
import ReplaceFile from "../string/replace-file";
import Name from "../string/name";
import ReplaceName from "../string/replace-name";
import Standard from "./standard";
import RemoveSuffixCharacter from "@dikac/t-string/remove-suffix-character";

export default class List extends PathList implements Path {

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

    set dir(dir : string)  {

        const datas = [dir, this.file];

        this.splice(0);
        this.push(...datas);
        this.split();
    }


    get dir() : string {

        let standard = new Standard(this.join(this.delimiter[0]), this.delimiter, this.delimiters);

        return RemoveSuffixCharacter(standard.dir, this.delimiter[0]);
    }


    set extension(extension : string)  {

        let last = this[this.length - 1]

        if(last) {

            this[this.length - 1] = ReplaceExtension(last, extension);
        }
    }

    get file () : string  {

        let last = this[this.length - 1]

        if(last) {

            return GetFile(last, this.splitter);
        }

        return '';
    }

    set file(extension : string)  {

        let last = this[this.length - 1]

        if(last) {

            this[this.length - 1] = SafeCast(ReplaceFile(last, extension, this.splitter));
        }
    }


    get name () : string {

        let last = this[this.length - 1]

        if(last) {

            return Name(last, this.splitter);
        }

        return '';
    }

    set name(name : string)  {

        let last = this[this.length - 1]

        if(last) {

            this[this.length - 1] = SafeCast(ReplaceName(last, name, this.splitter));
        }
    }
}
