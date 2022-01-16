import Validatable from '@alirya/validator/validatable/validatable';
import AuthorityValidatable from '../../validatable/validatable';
import Sentence from '@alirya/string/message/sentence';
import UserInfoValidatable from '../../../user-info/validatable/validatable';

export default function UserInfo(
    result : Readonly<AuthorityValidatable<string, UserInfoValidatable<string>, Readonly<Validatable<string, string>>, Readonly<Validatable<string, string>>>>
) : string {

    let sentence = new Sentence(result.valid);
    sentence.expect = 'authority';

    if(result.valid) {

        return sentence.message;

    } else {

        if(result.host) {

            return result.host.message;
        }

        if(result.port) {

            return result.port.message;
        }

        if(result.userInfo) {

            return result.userInfo.message;
        }

        return sentence.message;
    }

}
