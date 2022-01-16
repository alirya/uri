import ToString from '@alirya/string/to-string';
import SuffixCharacter from '@alirya/string/suffix-character';

export default function ToUri(scheme : ToString) : string {

    return SuffixCharacter(scheme.toString(), ':');

}
