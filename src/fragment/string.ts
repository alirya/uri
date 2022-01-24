import Dynamic from '@alirya/validator/dist/message/function/validatable-parameters';
import Fragment from './validatable/fragment';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import Validatable from '@alirya/validator/validatable/validatable';
import Value from '@alirya/value/value';
import StringMatch from '@alirya/string/validatable/match-parameters';
import FragmentMessage from './validatable/string/fragment';

export default function String(
    fragment : string,
) : StringMatch<string, string>;

export default function String<MessageT>(
    fragment : string,
    message: Dynamic<string, MessageT>
) : StringMatch<string, MessageT>;

export default function String<MessageT>(
    fragment : string,
    message: Dynamic<string, MessageT|string> = FragmentMessage
)  : StringMatch<string, string|MessageT> {

    let validatable = Fragment(fragment, message);

    AssertValid(validatable);

    return  validatable;
}


