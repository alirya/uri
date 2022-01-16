import Scheme from './validatable/scheme';
import AssertValid from '@alirya/validator/validatable/assert/valid';
import Validatable from '@alirya/validator/validatable/validatable';
import Value from '@alirya/value/value';
import StringMatch from '@alirya/string/validatable/match';
import SchemeMessage from './validatable/string/scheme';

export default function String(
    scheme : string,
) : StringMatch<string, string>;

export default function String<MessageT>(
    scheme : string,
    message: (result:Readonly<Value<string> & Validatable>)=>MessageT
) : StringMatch<string, MessageT>;

export default function String(
    scheme : string,
    message = SchemeMessage
)  : StringMatch<string, string> {

    let validatable = Scheme(scheme, message);

    AssertValid(validatable);

    return  validatable;
}


