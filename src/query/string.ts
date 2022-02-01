import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import Query from './validatable/query';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import StringMatch from '@alirya/string/validatable/match-parameters';
import QueryMessage from './validatable/string/query';

export default function String(
    query : string,
) : StringMatch<string, string>;

export default function String<MessageT>(
    query : string,
    message: Dynamic<string, MessageT>
) : StringMatch<string, MessageT>;

export default function String<MessageT>(
    query : string,
    message: Dynamic<string, MessageT|string> = QueryMessage
)  : StringMatch<string, MessageT|string> {

    let validatable = Query(query, message);

    AssertValid(validatable);

    return  validatable;
}


