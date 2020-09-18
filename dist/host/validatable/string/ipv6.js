import SentencesIs from "@dikac/t-string/message/sentences-must";
import Truncate from "@dikac/t-string/truncate";
export default function Ipv6(result, subject = '') {
    let sentence = SentencesIs(result.valid, [subject]);
    sentence.subject.push(subject);
    sentence.comma.push('expect');
    sentence.actual.push('actual', `"${Truncate(result.value, 20)}"`);
    sentence.expect = ['valid ipv6'];
    return sentence.message;
}
//# sourceMappingURL=ipv6.js.map