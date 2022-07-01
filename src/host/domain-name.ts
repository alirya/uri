import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';
import { CallbackReturnSimple as DomainNameReturn } from '@alirya/validator/validatable/callback';
import DomainNameValidatable from './validatable/domain-name';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import DomainNameMessage from './validatable/string/domain-name';

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
    let scheme = DomainNameValidatable.Parameters(string, message);

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
