import Value from "@alirya/value/value";
import Validatable from "@alirya/validator/validatable/validatable";
import SentencesIs from "@alirya/string/message/sentences-must";
import Truncate from "@alirya/string/truncate";

export default function Query(
    result : Readonly<Value<string> & Validatable>,
    subject : string = ''
) : string {

    let sentence = SentencesIs(result.valid);
    sentence.subject.push(subject);
    sentence.subject.push(Truncate(result.value, 10));
    sentence.expect = ['valid query'];

    return sentence.message;

}
