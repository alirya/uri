import ToString from '@alirya/string/to-string';
import SafeCast from '@alirya/string/safe-cast';
import UserInfo from '../user-info';

export function ToUriParameters(user ?: ToString, password ?: ToString) : string {

    let usr : string = SafeCast(user);

    let pass = SafeCast(password);

    if(pass.length !== 0) {

        usr =  usr + ':' + pass;
    }

    return usr;

}


export function ToUriParameter(userInfo : UserInfo) : string {

    return ToUriParameters(userInfo.user, userInfo.password);
}


namespace ToUri {
    export const Parameters = ToUriParameters;
    export const Parameter = ToUriParameter;
}
export default ToUri;
