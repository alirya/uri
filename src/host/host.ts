import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import { CallbackFunctionReturn as HostReturn} from '@alirya/validator/validatable/callback-function-parameters';
import HostValidatable from './validatable/host';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import HostMessage from './validatable/string/host';

export default function Host(
    string : string,
) : HostReturn<string, string, string>;
export default function Host<MessageType>(
    string : string,
    message: Dynamic<string, MessageType>
) : HostReturn<string, string, MessageType>;
export default function Host<MessageType>(
    string : string,
    message : Dynamic<string, string|MessageType>= HostMessage
) {
    let scheme = HostValidatable(string, message);

    AssertValid(scheme);

    return  scheme;
}


