import {ValidatableParameters, ValidatableParameter} from '@axiona/validator/message/function/validatable.js';
import { CallbackReturnSimple as Ipv4Return, CallbackParameters } from '@axiona/validator/validatable/callback.js';
import Ipv4Boolean from '../boolean/ipv4.js';
import Ipv4Message from './string/ipv4.js';
import ToString from '@axiona/string/to-string.js';
import AssertedToString from '@axiona/string/validatable/asserted-to-string.js';

export function Ipv4Parameters(
  string : string,
) : Ipv4Return<string, string, string> & ToString;
export function Ipv4Parameters<MessageType>(
  string : string,
  message: ValidatableParameters<string, MessageType>
) : Ipv4Return<string, string, MessageType> & ToString;
export function Ipv4Parameters<MessageType>(
  string : string,
  message : ValidatableParameters<string, string|MessageType>=  Ipv4Message.Parameters
) {
    return AssertedToString(CallbackParameters<string, string>(string, Ipv4Boolean, message));
}



export interface Ipv4Argument<MessageType> {
    string : string;
    message ?: ValidatableParameter<string, MessageType>;
}

export function Ipv4Parameter(
    {
        string,
    } : Ipv4Argument<string>
) : Ipv4Return<string, string, string> & ToString;

export function Ipv4Parameter<MessageType>(
    {
        string,
        message,
    } : Ipv4Argument<MessageType>

) : Ipv4Return<string, string, MessageType> & ToString;

export function Ipv4Parameter<MessageType>(
    {
        string,
        message = Ipv4Message.Parameter,
    } : Ipv4Argument<string|MessageType>

) : Ipv4Return<string, string, string|MessageType> & ToString  {

    return Ipv4Parameters(string, (value, valid) => message({value, valid}));
}



namespace Ipv4 {
    export const Parameters = Ipv4Parameters;
    export const Parameter = Ipv4Parameter;
    export type Argument<MessageType> = Ipv4Argument<MessageType>;
}
export default Ipv4;
