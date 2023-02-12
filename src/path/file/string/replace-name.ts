import {ExtensionParameters} from './extension.js';
import {SplitParameters} from '../../array/split.js';

export function ReplaceNameParameters(
    path : string,
    name : string|undefined,
    delimiter  = ':/\\'
) : string|undefined {

    const parts = SplitParameters(path, delimiter);

    const file = parts.pop();

    if(file && name) {

        const extension = ExtensionParameters(file);

        if(extension === '') {

            parts.push(name);

        } else {

            parts.push(name  + '.' +  extension);
        }


    }

    return parts.join(delimiter);

}


export interface ReplaceNameArgument {
    path : string;
    name : string|undefined;
    delimiter ?: string;
}

export function ReplaceNameParameter(
    {
        path,
        name,
        delimiter = ':/\\',
    } : ReplaceNameArgument
) : string|undefined {

    return ReplaceNameParameters(path, name, delimiter);

}


namespace ReplaceName {
    export const Parameters = ReplaceNameParameters;
    export const Parameter = ReplaceNameParameter;
    export type Argument = ReplaceNameArgument;
}
export default ReplaceName;
