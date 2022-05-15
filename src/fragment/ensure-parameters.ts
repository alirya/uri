import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import FragmentParameters from './validatable/fragment-parameters';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import StringMatch from '@alirya/string/validatable/match-parameters';
import FragmentMessage from './validatable/string/fragment-parameters';

export default function EnsureParameters(
    fragment : string,
) : StringMatch<string, string>;

export default function EnsureParameters<MessageT>(
    fragment : string,
    message: Dynamic<string, MessageT>
) : StringMatch<string, MessageT>;

export default function EnsureParameters<MessageT>(
    fragment : string,
    message: Dynamic<string, MessageT|string> = FragmentMessage
)  : StringMatch<string, string|MessageT> {

    let validatable = FragmentParameters(fragment, message);

    AssertValid(validatable);

    return  validatable;
}


