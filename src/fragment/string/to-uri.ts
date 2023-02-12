import ToString from '@alirya/string/to-string.js';
import {PrefixParameters} from '@alirya/string/prefix.js';

export default function ToUri(fragment : ToString) : string {

    return PrefixParameters(fragment.toString(), '#');
}
