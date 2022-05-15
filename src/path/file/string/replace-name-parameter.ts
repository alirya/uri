import ReplaceNameParameters from "./replace-name-parameters";

export interface ReplaceNameParameterArgument {
    path : string,
    name : string|undefined,
    delimiter ?: string,
}

export default function ReplaceNameParameter(
    {
        path,
        name,
        delimiter = ':/\\',
    } : ReplaceNameParameterArgument
) : string|undefined {

    return ReplaceNameParameters(path, name, delimiter);

}
