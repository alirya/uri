import ReplaceExtensionParameters from './replace-extension-parameters';
import SplitParameters from '../../array/split-parameters';

export default function NameParameters(
    path : string,
    delimiter : string = ':/\\'
) : string {

    let file = SplitParameters(path, delimiter).pop();

    if(file) {

        return ReplaceExtensionParameters(file, '');
    }

    return '';

}
