import ToString from '@axiona/string/to-string.js';
import {PrefixParameters} from '@axiona/string/prefix.js';

export default function ToUri(fragment : ToString) : string {

    return PrefixParameters(fragment.toString(), '#');
}
