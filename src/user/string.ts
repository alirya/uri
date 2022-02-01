import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import User from './validatable/user';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import StringMatch from '@alirya/string/validatable/match-parameters';
import UserMessage from './validatable/string/user';

export default function String(
    user : string,
) : StringMatch<string, string>;

export default function String<MessageT>(
    user : string,
    message: Dynamic<string, MessageT>
) : StringMatch<string, MessageT>;

export default function String<MessageT>(
    user : string,
    message: Dynamic<string, MessageT|string> =UserMessage
)  : StringMatch<string, MessageT|string> {

    let validatable = User(user, message);

    AssertValid(validatable);

    return  validatable;
}


