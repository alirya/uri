import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validator/validatable/validatable";
import SentencesIs from "@dikac/t-string/message/sentences-must";
import Truncate from "@dikac/t-string/truncate";

export default function Port(
    result : Readonly<Value<string|number> & Validatable>
) : string {

    let sentence = SentencesIs(result.valid);
    sentence.expect.push('valid port');
    sentence.subject.push(Truncate(result.value.toString(), 6));
    return sentence.message;
}
