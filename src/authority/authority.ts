import ToString from '@alirya/string/to-string.js';
import UserInfoInterface from '../user-info/user-info.js';

export default
   interface Authority<
       UserInfo extends UserInfoInterface = UserInfoInterface,
       Host extends ToString = ToString,
       Port extends ToString = ToString,
    >
{
   userInfo ?: UserInfo;
   port ?: Port;
   host ?: Host;
}
