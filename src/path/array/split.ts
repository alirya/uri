import Escape from '@alirya/string/pattern/escape';
import Path from '../path';
import {NameArgumentPath} from '../file/string/name';

export function SplitParameters(
    string : string,
    delimiter : string = ':/\\',
    empty : boolean = true
) : string[] {

    if(string === '') {

        return [];
    }

    const escaped = Escape(delimiter);

    const paths = string.split(new RegExp(`[${escaped}]+`, 'g'));

    if(!empty) {

        return paths.filter(path=>!!path);
    }

    return paths;
}


export type SplitArgumentEmpty =  {
    empty : boolean
};

export type SplitArgumentToString = Path & SplitArgumentEmpty;

export type SplitArgumentPath = NameArgumentPath & SplitArgumentEmpty;

export type SplitArgument = SplitArgumentToString | SplitArgumentPath;

export function SplitParameter(
    argument : SplitArgumentPath
) : string[];

export function SplitParameter(
    argument : SplitArgumentToString
) : string[];

export function SplitParameter(
    {
        path,
        separator = ':/\\',
        empty = true
    } : SplitArgument & SplitArgumentToString & SplitArgumentPath
) : string[] {

    return SplitParameters(
        path || arguments[0].toString(),
        separator,
        empty
    );

}


namespace Split {
    export const Parameters = SplitParameters;
    export const Parameter = SplitParameter;
}
export default Split;
