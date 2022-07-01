import {RemoveSuffixParameters} from '@alirya/string/remove-suffix';

export default function Trim(scheme : string) : string {

    return RemoveSuffixParameters(scheme, ':');
}
