import Fragment from './fragment/fragment';

type Infer<Type> = Type extends Fragment<infer As> ? As : never;

export default Infer;
