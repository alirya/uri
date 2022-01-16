import Fragment from "./fragment/fragment";
declare type Infer<Type> = Type extends Fragment<infer As> ? As : never;
export default Infer;
//# sourceMappingURL=infer.d.ts.map