import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import QueryParameters from './validatable/query-parameters';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import StringMatch from '@alirya/string/validatable/match-parameters';
import QueryMessage from './validatable/string/query-parameters';

export default function EnsureParameters(
    query : string,
) : StringMatch<string, string>;

export default function EnsureParameters<MessageT>(
    query : string,
    message: Dynamic<string, MessageT>
) : StringMatch<string, MessageT>;

export default function EnsureParameters<MessageT>(
    query : string,
    message: Dynamic<string, MessageT|string> = QueryMessage
)  : StringMatch<string, MessageT|string> {

    let validatable = QueryParameters(query, message);

    AssertValid(validatable);

    return  validatable;
}


