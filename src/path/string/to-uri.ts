import Path from '../path.js';
import ToUriRootless from './to-uri-rootless.js';

export default function ToUri(path : Path) : string {

    return path.separator + ToUriRootless(path);
}
