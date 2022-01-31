import TemplateParameter from '@alirya/string/function/template-parameter';
import Validatable from '@alirya/validator/validatable/validatable';
import AuthorityValidatable from '../../validatable/validatable';
import UserInfoValidatable from '../../../user-info/validatable/validatable';

type MessageParam = Record<'value'|'predicate'|'stop'|'part'|'end', string>;

const message = TemplateParameter<MessageParam>({
  string :'{value} {predicate} user info{stop} {part}{end}',
  callback :s=>s.trim()
});

const part = TemplateParameter({
  string :'{part}:{message}',
  callback :s=>s.trim()
});


export default function UserInfo(
    result : Readonly<AuthorityValidatable<string, UserInfoValidatable<string>, Readonly<Validatable<string, string>>, Readonly<Validatable<string, string>>>>
) : string {
    //
    // let sentence = new Sentence(result.valid);
    // sentence.expect = 'authority';
    //
    // if(result.valid) {
    //
    //     return sentence.message;
    //
    // } else {
    //
    //     if(result.host) {
    //
    //         return result.host.message;
    //     }
    //
    //     if(result.port) {
    //
    //         return result.port.message;
    //     }
    //
    //     if(result.userInfo) {
    //
    //         return result.userInfo.message;
    //     }
    //
    //     return sentence.message;
    // }


  if(result.valid) {

    return message({
      predicate : 'is valid',
      stop:'.'
    });

  } else {

    const parameters : Partial<MessageParam>= {
      predicate : 'must valid',
      stop:'.',
      end:',',
    };

    const parts : string[] = [];

    for (const key of ['host', 'port', 'userInfo']) {

      if(result[key]) {

        parts.push(part({
          part: 'user',
          message : result[key].message
        }));
      }
    }

    parameters.part = parts.join('');

    return message(parameters);
  }
}
