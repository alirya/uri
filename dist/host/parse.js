// import Match from "./validatable/host";
// import ToString from "@dikac/t-string/to-string";
// import Asserted from "@dikac/t-validator/validatable/asserted";
// import Value from "@dikac/t-value/value";
// import Validatable from "@dikac/t-validator/validatable/validatable";
//
// export default class Parse<MessageT> extends Asserted<Validatable<string, MessageT>> implements ToString {
//
//     constructor(uri : string, message: (result:Readonly<Value<string> & Validatable>)=>MessageT) {
//
//         let split = uri.split('?', 2)[1];
//
//         if(split) {
//
//             uri = split.split('#', 1)[0];
//         }
//
//         const match = Match(uri, message);
//
//         super(match);
//
//     }
//
//     toString(): string {
//
//         return this.value;
//     }
//
// }
//# sourceMappingURL=parse.js.map