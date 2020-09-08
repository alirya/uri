import Extension from "./extension";
import Split from "../array/split";

export default function ReplaceName(
    path : string,
    name : string|undefined,
    delimiter : string = ':/\\'
) : string|undefined {

    let parts = Split(path, delimiter);

    let file = parts.pop();

    if(file && name) {

        parts.push(name  + '.' +  Extension(file))
    }

    return parts.join(delimiter);

}
