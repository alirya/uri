import Uri from './path/path.js';

type Infer<Type> = Type extends Uri<infer As> ? As : never;

export default Infer;
