import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';
import PortMessage from './validatable/string/port';
import {PortParameters, PortParametersType as EnsureReturn} from './validatable/port';
import Value from "@alirya/value/value";

export {EnsureReturn}

export function EnsureParameters(
    value : string|number,
) : EnsureReturn<string>;

export function EnsureParameters<MessageType>(
    value : string|number,
    message : ValidatableParameters<string|number, MessageType>
) : EnsureReturn<MessageType>;

export function EnsureParameters(
    value : string|number,
    message : ValidatableParameters<string|number, string> = PortMessage.Parameters
) : EnsureReturn<string> {

    return PortParameters(value, message);
}


export interface EnsureArgument<MessageType> extends Value<string> {

    message ?: ValidatableParameter<string|number, MessageType|string>
}


export function EnsureParameter(
    {
        value
    } : Omit<EnsureArgument<string>, 'message'>
) : EnsureReturn<string>;

export function EnsureParameter<MessageType>(
    {
        value,
        message,
    } : Required<EnsureArgument<MessageType>>
) : EnsureReturn<MessageType>;

export function EnsureParameter<MessageType>(
    {
        value,
        message = PortMessage.Parameter,
    } : Required<EnsureArgument<MessageType|string>>

) : EnsureReturn<MessageType|string> {

    return EnsureParameters(value, (value, valid) => message({value, valid}));
}



namespace Ensure {
    export const Parameters = EnsureParameters;
    export const Parameter = EnsureParameter;
    export type Return<MessageT> = EnsureReturn<MessageT>;
    export type Argument<MessageType> = EnsureArgument<MessageType>;
}
export default Ensure;
