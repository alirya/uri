import ReplaceExtensionParameters from "./replace-extension-parameters";

export interface ReplaceNameParameterArgument {
    path : string,
    extension : string,
    delimiter ?: string,
}

export default function ReplaceExtensionParameter(
  {
        path,
        extension,
        delimiter = ':/\\'
    } : ReplaceNameParameterArgument
) : string {

    return ReplaceExtensionParameters(path, extension, delimiter);
}


