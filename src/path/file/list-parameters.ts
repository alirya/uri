import {ListContainer as PathList, ListGetterHandler} from '../list-parameters';
import ExtensionParameters from './string/extension-parameters';
import ReplaceExtensionParameters from './string/replace-extension-parameters';
import GetFile from './string/file-parameters';
import SafeCast from '@alirya/string/safe-cast';
import ReplaceFileParameters from './string/replace-file-parameters';
import NameParameters from './string/name-parameters';
import ReplaceNameParameters from './string/replace-name-parameters';
import StandardParameters from './standard-parameters';
import RemoveSuffixCharacter from '@alirya/string/remove-suffix-parameters';
import File from './file';

export class ListContainer extends PathList implements File {

    constructor(
        segments : Iterable<string> = [],
        separator : string = '/',
        separators : string = '/\\:',
        empty : boolean = true,
        prefix: boolean = false,
        proxyHandler : ReturnType<typeof ListGetterHandler>
    ) {
        super(segments, separator, separators, empty, prefix, proxyHandler);
    }

    get extension () : string {

        let last = this[this.length - 1];

        if(last) {

            return ExtensionParameters(last);
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

        let standard = new StandardParameters(this.join(this.separator[0]), this.separator, this.separators, this.prefix);
        return RemoveSuffixCharacter(standard.directory, this.separator[0]);
    }


    set extension(extension : string)  {

        const index = this.length - 1;
        const last = this[index];

        if(last) {

            this[index] = ReplaceExtensionParameters(last, extension);
        }
    }

    get file () : string  {

        const last = this[this.length - 1];

        if(last) {

            return GetFile(last, this.splitter);
        }

        return '';
    }

    set file(extension : string)  {

        const index = this.length - 1;
        const last = this[index];

        if(last) {

            this[this.length - 1] = SafeCast(ReplaceFileParameters(last, extension, this.splitter));
        }
    }


    get name () : string {

        const last = this[this.length - 1];

        if(last) {

            return NameParameters(last, this.splitter);
        }

        return '';
    }

    set name(name : string)  {

        const index = this.length - 1;
        const last = this[index];

        if(last) {

            this[index] = SafeCast(ReplaceNameParameters(last, name, this.splitter));
        }
    }
}

export default function ListParameters(
    segments : Iterable<string> = [],
    separator : string = '/',
    separators : string = '/\\:',
    empty : boolean = true,
    prefix: boolean = false
) : Omit<ListContainer, 'split'> {

    const handler = ListGetterHandler();

    return new Proxy<ListContainer>(new ListContainer(segments, separator, separators, empty, prefix, handler), handler);
}