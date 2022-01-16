import SentencesIs from '@alirya/string/message/sentences-must';
import Truncate from '@alirya/string/truncate';
export default function User(result, subject = '') {
    let sentence = SentencesIs(result.valid, ['value']);
    sentence.subject.push(subject);
    sentence.comma.push('expect');
    sentence.actual.push('actual', `"${Truncate(result.value, 10)}"`);
    sentence.expect = ['valid user'];
    return sentence.message;
}
//# sourceMappingURL=user.js.map