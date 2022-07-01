import Escape from '@alirya/string/pattern/escape';
import ExtensionArgumentToString from '../../path';
import {NameArgumentPath as ExtensionArgumentPath} from './name';


export function ExtensionParameters(
    path : string,
    delimiter : string = ':/\\'
) : string {

    let escaped = Escape(delimiter);

    let match = path.match(new RegExp(`\\.[^${escaped}.]*$`));

    if(match) {

        return match[0].slice(1);
    }

    return '';

}

export type ExtensionArgument = ExtensionArgumentToString | ExtensionArgumentPath;

export function ExtensionParameter(
    argument : ExtensionArgumentPath
) : string;

export function ExtensionParameter(
    argument : ExtensionArgumentToString
) : string;

export function ExtensionParameter(
    {
        path,
        separator = ':/\\'
    } : ExtensionArgumentPath & ExtensionArgumentToString
) : string {

    return ExtensionParameters(
        path || arguments[0].toString(),
        separator
    );

}




namespace Extension {
    export const Parameters = ExtensionParameters;
    export const Parameter = ExtensionParameter;
    export type Argument = ExtensionArgument;
    export type ArgumentToString = ExtensionArgumentToString;
    export type ArgumentPath = ExtensionArgumentPath;
}
export default Extension;
