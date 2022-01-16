import Validatable from "@alirya/validator/validatable/validatable";
import UserInfo from "../../validatable/validatable";
import Sentence from "@alirya/string/message/sentence";

export default function UserInfo(
    result : Readonly<UserInfo<string,
        Readonly<Validatable<string, string>>,
        Readonly<Validatable<string, string>>
        >>
) : string {

    let sentence = new Sentence(result.valid);
    sentence.expect = 'user info';

    if(result.valid) {

        return sentence.message;

    } else {

        if(result.user) {

            return result.user.message;
        }

        if(result.password) {

            return result.password.message;
        }

        return sentence.message;
    }

}
