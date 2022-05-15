import StringMatch from '@alirya/string/validatable/match-parameters';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import SchemePattern from '../pattern/scheme';
import SchemeMessage from './string/scheme-parameters';

export default function SchemeParameters(
    scheme : string,
) : StringMatch<string, string>;

export default function SchemeParameters<MessageT>(
    scheme : string,
    message: Dynamic<string, MessageT, [RegExp]>
) : StringMatch<string, MessageT>;

export default function SchemeParameters<MessageT>(
    scheme : string,
    message: Dynamic<string, MessageT|string, [RegExp]> = (value, valid, pattern) => SchemeMessage(value, valid)
)  : StringMatch<string, string|MessageT> {

    return new StringMatch(
        scheme,
        new RegExp(`^${SchemePattern.source}*$`, SchemePattern.flags),
        message
    );
}
