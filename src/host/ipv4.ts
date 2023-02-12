import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import {CallbackReturnSimple as Ipv4Return} from '@alirya/validator/validatable/callback.js';
import Ipv4Validatable from './validatable/ipv4.js';
import AssertValid from '@alirya/validator/validatable/assert/valid.js';
import Ipv4Message from './validatable/string/ipv4.js';

export function Ipv4Parameters(
    string : string,
) : Ipv4Return<string, string, string>;
export function Ipv4Parameters<MessageType>(
    string : string,
    message: ValidatableParameters<string, MessageType>
) : Ipv4Return<string, string, MessageType>;
export function Ipv4Parameters<MessageType>(
    string : string,
    message : ValidatableParameters<string, string|MessageType> = Ipv4Message.Parameters
) {
    const scheme = Ipv4Validatable.Parameters(string, message);

    AssertValid(scheme);

    return  scheme;
}



export interface Ipv4Argument<MessageType> {
    string : string;
    message ?: ValidatableParameter<string, MessageType>;
}

export function Ipv4Parameter(
    {
        string,
    } : Ipv4Argument<string>
) : Ipv4Return<string, string, string>;

export function Ipv4Parameter<MessageType>(
    {
        string,
        message,
    } : Ipv4Argument<MessageType>

) : Ipv4Return<string, string, MessageType>;

export function Ipv4Parameter<MessageType>(
    {
        string,
        message = Ipv4Message.Parameter,
    } : Ipv4Argument<string|MessageType>

) : Ipv4Return<string, string, string|MessageType> {

    return Ipv4Parameters(string, (value, valid) => message({value, valid}));
}


namespace Ipv4 {
    export const Parameters = Ipv4Parameters;
    export const Parameter = Ipv4Parameter;
    export type Argument<MessageType>  = Ipv4Argument<MessageType>;
}
export default Ipv4;
