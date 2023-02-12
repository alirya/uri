import ToString from '@alirya/string/to-string.js';
import {SuffixParameters} from '@alirya/string/suffix.js';

export default function ToUri(scheme : ToString) : string {

    return SuffixParameters(scheme.toString(), ':');

}
