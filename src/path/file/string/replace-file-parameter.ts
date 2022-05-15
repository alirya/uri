import ReplaceFileParameters from "./replace-file-parameters";

export interface ReplaceNameParameterArgument {
    path : string,
    file : string|undefined,
    delimiter ?: string,
}

export default function ReplaceFileParameter(
    {
        path,
        file,
        delimiter = ':/\\',
    } : ReplaceNameParameterArgument
) : string|undefined {

    return ReplaceFileParameters(path, file, delimiter);
}
