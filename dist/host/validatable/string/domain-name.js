import SentencesIs from '@alirya/string/message/sentences-must';
import Truncate from '@alirya/string/truncate';
export default function DomainName(result, subject = '') {
    let sentence = SentencesIs(result.valid, [subject]);
    sentence.subject.push(subject);
    sentence.comma.push('expect');
    sentence.actual.push('actual', `"${Truncate(result.value, 20)}"`);
    sentence.expect = ['valid domain name'];
    return sentence.message;
}
//# sourceMappingURL=domain-name.js.map