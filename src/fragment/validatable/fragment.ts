import StringMatch from '@alirya/string/validatable/match';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import FragmentPattern from '../pattern/fragment';
import FragmentMessage from './string/fragment';

export default function Fragment(
    fragment : string,
) : StringMatch<string, string>;

export default function Fragment<MessageT>(
    fragment : string,
    message: (result:Readonly<Value<string> & Validatable>)=>MessageT
) : StringMatch<string, MessageT>;

export default function Fragment(
    fragment : string,
    message = FragmentMessage
)  {

    return new StringMatch(fragment, new RegExp(`^${FragmentPattern.source}*$`, FragmentPattern.flags), message);
}
