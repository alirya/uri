import ToString from '@alirya/string/to-string';
import {PrefixParameters} from '@alirya/string/prefix';

export default function ToUri(query : ToString) : string {

    return PrefixParameters(query.toString(), '?');

}
