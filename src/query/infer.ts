import Uri from '../uri.js';

type Infer<Type> = Type extends Uri<any, any, any, infer As> ? As : never;

export default Infer;
