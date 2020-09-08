import Validatable from "@dikac/t-validator/validatable/validatable";
import UserInfo from "../../validatable/validatable";
import Sentence from "@dikac/t-string/message/sentence";

export default function UserInfo(
    result : Readonly<UserInfo<string,
        Readonly<Validatable<string, string>>,
        Readonly<Validatable<string, string>>
        >>
) : string {

    let sentence = new Sentence(result.valid);
    sentence.object = 'user info';

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
