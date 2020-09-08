import Path from "../path";
import TrimPrefix from "@dikac/t-string/trim-prefix";

export default function ToUriRootless(path : Path) : string {

    return TrimPrefix(path.toString(), path.delimiter);
}
