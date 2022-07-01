import ToString from '@alirya/string/to-string';
import {PrefixParameters} from '@alirya/string/prefix';

export default function ToUri(port : ToString) : string {

    return PrefixParameters(port.toString(), ':');

}
