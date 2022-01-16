import UserInfo from './user-info';
import {Required} from 'utility-types';

export default function Split(userInfo : string) : Required<UserInfo<string, string>, 'user'> {

    let parts = userInfo.split(':', 2);

    return {
        user : parts[0],
        password : parts[1] === undefined ? '' : parts[1]
    };
}
