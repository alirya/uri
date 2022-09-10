import Split, {SplitParameters} from '../array/split';
import NormalizeArrays from '../array/normalize';
import Join from './join';

export default function Normalize(
    path: string,
    delimiter : string = '/',
    delimiters : string = ':/\\',
) : string {

    const paths = SplitParameters(path, delimiters + delimiter, true);
    const normalized = NormalizeArrays(paths);
    return Join(normalized, delimiter, delimiters);

}