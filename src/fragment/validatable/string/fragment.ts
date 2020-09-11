import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validator/validatable/validatable";
import SentencesIs from "@dikac/t-string/message/sentences-must";
import Truncate from "@dikac/t-string/truncate";

export default function Fragment(
    result : Readonly<Value<string> & Validatable>
) : string {

    let sentence = SentencesIs(result.valid, ['value']);
    sentence.expect.push('valid fragment');

    sentence.comma.push('expect');
    sentence.actual.push('actual', `"${Truncate(result.value.toString(), 6)}"`);

    return sentence.message;
}
