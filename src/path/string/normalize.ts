import Split, {SplitParameter, SplitParameters} from '../array/split';
import NormalizeArrays from '../array/normalize';
import Join from './join';

export function NormalizeParameters(
    path: string,
    delimiter : string = '/',
    delimiters : string = ':/\\',
) : string {

    const paths = SplitParameters(path, delimiters + delimiter, true);
    const normalized = NormalizeArrays(paths);
    return Join(normalized, delimiter, delimiters);
}

export type NormalizeArgument = {
    path: string,
    delimiter ?: string,
    delimiters ?: string,
};

export function NormalizeParameter({
    path,
    delimiter,
    delimiters,
} : NormalizeArgument) {

    return NormalizeParameters(path, delimiter, delimiters);
}

namespace Normalize {
    export const Parameters = NormalizeParameters;
    export const Parameter = NormalizeParameter;
}
export default Normalize;