import Dynamic from '@alirya/validator/dist/message/function/validatable-parameters';
import Callback, { CallbackFunctionType } from '@alirya/validator/dist/validatable/callback-function-parameters';
import Ipv4Boolean from '../boolean/ipv4';
import Ipv4Message from './string/ipv4';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';

export default function Host(
  string : string,
) : CallbackFunctionType<string, string, string>;
export default function Host<MessageType>(
  string : string,
  message: Dynamic<string, MessageType>
) : CallbackFunctionType<string, string, MessageType>;
export default function Host<MessageType>(
  string : string,
  message : Dynamic<string, string|MessageType>=  Ipv4Message
) {
    return Callback<string, string>(string, Ipv4Boolean, message);
}

