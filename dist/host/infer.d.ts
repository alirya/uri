import Authority from "../authority/authority";
declare type Infer<Type> = Type extends Authority<any, infer As> ? As : never;
export default Infer;
//# sourceMappingURL=infer.d.ts.map