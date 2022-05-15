import Value from "@alirya/value/value";
import Dynamic from '@alirya/validator/message/function/validatable-parameter';
import PortMessage from './string/port-parameter';
import PortParameters, {PortParametersType as PortParameterType} from "./port-parameters";

export interface PortParameterArgument<MessageType> extends Value<string> {

    message ?: Dynamic<string|number, MessageType>
}

export {PortParameterType};

export default function PortParameter(
    {
        value,
    } : Omit<PortParameterArgument<string>, 'message'>
) : PortParameterType<string>;

export default function PortParameter<MessageT>(
    {
        value,
        message,
    } : Required<PortParameterArgument<MessageT>>
) : PortParameterType<MessageT>;

export default function PortParameter<MessageT>(
    {
        value,
        message = PortMessage,
    } : Required<PortParameterArgument<MessageT|string>>
)  : PortParameterType<string|MessageT> {

    return PortParameters(value, (value, valid) => message({value, valid}));
}
