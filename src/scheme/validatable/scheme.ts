import StringMatch from '@alirya/string/validatable/match';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import SchemePattern from '../pattern/scheme';
import SchemeMessage from './string/scheme';

export default function Scheme(
    scheme : string,
) : StringMatch<string, string>;

export default function Scheme<MessageT>(
    scheme : string,
    message: (result:Readonly<Value<string> & Validatable>)=>MessageT
) : StringMatch<string, MessageT>;

export default function Scheme(
    scheme : string,
    message = SchemeMessage
)  : StringMatch<string, string> {

    return new StringMatch(scheme, new RegExp(`^${SchemePattern.source}*$`, SchemePattern.flags), message);
}
