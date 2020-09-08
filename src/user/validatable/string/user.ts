import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validator/validatable/validatable";
import SentencesIs from "@dikac/t-string/message/sentences-is";
import Truncate from "@dikac/t-string/truncate";

export default function User(
    result : Readonly<Value<string> & Validatable>,
    subject : string = ''
) : string {

    let sentence = SentencesIs(result.valid);
    sentence.subject.push(subject);
    sentence.subject.push(Truncate(result.value, 10));
    sentence.object = ['valid user'];

    return sentence.message;

}
