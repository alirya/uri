import UserInfo from '../../user-info/user-info.js';
import UserInfoJoin from '../../user-info/string/to-uri.js';
import Authority from '../authority.js';

export default function Join(
    authority : Authority,
    userInfoToString : (userInfo : UserInfo) => string = UserInfoJoin.Parameter
) : string {

    let result  = '';

    if(authority.host !== undefined) {

        const host = authority.host.toString();

        if(host.length === 0) {

            return result;

        } else {

            result = host;
        }

    } else {

        return result;
    }

    if(authority.userInfo !== undefined) {

        const userInfo = userInfoToString(authority.userInfo);

        if(userInfo.length !== 0) {

            result = userInfo + '@' + result;
        }
    }

    if(authority.port !== undefined) {

        const port = authority.port.toString();

        if(port.length !== 0) {

            result = result + ':' + port;
        }
    }


    return result;
}
