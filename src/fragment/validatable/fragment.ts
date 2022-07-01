import {MatchParameters, MatchType} from '@alirya/string/validatable/match';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';
import FragmentPattern from '../pattern/fragment';
import FragmentMessage from './string/fragment';

export function FragmentParameters(
    fragment : string,
) : MatchType<string, string>;

export function FragmentParameters<MessageT>(
    fragment : string,
    message: ValidatableParameters<string, MessageT>
) : MatchType<string, MessageT>;

export function FragmentParameters<MessageT>(
    fragment : string,
    message: ValidatableParameters<string, MessageT|string> = FragmentMessage.Parameters
)  {

    return new MatchParameters(fragment, new RegExp(`^${FragmentPattern.source}*$`, FragmentPattern.flags), message);
}

import Value from "@alirya/value/value";

export interface FragmentArgument<MessageType> extends Value<string> {

    message ?: ValidatableParameter<string, MessageType|string>
}

export function FragmentParameter(
    {
        value,
    } : Omit<FragmentArgument<string>, 'message'>
) : MatchType<string, string>;

export function FragmentParameter<MessageT>(
    {
        value,
        message,
    } : Required<FragmentArgument<MessageT>>
) : MatchType<string, MessageT>;

export function FragmentParameter<MessageT>(
    {
        value,
        message = FragmentMessage.Parameter,
    } : Required<FragmentArgument<MessageT|string>>
)  : MatchType<string, string|MessageT> {

    return FragmentParameters(value, (value, valid) => message({value, valid}));
}


namespace Fragment {
    export const Parameters = FragmentParameters;
    export const Parameter = FragmentParameter;
}
export default Fragment;
