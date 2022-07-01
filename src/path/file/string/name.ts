import {ReplaceExtensionParameters} from './replace-extension';
import {SplitParameters} from '../../array/split';
import NameArgumentToString from "../../path";

export function NameParameters(
    path : string,
    delimiter : string = ':/\\'
) : string {

    let file = SplitParameters(path, delimiter).pop();

    if(file) {

        return ReplaceExtensionParameters(file, '');
    }

    return '';
}

export type NameArgumentPath =  {
    path : string,
    separator ?: string,
}

export {NameArgumentToString};

export type NameArgument = NameArgumentToString | NameArgumentPath;

export function NameParameter(
    argument : NameArgument
) : string;

export function NameParameter(
    argument : NameArgumentToString
) : string;

export function NameParameter(
    {
        path,
        separator = ':/\\'
    } : NameArgumentPath & NameArgumentToString
) : string {

    return NameParameters(
        path || arguments[0].toString(),
        separator
    )

}




namespace Name {
    export const Parameters = NameParameters;
    export const Parameter = NameParameter;
    export type Argument = NameArgument;
    export type ArgumentToString = NameArgumentToString;
    export type ArgumentPath = NameArgumentPath;
}
export default Name;
