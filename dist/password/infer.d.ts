import Password from "./password/password";
declare type Infer<Type> = Type extends Password<infer As> ? As : never;
export default Infer;
