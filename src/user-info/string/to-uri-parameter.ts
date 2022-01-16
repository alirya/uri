import ToString from "@alirya/string/to-string";
import SafeCast from "@alirya/string/safe-cast";

export default function ToUriParameter(user ?: ToString, password ?: ToString) : string {

    let result : string = SafeCast(user);

    let _password = SafeCast(password);
    if(_password.length !== 0) {

        result =  result + ':' + _password;
    }

    return result;

}
