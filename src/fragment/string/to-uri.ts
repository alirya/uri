import ToString from '@alirya/string/to-string';
import {PrefixParameters} from '@alirya/string/prefix';

export default function ToUri(fragment : ToString) : string {

    return PrefixParameters(fragment.toString(), '#');
}
