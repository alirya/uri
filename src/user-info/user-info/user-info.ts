import UserInfoInterface from "../user-info";

export default interface UserInfo<UserInfoTemplate extends UserInfoInterface = UserInfoInterface> {
    userInfo ?: UserInfoTemplate;
}
