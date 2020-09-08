import ToString from "@dikac/t-string/to-string";
import PrefixCharacter from "@dikac/t-string/prefix-character";

export default function ToUri(query : ToString) : string {

    return PrefixCharacter(query.toString(), '?');

}
