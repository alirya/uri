import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import { CallbackReturnSimple as HostReturn, CallbackParameters } from '@alirya/validator/validatable/callback.js';
import HostBoolean from '../boolean/host.js';
import HostMessage from './string/host.js';
import ToString from '@alirya/string/to-string.js';
import AssertedToString from '@alirya/string/validatable/asserted-to-string.js';

export function HostParameters(
    string : string,
) : HostReturn<string, string, string> & ToString;
export function HostParameters<MessageType>(
    string : string,
    message: ValidatableParameters<string, MessageType>
) : HostReturn<string, string, MessageType> & ToString;
export function HostParameters<MessageType>(
    string : string,
    message : ValidatableParameters<string, string|MessageType>= HostMessage.Parameters
) {
    return AssertedToString(CallbackParameters<string, string>(string, HostBoolean, message));
}



export interface HostArgument<MessageType> {
    string : string;
    message ?: ValidatableParameter<string, MessageType>;
}

export function HostParameter(
    {
        string,
    } : HostArgument<string>
) : HostReturn<string, string, string> & ToString;

export function HostParameter<MessageType>(
    {
        string,
        message,
    } : HostArgument<MessageType>

) : HostReturn<string, string, MessageType> & ToString;

export function HostParameter<MessageType>(
    {
        string,
        message = HostMessage.Parameter,
    } : HostArgument<string|MessageType>

) : HostReturn<string, string, string|MessageType> & ToString  {

    return HostParameters(string, (value, valid)=>message({value, valid}));
}

namespace Host {
    export const Parameters = HostParameters;
    export const Parameter = HostParameter;
    export type Argument<MessageType>  = HostArgument<MessageType>;
}
export default Host;
