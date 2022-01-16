import Uri from './authority/authority';
declare type Infer<Type> = Type extends Uri<infer As> ? As : never;
export default Infer;
//# sourceMappingURL=infer.d.ts.map