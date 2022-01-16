import ToString from '@alirya/string/to-string';
import PrefixCharacter from '@alirya/string/prefix-character';

export default function ToUri(query : ToString) : string {

    return PrefixCharacter(query.toString(), '?');

}
