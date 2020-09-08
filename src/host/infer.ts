import Authority from "../authority/authority";

type Infer<Type> = Type extends Authority<any, infer As> ? As : never;

export default Infer;
