import Split from "../array/split";

export default function File(path : string, delimiter : string) : string {

    return Split(path, delimiter).pop() || '';
}
