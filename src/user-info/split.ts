import UserInfo from './user-info.js';
import {Required} from 'utility-types';

export default function Split(userInfo : string) : Required<UserInfo<string, string>, 'user'> {

    const parts = userInfo.split(':', 2);

    return {
        user : parts[0],
        password : parts[1] === undefined ? '' : parts[1]
    };
}
