import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import Pattern from '../pattern/user';
import StringMatch from '@alirya/string/validatable/match-parameters';
import UserMessage from './string/user-parameters';

export default function UserParameters(
    source : string,
) : StringMatch<string, string>;

export default function UserParameters<MessageT>(
    source : string,
    message: Dynamic<string, MessageT, [RegExp]>
) : StringMatch<string, MessageT>;

export default function UserParameters<MessageT>(
    source : string,
    message: Dynamic<string, MessageT|string, [RegExp]> = (value, valid, pattern) => UserMessage(value, valid)
)  : StringMatch<string, string|MessageT> {

    return new StringMatch(
        source,
        new RegExp(`^${Pattern.source}*$`, Pattern.flags),
        message
    );
}
