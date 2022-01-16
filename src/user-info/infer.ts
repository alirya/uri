import UserInfo from '../user-info/user-info';

type Infer<Type> = Type extends UserInfo<any, infer As> ? As : never;

export default Infer;
