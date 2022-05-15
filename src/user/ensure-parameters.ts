import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import UserParameters from './validatable/user-parameters';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import StringMatch from '@alirya/string/validatable/match-parameters';
import UserMessage from './validatable/string/user-parameters';

export default function EnsureParameters(
    user : string,
) : StringMatch<string, string>;

export default function EnsureParameters<MessageT>(
    user : string,
    message: Dynamic<string, MessageT>
) : StringMatch<string, MessageT>;

export default function EnsureParameters<MessageT>(
    user : string,
    message: Dynamic<string, MessageT|string, [RegExp]> = (value, valid, pattern) => UserMessage(value, valid)
)  : StringMatch<string, MessageT|string> {

    let validatable = UserParameters(user, message);

    AssertValid(validatable);

    return validatable;
}


