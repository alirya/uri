import SplitParameters from '../../array/split-parameters';

export default function FileParameters(
    path : string,
    delimiter : string = ':/\\'
) : string {

    return SplitParameters(path, delimiter).pop() || '';
}
