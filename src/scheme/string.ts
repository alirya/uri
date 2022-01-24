import Dynamic from '@alirya/validator/dist/message/function/validatable-parameters';
import Scheme from './validatable/scheme';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import Validatable from '@alirya/validator/validatable/validatable';
import Value from '@alirya/value/value';
import StringMatch from '@alirya/string/validatable/match-parameters';
import SchemeMessage from './validatable/string/scheme';

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

    let validatable = Scheme(scheme, message);

    AssertValid(validatable);

    return  validatable;
}


