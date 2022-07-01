import {RemovePrefixParameters} from '@alirya/string/remove-prefix';

export default function Trim(scheme : string) : string {

    return RemovePrefixParameters(scheme, '#');
}
