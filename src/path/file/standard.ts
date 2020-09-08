import File from "./file";
import PathStandard from "../standard";
import Extension from "../string/extension";
import ReplaceExtension from "../string/replace-extension";
import Name from "../string/name";
import GetFile from "../string/file";
import ReplaceName from "../string/replace-name";
import ReplaceFile from "../string/replace-file";
import SafeCast from "@dikac/t-string/safe-cast";

export default class Standard extends PathStandard implements File {

    get extension () : string {

        return Extension(this.value);
    }

    set extension(extension : string)  {

        this.value = ReplaceExtension(this.value, extension);
    }

    get file () : string {

        return GetFile(this.value, this.splitter);
    }

    set file(extension : string)  {

        this.value = SafeCast(ReplaceFile(this.value, extension, this.splitter));
    }


    get name () : string {

        return Name(this.value, this.splitter);
    }

    set name(name : string)  {

        this.value = SafeCast(ReplaceName(this.value, name, this.splitter));
    }
}
