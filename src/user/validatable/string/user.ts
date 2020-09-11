import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validator/validatable/validatable";
import SentencesIs from "@dikac/t-string/message/sentences-must";
import Truncate from "@dikac/t-string/truncate";

export default function User(
    result : Readonly<Value<string> & Validatable>,
    subject : string = ''
) : string {

    let sentence = SentencesIs(result.valid, ['value']);

    sentence.subject.push(subject);
    sentence.comma.push('expect');

    sentence.actual.push('actual', `"${Truncate(result.value, 10)}"`);

    sentence.expect = ['valid user'];

    return sentence.message;

}
