import Path from '../path.js';
import {TrimPrefixParameters} from '@alirya/string/trim-prefix.js';

export default function ToUriRootless(path : Path) : string {

    return TrimPrefixParameters(path.toString(), path.separator);
}
