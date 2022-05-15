import Path from "../../path";
import {NameParameterArgumentPath} from "./name-parameter";
import FileParameters from "./file-parameters";

export type FileParameterArgument = Path | NameParameterArgumentPath

export default function FileParameter(
    argument : FileParameterArgument
) : string;

export default function FileParameter(
    argument : Path
) : string;

export default function FileParameter(
    {
        path,
        separator = ':/\\'
    } : NameParameterArgumentPath & Path
) : string {

    return FileParameters(
        path || arguments[0].toString(),
        separator
    )

}


