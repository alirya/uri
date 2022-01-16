import Sentence from '@alirya/string/message/sentence';
export default function UserInfo(result) {
    let sentence = new Sentence(result.valid);
    sentence.expect = 'authority';
    if (result.valid) {
        return sentence.message;
    }
    else {
        if (result.host) {
            return result.host.message;
        }
        if (result.port) {
            return result.port.message;
        }
        if (result.userInfo) {
            return result.userInfo.message;
        }
        return sentence.message;
    }
}
//# sourceMappingURL=authority.js.map