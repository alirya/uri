import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';
import { CallbackReturnSimple as HostReturn} from '@alirya/validator/validatable/callback';
import HostValidatable from './validatable/host';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import HostMessage from './validatable/string/host';

export function HostParameters(
    string : string,
) : HostReturn<string, string, string>;
export function HostParameters<MessageType>(
    string : string,
    message: ValidatableParameters<string, MessageType>
) : HostReturn<string, string, MessageType>;
export function HostParameters<MessageType>(
    string : string,
    message : ValidatableParameters<string, string|MessageType>= HostMessage.Parameters
) {
    let scheme = HostValidatable.Parameters(string, message);

    AssertValid(scheme);

    return  scheme;
}


export interface HostArgument<MessageType> {
    string : string,
    message ?: ValidatableParameter<string, MessageType>
}

export function HostParameter(
    {
        string,
    } : HostArgument<string>
) : HostReturn<string, string, string>;

export function HostParameter<MessageType>(
    {
        string,
        message,
    } : HostArgument<MessageType>

) : HostReturn<string, string, MessageType>;

export function HostParameter<MessageType>(
    {
        string,
        message = HostMessage.Parameter,
    } : HostArgument<string|MessageType>

) : HostReturn<string, string, string|MessageType> {

    return  HostParameters(string, (value, valid) => message({value, valid}));
}


namespace Host {
    export const Parameters = HostParameters;
    export const Parameter = HostParameter;
    export type Argument<MessageType> = HostArgument<MessageType>;
}
export default Host;
