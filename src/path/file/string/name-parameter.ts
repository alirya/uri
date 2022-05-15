import Path from "../../path";
import NameParameters from "./name-parameters";

export type NameParameterArgumentPath =  {
    path : string,
    separator ?: string,
}
export type NameParameterArgument = Path | NameParameterArgumentPath

export default function NameParameter(
    argument : NameParameterArgument
) : string;

export default function NameParameter(
    argument : Path
) : string;

export default function NameParameter(
    {
        path,
        separator = ':/\\'
    } : NameParameterArgumentPath & Path
) : string {

    return NameParameters(
        path || arguments[0].toString(),
        separator
    )

}


