import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import Pattern from '../pattern/password';
import StringMatch from '@alirya/string/validatable/match-parameters';
import QueryMessage from './string/password-parameters';

export default function PasswordParameters(
    source : string,
) : StringMatch<string, string>;

export default function PasswordParameters<MessageT>(
    source : string,
    message: Dynamic<string, MessageT>
) : StringMatch<string, MessageT>;

export default function PasswordParameters<MessageT>(
    source : string,
    message: Dynamic<string, MessageT|string> = QueryMessage
)  {

    return new StringMatch(source, new RegExp(`^${Pattern.source}*$`, Pattern.flags), message);
}
