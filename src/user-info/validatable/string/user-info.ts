import TemplateParameter from '@alirya/string/dist/function/template-parameter';
import Validatable from '@alirya/validator/validatable/validatable';
import UserInfo from '../validatable';

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
  result : Readonly<UserInfo<string,
    Readonly<Validatable<string, string>>,
    Readonly<Validatable<string, string>>
    >>
) : string {

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

    for (const key of ['user', 'password']) {

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
