import {ValidatableParameters} from '@axiona/validator/message/function/validatable.js';
import {SchemeParameters} from './validatable/scheme.js';
import AssertValid from '@axiona/validator/validatable/assert/valid.js';
import {MatchType} from '@axiona/string/validatable/match.js';
import SchemeMessage from './validatable/string/scheme.js';

export default function String(
    scheme : string,
) : MatchType<string, string>;

export default function String<MessageT>(
    scheme : string,
    message: ValidatableParameters<string, MessageT>
) : MatchType<string, MessageT>;

export default function String<MessageT>(
    scheme : string,
    message: ValidatableParameters<string, MessageT|string> = SchemeMessage.Parameters
)  : MatchType<string, string|MessageT> {

    const validatable = SchemeParameters(scheme, message);

    AssertValid(validatable);

    return  validatable;
}


