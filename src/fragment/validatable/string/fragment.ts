import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validator/validatable/validatable";
import SentencesIs from "@dikac/t-string/message/sentences-is";
import Truncate from "@dikac/t-string/truncate";

export default function Fragment(
    result : Readonly<Value<string> & Validatable>
) : string {

    let sentence = SentencesIs(result.valid);
    sentence.object.push('valid fragment');
    sentence.subject.push(Truncate(result.value.toString(), 6));
    return sentence.message;
}
