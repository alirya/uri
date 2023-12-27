import {ValidatableParameters, ValidatableParameter} from '@axiona/validator/message/function/validatable.js';
import { CallbackReturnSimple as DomainNameReturn } from '@axiona/validator/validatable/callback.js';
import DomainNameValidatable from './validatable/domain-name.js';
import AssertValid from '@axiona/validator/validatable/assert/valid.js';
import DomainNameMessage from './validatable/string/domain-name.js';

export function DomainNameParameters(
    string : string,
) : DomainNameReturn<string, string, string>;
export function DomainNameParameters<MessageType>(
    string : string,
    message: ValidatableParameters<string, MessageType>
) : DomainNameReturn<string, string, MessageType>;
export function DomainNameParameters<MessageType>(
    string : string,
    message : ValidatableParameters<string, string|MessageType>= DomainNameMessage.Parameters
) {
    const scheme = DomainNameValidatable.Parameters(string, message);

    AssertValid(scheme);

    return  scheme;
}



export interface DomainNameArgument<MessageType> {
    string : string;
    message ?: ValidatableParameter<string, MessageType>;
}

export function DomainNameParameter(
    {
        string,
    } : DomainNameArgument<string>
) : DomainNameReturn<string, string, string>;

export function DomainNameParameter<MessageType>(
    {
        string,
        message,
    } : DomainNameArgument<MessageType>

) : DomainNameReturn<string, string, MessageType>;

export function DomainNameParameter<MessageType>(
    {
        string,
        message = DomainNameMessage.Parameter,
    } : DomainNameArgument<string|MessageType>

) : DomainNameReturn<string, string, string|MessageType> {

    return DomainNameParameters(string, (value, valid) => message({value, valid}));
}


namespace DomainName {
    export const Parameters = DomainNameParameters;
    export const Parameter = DomainNameParameter;
    export type Argument<MessageType> = DomainNameArgument<MessageType>;
}
export default DomainName;
