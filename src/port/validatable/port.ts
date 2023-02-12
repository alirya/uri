import {GreaterParameters} from '@alirya/number/validatable/greater.js';
import GreaterMessage from '@alirya/number/assert/string/greater.js';
import {LowerParameters} from '@alirya/number/validatable/lower.js';
import LowerMessage from '@alirya/number/assert/string/lower.js';
import String from '@alirya/string/boolean/string.js';
import {NumericParameters} from '@alirya/string/validatable/numeric.js';
import NumericMessage from '@alirya/string/assert/string/numeric.js';
import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';
import Message from '@alirya/message/message.js';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import PortMessage from './string/port.js';

export type PortParametersType<MessageT> = Readonly<Value<string|number> & Message<MessageT> & Validatable>

export function PortParameters(
    query : number|string,
) : PortParametersType<string>;

export function PortParameters<MessageT>(
    query : number|string,
    message: ValidatableParameters<string, MessageT>
) : PortParametersType<string|MessageT>;

export function PortParameters<MessageT>(
    port : number|string,
    message ?: ValidatableParameters<string|number, string|MessageT>
) : PortParametersType<string|MessageT> {

    if(String(port)) {

        const digit = NumericParameters(port, message ? message : NumericMessage.Parameters);

        if(digit.valid) {

            port = parseInt(port);

        } else {

            return digit;
        }
    }

    const greater = new GreaterParameters<number, string|MessageT>(port, 0, true, message ? message : GreaterMessage.Parameters);

    if(!greater.valid) {

        return greater;
    }

    return new LowerParameters(port, 65535, true, message ? message : LowerMessage.Parameters);
}


export interface PortArgument<MessageType> extends Value<string> {

    message ?: ValidatableParameter<string|number, MessageType>;
}

export function PortParameter(
    {
        value,
    } : Omit<PortArgument<string>, 'message'>
) : PortParametersType<string>;

export function PortParameter<MessageT>(
    {
        value,
        message,
    } : Required<PortArgument<MessageT>>
) : PortParametersType<MessageT>;

export function PortParameter<MessageT>(
    {
        value,
        message = PortMessage.Parameter,
    } : Required<PortArgument<MessageT|string>>
)  : PortParametersType<string|MessageT> {

    return PortParameters(value, (value, valid) => message({value, valid}));
}


namespace Port {
    export const Parameters = PortParameters;
    export const Parameter = PortParameter;
}
export default Port;
