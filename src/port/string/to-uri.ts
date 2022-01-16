import ToString from "@alirya/string/to-string";
import PrefixCharacter from "@alirya/string/prefix-character";

export default function ToUri(port : ToString) : string {

    return PrefixCharacter(port.toString(), ':');

}
