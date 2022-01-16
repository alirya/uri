import Value from '@alirya/value/value';
import Validatable from '@alirya/validator/validatable/validatable';
import SentencesIs from '@alirya/string/message/sentences-must';
import Truncate from '@alirya/string/truncate';

export default function Fragment(
    result : Readonly<Value<string> & Validatable>
) : string {

    let sentence = SentencesIs(result.valid, ['value']);
    sentence.expect.push('valid fragment');

    sentence.comma.push('expect');
    sentence.actual.push('actual', `"${Truncate(result.value.toString(), 6)}"`);

    return sentence.message;
}
