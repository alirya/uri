import Uri from "./authority/authority";

type Infer<Type> = Type extends Uri<infer As> ? As : never;

export default Infer;
