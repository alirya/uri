import Escape from "@dikac/t-string/pattern/escape";

export default function ReplaceFile(
    path : string,
    file : string|undefined,
    delimiter : string = ':/\\'
) : string|undefined {

    const escaped = Escape(delimiter);

    if(file !== undefined) {

        return path.replace(new RegExp(`[^${escaped}]+$`), file);

    } else {

        return path.replace(new RegExp(`[${escaped}]+[^${escaped}]+$`), '');
    }

}
