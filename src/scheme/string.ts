import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import SchemeParameters from './validatable/scheme-parameters';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import StringMatch from '@alirya/string/validatable/match-parameters';
import SchemeMessage from './validatable/string/scheme-parameters';

export default function String(
    scheme : string,
) : StringMatch<string, string>;

export default function String<MessageT>(
    scheme : string,
    message: Dynamic<string, MessageT>
) : StringMatch<string, MessageT>;

export default function String<MessageT>(
    scheme : string,
    message: Dynamic<string, MessageT|string> = SchemeMessage
)  : StringMatch<string, string|MessageT> {

    let validatable = SchemeParameters(scheme, message);

    AssertValid(validatable);

    return  validatable;
}


