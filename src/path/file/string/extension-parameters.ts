import Escape from '@alirya/string/pattern/escape';

export default function ExtensionParameters(
    path : string,
    delimiter : string = ':/\\'
) : string {

    let escaped = Escape(delimiter);

    let match = path.match(new RegExp(`\\.[^${escaped}.]*$`));

    if(match) {

        return match[0].slice(1);
    }

    return '';

}
