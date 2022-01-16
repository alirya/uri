import Callback from '@alirya/string/validatable/callback';
import HostBoolean from '../boolean/host';
import HostMessage from './string/host';
export default function Host(string, message = HostMessage) {
    return new Callback(string, HostBoolean, message);
}
//# sourceMappingURL=host.js.map