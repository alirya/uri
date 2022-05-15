import ExtensionParameters from './extension-parameters';
import SplitParameters from '../../array/split-parameters';

export default function ReplaceNameParameters(
    path : string,
    name : string|undefined,
    delimiter : string = ':/\\'
) : string|undefined {

    let parts = SplitParameters(path, delimiter);

    let file = parts.pop();

    if(file && name) {

        let extension = ExtensionParameters(file);

        if(extension === '') {

            parts.push(name);

        } else {

            parts.push(name  + '.' +  extension);
        }


    }

    return parts.join(delimiter);

}
