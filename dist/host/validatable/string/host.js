import SentencesIs from "@dikac/t-string/message/sentences-must";
import Truncate from "@dikac/t-string/truncate";
export default function Host(result, subject = '') {
    let sentence = SentencesIs(result.valid, [subject]);
    sentence.subject.push(subject);
    sentence.comma.push('expect');
    sentence.actual.push('actual', `"${Truncate(result.value, 10)}"`);
    sentence.expect = ['valid host name'];
    return sentence.message;
}
//# sourceMappingURL=host.js.map