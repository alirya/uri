import ReplaceExtension from './replace-extension';
import Split from '../array/split';

export default function Name(path : string, delimiter : string) : string {

    let file = Split(path, delimiter).pop();

    if(file) {

        return ReplaceExtension(file, '');
    }

    return '';

}
