import ToString from '@alirya/string/to-string';
import PrefixCharacter from '@alirya/string/prefix-parameters';

export default function ToUri(fragment : ToString) : string {

    return PrefixCharacter(fragment.toString(), '#');
}
