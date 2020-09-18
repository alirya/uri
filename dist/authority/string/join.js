import UserInfoJoin from "../../user-info/string/to-uri";
export default function Join(authority, userInfoToString = UserInfoJoin) {
    let result = '';
    if (authority.host !== undefined) {
        const host = authority.host.toString();
        if (host.length === 0) {
            return result;
        }
        else {
            result = host;
        }
    }
    else {
        return result;
    }
    if (authority.userInfo !== undefined) {
        const userInfo = userInfoToString(authority.userInfo);
        if (userInfo.length !== 0) {
            result = userInfo + '@' + result;
        }
    }
    if (authority.port !== undefined) {
        const port = authority.port.toString();
        if (port.length !== 0) {
            result = result + ':' + port;
        }
    }
    return result;
}
//# sourceMappingURL=join.js.map