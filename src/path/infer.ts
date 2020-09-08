import Uri from "./path/path";

type Infer<Type> = Type extends Uri<infer As> ? As : never;

export default Infer;
