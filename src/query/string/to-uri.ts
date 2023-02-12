import ToString from '@alirya/string/to-string.js';
import {PrefixParameters} from '@alirya/string/prefix.js';

export default function ToUri(query : ToString) : string {

    return PrefixParameters(query.toString(), '?');

}
