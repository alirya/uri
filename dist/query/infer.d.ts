import Uri from '../uri';
declare type Infer<Type> = Type extends Uri<any, any, any, infer As> ? As : never;
export default Infer;
//# sourceMappingURL=infer.d.ts.map