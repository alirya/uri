import ToString from "@dikac/t-string/to-string";
import UserInfoInterface from "../user-info/user-info";

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
