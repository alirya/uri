import Path from '../path';
import {TrimPrefixParameters} from '@alirya/string/trim-prefix';

export default function ToUriRootless(path : Path) : string {

    return TrimPrefixParameters(path.toString(), path.separator);
}
