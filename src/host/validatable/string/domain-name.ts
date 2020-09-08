import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validator/validatable/validatable";
import SentencesIs from "@dikac/t-string/message/sentences-is";
import Truncate from "@dikac/t-string/truncate";

export default function DomainName(
    result : Readonly<Value<string> & Validatable>,
    subject : string = ''
) : string {

    let sentence = SentencesIs(result.valid);
    sentence.subject.push(subject);
    sentence.subject.push(Truncate(result.value, 20));
    sentence.object = ['valid domain name'];

    return sentence.message;

}
