import StringMatch from '@alirya/string/validatable/match-parameters';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import QueryPattern from '../pattern/query';
import QueryMessage from './string/query';

export default function Query(
    query : string,
) : StringMatch<string, string>;

export default function Query<MessageT>(
    query : string,
    message: Dynamic<string, MessageT>
) : StringMatch<string, MessageT>;

export default function Query<MessageT>(
    query : string,
    message: Dynamic<string, MessageT|string> = QueryMessage
)  {

    return new StringMatch(query, new RegExp(`^${QueryPattern}*$`, QueryPattern.flags), message);
}
