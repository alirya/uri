import {ListContainer, ListParametersType as ListParameterType} from "./list-parameters";
import ListParameters from "./list-parameters";

export interface ListParameter {
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
    } : ListParameter
) : ListParameterType {

    return ListParameters(segments, separator, separators, empty, prefix);
}