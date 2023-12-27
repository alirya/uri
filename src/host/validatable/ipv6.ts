import {ValidatableParameters, ValidatableParameter} from '@axiona/validator/message/function/validatable.js';
import { CallbackReturnSimple as Ipv6Return, CallbackParameters } from '@axiona/validator/validatable/callback.js';
import Ipv6Boolean from '../boolean/ipv6.js';
import Ipv6Message from './string/ipv6.js';
import ToString from '@axiona/string/to-string.js';
import AssertedToString from '@axiona/string/validatable/asserted-to-string.js';

export function Ipv6Parameters(
  string : string,
) : Ipv6Return<string, string, string> & ToString;

export function Ipv6Parameters<MessageType>(
  string : string,
  message: ValidatableParameters<string, MessageType>
) : Ipv6Return<string, string, MessageType> & ToString;

export function Ipv6Parameters<MessageType>(
  string : string,
  message : ValidatableParameters<string, string|MessageType> = Ipv6Message.Parameters
) : Ipv6Return<string, string, string|MessageType> & ToString {

    return AssertedToString(CallbackParameters<string, string>(string, Ipv6Boolean, message)) as Ipv6Return<string, string, string|MessageType> & ToString;
}



export interface Ipv6Argument<MessageType> {
    string : string;
    message ?: ValidatableParameter<string, MessageType>;
}

export function Ipv6Parameter(
    {
        string,
    } : Ipv6Argument<string>
) : Ipv6Return<string, string, string> & ToString;

export function Ipv6Parameter<MessageType>(
    {
        string,
        message,
    } : Ipv6Argument<MessageType>

) : Ipv6Return<string, string, MessageType> & ToString;

export function Ipv6Parameter<MessageType>(
    {
        string,
        message = Ipv6Message.Parameter,
    } : Ipv6Argument<string|MessageType>

) : Ipv6Return<string, string, string|MessageType> & ToString  {

    return Ipv6Parameters(string, (value, valid)=>message({value, valid}));
}



namespace Ipv6 {
    export const Parameters = Ipv6Parameters;
    export const Parameter = Ipv6Parameter;
    export type Argument<MessageType> = Ipv6Argument<MessageType>;
}
export default Ipv6;
