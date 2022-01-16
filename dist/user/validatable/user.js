import Pattern from '../pattern/user';
import StringMatch from '@alirya/string/validatable/match';
import UserMessage from './string/user';
export default function User(source, message = UserMessage) {
    return new StringMatch(source, new RegExp(`^${Pattern.source}*$`, Pattern.flags), message);
}
//# sourceMappingURL=user.js.map