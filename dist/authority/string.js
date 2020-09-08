// import Asserted from "@dikac/t-validator/validatable/asserted";
// import Validatable from "@dikac/t-validator/validatable/validatable";
// import Value from "@dikac/t-value/value";
// import AuthorityValidatable from "./validatable/authority";
// import Authority from "./authority";
// import Split from "./split";
// import UserInfo from "../user-info/user-info";
//
// export default class String<MessageT> extends Asserted<Validatable<string, MessageT>> implements Authority {
//
//     readonly host ?: string;
//     readonly port ?: string;
//     readonly userInfo ?: UserInfo;
//
//     constructor(
//         uri : string,
//         userInfo : (string:string)=>UserInfo,
//         message: (result:Readonly<Value<string> & Validatable>)=>MessageT
//     ) {
//
//         const match = AuthorityValidatable(uri, message);
//
//         super(match);
//
//         if(match.valid) {
//
//             Object.assign(this, Split(match.value, userInfo))
//         }
//
//     }
//
// }
//# sourceMappingURL=string.js.map