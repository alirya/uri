import Escape from '@alirya/string/pattern/escape';

export function ReplaceFileParameters(
    path : string,
    file : string|undefined,
    delimiter : string = ':/\\'
) : string|undefined {

    const escaped = Escape(delimiter);

    if(file !== undefined) {

        return path.replace(new RegExp(`[^${escaped}]+$`), file);

    } else {

        return path.replace(new RegExp(`[${escaped}]+[^${escaped}]+$`), '');
    }

}


export interface ReplaceNameArgument {
    path : string;
    file : string|undefined;
    delimiter ?: string;
}

export function ReplaceFileParameter(
    {
        path,
        file,
        delimiter = ':/\\',
    } : ReplaceNameArgument
) : string|undefined {

    return ReplaceFileParameters(path, file, delimiter);
}


namespace ReplaceFile {
    export const Parameters = ReplaceFileParameters;
    export const Parameter = ReplaceFileParameter;
    export type Argument = ReplaceNameArgument;
}
export default ReplaceFile;
