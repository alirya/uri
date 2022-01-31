import StringMatch from '@alirya/string/validatable/match-parameters';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import SchemePattern from '../pattern/scheme';
import SchemeMessage from './string/scheme';

export default function Scheme(
    scheme : string,
) : StringMatch<string, string>;

export default function Scheme<MessageT>(
    scheme : string,
    message: Dynamic<string, MessageT>
) : StringMatch<string, MessageT>;

export default function Scheme<MessageT>(
    scheme : string,
    message: Dynamic<string, MessageT|string> = SchemeMessage
)  : StringMatch<string, string|MessageT> {

    return new StringMatch(scheme, new RegExp(`^${SchemePattern.source}*$`, SchemePattern.flags), message);
}
