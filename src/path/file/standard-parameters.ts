import File from './file';
import PathStandard from '../standard-parameters';
import ExtensionParameters from './string/extension-parameters';
import ReplaceExtensionParameters from './string/replace-extension-parameters';
import NameParameters from './string/name-parameters';
import GetFile from './string/file-parameters';
import ReplaceNameParameters from './string/replace-name-parameters';
import ReplaceFileParameters from './string/replace-file-parameters';
import SafeCast from '@alirya/string/safe-cast';
import Join from '../string/join';
import RemoveSuffixCharacter from '@alirya/string/remove-suffix-parameters';

export default class StandardParameters extends PathStandard implements File {

    get extension () : string {

        return ExtensionParameters(this.value);
    }

    get directory() : string {

        return RemoveSuffixCharacter(this.toString().slice(0, this.file.length * -1), this.separator[0]);
    }

    set directory(dir : string)  {

        this.value = Join(dir, this.file, this.separator[0], this.splitter);
    }

    set extension(extension : string)  {

        this.value = ReplaceExtensionParameters(this.value, extension);
    }

    get file () : string {

        return GetFile(this.value, this.splitter);
    }

    set file(extension : string)  {

        this.value = SafeCast(ReplaceFileParameters(this.value, extension, this.splitter));
    }

    get name () : string {

        return NameParameters(this.value, this.splitter);
    }

    set name(name : string)  {

        this.value = SafeCast(ReplaceNameParameters(this.value, name, this.splitter));
    }
}
