import Path from '../path';
import ToUriRootless from './to-uri-rootless';

export default function ToUri(path : Path) : string {

    return path.delimiter + ToUriRootless(path);
}
