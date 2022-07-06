import Authority from '../authority/authority.js';

type Infer<Type> = Type extends Authority<any, infer As> ? As : never;

export default Infer;
