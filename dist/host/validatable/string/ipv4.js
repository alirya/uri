import SentencesIs from "@alirya/string/message/sentences-must";
import Truncate from "@alirya/string/truncate";
export default function Ipv4(result, subject = '') {
    let sentence = SentencesIs(result.valid, [subject]);
    sentence.subject.push(subject);
    sentence.comma.push('expect');
    sentence.actual.push('actual', `"${Truncate(result.value, 10)}"`);
    sentence.expect = ['valid ipv4'];
    return sentence.message;
}
//# sourceMappingURL=ipv4.js.map