import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validator/validatable/validatable";
import SentencesIs from "@dikac/t-string/message/sentences-must";
import Truncate from "@dikac/t-string/truncate";

export default function DomainName(
    result : Readonly<Value<string> & Validatable>,
    subject : string = ''
) : string {

    let sentence = SentencesIs(result.valid, [subject]);

    sentence.subject.push(subject);
    sentence.comma.push('expect');

    sentence.actual.push('actual', `"${Truncate(result.value, 20)}"`);

    sentence.expect = ['valid domain name'];

    return sentence.message;

}
