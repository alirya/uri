import ToString from '@alirya/string/to-string';
import SafeCast from '@alirya/string/safe-cast';

export default function ToUriParameters(user ?: ToString, password ?: ToString) : string {

    let usr : string = SafeCast(user);

    let pass = SafeCast(password);

    if(pass.length !== 0) {

        usr =  usr + ':' + pass;
    }

    return usr;

}
