import Path from '../path.js';
import {TrimPrefixParameters} from '@axiona/string/trim-prefix.js';

export default function ToUriRootless(path : Path) : string {

    return TrimPrefixParameters(path.toString(), path.separator);
}
