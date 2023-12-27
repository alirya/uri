import ToString from '@axiona/string/to-string.js';
import {SuffixParameters} from '@axiona/string/suffix.js';

export default function ToUri(scheme : ToString) : string {

    return SuffixParameters(scheme.toString(), ':');

}
