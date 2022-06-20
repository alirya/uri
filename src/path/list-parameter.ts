import {ListContainer, ListParametersType as ListParameterType} from "./list-parameters";
import ListParameters from "./list-parameters";

export {ListParameterType}

export interface ListParameterArgument {
    segments ?: Iterable<string>,
    separator ?: string,
    separators ?: string,
    empty ?: boolean,
    prefix ?: boolean,
}

export default function ListParameter(
    {
        segments  = [],
        separator = '/',
        separators = '/\\:',
        empty = true,
        prefix = false,
    } : ListParameterArgument
) : ListParameterType {

    return ListParameters(segments, separator, separators, empty, prefix);
}