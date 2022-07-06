import UserInfoInterface from '../user-info.js';

export default interface UserInfo<UserInfoTemplate extends UserInfoInterface = UserInfoInterface> {
    userInfo ?: UserInfoTemplate;
}
