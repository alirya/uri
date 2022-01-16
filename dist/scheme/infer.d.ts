import Scheme from "./scheme/scheme";
declare type Infer<Type> = Type extends Scheme<infer As> ? As : never;
export default Infer;
//# sourceMappingURL=infer.d.ts.map