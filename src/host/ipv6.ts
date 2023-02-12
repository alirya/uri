import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import {CallbackReturnSimple as  Ipv6Return} from '@alirya/validator/validatable/callback.js';
import AssertValid from '@alirya/validator/validatable/assert/valid.js';
import Ipv6Message from './validatable/string/ipv6.js';
import Ipv6Validatable from './validatable/ipv6.js';


export function Ipv6Parameters(
    string : string,
) : Ipv6Return<string, string, string>;
export function Ipv6Parameters<MessageType>(
    string : string,
    message: ValidatableParameters<string, MessageType>
) : Ipv6Return<string, string, MessageType>;
export function Ipv6Parameters<MessageType>(
    string : string,
    message : ValidatableParameters<string, string|MessageType> = Ipv6Message.Parameters
) {
    const scheme = Ipv6Validatable.Parameters(string, message);

    AssertValid(scheme);

    return  scheme;
}


export interface Ipv6Argument<MessageType> {
    string : string;
    message ?: ValidatableParameter<string, MessageType>;
}

export function Ipv6Parameter(
    {
        string,
    } : Ipv6Argument<string>
) : Ipv6Return<string, string, string>;

export function Ipv6Parameter<MessageType>(
    {
        string,
        message,
    } : Ipv6Argument<MessageType>

) : Ipv6Return<string, string, MessageType>;

export function Ipv6Parameter<MessageType>(
    {
        string,
        message = Ipv6Message.Parameter,
    } : Ipv6Argument<string|MessageType>

) : Ipv6Return<string, string, string|MessageType> {

    return  Ipv6Parameters(string, (value, valid) => message({value, valid}));
}


namespace Ipv6 {
    export const Parameters = Ipv6Parameters;
    export const Parameter = Ipv6Parameter;
    export type Argument<MessageType> = Ipv6Argument<MessageType>;
}
export default Ipv6;
