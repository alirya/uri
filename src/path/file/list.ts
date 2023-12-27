import {ListContainer as PathList, ListGetterHandler, ListType as PathListType} from '../list.js';
import {ExtensionParameters} from './string/extension.js';
import {ReplaceExtensionParameters} from './string/replace-extension.js';
import {FileParameters} from './string/file.js';
import SafeCast from '@axiona/string/safe-cast.js';
import {ReplaceFileParameters} from './string/replace-file.js';
import {NameParameters} from './string/name.js';
import {ReplaceNameParameters} from './string/replace-name.js';
import {StandardParameters} from './standard.js';
import {RemoveSuffixParameters} from '@axiona/string/remove-suffix.js';
import File from './file.js';

export interface ListType extends PathListType {

    extension : string;
    directory : string;
    file : string;
    name : string;
}

export class ListContainer extends PathList implements File {

    constructor(
        segments : Iterable<string>|string = [],
        separator  = '/',
        separators  = '/\\:',
        empty  = true,
        prefix = false,
        proxyHandler : ReturnType<typeof ListGetterHandler>
    ) {
        super(segments, separator, separators, empty, prefix, proxyHandler);
    }

    get extension () : string {

        const last = this[this.length - 1];

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

        const standard = new StandardParameters(this.join(this.separator[0]), this.separator, this.separators, this.prefix);
        return RemoveSuffixParameters(standard.directory, this.separator[0]);
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

            return FileParameters(last, this.splitter);
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

export function ListParameters(
    segments : Iterable<string> = [],
    separator  = '/',
    separators  = '/\\:',
    empty  = true,
    prefix = false
) : ListType {

    const handler = ListGetterHandler();

    return new Proxy<ListContainer>(new ListContainer(segments, separator, separators, empty, prefix, handler), handler);
}

export interface ListArgument {
    segments ?: Iterable<string>;
    separator ?: string;
    separators ?: string;
    empty ?: boolean;
    prefix ?: boolean;
}

export function ListParameter(
    {
        segments  = [],
        separator = '/',
        separators = '/\\:',
        empty = true,
        prefix = false,
    } : ListArgument
) : ListType {

    return ListParameters(segments, separator, separators, empty, prefix);
}

namespace List {
    export const Parameters = ListParameters;
    export const Parameter = ListParameter;
    export const Container = ListContainer;
    export type Type = ListType;
    export type Argument = ListArgument;
}
export default List;
