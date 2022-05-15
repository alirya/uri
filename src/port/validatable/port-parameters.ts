import Greater from '@alirya/number/validatable/greater-parameters';
import GreaterMessage from '@alirya/number/assert/string/greater-parameters';
import Lower from '@alirya/number/validatable/lower-parameters';
import LowerMessage from '@alirya/number/assert/string/lower-parameters';
import String from '@alirya/string/boolean/string';
import Numeric from '@alirya/string/validatable/numeric-parameters';
import NumericMessage from '@alirya/string/assert/string/numeric-parameters';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';

export interface PortParametersType<MessageT>extends Readonly<Value<string|number> & Message<MessageT> & Validatable> {

}

export default function PortParameters(
    query : number|string,
) : PortParametersType<string>;

export default function PortParameters<MessageT>(
    query : number|string,
    message: Dynamic<string, MessageT>
) : PortParametersType<string|MessageT>;

export default function PortParameters<MessageT>(
    port : number|string,
    message ?: Dynamic<string|number, string|MessageT>
) : PortParametersType<string|MessageT> {

    if(String(port)) {

        let digit = Numeric(port, message ? message : NumericMessage);

        if(digit.valid) {

            port = parseInt(port);

        } else {

            return digit;
        }
    }

    let greater = new Greater(port, 0, true, message ? message : GreaterMessage);

    if(!greater.valid) {

        return greater;
    }

    return new Lower(port, 65535, true, message ? message : LowerMessage);
}
