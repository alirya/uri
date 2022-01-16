import Value from "@alirya/value/value";
import Validatable from "@alirya/validator/validatable/validatable";
import SentencesIs from "@alirya/string/message/sentences-must";
import Truncate from "@alirya/string/truncate";

export default function Port(
    result : Readonly<Value<string|number> & Validatable>
) : string {

    let sentence = SentencesIs(result.valid);
    sentence.expect.push('valid port');
    sentence.subject.push(Truncate(result.value.toString(), 6));
    return sentence.message;
}
