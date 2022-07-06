import Scheme from './scheme/scheme.js';

type Infer<Type> = Type extends Scheme<infer As> ? As : never;

export default Infer;
