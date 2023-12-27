import {MatchParameters, MatchType as SchemeReturn} from '@axiona/string/validatable/match.js';
import {ValidatableParameters, ValidatableParameter} from '@axiona/validator/message/function/validatable.js';
import SchemePattern from '../pattern/scheme.js';
import SchemeMessage from './string/scheme.js';
import Value from '@axiona/value/value.js';
import Validatable from '@axiona/validator/value/validatable.js';
import Pattern from '@axiona/string/pattern/pattern/pattern.js';

export function SchemeParameters(
    scheme : string,
) : SchemeReturn<string, string>;

export function SchemeParameters<MessageT>(
    scheme : string,
    message: ValidatableParameters<string, MessageT, [RegExp]>
) : SchemeReturn<string, MessageT>;

export function SchemeParameters<MessageT>(
    scheme : string,
    message: ValidatableParameters<string, MessageT|string, [RegExp]> = (value, valid, pattern) => SchemeMessage.Parameters(value, valid)
)  : SchemeReturn<string, string|MessageT> {

    return new MatchParameters(
        scheme,
        new RegExp(`^${SchemePattern.source}*$`, SchemePattern.flags),
        message
    );
}

export {SchemeReturn};

export interface SchemeArgument<MessageType> extends Value<string> {

    message ?: ValidatableParameter<string, MessageType|string, Validatable<string> & Pattern>;
}

export function SchemeParameter(
    {
        value,
    } : Omit<SchemeArgument<string>, 'message'>
) : SchemeReturn<string, string>;

export function SchemeParameter<MessageT>(
    {
        value,
        message,
    } : Required<SchemeArgument<MessageT>>
) : SchemeReturn<string, MessageT>;

export function SchemeParameter<MessageT>(
    {
        value,
        message = SchemeMessage.Parameter,
    } : Required<SchemeArgument<MessageT|string>>
)  : SchemeReturn<string, string|MessageT> {

    return SchemeParameters(
        value,
        (value, valid, pattern) => message({value, valid, pattern})
    );
}


namespace Scheme {
    export const Parameters = SchemeParameters;
    export const Parameter = SchemeParameter;
    export type Argument<MessageType> = SchemeArgument<MessageType>;
}
export default Scheme;
