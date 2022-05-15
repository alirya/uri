import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import PasswordParameters from './validatable/password-parameters';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import StringMatch from '@alirya/string/validatable/match-parameters';
import PasswordMessage from './validatable/string/password-parameters';

export default function EnsureParameters(
    password : string,
) : StringMatch<string, string>;

export default function EnsureParameters<MessageT>(
    password : string,
    message: Dynamic<string, MessageT>
) : StringMatch<string, MessageT>;

export default function EnsureParameters<MessageT>(
    password : string,
    message: Dynamic<string, MessageT|string> = PasswordMessage
)  : StringMatch<string, string|MessageT> {

    let validatable = PasswordParameters(password, message);

    AssertValid(validatable);

    return  validatable;
}


