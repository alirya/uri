import UserInfo from "../user-info";
import ToUriParameter from "./to-uri-parameter";

export default function Join(userInfo : UserInfo) : string {

    return ToUriParameter(userInfo.user, userInfo.password);

}
