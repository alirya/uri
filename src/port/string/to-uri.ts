import ToString from '@alirya/string/to-string.js';
import {PrefixParameters} from '@alirya/string/prefix.js';

export default function ToUri(port : ToString) : string {

    return PrefixParameters(port.toString(), ':');

}
