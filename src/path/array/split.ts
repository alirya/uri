import Escape from "@alirya/string/pattern/escape";

export default function Split(
    string : string,
    delimiter : string
) : string[] {

    const escaped = Escape(delimiter);

    return  string.split(new RegExp(`[${escaped}]+`, 'g'));
}
