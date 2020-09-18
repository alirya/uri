import UserInfo from "./validatable/user-info";
import UserInfoMessage from "./validatable/string/user-info";
import AssertValid from "@dikac/t-validator/validatable/assert/valid";
export default function String(value, message = UserInfoMessage) {
    let userInfo = new UserInfo(value, message);
    AssertValid(userInfo);
    return userInfo;
}
//# sourceMappingURL=string.js.map