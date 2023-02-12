import {RemovePrefixParameters} from '@alirya/string/remove-prefix.js';


export default function Trim(scheme : string) : string {

    return RemovePrefixParameters(scheme, '?');
}
