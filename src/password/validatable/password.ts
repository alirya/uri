import Dynamic from '@alirya/validator/dist/message/function/validatable-parameters';
import Pattern from '../pattern/password';
import StringMatch from '@alirya/string/validatable/match-parameters';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import QueryMessage from './string/password';

export default function Password(
    source : string,
) : StringMatch<string, string>;

export default function Password<MessageT>(
    source : string,
    message: Dynamic<string, MessageT>
) : StringMatch<string, MessageT>;

export default function Password<MessageT>(
    source : string,
    message: Dynamic<string, MessageT|string> = QueryMessage
)  {

    return new StringMatch(source, new RegExp(`^${Pattern.source}*$`, Pattern.flags), message);
}
