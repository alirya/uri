import UserInfo from '../user-info';
import ToUriParameters from './to-uri-parameters';

export default function Join(userInfo : UserInfo) : string {

    return ToUriParameters(userInfo.user, userInfo.password);

}
