import ToString from '@axiona/string/to-string.js';
import {PrefixParameters} from '@axiona/string/prefix.js';

export default function ToUri(port : ToString) : string {

    return PrefixParameters(port.toString(), ':');

}
