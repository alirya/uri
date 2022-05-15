import StringMatch from '@alirya/string/validatable/match-parameters';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import FragmentPattern from '../pattern/fragment';
import FragmentMessage from './string/fragment-parameters';

export default function FragmentParameters(
    fragment : string,
) : StringMatch<string, string>;

export default function FragmentParameters<MessageT>(
    fragment : string,
    message: Dynamic<string, MessageT>
) : StringMatch<string, MessageT>;

export default function FragmentParameters<MessageT>(
    fragment : string,
    message: Dynamic<string, MessageT|string> = FragmentMessage
)  {

    return new StringMatch(fragment, new RegExp(`^${FragmentPattern.source}*$`, FragmentPattern.flags), message);
}
