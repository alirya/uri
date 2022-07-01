import FileArgumentToString from "../../path";
import {NameArgumentPath as FileArgumentPath} from "./name";
import {SplitParameters} from '../../array/split';

export function FileParameters(
    path : string,
    delimiter : string = ':/\\'
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
    )

}



namespace File {
    export const Parameters = FileParameters;
    export const Parameter = FileParameter;
    export type Argument =   FileArgument;
    export type ArgumentToString =   FileArgumentToString;
    export type ArgumentPath =   FileArgumentPath;
}
export default File;
