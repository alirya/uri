import {ValidatableParameters, ValidatableParameter} from '@axiona/validator/message/function/validatable.js';
import PortMessage from './validatable/string/port.js';
import {PortParameters, PortParametersType as EnsureReturn} from './validatable/port.js';
import Value from '@axiona/value/value.js';

export {EnsureReturn};

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

    message ?: ValidatableParameter<string|number, MessageType|string>;
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
