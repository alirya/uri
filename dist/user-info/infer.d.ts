import UserInfo from "../user-info/user-info";
declare type Infer<Type> = Type extends UserInfo<any, infer As> ? As : never;
export default Infer;
//# sourceMappingURL=infer.d.ts.map