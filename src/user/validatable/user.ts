import Dynamic from '@alirya/validator/dist/message/function/validatable-parameters';
import Pattern from '../pattern/user';
import StringMatch from '@alirya/string/validatable/match-parameters';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import UserMessage from './string/user';

export default function User(
    source : string,
) : StringMatch<string, string>;

export default function User<MessageT>(
    source : string,
    message: Dynamic<string, MessageT>
) : StringMatch<string, MessageT>;

export default function User<MessageT>(
    source : string,
    message: Dynamic<string, MessageT|string> = UserMessage
)  : StringMatch<string, string|MessageT> {

    return new StringMatch(source, new RegExp(`^${Pattern.source}*$`, Pattern.flags), message);
}
