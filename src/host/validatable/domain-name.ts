import { CallbackReturnSimple as DomainNameReturn, CallbackParameters } from '@alirya/validator/validatable/callback.js';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import DomainNameBoolean from '../boolean/domain-name.js';
import DomainNameMessage from './string/domain-name.js';
import ToString from '@alirya/string/to-string.js';
import AssertedToString from '@alirya/string/validatable/asserted-to-string.js';

export function DomainNameParameters(
    string : string,
) : DomainNameReturn<string, string, string> & ToString ;

export function DomainNameParameters<MessageType>(
    string : string,
    message: ValidatableParameters<string, MessageType>
) : DomainNameReturn<string, string, MessageType> & ToString ;

export function DomainNameParameters<MessageType>(
    string : string,
    message : ValidatableParameters<string, string|MessageType>= DomainNameMessage.Parameters
) {
    return AssertedToString(CallbackParameters<string, string>(string, DomainNameBoolean, message));
}



export interface DomainNameArgument<MessageType> {
    string : string;
    message ?: ValidatableParameter<string, MessageType>;
}

export function DomainNameParameter(
    {
        string,
    } : DomainNameArgument<string>
) : DomainNameReturn<string, string, string> & ToString;

export function DomainNameParameter<MessageType>(
    {
        string,
        message,
    } : DomainNameArgument<MessageType>

) : DomainNameReturn<string, string, MessageType> & ToString;

export function DomainNameParameter<MessageType>(
    {
        string,
        message = DomainNameMessage.Parameter,
    } : DomainNameArgument<string|MessageType>

) : DomainNameReturn<string, string, string|MessageType> & ToString  {

    return DomainNameParameters(string, (value, valid) => message({value, valid}));
}



namespace DomainName {
    export const Parameters = DomainNameParameters;
    export const Parameter = DomainNameParameter;
    export type Argument<MessageType> = DomainNameArgument<MessageType>;
}
export default DomainName;
