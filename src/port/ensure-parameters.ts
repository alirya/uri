import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import PortMessage from './validatable/string/port-parameters';
import PortParameters, {PortParametersType as PortParameterType} from './validatable/port-parameters';

export {PortParameterType}

export default function EnsureParameters(
    value : string|number,
) : PortParameterType<string>;

export default function EnsureParameters<MessageType>(
    value : string|number,
    message : Dynamic<string|number, MessageType>
) : PortParameterType<MessageType>;

export default function EnsureParameters(
    value : string|number,
    message : Dynamic<string|number, string> = PortMessage
) : PortParameterType<string> {

    return PortParameters(value, message);
}
