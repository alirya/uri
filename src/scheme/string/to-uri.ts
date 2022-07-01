import ToString from '@alirya/string/to-string';
import {SuffixParameters} from '@alirya/string/suffix';

export default function ToUri(scheme : ToString) : string {

    return SuffixParameters(scheme.toString(), ':');

}
