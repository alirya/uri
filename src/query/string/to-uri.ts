import ToString from '@axiona/string/to-string.js';
import {PrefixParameters} from '@axiona/string/prefix.js';

export default function ToUri(query : ToString) : string {

    return PrefixParameters(query.toString(), '?');

}
