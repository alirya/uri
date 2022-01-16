import Authority from "./authority";
import UserInfoInterface from "../user-info/user-info";
import ToString from "@alirya/string/to-string";

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
