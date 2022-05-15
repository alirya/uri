import Path from "../../path";
import {NameParameterArgumentPath} from "./name-parameter";
import ExtensionParameters from "./extension-parameters";

export type ExtensionParameterArgument = Path | NameParameterArgumentPath

export default function ExtensionParameter(
    argument : ExtensionParameterArgument
) : string;

export default function ExtensionParameter(
    argument : Path
) : string;

export default function ExtensionParameter(
    {
        path,
        separator = ':/\\'
    } : NameParameterArgumentPath & Path
) : string {

    return ExtensionParameters(
        path || arguments[0].toString(),
        separator
    )

}


