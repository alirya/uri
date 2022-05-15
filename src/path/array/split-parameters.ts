import Escape from '@alirya/string/pattern/escape';

export default function SplitParameters(
    string : string,
    delimiter : string = ':/\\',
    empty : boolean = true
) : string[] {

    if(string === '') {

        return [];
    }

    const escaped = Escape(delimiter);

    const paths = string.split(new RegExp(`[${escaped}]+`, 'g'));

    if(!empty) {

        return paths.filter(path=>!!path)
    }

    return paths;
}
