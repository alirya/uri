import {RemoveSuffixParameters} from '@axiona/string/remove-suffix.js';

export default function Trim(scheme : string) : string {

    return RemoveSuffixParameters(scheme, ':');
}
