import ToString from "@dikac/t-string/to-string";
import SuffixCharacter from "@dikac/t-string/suffix-character";

export default function ToUri(scheme : ToString) : string {

    return SuffixCharacter(scheme.toString(), ':');

}
