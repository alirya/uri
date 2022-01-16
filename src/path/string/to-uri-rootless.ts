import Path from '../path';
import TrimPrefix from '@alirya/string/trim-prefix';

export default function ToUriRootless(path : Path) : string {

    return TrimPrefix(path.toString(), path.delimiter);
}
