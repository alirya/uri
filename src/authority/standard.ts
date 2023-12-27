import Authority from './authority.js';
import UserInfoInterface from '../user-info/user-info.js';
import ToString from '@axiona/string/to-string.js';

export default
    class Standard<
        UserInfo extends UserInfoInterface = UserInfoInterface,
        Host extends ToString = ToString,
        Port extends ToString = ToString,
    >
    implements Authority<UserInfo, Host, Port>
{

    constructor(
        public userInfo ?: UserInfo,
        public host ?: Host,
        public port ?: Port
    ) {

    }

}
