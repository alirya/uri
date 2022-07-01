import {ValidatableParameters} from '@alirya/validator/message/function/validatable';
import {SchemeParameters} from './validatable/scheme';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import {MatchType} from '@alirya/string/validatable/match';
import SchemeMessage from './validatable/string/scheme';

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

    let validatable = SchemeParameters(scheme, message);

    AssertValid(validatable);

    return  validatable;
}


