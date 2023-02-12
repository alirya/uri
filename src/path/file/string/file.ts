import FileArgumentToString from '../../path.js';
import {NameArgumentPath as FileArgumentPath} from './name.js';
import {SplitParameters} from '../../array/split.js';

export function FileParameters(
    path : string,
    delimiter  = ':/\\'
) : string {

    return SplitParameters(path, delimiter).pop() || '';
}


export type FileArgument = FileArgumentToString | FileArgumentPath;
export {FileArgumentPath};

export function FileParameter(
    argument : FileArgumentPath
) : string;

export function FileParameter(
    argument : FileArgumentToString
) : string;

export function FileParameter(
    {
        path,
        separator = ':/\\'
    } : FileArgumentPath & FileArgumentToString
) : string {

    return FileParameters(
        path || arguments[0].toString(),
        separator
    );

}



namespace File {
    export const Parameters = FileParameters;
    export const Parameter = FileParameter;
    export type Argument =   FileArgument;
    export type ArgumentToString =   FileArgumentToString;
    export type ArgumentPath =   FileArgumentPath;
}
export default File;
