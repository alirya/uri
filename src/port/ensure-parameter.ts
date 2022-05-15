import Value from "@alirya/value/value";
import Dynamic from '@alirya/validator/message/function/validatable-parameter';
import {PortParametersType as EnsureParameterReturn} from './validatable/port-parameters';
import PortMessage from './validatable/string/port-parameter';
import EnsureParameters from "./ensure-parameters";

export interface EnsureParameterArgument<MessageType> extends Value<string> {

    message ?: Dynamic<string|number, MessageType|string>
}

export {EnsureParameterReturn};

export default function EnsureParameter(
    {
        value
    } : Omit<EnsureParameterArgument<string>, 'message'>
) : EnsureParameterReturn<string>;

export default function EnsureParameter<MessageType>(
    {
        value,
        message,
    } : Required<EnsureParameterArgument<MessageType>>
) : EnsureParameterReturn<MessageType>;

export default function EnsureParameter<MessageType>(
    {
        value,
        message = PortMessage,
    } : Required<EnsureParameterArgument<MessageType|string>>

) : EnsureParameterReturn<MessageType|string> {

    return EnsureParameters(value, (value, valid) => message({value, valid}));
}

