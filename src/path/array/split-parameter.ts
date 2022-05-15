import SplitParameters from "./split-parameters";
import Path from "../path";
import {NameParameterArgumentPath} from "../file/string/name-parameter";

export type SplitParameterArgumentEmpty =  {
    empty : boolean
}

export type SplitParameterArgumentToString = Path & SplitParameterArgumentEmpty

export type SplitParameterArgumentPath = NameParameterArgumentPath & SplitParameterArgumentEmpty;

export type SplitParameterArgument = SplitParameterArgumentToString | SplitParameterArgumentPath;

export default function SplitParameter(
    argument : SplitParameterArgumentPath
) : string[];

export default function SplitParameter(
    argument : SplitParameterArgumentToString
) : string[];

export default function SplitParameter(
    {
        path,
        separator = ':/\\',
        empty = true
    } : SplitParameterArgument & SplitParameterArgumentToString & SplitParameterArgumentPath
) : string[] {

    return SplitParameters(
        path || arguments[0].toString(),
        separator,
        empty
    )

}
