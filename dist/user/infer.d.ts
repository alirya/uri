import UserInfo from "../user-info/user-info";
declare type Infer<Type> = Type extends UserInfo<infer As> ? As : never;
export default Infer;
