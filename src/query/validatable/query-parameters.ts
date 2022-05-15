import StringMatch from '@alirya/string/validatable/match-parameters';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import QueryPattern from '../pattern/query';
import QueryMessage from './string/query-parameters';

export default function QueryParameters(
    query : string,
) : StringMatch<string, string>;

export default function QueryParameters<MessageT>(
    query : string,
    message: Dynamic<string, MessageT>
) : StringMatch<string, MessageT>;

export default function QueryParameters<MessageT>(
    query : string,
    message: Dynamic<string, MessageT|string> = QueryMessage
)  {

    return new StringMatch(query, new RegExp(`^${QueryPattern}*$`, QueryPattern.flags), message);
}
