import File from './file';
import PathStandard from '../standard';
import {ExtensionParameters} from './string/extension';
import {ReplaceExtensionParameters} from './string/replace-extension';
import {NameParameters} from './string/name';
import {FileParameters} from './string/file';
import {ReplaceNameParameters} from './string/replace-name';
import {ReplaceFileParameters} from './string/replace-file';
import SafeCast from '@alirya/string/safe-cast';
import Join from '../string/join';
import {RemoveSuffixParameters} from '@alirya/string/remove-suffix';
import {StandardArgument} from '../standard';

export class StandardParameters extends PathStandard.Parameters implements File {

    get extension () : string {

        return ExtensionParameters(this.value);
    }

    get directory() : string {

        return RemoveSuffixParameters(this.toString().slice(0, this.file.length * -1), this.separator[0]);
    }

    set directory(dir : string)  {

        this.value = Join([dir, this.file], this.separator, this.separators);
    }

    set extension(extension : string)  {

        this.value = ReplaceExtensionParameters(this.value, extension);
    }

    get file () : string {

        return FileParameters(this.value, this.separators);
    }

    set file(file : string)  {

        this.value = SafeCast(ReplaceFileParameters(this.value, file, this.separators));
    }

    get name () : string {

        return NameParameters(this.value, this.separators);
    }

    set name(name : string)  {

        this.value = SafeCast(ReplaceNameParameters(this.value, name, this.separators));
    }
}




export class StandardParameter extends StandardParameters {

    constructor({
        value,
        separator,
        separators,
        prefix
    } : StandardArgument) {

        super(value, separator, separators, prefix);
    }
}


namespace Standard {
    export const Parameters = StandardParameters;
    export const Parameter = StandardParameter;
    export type Argument = StandardArgument;
}
export default Standard;
