import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import Password from './validatable/password';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import StringMatch from '@alirya/string/validatable/match-parameters';
import PasswordMessage from './validatable/string/password';

export default function String(
    password : string,
) : StringMatch<string, string>;

export default function String<MessageT>(
    password : string,
    message: Dynamic<string, MessageT>
) : StringMatch<string, MessageT>;

export default function String<MessageT>(
    password : string,
    message: Dynamic<string, MessageT|string> = PasswordMessage
)  : StringMatch<string, string|MessageT> {

    let validatable = Password(password, message);

    AssertValid(validatable);

    return  validatable;
}


